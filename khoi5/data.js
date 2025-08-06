// --- DỮ LIỆU BÀI HỌC ---
const gradeInfo = {
    sgk_pdf: "Sách GK Tin học 5 - Cánh Diệu.pdf",
    sgv_pdf: "Sách GV Tin học 5 - Cánh Diệu.pdf"
};

const lessonsData = {
    "A": {
        "title": "Chủ đề A: Máy tính và em", "icon": "fas fa-desktop",
        "lessons": [
            { "id": "A1", "title": "Bài 1: Lợi ích của máy tính", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=L%E1%BB%A3i+%C3%ADch+c%E1%BB%A7a+m%C3%A1y+t%C3%ADnh", "gdrive_embed": "https://docs.google.com/presentation/d/e/2PACX-1vR.../embed?start=false&loop=false&delayms=3000", "video_embed": "https://www.youtube.com/embed/VIDEO_ID_A1" },
            { "id": "A2", "title": "Bài 2: Thực hành tạo sản phẩm số", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=Th%E1%BB%B1c+h%C3%A0nh+t%E1%BA%A1o+s%E1%BA%A3n+ph%E1%BA%A9m+s%E1%BB%91", "gdrive_embed": "https://docs.google.com/presentation/d/e/2PACX-1vR.../embed?start=false&loop=false&delayms=3000", "video_embed": "https://www.youtube.com/embed/VIDEO_ID_A2" },
            { "id": "A3", "title": "Bài 3: Lợi ích của việc sử dụng máy tính thành thạo", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=S%E1%BB%AD+d%E1%BB%A5ng+m%C3%A1y+t%C3%ADnh+th%C3%A0nh+th%E1%BA%A1o", "gdrive_embed": "https://docs.google.com/presentation/d/e/2PACX-1vR.../embed?start=false&loop=false&delayms=3000", "video_embed": "https://www.youtube.com/embed/VIDEO_ID_A3" }
        ]
    },
    "B": {
        "title": "Chủ đề B: Mạng máy tính và Internet", "icon": "fas fa-globe",
        "lessons": [ 
            { "id": "B1", "title": "Bài 1: Tìm thông tin trên website", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=T%C3%ACm+th%C3%B4ng+tin+tr%C3%AAn+website", "gdrive_embed": "https://docs.google.com/presentation/d/e/2PACX-1vR.../embed?start=false&loop=false&delayms=3000", "video_embed": "https://www.youtube.com/embed/VIDEO_ID_B1" }, 
            { "id": "B2", "title": "Bài 2: Hợp tác, tìm kiếm và chia sẻ thông tin", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=H%E1%BB%A3p+t%C3%A1c+v%C3%A0+chia+s%E1%BA%BB", "gdrive_embed": "https://docs.google.com/presentation/d/e/2PACX-1vR.../embed?start=false&loop=false&delayms=3000", "video_embed": "https://www.youtube.com/embed/VIDEO_ID_B2" } 
        ]
    },
    "C": {
        "title": "Chủ đề C: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin", "icon": "fas fa-sitemap",
        "lessons": [
            { "id": "C1", "title": "Bài 1: Thu thập và tìm kiếm thông tin", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=Thu+th%E1%BA%ADp+th%C3%B4ng+tin", "gdrive_embed": "https://docs.google.com/presentation/d/e/2PACX-1vR.../embed?start=false&loop=false&delayms=3000", "video_embed": "https://www.youtube.com/embed/VIDEO_ID_C1" }, 
            { "id": "C2", "title": "Bài 2: Thực hành tìm kiếm và chọn thông tin", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=Th%E1%BB%B1c+h%C3%A0nh+t%C3%ACm+ki%E1%BA%BFm", "gdrive_embed": "https://docs.google.com/presentation/d/e/2PACX-1vR.../embed?start=false&loop=false&delayms=3000", "video_embed": "https://www.youtube.com/embed/VIDEO_ID_C2" },
            { "id": "C3", "title": "Bài 1: Thực hành tạo cây thư mục", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=T%E1%BA%A1o+c%C3%A2y+th%C6%B0+m%E1%BB%A5c", "gdrive_embed": "https://docs.google.com/presentation/d/e/2PACX-1vR.../embed?start=false&loop=false&delayms=3000", "video_embed": "https://www.youtube.com/embed/VIDEO_ID_C3" }, 
            { "id": "C4", "title": "Bài 2: Tìm kiếm tệp và thư mục", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=T%C3%ACm+ki%E1%BA%BFm+t%E1%BB%87p+v%C3%A0+th%C6%B0+m%E1%BB%A5c", "gdrive_embed": "https://docs.google.com/presentation/d/e/2PACX-1vR.../embed?start=false&loop=false&delayms=3000", "video_embed": "https://www.youtube.com/embed/VIDEO_ID_C4" }
        ]
    },
    "D": { "title": "Chủ đề D: Đạo đức, pháp luật và văn hoá", "icon": "fas fa-balance-scale-right", "lessons": [ { "id": "D1", "title": "Bài học: Tôn trọng quyền tác giả", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=T%C3%B4n+tr%E1%BB%8Dng+quy%E1%BB%81n+t%C3%A1c+gi%E1%BA%A3", "gdrive_embed": "https://docs.google.com/presentation/d/e/2PACX-1vR.../embed?start=false&loop=false&delayms=3000", "video_embed": "https://www.youtube.com/embed/VIDEO_ID_D1" } ] },
    "E": {
        "title": "Chủ đề E: Ứng dụng tin học", "icon": "fas fa-th-large",
        "lessons": [
            { "id": "E1", "title": "Bài 1: Thực hành chọn và sao chép", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=Ch%E1%BB%8Dn+v%C3%A0+sao+ch%C3%A9p", "gdrive_embed": "https://docs.google.com/presentation/d/e/2PACX-1vR.../embed?start=false&loop=false&delayms=3000", "video_embed": "https://www.youtube.com/embed/VIDEO_ID_E1" }, 
            { "id": "E2", "title": "Bài 2: Thực hành xoá và di chuyển", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=Xo%C3%A1+v%C3%A0+di+chuy%E1%BB%83n", "gdrive_embed": "https://docs.google.com/presentation/d/e/2PACX-1vR.../embed?start=false&loop=false&delayms=3000", "video_embed": "https://www.youtube.com/embed/VIDEO_ID_E2" },
            { "id": "E3", "title": "Bài 3: Thực hành chèn ảnh", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=Ch%C3%A8n+%E1%BA%A3nh", "gdrive_embed": "https://docs.google.com/presentation/d/e/2PACX-1vR.../embed?start=false&loop=false&delayms=3000", "video_embed": "https://www.youtube.com/embed/VIDEO_ID_E3" }, 
            { "id": "E4", "title": "Bài 4: Định dạng kí tự", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=%C4%90%E1%BB%8Bnh+d%E1%BA%A1ng+k%C3%AD+t%E1%BB%B1", "gdrive_embed": "https://docs.google.com/presentation/d/e/2PACX-1vR.../embed?start=false&loop=false&delayms=3000", "video_embed": "https://www.youtube.com/embed/VIDEO_ID_E4" }, 
            { "id": "E5", "title": "Bài 5: Thực hành tổng hợp", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=Th%E1%BB%B1c+h%C3%A0nh+t%E1%BB%95ng+h%E1%BB%A3p", "gdrive_embed": "https://docs.google.com/presentation/d/e/2PACX-1vR.../embed?start=false&loop=false&delayms=3000", "video_embed": "https://www.youtube.com/embed/VIDEO_ID_E5" }
        ]
    },
    "F": {
        "title": "Chủ đề F: Giải quyết vấn đề với máy tính", "icon": "fas fa-brain",
        "lessons": [
            { "id": "F1", "title": "Bài 1: Nhóm lệnh bút vẽ", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=Nh%C3%B3m+l%E1%BB%87nh+b%C3%BAt+v%E1%BA%BD", "gdrive_embed": "https://docs.google.com/presentation/d/e/2PACX-1vR.../embed?start=false&loop=false&delayms=3000", "video_embed": "https://www.youtube.com/embed/VIDEO_ID_F1" }, 
            { "id": "F2", "title": "Bài 2: Thực hành vẽ hình đơn giản", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=V%E1%BA%BD+h%C3%ACnh+%C4%91%C6%A1n+gi%E1%BA%A3n", "gdrive_embed": "https://docs.google.com/presentation/d/e/2PACX-1vR.../embed?start=false&loop=false&delayms=3000", "video_embed": "https://www.youtube.com/embed/VIDEO_ID_F2" },
            { "id": "F3", "title": "Bài 3: Trang phục của nhân vật", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=Trang+ph%E1%BB%A5c+nh%C3%A2n+v%E1%BA%ADt", "gdrive_embed": "https://docs.google.com/presentation/d/e/2PACX-1vR.../embed?start=false&loop=false&delayms=3000", "video_embed": "https://www.youtube.com/embed/VIDEO_ID_F3" }, 
            { "id": "F4", "title": "Bài 4: Thực hành tạo hoạt hình", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=T%E1%BA%A1o+ho%E1%BA%A1t+h%C3%ACnh", "gdrive_embed": "https://docs.google.com/presentation/d/e/2PACX-1vR.../embed?start=false&loop=false&delayms=3000", "video_embed": "https://www.youtube.com/embed/VIDEO_ID_F4" },
            { "id": "F5", "title": "Bài 5: Cấu trúc tuần tự", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=C%E1%BA%A5u+tr%C3%BAc+tu%E1%BA%A7n+t%E1%BB%B1", "gdrive_embed": "https://docs.google.com/presentation/d/e/2PACX-1vR.../embed?start=false&loop=false&delayms=3000", "video_embed": "https://www.youtube.com/embed/VIDEO_ID_F5" }, 
            { "id": "F6", "title": "Bài 6: Cấu trúc lặp (biết trước)", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=C%E1%BA%A5u+tr%C3%BAc+l%E1%BA%B7p", "gdrive_embed": "https://docs.google.com/presentation/d/e/2PACX-1vR.../embed?start=false&loop=false&delayms=3000", "video_embed": "https://www.youtube.com/embed/VIDEO_ID_F6" },
            { "id": "F7", "title": "Bài 7: Cấu trúc lặp (có điều kiện)", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=L%E1%BA%B7p+c%C3%B3+%C4%91i%E1%BB%81u+ki%E1%BB%87n", "gdrive_embed": "https://docs.google.com/presentation/d/e/2PACX-1vR.../embed?start=false&loop=false&delayms=3000", "video_embed": "https://www.youtube.com/embed/VIDEO_ID_F7" }, 
            { "id": "F8", "title": "Bài 8: Cấu trúc lặp liên tục", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=L%E1%BA%B7p+li%C3%AAn+t%E1%BB%A5c", "gdrive_embed": "https://docs.google.com/presentation/d/e/2PACX-1vR.../embed?start=false&loop=false&delayms=3000", "video_embed": "https://www.youtube.com/embed/VIDEO_ID_F8" },
            { "id": "F9", "title": "Bài 9: Biến và cách dùng biến", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=Bi%E1%BA%BFn+v%C3%A0+c%C3%A1ch+d%C3%B9ng", "gdrive_embed": "https://docs.google.com/presentation/d/e/2PACX-1vR.../embed?start=false&loop=false&delayms=3000", "video_embed": "https://www.youtube.com/embed/VIDEO_ID_F9" }, 
            { "id": "F10", "title": "Bài 10: Các phép toán số học", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=Ph%C3%A9p+to%C3%A1n+s%E1%BB%91+h%E1%BB%8Dc", "gdrive_embed": "https://docs.google.com/presentation/d/e/2PACX-1vR.../embed?start=false&loop=false&delayms=3000", "video_embed": "https://www.youtube.com/embed/VIDEO_ID_F10" },
            { "id": "F11", "title": "Bài 11: Các phép so sánh", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=C%C3%A1c+ph%C3%A9p+so+s%C3%A1nh", "gdrive_embed": "https://docs.google.com/presentation/d/e/2PACX-1vR.../embed?start=false&loop=false&delayms=3000", "video_embed": "https://www.youtube.com/embed/VIDEO_ID_F11" }, 
            { "id": "F12", "title": "Bài 12: Cấu trúc rẽ nhánh", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=C%E1%BA%A5u+tr%C3%BAc+r%E1%BA%BD+nh%C3%A1nh", "gdrive_embed": "https://docs.google.com/presentation/d/e/2PACX-1vR.../embed?start=false&loop=false&delayms=3000", "video_embed": "https://www.youtube.com/embed/VIDEO_ID_F12" },
            { "id": "F13", "title": "Bài 13: Chạy thử và sửa lỗi", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=Ch%E1%BA%A1y+th%E1%BB+v%C3%A0+s%E1%BB%ADa+l%E1%BB%97i", "gdrive_embed": "https://docs.google.com/presentation/d/e/2PACX-1vR.../embed?start=false&loop=false&delayms=3000", "video_embed": "https://www.youtube.com/embed/VIDEO_ID_F13" }, 
            { "id": "F14", "title": "Bài 14: Thực hành viết kịch bản", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=Vi%E1%BA%BFt+k%E1%BB%8Bch+b%E1%BA%A3n", "gdrive_embed": "https://docs.google.com/presentation/d/e/2PACX-1vR.../embed?start=false&loop=false&delayms=3000", "video_embed": "https://www.youtube.com/embed/VIDEO_ID_F14" }
        ]
    }
};

function getLessonDetails(lessonId) {
    const allDetails = {
        "A1": {
            "objectives": ["Nêu được ví dụ máy tính giúp em giải trí, học tập, tìm kiếm, trao đổi thông tin và hợp tác với bạn bè."],
            "core_content": ["Máy tính là một công cụ hữu ích giúp em học tập, giải trí, tìm kiếm, trao đổi thông tin, hợp tác với bạn bè.", "Đồng thời, máy tính cũng giúp em học tập và rèn luyện những kĩ năng để sử dụng máy tính thành thạo hơn."],
            "activities": [],
            "answer_keys": { "luyen_tap": ["Câu SAI là: b) Máy tính chỉ dùng cho mục đích giải trí."], "van_dung": ["HS tự nêu ví dụ thực tế của bản thân cho từng tình huống."] },
            "quiz": [
                { "question": "Máy tính KHÔNG thể giúp em làm việc nào sau đây?", "options": ["Học trực tuyến", "Chơi thể thao ngoài trời", "Tìm kiếm thông tin", "Xem phim giải trí"], "answer": 1 },
                { "question": "Để trao đổi thông tin với bạn bè ở xa, em có thể dùng máy tính với ứng dụng nào?", "options": ["Microsoft Word", "Zalo", "Paint", "Calculator"], "answer": 1 },
                { "question": "Lợi ích chính của việc sử dụng máy tính trong học tập là gì?", "options": ["Chỉ để chơi game sau giờ học", "Làm bài tập nhanh hơn mà không cần suy nghĩ", "Tiếp cận được nhiều nguồn kiến thức phong phú", "Thay thế hoàn toàn vai trò của giáo viên"], "answer": 2 }
            ]
        },
        "A2": {
            "objectives": ["Tạo được sản phẩm số theo ý tưởng của bản thân."],
            "core_content": ["Sử dụng các phần mềm đã học như PowerPoint, Word để tạo ra các sản phẩm số (bài trình chiếu, văn bản)."],
            "activities": [
                {"name": "Hoạt động: Phần mềm em đã biết", "duration": 15, "teacher_tasks": ["Tổ chức cho HS giải ô chữ để ôn lại tên các phần mềm đã học."], "student_tasks": ["Làm việc nhóm hoặc cá nhân để giải ô chữ."] },
                {"name": "Hoạt động: Thực hành tạo sản phẩm số", "duration": 25, "teacher_tasks": ["Hướng dẫn HS tạo một bài trình chiếu giới thiệu về một phần mềm hoặc website đã biết."], "student_tasks": ["Thực hành tạo bài trình chiếu theo các bước hướng dẫn trong SGK."] }
            ],
            "answer_keys": { "van_dung": ["HS sử dụng phần mềm phù hợp (Word hoặc PowerPoint) để tạo sản phẩm tuyên truyền về phòng chống đuối nước."] }
        },
        "A3": {
            "objectives": ["Thể hiện được mong muốn biết sử dụng máy tính thành thạo để làm được nhiều việc hơn."],
            "core_content": ["Sử dụng máy tính thành thạo giúp em làm được nhiều việc hơn và tạo được nhiều sản phẩm tốt hơn."],
            "quiz": [
                { "question": "Việc định dạng văn bản (chọn font chữ, màu sắc) giúp gì?", "options": ["Làm văn bản khó đọc hơn", "Làm văn bản đẹp và dễ đọc hơn", "Không có tác dụng gì", "Chỉ tốn thời gian"], "answer": 1 },
                { "question": "Để làm một bài trình chiếu sinh động hơn, ngoài hình ảnh, em có thể chèn thêm gì?", "options": ["Chỉ có thể chèn thêm chữ", "Video và âm thanh", "Không thể chèn gì thêm", "Một văn bản Word khác"], "answer": 1 }
            ]
        },
        "B1": {
            "objectives": ["Tìm được trên website cho trước những thông tin phù hợp và có ích cho nhiệm vụ đặt ra."],
            "core_content": ["Trên một website có các thành phần: tên, địa chỉ website và bảng chọn nội dung. Ngoài ra, website có thể có công cụ tìm kiếm.", "Để tìm thông tin trên website, em nháy chuột vào các siêu liên kết phù hợp trên bảng chọn nội dung hoặc sử dụng công cụ tìm kiếm."],
            "quiz": [
                { "question": "Thành phần nào trên website giúp bạn tìm kiếm thông tin nhanh bằng từ khóa?", "options": ["Tên website", "Địa chỉ website", "Công cụ tìm kiếm", "Bảng chọn nội dung"], "answer": 2 }
            ]
        },
        "B2": {
            "objectives": ["Hợp tác, tìm kiếm và chia sẻ được thông tin với các bạn trong nhóm để hoàn thành nhiệm vụ học tập."],
            "core_content": ["Khi trao đổi, hợp tác để tìm kiếm và chia sẻ thông tin, em có thể tìm được nhanh và nhiều thông tin phù hợp.", "Thiết bị nhớ, ổ đĩa ngoài, thư điện tử hoặc các ứng dụng giao tiếp trực tuyến là các phương tiện giúp trao đổi thông tin."],
            "quiz": [
                { "question": "Phương tiện nào sau đây KHÔNG dùng để chia sẻ tệp tin giữa hai máy tính không nối mạng?", "options": ["Ổ đĩa ngoài (USB)", "Thư điện tử (Email)", "Màn hình máy tính", "Ứng dụng Zalo"], "answer": 2 }
            ]
        },
        "C1": {
            "objectives": ["Giải thích được sự cần thiết của việc thu thập và tìm kiếm thông tin trong giải quyết vấn đề."],
            "core_content": ["Khi thực hiện một nhiệm vụ, em cần có đủ thông tin để giải quyết được vấn đề.", "Khi chưa có đủ thông tin, em cần thu thập và tìm kiếm thêm."],
            "quiz": [
                { "question": "Để tính diện tích một mảnh vườn hình chữ nhật, thông tin nào là quan trọng nhất?", "options": ["Màu sắc của cây trong vườn", "Tên chủ khu vườn", "Chiều dài và chiều rộng của vườn", "Địa chỉ của khu vườn"], "answer": 2 }
            ]
        },
        "C2": {
            "objectives": ["Tìm kiếm và chọn được thông tin phù hợp với vấn đề cần giải quyết.", "Hợp tác được với người khác để giải quyết vấn đề cụ thể."],
            "core_content": ["Có thể tìm thông tin từ nhiều nguồn; Muốn có thông tin phù hợp thì phải lựa chọn; Hợp tác nhóm sẽ giúp hoàn thành nhiệm vụ nhanh và chính xác."],
             "quiz": [
                { "question": "Khi làm việc nhóm, điều gì là quan trọng nhất để hoàn thành tốt nhiệm vụ?", "options": ["Chỉ một bạn làm tất cả công việc", "Không cần trao đổi với nhau", "Phân chia công việc và tất cả cùng tham gia", "Mỗi người làm một việc riêng không liên quan"], "answer": 2 }
            ]
        },
        "C3": {
            "objectives": ["Tổ chức lưu trữ được các tệp, thư mục bằng cấu trúc cây hợp lí.", "Thực hiện được việc tạo các thư mục từ cấu trúc cây."],
            "core_content": ["Việc tổ chức, sắp xếp các tệp và thư mục trên máy tính một cách hợp lí sẽ thuận tiện trong việc tìm kiếm."],
             "quiz": [
                { "question": "Tại sao cần tổ chức tệp và thư mục theo cấu trúc cây?", "options": ["Để làm máy tính chạy chậm hơn", "Để dễ dàng tìm kiếm và quản lý", "Để tốn nhiều dung lượng hơn", "Không có lý do gì đặc biệt"], "answer": 1 }
            ]
        },
        "C4": {
            "objectives": ["Sử dụng được công cụ tìm kiếm trên máy tính để tìm tệp và thư mục.", "Lựa chọn được kiểu bố cục hiển thị để xem các tệp và thư mục."],
            "core_content": ["Sử dụng công cụ Search để tìm kiếm tệp, thư mục khi biết tên.", "Từ dải lệnh View, em chọn được các dạng hiển thị tệp và thư mục."],
            "quiz": [
                { "question": "Khi em không nhớ một tệp được lưu ở đâu nhưng nhớ tên tệp, em nên dùng công cụ nào?", "options": ["New Folder", "Delete", "Rename", "Search"], "answer": 3 }
            ]
        },
        "D1": {
            "objectives": ["Giải thích được một số khái niệm liên quan đến bản quyền.", "Thể hiện được sự tôn trọng tính riêng tư và bản quyền nội dung thông tin."],
            "core_content": ["Không được sử dụng hoặc thay đổi nội dung thông tin của người khác khi chưa được phép.", "Phải tôn trọng sự bảo mật và tính riêng tư của thông tin."],
            "quiz": [
                { "question": "Hành động nào sau đây thể hiện sự tôn trọng bản quyền?", "options": ["Tự ý sao chép bài của bạn để nộp", "Sử dụng ảnh trên mạng không ghi nguồn tác giả", "Trích dẫn một đoạn thơ và ghi rõ tên tác giả", "Xem trộm tin nhắn của người khác"], "answer": 2 }
            ]
        },
        "E1": {
            "objectives": ["Thực hiện thành thạo các thao tác chọn và sao chép khối văn bản."],
            "core_content": ["Sử dụng các lệnh Copy và Paste để sao chép khối văn bản, giúp tiết kiệm thời gian khi soạn thảo các nội dung lặp lại."],
            "quiz": [
                { "question": "Để sao chép một đoạn văn bản, em chọn đoạn văn bản đó rồi dùng tổ hợp lệnh nào?", "options": ["Cut và Paste", "Copy và Paste", "Chỉ dùng Copy", "Chỉ dùng Paste"], "answer": 1 }
            ]
        },
        "E2": {
            "objectives": ["Thực hiện thành thạo các thao tác chọn, xoá và di chuyển khối văn bản."],
            "core_content": ["Sử dụng phím Delete để xoá khối văn bản đã chọn.", "Sử dụng các lệnh Cut và Paste để di chuyển khối văn bản đến vị trí mới."],
            "quiz": [
                { "question": "Để di chuyển một câu từ đầu đoạn văn xuống cuối đoạn văn, em dùng tổ hợp lệnh nào?", "options": ["Cut và Paste", "Copy và Paste", "Copy và Delete", "Cut và Copy"], "answer": 0 }
            ]
        },
        "E3": {
            "objectives": ["Thực hiện thành thạo thao tác chèn ảnh vào văn bản."],
            "core_content": ["Chèn ảnh từ máy tính (Insert -> Pictures) hoặc từ Internet (Insert -> Online Pictures).", "Tạo khung viền cho ảnh bằng các lệnh trong dải lệnh Picture Format."],
             "quiz": [
                { "question": "Để chèn một bức ảnh có sẵn trong máy tính vào Word, em vào thẻ Insert rồi chọn...", "options": ["Shapes", "Pictures", "Chart", "Online Pictures"], "answer": 1 }
            ]
        },
        "E4": {
            "objectives": ["Thực hiện được thao tác định dạng kí tự: chọn phông, kiểu, cỡ và màu sắc cho chữ."],
            "core_content": ["Các lệnh định dạng kí tự thuộc nhóm lệnh Font của dải lệnh Home.", "Để định dạng kí tự, chọn khối văn bản đó rồi chọn lệnh định dạng."],
             "quiz": [
                { "question": "Để làm cho chữ to hơn, em cần thay đổi thuộc tính nào?", "options": ["Font Color (Màu chữ)", "Font (Phông chữ)", "Font Size (Cỡ chữ)", "Bold (Chữ đậm)"], "answer": 2 }
            ]
        },
        "E5": {
            "objectives": ["Trình bày được văn bản một cách hợp lí nhờ các thao tác đã học."],
            "core_content": ["Đây là bài thực hành tổng hợp, vận dụng các kỹ năng đã học để tạo một văn bản hoàn chỉnh có cả chữ và hình ảnh được bố trí hợp lý."],
        },
        "F1": {
            "objectives": ["Thêm được nhóm lệnh Bút vẽ vào vùng Thư viện lệnh.", "Tạo được chương trình đơn giản có sử dụng nhóm lệnh Bút vẽ."],
            "core_content": ["Nhóm lệnh Bút vẽ có các lệnh dùng để vẽ hình trên vùng Sân khấu dựa theo vị trí và sự di chuyển của nhân vật."],
            "quiz": [
                { "question": "Trong Scratch, để nhân vật bắt đầu vẽ khi di chuyển, em cần dùng lệnh nào?", "options": ["nhấc bút", "đặt bút", "xoá tất cả", "in hình"], "answer": 1 }
            ]
        },
        "F2": {
            "objectives": ["Sử dụng được lệnh thay đổi hướng di chuyển của nhân vật.", "Tạo được chương trình vẽ hình đơn giản với nhóm lệnh Bút vẽ và Chuyển động."],
            "core_content": ["Lệnh 'đặt hướng bằng...' giúp nhân vật xoay đến một hướng cụ thể (0: lên, 90: phải, 180: xuống, -90: trái).", "Kết hợp các lệnh 'đặt hướng' và 'di chuyển' để vẽ các hình học đơn giản."],
        },
        "F3": {
            "objectives": ["Nêu được cách thay đổi hình ảnh cho các nhân vật.", "Tạo được chương trình hoạt hình từ sự thay đổi hình ảnh nhân vật."],
            "core_content": ["Một nhân vật có thể có nhiều trang phục (costume).", "Hoạt hình đơn giản có thể được tạo bởi sự thay đổi liên tục các trang phục của nhân vật.", "Kết hợp lệnh 'trang phục kế tiếp' và 'đợi' để tạo hiệu ứng chuyển động."],
            "quiz": [
                { "question": "Để tạo hoạt hình một nhân vật đang đi bộ trong Scratch, em thường kết hợp lệnh 'trang phục kế tiếp' với lệnh nào?", "options": ["di chuyển 10 bước", "nói Chào bạn!", "đợi 0.3 giây", "ẩn"], "answer": 2 }
            ]
        },
        "F4": {
            "objectives": ["Tạo được chương trình hoạt hình từ sự thay đổi hình ảnh nhân vật."],
            "core_content": ["Đây là bài thực hành tổng hợp kỹ năng tạo hoạt hình bằng cách thay đổi trang phục của nhân vật."],
        },
        "F5": {
            "objectives": ["Nêu được ví dụ cụ thể mô tả cấu trúc tuần tự.", "Tạo được chương trình đơn giản sử dụng cấu trúc tuần tự."],
            "core_content": ["Trong khối lệnh có cấu trúc tuần tự, các lệnh được thực hiện theo thứ tự đã được ghép từ trên xuống dưới."],
        },
        "F6": {
            "objectives": ["Nêu được ví dụ mô tả cấu trúc lặp với số lần biết trước.", "Tạo được chương trình đơn giản có sử dụng cấu trúc lặp này."],
            "core_content": ["Lệnh lặp với số lần biết trước trong Scratch là lệnh 'lặp lại ... lần'. Lệnh này điều khiển khối lệnh bên trong nó thực hiện lặp lại với số lần cho trước."],
             "quiz": [
                { "question": "Để vẽ một hình vuông, em cần lặp lại việc (di chuyển và xoay 90 độ) bao nhiêu lần?", "options": ["2 lần", "3 lần", "4 lần", "5 lần"], "answer": 2 }
            ]
        },
        "F7": {
            "objectives": ["Nhận biết được các biểu thức điều kiện.", "Nêu được ví dụ mô tả một cấu trúc lặp có điều kiện."],
            "core_content": ["Lệnh lặp có điều kiện trong Scratch là lệnh 'lặp lại cho đến khi'. Lệnh này điều khiển khối lệnh được lặp cho tới khi điều kiện dừng lặp có giá trị đúng."],
        },
        "F8": {
            "objectives": ["Nêu được ví dụ mô tả cấu trúc lặp liên tục.", "Tạo được chương trình đơn giản có sử dụng cấu trúc lặp liên tục."],
            "core_content": ["Lệnh lặp liên tục trong Scratch là lệnh 'liên tục'. Lệnh này điều khiển khối lệnh được lặp thực hiện không dừng lại."],
        },
        "F9": {
            "objectives": ["Sử dụng được lệnh nhập thông tin từ bàn phím và biến có sẵn.", "Thực hiện được các bước để tạo biến của người dùng."],
            "core_content": ["Biến dùng để lưu giá trị khi chạy chương trình.", "Lệnh 'hỏi...và đợi' lưu giá trị nhập vào biến 'trả lời'.", "Nhóm lệnh Các biến số cho phép tạo biến mới."],
        },
        "F10": {
            "objectives": ["Tạo được biểu thức tính toán với các phép toán số học.", "Sử dụng được phép kết hợp để nối các chữ, giá trị của biến."],
            "core_content": ["Trong Scratch, có thể tạo các biểu thức tính toán với các phép toán +, -, *, /.", "Phép 'kết hợp' dùng để nối các chuỗi văn bản, giá trị của biến và giá trị của biểu thức."],
        },
        "F11": {
            "objectives": ["Sử dụng được các phép so sánh lớn hơn, nhỏ hơn, bằng.", "Sử dụng được phép lấy số ngẫu nhiên."],
            "core_content": ["Kết quả của các phép so sánh có giá trị là đúng (true) hoặc sai (false).", "Phép 'lấy ngẫu nhiên từ...đến...' cho kết quả là một số tự nhiên trong khoảng đó."],
        },
        "F12": {
            "objectives": ["Nêu được ví dụ mô tả cấu trúc rẽ nhánh.", "Tạo được chương trình đơn giản sử dụng cấu trúc rẽ nhánh."],
            "core_content": ["Lệnh rẽ nhánh khuyết ('nếu...thì...') thực hiện khối lệnh khi điều kiện đúng.", "Lệnh rẽ nhánh đủ ('nếu...thì..., nếu không thì...') thực hiện khối lệnh 1 khi điều kiện đúng và khối lệnh 2 khi điều kiện sai."],
        },
        "F13": {
            "objectives": ["Chạy thử chương trình, phát hiện và sửa được lỗi."],
            "core_content": ["Khi tạo chương trình, cần chạy thử để phát hiện lỗi.", "Nếu chương trình có lỗi, cần sửa lỗi để chương trình thực hiện đúng yêu cầu."],
        },
        "F14": {
            "objectives": ["Hợp tác được theo nhóm để viết kịch bản.", "Tạo được chương trình theo kịch bản đã viết."],
            "core_content": ["Đây là bài thực hành tổng hợp theo dự án nhóm, vận dụng toàn bộ kiến thức về Scratch đã học để tạo ra một sản phẩm hoàn chỉnh."],
        }
    };
    return allDetails[lessonId] || { "objectives": ["Nội dung đang được cập nhật."], "core_content": [], "activities": [], "answer_keys": {}, "quiz": [] };
}
