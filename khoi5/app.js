// --- LOGIC ỨNG DỤNG ---

// DOM Elements
const chaptersContainer = document.getElementById('chapters-container');
const lessonListView = document.getElementById('lesson-list-view');
const lessonDetailView = document.getElementById('lesson-detail-view');
const resourceLinksContainer = document.getElementById('resource-links-container');

// Global State
let currentQuizData = [];

// --- FUNCTIONS ---

/**
 * Xử lý chuyển đổi giữa các tab
 * @param {Event} evt - Sự kiện click
 * @param {string} tabName - Tên của tab cần hiển thị
 */
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

/**
 * Hiển thị các nút link đến tài liệu PDF
 */
function renderResourceLinks() {
    if (!resourceLinksContainer || typeof gradeInfo === 'undefined') return;
    let linksHtml = '<div class="flex justify-center items-center gap-4 flex-wrap">';
    if (gradeInfo.sgk_pdf) {
        linksHtml += `
            <a href="${gradeInfo.sgk_pdf}" target="_blank" class="bg-theme-blue text-white font-semibold py-2 px-5 rounded-md hover:bg-opacity-90 transition-colors flex items-center gap-2 border border-gray-300 shadow-sm">
                <i class="fas fa-book-open"></i>
                <span>Xem Sách Giáo Khoa</span>
            </a>`;
    }
    if (gradeInfo.sgv_pdf) {
        linksHtml += `
            <a href="${gradeInfo.sgv_pdf}" target="_blank" class="bg-theme-red text-white font-semibold py-2 px-5 rounded-md hover:bg-opacity-90 transition-colors flex items-center gap-2 border border-gray-300 shadow-sm">
                <i class="fas fa-user-tie"></i>
                <span>Xem Sách Giáo Viên</span>
            </a>`;
    }
    linksHtml += '</div>';
    resourceLinksContainer.innerHTML = linksHtml;
}

/**
 * Hiển thị danh sách các chủ đề và bài học
 */
function renderLessonList() {
    if (!chaptersContainer || typeof lessonsData === 'undefined') return;
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

/**
 * Hiển thị chi tiết một bài học cụ thể với giao diện mới
 */
function renderLessonDetail(chapterKey, lessonId) {
    const lesson = lessonsData[chapterKey].lessons.find(l => l.id === lessonId);
    const lessonDetails = getLessonDetails(lessonId);
    if (!lesson) return;
    
    currentQuizData = lessonDetails.quiz || [];
    
    const headerHtml = `
        <header class="text-center mb-10">
            <a href="#" onclick="showLessonList(); return false;" class="text-gray-500 hover:text-theme-blue mb-4 inline-block"><i class="fas fa-arrow-left"></i> Quay lại</a>
            <h1 class="text-4xl font-bold text-theme-blue">${lesson.title}</h1>
            <p class="text-lg text-gray-500 mt-2">${lessonsData[chapterKey].title}</p>
        </header>`;

    const objectivesHtml = `
        <details class="knowledge-section" open>
            <summary class="knowledge-summary">
                <span><i class="fas fa-bullseye-pointer icon-blue"></i>Mục tiêu bài học</span>
                <i class="fas fa-chevron-down arrow"></i>
            </summary>
            <div class="knowledge-content">
                <ul class="list-disc list-inside space-y-2">
                    ${lessonDetails.objectives.map(obj => `<li>${obj}</li>`).join('')}
                </ul>
            </div>
        </details>`;
    
    const coreContentHtml = `
        <details class="knowledge-section">
            <summary class="knowledge-summary">
                <span><i class="fas fa-book-sparkles icon-blue"></i>Nội dung cốt lõi</span>
                <i class="fas fa-chevron-down arrow"></i>
            </summary>
            <div class="knowledge-content">
                <ul class="list-disc list-inside space-y-2">
                     ${(lessonDetails.core_content && lessonDetails.core_content.length > 0) ? lessonDetails.core_content.map(content => `<li>${content}</li>`).join('') : '<li>Nội dung đang được cập nhật.</li>'}
                </ul>
            </div>
        </details>`;

    // [THAY ĐỔI] Thêm tab "Củng cố bài học"
    const tabsHtml = `
        <div class="w-full mt-8">
            <div class="tab-buttons">
                <button class="tab-button active" onclick="openTab(event, 'tab-slideshow')">Bài giảng trình chiếu</button>
                <button class="tab-button" onclick="openTab(event, 'tab-video')">Video bài giảng</button>
                <button class="tab-button" onclick="openTab(event, 'tab-quiz')">Luyện tập trắc nghiệm</button>
                <button class="tab-button" onclick="openTab(event, 'tab-consolidation')">Củng cố bài học</button>
            </div>

            <div id="tab-slideshow" class="tab-content active">
                ${lesson.gdrive_embed ? `<div class="video-container"><iframe src="${lesson.gdrive_embed}" frameborder="0" allowfullscreen="true"></iframe></div>` : `<p class="text-center text-gray-500 p-8">Không có bài giảng trình chiếu cho bài học này.</p>`}
            </div>

            <div id="tab-video" class="tab-content">
                 ${lesson.video_embed ? `<div class="video-container"><iframe src="${lesson.video_embed}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>` : `<p class="text-center text-gray-500 p-8">Không có video cho bài học này.</p>`}
            </div>

            <div id="tab-quiz" class="tab-content">
                ${renderQuizHtml()}
            </div>
            
            <div id="tab-consolidation" class="tab-content">
                ${renderConsolidationHtml(lessonDetails)}
            </div>
        </div>`;

    lessonDetailView.innerHTML = `${headerHtml}<main class="space-y-4">${objectivesHtml}${coreContentHtml}${tabsHtml}</main>`;
    lessonListView.style.display = 'none';
    lessonDetailView.style.display = 'block';
    window.scrollTo(0, 0);
}

/**
 * Tạo HTML cho tab "Củng cố bài học"
 */
function renderConsolidationHtml(lessonDetails) {
    const hasActivities = lessonDetails.activities && lessonDetails.activities.length > 0;
    const hasAnswerKeys = lessonDetails.answer_keys && Object.keys(lessonDetails.answer_keys).length > 0;

    if (!hasActivities && !hasAnswerKeys) {
        return '<p class="text-center text-gray-500 p-8">Nội dung củng cố đang được cập nhật.</p>';
    }

    let activitiesHtml = '';
    if (hasActivities) {
        activitiesHtml = `
            <div class="consolidation-section">
                <h3 class="consolidation-title">Hoạt động trong bài</h3>
                <div class="consolidation-content space-y-4">
                    ${lessonDetails.activities.map(activity => `
                        <div>
                            <h4 class="font-bold">${activity.name} (${activity.duration} phút)</h4>
                            <div class="grid md:grid-cols-2 gap-4 mt-2">
                                <div>
                                    <p class="font-semibold">Nhiệm vụ giáo viên:</p>
                                    <ul class="list-disc pl-5">${activity.teacher_tasks.map(task => `<li>${task}</li>`).join('')}</ul>
                                </div>
                                <div>
                                    <p class="font-semibold">Hoạt động học sinh:</p>
                                    <ul class="list-disc pl-5">${activity.student_tasks.map(task => `<li>${task}</li>`).join('')}</ul>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>`;
    }

    let answerKeysHtml = '';
    if (hasAnswerKeys) {
        answerKeysHtml = `
            <div class="consolidation-section">
                <h3 class="consolidation-title">Gợi ý trả lời</h3>
                <div class="consolidation-content space-y-2">
                    ${lessonDetails.answer_keys.luyen_tap ? `<div><p class="font-bold">Luyện tập:</p><ul class="list-disc pl-5">${lessonDetails.answer_keys.luyen_tap.map(answer => `<li>${answer}</li>`).join('')}</ul></div>` : ''}
                    ${lessonDetails.answer_keys.van_dung ? `<div><p class="font-bold">Vận dụng:</p><p class="pl-5">${lessonDetails.answer_keys.van_dung}</p></div>` : ''}
                </div>
            </div>`;
    }

    return activitiesHtml + answerKeysHtml;
}


/**
 * Tạo HTML cho phần trắc nghiệm
 */
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

/**
 * Quay lại trang danh sách bài học
 */
function showLessonList() {
    lessonDetailView.style.display = 'none';
    lessonListView.style.display = 'block';
    window.scrollTo(0, 0);
}

/**
 * Xử lý khi người dùng chọn một đáp án trắc nghiệm
 */
function selectAnswer(questionIndex, optionIndex) {
    const questionDiv = document.getElementById(`question-${questionIndex}`);
    questionDiv.querySelectorAll('.quiz-option').forEach(btn => btn.classList.remove('selected'));
    const selectedButton = questionDiv.querySelectorAll('.quiz-option')[optionIndex];
    selectedButton.classList.add('selected');
}

/**
 * Kiểm tra và hiển thị kết quả trắc nghiệm
 */
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

// Chạy hàm renderLessonList khi trang được tải xong
document.addEventListener('DOMContentLoaded', renderLessonList);
