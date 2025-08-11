// =================================================================
// PHẦN CẤU HÌNH
// =================================================================
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbydBN4Jidb1wMD4uWVlwyBnQQQMLhh0ycd28eLnI1HoEhbnupiBDkwpAjn5SheFPe8le/exec';

// =================================================================
// KHAI BÁO BIẾN - Để các biến này ở ngoài để có thể truy cập toàn cục
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
// CÁC HÀM XỬ LÝ GAME (Không thay đổi)
// =================================================================

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

function showLoadingState(isLoading, message = '') {
    const loadingState = document.getElementById('loading-state');
    const appContainer = document.getElementById('app-container');
    if (loadingState) loadingState.style.display = isLoading ? 'flex' : 'none';
    if (appContainer) appContainer.style.display = isLoading ? 'none' : 'block';
}

function populateLessonSelector() {
    const lessonSelectorContainer = document.getElementById('lesson-selector-container');
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
    const lessonTitleEl = document.getElementById('lesson-title');
    const textToTypeEl = document.getElementById('text-to-type');
    const typingInputEl = document.getElementById('typing-input');
    const timerEl = document.getElementById('timer');
    const wpmEl = document.getElementById('wpm');
    const accuracyEl = document.getElementById('accuracy');
    const saveBtn = document.getElementById('save-btn');
    const saveStatusEl = document.getElementById('save-status');

    if (state.timerInterval) clearInterval(state.timerInterval);
    if (!lessonId || !typingLessons[lessonId]) {
        lessonTitleEl.textContent = 'Lỗi';
        textToTypeEl.innerHTML = `<span class="text-red-500">Không tìm thấy bài học.</span>`;
        typingInputEl.disabled = true;
        return;
    }
    
    const lesson = typingLessons[lessonId];
    const randomText = lesson.texts[Math.floor(Math.random() * lesson.texts.length)];
    
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
    const textToTypeEl = document.getElementById('text-to-type');
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
    const typingInputEl = document.getElementById('typing-input');
    const saveBtn = document.getElementById('save-btn');
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
    const wpmEl = document.getElementById('wpm');
    const accuracyEl = document.getElementById('accuracy');
    if (!state.startTime) return;
    const elapsedTime = (new Date() - state.startTime) / 60000;
    if (elapsedTime === 0 && state.input.length > 0) {
        wpmEl.textContent = '...';
        return;
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
    const timerEl = document.getElementById('timer');
    if (!state.startTime) return;
    const elapsedTime = Math.floor((new Date() - state.startTime) / 1000);
    timerEl.textContent = `${Math.floor(elapsedTime / 60)}:${(elapsedTime % 60).toString().padStart(2, '0')}`;
}

async function handleSave() {
    const saveBtn = document.getElementById('save-btn');
    const saveStatusEl = document.getElementById('save-status');
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

const keyToFingerMap = {
    'Backquote': 'finger-left-pinky', 'Digit1': 'finger-left-pinky', 'Tab': 'finger-left-pinky', 'KeyQ': 'finger-left-pinky', 'KeyA': 'finger-left-pinky', 'KeyZ': 'finger-left-pinky', 'ShiftLeft': 'finger-left-pinky', 'CapsLock': 'finger-left-pinky', 'ControlLeft': 'finger-left-pinky',
    'Digit2': 'finger-left-ring', 'KeyW': 'finger-left-ring', 'KeyS': 'finger-left-ring', 'KeyX': 'finger-left-ring',
    'Digit3': 'finger-left-middle', 'KeyE': 'finger-left-middle', 'KeyD': 'finger-left-middle', 'KeyC': 'finger-left-middle',
    'Digit4': 'finger-left-index', 'Digit5': 'finger-left-index', 'KeyR': 'finger-left-index', 'KeyT': 'finger-left-index', 'KeyF': 'finger-left-index', 'KeyG': 'finger-left-index', 'KeyV': 'finger-left-index', 'KeyB': 'finger-left-index',
    'Space': 'finger-left-thumb',
    'Digit6': 'finger-right-index', 'Digit7': 'finger-right-index', 'KeyY': 'finger-right-index', 'KeyU': 'finger-right-index', 'KeyH': 'finger-right-index', 'KeyJ': 'finger-right-index', 'KeyN': 'finger-right-index', 'KeyM': 'finger-right-index',
    'Digit8': 'finger-right-middle', 'KeyI': 'finger-right-middle', 'KeyK': 'finger-right-middle', 'Comma': 'finger-right-middle',
    'Digit9': 'finger-right-ring', 'KeyO': 'finger-right-ring', 'KeyL': 'finger-right-ring', 'Period': 'finger-right-ring',
    'Digit0': 'finger-right-pinky', 'Minus': 'finger-right-pinky', 'Equal': 'finger-right-pinky', 'KeyP': 'finger-right-pinky', 'Semicolon': 'finger-right-pinky', 'Quote': 'finger-right-pinky', 'BracketLeft': 'finger-right-pinky', 'BracketRight': 'finger-right-pinky', 'Backslash': 'finger-right-pinky', 'Enter': 'finger-right-pinky', 'ShiftRight': 'finger-right-pinky', 'ControlRight': 'finger-right-pinky',
};


// =================================================================
// [SỬA LỖI] KHỞI CHẠY ỨNG DỤNG VÀ LẮNG NGHE SỰ KIỆN
// =================================================================

// Đợi cho toàn bộ cây HTML được tải xong rồi mới chạy JavaScript
document.addEventListener('DOMContentLoaded', () => {
    
    // **QUAN TRỌNG**: Phải truy xuất các phần tử DOM ở đây, sau khi chúng đã được tải
    const nameModal = document.getElementById('name-modal');
    const nameForm = document.getElementById('name-form');
    const studentNameInput = document.getElementById('student-name-input');
    const typingInputEl = document.getElementById('typing-input');
    const resetBtn = document.getElementById('reset-btn');
    const saveBtn = document.getElementById('save-btn');
    const textToTypeEl = document.getElementById('text-to-type');
    const lessonTitleEl = document.getElementById('lesson-title');

    // Hàm chính để tải dữ liệu và bắt đầu game
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

    // Gắn tất cả các sự kiện vào đây
    nameForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Ngăn form tải lại trang
        const welcomeMessageEl = document.getElementById('welcome-message');
        const name = studentNameInput.value.trim();
        if (name) {
            state.studentName = name;
            localStorage.setItem('studentName', name);
            if (welcomeMessageEl) welcomeMessageEl.textContent = `Xin chào, ${name}!`;
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
            highlightKeyAndFinger(e.code);
        }
    });

    document.addEventListener('keyup', (e) => {
        if (document.activeElement === typingInputEl) {
            unhighlightKeyAndFinger(e.code);
        }
    });

    // Logic kiểm tra tên và khởi động ứng dụng
    if (!state.studentName && nameModal) {
        if (typeof nameModal.showModal === "function") {
             nameModal.showModal();
        }
    } else {
        // Nếu đã có tên, chạy game luôn
        main();
    }
});