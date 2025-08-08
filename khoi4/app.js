// --- LOGIC ỨNG DỤNG ---

// DOM Elements
const chaptersContainer = document.getElementById('chapters-container');
const lessonListView = document.getElementById('lesson-list-view');
const lessonDetailView = document.getElementById('lesson-detail-view');
const resourceLinksContainer = document.getElementById('resource-links-container');

// URL API từ Google Apps Script
const GOOGLE_SHEET_API_URL = 'https://script.google.com/macros/s/AKfycbz4rC4W1ilxjAY-nyLVWoP3tB9ueWioWg-UZdb9U9MPcuHJ_Z9ly59X2FdrZKRv8ikpsQ/exec';

// Global State
let lessonsData = {};
let allDetails = {};
let currentQuizData = [];

// --- FUNCTIONS ---

function convertToEmbedUrl(url) {
    if (!url || typeof url !== 'string') return "";
    try {
        const urlObj = new URL(url);
        let videoId = null;
        if (urlObj.hostname.includes('youtube.com') && urlObj.pathname === '/watch') {
            videoId = urlObj.searchParams.get('v');
        } else if (urlObj.hostname.includes('youtu.be')) {
            videoId = urlObj.pathname.slice(1);
        } else if (urlObj.hostname.includes('youtube.com') && urlObj.pathname.startsWith('/embed/')) {
            return url;
        }
        if (videoId) { return `https://www.youtube.com/embed/${videoId}`; }
    } catch (e) { console.error("URL video không hợp lệ:", url, e); return ""; }
    return url;
}

function convertGoogleSlideToEmbedUrl(url) {
    if (!url || typeof url !== 'string' || !url.includes('docs.google.com/presentation')) { return ""; }
    if (url.includes('/embed')) { return url; }
    const match = url.match(/\/d\/([a-zA-Z0-9-_]+)/);
    if (match && match[1]) {
        const presentationId = match[1];
        return `https://docs.google.com/presentation/d/${presentationId}/embed?start=false&loop=false&delayms=3000`;
    }
    console.error("Không thể trích xuất ID từ link Google Slides:", url);
    return "";
}

async function fetchData() {
    if (GOOGLE_SHEET_API_URL === 'DÁN_URL_CỦA_BẠN_VÀO_ĐÂY' || !GOOGLE_SHEET_API_URL) {
        chaptersContainer.innerHTML = `<div class="text-center p-6 bg-red-100 border-l-4 border-red-500 text-red-700 rounded-lg"><h3 class="font-bold text-lg mb-2">Lỗi Cấu Hình!</h3><p>Bạn chưa cập nhật URL của Google Sheet API trong tệp <strong>app.js</strong>.</p><p class="mt-1">Vui lòng thay thế dòng chữ <code>'DÁN_URL_CỦA_BẠN_VÀO_ĐÂY'</code> bằng URL ứng dụng web bạn đã nhận được từ Google Apps Script.</p></div>`;
        return;
    }
    chaptersContainer.innerHTML = '<p class="text-center text-gray-500 animate-pulse">Đang tải dữ liệu bài học...</p>';
    try {
        const response = await fetch(GOOGLE_SHEET_API_URL);
        if (!response.ok) throw new Error(`Lỗi mạng: ${response.statusText}`);
        const data = await response.json();
        if (data.error) throw new Error(`Lỗi từ Google Script: ${data.error}`);
        if (!data.lessonsData) throw new Error('Dữ liệu không hợp lệ từ Google Sheet.');
        lessonsData = data.lessonsData;
        allDetails = data.allDetails;
        renderLessonList();
    } catch (error) {
        chaptersContainer.innerHTML = `<div class="text-center p-6 bg-red-100 border-l-4 border-red-500 text-red-700 rounded-lg"><h3 class="font-bold text-lg mb-2">Không thể tải dữ liệu!</h3><p>Đã xảy ra lỗi. Vui lòng kiểm tra lại URL API và cài đặt Google Sheet.</p><p class="mt-3 text-xs font-mono bg-red-50 p-2 rounded">Chi tiết lỗi: ${error.message}</p></div>`;
        console.error("Lỗi khi lấy dữ liệu:", error);
    }
}

function getLessonDetails(lessonId) {
    return allDetails[lessonId] || { "objectives": ["Nội dung đang được cập nhật."], "core_content": [], "quiz": [], "answer_keys": {} };
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
    const gradeInfo = { sgk_pdf: "SGK-TinHoc4-CanhDieu.pdf", sgv_pdf: "SGV-TinHọc4-CanhDieu.pdf" };
    if (!resourceLinksContainer) return;
    let linksHtml = `<div class="flex justify-center items-center gap-4 flex-wrap">
        <a href="${gradeInfo.sgk_pdf}" target="_blank" class="bg-theme-blue text-white font-semibold py-2 px-5 rounded-md hover:bg-opacity-90 transition-colors flex items-center gap-2 border border-gray-300 shadow-sm"><i class="fas fa-book-open"></i><span>Xem Sách Giáo Khoa</span></a>
        <a href="${gradeInfo.sgv_pdf}" target="_blank" class="bg-theme-red text-white font-semibold py-2 px-5 rounded-md hover:bg-opacity-90 transition-colors flex items-center gap-2 border border-gray-300 shadow-sm"><i class="fas fa-user-tie"></i><span>Xem Sách Giáo Viên</span></a>
    </div>`;
    resourceLinksContainer.innerHTML = linksHtml;
}

function renderLessonList() {
    if (!chaptersContainer || Object.keys(lessonsData).length === 0) return;
    renderResourceLinks();
    chaptersContainer.innerHTML = '';
    for (const chapterKey in lessonsData) {
        const chapter = lessonsData[chapterKey];
        let chapterHtml = `<section><h2 class="text-2xl font-bold text-theme-blue mb-4">${chapter.title}</h2><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">`;
        chapter.lessons.forEach(lesson => {
            const iconClass = chapter.icon || 'fas fa-book';
            const slideEmbedUrl = convertGoogleSlideToEmbedUrl(lesson.gdrive_embed);

            chapterHtml += `
                <div onclick="renderLessonDetail('${chapterKey}', '${lesson.id}')" class="lesson-link">
                    <i class="${iconClass} text-3xl text-theme-red mb-3"></i>
                    <h4 class="font-semibold text-theme-blue">${lesson.title}</h4>
                    
                    ${slideEmbedUrl ? `
                        <span 
                            class="slide-icon" 
                            title="Xem bài giảng trình chiếu" 
                            onclick="event.stopPropagation(); window.open('${slideEmbedUrl}', '_blank');">
                            <i class="fas fa-chalkboard-teacher"></i>
                        </span>
                    ` : ''}
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
    
    const backButtonHtml = `<a href="#" onclick="showLessonList(); return false;" class="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-800 font-semibold rounded-lg shadow-sm hover:bg-gray-200 transition-colors mb-6"><i class="fas fa-arrow-left"></i><span>Quay lại Danh sách bài học</span></a>`;

    // [CẬP NHẬT] Thêm class 'text-center' và màu chữ cho tiêu đề
    const headerHtml = `
        <header class="lesson-header text-center">
            <h1 class="text-4xl sm:text-5xl font-bold text-theme-red">${lesson.title}</h1>
            <p class="text-lg text-gray-500 mt-2">${lessonsData[chapterKey].title}</p>
        </header>`;

    const imageHtml = lesson.image ? `<div class="my-8 rounded-lg overflow-hidden shadow-lg"><img src="${lesson.image}" alt="Hình ảnh bài học: ${lesson.title}" class="w-full h-auto max-h-96 object-cover"></div>` : '';

    // [CẬP NHẬT] Thêm icon vào phần mục tiêu
    const objectivesHtml = `
        <details class="info-card" open>
            <summary class="info-card-header">
                <i class="fas fa-paper-plane text-lg text-theme-red"></i>
                <span class="font-bold text-theme-blue">Mục tiêu bài học</span>
                <i class="fas fa-chevron-right arrow ml-auto"></i>
            </summary>
            <div class="info-card-content">
                <ul class="list-disc list-inside space-y-2 text-gray-700">
                    ${lessonDetails.objectives.map(obj => `<li>${obj}</li>`).join('')}
                </ul>
            </div>
        </details>`;
    
    // [CẬP NHẬT] Thêm icon vào phần nội dung cốt lõi
    const coreContentHtml = `
        <details class="info-card">
            <summary class="info-card-header">
                 <i class="fas fa-book-open-reader text-lg text-theme-red"></i>
                <span class="font-bold text-theme-blue">Nội dung cốt lõi</span>
                <i class="fas fa-chevron-right arrow ml-auto"></i>
            </summary>
            <div class="info-card-content">
                <ul class="list-disc list-inside space-y-2 text-gray-700">
                    ${(lessonDetails.core_content && lessonDetails.core_content.length > 0) ? lessonDetails.core_content.map(content => `<li>${content}</li>`).join('') : '<li>Nội dung đang được cập nhật.</li>'}
                </ul>
            </div>
        </details>`;

    const gdriveEmbedUrl = convertGoogleSlideToEmbedUrl(lesson.gdrive_embed);
    const videoEmbedUrl = convertToEmbedUrl(lesson.video_embed);

    const tabsHtml = `
        <div class="w-full mt-10">
            <div class="tab-buttons">
                <button class="tab-button active" onclick="openTab(event, 'tab-slideshow')"><i class="fas fa-chalkboard-teacher mr-2"></i>Bài giảng trình chiếu</button>
                <button class="tab-button" onclick="openTab(event, 'tab-video')"><i class="fab fa-youtube mr-2"></i>Video bài giảng</button>
                <button class="tab-button" onclick="openTab(event, 'tab-quiz')"><i class="fas fa-tasks mr-2"></i>Luyện tập trắc nghiệm</button>
                <button class="tab-button" onclick="openTab(event, 'tab-consolidation')"><i class="fas fa-star mr-2"></i>Củng cố bài học</button>
            </div>
            <div id="tab-slideshow" class="tab-content active">${gdriveEmbedUrl ? `<div class="video-container"><iframe src="${gdriveEmbedUrl}" frameborder="0" allowfullscreen="true"></iframe></div>` : `<p class="text-center text-gray-500 p-8">Không có bài giảng cho bài học này.</p>`}</div>
            <div id="tab-video" class="tab-content">${videoEmbedUrl ? `<div class="video-container"><iframe src="${videoEmbedUrl}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>` : `<p class="text-center text-gray-500 p-8">Không có video cho bài học này.</p>`}</div>
            <div id="tab-quiz" class="tab-content">${renderQuizHtml()}</div>
            <div id="tab-consolidation" class="tab-content">${renderConsolidationHtml(lessonDetails)}</div>
        </div>`;

    const fullDetailHtml = `
        ${backButtonHtml}
        ${headerHtml}
        <main class="space-y-4">
            ${imageHtml}
            ${objectivesHtml}
            ${coreContentHtml}
            ${tabsHtml}
            <div class="mt-12">
                ${backButtonHtml}
            </div>
        </main>`;

    lessonDetailView.innerHTML = fullDetailHtml;
    lessonListView.style.display = 'none';
    lessonDetailView.style.display = 'block';
    window.scrollTo(0, 0);
}


function renderConsolidationHtml(lessonDetails) { 
    const hasAnswerKeys = lessonDetails.answer_keys && Object.keys(lessonDetails.answer_keys).length > 0;
    if (!hasAnswerKeys) {
        return '<p class="text-center text-gray-500 p-8">Nội dung củng cố đang được cập nhật.</p>';
    }
    return `
        <div class="consolidation-section">
            <h3 class="consolidation-title">Gợi ý trả lời</h3>
            <div class="consolidation-content space-y-4">
                ${lessonDetails.answer_keys.luyen_tap ? `<div><p class="font-bold text-gray-800">Luyện tập:</p><ul class="list-decimal list-inside ml-4 mt-1">${lessonDetails.answer_keys.luyen_tap.map(answer => `<li>${answer}</li>`).join('')}</ul></div>` : ''}
                ${lessonDetails.answer_keys.van_dung ? `<div><p class="font-bold text-gray-800">Vận dụng:</p><p class="ml-4 mt-1">${lessonDetails.answer_keys.van_dung}</p></div>` : ''}
            </div>
        </div>`;
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
    if (!questionDiv) return;
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
