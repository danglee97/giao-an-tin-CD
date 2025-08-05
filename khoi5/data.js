const gradeInfo = {
    sgk_pdf: "Sách GK Tin học 5 - Cánh Diệu.pdf",
    sgv_pdf: "Sách GV Tin học 5 - Cánh Diệu.pdf"
};

const lessonsData = {
    "A": {
        "title": "Chủ đề A: Máy tính và em", "icon": "fas fa-desktop",
        "lessons": [
            { "id": "A1", "title": "Bài 1: Lợi ích của máy tính" },
            { "id": "A2", "title": "Bài 2: Thực hành tạo sản phẩm số" },
            { "id": "A3", "title": "Bài 3: Lợi ích của việc sử dụng máy tính thành thạo" }
        ]
    },
    "B": {
        "title": "Chủ đề B: Mạng máy tính và Internet", "icon": "fas fa-globe",
        "lessons": [
            { "id": "B1", "title": "Bài 1: Tìm thông tin trên website" },
            { "id": "B2", "title": "Bài 2: Hợp tác, tìm kiếm và chia sẻ thông tin" }
        ]
    },
    "C": {
        "title": "Chủ đề C: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin", "icon": "fas fa-sitemap",
        "lessons": [
            { "id": "C1", "title": "Bài 1: Thu thập và tìm kiếm thông tin trong giải quyết vấn đề" },
            { "id": "C2", "title": "Bài 2: Thực hành tìm kiếm và chọn thông tin" },
            { "id": "C3", "title": "Bài 1: Thực hành tạo cây thư mục" },
            { "id": "C4", "title": "Bài 2: Tìm kiếm tệp và thư mục" }
        ]
    },
    "D": {
        "title": "Chủ đề D: Đạo đức, pháp luật và văn hoá trong môi trường số", "icon": "fas fa-balance-scale-right",
        "lessons": [
            { "id": "D1", "title": "Bài học: Tôn trọng quyền tác giả khi sử dụng nội dung thông tin" }
        ]
    },
    "E": {
        "title": "Chủ đề E: Ứng dụng tin học", "icon": "fas fa-th-large",
        "lessons": [
            { "id": "E1", "title": "Bài 1: Thực hành chọn và sao chép khối văn bản" },
            { "id": "E2", "title": "Bài 2: Thực hành xoá và di chuyển khối văn bản" },
            { "id": "E3", "title": "Bài 3: Thực hành chèn ảnh vào văn bản" },
            { "id": "E4", "title": "Bài 4: Định dạng kí tự" },
            { "id": "E5", "title": "Bài 5: Thực hành tổng hợp soạn thảo văn bản" }
        ]
    },
    "F": {
        "title": "Chủ đề F: Giải quyết vấn đề với sự trợ giúp của máy tính", "icon": "fas fa-brain",
        "lessons": [
            { "id": "F1", "title": "Bài 1: Nhóm lệnh bút vẽ" },
            { "id": "F2", "title": "Bài 2: Thực hành tạo chương trình vẽ hình đơn giản" },
            { "id": "F3", "title": "Bài 3: Trang phục của nhân vật" },
            { "id": "F4", "title": "Bài 4: Thực hành tạo chương trình hoạt hình" },
            { "id": "F5", "title": "Bài 5: Cấu trúc tuần tự" },
            { "id": "F6", "title": "Bài 6: Cấu trúc lặp với số lần biết trước" },
            { "id": "F7", "title": "Bài 7: Cấu trúc lặp có điều kiện" },
            { "id": "F8", "title": "Bài 8: Cấu trúc lặp liên tục" },
            { "id": "F9", "title": "Bài 9: Biến và cách dùng biến" },
            { "id": "F10", "title": "Bài 10: Các phép toán số học cơ bản và phép kết hợp" },
            { "id": "F11", "title": "Bài 11: Các phép so sánh" },
            { "id": "F12", "title": "Bài 12: Cấu trúc rẽ nhánh" },
            { "id": "F13", "title": "Bài 13: Chạy thử, phát hiện và sửa lỗi chương trình" },
            { "id": "F14", "title": "Bài 14: Thực hành viết kịch bản và tạo chương trình" }
        ]
    }
};

function getLessonDetails(lessonId) {
    const allDetails = {
        "A1": {
            "objectives": ["Nêu được ví dụ máy tính giúp em giải trí, học tập, tìm kiếm, trao đổi thông tin và hợp tác với bạn bè."],
            "core_content": ["Máy tính là công cụ hữu ích giúp học tập, giải trí, tìm kiếm, trao đổi thông tin, và hợp tác.", "Sử dụng máy tính giúp rèn luyện nhiều kỹ năng quan trọng."],
            "activities": [],
            "answer_keys": { "luyen_tap": ["Câu SAI là: b) Máy tính chỉ dùng cho mục đích giải trí."], "van_dung": ["HS tự nêu ví dụ thực tế của bản thân."] }
        },
        "A2": {
            "objectives": ["Tạo được sản phẩm số theo ý tưởng của bản thân."],
            "core_content": ["Sử dụng các phần mềm đã học như PowerPoint, Word để tạo ra các sản phẩm số (bài trình chiếu, văn bản)."],
            "activities": [],
            "answer_keys": { "van_dung": ["HS sử dụng phần mềm phù hợp (Word hoặc PowerPoint) để tạo sản phẩm tuyên truyền về phòng chống đuối nước."] }
        },
        "A3": {
            "objectives": ["Thể hiện được mong muốn biết sử dụng máy tính thành thạo để làm được nhiều việc hơn."],
            "core_content": ["Sử dụng máy tính thành thạo giúp tạo ra các sản phẩm đẹp hơn, chuyên nghiệp hơn.", "Biết sử dụng nhiều phần mềm sẽ tạo được nhiều loại sản phẩm đa dạng."],
            "activities": [],
            "answer_keys": { "luyen_tap": ["HS tự đánh giá các kỹ năng đã học và nêu mong muốn học thêm kỹ năng mới (ví dụ: chèn video)."], "van_dung": ["HS tìm hiểu thêm các chức năng của PowerPoint để làm thiệp chúc mừng sinh nhật đẹp hơn."] }
        }
        // ... Nội dung chi tiết cho các chủ đề và bài học còn lại sẽ được thêm vào đây
    };
    return allDetails[lessonId] || { "objectives": ["Nội dung đang được cập nhật."], "core_content": [], "activities": [], "answer_keys": {} };
}
