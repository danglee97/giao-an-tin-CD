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
const lessonSelectorContainer = document.getElementById('lesson-selector-container'); // Container cho các nút chọn bài

// =================================================================
// BIẾN TRẠNG THÁI CỦA ỨNG DỤNG (Application State)
// =================================================================

let typingLessons = {}; // Dữ liệu các bài học sẽ được tải vào đây
let state = {
    studentName: localStorage.getItem('studentName') || '', // Lấy tên từ cache nếu có
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
// ⭐ PHẦN NÂNG CẤP: TẢI DỮ LIỆU VÀ KHỞI TẠO ỨNG DỤNG ⭐
// =================================================================

/**
 * Hàm chính để khởi tạo ứng dụng:
 * 1. Thử tải bài học từ bộ nhớ đệm (localStorage).
 * 2. Nếu không có, tải từ Google Script rồi lưu vào bộ nhớ đệm.
 * 3. Khởi tạo giao diện người dùng.
 */
async function loadLessonsAndInit() {
    showLoadingState(true, 'Đang tải dữ liệu bài học...');
    
    // Kiểm tra và yêu cầu nhập tên nếu chưa có
    if (!state.studentName) {
        if (nameModal && typeof nameModal.showModal === 'function') {
            nameModal.showModal();
        }
    } else {
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
        // Tự động bắt đầu bài học đầu tiên trong danh sách
        const firstLessonId = Object.keys(typingLessons)[0];
        if (firstLessonId) {
            resetGame(firstLessonId);
        }

    } catch (error) {
        console.error("Không thể tải dữ liệu bài học:", error);
        textToTypeEl.innerHTML = `<span class="error">Lỗi: Không thể tải được dữ liệu bài học. Vui lòng kiểm tra lại đường truyền hoặc URL của Script và thử lại.</span>`;
    } finally {
        showLoadingState(false);
    }
}

/**
 * Tạo các nút chọn bài học dựa trên dữ liệu đã tải
 */
function populateLessonSelector() {
    lessonSelectorContainer.innerHTML = ''; // Xóa các nút cũ
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
 * Bắt đầu hoặc khởi động lại trò chơi với một bài học cụ thể
 * @param {string} lessonId - ID của bài học để bắt đầu
 */
function resetGame(lessonId) {
    if (!lessonId || !typingLessons[lessonId]) {
        console.error("Bài học không hợp lệ!");
        return;
    }

    // Dừng bộ đếm giờ cũ nếu có
    if (state.timerInterval) clearInterval(state.timerInterval);

    // Thiết lập lại trạng thái
    const lesson = typingLessons[lessonId];
    state = {
        ...state, // Giữ lại tên học sinh
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

    // Cập nhật giao diện
    lessonTitleEl.textContent = state.lessonTitle;
    typingInputEl.value = '';
    typingInputEl.disabled = false;
    typingInputEl.focus();
    renderTextToType();
    
    // Reset các chỉ số
    timerEl.textContent = '0:00';
    wpmEl.textContent = '0';
    accuracyEl.textContent = '100%';
    saveBtn.disabled = true;
    saveStatusEl.textContent = '';
}

/**
 * Hiển thị văn bản cần gõ với màu sắc tương ứng
 */
function renderTextToType() {
    textToTypeEl.innerHTML = '';
    const textChars = state.text.split('');
    const inputChars = state.input.split('');

    textChars.forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        if (inputChars[index] == null) {
            span.className = 'char-pending';
        } else if (inputChars[index] === char) {
            span.className = 'char-correct';
        } else {
            span.className = 'char-incorrect';
        }
        textToTypeEl.appendChild(span);
    });
}

/**
 * Xử lý mỗi khi người dùng gõ chữ
 */
function handleInput() {
    state.input = typingInputEl.value;
    
    // Bắt đầu đếm giờ khi gõ ký tự đầu tiên
    if (!state.startTime) {
        state.startTime = new Date();
        state.timerInterval = setInterval(updateTimer, 1000);
    }

    renderTextToType();
    updateMetrics();

    // Kiểm tra nếu đã hoàn thành
    if (state.input.length === state.text.length) {
        state.endTime = new Date();
        clearInterval(state.timerInterval);
        typingInputEl.disabled = true;
        saveBtn.disabled = false;
    }
}

/**
 * Cập nhật các chỉ số WPM và Độ chính xác
 */
function updateMetrics() {
    const currentTime = new Date();
    const elapsedTime = (currentTime - state.startTime) / 1000 / 60; // phút
    if (elapsedTime === 0) return;

    const typedChars = state.input.length;
    const wordsTyped = typedChars / 5; // WPM chuẩn hóa với 5 ký tự/từ
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


/**
 * Cập nhật đồng hồ đếm giờ
 */
function updateTimer() {
    const currentTime = new Date();
    const elapsedTime = Math.floor((currentTime - state.startTime) / 1000); // giây
    const minutes = Math.floor(elapsedTime / 60);
    const seconds = elapsedTime % 60;
    timerEl.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

/**
 * Xử lý lưu kết quả vào Google Sheets
 */
async function handleSave() {
    saveBtn.disabled = true;
    saveStatusEl.textContent = 'Đang lưu...';

    const duration = (state.endTime - state.startTime) / 1000; // giây
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
        saveBtn.disabled = false; // Cho phép thử lại
    }
}

/**
 * Hiển thị/ẩn thông báo tải
 */
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
// ⭐ PHẦN SỬA LỖI: CÁC BỘ LẮNG NGHE SỰ KIỆN (Event Listeners) ⭐
// =================================================================

function setupEventListeners() {
    // Sự kiện nhập tên
    nameForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = studentNameInput.value.trim();
        if (name) {
            state.studentName = name;
            localStorage.setItem('studentName', name); // Lưu tên vào cache
            welcomeMessageEl.textContent = `Xin chào, ${name}! Chúc bạn luyện tập vui vẻ.`;
            nameModal.close();
            typingInputEl.focus();
        }
    });

    // Các sự kiện chính của game
    typingInputEl.addEventListener('input', handleInput);
    resetBtn.addEventListener('click', () => resetGame(state.lessonId)); // Reset bài hiện tại
    saveBtn.addEventListener('click', handleSave);
    textToTypeEl.addEventListener('click', () => typingInputEl.focus());
    
    // [⭐ SỬA LỖI PHÍM CÁCH ⭐]
    // Chỉ chặn phím 'Tab' để không bị nhảy focus.
    // Phím cách (' ') được phép hoạt động bình thường để có thể nhập vào.
    document.addEventListener('keydown', (e) => {
        if (document.activeElement === typingInputEl) {
            if (e.key === 'Tab') {
                e.preventDefault();
            }
            // Logic làm nổi bật phím ảo (nếu có)
            const key = e.key === ' ' ? 'Space' : e.code; // Dùng 'Space' cho phím cách để dễ map với CSS
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
// =================================================================

// Bắt đầu toàn bộ quá trình khi trang đã tải xong
document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    loadLessonsAndInit();
});