// --- CONFIGURATION ---
// IMPORTANT: Paste your Google Apps Script URL here. This URL is used for BOTH fetching lessons and saving results.
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbydBN4Jidb1wMD4uWVlwyBnQQQMLh0ycd28eLnI1HoEhbnupiBDkwpAjn5SheFPe8le/exec';


// --- DOM Elements ---
const appContainer = document.getElementById('app-container');
const loadingState = document.getElementById('loading-state');
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
const lessonTitleEl = document.getElementById('lesson-title');

// --- Application State ---
let typingLessons = {}; // This will be populated from Google Sheets
let state = {
    studentName: '', text: '', input: '',
    timerInterval: null, errors: 0, isTyping: false, isCompleted: false,
    // Detailed logging state
    startTime: null, 
    endTime: null
};

// --- CORE FUNCTIONS ---

// Function to fetch and parse JSON data from our Google Apps Script
async function loadLessonsFromScript(url) {
    if (!url || url === 'URL_APPS_SCRIPT_MOI_CUA_BAN') {
         console.error('Invalid Apps Script URL provided.');
         loadingState.innerHTML = `<p class="text-red-500 font-bold">Lỗi cấu hình!</p><p class="text-slate-500 mt-2">Vui lòng cung cấp URL Apps Script hợp lệ.</p>`;
         return null;
    }
    try {
        // We now fetch directly from our script, which returns JSON
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Lỗi mạng khi tải: ${response.status} ${response.statusText}`);
        }
        const lessonsData = await response.json();
        
        // Check if the script returned an error message
        if (lessonsData.status === 'error') {
            throw new Error(lessonsData.message);
        }
        
        // [SỬA LỖI] Làm sạch dữ liệu, loại bỏ ký tự vô hình \r
        Object.keys(lessonsData).forEach(lessonId => {
            const lesson = lessonsData[lessonId];
            if (lesson.texts && Array.isArray(lesson.texts)) {
                lesson.texts = lesson.texts.map(text => text.replace(/\r/g, ''));
            }
        });
        
        return lessonsData;

    } catch (error) {
        console.error('Chi tiết lỗi tải bài học:', error);
        // Display a more detailed error message to the user
        loadingState.innerHTML = `<div class="text-center">
                                    <p class="text-red-500 font-bold">Lỗi tải dữ liệu bài học!</p>
                                    <p class="text-slate-500 mt-2">Không thể lấy dữ liệu từ Apps Script. Vui lòng kiểm tra lại:</p>
                                    <ul class="text-left text-sm text-slate-600 list-disc list-inside mt-2">
                                        <li>Đảm bảo bạn đã dán đúng URL <strong>Ứng dụng web</strong>.</li>
                                        <li>Kiểm tra lại xem Apps Script đã được triển khai lại với code mới nhất chưa.</li>
                                        <li>Chắc chắn rằng tên các trang tính trong file Code.gs là chính xác ("Lessons", "NhatKyHocTap").</li>
                                    </ul>
                                    <p class="text-xs text-gray-400 mt-4">Chi tiết lỗi: ${error.message}</p>
                                  </div>`;
        return null;
    }
}

// Reset the game to its initial state for the current lesson
function resetGame() {
    clearInterval(state.timerInterval);
    state.isTyping = false;
    state.isCompleted = false;
    state.startTime = null; // Reset start time
    state.endTime = null;   // Reset end time
    state.errors = 0;
    state.input = '';
    
    const urlParams = new URLSearchParams(window.location.search);
    const lessonId = urlParams.get('lesson') || '1';
    const currentLesson = typingLessons[lessonId];

    if (currentLesson && currentLesson.texts.length > 0) {
        lessonTitleEl.textContent = currentLesson.title;
        const randomIndex = Math.floor(Math.random() * currentLesson.texts.length);
        state.text = currentLesson.texts[randomIndex];
    } else {
        state.text = "Lỗi: Không tìm thấy nội dung cho bài học này.";
        lessonTitleEl.textContent = `Bài ${lessonId} (Không có dữ liệu)`;
    }
    
    updateTextDisplay();
    typingInputEl.value = '';
    typingInputEl.focus();

    wpmEl.textContent = '0';
    accuracyEl.textContent = '100';
    timerEl.textContent = '0s';
    saveBtn.disabled = true;
    saveStatusEl.textContent = '';
}

// --- UI AND EVENT HANDLERS ---

// =================================================================
// [DÁN VÀO ĐÂY] - LOGIC HIGHLIGHT PHÍM VÀ NGÓN TAY
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

function updateTextDisplay() {
    const textChars = state.text.split('');
    state.errors = 0;
    const html = textChars.map((char, index) => {
        let className = '';
        if (index < state.input.length) {
            if (char === state.input[index]) {
                className = 'correct';
            } else {
                className = 'incorrect';
                state.errors++;
            }
        }
        if (index === state.input.length) className += ' current';
        return `<span class="${className}">${char}</span>`;
    }).join('');
    textToTypeEl.innerHTML = html;
}

function handleInput() {
    if (state.isCompleted) return;
    if (!state.isTyping && typingInputEl.value.length > 0) {
        state.isTyping = true;
        state.startTime = new Date(); // Record start time
        state.timerInterval = setInterval(updateTimer, 1000);
    }
    state.input = typingInputEl.value;
    updateTextDisplay();
    calculateMetrics();

    if (state.input.length === state.text.length) {
        clearInterval(state.timerInterval);
        state.isTyping = false;
        state.isCompleted = true;
        state.endTime = new Date(); // Record end time
        saveBtn.disabled = false;
        typingInputEl.blur();
    }
}

function updateTimer() {
    if (!state.startTime) return;
    const elapsedTime = Math.floor((new Date() - state.startTime) / 1000);
    timerEl.textContent = `${elapsedTime}s`;
    if (state.isTyping) calculateMetrics();
}

function calculateMetrics() {
    if (!state.startTime) return;
    const elapsedTimeInMinutes = (new Date() - state.startTime) / 1000 / 60;
    if (elapsedTimeInMinutes === 0) return;
    
    const wordsTyped = state.input.length / 5;
    const wpm = Math.round(wordsTyped / elapsedTimeInMinutes);
    wpmEl.textContent = isNaN(wpm) ? 0 : wpm;

    const correctChars = state.input.length - state.errors;
    const accuracy = state.input.length > 0 ? Math.round((correctChars / state.input.length) * 100) : 100;
    accuracyEl.textContent = isNaN(accuracy) ? 100 : accuracy;
}

function handleSave() {
    if (!SCRIPT_URL || SCRIPT_URL === 'URL_APPS_SCRIPT_MOI_CUA_BAN') {
        saveStatusEl.textContent = "Lỗi: URL lưu kết quả chưa được cấu hình.";
        saveStatusEl.style.color = 'red';
        return;
    }
    saveBtn.disabled = true;
    saveStatusEl.textContent = "Đang lưu...";
    saveStatusEl.style.color = '#64748b';

    // Construct detailed data payload
    const durationInSeconds = state.endTime ? Math.round((state.endTime - state.startTime) / 1000) : 0;
    const dataToSave = { 
        studentName: state.studentName, 
        lessonTitle: lessonTitleEl.textContent, 
        startTime: state.startTime ? state.startTime.toISOString() : null,
        endTime: state.endTime ? state.endTime.toISOString() : null,
        duration: durationInSeconds,
        wpm: wpmEl.textContent, 
        accuracy: accuracyEl.textContent,
        typedText: state.input
    };

    fetch(SCRIPT_URL, { 
        method: 'POST', 
        mode: 'no-cors', 
        cache: 'no-cache', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(dataToSave) 
    })
    .then(() => { 
        saveStatusEl.textContent = "Đã lưu thành công!"; 
        saveStatusEl.style.color = '#10b981'; 
    })
    .catch(err => { 
        console.error("Error saving data:", err); 
        saveStatusEl.textContent = "Lỗi: Không thể gửi kết quả."; 
        saveStatusEl.style.color = '#ef4444'; 
        saveBtn.disabled = false; 
    });
}

// --- INITIALIZATION ---
async function initializeApp() {
    // We now call the Apps Script URL to get lessons
    const lessons = await loadLessonsFromScript(SCRIPT_URL);
    if (lessons) {
        typingLessons = lessons;
        loadingState.classList.add('hidden');
        appContainer.classList.remove('hidden');
        nameModal.showModal();
    }
}

// Attach event listeners after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const nameForm = document.getElementById('name-form');
    const typingInputEl = document.getElementById('typing-input');
    const resetBtn = document.getElementById('reset-btn');
    const saveBtn = document.getElementById('save-btn');
    const textToTypeEl = document.getElementById('text-to-type');

    nameForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const studentNameInput = document.getElementById('student-name-input');
        const welcomeMessageEl = document.getElementById('welcome-message');
        const nameModal = document.getElementById('name-modal');
        const name = studentNameInput.value.trim();
        if (name) {
            state.studentName = name;
            welcomeMessageEl.textContent = `Xin chào, ${name}! Chúc bạn luyện tập vui vẻ.`;
            nameModal.close();
            resetGame();
        }
    });

    typingInputEl.addEventListener('input', handleInput);
    resetBtn.addEventListener('click', resetGame);
    saveBtn.addEventListener('click', handleSave);
    textToTypeEl.addEventListener('click', () => typingInputEl.focus());
    
    // [SỬA LỖI] Bổ sung lại logic làm sáng bàn phím và ngón tay
    document.addEventListener('keydown', (e) => {
        if (document.activeElement === typingInputEl) {
            if (e.key === 'Tab') {
                e.preventDefault();
            }
            // Gọi hàm làm sáng mới
            highlightKeyAndFinger(e.code);
        }
    });

    // [SỬA LỖI] Thêm lại bộ lắng nghe sự kiện keyup để tắt làm sáng
    document.addEventListener('keyup', (e) => {
         if (document.activeElement === typingInputEl) {
            // Gọi hàm tắt làm sáng mới
            unhighlightKeyAndFinger(e.code);
        }
    });
    
    // Start the application
    initializeApp();
});
