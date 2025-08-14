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
    isComposing: false, // [FIX] Thêm trạng thái để theo dõi bộ gõ (IME)
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
    state.isComposing = false;
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

// Ánh xạ mã phím (Key Code) với ID ngón tay tương ứng trên SVG
const keyToFingerMap = {
    'q':'left-pinky','a':'left-pinky','z':'left-pinky','1':'left-pinky','`':'left-pinky','Tab':'left-pinky','ShiftLeft':'left-pinky','ControlLeft':'left-pinky',
    'w':'left-ring','s':'left-ring','x':'left-ring','2':'left-ring',
    'e':'left-middle','d':'left-middle','c':'left-middle','3':'left-middle',
    'r':'left-index','f':'left-index','v':'left-index','4':'left-index',
    't':'left-index','g':'left-index','b':'left-index','5':'left-index',
    'p':'right-pinky',';':'right-pinky','/':'right-pinky','[':'right-pinky',"'":'right-pinky',']':'right-pinky','\\':'right-pinky','Enter':'right-pinky','ShiftRight':'right-pinky','Backspace':'right-pinky','-':'right-pinky','=':'right-pinky','ControlRight':'right-pinky',
    'o':'right-ring','l':'right-ring','.':'right-ring','9':'right-ring','0':'right-ring',
    'i':'right-middle','k':'right-middle',',':'right-middle','8':'right-middle',
    'u':'right-index','j':'right-index','m':'right-index','7':'right-index',
    'y':'right-index','h':'right-index','n':'right-index','6':'right-index',
    ' ':'left-thumb','AltLeft':'left-thumb','AltRight':'right-thumb','MetaLeft':'left-thumb'
};

// Hàm làm sáng phím và ngón tay khi nhấn
const highlightKeyAndFinger = (keyCode) => {
    let keyIdentifier;
    if (keyCode.startsWith("Key")) { keyIdentifier = keyCode.substring(3).toLowerCase(); } 
    else if (keyCode.startsWith("Digit")) { keyIdentifier = keyCode.substring(5); } 
    else if (keyCode === "Space") { keyIdentifier = " "; } 
    else if (keyCode === "Semicolon") { keyIdentifier = ";"; } 
    else if (keyCode === "Quote") { keyIdentifier = "'"; } 
    else if (keyCode === "Comma") { keyIdentifier = ","; } 
    else if (keyCode === "Period") { keyIdentifier = "."; } 
    else if (keyCode === "Slash") { keyIdentifier = "/"; } 
    else if (keyCode === "BracketLeft") { keyIdentifier = "["; } 
    else if (keyCode === "BracketRight") { keyIdentifier = "]"; } 
    else if (keyCode === "Backslash") { keyIdentifier = "\\"; } 
    else if (keyCode === "Minus") { keyIdentifier = "-"; } 
    else if (keyCode === "Equal") { keyIdentifier = "="; } 
    else if (keyCode === "Backquote") { keyIdentifier = "`"; }
    else { keyIdentifier = keyCode; }

    const fingerId = keyToFingerMap[keyIdentifier];
    if (fingerId) {
        const fingerEl = document.getElementById(fingerId);
        if (fingerEl) {
            fingerEl.classList.add("active");
            if (keyIdentifier === " ") {
                document.getElementById("right-thumb").classList.add("active");
                document.getElementById("left-thumb").classList.add("active");
            }
        }
    }
    const keyEl = document.querySelector(`.key[data-key="${keyIdentifier}"]`);
    if (keyEl) keyEl.classList.add("active");
};

// Hàm tắt sáng phím và ngón tay khi nhả
const unhighlightKeyAndFinger = (keyCode) => {
    let keyIdentifier;
    if (keyCode.startsWith("Key")) { keyIdentifier = keyCode.substring(3).toLowerCase(); } 
    else if (keyCode.startsWith("Digit")) { keyIdentifier = keyCode.substring(5); } 
    else if (keyCode === "Space") { keyIdentifier = " "; } 
    else if (keyCode === "Semicolon") { keyIdentifier = ";"; } 
    else if (keyCode === "Quote") { keyIdentifier = "'"; } 
    else if (keyCode === "Comma") { keyIdentifier = ","; } 
    else if (keyCode === "Period") { keyIdentifier = "."; } 
    else if (keyCode === "Slash") { keyIdentifier = "/"; } 
    else if (keyCode === "BracketLeft") { keyIdentifier = "["; } 
    else if (keyCode === "BracketRight") { keyIdentifier = "]"; } 
    else if (keyCode === "Backslash") { keyIdentifier = "\\"; } 
    else if (keyCode === "Minus") { keyIdentifier = "-"; } 
    else if (keyCode === "Equal") { keyIdentifier = "="; } 
    else if (keyCode === "Backquote") { keyIdentifier = "`"; }
    else { keyIdentifier = keyCode; }

    const fingerId = keyToFingerMap[keyIdentifier];
    if (fingerId) {
        const fingerEl = document.getElementById(fingerId);
        if (fingerEl) {
            fingerEl.classList.remove("active");
            if (keyIdentifier === " ") {
                document.getElementById("right-thumb").classList.remove("active");
                document.getElementById("left-thumb").classList.remove("active");
            }
        }
    }
    const keyEl = document.querySelector(`.key[data-key="${keyIdentifier}"]`);
    if (keyEl) keyEl.classList.remove("active");
};


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
        // Xử lý hiển thị dấu cách để dễ nhìn hơn
        if (char === ' ') {
            return `<span class="space-char ${className}">&nbsp;</span>`;
        }
        return `<span class="${className}">${char}</span>`;
    }).join('');
    textToTypeEl.innerHTML = html;
}

function handleInput() {
    // [FIX] Nếu đang gõ ký tự phức hợp (ví dụ: gõ dấu), không xử lý
    if (state.isCompleted || state.isComposing) return;

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
        state.isCompleted = true; // Bài tập được xem là hoàn thành
        state.endTime = new Date(); // Record end time
        saveBtn.disabled = false; // Kích hoạt nút lưu
        typingInputEl.blur();
    } else {
        saveBtn.disabled = true; // Vô hiệu hóa nút lưu nếu chưa gõ hết văn bản
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
    const lessons = await loadLessonsFromScript(SCRIPT_URL);
    if (lessons) {
        typingLessons = lessons;
        loadingState.classList.add('hidden');
        appContainer.classList.remove('hidden');
        nameModal.showModal();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Lấy các element một lần để tái sử dụng
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
    
    // [FIX] Thêm các sự kiện để xử lý bộ gõ Tiếng Việt (IME)
    typingInputEl.addEventListener('compositionstart', () => {
        state.isComposing = true;
    });

    typingInputEl.addEventListener('compositionend', () => {
        state.isComposing = false;
        // Gọi lại handleInput sau khi quá trình gõ kết thúc
        // để đảm bảo ký tự cuối cùng được cập nhật và kiểm tra.
        handleInput();
    });

    document.addEventListener('keydown', (e) => {
        // Chỉ xử lý khi ô nhập liệu đang được focus
        if (document.activeElement === typingInputEl) {
            if (e.key === 'Tab') {
                e.preventDefault(); // Ngăn hành vi mặc định của phím Tab
            }
            highlightKeyAndFinger(e.code);
        }
    });

    document.addEventListener('keyup', (e) => {
        if (document.activeElement === typingInputEl) {
            unhighlightKeyAndFinger(e.code);
        }
    });
    
    // Start the application
    initializeApp();
});