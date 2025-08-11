// =================================================================
// PHẦN CẤU HÌNH
// =================================================================
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
// BIẾN TRẠNG THÁI CỦA ỨNG DỤNG
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
// LOGIC HIGHLIGHT PHÍM VÀ NGÓN TAY
// =================================================================
const keyToFingerMap = {
    'Backquote': 'finger-left-pinky', 'Digit1': 'finger-left-pinky', 'Tab': 'finger-left-pinky', 'KeyQ': 'finger-left-pinky', 'KeyA': 'finger-left-pinky', 'KeyZ': 'finger-left-pinky', 'ShiftLeft': 'finger-left-pinky', 'CapsLock': 'finger-left-pinky',
    'Digit2': 'finger-left-ring', 'KeyW': 'finger-left-ring', 'KeyS': 'finger-left-ring', 'KeyX': 'finger-left-ring',
    'Digit3': 'finger-left-middle', 'KeyE': 'finger-left-middle', 'KeyD': 'finger-left-middle', 'KeyC': 'finger-left-middle',
    'Digit4': 'finger-left-index', 'Digit5': 'finger-left-index', 'KeyR': 'finger-left-index', 'KeyT': 'finger-left-index', 'KeyF': 'finger-left-index', 'KeyG': 'finger-left-index', 'KeyV': 'finger-left-index', 'KeyB': 'finger-left-index',
    'Space': 'finger-left-thumb',
    'Digit6': 'finger-right-index', 'Digit7': 'finger-right-index', 'KeyY': 'finger-right-index', 'KeyU': 'finger-right-index', 'KeyH': 'finger-right-index', 'KeyJ': 'finger-right-index', 'KeyN': 'finger-right-index', 'KeyM': 'finger-right-index',
    'Digit8': 'finger-right-middle', 'KeyI': 'finger-right-middle', 'KeyK': 'finger-right-middle', 'Comma': 'finger-right-middle',
    'Digit9': 'finger-right-ring', 'KeyO': 'finger-right-ring', 'KeyL': 'finger-right-ring', 'Period': 'finger-right-ring',
    'Digit0': 'finger-right-pinky', 'Minus': 'finger-right-pinky', 'Equal': 'finger-right-pinky', 'KeyP': 'finger-right-pinky', 'Semicolon': 'finger-right-pinky', 'Quote': 'finger-right-pinky', 'BracketLeft': 'finger-right-pinky', 'BracketRight': 'finger-right-pinky', 'Backslash': 'finger-right-pinky', 'Enter': 'finger-right-pinky', 'ShiftRight': 'finger-right-pinky',
    'ControlLeft': 'finger-left-pinky', 'ControlRight': 'finger-right-pinky'
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
// CÁC HÀM XỬ LÝ GAME
// =================================================================

function showLoadingState(isLoading, message = '') {
    const loadingMessageEl = document.getElementById('loading-message');
    if (loadingState) loadingState.style.display = isLoading ? 'flex' : 'none';
    if (loadingMessageEl && message) loadingMessageEl.textContent = message;
    if (appContainer) appContainer.style.display = isLoading ? 'block' : 'none';
}

function populateLessonSelector() {
    lessonSelectorContainer.innerHTML = '';
    for (const lessonId in typingLessons) {
        const button = document.createElement('button');
        button.className = 'px-3 py-1 text-sm border rounded-full hover:bg-blue-100 hover:border-blue-500 transition-all';
        button.textContent = typingLessons[lessonId].title;
        button.onclick = () => resetGame(lessonId);
        lessonSelectorContainer.appendChild(button);
    }
}

function resetGame(lessonId) {
    if (state.timerInterval) clearInterval(state.timerInterval);
    if (!lessonId || !typingLessons[lessonId]) {
        lessonTitleEl.textContent = 'Lỗi';
        textToTypeEl.innerHTML = `<span class="text-red-500">Không tìm thấy bài học.</span>`;
        typingInputEl.disabled = true;
        return;
    }
    
    const lesson = typingLessons[lessonId];
    const randomText = lesson.texts[Math.floor(Math.random() * lesson.texts.length)];
    
    state = { ...state, text: randomText, input: '', timerInterval: null, errors: 0, startTime: null, endTime: null, totalChars: randomText.length, lessonId: lessonId, lessonTitle: lesson.title };
    
    lessonTitleEl.textContent = state.lessonTitle;
    typingInputEl.value = '';
    typingInputEl.disabled = false;
    
    // [SỬA LỖI KẾT THÚC SỚM] Đặt độ dài tối đa cho ô input
    typingInputEl.maxLength = state.text.length;

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
    state.text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        const typedChar = state.input[index];
        if (typedChar == null) {
             if (char === ' ') span.className = 'bg-gray-200 rounded-sm'; // Đánh dấu dấu cách chưa gõ
        }