// Biến toàn cục để theo dõi trạng thái
let currentActivities = [];
let activityStatus = {};

/**
 * Lấy ID bài học từ tên tệp URL
 * @returns {string} ID của bài học (ví dụ: 'A1')
 */
function getLessonIdFromURL() {
    const path = window.location.pathname;
    const fileName = path.split('/').pop();
    return fileName.replace('.html', '');
}

/**
 * Tìm dữ liệu chi tiết của bài học dựa vào ID
 * @param {string} lessonId - ID của bài học
 * @returns {object|null} Dữ liệu bài học hoặc null nếu không tìm thấy
 */
function findLessonData(lessonId) {
    for (const chapterKey in lessonsData) {
        const lesson = lessonsData[chapterKey].lessons.find(l => l.id === lessonId);
        if (lesson) {
            return {
                ...lesson,
                chapterTitle: lessonsData[chapterKey].title,
                details: getLessonDetails(lessonId)
            };
        }
    }
    return null;
}

/**
 * Hiển thị chi tiết một bài học cụ thể
 */
function renderLessonDetail() {
    const lessonId = getLessonIdFromURL();
    const lessonData = findLessonData(lessonId);
    const container = document.getElementById('lesson-detail-container');

    if (!lessonData) {
        container.innerHTML = `<p class="text-red-500">Lỗi: Không tìm thấy dữ liệu cho bài học ${lessonId}.</p>`;
        return;
    }

    // Cập nhật tiêu đề trang
    document.title = lessonData.title;

    const lessonDetails = lessonData.details;

    // Khởi tạo lại trạng thái cho bài học
    currentActivities = lessonDetails.activities.map((_, index) => `activity-${index + 1}`);
    activityStatus = {};
    currentActivities.forEach(id => activityStatus[id] = 'pending');

    // Tạo khối hiển thị nội dung: ưu tiên Google Drive, nếu không có thì dùng ảnh
    let contentDisplayHtml = '';
    if (lessonData.gdrive_embed) {
        contentDisplayHtml = `
            <div class="relative w-full mb-8 shadow-lg rounded-2xl overflow-hidden" style="padding-top: 56.25%;"> <!-- 16:9 Aspect Ratio -->
                <iframe class="absolute top-0 left-0 w-full h-full" src="${lessonData.gdrive_embed}" frameborder="0" allowfullscreen="true"></iframe>
            </div>
        `;
    } else {
        contentDisplayHtml = `<img src="${lessonData.image}" alt="Hình ảnh minh họa cho ${lessonData.title}" class="w-full h-64 object-cover rounded-2xl mb-8 shadow-lg">`;
    }


    let detailHtml = `
        <a href="../index.html" class="mb-6 inline-block bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors">
            <i class="fas fa-arrow-left mr-2"></i>Quay lại Danh sách bài học
        </a>
        
        <div class="text-center mb-8">
            <img src="../logo.jpg" alt="Viet Anh School Logo" class="h-20 w-auto mx-auto mb-4" onerror="this.src='https://placehold.co/150x150/002060/FFFFFF?text=VA'; this.onerror=null;">
            <h1 class="text-3xl sm:text-4xl font-bold text-theme-blue">${lessonData.title}</h1>
            <p class="text-lg text-gray-500 mt-2">${lessonData.chapterTitle}</p>
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
                ${lessonDetails.activities.length > 0 ? lessonDetails.activities.map((activity, index) => `
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
                `).join('') : '<p class="text-gray-500">Nội dung chi tiết cho bài học này đang được cập nhật.</p>'}
            </div>
        </div>
    `;
    container.innerHTML = detailHtml;
}

function updateStatus(activityId, newStatus) {
    const card = document.getElementById(activityId);
    if (!card) return;
    activityStatus[activityId] = newStatus;
    card.classList.remove('status-pending', 'status-in-progress', 'status-completed');
    card.classList.add(`status-${newStatus}`);
    updateProgressBar();
}

function updateProgressBar() {
    if (currentActivities.length === 0) return;
    const completedCount = Object.values(activityStatus).filter(status => status === 'completed').length;
    const progressPercentage = (completedCount / currentActivities.length) * 100;
    const progressBar = document.getElementById('progress-bar');
    if (progressBar) {
        progressBar.style.width = `${progressPercentage}%`;
    }
}

// Lắng nghe sự kiện khi trang đã tải xong và hiển thị chi tiết bài học
document.addEventListener('DOMContentLoaded', renderLessonDetail);
