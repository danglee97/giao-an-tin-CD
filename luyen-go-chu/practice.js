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
    timerInterval: null, errors: 0,
    startTime: null, endTime: null, totalChars: 0,
    lessonId: null, lessonTitle: ''
};

// =================================================================
// Note: Các hàm xử lý logic game như handleInput, resetGame, v.v.
// được giả định là đã tồn tại và hoạt động đúng ở giữa tệp này.
// Phần sửa lỗi chính nằm ở các Event Listeners ở cuối tệp.
// =================================================================


// --- EVENT LISTENERS ---
// This is where the main fix is applied.

function setupEventListeners() {
    // Event listener cho form nhập tên
    nameForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = studentNameInput.value.trim();
        if (name) {
            state.studentName = name;
            welcomeMessageEl.textContent = `Xin chào, ${name}! Chúc bạn luyện tập vui vẻ.`;
            nameModal.close();
            // Giả sử hàm resetGame() tồn tại để bắt đầu bài học
            if (typeof resetGame === 'function') {
                resetGame();
            }
        }
    });

    // Event listeners cho các hành động chính
    // Giả sử các hàm handleInput, resetGame, handleSave tồn tại
    if (typeof handleInput === 'function') typingInputEl.addEventListener('input', handleInput);
    if (typeof resetGame === 'function') resetBtn.addEventListener('click', resetGame);
    if (typeof handleSave === 'function') saveBtn.addEventListener('click', handleSave);

    textToTypeEl.addEventListener('click', () => typingInputEl.focus());

    // [⭐ SỬA LỖI ⭐]
    // Xử lý sự kiện nhấn phím để làm nổi bật bàn phím ảo
    // và xử lý các phím đặc biệt.
    document.addEventListener('keydown', (e) => {
        // Chỉ thực thi khi đang focus vào ô nhập liệu
        if (document.activeElement === typingInputEl) {
            // CHỈ chặn hành vi mặc định của phím 'Tab' để không bị nhảy focus.
            if (e.key === 'Tab') {
                e.preventDefault();
            }
            // KHÔNG chặn phím cách (' ') nữa, để nó có thể được nhập vào ô input.
            // Đây là điểm sửa lỗi mấu chốt.

            // Logic để xác định và làm nổi bật phím trên bàn phím ảo
            // Giữ nguyên logic xác định key của bạn để đảm bảo tương thích
            const key = e.key === ' ' ? ' ' : e.code.startsWith('Key') ? e.key : e.code;
            if (typeof highlight === 'function') {
                highlight(key);
            }
        }
    });

    // [⭐ SỬA LỖI ⭐]
    // Xử lý sự kiện thả phím để bỏ làm nổi bật bàn phím ảo.
    document.addEventListener('keyup', (e) => {
        if (document.activeElement === typingInputEl) {
            const key = e.key === ' ' ? ' ' : e.code.startsWith('Key') ? e.key : e.code;
            if (typeof unhighlight === 'function') {
                unhighlight(key);
            }
        }
    });
}

// Giả sử có một hàm init() để khởi chạy mọi thứ
if (typeof init === "function") {
    init();
} else {
    // Nếu không có hàm init, chạy trực tiếp setupEventListeners
    setupEventListeners();
    // Và hiển thị modal nhập tên khi bắt đầu
    if (nameModal && typeof nameModal.showModal === 'function') {
       // nameModal.showModal(); // Bỏ comment dòng này nếu bạn muốn modal hiện ngay khi tải trang
    }
}