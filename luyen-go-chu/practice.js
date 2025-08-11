// =================================================================
// PHẦN CẤU HÌNH
// =================================================================
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbydBN4Jidb1wMD4uWVlwyBnQQQMLhh0ycd28eLnI1HoEhbnupiBDkwpAjn5SheFPe8le/exec';

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
    lessonId: null,
    lessonTitle: ''
};

// =================================================================
// [NÂNG CẤP] LOGIC HIGHLIGHT PHÍM VÀ NGÓN TAY
// =================================================================
const keyToFingerMap = {
    // [NÂNG CẤP] Phím cách giờ đây là một mảng chứa ID của cả 2 ngón cái
    'Space': ['finger-left-thumb', 'finger-right-thumb'],
    
    // Các phím còn lại giữ nguyên
    'Backquote': 'finger-left-pinky', 'Digit1': 'finger-left-pinky', 'Tab': 'finger-left-pinky', 'KeyQ': 'finger-left-pinky', 'KeyA': 'finger-left-pinky', 'KeyZ': 'finger-left-pinky', 'ShiftLeft': 'finger-left-pinky', 'CapsLock': 'finger-left-pinky', 'ControlLeft': 'finger-left-pinky',
    'Digit2': 'finger-left-ring', 'KeyW': 'finger-left-ring', 'KeyS': 'finger-left-ring', 'KeyX': 'finger-left-ring',
    'Digit3': 'finger-left-middle', 'KeyE': 'finger-left-middle', 'KeyD': 'finger-left-middle', 'KeyC': 'finger-left-middle',
    'Digit4': 'finger-left-index', 'Digit5': 'finger-left-index', 'KeyR': 'finger-left-index', 'KeyT': 'finger-left-index', 'KeyF': 'finger-left-index', 'KeyG': 'finger-left-index', 'KeyV': 'finger-left-index', 'KeyB': 'finger-left-index',
    'Digit6': 'finger-right-index', 'Digit7': 'finger-right-index', 'KeyY': 'finger-right-index', 'KeyU': 'finger-right-index', 'KeyH': 'finger-right-index', 'KeyJ': 'finger-right-index', 'KeyN': 'finger-right-index', 'KeyM': 'finger-right-index',
    'Digit8': 'finger-right-middle', 'KeyI': 'finger-right-middle', 'KeyK': 'finger-right-middle', 'Comma': 'finger-right-middle',
    'Digit9': 'finger-right-ring', 'KeyO': 'finger-right-ring', 'KeyL': 'finger-right-ring', 'Period': 'finger-right-ring',
    'Digit0': 'finger-right-pinky', 'Minus': 'finger-right-pinky', 'Equal': 'finger-right-pinky', 'KeyP': 'finger-right-pinky', 'Semicolon': 'finger-right-pinky', 'Quote': 'finger-right-pinky', 'BracketLeft': 'finger-right-pinky', 'BracketRight': 'finger-right-pinky', 'Backslash': 'finger-right-pinky', 'Enter': 'finger-right-pinky', 'ShiftRight': 'finger-right-pinky', 'ControlRight': 'finger-right-pinky',
};

// [NÂNG CẤP] Hàm highlight để có thể xử lý nhiều ngón tay cho một phím
function highlightKeyAndFinger(keyCode) {
    const keyEl = document.querySelector(`.key[data-key="${keyCode}"]`);
    if (keyEl) keyEl.classList.add('active');

    const fingerData = keyToFingerMap[keyCode];
    if (fingerData) {
        // Luôn xử lý fingerData như một mảng để code gọn hơn
        const fingerIds = Array.isArray(fingerData) ? fingerData : [fingerData];
        fingerIds.forEach(id => {
            const fingerEl = document.getElementById(id);
            if (fingerEl) fingerEl.classList.add('active');
        });
    }
}

// [NÂNG CẤP] Hàm unhighlight tương tự
function unhighlightKeyAndFinger(keyCode) {
    const keyEl = document.querySelector(`.key[data-key="${keyCode}"]`);
    if (keyEl) keyEl.classList.remove('active');
    
    const fingerData = keyToFingerMap[keyCode];
    if (fingerData) {
        const fingerIds = Array.isArray(fingerData) ? fingerData : [fingerData];
        fingerIds.forEach(id => {
            const fingerEl = document.getElementById(id);
            if (fingerEl) fingerEl.classList.remove('active');
        });
    }
}


// =================================================================
// CÁC HÀM XỬ LÝ GAME
// =================================================================

function showLoadingState(isLoading, message = '') {
    if (loadingState) loadingState.style.display = isLoading ? 'flex' : 'none';
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

// [SỬA LỖI] Nâng cấp hàm resetGame để ổn định hơn
function resetGame(lessonId) {
    if (state.timerInterval) clearInterval(state.timerInterval);
    
    // Kiểm tra đầu vào chặt chẽ hơn
    const lesson = typingLessons[lessonId];
    if (!lessonId || !lesson || !lesson.texts || lesson.texts.length === 0) {
        lessonTitleEl.textContent = 'Lỗi Bài Học';
        textToTypeEl.innerHTML = `<span class="text-red-500">Bài học này không có nội dung hoặc bị lỗi. Vui lòng chọn bài khác.</span>`;
        typingInputEl.disabled = true;
        return;
    }
    
    const randomText = lesson.texts[Math.floor(Math.random() * lesson.texts.length)];

    // Kiểm tra xem randomText có hợp lệ không
    if (typeof randomText !== 'string' || randomText.trim() === '') {
        lessonTitleEl.textContent = 'Lỗi Nội Dung';
        textToTypeEl.innerHTML = `<span class="text-red-500">Nội dung của bài tập này bị trống. Vui lòng chọn bài khác.</span>`;
        typingInputEl.disabled = true;
        return;
    }
    
    state = { ...state, text: randomText, input: '', timerInterval: null, errors: 0, startTime: null, endTime: null, lessonId: lessonId, lessonTitle: lesson.title };
    
    lessonTitleEl.textContent = state.lessonTitle;
    typingInputEl.value = '';
    typingInputEl.disabled = false;
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
            if (char === ' ') span.className = 'bg-gray-200 rounded-sm';
        } else if (typedChar === char) {
            span.className = 'text-green-500';
        } else {
            span.className = 'text-red-500';
            if (char === ' ') span.className += ' bg-red-200 rounded-sm';
            else span.style.textDecoration = 'underline';
        }
        textToTypeEl.appendChild(span);
    });
}

function handleInput() {
    if (!state.startTime && typingInputEl.value.length > 0) {
        state.startTime = new Date();
        state.timerInterval = setInterval(updateTimer, 1000);
    }
    state.input = typingInputEl.value;
    renderTextToType();
    updateMetrics();
    
    if (state.input.length === state.text.length) {
        clearInterval(state.timerInterval);
        state.endTime = new Date();
        saveBtn.disabled = false;
    }
}

function updateMetrics() {
    if (!state.startTime) return;
    const elapsedTime = (new Date() - state.startTime) / 60000;
    if (elapsedTime === 0 && state.input.length > 0) {
        wpmEl.textContent = '...'; return;
    }
    if (elapsedTime === 0) return;

    const typedChars = state.input.length;
    let errors = 0;
    for (let i = 0; i < typedChars; i++) {
        if (state.input[i] !== state.text[i]) errors++;
    }
    state.errors = errors;
    wpmEl.textContent = Math.round((typedChars / 5) / elapsedTime);
    accuracyEl.textContent = `${typedChars > 0 ? Math.round(((typedChars - errors) / typedChars) * 100) : 100}%`;
}

function updateTimer() {
    if (!state.startTime) return;
    const elapsedTime = Math.floor((new Date() - state.startTime) / 1000);
    timerEl.textContent = `${Math.floor(elapsedTime / 60)}:${(elapsedTime % 60).toString().padStart(2, '0')}`;
}

async function handleSave() {
    saveBtn.disabled = true;
    saveStatusEl.textContent = 'Đang lưu...';
    try {
        await fetch(`${SCRIPT_URL}?action=saveResult`, {
            method: 'POST', body: JSON.stringify({
                studentName: state.studentName, lessonId: state.lessonId, lessonTitle: state.lessonTitle,
                wpm: wpmEl.textContent, accuracy: accuracyEl.textContent.replace('%', ''),
                duration: (state.endTime - state.startTime) / 1000, errors: state.errors
            })
        });
        saveStatusEl.textContent = 'Đã lưu thành công!';
    } catch (error) {
        saveStatusEl.textContent = 'Lưu thất bại.';
        saveBtn.disabled = false;
    }
}

// =================================================================
// KHỞI CHẠY ỨNG DỤNG VÀ LẮNG NGHE SỰ KIỆN
// =================================================================

document.addEventListener('DOMContentLoaded', () => {
    
    async function main() {
        showLoadingState(true, 'Đang tải dữ liệu bài học...');
        
        try {
            const response = await fetch(SCRIPT_URL);
            if (!response.ok) throw new Error(`Lỗi mạng khi tải bài học`);
            typingLessons = await response.json();
            populateLessonSelector();
            const urlParams = new URLSearchParams(window.location.search);
            resetGame(urlParams.get('lesson') || Object.keys(typingLessons)[0]);
        } catch (error) {
            console.error("Lỗi:", error);
            lessonTitleEl.textContent = 'Lỗi Tải Dữ Liệu';
            textToTypeEl.innerHTML = `<span class="text-red-500">Không thể kết nối. Vui lòng kiểm tra lại URL Script và cài đặt.</span>`;
        } finally {
            showLoadingState(false);
        }
    }

    if (!state.studentName && nameModal) {
        if (typeof nameModal.showModal === "function") {
             nameModal.showModal();
        }
    } else {
        main();
    }
    
    nameForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = studentNameInput.value.trim();
        if (name) {
            state.studentName = name;
            localStorage.setItem('studentName', name);
            if (welcomeMessageEl) welcomeMessageEl.textContent = `Xin chào, ${name}!`;
            nameModal.close();
            main();
        }
    });

    typingInputEl.addEventListener('input', handleInput);
    resetBtn.addEventListener('click', () => resetGame(state.lessonId));
    saveBtn.addEventListener('click', handleSave);
    textToTypeEl.addEventListener('click', () => typingInputEl.focus());

    document.addEventListener('keydown', (e) => {
        if (document.activeElement === typingInputEl) {
            if (e.key === 'Tab') e.preventDefault();
            highlightKeyAndFinger(e.code);
        }
    });

    document.addEventListener('keyup', (e) => {
        if (document.activeElement === typingInputEl) {
            unhighlightKeyAndFinger(e.code);
        }
    });
});