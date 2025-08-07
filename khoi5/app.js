// --- LOGIC ỨNG DỤNG ---

// DOM Elements
const chaptersContainer = document.getElementById('chapters-container');
const lessonListView = document.getElementById('lesson-list-view');
const lessonDetailView = document.getElementById('lesson-detail-view');
const resourceLinksContainer = document.getElementById('resource-links-container');
const mainContent = document.querySelector('main');

// URL API từ Google Apps Script
// [QUAN TRỌNG] Dán URL ứng dụng web của bạn vào đây
const GOOGLE_SHEET_API_URL = 'https://script.google.com/macros/s/AKfycbyPRjqxt4_7ZQTqYMaXrI-7QneVNNJ6beQxU2KNvNRG5nrzXNpRVjCVncNbVkMfK5wL/exec';

// Global State
let lessonsData = {};
let allDetails = {};
let currentQuizData = [];

// --- FUNCTIONS ---

/**
 * Lấy dữ liệu từ Google Sheet API
 */
async function fetchData() {
    // Hiển thị thông báo đang tải
    mainContent.innerHTML = '<p class="text-center text-gray-500">Đang tải dữ liệu bài học...</p>';
    try {
        const response = await fetch(GOOGLE_SHEET_API_URL);
        if (!response.ok) {
            throw new Error(`Lỗi mạng: ${response.statusText}`);
        }
        const data = await response.json();
        if (data.error) {
            throw new Error(`Lỗi từ Google Script: ${data.error}`);
        }
        
        // Lưu dữ liệu vào biến toàn cục
        lessonsData = data.lessonsData;
        allDetails = data.allDetails;
        
        // Xóa thông báo đang tải và hiển thị danh sách bài học
        mainContent.innerHTML = ''; // Xóa chữ "Đang tải..."
        renderLessonList();

    } catch (error) {
        // Hiển thị thông báo lỗi
        mainContent.innerHTML = `<p class="text-center text-red-500">Không thể tải dữ liệu. Vui lòng kiểm tra lại URL API và cài đặt Google Sheet.<br>${error.message}</p>`;
        console.error("Lỗi khi lấy dữ liệu:", error);
    }
}

/**
 * Lấy chi tiết bài học từ dữ liệu đã tải
 */
function getLessonDetails(lessonId) {
    return allDetails[lessonId] || { "objectives": ["Nội dung đang được cập nhật."], "core_content": [], "quiz": [] };
}


function openTab(evt, tabName) {
    const tabcontent = lessonDetailView.getElementsByClassName("tab-content");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    const tablinks = lessonDetailView.getElementsByClassName("tab-button");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function renderResourceLinks() {
    // Phần này có thể lấy dữ liệu từ một sheet khác nếu muốn
    let linksHtml = `
        <div class="flex justify-center items-center gap-4 flex-wrap">
            <a href="#" target="_blank" class="bg-theme-blue text-white font-semibold py-2 px-5 rounded-md hover:bg-opacity-90 transition-colors flex items-center gap-2 border border-gray-300 shadow-sm">
                <i class="fas fa-book-open"></i>
                <span>Xem Sách Giáo Khoa</span>
            </a>
            <a href="#" target="_blank" class="bg-theme-red text-white font-semibold py-2 px-5 rounded-md hover:bg-opacity-90 transition-colors flex items-center gap-2 border border-gray-300 shadow-sm">
                <i class="fas fa-user-tie"></i>
                <span>Xem Sách Giáo Viên</span>
            </a>
        </div>`;
    resourceLinksContainer.innerHTML = linksHtml;
}

function renderLessonList() {
    if (!chaptersContainer || Object.keys(lessonsData).length === 0) return;
    renderResourceLinks();
    chaptersContainer.innerHTML = '';
    for (const chapterKey in lessonsData) {
        const chapter = lessonsData[chapterKey];
        let chapterHtml = `
            <section>
                <h2 class="text-2xl font-bold text-theme-blue mb-4">${chapter.title}</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">`;
        chapter.lessons.forEach(lesson => {
            const iconClass = chapter.icon || 'fas fa-book';
            chapterHtml += `
                <div onclick="renderLessonDetail('${chapterKey}', '${lesson.id}')" class="lesson-link cursor-pointer bg-white border border-gray-200 rounded-lg shadow-sm p-4 flex flex-col items-center text-center hover:shadow-lg hover:border-theme-blue">
                    <i class="${iconClass} text-3xl text-theme-red mb-3"></i>
                    <h4 class="font-semibold text-theme-blue">${lesson.title}</h4>
                </div>`;
        });
        chapterHtml += `</div></section>`;
        chaptersContainer.innerHTML += chapterHtml;
    }
}

function renderLessonDetail(chapterKey, lessonId) {
    const lesson = lessonsData[chapterKey].lessons.find(l => l.id === lessonId);
    const lessonDetails = getLessonDetails(lessonId);
    if (!lesson) return;
    
    currentQuizData = lessonDetails.quiz || [];
    
    const headerHtml = `<header class="text-center mb-10">... (giữ nguyên)</header>`; // Giữ nguyên cho ngắn gọn
    const imageHtml = lesson.image ? `<div class="mb-8 rounded-lg overflow-hidden shadow-lg"><img src="${lesson.image}" alt="Hình ảnh bài học: ${lesson.title}" class="w-full h-auto max-h-96 object-cover"></div>` : '';
    const objectivesHtml = `<details class="knowledge-section" open>... (giữ nguyên)</details>`;
    const coreContentHtml = `<details class="knowledge-section">... (giữ nguyên)</details>`;
    const tabsHtml = `<div class="w-full mt-8">... (giữ nguyên)</div>`;

    // Tái sử dụng code từ phiên bản trước để render HTML chi tiết
    // (Phần này không thay đổi logic, chỉ cần đảm bảo nó được gọi đúng)
    const fullDetailHtml = `
        <header class="text-center mb-10">
            <a href="#" onclick="showLessonList(); return false;" class="text-gray-500 hover:text-theme-blue mb-4 inline-block"><i class="fas fa-arrow-left"></i> Quay lại</a>
            <h1 class="text-4xl font-bold text-theme-blue">${lesson.title}</h1>
            <p class="text-lg text-gray-500 mt-2">${lessonsData[chapterKey].title}</p>
        </header>
        <main class="space-y-4">
            ${imageHtml}
            <details class="knowledge-section" open>
                <summary class="knowledge-summary">
                    <span><i class="fas fa-bullseye-pointer icon-blue"></i>Mục tiêu bài học</span>
                    <i class="fas fa-chevron-down arrow"></i>
                </summary>
                <div class="knowledge-content">
                    <ul class="list-disc list-inside space-y-2">${lessonDetails.objectives.map(obj => `<li>${obj}</li>`).join('')}</ul>
                </div>
            </details>
            <details class="knowledge-section">
                <summary class="knowledge-summary">
                    <span><i class="fas fa-book-sparkles icon-blue"></i>Nội dung cốt lõi</span>
                    <i class="fas fa-chevron-down arrow"></i>
                </summary>
                <div class="knowledge-content">
                    <ul class="list-disc list-inside space-y-2">${(lessonDetails.core_content && lessonDetails.core_content.length > 0) ? lessonDetails.core_content.map(content => `<li>${content}</li>`).join('') : '<li>Nội dung đang được cập nhật.</li>'}</ul>
                </div>
            </details>
            <div class="w-full mt-8">
                <div class="tab-buttons">
                    <button class="tab-button active" onclick="openTab(event, 'tab-slideshow')">Bài giảng trình chiếu</button>
                    <button class="tab-button" onclick="openTab(event, 'tab-video')">Video bài giảng</button>
                    <button class="tab-button" onclick="openTab(event, 'tab-quiz')">Luyện tập trắc nghiệm</button>
                </div>
                <div id="tab-slideshow" class="tab-content active">${lesson.gdrive_embed ? `<div class="aspect-w-16 aspect-h-9"><iframe class="w-full h-full" src="${lesson.gdrive_embed}" frameborder="0" allowfullscreen="true"></iframe></div>` : `<p class="text-center text-gray-500 p-8">Không có bài giảng.</p>`}</div>
                <div id="tab-video" class="tab-content">${lesson.video_embed ? `<div class="aspect-w-16 aspect-h-9"><iframe class="w-full h-full" src="${lesson.video_embed}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>` : `<p class="text-center text-gray-500 p-8">Không có video.</p>`}</div>
                <div id="tab-quiz" class="tab-content">${renderQuizHtml()}</div>
            </div>
        </main>`;

    lessonDetailView.innerHTML = fullDetailHtml;
    lessonListView.style.display = 'none';
    lessonDetailView.style.display = 'block';
    window.scrollTo(0, 0);
}

function renderQuizHtml() {
    if (currentQuizData.length === 0) {
        return '<p class="text-center text-gray-500 p-8">Không có bài trắc nghiệm cho bài học này.</p>';
    }
    return `
        <div id="quiz-container" class="space-y-6">
            ${currentQuizData.map((q, index) => `
                <div class="quiz-question" id="question-${index}">
                    <p class="font-semibold text-lg mb-3">${index + 1}. ${q.question}</p>
                    <div class="quiz-options space-y-2">
                        ${q.options.map((opt, optIndex) => `<button onclick="selectAnswer(${index}, ${optIndex})" class="quiz-option">${opt}</button>`).join('')}
                    </div>
                </div>`).join('')}
        </div>
        <div class="mt-6 text-center">
            <button onclick="checkQuiz()" class="bg-theme-red text-white font-bold py-2 px-6 rounded-lg hover:bg-opacity-90 transition-colors">Kiểm tra đáp án</button>
            <p id="quiz-result" class="mt-3 font-bold text-lg"></p>
        </div>`;
}

function showLessonList() {
    lessonDetailView.style.display = 'none';
    lessonListView.style.display = 'block';
    window.scrollTo(0, 0);
}

function selectAnswer(questionIndex, optionIndex) {
    const questionDiv = document.getElementById(`question-${index}`);
    questionDiv.querySelectorAll('.quiz-option').forEach(btn => btn.classList.remove('selected'));
    const selectedButton = questionDiv.querySelectorAll('.quiz-option')[optionIndex];
    selectedButton.classList.add('selected');
}

function checkQuiz() {
    let score = 0;
    currentQuizData.forEach((q, index) => {
        const questionDiv = document.getElementById(`question-${index}`);
        const options = questionDiv.querySelectorAll('.quiz-option');
        const selectedButton = questionDiv.querySelector('.quiz-option.selected');
        options.forEach(btn => btn.disabled = true);
        if (selectedButton) {
            const selectedAnswerIndex = Array.from(options).indexOf(selectedButton);
            if (selectedAnswerIndex === q.answer) {
                score++;
                selectedButton.classList.add('correct');
            } else {
                selectedButton.classList.add('incorrect');
                options[q.answer].classList.add('correct');
            }
        } else {
            options[q.answer].classList.add('correct');
        }
    });
    const resultElement = document.getElementById('quiz-result');
    resultElement.textContent = `Bạn đã trả lời đúng ${score} / ${currentQuizData.length} câu!`;
    resultElement.style.color = (score === currentQuizData.length) ? '#22c55e' : '#ef4444';
}

// Chạy hàm fetchData khi trang được tải xong
document.addEventListener('DOMContentLoaded', fetchData);
