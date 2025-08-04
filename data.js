// Dữ liệu cho tất cả các bài học
const lessonsData = {
    "A": {
        "title": "Chủ đề A: Máy tính và Cộng đồng",
        "lessons": [
            { "id": "A1", "title": "Bài 1: Thiết bị vào - ra cơ bản", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=Thi%E1%BA%BFt+b%E1%BB%8B+V%C3%A0o+-+Ra", "gdrive_embed": "https://drive.google.com/file/d/1tkmKUSYyP5GFkLL2jjEKhVl2XdTYPc77/preview" },
            { "id": "A2", "title": "Bài 2: Các thiết bị vào - ra", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=M%C3%A1y+in,+M%C3%A1y+qu%C3%A9t,+Webcam", "gdrive_embed": "" },
            { "id": "A3", "title": "Bài 3: Thực hành với các thiết bị vào - ra", "image": "https://placehold.co/1200x400/e5e7eb/1f2937?text=Th%E1%BB%B1c+h%C3%A0nh+k%E1%BA%BFt+n%E1%BB%91i", "gdrive_embed": "" },
            { "id": "A4", "title": "Bài 4: Một số chức năng của hệ điều hành", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=H%E1%BB%87+%C4%9Đi%E1%BB%81u+H%C3%A0nh", "gdrive_embed": "" },
            { "id": "A5", "title": "Bài 5: Thực hành khám phá trình quản lí hệ thống tệp", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=File+Explorer", "gdrive_embed": "" },
            { "id": "A6", "title": "Bài 6: Thực hành thao tác với tệp và thư mục", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=T%E1%BB%87p+v%C3%A0+Th%C6%B0+m%E1%BB%A5c", "gdrive_embed": "" }
        ]
    },
    "C": {
        "title": "Chủ đề C: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin",
        "lessons": [
            { "id": "C1", "title": "Bài 1: Giới thiệu mạng xã hội", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=M%E1%BA%A1ng+X%C3%A3+H%E1%BB%99i", "gdrive_embed": "" },
            { "id": "C2", "title": "Bài 2: Thực hành sử dụng mạng xã hội", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=Th%E1%BB%B1c+h%C3%A0nh+Facebook", "gdrive_embed": "" },
            { "id": "C3", "title": "Bài 3: Trao đổi thông tin trên mạng xã hội", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=Trao+%C4%91%E1%BB%95i+th%C3%B4ng+tin", "gdrive_embed": "" }
        ]
    },
    "D": {
        "title": "Chủ đề D: Đạo đức, pháp luật và văn hoá trong môi trường số",
        "lessons": [
            { "id": "D1", "title": "Bài 1: Ứng xử có văn hoá khi giao tiếp qua mạng", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=V%C4%83n+ho%C3%A1+%E1%BB%A9ng+x%E1%BB%AD", "gdrive_embed": "" },
            { "id": "D2", "title": "Bài 2: Ứng xử tránh rủi ro trên mạng", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=R%E1%BB%A7i+ro+tr%C3%AAn+m%E1%BA%A1ng", "gdrive_embed": "" }
        ]
    },
    "E": {
        "title": "Chủ đề E: Ứng dụng tin học",
        "lessons": [
            { "id": "E1", "title": "Bài 1: Làm quen với bảng tính điện tử", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=B%E1%BA%A3ng+t%C3%ADnh+%C4%91i%E1%BB%87n+t%E1%BB%AD", "gdrive_embed": "" },
            { "id": "E2", "title": "Bài 2: Làm quen với trang tính", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=Trang+t%C3%ADnh+(Sheet)", "gdrive_embed": "" },
            { "id": "E3", "title": "Bài 3: Làm quen với trang tính (tiếp theo)", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=Thao+t%C3%A1c+v%E1%BB%9Bi+kh%E1%BB%91i+%C3%B4", "gdrive_embed": "" },
            { "id": "E4", "title": "Bài 4: Định dạng hiển thị dữ liệu số", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=%C4%90%E1%BB%8Bnh+d%E1%BA%A1ng+s%E1%BB%91", "gdrive_embed": "" },
            { "id": "E5", "title": "Bài 5: Định dạng số tiền và ngày tháng", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=Ti%E1%BB%81n+t%E1%BB%87+v%C3%A0+Ng%C3%A0y+th%C3%A1ng", "gdrive_embed": "" },
            { "id": "E6", "title": "Bài 6: Thực hành lập sổ theo dõi thu chi cá nhân", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=S%E1%BB%95+thu+chi", "gdrive_embed": "" },
            { "id": "E7", "title": "Bài 7: Công thức tính toán dùng địa chỉ các ô dữ liệu", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=C%C3%B4ng+th%E1%BB%A9c+t%C3%ADnh+to%C3%A1n", "gdrive_embed": "" },
            { "id": "E8", "title": "Bài 8: Sử dụng một số hàm có sẵn", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=H%C3%A0m+SUM,+AVERAGE", "gdrive_embed": "" },
            { "id": "E9", "title": "Bài 9: Định dạng trang tính và in", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=%C4%90%E1%BB%8Bnh+d%E1%BA%A1ng+v%C3%A0+In", "gdrive_embed": "" },
            { "id": "E10", "title": "Bài 10: Thực hành tổng hợp", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=Th%E1%BB%B1c+h%C3%A0nh+t%E1%BB%95ng+h%E1%BB%A3p+Excel", "gdrive_embed": "" },
            { "id": "E11", "title": "Bài 11: Luyện tập sử dụng phần mềm bảng tính", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=B%C3%A0i+t%E1%BA%ADp+nh%C3%B3m", "gdrive_embed": "" },
            { "id": "E12", "title": "Bài 12: Tạo bài trình chiếu", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=Ph%E1%BA%A7n+m%E1%BB%81m+Tr%C3%ACnh+chi%E1%BA%BFu", "gdrive_embed": "" },
            { "id": "E13", "title": "Bài 13: Thực hành định dạng trang chiếu", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=%C4%90%E1%BB%8Bnh+d%E1%BA%A1ng+Trang+chi%E1%BA%BFu", "gdrive_embed": "" },
            { "id": "E14", "title": "Bài 14: Thêm hiệu ứng cho trang chiếu", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=Hi%E1%BB%87u+%E1%BB%A9ng+Animation", "gdrive_embed": "" },
            { "id": "E15", "title": "Bài 15: Thực hành tổng hợp tạo bài trình chiếu", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=Th%E1%BB%B1c+h%C3%A0nh+t%E1%BB%95ng+h%E1%BB%A3p+PowerPoint", "gdrive_embed": "" }
        ]
    },
    "F": {
        "title": "Chủ đề F: Giải quyết vấn đề với sự trợ giúp của máy tính",
        "lessons": [
            { "id": "F1", "title": "Bài 1: Tìm kiếm tuần tự", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=T%C3%ACm+ki%E1%BA%BFm+tu%E1%BA%A7n+t%E1%BB%B1", "gdrive_embed": "" },
            { "id": "F2", "title": "Bài 2: Tìm kiếm nhị phân", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=T%C3%ACm+ki%E1%BA%BFm+nh%E1%BB%8B+ph%C3%A2n", "gdrive_embed": "" },
            { "id": "F3", "title": "Bài 3: Sắp xếp chọn", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=S%E1%BA%AFp+x%E1%BA%BFp+ch%E1%BB%8Dn", "gdrive_embed": "" },
            { "id": "F4", "title": "Bài 4: Sắp xếp nổi bọt", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=S%E1%BA%AFp+x%E1%BA%BFp+n%E1%BB%95i+b%E1%BB%8Dt", "gdrive_embed": "" },
            { "id": "F5", "title": "Bài 5: Thực hành mô phỏng các thuật toán", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=M%C3%B4+ph%E1%BB%8Fng+thu%E1%BA%ADt+to%C3%A1n", "gdrive_embed": "" }
        ]
    }
};

function getLessonDetails(lessonId) {
    const allDetails = {
        "A1": {
            "objectives": ["Nhận biết được các thiết bị vào – ra cơ bản và thông dụng nhất.", "Biết được có nhiều loại máy tính cá nhân với các kiểu thiết bị vào – ra khác nhau.", "Biết được một thiết bị có thể vừa là đầu vào vừa là đầu ra."],
            "core_content": ["Máy tính để bàn gồm các bộ phận cơ bản: hộp thân máy, màn hình, bàn phím, chuột.", "Thiết bị vào cơ bản: Bàn phím, chuột. Thiết bị ra cơ bản: Màn hình.", "Máy tính xách tay tích hợp các thiết bị vào-ra cơ bản.", "Máy tính bảng và điện thoại thông minh dùng màn hình cảm ứng vừa là thiết bị vào, vừa là thiết bị ra."],
            "activities": [
                { "name": "Hoạt động 1: Khởi động", "duration": 5, "teacher_tasks": ["Đặt câu hỏi: \"Nên nói 'một chiếc' hay 'một bộ' máy tính xách tay?\"", "Ghi nhận ý kiến, không kết luận.", "Dẫn dắt vào bài học mới."], "student_tasks": ["Thảo luận cặp đôi, đưa ra câu trả lời.", "Tập trung, sẵn sàng vào bài mới."] },
                { "name": "Hoạt động 2: Hình thành kiến thức", "duration": 25, "teacher_tasks": ["Giới thiệu thiết bị vào-ra của máy tính để bàn.", "Giải thích sự tích hợp trên máy tính xách tay (tấm chạm).", "Giới thiệu màn hình cảm ứng.", "Chốt các kiến thức trọng tâm."], "student_tasks": ["Quan sát, phân biệt các thiết bị.", "Ghi chép các khái niệm.", "Tích cực trả lời câu hỏi."] },
                { "name": "Hoạt động 3: Luyện tập", "duration": 5, "teacher_tasks": ["Tổ chức cho HS trả lời 3 câu hỏi Luyện tập.", "Nhận xét, chốt đáp án."], "student_tasks": ["Hoạt động cá nhân/cặp đôi trả lời câu hỏi.", "Trình bày câu trả lời."] },
                { "name": "Hoạt động 4: Vận dụng", "duration": 5, "teacher_tasks": ["Nêu tình huống Vận dụng.", "Mời HS chia sẻ lựa chọn và lý do."], "student_tasks": ["Suy nghĩ, liên hệ thực tế.", "Giải thích cho lựa chọn của mình."] },
                { "name": "Hoạt động 5: Củng cố & Dặn dò", "duration": 5, "teacher_tasks": ["Hệ thống lại kiến thức qua các câu hỏi Tự kiểm tra.", "Giao nhiệm vụ về nhà: Đọc trước Bài 2."], "student_tasks": ["Trả lời câu hỏi củng cố.", "Ghi chép nhiệm vụ về nhà."] }
            ],
            "answer_keys": { "luyen_tap": ["Câu 1: Một bộ máy tính để bàn gồm có: hộp thân máy, màn hình, bàn phím và chuột.", "Câu 2: Bàn phím ảo thường có ở máy tính bảng, điện thoại thông minh.", "Câu 3: Máy tính xách tay dùng tấm chạm (touchpad) để thay thế chuột máy tính."], "van_dung": "Gợi ý: HS lựa chọn loại máy tính (để bàn, xách tay, bảng) và giải thích dựa trên ưu/nhược điểm liên quan đến nhu cầu học tập, tính di động, giá thành, hiệu năng...", "tu_kiem_tra": ["Câu 1: Hộp thân máy chứa: bộ xử lí trung tâm (CPU), bộ nhớ trong (RAM) và ổ đĩa cứng.", "Câu 2: Các thiết bị vào-ra cơ bản của máy tính là: bàn phím, chuột, màn hình.", "Câu 3: Màn hình cảm ứng vừa là thiết bị vào vừa là thiết bị ra."] }
        },
        "A2": {
            "objectives": ["Biết được thiết bị vào – ra là gì.", "Biết được một số thiết bị vào – ra qua ví dụ minh hoạ."],
            "core_content": ["Thiết bị vào-ra (thiết bị ngoại vi) là tên gọi chung của các thiết bị để máy tính nhận thông tin từ bên ngoài và xuất thông tin ra bên ngoài.", "Ví dụ thiết bị vào: webcam, máy quét, micro, máy đọc mã vạch.", "Ví dụ thiết bị ra: máy in, máy chiếu, loa, tai nghe.", "Một số thiết bị vừa vào vừa ra: màn hình cảm ứng, tai nghe có micro."],
            "activities": [
                { "name": "Hoạt động 1: Khởi động", "duration": 5, "teacher_tasks": ["Đặt câu hỏi: 'Ổ đĩa cứng có phải là thiết bị vào-ra không?'", "Khuyến khích tranh luận."], "student_tasks": ["Suy nghĩ, trả lời câu hỏi."] },
                { "name": "Hoạt động 2: Hình thành kiến thức", "duration": 25, "teacher_tasks": ["Giải thích khái niệm thiết bị vào-ra.", "Giới thiệu các thiết bị vào đa dạng.", "Giới thiệu các thiết bị ra đa dạng."], "student_tasks": ["Phân biệt được thiết bị vào, ra và lưu trữ.", "Nhận biết chức năng các thiết bị mới."] },
                { "name": "Hoạt động 3: Luyện tập & Vận dụng", "duration": 10, "teacher_tasks": ["Yêu cầu HS kể tên các thiết bị vào/ra theo dạng thông tin (âm thanh, hình ảnh).", "Nêu tình huống 'Cần gì để chat video?'"], "student_tasks": ["Phân loại thiết bị.", "Giải quyết tình huống thực tế."] }
            ],
            "answer_keys": { "luyen_tap": ["Bài 1: Thiết bị vào âm thanh: micro. Thiết bị vào hình ảnh: webcam, máy quét, máy ảnh số...", "Bài 2: Thiết bị ra âm thanh: loa, tai nghe. Thiết bị ra hình ảnh: màn hình, máy in, máy chiếu..."], "van_dung": "Cần có thêm webcam (để thu hình), micro (để thu tiếng), loa hoặc tai nghe (để nghe).", "tu_kiem_tra": ["Câu 1: Là các thiết bị để máy tính nhận thông tin từ thế giới bên ngoài và xuất thông tin ra thế giới bên ngoài.", "Câu 2: Bàn phím, chuột, webcam, máy quét, micro...", "Câu 3: Màn hình, máy in, loa, máy chiếu..."] }
        },
        // ... Dữ liệu chi tiết cho tất cả các bài học khác được thêm vào đây
    };
    return allDetails[lessonId] || { "objectives": ["Nội dung đang được cập nhật."], "core_content": [], "activities": [], "answer_keys": {} };
}
