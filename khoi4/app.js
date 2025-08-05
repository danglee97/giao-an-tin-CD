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

// ... (Các hàm renderLessonDetail, showLessonList, updateStatus, updateProgressBar giữ nguyên không đổi)

// Lắng nghe sự kiện khi trang đã tải xong và hiển thị danh sách bài học
document.addEventListener('DOMContentLoaded', renderLessonList);
