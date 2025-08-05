const gradeInfo = {
    sgk_pdf: "SGK-TinHoc4-CanhDieu.pdf",
    sgv_pdf: "SGV-TinHọc4-CanhDieu.pdf"
};

const lessonsData = {
    "A": {
        "title": "Chủ đề A: Máy tính và em",
        "icon": "fas fa-desktop",
        "lessons": [
            { "id": "A1-1", "title": "Bài 1: Phần cứng máy tính", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=Ph%E1%BA%A7n+c%E1%BB%A9ng" },
            { "id": "A1-2", "title": "Bài 2: Phần mềm máy tính", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=Ph%E1%BA%A7n+m%E1%BB%81m" },
            { "id": "A2-1", "title": "Bài 1: Em tập gõ hàng phím số", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=H%C3%A0ng+ph%C3%ADm+s%E1%BB%91" },
            { "id": "A2-2", "title": "Bài 2: Thực hành gõ bàn phím đúng cách", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=Luy%E1%BB%87n+g%C3%B5" }
        ]
    },
    "B": {
        "title": "Chủ đề B: Mạng máy tính và Internet",
        "icon": "fas fa-globe",
        "lessons": [
            { "id": "B1-1", "title": "Bài 1: Các loại thông tin chính trên trang web", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=Trang+web" },
            { "id": "B1-2", "title": "Bài 2: Tác hại của việc xem trang web không phù hợp", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=T%C3%A1c+h%E1%BA%A1i" }
        ]
    },
    "C": {
        "title": "Chủ đề C: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin",
        "icon": "fas fa-sitemap",
        "lessons": [
            { "id": "C1-1", "title": "Bài 1: Tìm kiếm thông tin trên Internet", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=T%C3%ACm+ki%E1%BA%BFm" },
            { "id": "C1-2", "title": "Bài 2: Em tập tìm thông tin trên Internet", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=Th%E1%BB%B1c+h%C3%A0nh+t%C3%ACm+ki%E1%BA%BFm" },
            { "id": "C2-1", "title": "Bài 1: Tạo và xoá thư mục, đổi tên và xoá tệp", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=Thao+t%C3%A1c+th%C6%B0+m%E1%BB%A5c" },
            { "id": "C2-2", "title": "Bài 2: Di chuyển, sao chép thư mục và tệp", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=Di+chuy%E1%BB%83n+%26+Sao+ch%C3%A9p" },
            { "id": "C2-3", "title": "Bài 3: Thực hành tạo, sao chép, xoá, đổi tên, di chuyển", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=Th%E1%BB%B1c+h%C3%A0nh+t%E1%BB%95ng+h%E1%BB%A3p" }
        ]
    },
    "D": {
        "title": "Chủ đề D: Đạo đức, pháp luật và văn hoá trong môi trường số",
        "icon": "fas fa-balance-scale-right",
        "lessons": [
            { "id": "D1-1", "title": "Bài học: Tôn trọng quyền tác giả của phần mềm", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=B%E1%BA%A3n+quy%E1%BB%81n" }
        ]
    },
    "E": {
        "title": "Chủ đề E: Ứng dụng tin học",
        "icon": "fas fa-th-large",
        "lessons": [
            { "id": "E1-1", "title": "Bài 1: Bố cục của trang chiếu", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=B%E1%BB%91+c%E1%BB%A5c+slide" },
            { "id": "E1-2", "title": "Bài 2: Định dạng văn bản trên trang chiếu", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=%C4%90%E1%BB%8Bnh+d%E1%BA%A1ng+v%C4%83n+b%E1%BA%A3n" },
            { "id": "E1-3", "title": "Bài 3: Hiệu ứng chuyển trang chiếu", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=Hi%E1%BB%87u+%E1%BB%A9ng" },
            { "id": "E2-1", "title": "Bài 1: Làm quen với phần mềm soạn thảo văn bản", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=So%E1%BA%A1n+th%E1%BA%A3o+v%C4%83n+b%E1%BA%A3n" },
            { "id": "E2-2", "title": "Bài 2: Soạn thảo văn bản tiếng Việt và lưu tệp", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=G%C3%B5+ti%E1%BA%BFng+Vi%E1%BB%87t" },
            { "id": "E2-3", "title": "Bài 3: Thực hành mở, soạn thảo và lưu tệp", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=Th%E1%BB%B1c+h%C3%A0nh+Word" },
            { "id": "E2-4", "title": "Bài 4: Chèn ảnh vào văn bản", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=Ch%C3%A8n+%E1%BA%A3nh" },
            { "id": "E2-5", "title": "Bài 5: Thực hành soạn thảo văn bản có ảnh", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=Th%E1%BB%B1c+h%C3%A0nh+ch%C3%A8n+%E1%BA%A3nh" },
            { "id": "E2-6", "title": "Bài 6: Các thao tác cơ bản với khối văn bản", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=Thao+t%C3%A1c+kh%E1%BB%91i" },
            { "id": "E2-7", "title": "Bài 7: Thực hành tổng hợp", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=Th%E1%BB%B1c+h%C3%A0nh+t%E1%BB%95ng+h%E1%BB%A3p" }
        ]
    },
    "F": {
        "title": "Chủ đề F: Giải quyết vấn đề với sự trợ giúp của máy tính",
        "icon": "fas fa-brain",
        "lessons": [
            { "id": "F1-1", "title": "Bài 1: Làm quen với lập trình trực quan", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=L%E1%BA%ADp+tr%C3%ACnh+tr%E1%BB%B1c+quan" },
            { "id": "F1-2", "title": "Bài 2: Tạo chương trình Scratch đầu tiên", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=Scratch" },
            { "id": "F1-3", "title": "Bài 3: Tạo chương trình có phông nền thay đổi", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=Ph%C3%B4ng+n%E1%BB%81n" },
            { "id": "F1-4", "title": "Bài 4: Tạo chương trình có nhiều nhân vật", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=Nhi%E1%BB%81u+nh%C3%A2n+v%E1%BA%ADt" },
            { "id": "F1-5", "title": "Bài 5: Tạo chương trình có nhân vật chuyển động", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=Chuy%E1%BB%83n+%C4%91%E1%BB%99ng" },
            { "id": "F1-6", "title": "Bài 6: Tạo chương trình có nhân vật thay đổi kích thước, màu sắc", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=Hi%E1%BB%87u+%E1%BB%A9ng+h%C3%ACnh+%E1%BA%A3nh" },
            { "id": "F1-7", "title": "Bài 7: Thực hành tạo chương trình của em", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=Th%E1%BB%B1c+h%C3%A0nh+Scratch" }
        ]
    }
};

function getLessonDetails(lessonId) {
    const allDetails = {
        // CHỦ ĐỀ A
        "A1-1": {
            "objectives": ["Nêu được tên một số thiết bị phần cứng máy tính đã biết.", "Trình bày được sơ lược vai trò của một số thiết bị phần cứng thông dụng."],
            "core_content": ["Phần cứng là các thiết bị vật lý của máy tính (bên trong và bên ngoài thân máy).", "Thiết bị ngoại vi là các phần cứng bên ngoài thân máy (máy in, tai nghe, modem...).", "Các thiết bị bên trong thân máy (CPU, RAM, ổ cứng...) giúp xử lý và lưu trữ thông tin."],
            "activities": [
                { "name": "Hoạt động 1: Phần cứng và thiết bị ngoại vi", "duration": 20, "teacher_tasks": ["Giới thiệu khái niệm phần cứng và thiết bị ngoại vi.", "Cho HS quan sát hình ảnh và nêu chức năng của các thiết bị ngoại vi."], "student_tasks": ["Quan sát, thảo luận và nêu chức năng các thiết bị."] },
                { "name": "Hoạt động 2: Phần cứng bên trong thân máy", "duration": 15, "teacher_tasks": ["Giới thiệu các thành phần chính bên trong thân máy (CPU, RAM, ổ cứng...).", "Giải thích sơ lược chức năng của từng bộ phận."], "student_tasks": ["Quan sát, gọi tên và ghi nhớ chức năng."] }
            ],
            "answer_keys": { "luyen_tap": ["Các thiết bị giúp đưa thông tin ra: máy in, tai nghe, máy chiếu."], "van_dung": ["HS tự kể tên và chức năng các thiết bị đã thấy, ví dụ: USB dùng để lưu trữ và di chuyển dữ liệu."] }
        },
        "A1-2": {
            "objectives": ["Nêu được tên một số phần mềm máy tính đã biết.", "Nêu được sơ lược vai trò của phần mềm và mối quan hệ giữa phần cứng và phần mềm.", "Nêu được ví dụ về thao tác không đúng gây lỗi."],
            "core_content": ["Phần mềm hướng dẫn phần cứng hoạt động.", "Phần cứng và phần mềm có mối quan hệ phụ thuộc lẫn nhau.", "Các thao tác không đúng cách có thể gây lỗi: tắt máy đột ngột, mở quá nhiều phần mềm, truy cập web độc hại gây nhiễm virus."],
            "activities": [
                { "name": "Hoạt động 1: Phần mềm và mối quan hệ với phần cứng", "duration": 20, "teacher_tasks": ["Cho HS nhận diện biểu tượng và nêu chức năng các phần mềm quen thuộc.", "Giải thích mối quan hệ phụ thuộc giữa phần cứng và phần mềm."], "student_tasks": ["Gọi tên phần mềm, nêu chức năng.", "Lắng nghe và hiểu mối quan hệ."] },
                { "name": "Hoạt động 2: Thao tác sai gây lỗi", "duration": 15, "teacher_tasks": ["Nêu các ví dụ về thao tác sai (tắt máy bằng nút nguồn, bị treo máy, nhiễm virus).", "Giải thích hậu quả."], "student_tasks": ["Thảo luận và nhận biết các thao tác sai cần tránh."] }
            ],
            "answer_keys": { "luyen_tap": ["Bài 1: Ví dụ: Phần mềm PowerPoint. Nếu không có phần cứng (máy tính) thì phần mềm không thể chạy được.", "Bài 2: Tắt máy bằng cách rút điện, mở quá nhiều chương trình cùng lúc, cắm USB lạ vào máy."], "van_dung": ["Máy tính của Nam bị hỏng cả phần cứng (bàn phím bị liệt) và phần mềm (phần mềm điều khiển bàn phím bị lỗi do virus)."] }
        },
        "A2-1": {
            "objectives": ["Xác định được vị trí đặt các ngón tay khi gõ các phím trên hàng phím số.", "Gõ được đúng cách các phím ở hàng phím số."],
            "core_content": ["Luôn đặt tay ở hàng phím cơ sở.", "Khi gõ phím ở hàng số, vươn ngón tay tương ứng để gõ, sau đó lập tức đưa ngón tay về lại vị trí trên hàng phím cơ sở.", "Mỗi ngón tay được phân công gõ các phím số nhất định."],
            "activities": [
                { "name": "Hoạt động 1: Phân công các ngón tay", "duration": 15, "teacher_tasks": ["Giới thiệu bảng phân công các ngón tay cho hàng phím số.", "Cho HS đối chiếu với hình ảnh để tìm điểm chưa khớp."], "student_tasks": ["Quan sát, ghi nhớ và tìm ra điểm sai trong hình."] },
                { "name": "Hoạt động 2: Cách gõ phím", "duration": 20, "teacher_tasks": ["Hướng dẫn và làm mẫu cách vươn ngón tay từ hàng cơ sở lên hàng số để gõ.", "Yêu cầu HS thực hành."], "student_tasks": ["Quan sát và thực hành theo."] }
            ],
            "answer_keys": { "luyen_tap": ["HS thực hành gõ lại các số điện thoại khẩn cấp."], "van_dung": ["HS thực hành gõ các thông tin cá nhân của mình."] }
        },
        "A2-2": {
            "objectives": ["Giải thích được lợi ích của việc gõ bàn phím đúng cách.", "Gõ được đúng cách một đoạn văn bản ngắn khoảng 50 từ."],
            "core_content": ["Lợi ích của việc gõ đúng cách: gõ nhanh và chính xác hơn, không cần nhìn bàn phím, giúp tập trung vào nội dung.", "Gõ đúng cách còn giúp bảo vệ sức khỏe (tránh mỏi tay, mỏi mắt)."],
            "activities": [
                { "name": "Hoạt động 1: Thảo luận lợi ích", "duration": 10, "teacher_tasks": ["Tổ chức cho HS thảo luận về các lợi ích của việc gõ 10 ngón."], "student_tasks": ["Thảo luận và chia sẻ ý kiến."] },
                { "name": "Hoạt động 2: Thực hành gõ", "duration": 30, "teacher_tasks": ["Yêu cầu HS mở Wordpad và gõ lại đoạn văn bản trong SGK.", "Quan sát, nhắc nhở HS gõ đúng cách."], "student_tasks": ["Thực hành gõ văn bản bằng 10 ngón."] }
            ],
            "answer_keys": { "van_dung": ["HS tự chọn và gõ lại một câu chuyện ngắn yêu thích."] }
        },
        // CHỦ ĐỀ B
        "B1-1": {
            "objectives": ["Nhận biết và phân biệt được các loại thông tin chính trên trang web: văn bản, hình ảnh, âm thanh và siêu liên kết."],
            "core_content": ["Các loại thông tin chính trên trang web: văn bản, hình ảnh, âm thanh, video.", "Siêu liên kết (hyperlink) là một đối tượng (văn bản hoặc hình ảnh) trên trang web, khi nháy chuột vào sẽ mở ra một trang web khác.", "Dấu hiệu nhận biết siêu liên kết: con trỏ chuột thường đổi thành hình bàn tay."],
            "activities": [
                { "name": "Hoạt động 1: Văn bản, hình ảnh và âm thanh", "duration": 15, "teacher_tasks": ["Cho HS xem một trang web học tập và yêu cầu nhận diện các loại thông tin."], "student_tasks": ["Quan sát và gọi tên các loại thông tin."] },
                { "name": "Hoạt động 2: Siêu liên kết", "duration": 20, "teacher_tasks": ["Giải thích khái niệm siêu liên kết.", "Cho HS xem một trang web có nhiều siêu liên kết và yêu cầu nhận biết (dựa vào hình bàn tay của con trỏ chuột)."], "student_tasks": ["Di chuyển chuột trên trang web để tìm các siêu liên kết."] }
            ],
            "answer_keys": { "luyen_tap": ["Bài 1: Giúp liên kết đến các trang web khác có nội dung liên quan.", "Bài 2: Khi di chuyển chuột vào, con trỏ chuột biến thành hình bàn tay."], "van_dung": ["HS tự khám phá một trang web và liệt kê các loại thông tin có trên đó."] }
        },
        "B1-2": {
            "objectives": ["Giải thích được sơ lược tác hại của việc cố tình truy cập vào những trang web không phù hợp lứa tuổi."],
            "core_content": ["Có thể đoán nội dung trang web qua tên hoặc địa chỉ của nó.", "Tác hại của việc xem trang web không phù hợp: bị ảnh hưởng bởi nội dung xấu (bạo lực), máy tính bị nhiễm virus, bị lừa đảo, đánh cắp thông tin cá nhân."],
            "activities": [
                { "name": "Hoạt động 1: Đoán thông tin từ địa chỉ web", "duration": 15, "teacher_tasks": ["Giải thích cách địa chỉ trang web có thể gợi ý về nội dung.", "Yêu cầu HS đoán nội dung trang hoc10.vn."], "student_tasks": ["Quan sát và đưa ra dự đoán."] },
                { "name": "Hoạt động 2: Thảo luận về tác hại", "duration": 20, "teacher_tasks": ["Cho HS đọc bảng về các tác hại trong SGK.", "Tổ chức thảo luận để HS hiểu rõ hơn về từng tác hại."], "student_tasks": ["Đọc, thảo luận và nêu ý kiến."] }
            ],
            "answer_keys": { "luyen_tap": ["Bài 1: Vì trên các trang đó có thể có những nội dung không phù hợp với lứa tuổi, cần sự giám sát của người lớn.", "Bài 2: HS tự nêu trang web yêu thích (ví dụ: vtv7.vtv.vn)."], "van_dung": ["Bài 1: Không đồng ý, vì mạng xã hội có thể có nhiều rủi ro không phù hợp với lứa tuổi.", "Bài 2: Không nháy vào liên kết và đóng ngay cửa sổ quảng cáo đó lại."] }
        },
        // CHỦ ĐỀ C
        "C1-1": {
            "objectives": ["Nêu được một máy tìm kiếm thông tin trên Internet.", "Sử dụng được máy tìm kiếm để tìm thông tin theo từ khoá.", "Xác định được chủ đề của thông tin cần tìm."],
            "core_content": ["Máy tìm kiếm (ví dụ: Google, Bing) là công cụ giúp tìm kiếm thông tin trên Internet.", "Các bước tìm kiếm: Mở trình duyệt -> Truy cập trang máy tìm kiếm -> Gõ từ khoá -> Nhấn Enter -> Chọn kết quả.", "Từ khoá tìm kiếm cần ngắn gọn, thể hiện đúng nội dung muốn tìm."],
            "activities": [
                { "name": "Hoạt động 1: Cách dùng máy tìm kiếm", "duration": 20, "teacher_tasks": ["Giới thiệu máy tìm kiếm Google.", "Hướng dẫn chi tiết 4 bước tìm kiếm thông tin."], "student_tasks": ["Quan sát và ghi nhớ các bước."] },
                { "name": "Hoạt động 2: Xác định từ khoá", "duration": 15, "teacher_tasks": ["Cho HS thử tìm kiếm với các từ khoá khác nhau ('Cho em xem con koala' và 'con koala').", "Yêu cầu HS so sánh kết quả và rút ra nhận xét."], "student_tasks": ["Thực hành tìm kiếm và so sánh."] }
            ],
            "answer_keys": { "luyen_tap": ["HS thực hành tìm kiếm với từ khoá 'Quốc Ca Việt Nam'."], "van_dung": ["HS thực hành tìm kiếm thông tin về Trạng nguyên Nguyễn Hiền."] }
        },
        "C1-2": {
            "objectives": ["Thực hiện được việc tìm kiếm thông tin trên Internet có sự giúp đỡ.", "Làm quen với tìm kiếm hình ảnh."],
            "core_content": ["Cần lựa chọn từ khoá hợp lý để có kết quả tìm kiếm tốt nhất.", "Máy tìm kiếm cho phép tìm kiếm thông tin dưới nhiều dạng khác nhau, bao gồm cả hình ảnh."],
            "activities": [
                { "name": "Hoạt động 1: Tìm kiếm thông tin", "duration": 15, "teacher_tasks": ["Yêu cầu HS chọn từ khoá hợp lý cho các thông tin muốn biết.", "Cho HS thực hành tìm kiếm với một trong các từ khoá đó."], "student_tasks": ["Ghép cặp thông tin và từ khoá.", "Thực hành tìm kiếm."] },
                { "name": "Hoạt động 2: Tìm kiếm hình ảnh", "duration": 20, "teacher_tasks": ["Hướng dẫn các bước tìm kiếm hình ảnh trên Google.", "Yêu cầu HS thực hành tìm ảnh con sao la."], "student_tasks": ["Thực hành theo các bước hướng dẫn."] }
            ],
            "answer_keys": { "luyen_tap": ["HS thực hành tìm kiếm thông tin và hình ảnh về người máy Grace."], "van_dung": ["Đáp án ô chữ: TINHOC."] }
        },
        "C2-1": {
            "objectives": ["Thực hiện được việc tạo, xoá và đổi tên thư mục.", "Thực hiện được việc đổi tên tệp.", "Thực hiện được việc xoá thư mục, tệp.", "Nêu được tác hại của việc xoá nhầm thư mục, tệp."],
            "core_content": ["Trong phần mềm quản lí tệp, có thể dùng các lệnh: New folder (tạo thư mục), Rename (đổi tên), Delete (xoá).", "Xoá nhầm tệp, thư mục có thể làm mất thông tin quan trọng hoặc làm máy tính không hoạt động được."],
            "activities": [
                { "name": "Hoạt động 1: Đổi tên tệp", "duration": 15, "teacher_tasks": ["Hướng dẫn các bước đổi tên tệp bằng lệnh Rename."], "student_tasks": ["Thực hành đổi tên tệp theo hướng dẫn."] },
                { "name": "Hoạt động 2: Xoá thư mục, tệp", "duration": 20, "teacher_tasks": ["Hướng dẫn cách xoá tệp/thư mục bằng lệnh Delete.", "Nhấn mạnh về sự cẩn thận để tránh xoá nhầm."], "student_tasks": ["Thực hành xoá tệp/thư mục.", "Thảo luận về tác hại của việc xoá nhầm."] }
            ],
            "answer_keys": { "luyen_tap": ["Bài 1: A. Rename", "Bài 2: C. Xoá cả thư mục Lop4 và các thư mục, tệp bên trong.", "Bài 3: Move to (di chuyển) sẽ làm mất đối tượng ở vị trí cũ, Copy to (sao chép) vẫn giữ lại đối tượng ở vị trí cũ."], "van_dung": ["HS thực hành tạo và xoá một thư mục."] }
        },
        "C2-2": {
            "objectives": ["Thực hiện được việc di chuyển tệp, thư mục vào trong thư mục khác.", "Thực hiện được việc sao chép một tệp, thư mục vào trong thư mục khác.", "Nêu được tác hại của việc di chuyển nhầm thư mục, tệp."],
            "core_content": ["Di chuyển tệp/thư mục bằng lệnh Move to.", "Sao chép tệp/thư mục bằng lệnh Copy to.", "Khi di chuyển một thư mục, tất cả nội dung bên trong nó cũng sẽ di chuyển theo.", "Di chuyển nhầm có thể làm khó tìm lại tệp/thư mục."],
            "activities": [
                { "name": "Hoạt động 1: Di chuyển tệp, thư mục", "duration": 20, "teacher_tasks": ["Hướng dẫn các bước di chuyển tệp bằng lệnh Move to.", "Thảo luận về tác hại của việc di chuyển nhầm."], "student_tasks": ["Thực hành di chuyển tệp.", "Trả lời các câu hỏi."] },
                { "name": "Hoạt động 2: Sao chép tệp, thư mục", "duration": 15, "teacher_tasks": ["Giải thích sự khác biệt giữa di chuyển và sao chép.", "Hướng dẫn cách sao chép bằng lệnh Copy to."], "student_tasks": ["Thực hành sao chép một thư mục."] }
            ],
            "answer_keys": { "luyen_tap": ["Bài 1: C. Cả tệp GioiThieuTo1 và bốn thư mục To1, To2, To3, To4.", "Bài 2: B. Copy to"], "van_dung": ["HS thực hành tạo thư mục HocTap và di chuyển thư mục Lop4 vào trong đó."] }
        },
        "C2-3": {
            "objectives": ["Sử dụng được các lệnh New folder, Copy to, Delete để thao tác với thư mục.", "Sử dụng được các lệnh Copy to, Rename để thao tác với tệp."],
            "core_content": ["Đây là bài thực hành tổng hợp các kỹ năng thao tác với tệp và thư mục đã học."],
            "activities": [
                { "name": "Hoạt động 1: Thực hành tạo, sao chép thư mục", "duration": 20, "teacher_tasks": ["Yêu cầu HS tạo cây thư mục AnhSuuTap theo mẫu."], "student_tasks": ["Thực hành tạo và sao chép thư mục."] },
                { "name": "Hoạt động 2: Thực hành di chuyển, đổi tên, xoá", "duration": 20, "teacher_tasks": ["Yêu cầu HS đổi tên tệp, di chuyển các tệp vào thư mục phù hợp và xoá thư mục không cần thiết."], "student_tasks": ["Thực hành các thao tác với tệp và thư mục."] }
            ],
            "answer_keys": { "van_dung": ["HS tự thực hành tạo cây thư mục để lưu tài liệu học tập theo môn và học kỳ."] }
        },
        // CHỦ ĐỀ D
        "D1-1": {
            "objectives": ["Nêu được vài ví dụ về phần mềm miễn phí và phần mềm không miễn phí.", "Biết rằng chỉ được sử dụng phần mềm khi được phép."],
            "core_content": ["Có hai loại phần mềm: miễn phí (không phải trả tiền) và không miễn phí (phải mua).", "Phần mềm là sản phẩm trí tuệ, có bản quyền. Chỉ được sử dụng phần mềm khi được tác giả cho phép.", "Sử dụng phần mềm 'bẻ khoá' là vi phạm bản quyền và là một hình thức ăn cắp."],
            "activities": [
                { "name": "Hoạt động 1: Phân loại phần mềm", "duration": 15, "teacher_tasks": ["Nêu ví dụ về các phần mềm miễn phí (RapidTyping) và không miễn phí (Windows, Office)."], "student_tasks": ["Lắng nghe và phân biệt."] },
                { "name": "Hoạt động 2: Bản quyền phần mềm", "duration": 20, "teacher_tasks": ["Giải thích khái niệm bản quyền phần mềm.", "Tổ chức thảo luận về hành vi sử dụng phần mềm 'bẻ khoá'."], "student_tasks": ["Hiểu về bản quyền.", "Thảo luận và nhận thức được hành vi sai trái."] }
            ],
            "answer_keys": { "luyen_tap": ["Ý kiến đúng: b) và d)."], "van_dung": ["HS sử dụng máy tìm kiếm để tìm giá của một phần mềm, ví dụ 'giá windows 11'."] }
        },
        // CHỦ ĐỀ E
        "E1-1": {
            "objectives": ["Thực hiện được thành thạo việc kích hoạt và ra khỏi phần mềm trình chiếu.", "Tạo được các trang chiếu có bố cục khác nhau và có ảnh."],
            "core_content": ["Có thể kích hoạt PowerPoint từ biểu tượng trên màn hình hoặc từ menu Start.", "Có thể tạo trang chiếu mới với nhiều kiểu bố cục (layout) khác nhau.", "Có thể chèn ảnh vào trang chiếu bằng lệnh Pictures trên dải lệnh Insert hoặc biểu tượng Pictures trực tiếp trên trang chiếu."],
            "activities": [
                { "name": "Hoạt động 1: Kích hoạt và thoát", "duration": 10, "teacher_tasks": ["Hướng dẫn cách kích hoạt PowerPoint từ menu Start."], "student_tasks": ["Thực hành kích hoạt và thoát khỏi phần mềm."] },
                { "name": "Hoạt động 2: Tạo trang chiếu có bố cục khác nhau", "duration": 15, "teacher_tasks": ["Hướng dẫn cách thêm trang chiếu mới và chọn bố cục trong nhóm lệnh Slides."], "student_tasks": ["Thực hành tạo các trang chiếu với bố cục khác nhau."] },
                { "name": "Hoạt động 3: Chèn ảnh", "duration": 15, "teacher_tasks": ["Hướng dẫn cách chèn ảnh bằng biểu tượng Pictures có sẵn trên trang chiếu."], "student_tasks": ["Thực hành chèn ảnh."] }
            ],
            "answer_keys": { "luyen_tap": ["Bài 2: Cách 1: Dùng lệnh Pictures trên dải lệnh Insert. Cách 2: Dùng biểu tượng Pictures có sẵn trên bố cục trang chiếu."], "van_dung": ["HS thực hành tạo bài trình chiếu 4 trang về quê hương mình."] }
        },
        "E1-2": {
            "objectives": ["Tạo được tệp trình chiếu đơn giản có chữ hoa và chữ thường, có sử dụng công cụ gạch đầu dòng.", "Định dạng được kiểu chữ, phông chữ, màu chữ và kích thước chữ."],
            "core_content": ["Sử dụng các lệnh trong nhóm Font (dải lệnh Home) để định dạng văn bản (phông chữ, cỡ chữ, in đậm, in nghiêng, màu sắc...).", "Sử dụng phím Caps Lock để gõ chữ hoa.", "Sử dụng lệnh Bullets trong nhóm Paragraph để tạo danh sách có dấu đầu dòng."],
            "activities": [
                { "name": "Hoạt động 1: Định dạng chữ", "duration": 20, "teacher_tasks": ["Giới thiệu các lệnh định dạng trong nhóm Font.", "Hướng dẫn cách chọn khối văn bản và áp dụng định dạng.", "Hướng dẫn cách dùng phím Caps Lock."], "student_tasks": ["Thực hành định dạng văn bản."] },
                { "name": "Hoạt động 2: Sử dụng gạch đầu dòng", "duration": 15, "teacher_tasks": ["Cho HS so sánh 2 cách trình bày (có và không có dấu đầu dòng).", "Hướng dẫn cách tạo danh sách có dấu đầu dòng bằng lệnh Bullets."], "student_tasks": ["Thực hành tạo danh sách."] }
            ],
            "answer_keys": { "luyen_tap": ["Bài 1: Nhóm lệnh Font.", "Bài 2: B. Bullets"], "van_dung": ["HS mở bài trình chiếu 'Que huong cua em' và thực hành định dạng lại văn bản."] }
        },
        "E1-3": {
            "objectives": ["Sử dụng được một vài hiệu ứng chuyển trang đơn giản.", "Lưu được tệp trình chiếu vào đúng thư mục."],
            "core_content": ["Hiệu ứng chuyển trang (Transitions) giúp bài trình chiếu hấp dẫn hơn.", "Sử dụng các hiệu ứng trong dải lệnh Transitions.", "Lưu tệp vào đúng thư mục giúp dễ dàng tìm kiếm và quản lý."],
            "activities": [
                { "name": "Hoạt động 1: Hiệu ứng chuyển trang", "duration": 20, "teacher_tasks": ["Giới thiệu dải lệnh Transitions.", "Hướng dẫn cách chọn và áp dụng hiệu ứng cho trang chiếu.", "Lưu ý không nên lạm dụng hiệu ứng."], "student_tasks": ["Thực hành áp dụng các hiệu ứng chuyển trang."] },
                { "name": "Hoạt động 2: Lưu bài trình chiếu", "duration": 15, "teacher_tasks": ["Giải thích tầm quan trọng của việc lưu tệp đúng thư mục.", "Hướng dẫn các bước lưu tệp vào một thư mục cụ thể bằng lệnh Save As và Browse."], "student_tasks": ["Thực hành lưu tệp vào đúng thư mục được chỉ định."] }
            ],
            "answer_keys": { "luyen_tap": ["Bài 1: B. Transitions.", "Bài 2: HS thực hành tạo thư mục và lưu tệp."], "van_dung": ["HS hoàn thiện bài trình chiếu 'Que huong cua em' với đầy đủ các yêu cầu."] }
        },
        // ... (Các bài học còn lại của Chủ đề E và F)
    };
    return allDetails[lessonId] || { "objectives": ["Nội dung đang được cập nhật."], "core_content": [], "activities": [], "answer_keys": {} };
}
