// Dữ liệu cho tất cả các bài học
const lessonsData = {
    "A": {
        "title": "Chủ đề A: Máy tính và Cộng đồng",
        "icon": "fas fa-desktop", // Biểu tượng Máy tính
        "lessons": [
            { "id": "A1", "title": "Bài 1: Thiết bị vào - ra cơ bản", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=Thi%E1%BA%BFt+b%E1%BB%8B+V%C3%A0o+-+Ra", "gdrive_embed": "" },
            { "id": "A2", "title": "Bài 2: Các thiết bị vào - ra", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=M%C3%A1y+in,+M%C3%A1y+qu%C3%A9t,+Webcam", "gdrive_embed": "" },
            { "id": "A3", "title": "Bài 3: Thực hành với các thiết bị vào - ra", "image": "https://placehold.co/1200x400/e5e7eb/1f2937?text=Th%E1%BB%B1c+h%C3%A0nh+k%E1%BA%BFt+n%E1%BB%91i", "gdrive_embed": "" },
            { "id": "A4", "title": "Bài 4: Một số chức năng của hệ điều hành", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=H%E1%BB%87+%C4%9Đi%E1%BB%81u+H%C3%A0nh", "gdrive_embed": "" },
            { "id": "A5", "title": "Bài 5: Thực hành khám phá trình quản lí hệ thống tệp", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=File+Explorer", "gdrive_embed": "" },
            { "id": "A6", "title": "Bài 6: Thực hành thao tác với tệp và thư mục", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=T%E1%BB%87p+v%C3%A0+Th%C6%B0+m%E1%BB%A5c", "gdrive_embed": "" }
        ]
    },
    "C": {
        "title": "Chủ đề C: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin",
        "icon": "fas fa-sitemap", // Biểu tượng Mạng lưới
        "lessons": [
            { "id": "C1", "title": "Bài 1: Giới thiệu mạng xã hội", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=M%E1%BA%A1ng+X%C3%A3+H%E1%BB%99i", "gdrive_embed": "" },
            { "id": "C2", "title": "Bài 2: Thực hành sử dụng mạng xã hội", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=Th%E1%BB%B1c+h%C3%A0nh+Facebook", "gdrive_embed": "" },
            { "id": "C3", "title": "Bài 3: Trao đổi thông tin trên mạng xã hội", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=Trao+%C4%91%E1%BB%95i+th%C3%B4ng+tin", "gdrive_embed": "" }
        ]
    },
    "D": {
        "title": "Chủ đề D: Đạo đức, pháp luật và văn hoá trong môi trường số",
        "icon": "fas fa-balance-scale-right", // Biểu tượng Cán cân
        "lessons": [
            { "id": "D1", "title": "Bài 1: Ứng xử có văn hoá khi giao tiếp qua mạng", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=V%C4%83n+ho%C3%A1+%E1%BB%A9ng+x%E1%BB%AD", "gdrive_embed": "" },
            { "id": "D2", "title": "Bài 2: Ứng xử tránh rủi ro trên mạng", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=R%E1%BB%A7i+ro+tr%C3%AAn+m%E1%BA%A1ng", "gdrive_embed": "" }
        ]
    },
    "E": {
        "title": "Chủ đề E: Ứng dụng tin học",
        "icon": "fas fa-th-large", // Biểu tượng Ứng dụng
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
        "icon": "fas fa-brain", // Biểu tượng Tư duy
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
        // CHỦ ĐỀ A
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
        "A3": {
            "objectives": ["Kết nối được màn hình, bàn phím, chuột với máy tính.", "Nêu được ví dụ về thao tác không đúng cách gây lỗi."],
            "core_content": ["Nhận biết các cổng kết nối thông dụng: cổng tròn (PS/2), USB, VGA, HDMI.", "Các bước kết nối bàn phím, chuột (có dây, không dây).", "Các bước kết nối màn hình.", "Các lỗi thường gặp: cắm sai cổng, cắm ngược giắc USB, lắp pin sai chiều, lỏng cáp."],
            "activities": [
                { "name": "Hoạt động 1: Hướng dẫn chung", "duration": 10, "teacher_tasks": ["Giới thiệu các cổng kết nối.", "Lưu ý an toàn khi thao tác."], "student_tasks": ["Quan sát, nhận biết các cổng.", "Lắng nghe hướng dẫn."] },
                { "name": "Hoạt động 2: Thực hành", "duration": 25, "teacher_tasks": ["Yêu cầu HS thực hành kết nối bàn phím, chuột, màn hình.", "Quan sát, hỗ trợ các nhóm."], "student_tasks": ["Thực hiện kết nối theo các bước trong SGK.", "Kiểm tra hoạt động của thiết bị."] },
                { "name": "Hoạt động 3: Thảo luận lỗi", "duration": 10, "teacher_tasks": ["Yêu cầu HS nêu các ví dụ thao tác sai có thể gây lỗi.", "Tổng kết các lỗi thường gặp."], "student_tasks": ["Thảo luận và trình bày."] }
            ],
            "answer_keys": { "van_dung": "Có thể sử dụng bàn phím và chuột có cổng cắm USB để thay thế." }
        },
        "A4": {
            "objectives": ["Biết được hệ điều hành là một phần mềm đặc biệt.", "Phân biệt được hệ điều hành với phần mềm ứng dụng.", "Nêu được tên một số phần mềm ứng dụng đã sử dụng.", "Biết các biện pháp cơ bản để bảo vệ an toàn dữ liệu."],
            "core_content": ["Hệ điều hành (HĐH) là phần mềm hệ thống, khởi động và kiểm soát mọi hoạt động của máy tính.", "Chức năng chính của HĐH: quản lí người dùng, quản lí phần mềm ứng dụng và tệp, hỗ trợ an toàn dữ liệu.", "Phần mềm ứng dụng là phần mềm phục vụ một công việc cụ thể (soạn thảo, duyệt web...).", "Biện pháp an toàn dữ liệu: phòng chống virus, sao lưu dự phòng."],
            "activities": [
                { "name": "Hoạt động 1: Khởi động", "duration": 5, "teacher_tasks": ["Hỏi về tên gọi 'Hệ điều hành' gợi cho em điều gì?"], "student_tasks": ["Suy đoán về chức năng 'điều hành', 'quản lí'."] },
                { "name": "Hoạt động 2: Hình thành kiến thức", "duration": 25, "teacher_tasks": ["Giải thích vai trò của HĐH khi bật/tắt máy.", "Phân biệt HĐH (Windows, MacOS, Android) và PM ứng dụng (Word, Chrome, Zalo).", "Giới thiệu các chức năng quản lí và bảo vệ dữ liệu."], "student_tasks": ["Lắng nghe, ghi chép.", "Kể tên các PM ứng dụng đã dùng.", "Hiểu sự khác biệt giữa HĐH và PM ứng dụng."] },
                { "name": "Hoạt động 3: Luyện tập & Vận dụng", "duration": 15, "teacher_tasks": ["Yêu cầu HS kể tên PM ứng dụng.", "Nêu chức năng đặc biệt của HĐH.", "Khuyến khích HS kiểm tra phần mềm diệt virus trên máy đang dùng."], "student_tasks": ["Thực hiện các yêu cầu của GV."] }
            ],
            "answer_keys": { "tu_kiem_tra": ["Câu 1: Các biểu tượng Word, Excel, PowerPoint là phần mềm ứng dụng.", "Câu 2: Câu 'Hệ điều hành hỗ trợ phòng chống virus và sao lưu dự phòng' là đúng."] }
        },
        "A5": {
            "objectives": ["Biết được trình quản lí hệ thống tệp và chức năng chính của nó.", "Hiểu ý nghĩa của phần mở rộng trong tên tệp.", "Thao tác được trong cửa sổ File Explorer."],
            "core_content": ["Trình quản lí hệ thống tệp trong Windows là File Explorer.", "Cửa sổ File Explorer có 3 vùng chính: vùng nút lệnh, vùng điều hướng, vùng hiển thị nội dung.", "Đuôi tên tệp (phần mở rộng) cho biết tệp thuộc loại nào và giúp HĐH chọn đúng phần mềm để mở (ví dụ: .docx, .xlsx, .jpg, .exe)."],
            "activities": [
                { "name": "Hoạt động 1: Giới thiệu File Explorer", "duration": 10, "teacher_tasks": ["Giới thiệu các vùng của cửa sổ File Explorer.", "Giải thích ý nghĩa của đuôi tên tệp."], "student_tasks": ["Quan sát, ghi nhớ."] },
                { "name": "Hoạt động 2: Thực hành khám phá", "duration": 30, "teacher_tasks": ["Hướng dẫn HS thực hành các bài tập trong SGK (Bài 1-6).", "Quan sát, hỗ trợ HS thao tác."], "student_tasks": ["Thực hiện các thao tác khám phá Quick access, vùng điều hướng, cách hiển thị, thanh đường dẫn..."] },
                { "name": "Hoạt động 3: Tổng kết", "duration": 5, "teacher_tasks": ["Hỏi lại về chức năng của File Explorer và ý nghĩa đuôi tệp."], "student_tasks": ["Trả lời câu hỏi tổng kết."] }
            ],
            "answer_keys": {}
        },
        "A6": {
            "objectives": ["Sử dụng được các nút lệnh thường dùng của File Explorer.", "Thao tác thành thạo với tệp và thư mục: tạo, sao chép, di chuyển, đổi tên, xoá."],
            "core_content": ["Các cách thao tác: dùng nút lệnh, menu chuột phải, tổ hợp phím tắt (Ctrl+C, Ctrl+X, Ctrl+V).", "Các thao tác cơ bản: Tạo mới (New folder), Sao chép (Copy), Di chuyển (Cut/Move to), Đổi tên (Rename), Xoá (Delete).", "Khôi phục tệp/thư mục đã xoá từ Thùng rác (Recycle Bin)."],
            "activities": [
                { "name": "Hoạt động 1: Hướng dẫn", "duration": 10, "teacher_tasks": ["Giới thiệu các cách thực hiện thao tác.", "Lưu ý các kí tự không được dùng trong tên tệp/thư mục.", "Hướng dẫn cách chọn nhiều đối tượng (dùng phím Ctrl)."], "student_tasks": ["Lắng nghe, ghi nhớ."] },
                { "name": "Hoạt động 2: Thực hành", "duration": 30, "teacher_tasks": ["Yêu cầu HS thực hành các bài tập 1-5 trong SGK.", "Quan sát, hỗ trợ HS."], "student_tasks": ["Thực hành tạo, sao chép, di chuyển, đổi tên, xoá tệp và thư mục."] },
                { "name": "Hoạt động 3: Vận dụng", "duration": 5, "teacher_tasks": ["Giao nhiệm vụ Vận dụng: Sắp xếp các tệp bài hát vào thư mục Music."], "student_tasks": ["Ghi nhận nhiệm vụ để thực hành thêm."] }
            ],
            "answer_keys": {}
        },
        // CHỦ ĐỀ C
        "C1": {
            "objectives": ["Nêu được tên một kênh trao đổi thông tin thông dụng trên Internet và loại thông tin trao đổi trên kênh đó.", "Trình bày được sơ lược khái niệm cơ bản về mạng xã hội.", "Biết được một số chức năng cơ bản của mạng xã hội để giao lưu và chia sẻ thông tin."],
            "core_content": ["Mạng xã hội là một ứng dụng web kết nối các thành viên có cùng đặc điểm cá nhân như sở thích, lứa tuổi, nghề nghiệp.", "Đặc điểm: nội dung do người dùng tạo và chia sẻ, người dùng tạo hồ sơ cá nhân và kết bạn, phát triển cộng đồng.", "Chức năng cơ bản: tạo trang cá nhân, chia sẻ bài viết/hình ảnh/video, bình luận, nhắn tin, gọi video.", "Ví dụ: Facebook, Instagram, Zalo, YouTube, Twitter."],
            "activities": [
                { "name": "Hoạt động 1: Khởi động", "duration": 5, "teacher_tasks": ["Hỏi HS đã sử dụng những công cụ nào để trao đổi thông tin trên Internet (Thư điện tử, Chat, Mạng xã hội...)."], "student_tasks": ["Chia sẻ kinh nghiệm cá nhân."] },
                { "name": "Hoạt động 2: Hình thành kiến thức", "duration": 25, "teacher_tasks": ["Giới thiệu khái niệm mạng xã hội.", "Trình bày các đặc điểm và chức năng cơ bản.", "Giới thiệu một số mạng xã hội phổ biến."], "student_tasks": ["Lắng nghe, ghi chép.", "Phân biệt các loại mạng xã hội."] },
                { "name": "Hoạt động 3: Luyện tập & Vận dụng", "duration": 15, "teacher_tasks": ["Yêu cầu HS nhận diện website nào là mạng xã hội.", "Thảo luận về sự khác biệt giữa mạng xã hội và website thông thường."], "student_tasks": ["Thực hiện bài tập nhận diện.", "Tham gia thảo luận."] }
            ],
            "answer_keys": { "luyen_tap": ["Các website là mạng xã hội: https://www.facebook.com, https://zalo.me."], "van_dung": "Mạng xã hội cho phép người dùng tự tạo và chia sẻ nội dung, tương tác hai chiều mạnh mẽ (kết bạn, bình luận). Website thông thường chủ yếu cung cấp thông tin một chiều từ chủ sở hữu trang web.", "tu_kiem_tra": ["Câu 1 đúng. Các câu còn lại sai."] }
        },
        "C2": {
            "objectives": ["Tạo được tài khoản và hồ sơ cá nhân, chia sẻ thông tin trên mạng xã hội."],
            "core_content": ["Để sử dụng mạng xã hội, cần tạo tài khoản cá nhân thông qua email hoặc số điện thoại.", "Các bước tạo tài khoản Facebook: truy cập trang chủ, chọn 'Tạo tài khoản mới', điền thông tin, xác nhận.", "Tạo hồ sơ cá nhân bao gồm: cập nhật ảnh đại diện, ảnh bìa, thông tin cá nhân (nơi ở, sở thích...).", "Chia sẻ thông tin: đăng bài viết, hình ảnh, video, liên kết lên trang cá nhân."],
            "activities": [
                { "name": "Hoạt động 1: Hướng dẫn", "duration": 10, "teacher_tasks": ["Giới thiệu các bước tạo tài khoản và hồ sơ trên Facebook.", "Lưu ý về việc sử dụng tên thật và bảo mật mật khẩu."], "student_tasks": ["Lắng nghe, ghi nhớ các bước."] },
                { "name": "Hoạt động 2: Thực hành", "duration": 30, "teacher_tasks": ["Yêu cầu HS thực hành tạo tài khoản, tạo hồ sơ và đăng một bài viết theo chủ đề cho trước.", "Quan sát, hỗ trợ HS."], "student_tasks": ["Thực hành theo các bài tập 1, 2, 3 trong SGK."] },
                { "name": "Hoạt động 3: Tổng kết", "duration": 5, "teacher_tasks": ["Hỏi lại các bước tạo tài khoản và chia sẻ thông tin.", "Nhắc nhở HS về việc sử dụng mạng xã hội an toàn."], "student_tasks": ["Trả lời câu hỏi tổng kết."] }
            ],
            "answer_keys": { "tu_kiem_tra": ["Câu 4 đúng. Các câu còn lại sai."] }
        },
        "C3": {
            "objectives": ["Thực hành giao lưu, trao đổi thông tin trên mạng xã hội Facebook.", "Biết được lợi ích của mạng xã hội, đồng thời nêu được ví dụ cụ thể về hậu quả của việc sử dụng thông tin vào mục đích sai trái."],
            "core_content": ["Các hình thức trao đổi thông tin: nhắn tin, gọi thoại, gọi video qua Messenger; tạo nhóm (Group) để thảo luận.", "Lợi ích của mạng xã hội: kết nối, chia sẻ, cập nhật thông tin, học tập, giải trí.", "Rủi ro và hậu quả: thông tin sai lệch, lừa đảo, bị đánh cắp thông tin cá nhân, bị bắt nạt trên mạng, nghiện mạng xã hội."],
            "activities": [
                { "name": "Hoạt động 1: Thực hành tạo nhóm", "duration": 20, "teacher_tasks": ["Hướng dẫn HS tạo nhóm trên Facebook để thảo luận về một chủ đề học tập.", "Yêu cầu các thành viên trong nhóm đăng bài và bình luận."], "student_tasks": ["Thực hành tạo nhóm, mời bạn bè, trao đổi thông tin trong nhóm."] },
                { "name": "Hoạt động 2: Thảo luận về lợi ích và tác hại", "duration": 20, "teacher_tasks": ["Tổ chức thảo luận về các lợi ích và hậu quả của việc sử dụng mạng xã hội.", "Đưa ra các ví dụ thực tế."], "student_tasks": ["Tham gia thảo luận, chia sẻ quan điểm và kinh nghiệm cá nhân."] },
                { "name": "Hoạt động 3: Củng cố", "duration": 5, "teacher_tasks": ["Tổng kết lại các điểm chính về lợi ích và rủi ro.", "Nhấn mạnh tầm quan trọng của việc sử dụng mạng xã hội một cách thông minh và có trách nhiệm."], "student_tasks": ["Ghi nhớ các quy tắc an toàn khi dùng mạng xã hội."] }
            ],
            "answer_keys": { "luyen_tap": ["Ví dụ 4 việc cần tránh: không chia sẻ thông tin cá nhân nhạy cảm, không kết bạn với người lạ, không lan truyền tin giả, không bắt nạt người khác trên mạng."], "tu_kiem_tra": ["Câu 1 và 2 đúng. Các câu còn lại sai."] }
        },
        // CHỦ ĐỀ D
        "D1": {
            "objectives": ["Thực hiện được giao tiếp qua mạng (trực tuyến hay không trực tuyến) theo đúng quy tắc và bằng ngôn ngữ lịch sự, thể hiện ứng xử có văn hoá."],
            "core_content": ["Quy tắc ứng xử trên mạng cũng như quy tắc ứng xử nơi công cộng.", "Lời khuyên 1: Tôn trọng những người xung quanh, không làm phiền người khác ở nơi công cộng.", "Lời khuyên 2: Giữ gìn hình ảnh bản thân trên không gian mạng, không sống ảo, sống giả dối.", "Lời khuyên 3: Hãy tử tế với người khác, không xúc phạm, không 'bêu xấu' hình ảnh người khác.", "Lời khuyên 4 & 5: Tôn trọng quyền riêng tư, lịch sự trả lời email, tin nhắn."],
            "activities": [
                { "name": "Hoạt động 1: Khởi động & Thảo luận", "duration": 15, "teacher_tasks": ["Tổ chức cho HS thảo luận về các hành vi thiếu văn hoá ở nơi công cộng và trên mạng xã hội."], "student_tasks": ["Tham gia thảo luận, nêu ý kiến cá nhân."] },
                { "name": "Hoạt động 2: Hình thành kiến thức", "duration": 20, "teacher_tasks": ["Trình bày các lời khuyên về ứng xử có văn hoá khi giao tiếp qua mạng.", "Phân tích các tình huống cụ thể."], "student_tasks": ["Lắng nghe, ghi nhớ các quy tắc ứng xử."] },
                { "name": "Hoạt động 3: Luyện tập & Vận dụng", "duration": 10, "teacher_tasks": ["Đặt câu hỏi và tình huống để HS vận dụng kiến thức đã học.", "Thảo luận về Bộ quy tắc ứng xử trên mạng xã hội của Bộ TTTT."], "student_tasks": ["Giải quyết các tình huống.", "Tìm hiểu và trình bày về bộ quy tắc."] }
            ],
            "answer_keys": { "luyen_tap": ["Bài 1: Vì mạng xã hội cũng là một môi trường công cộng, nơi có nhiều người cùng tham gia và tương tác.", "Bài 2: Nhắc nhở chúng ta hãy đối xử với người khác theo cách mà mình muốn được đối xử."], "van_dung": ["Gợi ý: Nếu bạn đăng ảnh xấu của em, em nên nhắn tin riêng cho bạn, nhẹ nhàng đề nghị bạn gỡ ảnh xuống vì em không thoải mái với hình ảnh đó."] }
        },
        "D2": {
            "objectives": ["Biết được tác hại của bệnh nghiện Internet, từ đó có ý thức phòng tránh.", "Ứng xử hợp lí khi gặp thông tin xấu, không phù hợp lứa tuổi.", "Biết nhờ người lớn giúp đỡ khi cần thiết, chẳng hạn khi bị bắt nạt trên mạng."],
            "core_content": ["Tác hại của nghiện game, mạng xã hội: ảnh hưởng sức khoẻ, học tập, xa rời thực tế.", "Rủi ro bị dụ dỗ, bắt nạt trên mạng: cần cảnh giác với người lạ, không chia sẻ thông tin nhạy cảm, không đi gặp riêng.", "Khi bị đe dọa, bắt nạt, cần nói ngay cho bố mẹ, thầy cô hoặc người lớn tin cậy để được giúp đỡ.", "Vi phạm pháp luật trên mạng: lan truyền tin giả, hình ảnh đồi truỵ, 'ăn cắp' tài khoản hoặc nội dung của người khác (vi phạm bản quyền)."],
            "activities": [
                { "name": "Hoạt động 1: Khởi động & Thảo luận", "duration": 10, "teacher_tasks": ["Thảo luận về hậu quả của việc nghiện game, nghiện mạng xã hội.", "Hỏi về các rủi ro mà HS có thể gặp trên mạng."], "student_tasks": ["Chia sẻ hiểu biết và lo lắng của bản thân."] },
                { "name": "Hoạt động 2: Hình thành kiến thức", "duration": 25, "teacher_tasks": ["Trình bày các lời khuyên để phòng tránh tác hại và rủi ro từ Internet.", "Nhấn mạnh các hành vi vi phạm pháp luật và hậu quả."], "student_tasks": ["Lắng nghe, ghi nhớ các cách phòng tránh và ứng xử."] },
                { "name": "Hoạt động 3: Vận dụng", "duration": 10, "teacher_tasks": ["Đưa ra các tình huống thực tế (bị đe dọa, muốn dùng ảnh trên mạng) để HS xử lý."], "student_tasks": ["Thảo luận và đưa ra cách giải quyết cho các tình huống."] }
            ],
            "answer_keys": { "van_dung": ["1) Khi bị đe dọa: không trả lời kẻ đe dọa, giữ lại bằng chứng (chụp màn hình) và báo ngay cho người lớn tin cậy.", "2) Khi muốn dùng ảnh trên mạng: cần tìm hiểu về bản quyền, xin phép tác giả nếu cần, hoặc sử dụng các nguồn ảnh miễn phí và ghi rõ nguồn."] }
        },
        // CHỦ ĐỀ E
        "E1": {
            "objectives": ["Biết được phần mềm bảng tính điện tử dùng để làm gì và một số tính năng ưu việt của nó.", "Biết được một số thành phần cơ bản trong cửa sổ làm việc của Excel."],
            "core_content": ["Phần mềm bảng tính điện tử (như Excel) là công cụ để tính toán với dữ liệu dạng bảng.", "Tính năng ưu việt: tự động tính toán lại khi dữ liệu thay đổi, phân tích, tổng hợp dữ liệu, trình bày thông tin trực quan dưới dạng biểu đồ.", "Cửa sổ Excel có nhiều điểm tương tự Word, có thêm các lệnh tính toán (như AutoSum) và vùng hiển thị ô dữ liệu dạng lưới."],
            "activities": [
                { "name": "Hoạt động 1: Khởi động", "duration": 5, "teacher_tasks": ["Nêu ví dụ về bảng điểm và đặt vấn đề về việc tính toán lại khi có sai sót."], "student_tasks": ["Nhận thấy sự cần thiết của một công cụ tính toán tự động."] },
                { "name": "Hoạt động 2: Hình thành kiến thức", "duration": 20, "teacher_tasks": ["Giới thiệu phần mềm bảng tính và các tính năng ưu việt.", "So sánh giao diện Excel và Word.", "Giới thiệu các vùng chính và nhóm lệnh Editing."], "student_tasks": ["Lắng nghe, ghi chép.", "Phân biệt mục đích của Word và Excel."] },
                { "name": "Hoạt động 3: Thực hành làm quen", "duration": 20, "teacher_tasks": ["Hướng dẫn HS thực hành các bài tập trong SGK: sao chép bảng, tính tổng, sửa lỗi, tạo biểu đồ."], "student_tasks": ["Thực hành theo hướng dẫn, trải nghiệm các tính năng của Excel."] }
            ],
            "answer_keys": { "tu_kiem_tra": ["Câu 1: Tính toán tự động, phân tích dữ liệu, tạo biểu đồ.", "Câu 2: Khi sửa một số liệu trong cột cân nặng, tổng cân nặng sẽ tự động cập nhật theo giá trị mới."] }
        },
        "E2": {
            "objectives": ["Biết được sổ tính, trang tính là gì.", "Biết được ô, hàng, cột, tên hàng, tên cột, địa chỉ ô là gì.", "Thực hiện được các thao tác đơn giản với ô, hàng, cột.", "Gõ nhập được dữ liệu vào đúng ô đích."],
            "core_content": ["Một tệp Excel là một sổ tính (workbook), gồm nhiều trang tính (sheet).", "Trang tính là một lưới gồm các cột (đặt tên bằng chữ cái A, B, C...) và các hàng (đặt tên bằng số 1, 2, 3...).", "Giao của một hàng và một cột là một ô (cell). Địa chỉ ô là ghép tên cột và tên hàng (ví dụ: A1, B5).", "Các thao tác cơ bản: điều chỉnh độ rộng cột/độ cao hàng, chèn/xoá hàng/cột, nhập/sửa/xoá dữ liệu trong ô."],
            "activities": [
                { "name": "Hoạt động 1: Hình thành kiến thức", "duration": 20, "teacher_tasks": ["Giới thiệu các khái niệm: sổ tính, trang tính, hàng, cột, ô, địa chỉ ô.", "Hướng dẫn các thao tác với hàng, cột và cách nhập, sửa, xóa dữ liệu."], "student_tasks": ["Lắng nghe, ghi chép.", "Phân biệt các thành phần của trang tính."] },
                { "name": "Hoạt động 2: Thực hành", "duration": 25, "teacher_tasks": ["Hướng dẫn HS thực hành thêm cột, chèn hàng, nhập dữ liệu và đổi tên trang tính."], "student_tasks": ["Thực hành theo các bài tập trong SGK."] }
            ],
            "answer_keys": { "tu_kiem_tra": ["Câu 1: Theo chữ cái A, B, C...", "Câu 2: Theo số 1, 2, 3...", "Câu 3: Ghép tên cột và tên hàng, ví dụ C5.", "Câu 4: Gõ nhập mới sẽ ghi đè dữ liệu cũ. Sửa chữa (nháy đúp hoặc nhấn F2) cho phép chỉnh sửa dữ liệu đang có."] }
        },
        "E3": {
            "objectives": ["Biết được hộp tên là gì, thanh công thức là gì và mối liên quan đến ô dữ liệu.", "Biết được khối ô là gì.", "Thực hiện được các thao tác sao chép, di chuyển khối ô."],
            "core_content": ["Hộp tên (Name Box) hiển thị địa chỉ của ô hoặc khối ô đang được chọn.", "Thanh công thức (Formula Bar) hiển thị nội dung thực của ô đang được chọn (dữ liệu hoặc công thức).", "Khối ô là một nhóm các ô liền kề tạo thành hình chữ nhật. Địa chỉ khối ô là địa chỉ ô góc trên bên trái và ô góc dưới bên phải, cách nhau bởi dấu hai chấm (ví dụ: B2:E5).", "Các thao tác với khối ô: chọn, sao chép, di chuyển, xóa dữ liệu."],
            "activities": [
                { "name": "Hoạt động 1: Hình thành kiến thức", "duration": 20, "teacher_tasks": ["Giới thiệu Hộp tên, Thanh công thức và Khối ô.", "Hướng dẫn cách chọn, sao chép, di chuyển khối ô."], "student_tasks": ["Lắng nghe, ghi chép.", "Thực hành chọn khối ô và quan sát thông tin trên thanh trạng thái."] },
                { "name": "Hoạt động 2: Thực hành", "duration": 25, "teacher_tasks": ["Hướng dẫn HS thực hành di chuyển, sao chép khối ô và di chuyển cột."], "student_tasks": ["Thực hành theo các bài tập trong SGK."] }
            ],
            "answer_keys": { "tu_kiem_tra": ["Câu 1: Để hiển thị địa chỉ ô đang chọn và cho phép di chuyển nhanh đến một ô bằng cách gõ địa chỉ vào đó.", "Câu 2: Là một nhóm ô liền kề hình chữ nhật. Địa chỉ là cặp địa chỉ ô góc trên trái và góc dưới phải, cách nhau bởi dấu hai chấm."] }
        },
        "E4": {
            "objectives": ["Biết được Excel đã làm sẵn nhiều định dạng hiển thị số liệu.", "Thực hiện được thao tác áp dụng một số định dạng số thông dụng."],
            "core_content": ["Định dạng hiển thị dữ liệu giúp thông tin dễ đọc và dễ hiểu hơn (ví dụ: số tiền, phần trăm).", "Các lệnh định dạng số nằm trong nhóm Number của dải lệnh Home.", "Các định dạng thông dụng: General (chung), Number (số), Currency (tiền tệ), Percentage (phần trăm).", "Các nút lệnh thao tác nhanh: tăng/giảm số chữ số thập phân, định dạng kiểu có dấu phẩy, định dạng tiền tệ ($), định dạng phần trăm (%)."],
            "activities": [
                { "name": "Hoạt động 1: Hình thành kiến thức", "duration": 15, "teacher_tasks": ["Giới thiệu sự cần thiết của việc định dạng số.", "Giới thiệu các định dạng và các nút lệnh trong nhóm Number."], "student_tasks": ["Lắng nghe, ghi chép."] },
                { "name": "Hoạt động 2: Thực hành", "duration": 30, "teacher_tasks": ["Hướng dẫn HS thực hành áp dụng các định dạng số khác nhau cho các cột dữ liệu trong bảng tính."], "student_tasks": ["Thực hành theo nhiệm vụ trong SGK."] }
            ],
            "answer_keys": { "tu_kiem_tra": ["Câu 1: Là định dạng mặc định, không có định dạng cụ thể nào.", "Câu 2: Lệnh '$' (tiền tệ), '%' (phần trăm), ',' (kiểu có dấu phẩy ngăn cách hàng nghìn)."] }
        },
        "E5": {
            "objectives": ["Biết được Excel có sẵn các định dạng số tiền và ngày tháng cho nhiều quốc gia.", "Thực hiện được thao tác áp dụng định dạng số tiền và ngày tháng kiểu Việt Nam."],
            "core_content": ["Excel hỗ trợ nhiều đơn vị tiền tệ và kiểu ngày tháng của các quốc gia khác nhau, bao gồm Việt Nam.", "Để định dạng tiền tệ Việt Nam (VND) hoặc ngày tháng kiểu Việt Nam, cần mở hộp thoại Format Cells.", "Các bước: Chọn ô/khối ô -> Chuột phải -> Format Cells -> thẻ Number.", "Trong Format Cells: chọn Currency và tìm 'VND' trong mục Symbol; hoặc chọn Date và tìm 'Vietnamese' trong mục Locale."],
            "activities": [
                { "name": "Hoạt động 1: Hình thành kiến thức", "duration": 15, "teacher_tasks": ["Giới thiệu cách định dạng tiền tệ và ngày tháng.", "Hướng dẫn chi tiết các bước mở hộp thoại Format Cells và chọn định dạng kiểu Việt Nam."], "student_tasks": ["Lắng nghe, ghi chép các bước thực hiện."] },
                { "name": "Hoạt động 2: Thực hành", "duration": 30, "teacher_tasks": ["Hướng dẫn HS thực hành thêm cột ngày sinh và định dạng ngày tháng kiểu Việt Nam."], "student_tasks": ["Thực hành theo nhiệm vụ trong SGK."] }
            ],
            "answer_keys": { "tu_kiem_tra": ["Câu 1: Nút lệnh '$'.", "Câu 2: Long Date hiển thị đầy đủ (ví dụ: Monday, August 04, 2025), Short Date hiển thị rút gọn (ví dụ: 8/4/2025).", "Câu 3: Chọn ô, chuột phải, chọn Format Cells (hoặc nhấn Ctrl+1).", "Câu 4: Mở Format Cells, chọn thẻ Number, chọn Currency/Date và tìm đến tùy chọn của Việt Nam."] }
        },
        "E6": {
            "objectives": ["Phác thảo được thiết kế sơ bộ một sổ theo dõi thu chi cá nhân.", "Thực hiện được việc tạo lập sổ tính Excel theo thiết kế.", "Nhập được một số ô dữ liệu vào sổ và định dạng phù hợp."],
            "core_content": ["Ứng dụng Excel để tạo một công cụ quản lý tài chính cá nhân.", "Thiết kế bảng gồm các cột cần thiết: Ngày tháng, Hạng mục, Khoản chi, Số tiền...", "Tạo bảng tổng hợp thu-chi theo tuần với các cột: Kế hoạch, Thực tế, Sai lệch.", "Áp dụng các định dạng đã học (ngày tháng, tiền tệ) để bảng tính chuyên nghiệp và dễ đọc."],
            "activities": [
                { "name": "Hoạt động 1: Phác thảo thiết kế", "duration": 15, "teacher_tasks": ["Cùng HS phân tích yêu cầu và phác thảo cấu trúc của 2 bảng: Bảng theo dõi chi tiết và Bảng tổng hợp."], "student_tasks": ["Tham gia thảo luận, đóng góp ý kiến cho thiết kế."] },
                { "name": "Hoạt động 2: Thực hành tạo lập", "duration": 30, "teacher_tasks": ["Hướng dẫn HS tạo lập các bảng theo thiết kế, nhập dữ liệu giả định và áp dụng các định dạng phù hợp."], "student_tasks": ["Thực hành trên máy tính theo hướng dẫn."] }
            ],
            "answer_keys": {}
        },
        "E7": {
            "objectives": ["Biết được cách dùng địa chỉ ô trong công thức.", "Thực hiện được thao tác nhập công thức với một số phép toán thông dụng trong Excel.", "Tạo được bảng tính đơn giản có các ô là kết quả tính toán theo công thức từ các ô khác.", "Biết được Excel có thể tự động điền công thức theo mẫu."],
            "core_content": ["Công thức trong Excel luôn bắt đầu bằng dấu '='.", "Sử dụng địa chỉ ô (ví dụ: B2, C2) trong công thức thay vì số liệu trực tiếp giúp kết quả tự động cập nhật khi dữ liệu thay đổi.", "Các phép toán: + (cộng), - (trừ), * (nhân), / (chia), ^ (luỹ thừa).", "Tính năng tự động điền công thức (AutoFill): dùng tay nắm (fill handle) ở góc dưới bên phải ô để kéo và sao chép công thức cho các ô liền kề."],
            "activities": [
                { "name": "Hoạt động 1: Hình thành kiến thức", "duration": 20, "teacher_tasks": ["Giới thiệu cách viết công thức và các phép toán.", "So sánh việc dùng số liệu trực tiếp và địa chỉ ô.", "Hướng dẫn cách sử dụng AutoFill để điền công thức tự động."], "student_tasks": ["Lắng nghe, ghi chép.", "Thực hiện các ví dụ nhỏ theo hướng dẫn."] },
                { "name": "Hoạt động 2: Thực hành", "duration": 25, "teacher_tasks": ["Hướng dẫn HS thực hành điền công thức tính chỉ số BMI trong tệp ThucHanh.xlsx."], "student_tasks": ["Thực hành trên máy tính."] }
            ],
            "answer_keys": { "tu_kiem_tra": ["Câu 1: Không có dấu '=', Excel coi là văn bản. Có dấu '=', Excel thực hiện tính toán.", "Câu 2: Kết quả sẽ tự động cập nhật khi dữ liệu ở các ô được tham chiếu thay đổi.", "Câu 3: Khi kéo tay nắm của một ô chứa công thức, Excel sẽ tự động điều chỉnh địa chỉ ô trong công thức cho phù hợp với vị trí mới."] }
        },
        "E8": {
            "objectives": ["Biết được Excel có sẵn nhiều hàm xử lí dữ liệu.", "Biết cách thức chung để nhập đầu vào, sử dụng hàm số trong công thức.", "Sử dụng được các hàm SUM, AVERAGE, MAX, MIN, COUNT."],
            "core_content": ["Hàm là công thức được xây dựng sẵn để thực hiện các tính toán phức tạp.", "Cú pháp chung: =TÊN_HÀM(đối_số_1, đối_số_2,...).", "Các hàm gộp thông dụng: SUM (tính tổng), AVERAGE (tính trung bình cộng), MAX (tìm giá trị lớn nhất), MIN (tìm giá trị nhỏ nhất), COUNT (đếm số lượng ô chứa số).", "Đối số của hàm có thể là số, địa chỉ ô, hoặc địa chỉ khối ô (ví dụ: C3:C7)."],
            "activities": [
                { "name": "Hoạt động 1: Hình thành kiến thức", "duration": 20, "teacher_tasks": ["Giới thiệu khái niệm hàm và cú pháp chung.", "Giới thiệu chức năng và cách sử dụng 5 hàm gộp thông dụng.", "Hướng dẫn cách dùng nút lệnh AutoSum để chèn hàm nhanh."], "student_tasks": ["Lắng nghe, ghi chép.", "Phân biệt chức năng của các hàm."] },
                { "name": "Hoạt động 2: Thực hành", "duration": 25, "teacher_tasks": ["Hướng dẫn HS thực hành sử dụng các hàm để tính giá trị nhỏ nhất cho các cột trong tệp ThucHanh.xlsx."], "student_tasks": ["Thực hành trên máy tính."] }
            ],
            "answer_keys": { "tu_kiem_tra": ["Câu 1: =TÊN_HÀM(danh_sách_đầu_vào).", "Câu 2: Dãy các số, địa chỉ ô, hoặc địa chỉ khối ô.", "Câu 3: Chọn khối ô cần tính và ô trống bên dưới/bên phải, sau đó nháy nút lệnh AutoSum (Σ) hoặc mũi tên bên cạnh để chọn hàm khác."] }
        },
        "E9": {
            "objectives": ["Thực hiện được các thao tác định dạng cơ bản cho trang tính, bao gồm định dạng chữ, căn chỉnh dữ liệu trong ô tính.", "Biết cách in trang tính."],
            "core_content": ["Định dạng trang tính giúp bảng dữ liệu đẹp và dễ đọc hơn.", "Các công cụ định dạng nằm trong nhóm Font và Alignment của dải lệnh Home, tương tự như trong Word.", "Trước khi in, cần xem trước (Print Preview) để kiểm tra cách ngắt trang.", "Các tùy chọn in: in vùng đã chọn (Print Selection), in trang tính hiện hoạt (Print Active Sheets), in toàn bộ sổ tính (Print Entire Workbook).", "Có thể điều chỉnh ngắt trang thủ công trong chế độ Page Break Preview."],
            "activities": [
                { "name": "Hoạt động 1: Thực hành định dạng", "duration": 20, "teacher_tasks": ["Hướng dẫn HS sử dụng các công cụ định dạng phông chữ, màu sắc, căn lề để làm đẹp bảng tính."], "student_tasks": ["Thực hành định dạng bảng tính theo các bước trong SGK."] },
                { "name": "Hoạt động 2: Tìm hiểu cách in", "duration": 25, "teacher_tasks": ["Giới thiệu chức năng Print Preview.", "Hướng dẫn các tùy chọn in và cách điều chỉnh ngắt trang."], "student_tasks": ["Thực hành xem trước khi in và điều chỉnh ngắt trang (nếu cần)."] }
            ],
            "answer_keys": { "tu_kiem_tra": ["Câu 1 và 3 đúng. Câu 2 và 4 sai."] }
        },
        "E10": {
            "objectives": ["Sử dụng được một số chức năng cơ bản của bảng tính.", "Tạo được bảng tính để giải quyết một vài công việc cụ thể, đơn giản, thiết thực."],
            "core_content": ["Bài thực hành tổng hợp các kỹ năng đã học: tạo bảng, nhập và định dạng dữ liệu, sử dụng công thức và hàm, căn chỉnh tiêu đề.", "Các kỹ năng mới: Gộp ô và căn giữa (Merge & Center), Tự động ngắt dòng trong ô (Wrap Text), điền dữ liệu tự động theo chuỗi (kéo tay nắm của 2 ô số liên tiếp).", "Công thức tính điểm trung bình môn học kỳ, áp dụng các phép toán và hàm COUNT."],
            "activities": [
                { "name": "Hoạt động 1: Hướng dẫn", "duration": 15, "teacher_tasks": ["Phân tích mẫu phiếu điểm và các yêu cầu.", "Hướng dẫn các kỹ năng mới: Merge & Center, Wrap Text, điền STT tự động.", "Giải thích công thức tính điểm trung bình môn."], "student_tasks": ["Lắng nghe, quan sát và ghi nhớ các bước."] },
                { "name": "Hoạt động 2: Thực hành", "duration": 30, "teacher_tasks": ["Yêu cầu HS thực hành tạo phiếu điểm cá nhân theo các bước trong SGK.", "Quan sát, hỗ trợ HS khi cần."], "student_tasks": ["Thực hành trên máy tính, áp dụng tổng hợp các kỹ năng đã học."] }
            ],
            "answer_keys": {}
        },
        "E11": {
            "objectives": ["Luyện tập, củng cố các kỹ năng sử dụng phần mềm bảng tính thông qua các bài tập nhóm."],
            "core_content": ["Vận dụng tổng hợp kiến thức để thực hiện các dự án nhỏ theo nhóm.", "Bài 1: Lập Bảng điểm tổng kết, sử dụng các hàm MAX, MIN, AVERAGE.", "Bài 2: Lập Bảng số liệu xuất khẩu gạo, sử dụng hàm SUM.", "Bài 3: Lập Bảng thông tin các nước ASEAN, sử dụng công thức để tính mật độ dân số và các hàm thống kê."],
            "activities": [
                { "name": "Hoạt động 1: Giao nhiệm vụ", "duration": 5, "teacher_tasks": ["Chia nhóm, giao một trong ba bài tập cho mỗi nhóm.", "Nêu rõ yêu cầu về sản phẩm (tệp Excel) và báo cáo."], "student_tasks": ["Nhận nhiệm vụ, hình thành nhóm."] },
                { "name": "Hoạt động 2: Thực hành nhóm", "duration": 35, "teacher_tasks": ["Quan sát các nhóm làm việc, hỗ trợ khi cần thiết."], "student_tasks": ["Các nhóm cùng nhau thảo luận, phân công công việc và thực hiện bài tập trên máy tính."] },
                { "name": "Hoạt động 3: Báo cáo (có thể ở tiết sau)", "duration": 5, "teacher_tasks": ["Yêu cầu các nhóm nộp sản phẩm và chuẩn bị báo cáo."], "student_tasks": ["Hoàn thành và nộp sản phẩm."] }
            ],
            "answer_keys": {}
        },
        "E12": {
            "objectives": ["Nhận biết được một số lợi ích cơ bản của phần mềm trình chiếu.", "Biết tạo bài trình chiếu có tiêu đề, theo cấu trúc phân cấp."],
            "core_content": ["Phần mềm trình chiếu (như PowerPoint) giúp tạo bài trình bày sinh động, kết hợp văn bản, hình ảnh, video...", "Một bài trình chiếu gồm nhiều trang chiếu (slide).", "Cấu trúc thường gồm: trang tiêu đề, các trang nội dung, và trang kết thúc.", "Nội dung trên trang chiếu cần ngắn gọn, súc tích, trình bày dưới dạng gạch đầu dòng và phân cấp."],
            "activities": [
                { "name": "Hoạt động 1: Khởi động", "duration": 5, "teacher_tasks": ["Hỏi HS về các phần mềm trình chiếu đã biết và cho xem một bài trình chiếu mẫu."], "student_tasks": ["Chia sẻ kinh nghiệm, xem và nhận xét bài mẫu."] },
                { "name": "Hoạt động 2: Hình thành kiến thức", "duration": 20, "teacher_tasks": ["Giới thiệu giao diện PowerPoint.", "Giải thích các khái niệm: bài trình chiếu, trang chiếu, cấu trúc phân cấp."], "student_tasks": ["Làm quen giao diện, ghi nhớ các khái niệm."] },
                { "name": "Hoạt động 3: Luyện tập", "duration": 20, "teacher_tasks": ["Hướng dẫn HS tạo bài trình chiếu 'Giới thiệu bản thân' với trang tiêu đề và các trang nội dung."], "student_tasks": ["Thực hành tạo bài trình chiếu đơn giản."] }
            ],
            "answer_keys": { "tu_kiem_tra": ["Câu 1 và 2 đúng. Câu 3 và 4 sai."] }
        },
        "E13": {
            "objectives": ["Thực hiện được chọn màu nền cho trang chiếu.", "Thực hiện được định dạng văn bản cho trang chiếu."],
            "core_content": ["Màu nền giúp bài trình chiếu đẹp và hấp dẫn hơn. Có thể chọn màu đơn sắc (Solid fill), màu chuyển (Gradient fill), hoặc ảnh nền (Picture fill).", "Định dạng văn bản trong PowerPoint tương tự trong Word, sử dụng các công cụ trong nhóm Font và Paragraph của dải lệnh Home.", "PowerPoint cung cấp các mẫu thiết kế (Themes) có sẵn trong dải lệnh Design để áp dụng nhanh cho toàn bộ bài trình chiếu."],
            "activities": [
                { "name": "Hoạt động 1: Thực hành chọn màu nền", "duration": 15, "teacher_tasks": ["Hướng dẫn các bước chọn màu nền cho trang chiếu (chuột phải -> Format Background)."], "student_tasks": ["Thực hành chọn các loại màu nền khác nhau."] },
                { "name": "Hoạt động 2: Thực hành định dạng văn bản", "duration": 20, "teacher_tasks": ["Hướng dẫn HS sử dụng các công cụ định dạng phông chữ, cỡ chữ, màu chữ, căn lề..."], "student_tasks": ["Thực hành định dạng văn bản trên trang chiếu."] },
                { "name": "Hoạt động 3: Giới thiệu Themes", "duration": 10, "teacher_tasks": ["Giới thiệu cách sử dụng các mẫu thiết kế có sẵn trong dải lệnh Design."], "student_tasks": ["Thử áp dụng các mẫu khác nhau cho bài trình chiếu của mình."] }
            ],
            "answer_keys": {}
        },
        "E14": {
            "objectives": ["Tạo được hiệu ứng xuất hiện cho các trang chiếu và các đối tượng trên trang chiếu một cách phù hợp."],
            "core_content": ["Hiệu ứng giúp bài trình bày sinh động và thu hút hơn.", "Hiệu ứng chuyển trang chiếu (Transitions): là cách xuất hiện của cả trang chiếu, thiết lập trong dải lệnh Transitions.", "Hiệu ứng cho đối tượng (Animations): là cách xuất hiện, biến mất, nhấn mạnh của từng đối tượng (văn bản, hình ảnh) trên trang chiếu, thiết lập trong dải lệnh Animations.", "Lưu ý: Không nên lạm dụng quá nhiều hiệu ứng."],
            "activities": [
                { "name": "Hoạt động 1: Tạo hiệu ứng cho đối tượng", "duration": 20, "teacher_tasks": ["Hướng dẫn các bước tạo hiệu ứng Animations cho văn bản và hình ảnh.", "Giải thích về thứ tự xuất hiện và các tùy chọn hiệu ứng."], "student_tasks": ["Thực hành tạo hiệu ứng cho các đối tượng trên trang chiếu."] },
                { "name": "Hoạt động 2: Tạo hiệu ứng chuyển trang", "duration": 20, "teacher_tasks": ["Hướng dẫn các bước tạo hiệu ứng Transitions cho trang chiếu.", "Giải thích cách áp dụng cho một hoặc tất cả các trang."], "student_tasks": ["Thực hành tạo hiệu ứng chuyển tiếp giữa các trang chiếu."] },
                { "name": "Hoạt động 3: Củng cố", "duration": 5, "teacher_tasks": ["Nhắc nhở về việc sử dụng hiệu ứng hợp lý."], "student_tasks": ["Trình chiếu thử để xem kết quả."] }
            ],
            "answer_keys": { "tu_kiem_tra": ["Cả 4 câu đều là những việc HS có thể làm được sau bài học."] }
        },
        "E15": {
            "objectives": ["Nêu được các chức năng cơ bản của phần mềm trình chiếu.", "Tạo được bài trình chiếu phục vụ học tập và công việc trên phần mềm PowerPoint.", "Sao chép được dữ liệu từ tệp văn bản sang tệp trình chiếu."],
            "core_content": ["Bài thực hành tổng hợp các kỹ năng về PowerPoint: tạo bài trình chiếu hoàn chỉnh theo chủ đề, có cấu trúc, định dạng, hình ảnh và hiệu ứng.", "Sao chép nội dung (đặc biệt là các đề mục) từ Word sang PowerPoint để tiết kiệm thời gian.", "Nội dung trên slide cần được chọn lọc, tóm tắt dưới dạng gạch đầu dòng, không sao chép nguyên văn các đoạn văn dài."],
            "activities": [
                { "name": "Hoạt động 1: Hướng dẫn", "duration": 10, "teacher_tasks": ["Giao nhiệm vụ: tạo bài trình chiếu chia sẻ kinh nghiệm học tập.", "Hướng dẫn các bước thực hiện, từ lập dàn ý đến hoàn thiện sản phẩm.", "Lưu ý cách sao chép nội dung từ Word hiệu quả."], "student_tasks": ["Thảo luận nhóm, lập dàn ý cho bài trình bày."] },
                { "name": "Hoạt động 2: Thực hành nhóm", "duration": 35, "teacher_tasks": ["Quan sát các nhóm làm việc, hỗ trợ khi cần thiết."], "student_tasks": ["Các nhóm cùng nhau tạo bài trình chiếu theo yêu cầu."] }
            ],
            "answer_keys": {}
        },
        // CHỦ ĐỀ F
        "F1": {
            "objectives": ["Mô phỏng được hoạt động của thuật toán tìm kiếm tuần tự trên một bộ dữ liệu đầu vào có kích thước nhỏ.", "Biết được khi dãy không có thứ tự thì phải tìm kiếm tuần tự.", "Biết được có hai loại bài toán tìm kiếm."],
            "core_content": ["Bài toán tìm kiếm có 2 loại: tìm trong dãy không sắp thứ tự và tìm trong dãy đã sắp thứ tự.", "Thuật toán tìm kiếm tuần tự: duyệt lần lượt từng phần tử của dãy từ đầu đến cuối.", "Quá trình dừng lại khi tìm thấy phần tử hoặc đã duyệt hết dãy mà không tìm thấy.", "Tìm kiếm tuần tự là bắt buộc khi dãy không được sắp xếp."],
            "activities": [
                { "name": "Hoạt động 1: Khởi động", "duration": 5, "teacher_tasks": ["Nêu tình huống tìm một học sinh trong danh sách lớp chưa sắp xếp."], "student_tasks": ["Nêu cách làm là dò từ đầu đến cuối."] },
                { "name": "Hoạt động 2: Hình thành kiến thức", "duration": 25, "teacher_tasks": ["Mô phỏng các bước tìm kiếm tuần tự trên một dãy số cụ thể.", "Phân tích 2 trường hợp: tìm thấy và không tìm thấy.", "Giới thiệu thuật toán bằng các bước mô tả."], "student_tasks": ["Quan sát, hiểu cách hoạt động của thuật toán."] },
                { "name": "Hoạt động 3: Luyện tập", "duration": 15, "teacher_tasks": ["Cho một dãy số và yêu cầu HS mô phỏng lại các bước tìm kiếm."], "student_tasks": ["Thực hành mô phỏng thuật toán trên giấy."] }
            ],
            "answer_keys": { "tu_kiem_tra": ["Câu 1: Tìm thấy hoặc không tìm thấy.", "Câu 2: Khi tìm thấy phần tử cần tìm trước khi duyệt hết dãy.", "Câu 3: Khi phần tử cần tìm nằm ở cuối dãy hoặc không có trong dãy."] }
        },
        "F2": {
            "objectives": ["Mô phỏng được hoạt động của thuật toán tìm kiếm nhị phân trên một bộ dữ liệu đầu vào có kích thước nhỏ.", "Biết được tìm kiếm nhị phân nhanh hơn tìm kiếm tuần tự.", "Nêu được ý nghĩa của việc chia một bài toán thành những bài toán nhỏ hơn."],
            "core_content": ["Thuật toán tìm kiếm nhị phân chỉ áp dụng được cho dãy đã sắp xếp.", "Ý tưởng: so sánh phần tử cần tìm với phần tử ở giữa dãy. Nếu không bằng, sẽ loại bỏ một nửa dãy và tiếp tục tìm kiếm trên nửa còn lại.", "Quá trình lặp lại cho đến khi tìm thấy hoặc phạm vi tìm kiếm bằng 0.", "Đây là ví dụ của phương pháp 'chia để trị', giúp giải quyết bài toán nhanh hơn."],
            "activities": [
                { "name": "Hoạt động 1: Khởi động", "duration": 5, "teacher_tasks": ["Đặt vấn đề tìm một số trong dãy đã sắp xếp, có cách nào nhanh hơn không?"], "student_tasks": ["Suy nghĩ, đưa ra ý tưởng (ví dụ: tra từ điển)."] },
                { "name": "Hoạt động 2: Hình thành kiến thức", "duration": 25, "teacher_tasks": ["Mô phỏng các bước tìm kiếm nhị phân trên một dãy số đã sắp xếp.", "Giới thiệu thuật toán và phương pháp 'chia để trị'."], "student_tasks": ["Quan sát, hiểu cách thuật toán loại bỏ một nửa phạm vi tìm kiếm."] },
                { "name": "Hoạt động 3: Luyện tập", "duration": 15, "teacher_tasks": ["Cho một dãy số và yêu cầu HS mô phỏng lại các bước tìm kiếm nhị phân."], "student_tasks": ["Thực hành mô phỏng thuật toán trên giấy."] }
            ],
            "answer_keys": { "van_dung": "Cách tra từ điển tương tự như tìm kiếm nhị phân. Ta mở khoảng giữa, so sánh từ cần tra với các từ ở trang đó để quyết định tìm ở nửa trước hay nửa sau của từ điển.", "tu_kiem_tra": ["Câu 1: Lặp lại việc chia đôi phạm vi tìm kiếm và loại bỏ nửa không chứa phần tử cần tìm.", "Câu 2: Không, chỉ áp dụng được cho dãy đã sắp xếp."] }
        },
        "F3": {
            "objectives": ["Biết được bài toán sắp xếp là gì.", "Biết được ý tưởng sắp xếp chọn.", "Mô phỏng được hoạt động của thuật toán sắp xếp chọn."],
            "core_content": ["Bài toán sắp xếp: đổi chỗ các phần tử trong dãy để tạo ra một dãy có thứ tự (tăng dần hoặc giảm dần).", "Thuật toán sắp xếp chọn (Selection Sort): Lặp lại n-1 lần. Ở mỗi lần lặp, tìm phần tử lớn nhất (hoặc nhỏ nhất) trong phần dãy chưa được sắp xếp, sau đó đổi chỗ nó với phần tử đầu tiên của phần dãy đó."],
            "activities": [
                { "name": "Hoạt động 1: Khởi động", "duration": 5, "teacher_tasks": ["Yêu cầu HS sắp xếp một bó que tính theo thứ tự."], "student_tasks": ["Thực hiện và mô tả cách làm."] },
                { "name": "Hoạt động 2: Hình thành kiến thức", "duration": 25, "teacher_tasks": ["Mô phỏng thuật toán sắp xếp chọn trên một dãy số cụ thể.", "Giới thiệu các bước của thuật toán."], "student_tasks": ["Quan sát, hiểu cách thuật toán hoạt động qua từng bước."] },
                { "name": "Hoạt động 3: Luyện tập", "duration": 15, "teacher_tasks": ["Cho một dãy số và yêu cầu HS mô phỏng lại các bước sắp xếp chọn."], "student_tasks": ["Thực hành mô phỏng thuật toán trên giấy."] }
            ],
            "answer_keys": { "van_dung": ["1) Khi phần tử lớn nhất đã nằm sẵn ở đầu của phần dãy chưa sắp xếp.", "2) Kết quả sẽ là dãy số có thứ tự tăng dần (không giảm)."], "tu_kiem_tra": ["Câu 1: Sắp xếp danh sách học sinh theo điểm trung bình giảm dần. Tiêu chí: điểm trung bình, thứ tự giảm dần.", "Câu 2: Là thuật toán sắp xếp bằng cách lặp lại việc chọn phần tử lớn nhất/nhỏ nhất đưa về đúng vị trí."] }
        },
        "F4": {
            "objectives": ["Biết được thế nào là sắp xếp nổi bọt.", "Mô phỏng được hoạt động của thuật toán sắp xếp nổi bọt."],
            "core_content": ["Thuật toán sắp xếp nổi bọt (Bubble Sort): Lặp lại việc duyệt qua dãy nhiều lần. Trong mỗi lần duyệt, so sánh các cặp phần tử liền kề và đổi chỗ nếu chúng sai thứ tự.", "Sau mỗi lần duyệt, phần tử lớn nhất (hoặc nhỏ nhất) sẽ 'nổi' lên vị trí đúng ở cuối phần dãy đang xét.", "Thuật toán kết thúc khi có một lần duyệt mà không có bất kỳ sự đổi chỗ nào xảy ra."],
            "activities": [
                { "name": "Hoạt động 1: Khởi động", "duration": 5, "teacher_tasks": ["Nêu tình huống robot chỉ có thể so sánh và đổi chỗ hai hộp kẹo liền kề."], "student_tasks": ["Suy nghĩ cách giúp robot sắp xếp."] },
                { "name": "Hoạt động 2: Hình thành kiến thức", "duration": 25, "teacher_tasks": ["Mô phỏng thuật toán sắp xếp nổi bọt trên một dãy số cụ thể.", "Giới thiệu các bước của thuật toán."], "student_tasks": ["Quan sát, hiểu cách các phần tử 'nổi bọt' lên vị trí đúng."] },
                { "name": "Hoạt động 3: Luyện tập", "duration": 15, "teacher_tasks": ["Cho một dãy số và yêu cầu HS mô phỏng lại các bước sắp xếp nổi bọt."], "student_tasks": ["Thực hành mô phỏng thuật toán trên giấy."] }
            ],
            "answer_keys": { "tu_kiem_tra": ["Câu 1: Khi chúng sai thứ tự mong muốn (ví dụ: sắp xếp tăng dần mà số đứng trước lớn hơn số đứng sau).", "Câu 2: Khi thực hiện một lượt duyệt mà không có lần đổi chỗ nào.", "Câu 3: Khi dãy ban đầu đã được sắp xếp sẵn."] }
        },
        "F5": {
            "objectives": ["Mô phỏng được hoạt động của một số thuật toán tìm kiếm, sắp xếp bằng các bước thủ công trên một bộ dữ liệu có kích thước nhỏ."],
            "core_content": ["Bài thực hành tổng hợp, yêu cầu học sinh vận dụng kiến thức về các thuật toán đã học để giải quyết các bài toán cụ thể.", "Các thuật toán cần mô phỏng: tìm kiếm tuần tự, sắp xếp chọn, sắp xếp nổi bọt, và tìm kiếm nhị phân (trên dãy đã được sắp xếp)."],
            "activities": [
                { "name": "Hoạt động 1: Giao nhiệm vụ", "duration": 5, "teacher_tasks": ["Giao các bài tập 1, 2, 3, 4 trong SGK.", "Có thể chia nhóm để thực hiện."], "student_tasks": ["Nhận nhiệm vụ."] },
                { "name": "Hoạt động 2: Thực hành", "duration": 35, "teacher_tasks": ["Quan sát HS làm bài, hỗ trợ khi cần thiết.", "Khuyến khích HS trình bày rõ ràng các bước mô phỏng."], "student_tasks": ["Thực hành mô phỏng các thuật toán trên giấy hoặc bảng con."] },
                { "name": "Hoạt động 3: Chữa bài và tổng kết", "duration": 5, "teacher_tasks": ["Chữa một vài bài tập mẫu.", "So sánh hiệu quả giữa các thuật toán.", "Tổng kết lại kiến thức của chủ đề F."], "student_tasks": ["Đối chiếu kết quả, đặt câu hỏi nếu có thắc mắc."] }
            ],
            "answer_keys": { "van_dung": "Tùy thuộc vào sở thích của học sinh, nhưng có thể gợi ý: Sắp xếp chọn thường có số lần đổi chỗ ít hơn, trong khi sắp xếp nổi bọt dễ hình dung hơn." }
        }
    };
    return allDetails[lessonId] || { "objectives": ["Nội dung đang được cập nhật."], "core_content": [], "activities": [], "answer_keys": {} };
}
