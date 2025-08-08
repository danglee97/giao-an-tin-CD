// --- LOGIC ỨNG DỤNG ---

// DOM Elements
const chaptersContainer = document.getElementById('chapters-container');
const lessonListView = document.getElementById('lesson-list-view');
const lessonDetailView = document.getElementById('lesson-detail-view');
const resourceLinksContainer = document.getElementById('resource-links-container');

// URL API từ Google Apps Script
const GOOGLE_SHEET_API_URL = 'https://script.google.com/macros/s/AKfycbyPRjqxt4_7ZQTqYMaXrI-7QneVNNJ6beQxU2KNvNRG5nrzXNpRVjCVncNbVkMfK5wL/exec';

// Global State
let lessonsData = {};
let allDetails = {};
let currentQuizData = [];

// --- FUNCTIONS ---

/**
 * [MỚI] Chuyển đổi link YouTube thông thường sang link nhúng (embed)
 * @param {string} url - Link YouTube gốc
 * @returns {string} - Link YouTube đã được chuyển đổi sang định dạng embed
 */
function convertToEmbedUrl(url) {
    if (!url || typeof url !== 'string') return "";
    try {
        const urlObj = new URL(url);
        let videoId = null;

        // Xử lý link dạng: https://www.youtube.com/watch?v=VIDEO_ID
        if (urlObj.hostname.includes('youtube.com') && urlObj.pathname === '/watch') {
            videoId = urlObj.searchParams.get('v');
        }
        // Xử lý link dạng rút gọn: https://youtu.be/VIDEO_ID
        else if (urlObj.hostname.includes('youtu.be')) {
            videoId = urlObj.pathname.slice(1);
        }
        // Nếu đã là link embed thì giữ nguyên
        else if (urlObj.hostname.includes('youtube.com') && urlObj.pathname.startsWith('/embed/')) {
            return url;
        }

        if (videoId) {
            return `https://www.youtube.com/embed/${videoId}`;
        }
    } catch (e) {
        console.error("URL video không hợp lệ:", url, e);
        return ""; // Trả về chuỗi rỗng nếu URL không hợp lệ
    }
    // Trả về URL gốc nếu không thể chuyển đổi
    return url;
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
    const gradeInfo = { sgk_pdf: "Sách GK Tin học 5 - Cánh Diệu.pdf", sgv_pdf: "Sách GV Tin học 5 - Cánh Diệu.pdf" };
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
            chapterHtml += `<div onclick="renderLessonDetail('${chapterKey}', '${lesson.id}')" class="lesson-link cursor-pointer bg-white border border-gray-200 rounded-lg shadow-sm p-4 flex flex-col items-center text-center hover:shadow-lg hover:border-theme-blue"><i class="${iconClass} text-3xl text-theme-red mb-3"></i><h4 class="font-semibold text-theme-blue">${lesson.title}</h4></div>`;
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
    
    const imageHtml = lesson.image ? `<div class="mb-8 rounded-lg overflow-hidden shadow-lg"><img src="${lesson.image}" alt="Hình ảnh bài học: ${lesson.title}" class="w-full h-auto max-h-96 object-cover"></div>` : '';
    
    // [CẬP NHẬT] Gọi hàm convertToEmbedUrl cho cả gdrive và video
    const gdriveEmbedUrl = lesson.gdrive_embed; // Giả sử link gdrive đã đúng định dạng embed
    const videoEmbedUrl = convertToEmbedUrl(lesson.video_embed);

    const fullDetailHtml = `
        <header class="text-center mb-10">
            <a href="#" onclick="showLessonList(); return false;" class="text-gray-500 hover:text-theme-blue mb-4 inline-block"><i class="fas fa-arrow-left"></i> Quay lại</a>
            <h1 class="text-4xl font-bold text-theme-blue">${lesson.title}</h1>
            <p class="text-lg text-gray-500 mt-2">${lessonsData[chapterKey].title}</p>
        </header>
        <main class="space-y-4">
            ${imageHtml}
            <details class="knowledge-section" open><summary class="knowledge-summary"><span><i class="fas fa-bullseye-pointer icon-blue"></i>Mục tiêu bài học</span><i class="fas fa-chevron-down arrow"></i></summary><div class="knowledge-content"><ul class="list-disc list-inside space-y-2">${lessonDetails.objectives.map(obj => `<li>${obj}</li>`).join('')}</ul></div></details>
            <details class="knowledge-section"><summary class="knowledge-summary"><span><i class="fas fa-book-sparkles icon-blue"></i>Nội dung cốt lõi</span><i class="fas fa-chevron-down arrow"></i></summary><div class="knowledge-content"><ul class="list-disc list-inside space-y-2">${(lessonDetails.core_content && lessonDetails.core_content.length > 0) ? lessonDetails.core_content.map(content => `<li>${content}</li>`).join('') : '<li>Nội dung đang được cập nhật.</li>'}</ul></div></details>
            <div class="w-full mt-8">
                <div class="tab-buttons">
                    <button class="tab-button active" onclick="openTab(event, 'tab-slideshow')">Bài giảng trình chiếu</button>
                    <button class="tab-button" onclick="openTab(event, 'tab-video')">Video bài giảng</button>
                    <button class="tab-button" onclick="openTab(event, 'tab-quiz')">Luyện tập trắc nghiệm</button>
                    <button class="tab-button" onclick="openTab(event, 'tab-consolidation')">Củng cố bài học</button>
                </div>
                <div id="tab-slideshow" class="tab-content active">${gdriveEmbedUrl ? `<div class="video-container"><iframe src="${gdriveEmbedUrl}" frameborder="0" allowfullscreen="true"></iframe></div>` : `<p class="text-center text-gray-500 p-8">Không có bài giảng.</p>`}</div>
                <div id="tab-video" class="tab-content">${videoEmbedUrl ? `<div class="video-container"><iframe src="${videoEmbedUrl}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>` : `<p class="text-center text-gray-500 p-8">Không có video.</p>`}</div>
                <div id="tab-quiz" class="tab-content">${renderQuizHtml()}</div>
                <div id="tab-consolidation" class="tab-content">${renderConsolidationHtml(lessonDetails)}</div>
            </div>
        </main>`;

    lessonDetailView.innerHTML = fullDetailHtml;
    lessonListView.style.display = 'none';
    lessonDetailView.style.display = 'block';
    window.scrollTo(0, 0);
}

function renderConsolidationHtml(lessonDetails) { 
    const hasActivities = lessonDetails.activities && lessonDetails.activities.length > 0;
    const hasAnswerKeys = lessonDetails.answer_keys && Object.keys(lessonDetails.answer_keys).length > 0;
    if (!hasActivities && !hasAnswerKeys) {
        return '<p class="text-center text-gray-500 p-8">Nội dung củng cố đang được cập nhật.</p>';
    }
    let activitiesHtml = hasActivities ? `...` : ''; // Giữ nguyên cho ngắn gọn
    let answerKeysHtml = hasAnswerKeys ? `...` : ''; // Giữ nguyên cho ngắn gọn
    return activitiesHtml + answerKeysHtml;
}
function renderQuizHtml() { /* ... Giữ nguyên ... */ }
function showLessonList() { /* ... Giữ nguyên ... */ }
function selectAnswer(questionIndex, optionIndex) { /* ... Giữ nguyên ... */ }
function checkQuiz() { /* ... Giữ nguyên ... */ }

// Chạy hàm fetchData khi trang được tải xong
document.addEventListener('DOMContentLoaded', fetchData);
