// Lựa chọn các phần tử DOM
const chaptersContainer = document.getElementById('chapters-container');

/**
 * Hiển thị danh sách các chủ đề và bài học dưới dạng các đường link
 */
function renderLessonList() {
    if (!chaptersContainer) return;
    chaptersContainer.innerHTML = '';
    for (const chapterKey in lessonsData) {
        const chapter = lessonsData[chapterKey];
        let chapterHtml = `
            <div>
                <h2 class="text-2xl font-bold text-theme-blue mb-4">${chapter.title}</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        `;
        chapter.lessons.forEach(lesson => {
            // Tạo thẻ <a> để dẫn đến tệp HTML của từng bài học
            chapterHtml += `
                <a href="lessons/${lesson.id}.html" class="lesson-link block bg-white border border-gray-200 rounded-lg shadow-sm p-4 flex flex-col items-center text-center no-underline">
                    <i class="fas fa-book-open text-3xl text-theme-red mb-3"></i>
                    <h4 class="font-semibold text-theme-blue">${lesson.title}</h4>
                </a>
            `;
        });
        chapterHtml += `</div></div>`;
        chaptersContainer.innerHTML += chapterHtml;
    }
}

// Lắng nghe sự kiện khi trang đã tải xong và hiển thị danh sách bài học
document.addEventListener('DOMContentLoaded', renderLessonList);
