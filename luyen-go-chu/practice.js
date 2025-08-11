// =================================================================
// PHẦN CẤU HÌNH
// =================================================================

// QUAN TRỌNG: Dán URL của Google Apps Script của bạn vào đây.
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbydBN4Jidb1wMD4uWVlwyBnQQQMLh0ycd28eLnI1HoEhbnupiBDkwpAjn5SheFPe8le/exec';

// =================================================================
// TRUY XUẤT CÁC THÀNH PHẦN GIAO DIỆN (DOM Elements)
// =================================================================

const appContainer = document.getElementById('app-container');
const loadingState = document.getElementById('loading-state');
const lessonTitleEl = document.getElementById('lesson-title');
const textToTypeEl = document.getElementById('text-to-type');
const typingInputEl = document.getElementById('typing-input');
const wpmEl = document.getElementById('wpm');
const accuracyEl = document.getElementById('accuracy');
const timerEl = document.getElementById('timer');
const resetBtn = document.getElementById('reset-btn');
const saveBtn = document.getElementById('save-btn');
const saveStatusEl = document.getElementById('save-status');
const nameModal = document.getElementById('name-modal');
const nameForm = document.getElementById('name-form');
const studentNameInput = document.getElementById('student-name-input');
const welcomeMessageEl = document.getElementById('welcome-message');
const lessonSelectorContainer = document.getElementById('lesson-selector-container');

// =================================================================
// BIẾN TRẠNG THÁI CỦA ỨNG DỤNG (Application State)
// =================================================================

let typingLessons = {};
let state = {
    studentName: localStorage.getItem('studentName') || '',
    text: '',
    input: '',
    timerInterval: null,
    errors: 0,
    startTime: null,
    endTime: null,
    totalChars: 0,
    lessonId: null,
    lessonTitle: ''
};

// =================================================================
// TẢI DỮ LIỆU VÀ KHỞI TẠO ỨNG DỤNG
// =================================================================

async function loadLessonsAndInit() {
    showLoadingState(true, 'Đang tải dữ liệu bài học...');
    
    if (!state.studentName && nameModal) {
        nameModal.showModal();
    } else if (welcomeMessageEl) {
        welcomeMessageEl.textContent = `Xin chào, ${state.studentName}!`;
    }

    try {
        const cachedLessons = localStorage.getItem('typingLessons');
        if (cachedLessons) {
            console.log("Tải bài học từ bộ nhớ đệm (Cache)...");
            typingLessons = JSON.parse(cachedLessons);
        } else {
            console.log("Lần đầu tải bài học từ Google Script...");
            const response = await fetch(`${SCRIPT_URL}?action=getLessons`);
            if (!response.ok) throw new Error(`Lỗi mạng: ${response.statusText}`);
            typingLessons = await response.json();
            localStorage.setItem('typingLessons', JSON.stringify(typingLessons));
            console.log("Đã lưu bài học vào bộ nhớ đệm.");
        }

        populateLessonSelector();
        const urlParams = new URLSearchParams(window.location.search);
        const lessonFromUrl = urlParams.get('lesson');
        resetGame(lessonFromUrl || Object.keys(typingLessons)[0]);

    } catch (error) {
        console.error("Không thể tải dữ liệu bài học:", error);
        textToTypeEl.innerHTML = `<span class="error-message">Lỗi: Không thể tải dữ liệu. Vui lòng kiểm tra lại đường truyền và thử lại.</span>`;
    } finally {
        showLoadingState(false);
    }
}

function populateLessonSelector() {
    lessonSelectorContainer.innerHTML = '';
    for (const lessonId in typingLessons) {
        const button = document.createElement('button');
        button.textContent = typingLessons[lessonId].title;
        button.onclick = () => resetGame(lessonId);
        lessonSelectorContainer.appendChild(button);
    }
}

// =================================================================
// LOGIC CỐT LÕI CỦA TRÒ CHƠI (Core Game Logic)
// =================================================================

/**
 * [⭐ NÂNG CẤP] Bắt đầu hoặc khởi động lại trò chơi với một bài học cụ thể
 * @param {string} lessonId - ID của bài học để bắt đầu
 */
function resetGame(lessonId) {
    if (state.timerInterval) clearInterval(state.timerInterval);

    // [SỬA LỖI] Xử lý trường hợp không tìm thấy bài học, hiển thị thông báo cho người dùng.
    if (!lessonId || !typingLessons[lessonId]) {
        console.error("Yêu cầu bài học không hợp lệ. lessonId:", lessonId);
        lessonTitleEl.textContent = 'Lỗi';
        textToTypeEl.innerHTML = `<span class="error-message">Không tìm thấy bài học được yêu cầu. Vui lòng chọn một bài học từ danh sách.</span>`;
        typingInputEl.value = '';
        typingInputEl.disabled = true;
        return;
    }

    const lesson = typingLessons[lessonId];
    state = {
        ...state,
        text: lesson.text,
        input: '',
        timerInterval: null,
        errors: 0,
        startTime: null,
        endTime: null,
        totalChars: lesson.text.length,
        lessonId: lessonId,
        lessonTitle: lesson.title
    };

    lessonTitleEl.textContent = state.lessonTitle;
    typingInputEl.value = '';
    typingInputEl.disabled = false;
    typingInputEl.focus();
    renderTextToType();
    
    timerEl.textContent = '0:00';
    wpmEl.textContent = '0';
    accuracyEl.textContent = '100%';
    saveBtn.disabled = true;
    saveStatusEl.textContent = '';
}

/**
 * [⭐ NÂNG CẤP] Hiển thị văn bản cần gõ với màu sắc và khoảng cách rõ ràng hơn
 */
function renderTextToType() {
    textToTypeEl.innerHTML = '';
    const textChars = state.text.split('');
    const inputChars = state.input.split('');

    textChars.forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;

        // Thêm class đặc biệt cho ký tự dấu cách để tăng khoảng cách
        if (char === ' ') {
            span.classList.add('word-separator');
        }

        if (inputChars[index] == null) {
            span.classList.add('char-pending');
        } else if (inputChars[index] === char) {
            span.classList.add('char-correct');
        } else {
            span.classList.add('char-incorrect');
            // Nếu ký tự lẽ ra là dấu cách nhưng gõ sai
            if (char === ' ') {
                span.innerHTML = '&nbsp;'; // Để đảm bảo background-color hiển thị
                span.classList.add('incorrect-space');
            }
        }
        textToTypeEl.appendChild(span);
    });
}


function handleInput() {
    state.input = typingInputEl.value;
    
    if (!state.startTime && state.input.length > 0) {
        state.startTime = new Date();
        state.timerInterval = setInterval(updateTimer, 1000);
    }

    renderTextToType();
    updateMetrics();

    if (state.input.length === state.text.length) {
        state.endTime = new Date();
        clearInterval(state.timerInterval);
        typingInputEl.disabled = true;
        saveBtn.disabled = false;
    }
}

function updateMetrics() {
    if (!state.startTime) return;
    const currentTime = new Date();
    const elapsedTime = (currentTime - state.startTime) / 1000 / 60; // phút
    if (elapsedTime === 0) return;

    const typedChars = state.input.length;
    const wordsTyped = typedChars / 5;
    const wpm = Math.round(wordsTyped / elapsedTime);

    let errors = 0;
    state.input.split('').forEach((char, index) => {
        if (char !== state.text[index]) {
            errors++;
        }
    });
    state.errors = errors;

    const accuracy = typedChars > 0 ? Math.round(((typedChars - errors) / typedChars) * 100) : 100;
    
    wpmEl.textContent = wpm;
    accuracyEl.textContent = `${accuracy}%`;
}

function updateTimer() {
    const currentTime = new Date();
    const elapsedTime = Math.floor((currentTime - state.startTime) / 1000); // giây
    const minutes = Math.floor(elapsedTime / 60);
    const seconds = elapsedTime % 60;
    timerEl.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

async function handleSave() {
    saveBtn.disabled = true;
    saveStatusEl.textContent = 'Đang lưu...';

    const duration = (state.endTime - state.startTime) / 1000;
    const wpm = wpmEl.textContent;
    const accuracy = accuracyEl.textContent.replace('%', '');

    const dataToSave = {
        studentName: state.studentName,
        lessonId: state.lessonId,
        lessonTitle: state.lessonTitle,
        wpm: wpm,
        accuracy: accuracy,
        duration: duration,
        errors: state.errors
    };

    try {
        const response = await fetch(`${SCRIPT_URL}?action=saveResult`, {
            method: 'POST',
            body: JSON.stringify(dataToSave),
            headers: { 'Content-Type': 'application/json' },
        });
        const result = await response.json();
        if (result.success) {
            saveStatusEl.textContent = 'Đã lưu thành công!';
            saveStatusEl.style.color = 'green';
        } else {
            throw new Error(result.message || 'Lưu thất bại.');
        }
    } catch (error) {
        console.error('Lỗi khi lưu kết quả:', error);
        saveStatusEl.textContent = 'Lỗi! Không thể lưu.';
        saveStatusEl.style.color = 'red';
        saveBtn.disabled = false;
    }
}

function showLoadingState(isLoading, message = '') {
    if (loadingState) {
        loadingState.style.display = isLoading ? 'flex' : 'none';
        loadingState.textContent = message;
    }
    if (appContainer) {
       appContainer.style.display = isLoading ? 'none' : 'block';
    }
}

// =================================================================
// CÁC BỘ LẮNG NGHE SỰ KIỆN (Event Listeners)
// =================================================================

function setupEventListeners() {
    nameForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = studentNameInput.value.trim();
        if (name) {
            state.studentName = name;
            localStorage.setItem('studentName', name);
            welcomeMessageEl.textContent = `Xin chào, ${name}! Chúc bạn luyện tập vui vẻ.`;
            nameModal.close();
            typingInputEl.focus();
        }
    });

    typingInputEl.addEventListener('input', handleInput);
    resetBtn.addEventListener('click', () => resetGame(state.lessonId));
    saveBtn.addEventListener('click', handleSave);
    textToTypeEl.addEventListener('click', () => typingInputEl.focus());
    
    document.addEventListener('keydown', (e) => {
        if (document.activeElement === typingInputEl) {
            if (e.key === 'Tab') e.preventDefault();
            const key = e.key === ' ' ? 'Space' : e.code;
            const keyEl = document.querySelector(`.key[data-key="${key}"]`);
            if (keyEl) keyEl.classList.add('active');
        }
    });

    document.addEventListener('keyup', (e) => {
         if (document.activeElement === typingInputEl) {
            const key = e.key === ' ' ? 'Space' : e.code;
            const keyEl = document.querySelector(`.key[data-key="${key}"]`);
            if (keyEl) keyEl.classList.remove('active');
        }
    });
}

// =================================================================
// KHỞI CHẠY ỨNG DỤNG
// =================================e=================================

document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    loadLessonsAndInit();
});