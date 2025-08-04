// Dữ liệu cho tất cả các bài học
const lessonsData = {
    "A": {
        "title": "Chủ đề A: Máy tính và Cộng đồng",
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
        // ... (Nội dung chi tiết cho các bài học khác)
    };
    return allDetails[lessonId] || { "objectives": ["Nội dung đang được cập nhật."], "core_content": [], "activities": [], "answer_keys": {} };
}
