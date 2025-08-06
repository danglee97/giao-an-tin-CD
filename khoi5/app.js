// Lựa chọn các phần tử DOM
const chaptersContainer = document.getElementById('chapters-container');
const lessonListView = document.getElementById('lesson-list-view');
const lessonDetailView = document.getElementById('lesson-detail-view');
const resourceLinksContainer = document.getElementById('resource-links-container');

// Biến toàn cục để theo dõi trạng thái
let currentActivities = [];
let activityStatus = {};
let quizData = [];
let currentQuestionIndex = 0;
let score = 0;
let selectedOption = null;

/**
 * Hiển thị các nút link đến tài liệu PDF
 */
function renderResourceLinks() {
    if (!resourceLinksContainer || typeof gradeInfo === 'undefined') return;
    let linksHtml = '<div class="flex justify-center items-center gap-4 flex-wrap">';
    if (gradeInfo.sgk_pdf) {
        linksHtml += `<a href="${gradeInfo.sgk_pdf}" target="_blank" class="bg-theme-blue text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors flex items-center gap-2"><i class="fas fa-book-open"></i><span>Xem Sách Giáo Khoa</span></a>`;
    }
    if (gradeInfo.sgv_pdf) {
        linksHtml += `<a href="${gradeInfo.sgv_pdf}" target="_blank" class="bg-theme-red text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors flex items-center gap-2"><i class="fas fa-user-tie"></i><span>Xem Sách Giáo Viên</span></a>`;
    }
    linksHtml += '</div>';
    resourceLinksContainer.innerHTML = linksHtml;
}

/**
 * Hiển thị danh sách các chủ đề và bài học
 */
function renderLessonList() {
    if (!chaptersContainer) return;
    renderResourceLinks();
    chaptersContainer.innerHTML = '';
    for (const chapterKey in lessonsData) {
        const chapter = lessonsData[chapterKey];
        let chapterHtml = `
            <div>
                <h2 class="text-2xl font-bold text-theme-blue mb-4">${chapter.title}</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">`;
        chapter.lessons.forEach(lesson => {
            const iconClass = chapter.icon || 'fas fa-book-open';
            chapterHtml += `
                <div onclick="renderLessonDetail('${chapterKey}', '${lesson.id}')" class="lesson-link cursor-pointer bg-white border border-gray-200 rounded-lg shadow-sm p-4 flex flex-col items-center text-center">
                    <i class="${iconClass} text-3xl text-theme-red mb-3"></i>
                    <h4 class="font-semibold text-theme-blue">${lesson.title}</h4>
                </div>`;
        });
        chapterHtml += `</div></div>`;
        chaptersContainer.innerHTML += chapterHtml;
    }
}

/**
 * Hiển thị chi tiết một bài học cụ thể
 */
function renderLessonDetail(chapterKey, lessonId) {
    const lesson = lessonsData[chapterKey].lessons.find(l => l.id === lessonId);
    const lessonDetails = getLessonDetails(lessonId);
    if (!lesson) return;

    // --- [THAY ĐỔI] Tạo HTML cho các tab tài liệu bổ sung ---
    let extraResourcesHtml = `
        <div class="mt-12">
            <div class="tab-nav">
                <button class="tab-button active" onclick="openTab(event, 'tab-core-knowledge')">Kiến thức trọng tâm</button>
                ${lesson.gdrive_embed ? `<button class="tab-button" onclick="openTab(event, 'tab-presentation')">Bài giảng trình chiếu</button>` : ''}
                ${lesson.video_embed ? `<button class="tab-button" onclick="openTab(event, 'tab-video')">Video bài giảng</button>` : ''}
                ${(lessonDetails.quiz && lessonDetails.quiz.length > 0) ? `<button class="tab-button" onclick="openTab(event, 'tab-quiz')">Luyện tập trắc nghiệm</button>` : ''}
            </div>
            <div>
                <div id="tab-core-knowledge" class="tab-content active">
                    <h3 class="text-xl font-bold text-theme-blue mb-4">Nội dung cốt lõi</h3>
                    <ul class="list-disc list-inside space-y-2 text-gray-700 pl-5">
                        ${(lessonDetails.core_content && lessonDetails.core_content.length > 0) ? lessonDetails.core_content.map(content => `<li>${content}</li>`).join('') : '<li>Nội dung đang được cập nhật.</li>'}
                    </ul>
                </div>

                ${lesson.gdrive_embed ? `
                <div id="tab-presentation" class="tab-content">
                    <div class="relative w-full" style="padding-top: 56.25%;">
                        <iframe class="absolute top-0 left-0 w-full h-full" src="${lesson.gdrive_embed}" frameborder="0" allowfullscreen="true"></iframe>
                    </div>
                </div>` : ''}

                ${lesson.video_embed ? `
                <div id="tab-video" class="tab-content">
                     <div class="relative w-full" style="padding-top: 56.25%;">
                        <iframe class="absolute top-0 left-0 w-full h-full" src="${lesson.video_embed}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>` : ''}

                ${(lessonDetails.quiz && lessonDetails.quiz.length > 0) ? `
                <div id="tab-quiz" class="tab-content">
                    <div id="quiz-container"></div>
                </div>` : ''}
            </div>
        </div>
    `;

    let detailHtml = `
        <button onclick="showLessonList()" class="mb-6 bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors">
            <i class="fas fa-arrow-left mr-2"></i>Quay lại Danh sách
        </button>
        <div class="text-center mb-8">
            <img src="../logo.jpg" alt="Viet Anh School Logo" class="h-20 w-auto mx-auto mb-4" onerror="this.src='https://placehold.co/150x150/002060/FFFFFF?text=VA'; this.onerror=null;">
            <h1 class="text-3xl sm:text-4xl font-bold text-theme-blue">${lesson.title}</h1>
            <p class="text-lg text-gray-500 mt-2">${lessonsData[chapterKey].title}</p>
        </div>
        
        <div class="space-y-4 mb-8">
             <details class="bg-gray-50 rounded-lg p-4">
                <summary class="font-bold text-theme-blue text-lg flex justify-between items-center">
                    <span><i class="fas fa-bullseye mr-3 text-theme-red"></i>Mục tiêu bài học</span><i class="fas fa-chevron-right arrow"></i>
                </summary>
                <ul class="list-disc list-inside space-y-2 text-gray-700 mt-4 pl-5">${lessonDetails.objectives.map(obj => `<li>${obj}</li>`).join('')}</ul>
            </details>
            <details class="bg-gray-50 rounded-lg p-4">
                <summary class="font-bold text-theme-blue text-lg flex justify-between items-center">
                    <span><i class="fas fa-lightbulb mr-3 text-theme-red"></i>Gợi ý trả lời</span><i class="fas fa-chevron-right arrow"></i>
                </summary>
                <div class="mt-4 pl-5 space-y-3 text-gray-700">
                     ${(lessonDetails.answer_keys && Object.keys(lessonDetails.answer_keys).length > 0) ? `
                        ${lessonDetails.answer_keys.luyen_tap ? `<div><h4 class="font-semibold">Luyện tập:</h4><ul class="list-decimal list-inside ml-4">${lessonDetails.answer_keys.luyen_tap.map(answer => `<li>${answer}</li>`).join('')}</ul></div>` : ''}
                        ${lessonDetails.answer_keys.van_dung ? `<div><h4 class="font-semibold">Vận dụng:</h4><p class="ml-4">${lessonDetails.answer_keys.van_dung}</p></div>` : ''}
                    ` : '<p>Nội dung đang được cập nhật.</p>'}
                </div>
            </details>
        </div>

        <!-- Khu vực tài liệu bổ sung mới -->
        ${extraResourcesHtml}
    `;
    lessonDetailView.innerHTML = detailHtml;
    lessonListView.style.display = 'none';
    lessonDetailView.style.display = 'block';

    if (lessonDetails.quiz && lessonDetails.quiz.length > 0) {
        quizData = lessonDetails.quiz;
        startQuiz();
    }
    window.scrollTo(0, 0);
}

function showLessonList() {
    lessonDetailView.innerHTML = '';
    lessonListView.style.display = 'block';
    lessonDetailView.style.display = 'none';
}

function openTab(event, tabId) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }
    tablinks = document.getElementsByClassName("tab-button");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    document.getElementById(tabId).classList.add("active");
    event.currentTarget.classList.add("active");
}

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    selectedOption = null;
    renderQuizQuestion();
}

function renderQuizQuestion() {
    const quizContainer = document.getElementById('quiz-container');
    if (!quizContainer) return;
    const questionData = quizData[currentQuestionIndex];
    let optionsHtml = '';
    questionData.options.forEach((option, index) => {
        optionsHtml += `<button class="quiz-option" onclick="selectOption(${index}, this)">${option}</button>`;
    });
    quizContainer.innerHTML = `
        <div class="mb-4"><p class="font-semibold text-lg">${currentQuestionIndex + 1}. ${questionData.question}</p></div>
        <div id="quiz-options">${optionsHtml}</div>
        <div id="quiz-feedback" class="mt-4 font-semibold"></div>
        <div class="mt-6 text-right">
            <button id="check-answer-btn" onclick="checkAnswer()" class="bg-theme-blue text-white font-bold py-2 px-5 rounded-lg hover:bg-opacity-90">Kiểm tra</button>
            <button id="next-question-btn" onclick="nextQuestion()" class="bg-theme-red text-white font-bold py-2 px-5 rounded-lg hover:bg-opacity-90 hidden">Câu tiếp theo</button>
        </div>`;
}

function selectOption(index, element) {
    if (document.getElementById('check-answer-btn').classList.contains('hidden')) return;
    const options = document.querySelectorAll('.quiz-option');
    options.forEach(opt => opt.classList.remove('selected'));
    element.classList.add('selected');
    selectedOption = index;
}

function checkAnswer() {
    if (selectedOption === null) return;
    const questionData = quizData[currentQuestionIndex];
    const options = document.querySelectorAll('.quiz-option');
    const feedback = document.getElementById('quiz-feedback');
    
    document.getElementById('check-answer-btn').classList.add('hidden');
    document.getElementById('next-question-btn').classList.remove('hidden');

    if (selectedOption === questionData.answer) {
        score++;
        options[selectedOption].classList.add('correct');
        feedback.innerHTML = '<span class="text-green-600">Chính xác!</span>';
    } else {
        options[selectedOption].classList.add('incorrect');
        options[questionData.answer].classList.add('correct');
        feedback.innerHTML = '<span class="text-red-600">Không đúng. Đáp án đúng đã được tô màu xanh.</span>';
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    selectedOption = null;
    if (currentQuestionIndex < quizData.length) {
        renderQuizQuestion();
    } else {
        showFinalScore();
    }
}

function showFinalScore() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `
        <div class="text-center">
            <h3 class="text-2xl font-bold text-theme-blue mb-4">Hoàn thành!</h3>
            <p class="text-lg">Bạn đã trả lời đúng ${score} / ${quizData.length} câu hỏi.</p>
            <button onclick="startQuiz()" class="mt-6 bg-theme-blue text-white font-bold py-2 px-5 rounded-lg hover:bg-opacity-90">Làm lại</button>
        </div>`;
}

document.addEventListener('DOMContentLoaded', renderLessonList);
