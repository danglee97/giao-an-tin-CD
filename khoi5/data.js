const gradeInfo = {
    sgk_pdf: "Sách GK Tin học 5 - Cánh Diệu.pdf",
    sgv_pdf: "Sách GV Tin học 5 - Cánh Diệu.pdf"
};

const lessonsData = {
    "A": {
        "title": "Chủ đề A: Máy tính và em", "icon": "fas fa-desktop",
        "lessons": [
            { "id": "A1", "title": "Bài 1: Lợi ích của máy tính", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=L%E1%BB%A3i+%C3%ADch+m%C3%A1y+t%C3%ADnh" },
            { "id": "A2", "title": "Bài 2: Thực hành tạo sản phẩm số", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=S%E1%BA%A3n+ph%E1%BA%A9m+s%E1%BB%91" },
            { "id": "A3", "title": "Bài 3: Lợi ích của việc sử dụng máy tính thành thạo", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=S%E1%BB%AD+d%E1%BB%A5ng+th%C3%A0nh+th%E1%BA%A1o" }
        ]
    },
    "B": {
        "title": "Chủ đề B: Mạng máy tính và Internet", "icon": "fas fa-globe",
        "lessons": [
            { "id": "B1", "title": "Bài 1: Tìm thông tin trên website", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=T%C3%ACm+tr%C3%AAn+website" },
            { "id": "B2", "title": "Bài 2: Hợp tác, tìm kiếm và chia sẻ thông tin", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=H%E1%BB%A3p+t%C3%A1c+%26+Chia+s%E1%BA%BB" }
        ]
    },
    "C": {
        "title": "Chủ đề C: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin", "icon": "fas fa-sitemap",
        "lessons": [
            { "id": "C1", "title": "Bài 1: Thu thập và tìm kiếm thông tin trong giải quyết vấn đề", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=Thu+th%E1%BA%ADp+th%C3%B4ng+tin" },
            { "id": "C2", "title": "Bài 2: Thực hành tìm kiếm và chọn thông tin", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=Th%E1%BB%B1c+h%C3%A0nh+t%C3%ACm+ki%E1%BA%BFm" },
            { "id": "C3", "title": "Bài 1: Thực hành tạo cây thư mục", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=T%E1%BA%A1o+c%C3%A2y+th%C6%B0+m%E1%BB%A5c" },
            { "id": "C4", "title": "Bài 2: Tìm kiếm tệp và thư mục", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=T%C3%ACm+ki%E1%BA%BFm+t%E1%BB%87p" }
        ]
    },
    "D": {
        "title": "Chủ đề D: Đạo đức, pháp luật và văn hoá trong môi trường số", "icon": "fas fa-balance-scale-right",
        "lessons": [
            { "id": "D1", "title": "Bài học: Tôn trọng quyền tác giả khi sử dụng nội dung thông tin", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=B%E1%BA%A3n+quy%E1%BB%81n+th%C3%B4ng+tin" }
        ]
    },
    "E": {
        "title": "Chủ đề E: Ứng dụng tin học", "icon": "fas fa-th-large",
        "lessons": [
            { "id": "E1", "title": "Bài 1: Thực hành chọn và sao chép khối văn bản", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=Sao+ch%C3%A9p+v%C4%83n+b%E1%BA%A3n" },
            { "id": "E2", "title": "Bài 2: Thực hành xoá và di chuyển khối văn bản", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=Xo%C3%A1+%26+Di+chuy%E1%BB%83n" },
            { "id": "E3", "title": "Bài 3: Thực hành chèn ảnh vào văn bản", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=Ch%C3%A8n+%E1%BA%A3nh" },
            { "id": "E4", "title": "Bài 4: Định dạng kí tự", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=%C4%90%E1%BB%8Bnh+d%E1%BA%A1ng+k%C3%AD+t%E1%BB%B1" },
            { "id": "E5", "title": "Bài 5: Thực hành tổng hợp soạn thảo văn bản", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=Th%E1%BB%B1c+h%C3%A0nh+t%E1%BB%95ng+h%E1%BB%A3p" }
        ]
    },
    "F": {
        "title": "Chủ đề F: Giải quyết vấn đề với sự trợ giúp của máy tính", "icon": "fas fa-brain",
        "lessons": [
            { "id": "F1", "title": "Bài 1: Nhóm lệnh bút vẽ", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=L%E1%BB%87nh+b%C3%BAt+v%E1%BA%BD" },
            { "id": "F2", "title": "Bài 2: Thực hành tạo chương trình vẽ hình đơn giản", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=V%E1%BA%BD+h%C3%ACnh+Scratch" },
            { "id": "F3", "title": "Bài 3: Trang phục của nhân vật", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=Trang+ph%E1%BB%A5c+nh%C3%A2n+v%E1%BA%ADt" },
            { "id": "F4", "title": "Bài 4: Thực hành tạo chương trình hoạt hình", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=Ho%E1%BA%A1t+h%C3%ACnh+Scratch" },
            { "id": "F5", "title": "Bài 5: Cấu trúc tuần tự", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=C%E1%BA%A5u+tr%C3%BAc+tu%E1%BA%A7n+t%E1%BB%B1" },
            { "id": "F6", "title": "Bài 6: Cấu trúc lặp với số lần biết trước", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=V%C3%B2ng+l%E1%BA%B7p" },
            { "id": "F7", "title": "Bài 7: Cấu trúc lặp có điều kiện", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=L%E1%BA%B7p+c%C3%B3+%C4%91i%E1%BB%81u+ki%E1%BB%87n" },
            { "id": "F8", "title": "Bài 8: Cấu trúc lặp liên tục", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=L%E1%BA%B7p+li%C3%AAn+t%E1%BB%A5c" },
            { "id": "F9", "title": "Bài 9: Biến và cách dùng biến", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=Bi%E1%BA%BFn+trong+Scratch" },
            { "id": "F10", "title": "Bài 10: Các phép toán số học cơ bản và phép kết hợp", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=Ph%C3%A9p+to%C3%A1n" },
            { "id": "F11", "title": "Bài 11: Các phép so sánh", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=Ph%C3%A9p+so+s%C3%A1nh" },
            { "id": "F12", "title": "Bài 12: Cấu trúc rẽ nhánh", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=C%E1%BA%A5u+tr%C3%BAc+r%E1%BA%BD+nh%C3%A1nh" },
            { "id": "F13", "title": "Bài 13: Chạy thử, phát hiện và sửa lỗi chương trình", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=S%E1%BB%ADa+l%E1%BB%97i+ch%C6%B0%C6%A1ng+tr%C3%ACnh" },
            { "id": "F14", "title": "Bài 14: Thực hành viết kịch bản và tạo chương trình", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=D%E1%BB%B1+%C3%A1n+Scratch" }
        ]
    }
};

function getLessonDetails(lessonId) {
    const allDetails = {
        "A1": {
            "objectives": ["Nêu được ví dụ máy tính giúp em giải trí, học tập, tìm kiếm, trao đổi thông tin, hợp tác với bạn bè và tạo ra sản phẩm số theo ý tưởng của bản thân."],
            "core_content": ["Máy tính là một công cụ hữu ích giúp em học tập, giải trí, tìm kiếm, trao đổi thông tin, hợp tác với bạn bè.", "Đồng thời, máy tính cũng giúp em học tập và rèn luyện những kĩ năng để sử dụng máy tính thành thạo hơn."],
            "activities": [
                {"name": "Hoạt động 1: Những việc em có thể làm nhờ máy tính", "duration": 20, "teacher_tasks": ["Cho HS quan sát hình ảnh các phần mềm/website và giải câu đố.", "Thảo luận về các công việc có thể làm với máy tính."], "student_tasks": ["Giải câu đố, so sánh kết quả.", "Chia sẻ kinh nghiệm sử dụng máy tính."] },
                {"name": "Hoạt động 2: Lợi ích của máy tính", "duration": 15, "teacher_tasks": ["Cho HS quan sát sơ đồ tư duy về lợi ích của máy tính.", "Yêu cầu HS bổ sung thêm các nhánh con cho sơ đồ."], "student_tasks": ["Quan sát và thảo luận để mở rộng sơ đồ tư duy."] }
            ],
            "answer_keys": { "luyen_tap": ["Câu SAI là: b) Máy tính chỉ dùng cho mục đích giải trí."], "van_dung": ["HS tự nêu ví dụ thực tế của bản thân cho từng tình huống: học trực tuyến, tìm kiếm thông tin, chia sẻ hình ảnh, giải trí."] }
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
            "activities": [
                {"name": "Hoạt động 1: Soạn thảo văn bản đẹp hơn", "duration": 20, "teacher_tasks": ["Cho HS so sánh hai văn bản (chưa định dạng và đã định dạng).", "Thảo luận về các thao tác cần biết để làm văn bản đẹp hơn."], "student_tasks": ["So sánh và chỉ ra điểm khác biệt.", "Nêu mong muốn học các kỹ năng định dạng."] },
                {"name": "Hoạt động 2: Tạo sản phẩm đa dạng", "duration": 15, "teacher_tasks": ["Cho HS xem một trang chiếu và đặt câu hỏi về việc thay thế ảnh bằng video.", "Thảo luận về việc cần học thêm các phần mềm khác để tạo sản phẩm phong phú hơn."], "student_tasks": ["Thảo luận và thể hiện mong muốn học cách tạo video."] }
            ],
            "answer_keys": { "luyen_tap": ["HS tự đánh giá các kỹ năng đã học và nêu mong muốn học thêm kỹ năng mới (ví dụ: chèn video)."], "van_dung": ["HS tìm hiểu thêm các chức năng của PowerPoint để làm thiệp chúc mừng sinh nhật đẹp hơn."] }
        },
        "B1": {
            "objectives": ["Tìm được trên website cho trước những thông tin phù hợp và có ích cho nhiệm vụ đặt ra."],
            "core_content": ["Trên một website có các thành phần: tên, địa chỉ website và bảng chọn nội dung. Ngoài ra, website có thể có công cụ tìm kiếm.", "Để tìm thông tin trên website, em nháy chuột vào các siêu liên kết phù hợp trên bảng chọn nội dung hoặc sử dụng công cụ tìm kiếm."],
            "activities": [],
            "answer_keys": { "luyen_tap": ["HS thực hành tìm kiếm thông tin về lịch sử của Bảo tàng Dân tộc học Việt Nam trên website của bảo tàng."], "van_dung": ["HS thực hành tìm kiếm thông tin về Câu lạc bộ Khoa học Kĩ thuật trên website của Nhà thiếu nhi Thành phố Hồ Chí Minh."] }
        },
        "B2": {
            "objectives": ["Hợp tác, tìm kiếm và chia sẻ được thông tin với các bạn trong nhóm để hoàn thành nhiệm vụ học tập được giao với sự trợ giúp của máy tính."],
            "core_content": ["Khi trao đổi, hợp tác để tìm kiếm và chia sẻ thông tin, em có thể tìm được nhanh và nhiều thông tin phù hợp.", "Thiết bị nhớ, ổ đĩa ngoài, thư điện tử hoặc các ứng dụng giao tiếp trực tuyến là các phương tiện giúp trao đổi thông tin."],
            "activities": [],
            "answer_keys": { "luyen_tap": ["Sử dụng ổ đĩa ngoài (USB) để sao chép tệp từ máy của em sang máy của bạn."], "van_dung": ["HS có thể chia sẻ tệp ảnh bằng cách dùng USB hoặc các ứng dụng như Zalo, Messenger Kids (nếu được phép)."] }
        },
        "C1": {
            "objectives": ["Giải thích được sự cần thiết, tầm quan trọng của việc thu thập và tìm kiếm thông tin trong giải quyết vấn đề."],
            "core_content": ["Khi thực hiện một nhiệm vụ trong học tập hay trong cuộc sống, em cần có thông tin để giải quyết được vấn đề đặt ra.", "Khi chưa có đủ thông tin để giải quyết vấn đề, em cần thu thập và tìm kiếm thông tin."],
            "activities": [],
            "answer_keys": { "luyen_tap": ["Cần các thông tin: Danh sách các bạn trong lớp, ngày sinh của từng bạn. Cách thu thập: Hỏi cô giáo chủ nhiệm hoặc khảo sát trực tiếp các bạn trong lớp."], "van_dung": ["Sử dụng máy tìm kiếm trên Internet với các từ khoá như 'phần mềm Scratch là gì', 'ai tạo ra Scratch', 'số người dùng Scratch'."] }
        },
        "C2": {
            "objectives": ["Tìm kiếm và chọn được thông tin phù hợp với vấn đề cần giải quyết.", "Hợp tác được với người khác để giải quyết vấn đề cụ thể."],
            "core_content": ["Có thể tìm thông tin từ nhiều nguồn; Muốn có thông tin phù hợp thì phải lựa chọn; Mọi thành viên trong nhóm biết cách hợp tác sẽ giúp hoàn thành nhiệm vụ nhanh và chính xác."],
            "activities": [],
            "answer_keys": { "van_dung": ["HS làm việc nhóm để tìm kiếm thông tin và hình ảnh, sau đó tạo bài trình chiếu giới thiệu về một cảnh đẹp ở Việt Nam."] }
        },
        "C3": {
            "objectives": ["Tổ chức lưu trữ được các tệp, thư mục bằng cấu trúc cây hợp lí.", "Thực hiện được việc tạo các thư mục từ cấu trúc cây."],
            "core_content": ["Việc tổ chức, sắp xếp các tệp và thư mục trên máy tính một cách hợp lí sẽ thuận tiện trong việc tìm kiếm."],
            "activities": [],
            "answer_keys": { "van_dung": ["Thư mục 'Phim hoạt hình' nên được di chuyển vào bên trong thư mục 'Giải trí'. Thư mục 'CLB lop 5' nên được đổi tên thành 'CLB' và chứa các thư mục con về các câu lạc bộ."] }
        },
        "C4": {
            "objectives": ["Sử dụng được công cụ tìm kiếm trên máy tính để tìm tệp và thư mục.", "Lựa chọn được kiểu bố cục hiển thị để xem các tệp và thư mục."],
            "core_content": ["Sử dụng công cụ Search để tìm kiếm tệp, thư mục khi biết tên.", "Từ dải lệnh View, em chọn được các dạng hiển thị tệp và thư mục."],
            "activities": [],
            "answer_keys": { "luyen_tap": ["Bài 1: A. Search.", "Bài 2: C. Large icons."], "van_dung": ["Các bước: 1. Mở This PC, chọn ổ đĩa để tìm kiếm (ví dụ ổ D:). 2. Nhập tên tệp 'Quy Nhon' vào ô Search. 3. Chờ kết quả hiện ra và mở tệp ảnh."] }
        },
        "D1": {
            "objectives": ["Giải thích được một số khái niệm liên quan đến bản quyền nội dung thông tin.", "Nhận biết và giải thích được sơ lược một số vấn đề đạo đức và tính hợp lệ của việc truy cập nội dung, việc bảo mật thông tin.", "Thể hiện được sự tôn trọng tính riêng tư và bản quyền nội dung thông tin."],
            "core_content": ["Không được sử dụng hoặc thay đổi nội dung thông tin trong tác phẩm của người khác khi chưa được phép.", "Phải tôn trọng sự bảo mật và tính riêng tư của thông tin.", "Cần thể hiện sự không đồng tình với những hiện tượng sai trái trong truy cập và sử dụng nội dung thông tin."],
            "activities": [],
            "answer_keys": { "luyen_tap": ["Bài 1: Sao chép phim có bản quyền lên mạng, sử dụng hình ảnh của người khác không xin phép...", "Bài 2: Để tôn trọng quyền tác giả và không bị coi là ăn cắp sản phẩm trí tuệ của người khác."], "van_dung": ["a) Vi phạm khi chưa được sự đồng ý của bạn. b) Vi phạm tính riêng tư khi chưa được sự đồng ý của bạn và mẹ bạn."] }
        },
        "E1": {
            "objectives": ["Thực hiện thành thạo các thao tác chọn và sao chép khối văn bản."],
            "core_content": ["Sử dụng các lệnh Copy và Paste để sao chép khối văn bản, giúp tiết kiệm thời gian khi soạn thảo các nội dung lặp lại."],
            "activities": [],
            "answer_keys": { "van_dung": ["HS thực hành soạn thảo văn bản về Trương Định, sử dụng thao tác sao chép cụm từ 'anh hùng Trương Định'."] }
        },
        "E2": {
            "objectives": ["Thực hiện thành thạo các thao tác chọn, xoá và di chuyển khối văn bản."],
            "core_content": ["Sử dụng phím Delete để xoá khối văn bản đã chọn.", "Sử dụng các lệnh Cut và Paste để di chuyển khối văn bản đến vị trí mới."],
            "activities": [],
            "answer_keys": { "van_dung": ["Cách sửa: Thêm dòng tiêu đề, sao chép nội dung cũ xuống dưới. Trong nội dung mới, di chuyển dòng 'Nếu đèn tín hiệu...' lên đầu tiên, sau đó xoá dòng 'Chọn văn bản đã gõ'."] }
        },
        "E3": {
            "objectives": ["Thực hiện thành thạo thao tác chèn ảnh vào văn bản."],
            "core_content": ["Chèn ảnh từ máy tính (Insert -> Pictures) hoặc từ Internet (Insert -> Online Pictures).", "Tạo khung viền cho ảnh bằng các lệnh trong dải lệnh Picture Format."],
            "activities": [],
            "answer_keys": { "van_dung": ["HS thực hành tạo một bài báo tường về chủ đề 'Ngày Nhà giáo Việt Nam', có chèn ảnh tìm kiếm từ Internet."] }
        },
        "E4": {
            "objectives": ["Thực hiện được thao tác định dạng kí tự để trình bày văn bản đẹp hơn: chọn phông, kiểu, cỡ và màu sắc cho chữ."],
            "core_content": ["Các lệnh định dạng kí tự thuộc nhóm lệnh Font của dải lệnh Home.", "Để định dạng kí tự trong một khối văn bản, chọn khối văn bản đó rồi chọn lệnh định dạng."],
            "activities": [],
            "answer_keys": { "luyen_tap": ["Bài 1: Chọn khối văn bản -> Nháy lệnh B (Bold), I (Italic) -> Chọn màu đỏ trong lệnh Font Color -> Chọn cỡ 14 trong lệnh Font Size.", "Bài 2: Chữ đậm, chữ nghiêng, màu chữ khác nhau."], "van_dung": ["HS thực hành tạo và định dạng văn bản tự đánh giá của nhóm mình."] }
        },
        "E5": {
            "objectives": ["Trình bày được văn bản một cách hợp lí nhờ các thao tác: định dạng kí tự, chèn ảnh, chọn, sao chép và di chuyển khối văn bản."],
            "core_content": ["Đây là bài thực hành tổng hợp, vận dụng các kỹ năng đã học để tạo một văn bản hoàn chỉnh có cả chữ và hình ảnh được bố trí hợp lý."],
            "activities": [],
            "answer_keys": { "van_dung": ["HS tự chọn một chủ đề và tạo một sản phẩm văn bản hoàn chỉnh, có định dạng và hình ảnh minh họa."] }
        },
        "F1": {
            "objectives": ["Thêm được nhóm lệnh Bút vẽ vào vùng Thư viện lệnh.", "Tạo được chương trình đơn giản có sử dụng nhóm lệnh Bút vẽ."],
            "core_content": ["Nhóm lệnh Bút vẽ có các lệnh dùng để vẽ hình trên vùng Sân khấu dựa theo vị trí và sự di chuyển của nhân vật."],
            "activities": [],
            "answer_keys": { "luyen_tap": ["Bài 1: Xoá tất cả, in hình, đặt bút, nhấc bút, đặt màu bút, đặt kích thước bút.", "Bài 2: Tạo chương trình có lệnh 'đặt kích thước bút vẽ bằng 5', 'đặt bút', 'di chuyển 100 bước'."], "van_dung": ["Sử dụng các lệnh 'đặt màu bút' khác nhau xen kẽ với các lệnh 'di chuyển'."] }
        },
        "F2": {
            "objectives": ["Sử dụng được lệnh thay đổi hướng di chuyển của nhân vật.", "Tạo được chương trình vẽ hình đơn giản với hai nhóm lệnh Bút vẽ và Chuyển động."],
            "core_content": ["Lệnh 'đặt hướng bằng...' giúp nhân vật xoay đến một hướng cụ thể.", "Kết hợp các lệnh 'đặt hướng' và 'di chuyển' để vẽ các hình học đơn giản."],
            "activities": [],
            "answer_keys": { "van_dung": ["Tương tự bài vẽ hình vuông, nhưng sử dụng 2 giá trị độ dài khác nhau cho các cạnh (70 và 100) và vẫn xoay 90 độ."] }
        },
        "F3": {
            "objectives": ["Nêu được cách thay đổi hình ảnh cho các nhân vật.", "Tạo được chương trình đơn giản thể hiện hoạt hình từ sự thay đổi hình ảnh nhân vật."],
            "core_content": ["Một nhân vật có thể có nhiều trang phục (costume).", "Hoạt hình đơn giản có thể được tạo bởi sự thay đổi liên tục các trang phục của nhân vật.", "Kết hợp lệnh 'trang phục kế tiếp' và 'đợi' để tạo hiệu ứng chuyển động."],
            "activities": [],
            "answer_keys": { "luyen_tap": ["b) Vì chương trình liên tục chuyển đổi giữa 2 trang phục của chim bồ câu (đang bay và vỗ cánh) với một khoảng dừng ngắn, tạo ra ảo giác chuyển động."], "van_dung": ["Chọn nhân vật Gấu (Bear), vào mục Trang phục để xem các dáng đi của nó. Tạo chương trình lặp lại việc chuyển 'trang phục kế tiếp' và 'đợi' một khoảng thời gian ngắn."] }
        },
        "F4": {
            "objectives": ["Tạo được chương trình hoạt hình từ sự thay đổi hình ảnh nhân vật."],
            "core_content": ["Đây là bài thực hành tổng hợp kỹ năng tạo hoạt hình bằng cách thay đổi trang phục của nhân vật."],
            "activities": [],
            "answer_keys": { "van_dung": ["HS tự sáng tạo chương trình hoạt hình Thể dục theo gợi ý trong SGK."] }
        },
        "F5": {
            "objectives": ["Nêu được ví dụ cụ thể mô tả cấu trúc tuần tự.", "Tạo được chương trình đơn giản sử dụng cấu trúc tuần tự."],
            "core_content": ["Trong khối lệnh có cấu trúc tuần tự, các lệnh được thực hiện theo thứ tự đã được ghép từ trên xuống dưới."],
            "activities": [],
            "answer_keys": { "luyen_tap": ["Bài 1: Có, các bước chèn ảnh phải thực hiện theo đúng thứ tự. Bài 2: B -> C -> A."], "van_dung": ["HS tạo chương trình kể chuyện 'Một ngày của Minh', sử dụng các lệnh 'nói' được ghép nối tiếp nhau theo đúng trình tự thời gian."] }
        },
        "F6": {
            "objectives": ["Nêu được ví dụ cụ thể mô tả cấu trúc lặp với số lần biết trước.", "Tạo được chương trình đơn giản có sử dụng cấu trúc lặp với số lần biết trước."],
            "core_content": ["Lệnh lặp với số lần biết trước trong Scratch là lệnh 'lặp lại ... lần'. Lệnh này điều khiển khối lệnh bên trong nó thực hiện lặp lại với số lần cho trước."],
            "activities": [],
            "answer_keys": { "luyen_tap": ["a) Lệnh 'xoay' được thực hiện 20 lần.", "b) Sau 20 giây (20 lần lặp, mỗi lần đợi 1 giây)."], "van_dung": ["Sử dụng khối lệnh 'lặp lại 10 lần', bên trong chứa 2 lệnh: 'đi tới vị trí ngẫu nhiên' và 'in hình'."] }
        },
        "F7": {
            "objectives": ["Nhận biết được các biểu thức điều kiện trong nhóm lệnh Cảm biến.", "Nêu được ví dụ cụ thể mô tả một cấu trúc lặp có điều kiện."],
            "core_content": ["Biểu thức điều kiện được dùng để kiểm tra điều kiện có giá trị là đúng (true) hay sai (false).", "Lệnh lặp có điều kiện trong Scratch là lệnh 'lặp lại cho đến khi'. Lệnh này điều khiển khối lệnh được lặp cho tới khi điều kiện dừng lặp có giá trị đúng."],
            "activities": [],
            "answer_keys": { "luyen_tap": ["Bài 1: D. chuột được nhấn?", "Bài 2: Nhân vật sẽ liên tục nói 'Xin chào!' cho đến khi người dùng nháy chuột, lúc đó nó sẽ nói 'Tạm biệt!'."], "van_dung": ["Sử dụng khối lệnh 'lặp lại cho đến khi (chuột được nhấn?)', bên trong chứa lệnh 'đi tới vị trí ngẫu nhiên'."] }
        },
        "F8": {
            "objectives": ["Nêu được ví dụ cụ thể mô tả cấu trúc lặp liên tục.", "Tạo được chương trình đơn giản có sử dụng cấu trúc lặp liên tục."],
            "core_content": ["Lệnh lặp liên tục trong Scratch là lệnh 'liên tục'. Lệnh này điều khiển khối lệnh được lặp thực hiện không dừng lại."],
            "activities": [],
            "answer_keys": { "luyen_tap": ["Bài 1: Trái Đất quay quanh Mặt Trời.", "Bài 2: (A, 2), (B, 3), (C, 1).", "Bài 3: Nhân vật sẽ xoay tròn liên tục, mỗi giây xoay 15 độ."], "van_dung": ["Nhân vật Bóng: dùng khối 'liên tục' chứa lệnh 'đi tới con trỏ chuột'. Nhân vật Mèo: dùng khối 'liên tục' chứa lệnh 'hướng về phía Bóng' và 'di chuyển ... bước'."] }
        },
        "F9": {
            "objectives": ["Sử dụng được lệnh nhập thông tin từ bàn phím và biến có sẵn.", "Thực hiện được các bước để tạo biến của người dùng.", "Sử dụng được các lệnh thay đổi giá trị của biến."],
            "core_content": ["Biến dùng để lưu giá trị khi chạy chương trình.", "Nhóm lệnh Cảm biến có lệnh 'hỏi...và đợi' để nhập thông tin, giá trị được lưu vào biến 'trả lời'.", "Nhóm lệnh Các biến số cho phép tạo biến mới và thay đổi giá trị của biến."],
            "activities": [],
            "answer_keys": { "luyen_tap": ["A: 8", "B: 5", "C: 5"], "van_dung": ["Tạo biến 'số giây'. Dùng khối 'liên tục', bên trong có lệnh 'đợi 1 giây' và 'thay đổi (số giây) một lượng 1'."] }
        },
        "F10": {
            "objectives": ["Tạo được biểu thức tính toán với các phép toán số học: cộng, trừ, nhân, chia.", "Sử dụng được phép kết hợp để nối các chữ, giá trị của biến và giá trị biểu thức.", "Tạo được chương trình đơn giản sử dụng các phép toán số học và phép kết hợp."],
            "core_content": ["Trong Scratch, có thể tạo các biểu thức tính toán với các phép toán +, -, *, /.", "Phép 'kết hợp' dùng để nối các chuỗi văn bản, giá trị của biến và giá trị của biểu thức."],
            "activities": [],
            "answer_keys": { "luyen_tap": ["Bài 1: Dùng khối lệnh chia (/) với vế trái là khối lệnh cộng (+) chứa 3 và 7, vế phải là số 2.", "Bài 2: Họ = 'Nguyễn', Tên = 'Trãi', Họ tên = 'NguyễnTrãi'."], "van_dung": ["Thứ tự đúng của các khối lệnh là: d -> a -> c -> b."] }
        },
        "F11": {
            "objectives": ["Sử dụng được các phép so sánh lớn hơn, nhỏ hơn, bằng.", "Sử dụng được phép lấy số ngẫu nhiên.", "Tạo được chương trình đơn giản có sử dụng các phép so sánh và phép lấy số ngẫu nhiên."],
            "core_content": ["Kết quả của các phép so sánh có giá trị là đúng (true) hoặc sai (false).", "Phép 'lấy ngẫu nhiên từ...đến...' cho kết quả là một số tự nhiên trong khoảng đó."],
            "activities": [],
            "answer_keys": { "luyen_tap": ["Bài 1: a) true, b) true, c) false, d) false, e) true, g) true.", "Bài 2: a) true, b) false."], "van_dung": ["HS tạo chương trình sử dụng các khối lệnh so sánh và phép toán để thông báo kết quả so sánh (5+3) và (4+7)."] }
        },
        "F12": {
            "objectives": ["Nêu được ví dụ cụ thể mô tả cấu trúc rẽ nhánh.", "Tạo được chương trình đơn giản sử dụng cấu trúc rẽ nhánh."],
            "core_content": ["Lệnh rẽ nhánh khuyết ('nếu...thì...') thực hiện khối lệnh khi điều kiện đúng.", "Lệnh rẽ nhánh đủ ('nếu...thì..., nếu không thì...') thực hiện khối lệnh 1 khi điều kiện đúng và khối lệnh 2 khi điều kiện sai."],
            "activities": [],
            "answer_keys": { "luyen_tap": ["Bài 1: Dùng khối lệnh 'Khi bấm phím (d)', bên trong chứa lệnh 'di chuyển 100 bước'.", "Bài 2: B. nghĩ Hmm... (vì Chó không chạm Mèo)."], "van_dung": ["Sử dụng khối lệnh 'Khi bấm vào cờ xanh' -> 'liên tục' -> 'nếu (chuột được nhấn?) thì' -> 'đi tới con trỏ chuột'."] }
        },
        "F13": {
            "objectives": ["Chạy thử chương trình, phát hiện và sửa được lỗi."],
            "core_content": ["Khi tạo chương trình, cần chạy thử để phát hiện lỗi.", "Nếu chương trình có lỗi, cần sửa lỗi để chương trình thực hiện đúng yêu cầu."],
            "activities": [],
            "answer_keys": { "van_dung": ["Lỗi: Phép kết hợp đang nối chuỗi 'Chào bạn' với biến 'ten' (chưa có dấu cách). Sửa lỗi: Dùng 2 phép kết hợp lồng nhau: 'kết hợp (Chào bạn ) (ten)' (có dấu cách sau chữ bạn)."] }
        },
        "F14": {
            "objectives": ["Hợp tác được theo nhóm để viết kịch bản.", "Tạo được chương trình theo kịch bản đã viết."],
            "core_content": ["Đây là bài thực hành tổng hợp theo dự án nhóm, vận dụng toàn bộ kiến thức về Scratch đã học để tạo ra một sản phẩm hoàn chỉnh."],
            "activities": [],
            "answer_keys": { "van_dung": ["HS làm việc nhóm, tự xây dựng kịch bản và tạo chương trình cho câu chuyện 'Sao biển và Cá Nóc'."] }
        }
    };
    return allDetails[lessonId] || { "objectives": ["Nội dung đang được cập nhật."], "core_content": [], "activities": [], "answer_keys": {} };
}
