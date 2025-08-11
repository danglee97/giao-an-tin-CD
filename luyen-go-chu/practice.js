// =================================================================
// PHẦN CẤU HÌNH VÀ BIẾN (GIỮ NGUYÊN CỦA BẠN)
// =================================================================
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbydBN4Jidb1wMD4uWVlwyBnQQQMLh0ycd28eLnI1HoEhbnupiBDkwpAjn5SheFPe8le/exec';

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
// [PHẦN ĐƯỢC THÊM VÀO] - LOGIC HIGHLIGHT PHÍM VÀ NGÓN TAY
// =================================================================

const keyToFingerMap = {
    // Tay Trái
    'Backquote': 'finger-left-pinky', 'Tab': 'finger-left-pinky', 'CapsLock': 'finger-left-pinky', 'ShiftLeft': 'finger-left-pinky',
    'KeyQ': 'finger-left-pinky', 'KeyA': 'finger-left-pinky', 'KeyZ': 'finger-left-pinky', 'Digit1': 'finger-left-pinky',
    'KeyW': 'finger-left-ring', 'KeyS': 'finger-left-ring', 'KeyX': 'finger-left-ring', 'Digit2': 'finger-left-ring',
    'KeyE': 'finger-left-middle', 'KeyD': 'finger-left-middle', 'KeyC': 'finger-left-middle', 'Digit3': 'finger-left-middle',
    'KeyR': 'finger-left-index', 'KeyF': 'finger-left-index', 'KeyV': 'finger-left-index', 'Digit4': 'finger-left-index',
    'KeyT': 'finger-left-index', 'KeyG': 'finger-left-index', 'KeyB': 'finger-left-index', 'Digit5': 'finger-left-index',
    
    // Tay Phải
    'KeyY': 'finger-right-index', 'KeyH': 'finger-right-index', 'KeyN': 'finger-right-index', 'Digit6': 'finger-right-index',
    'KeyU': 'finger-right-index', 'KeyJ': 'finger-right-index', 'KeyM': 'finger-right-index', 'Digit7': 'finger-right-index',
    'KeyI': 'finger-right-middle', 'KeyK': 'finger-right-middle', 'Comma': 'finger-right-middle', 'Digit8': 'finger-right-middle',
    'KeyO': 'finger-right-ring', 'KeyL': 'finger-right-ring', 'Period': 'finger-right-ring', 'Digit9': 'finger-right-ring',
    'KeyP': 'finger-right-pinky', 'Semicolon': 'finger-right-pinky', 'Slash': 'finger-right-pinky', 'Digit0': 'finger-right-pinky',
    'BracketLeft': 'finger-right-pinky', 'Quote': 'finger-right-pinky', 'Minus': 'finger-right-pinky', 'Equal': 'finger-right-pinky',
    'BracketRight': 'finger-right-pinky', 'Backslash': 'finger-right-pinky', 'ShiftRight': 'finger-right-pinky', 'Enter': 'finger-right-pinky',

    // Ngón cái
    'Space': 'finger-left-thumb',
};

function highlightKeyAndFinger(keyCode) {
    const keyEl = document.querySelector(`.key[data-key="${keyCode}"]`);
    if (keyEl) keyEl.classList.add('active');
    const fingerId = keyToFingerMap[keyCode];
    if (fingerId) {
        const fingerEl = document.getElementById(fingerId);
        if (fingerEl) fingerEl.classList.add('active');
    }
}

function unhighlightKeyAndFinger(keyCode) {
    const keyEl = document.querySelector(`.key[data-key="${keyCode}"]`);
    if (keyEl) keyEl.classList.remove('active');
    const fingerId = keyToFingerMap[keyCode];
    if (fingerId) {
        const fingerEl = document.getElementById(fingerId);
        if (fingerEl) fingerEl.classList.remove('active');
    }
}

// =================================================================
// CÁC HÀM XỬ LÝ GAME CỦA BẠN (GIỮ NGUYÊN HOÀN TOÀN)
// =================================================================

function showLoadingState(isLoading, message = '') {
    if (loadingState) {
        loadingState.style.display = isLoading ? 'flex' : 'none';
        loadingState.textContent = message;
    }
    if (appContainer) {
       appContainer.style.display = isLoading ? 'none' : 'block';
    }
}

function populateLessonSelector() {
    lessonSelectorContainer.innerHTML = '';
    for (const lessonId in typingLessons) {
        const button = document.createElement('button');
        button.className = 'lesson-selector-btn';
        button.textContent = typingLessons[lessonId].title;
        button.onclick = () => resetGame(lessonId);
        lessonSelectorContainer.appendChild(button);
    }
}

function resetGame(lessonId) {
    if (state.timerInterval) clearInterval(state.timerInterval);

    if (!lessonId || !typingLessons[lessonId]) {
        lessonTitleEl.textContent = 'Lỗi';
        textToTypeEl.innerHTML = `<span class="error-message">Không tìm thấy bài học. Vui lòng chọn một bài học từ danh sách.</span>`;
        typingInputEl.disabled = true;
        return;
    }
    
    const lesson = typingLessons[lessonId];
    const randomText = lesson.texts[Math.floor(Math.random() * lesson.texts.length)];

    state = {
        ...state,
        text: randomText, input: '', timerInterval: null, errors: 0,
        startTime: null, endTime: null, totalChars: randomText.length,
        lessonId: lessonId, lessonTitle: lesson.title
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

function renderTextToType() {
    textToTypeEl.innerHTML = '';
    const textChars = state.text.split('');
    const inputChars = state.input.split('');
    textChars.forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        if (char === ' ') span.classList.add('word-separator');
        if (inputChars[index] == null) span.classList.add('char-pending');
        else if (inputChars[index] === char) span.classList.add('char-correct');
        else {
            span.classList.add('char-incorrect');
            if (char === ' ') {
                span.innerHTML = '&nbsp;';
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
    const elapsedTime = (new Date() - state.startTime) / 60000;
    if (elapsedTime === 0) return;
    const typedChars = state.input.length;
    const wpm = Math.round((typedChars / 5) / elapsedTime);
    let errors = 0;
    state.input.split('').forEach((char, index) => {
        if (char !== state.text[index]) errors++;
    });
    state.errors = errors;
    const accuracy = typedChars > 0 ? Math.round(((typedChars - errors) / typedChars) * 100) : 100;
    wpmEl.textContent = wpm;
    accuracyEl.textContent = `${accuracy}%`;
}

function updateTimer() {
    const elapsedTime = Math.floor((new Date() - state.startTime) / 1000);
    timerEl.textContent = `${Math.floor(elapsedTime / 60)}:${(elapsedTime % 60).toString().padStart(2, '0')}`;
}

async function handleSave() {
    saveBtn.disabled = true;
    saveStatusEl.textContent = 'Đang lưu...';
    // [KHÔI PHỤC] Giữ nguyên cách bạn gọi hàm lưu kết quả
    try {
        const response = await fetch(`${SCRIPT_URL}?action=saveResult`, {
            method: 'POST',
            body: JSON.stringify({
                 studentName: state.studentName,
                 lessonId: state.lessonId,
                 lessonTitle: state.lessonTitle,
                 wpm: wpmEl.textContent,
                 accuracy: accuracyEl.textContent.replace('%', ''),
                 duration: (state.endTime - state.startTime) / 1000,
                 errors: state.errors
            })
        });
        const result = await response.json();
        if (!result.success) throw new Error(result.message);
        saveStatusEl.textContent = 'Đã lưu thành công!';
        saveStatusEl.style.color = 'green';
    } catch (error) {
        saveStatusEl.textContent = 'Lỗi! Không thể lưu.';
        saveStatusEl.style.color = 'red';
        saveBtn.disabled = false;
    }
}


// =================================================================
// PHẦN KHỞI CHẠY VÀ LẮNG NGHE SỰ KIỆN (GIỮ NGUYÊN CỦA BẠN + THÊM HIGHLIGHT)
// =================================================================

document.addEventListener('DOMContentLoaded', async () => {
    showLoadingState(true, 'Đang tải dữ liệu bài học...');
    if (!state.studentName && nameModal) nameModal.showModal();
    else if (welcomeMessageEl) welcomeMessageEl.textContent = `Xin chào, ${state.studentName}!`;

    // [KHÔI PHỤC] - SỬ DỤNG ĐÚNG CÁCH TẢI DỮ LIỆU CỦA BẠN
    try {
        const response = await fetch(SCRIPT_URL); // <--- Giữ nguyên fetch() đơn giản
        if (!response.ok) throw new Error(`Lỗi mạng: ${response.statusText}`);
        typingLessons = await response.json();
        
        populateLessonSelector();
        const urlParams = new URLSearchParams(window.location.search);
        const lessonFromUrl = urlParams.get('lesson');
        resetGame(lessonFromUrl || Object.keys(typingLessons)[0]);

    } catch (error) {
        console.error("Không thể tải dữ liệu bài học:", error);
        textToTypeEl.innerHTML = `<span class="error-message">Lỗi: Không thể tải dữ liệu. Vui lòng kiểm tra lại đường truyền và URL Script.</span>`;
    } finally {
        showLoadingState(false);
    }
    
    // Giữ nguyên các event listener khác của bạn
    nameForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = studentNameInput.value.trim();
        if (name) {
            state.studentName = name;
            localStorage.setItem('studentName', name);
            welcomeMessageEl.textContent = `Xin chào, ${name}!`;
            nameModal.close();
            typingInputEl.focus();
        }
    });

    typingInputEl.addEventListener('input', handleInput);
    resetBtn.addEventListener('click', () => resetGame(state.lessonId));
    saveBtn.addEventListener('click', handleSave);
    textToTypeEl.addEventListener('click', () => typingInputEl.focus());
    
    // [CẬP NHẬT] - CHỈ THÊM LOGIC HIGHLIGHT VÀO ĐÂY
    document.addEventListener('keydown', (e) => {
        if (document.activeElement === typingInputEl) {
            if (e.key === 'Tab') {
                e.preventDefault();
            }
            // Gọi hàm làm sáng phím và ngón tay
            highlightKeyAndFinger(e.code);
        }
    });

    document.addEventListener('keyup', (e) => {
         if (document.activeElement === typingInputEl) {
            // Gọi hàm tắt làm sáng phím và ngón tay
            unhighlightKeyAndFinger(e.code);
        }
    });
});