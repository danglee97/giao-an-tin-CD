// Lựa chọn các phần tử DOM
const chaptersContainer = document.getElementById('chapters-container');
const lessonListView = document.getElementById('lesson-list-view');
const lessonDetailView = document.getElementById('lesson-detail-view');
const resourceLinksContainer = document.getElementById('resource-links-container');

// Biến toàn cục để theo dõi trạng thái
let currentActivities = [];
let activityStatus = {};

/**
 * [MỚI] Hiển thị các nút link đến tài liệu PDF
 */
function renderResourceLinks() {
    if (!resourceLinksContainer || typeof gradeInfo === 'undefined') return;

    let linksHtml = '<div class="flex justify-center items-center gap-4 flex-wrap">';
    
    if (gradeInfo.sgk_pdf) {
        linksHtml += `
            <a href="${gradeInfo.sgk_pdf}" target="_blank" class="bg-theme-blue text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors flex items-center gap-2">
                <i class="fas fa-book-open"></i>
                <span>Xem Sách Giáo Khoa</span>
            </a>
        `;
    }

    if (gradeInfo.sgv_pdf) {
        linksHtml += `
            <a href="${gradeInfo.sgv_pdf}" target="_blank" class="bg-theme-red text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors flex items-center gap-2">
                <i class="fas fa-user-tie"></i>
                <span>Xem Sách Giáo Viên</span>
            </a>
        `;
    }

    linksHtml += '</div>';
    resourceLinksContainer.innerHTML = linksHtml;
}

/**
 * Hiển thị danh sách các chủ đề và bài học
 */
function renderLessonList() {
    if (!chaptersContainer) return;
    
    // [MỚI] Gọi hàm để hiển thị link sách
    renderResourceLinks();

    chaptersContainer.innerHTML = '';
    for (const chapterKey in lessonsData) {
        const chapter = lessonsData[chapterKey];
        let chapterHtml = `
            <div>
                <h2 class="text-2xl font-bold text-theme-blue mb-4">${chapter.title}</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        `;
        chapter.lessons.forEach(lesson => {
            const iconClass = chapter.icon || 'fas fa-book-open';
            chapterHtml += `
                <div onclick="renderLessonDetail('${chapterKey}', '${lesson.id}')" class="lesson-link cursor-pointer bg-white border border-gray-200 rounded-lg shadow-sm p-4 flex flex-col items-center text-center">
                    <i class="${iconClass} text-3xl text-theme-red mb-3"></i>
                    <h4 class="font-semibold text-theme-blue">${lesson.title}</h4>
            `;
            if (lesson.gdrive_embed) {
                chapterHtml += `
                    <span onclick="event.stopPropagation(); window.open('${lesson.gdrive_embed}', '_blank');" class="slide-icon" title="Mở bài giảng Slide">
                        <i class="fas fa-chalkboard-teacher"></i>
                    </span>
                `;
            }
            chapterHtml += `</div>`;
        });
        chapterHtml += `</div></div>`;
        chaptersContainer.innerHTML += chapterHtml;
    }
}
/**
 * Hiển thị chi tiết một bài học cụ thể
 * @param {string} chapterKey - Khóa của chủ đề (ví dụ: 'A')
 * @param {string} lessonId - ID của bài học (ví dụ: 'A1-1')
 */
function renderLessonDetail(chapterKey, lessonId) {
    const lesson = lessonsData[chapterKey].lessons.find(l => l.id === lessonId);
    const lessonDetails = getLessonDetails(lessonId);
    if (!lesson) return;

    currentActivities = lessonDetails.activities.map((_, index) => `activity-${index + 1}`);
    activityStatus = {};
    currentActivities.forEach(id => activityStatus[id] = 'pending');

    let contentDisplayHtml = '';
    if (lesson.gdrive_embed) {
        contentDisplayHtml = `
            <div class="relative w-full mb-8 shadow-lg rounded-2xl overflow-hidden" style="padding-top: 56.25%;">
                <iframe class="absolute top-0 left-0 w-full h-full" src="${lesson.gdrive_embed}" frameborder="0" allowfullscreen="true"></iframe>
            </div>
        `;
    } else {
        contentDisplayHtml = `<img src="${lesson.image}" alt="Hình ảnh minh họa cho ${lesson.title}" class="w-full h-64 object-cover rounded-2xl mb-8 shadow-lg">`;
    }

    let detailHtml = `
        <button onclick="showLessonList()" class="mb-6 bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors">
            <i class="fas fa-arrow-left mr-2"></i>Quay lại Danh sách bài học
        </button>
        <div class="text-center mb-8">
            <a href="../index.html">
                <img src="../logo.jpg" alt="Viet Anh School Logo" class="h-20 w-auto mx-auto mb-4" onerror="this.src='https://placehold.co/150x150/002060/FFFFFF?text=VA'; this.onerror=null;">
            </a>
            <h1 class="text-3xl sm:text-4xl font-bold text-theme-blue">${lesson.title}</h1>
            <p class="text-lg text-gray-500 mt-2">${lessonsData[chapterKey].title}</p>
        </div>
        ${contentDisplayHtml}
        <div class="mb-8">
            <h3 class="text-lg font-semibold text-gray-700 mb-2">Tiến trình tổng thể</h3>
            <div class="w-full bg-gray-200 rounded-full h-4">
                <div id="progress-bar" class="bg-theme-red h-4 rounded-full progress-bar-fill" style="width: 0%"></div>
            </div>
        </div>
        <div class="space-y-4 mb-8">
             <details class="bg-gray-50 rounded-lg p-4">
                <summary class="font-bold text-theme-blue text-lg flex justify-between items-center">
                    <span><i class="fas fa-bullseye mr-3 text-theme-red"></i>Mục tiêu bài học</span>
                    <i class="fas fa-chevron-right arrow"></i>
                </summary>
                <ul class="list-disc list-inside space-y-2 text-gray-700 mt-4 pl-5">
                    ${lessonDetails.objectives.map(obj => `<li>${obj}</li>`).join('')}
                </ul>
            </details>
            <details class="bg-gray-50 rounded-lg p-4">
                <summary class="font-bold text-theme-blue text-lg flex justify-between items-center">
                    <span><i class="fas fa-book-reader mr-3 text-theme-red"></i>Nội dung cốt lõi</span>
                    <i class="fas fa-chevron-right arrow"></i>
                </summary>
                <ul class="list-disc list-inside space-y-2 text-gray-700 mt-4 pl-5">
                    ${(lessonDetails.core_content && lessonDetails.core_content.length > 0) ? lessonDetails.core_content.map(content => `<li>${content}</li>`).join('') : '<li>Nội dung đang được cập nhật.</li>'}
                </ul>
            </details>
            <details class="bg-gray-50 rounded-lg p-4">
                <summary class="font-bold text-theme-blue text-lg flex justify-between items-center">
                    <span><i class="fas fa-lightbulb mr-3 text-theme-red"></i>Gợi ý trả lời</span>
                    <i class="fas fa-chevron-right arrow"></i>
                </summary>
                <div class="mt-4 pl-5 space-y-3 text-gray-700">
                     ${(lessonDetails.answer_keys && Object.keys(lessonDetails.answer_keys).length > 0) ? `
                        ${lessonDetails.answer_keys.luyen_tap ? `<div><h4 class="font-semibold">Luyện tập:</h4><ul class="list-decimal list-inside ml-4">${lessonDetails.answer_keys.luyen_tap.map(answer => `<li>${answer}</li>`).join('')}</ul></div>` : ''}
                        ${lessonDetails.answer_keys.van_dung ? `<div><h4 class="font-semibold">Vận dụng:</h4><p class="ml-4">${lessonDetails.answer_keys.van_dung}</p></div>` : ''}
                        ${lessonDetails.answer_keys.tu_kiem_tra ? `<div><h4 class="font-semibold">Tự kiểm tra:</h4><ul class="list-decimal list-inside ml-4">${lessonDetails.answer_keys.tu_kiem_tra.map(answer => `<li>${answer}</li>`).join('')}</ul></div>` : ''}
                    ` : '<p>Nội dung đang được cập nhật.</p>'}
                </div>
            </details>
        </div>
        <div>
            <h2 class="text-2xl font-bold text-theme-blue mb-6 border-b-2 pb-2 border-theme-blue">Chi tiết các Hoạt động</h2>
            <div class="space-y-6">
                ${lessonDetails.activities.map((activity, index) => `
                    <div id="activity-${index + 1}" class="activity-card status-pending bg-white p-6 rounded-lg shadow-md">
                        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                            <h3 class="text-xl font-bold text-gray-900">${activity.name}</h3>
                            <span class="text-sm font-semibold text-gray-500 mt-2 sm:mt-0"><i class="far fa-clock mr-1"></i>Thời lượng: ${activity.duration} phút</span>
                        </div>
                        <div class="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 class="font-semibold text-gray-700 mb-2"><i class="fas fa-chalkboard-teacher mr-2"></i>Nhiệm vụ của Giáo viên</h4>
                                <ul class="space-y-2 text-sm">${activity.teacher_tasks.map(task => `<li class="flex items-start"><input type="checkbox" class="mr-2 mt-1 flex-shrink-0"><span>${task}</span></li>`).join('')}</ul>
                            </div>
                            <div>
                                <h4 class="font-semibold text-gray-700 mb-2"><i class="fas fa-user-graduate mr-2"></i>Hoạt động của Học sinh</h4>
                                <ul class="space-y-2 text-sm">${activity.student_tasks.map(task => `<li class="flex items-start"><input type="checkbox" class="mr-2 mt-1 flex-shrink-0"><span>${task}</span></li>`).join('')}</ul>
                            </div>
                        </div>
                        <div class="mt-6 text-right space-x-2">
                            <button onclick="updateStatus('activity-${index + 1}', 'pending')" class="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-200 rounded-full">Chưa bắt đầu</button>
                            <button onclick="updateStatus('activity-${index + 1}', 'in-progress')" class="px-3 py-1 text-xs font-medium text-amber-800 bg-amber-100 rounded-full">Đang diễn ra</button>
                            <button onclick="updateStatus('activity-${index + 1}', 'completed')" class="px-3 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full">Hoàn thành</button>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    lessonDetailView.innerHTML = detailHtml;
    lessonListView.style.display = 'none';
    lessonDetailView.style.display = 'block';
    window.scrollTo(0, 0);
}

/**
 * Quay lại màn hình danh sách bài học
 */
function showLessonList() {
    lessonDetailView.style.display = 'none';
    lessonListView.style.display = 'block';
    window.scrollTo(0, 0);
}

/**
 * Cập nhật trạng thái của một hoạt động
 * @param {string} activityId - ID của thẻ hoạt động
 * @param {string} newStatus - Trạng thái mới ('pending', 'in-progress', 'completed')
 */
function updateStatus(activityId, newStatus) {
    const card = document.getElementById(activityId);
    if (!card) return;
    activityStatus[activityId] = newStatus;
    card.classList.remove('status-pending', 'status-in-progress', 'status-completed');
    card.classList.add(`status-${newStatus}`);
    updateProgressBar();
}

/**
 * Cập nhật thanh tiến trình tổng thể
 */
function updateProgressBar() {
    if (currentActivities.length === 0) return;
    const completedCount = Object.values(activityStatus).filter(status => status === 'completed').length;
    const progressPercentage = (completedCount / currentActivities.length) * 100;
    const progressBar = document.getElementById('progress-bar');
    if (progressBar) {
        progressBar.style.width = `${progressPercentage}%`;
    }
}

// Lắng nghe sự kiện khi trang đã tải xong và hiển thị danh sách bài học
document.addEventListener('DOMContentLoaded', renderLessonList);
