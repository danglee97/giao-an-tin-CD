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
        "E2-1": {
            "objectives": ["Nhận biết được biểu tượng và kích hoạt được phần mềm soạn thảo văn bản.", "Tạo được tệp văn bản mới, gõ được một số dòng văn bản không dấu.", "Đặt tên và lưu được tệp văn bản vào thư mục cụ thể."],
            "core_content": ["Kích hoạt Word bằng cách nháy đúp vào biểu tượng.", "Tạo tệp mới: File -> New -> Blank document.", "Vùng soạn thảo là nơi nhập nội dung văn bản.", "Lưu tệp: File -> Save."],
            "activities": [
                { "name": "Hoạt động 1: Tạo tệp và nhập văn bản", "duration": 20, "teacher_tasks": ["Hướng dẫn cách tạo tệp mới và giới thiệu các thành phần chính của cửa sổ Word.", "Cho HS tập gõ một vài dòng đơn giản."], "student_tasks": ["Thực hành tạo tệp và gõ văn bản."] },
                { "name": "Hoạt động 2: Lưu tệp văn bản", "duration": 15, "teacher_tasks": ["Hướng dẫn các bước lưu tệp bằng lệnh Save và chọn đúng thư mục."], "student_tasks": ["Thực hành lưu tệp đã tạo."] }
            ],
            "answer_keys": { "luyen_tap": ["HS thực hành soạn thảo và lưu bài thơ 'Nặn đồ chơi'."], "van_dung": ["HS thực hành tạo và lưu tệp đọc số 85 497."] }
        },
        "E2-2": {
            "objectives": ["Mở được tệp văn bản đã có.", "Lưu được tệp văn bản với tên mới vào thư mục theo yêu cầu.", "Soạn thảo được văn bản đơn giản bằng tiếng Việt có dấu, có chữ hoa."],
            "core_content": ["Mở tệp đã có: File -> Open.", "Lưu với tên mới: File -> Save As.", "Để gõ tiếng Việt, cần có phần mềm hỗ trợ như Unikey và chọn kiểu gõ Telex.", "Gõ chữ trước, gõ dấu sau."],
            "activities": [
                { "name": "Hoạt động 1: Mở và lưu với tên mới", "duration": 15, "teacher_tasks": ["Hướng dẫn cách mở tệp đã có bằng lệnh Open.", "Hướng dẫn cách lưu tệp với tên mới bằng lệnh Save As."], "student_tasks": ["Thực hành mở và lưu lại tệp với tên khác."] },
                { "name": "Hoạt động 2: Soạn thảo tiếng Việt", "duration": 20, "teacher_tasks": ["Kiểm tra và hướng dẫn HS bật Unikey.", "Giới thiệu bảng quy tắc gõ chữ và dấu kiểu Telex.", "Cho HS thực hành gõ tiếng Việt có dấu."], "student_tasks": ["Thực hành gõ tiếng Việt."] }
            ],
            "answer_keys": { "luyen_tap": ["Bài 1: Lưu lần đầu (Save) cần đặt tên và chọn nơi lưu. Lưu trong lúc soạn (Save) chỉ cần nhấn nút. Lưu với tên mới (Save As) tạo ra một bản sao với tên khác.", "Bài 2: HS thực hành tạo tệp và gõ tên bạn."], "van_dung": ["HS mở tệp 'Nan do choi', gõ lại có dấu và lưu với tên mới."] }
        },
        "E2-3": {
            "objectives": ["Rèn luyện được kĩ năng tạo, mở tệp văn bản và lưu tệp theo yêu cầu.", "Chọn được chế độ gõ tiếng Việt."],
            "core_content": ["Đây là bài thực hành tổng hợp các kỹ năng: tạo, mở, sửa và lưu tệp văn bản tiếng Việt."],
            "activities": [
                { "name": "Hoạt động 1: Thực hành tạo tệp mới", "duration": 20, "teacher_tasks": ["Yêu cầu HS tạo tệp mới, gõ 'Năm điều Bác Hồ dạy' và lưu lại."], "student_tasks": ["Thực hành theo yêu cầu."] },
                { "name": "Hoạt động 2: Thực hành mở và sửa tệp", "duration": 20, "teacher_tasks": ["Yêu cầu HS mở tệp vừa tạo, sửa và bổ sung nội dung, sau đó lưu lại với tên mới."], "student_tasks": ["Thực hành theo yêu cầu."] }
            ],
            "answer_keys": { "van_dung": ["Nguyên nhân: Bạn An chưa bật chế độ gõ tiếng Việt (chữ V) trong Unikey. Cần nháy chuột vào biểu tượng Unikey ở thanh Taskbar để chuyển từ chữ E sang chữ V."] }
        },
        "E2-4": {
            "objectives": ["Chèn được ảnh vào văn bản.", "Thay đổi được kích thước và vị trí của ảnh sau khi chèn vào văn bản."],
            "core_content": ["Chèn ảnh vào văn bản: Insert -> Pictures.", "Thay đổi kích thước ảnh bằng cách kéo thả các điểm mốc ở góc và cạnh.", "Để di chuyển ảnh tự do trong văn bản, cần chọn ảnh, vào Picture Format -> Wrap Text -> Square."],
            "activities": [
                { "name": "Hoạt động 1: Chèn ảnh", "duration": 15, "teacher_tasks": ["Hướng dẫn các bước chèn ảnh vào văn bản."], "student_tasks": ["Thực hành chèn ảnh vào tệp 'Năm điều Bác Hồ dạy'."] },
                { "name": "Hoạt động 2: Thay đổi kích thước và vị trí", "duration": 20, "teacher_tasks": ["Hướng dẫn cách thay đổi kích thước ảnh.", "Hướng dẫn cách sử dụng Wrap Text -> Square để di chuyển ảnh."], "student_tasks": ["Thực hành điều chỉnh kích thước và vị trí ảnh."] }
            ],
            "answer_keys": { "luyen_tap": ["HS thực hành chèn và điều chỉnh ảnh."], "van_dung": ["HS giúp bạn Hà chèn ảnh quả thị vào bên phải văn bản."] }
        },
        "E2-5": {
            "objectives": ["Soạn thảo được văn bản theo chủ đề và có ảnh minh hoạ.", "Chọn được cách bố trí ảnh trong văn bản theo yêu cầu."],
            "core_content": ["Đây là bài thực hành tổng hợp kỹ năng soạn thảo văn bản và chèn, bố trí ảnh."],
            "activities": [
                { "name": "Hoạt động 1: Thực hành", "duration": 35, "teacher_tasks": ["Hướng dẫn HS thực hiện các bước để tạo một tấm thiệp chúc mừng mẹ ngày 8-3, bao gồm soạn thảo, chèn ảnh và bố trí ảnh."], "student_tasks": ["Thực hành theo các bước để hoàn thành sản phẩm."] }
            ],
            "answer_keys": { "van_dung": ["HS tự tạo một sản phẩm văn bản có ảnh theo chủ đề yêu thích."] }
        },
        "E2-6": {
            "objectives": ["Thực hiện được các thao tác chọn, xoá, sao chép, di chuyển một khối văn bản."],
            "core_content": ["Chọn khối văn bản (bôi đen) bằng cách kéo thả chuột hoặc dùng phím Shift + phím mũi tên.", "Xoá khối đã chọn bằng phím Delete.", "Di chuyển khối: Chọn khối -> Cut -> Đặt con trỏ đến vị trí mới -> Paste.", "Sao chép khối: Chọn khối -> Copy -> Đặt con trỏ đến vị trí mới -> Paste."],
            "activities": [
                { "name": "Hoạt động 1: Chọn và xoá khối", "duration": 15, "teacher_tasks": ["Hướng dẫn cách chọn và xoá một khối văn bản."], "student_tasks": ["Thực hành chọn và xoá một câu trong văn bản."] },
                { "name": "Hoạt động 2: Di chuyển và sao chép", "duration": 20, "teacher_tasks": ["Giới thiệu các lệnh Cut, Copy, Paste.", "Hướng dẫn các bước di chuyển và sao chép một khối văn bản."], "student_tasks": ["Thực hành di chuyển một câu để sắp xếp lại đoạn văn."] }
            ],
            "answer_keys": { "luyen_tap": ["HS thực hành sao chép cụm từ 'Ai yêu Bác Hồ Chí Minh hơn thiếu niên nhi đồng' và xoá câu đầu tiên."], "van_dung": ["Sử dụng thao tác di chuyển (Cut và Paste) để đổi chỗ các câu thơ bị sai thứ tự."] }
        },
        "E2-7": {
            "objectives": ["Rèn luyện được kĩ năng tạo tệp văn bản có ảnh.", "Rèn luyện được kĩ năng sửa văn bản với các thao tác chọn, xoá, sao chép, di chuyển khối văn bản."],
            "core_content": ["Đây là bài thực hành tổng hợp, ôn lại toàn bộ kỹ năng soạn thảo văn bản đã học."],
            "activities": [
                { "name": "Hoạt động 1: Thực hành các thao tác cơ bản", "duration": 20, "teacher_tasks": ["Yêu cầu HS tạo tệp mới, gõ bài thơ, sau đó mở lại và sửa đổi bằng cách sao chép, di chuyển, xoá."], "student_tasks": ["Thực hành theo yêu cầu."] },
                { "name": "Hoạt động 2: Thực hành tạo văn bản có ảnh", "duration": 20, "teacher_tasks": ["Yêu cầu HS mở lại tệp, bổ sung nội dung và chèn ảnh minh hoạ."], "student_tasks": ["Thực hành theo yêu cầu."] }
            ],
            "answer_keys": { "van_dung": ["HS tự tạo một sản phẩm văn bản hoàn chỉnh theo chủ đề tự chọn."] }
        },
        // CHỦ ĐỀ F
        "F1-1": {
            "objectives": ["Chỉ ra được năm vùng chính trên màn hình và mô tả tóm tắt chức năng của chúng trong môi trường lập trình Scratch.", "Thực hiện được các thao tác chọn lệnh từ vùng Thư viện lệnh và đưa vào vùng Lập trình."],
            "core_content": ["Scratch là ngôn ngữ lập trình trực quan (kéo-thả).", "5 vùng chính: Thư viện lệnh, Vùng lập trình, Sân khấu, Vùng nhân vật, Vùng phông nền.", "Các lệnh được phân theo nhóm màu sắc và chức năng.", "Có thể kéo thả lệnh từ thư viện sang vùng lập trình và ghép chúng lại với nhau."],
            "activities": [
                { "name": "Hoạt động 1: Giới thiệu Scratch", "duration": 15, "teacher_tasks": ["Giới thiệu về lập trình trực quan và Scratch.", "Hướng dẫn HS nhận diện 5 vùng chính trên màn hình."], "student_tasks": ["Quan sát và gọi tên các vùng."] },
                { "name": "Hoạt động 2 & 3: Lệnh và nhóm lệnh", "duration": 25, "teacher_tasks": ["Hướng dẫn cách kéo thả lệnh, thay đổi giá trị trong lệnh.", "Hướng dẫn cách chọn lệnh từ các nhóm khác nhau và ghép chúng lại."], "student_tasks": ["Thực hành kéo thả và ghép các lệnh."] }
            ],
            "answer_keys": { "luyen_tap": ["Bài 1: Vùng Lập trình.", "Bài 2: Lệnh 'nói ... trong ... giây' hoặc 'nói ...' trong nhóm lệnh Hiển thị."], "van_dung": ["HS tự kéo thả 3 lệnh chuyển động đầu tiên và quan sát hoạt động của nhân vật Mèo."] }
        },
        "F1-2": {
            "objectives": ["Sử dụng được một số lệnh ở nhóm lệnh Sự kiện để bắt đầu khởi chạy chương trình.", "Tạo được chương trình Scratch đơn giản."],
            "core_content": ["Chương trình Scratch là một tập hợp các khối lệnh được ghép lại với nhau.", "Nhóm lệnh Sự kiện (màu vàng) chứa các lệnh để bắt đầu chương trình (ví dụ: 'Khi bấm vào cờ xanh', 'Khi bấm phím...', 'Khi bấm vào nhân vật này').", "Xây dựng kịch bản trước khi lập trình giúp chọn và sắp xếp lệnh đúng thứ tự."],
            "activities": [
                { "name": "Hoạt động 1: Nhóm lệnh Sự kiện", "duration": 15, "teacher_tasks": ["Giới thiệu lệnh 'Khi bấm vào cờ xanh' và các lệnh sự kiện khác.", "Giải thích rằng đây là các lệnh bắt đầu, không thể ghép lệnh khác vào trước nó."], "student_tasks": ["Quan sát, thử nghiệm các lệnh sự kiện."] },
                { "name": "Hoạt động 2: Tạo chương trình đầu tiên", "duration": 25, "teacher_tasks": ["Hướng dẫn HS quy trình 3 bước: Tìm hiểu yêu cầu -> Xây dựng kịch bản -> Lập trình.", "Cùng HS tạo chương trình 'Giới thiệu bản thân'."], "student_tasks": ["Phân tích yêu cầu, kịch bản và thực hành lập trình theo mẫu."] }
            ],
            "answer_keys": { "luyen_tap": ["Bài 1: Không thể.", "Bài 2: Chương trình A: Mèo nói trước rồi di chuyển. Chương trình B: Mèo di chuyển trước rồi nói."], "van_dung": ["HS tạo chương trình giới thiệu bản thân, bắt đầu bằng sự kiện 'Khi bấm vào nhân vật này'."] }
        },
        "F1-3": {
            "objectives": ["Chọn được các hình ảnh làm phông nền cho vùng Sân khấu.", "Sử dụng được lệnh thay đổi phông nền.", "Tạo được chương trình có phông nền thay đổi."],
            "core_content": ["Có thể thêm nhiều phông nền (background) cho Sân khấu từ thư viện có sẵn.", "Sử dụng lệnh 'đổi phông nền thành...' trong nhóm lệnh Hiển thị để thay đổi phông nền trong chương trình."],
            "activities": [
                { "name": "Hoạt động 1: Thêm, đổi tên phông nền", "duration": 20, "teacher_tasks": ["Hướng dẫn các bước để thêm phông nền mới từ thư viện và đổi tên phông nền trong vùng Phông nền."], "student_tasks": ["Thực hành thêm và đổi tên 2 phông nền 'Biển' và 'Bắc cực'."] },
                { "name": "Hoạt động 2: Tạo chương trình", "duration": 20, "teacher_tasks": ["Hướng dẫn HS tạo chương trình 'Địa điểm yêu thích', trong đó nhân vật Mèo nói về địa điểm nào thì phông nền đổi sang hình ảnh tương ứng."], "student_tasks": ["Thực hành lập trình theo kịch bản."] }
            ],
            "answer_keys": { "luyen_tap": ["Bài 1: Vùng Phông nền.", "Bài 2: Ghép lệnh 'đổi phông nền thành Biển' trước, sau đó ghép lệnh 'nói Tớ thích biển nhất!'."], "van_dung": ["HS tạo chương trình giới thiệu 2 môn thể thao, có đổi phông nền tương ứng (ví dụ: sân bóng đá, sân bóng rổ)."] }
        },
        "F1-4": {
            "objectives": ["Thực hiện được các thao tác thêm, đổi tên và xoá nhân vật.", "Tạo được chương trình có nhiều nhân vật."],
            "core_content": ["Một chương trình Scratch có thể có nhiều nhân vật (sprite).", "Thêm, xoá, đổi tên nhân vật được thực hiện ở Vùng Nhân vật.", "Mỗi nhân vật có một vùng lập trình riêng. Để lập trình cho nhân vật nào, cần nháy chuột chọn nhân vật đó trước."],
            "activities": [
                { "name": "Hoạt động 1: Thao tác với nhân vật", "duration": 20, "teacher_tasks": ["Hướng dẫn các bước xoá nhân vật Mèo, thêm nhân vật mới từ thư viện và đổi tên nhân vật."], "student_tasks": ["Thực hành thêm 2 nhân vật An và Bích."] },
                { "name": "Hoạt động 2: Tạo chương trình nhiều nhân vật", "duration": 20, "teacher_tasks": ["Hướng dẫn HS tạo chương trình 'Cuộc thi chạy', trong đó mỗi nhân vật được điều khiển bằng một phím khác nhau."], "student_tasks": ["Lập trình riêng cho từng nhân vật theo kịch bản."] }
            ],
            "answer_keys": { "luyen_tap": ["Bài 1: Vùng Nhân vật.", "Bài 2: Nháy chuột vào nhân vật Huyền ở Vùng Nhân vật."], "van_dung": ["HS tạo chương trình có 2 nhân vật, khi nháy chuột vào nhân vật nào thì nhân vật đó sẽ nói."] }
        },
        "F1-5": {
            "objectives": ["Sử dụng được các lệnh trong nhóm lệnh Chuyển động để điều khiển nhân vật chuyển động, xoay.", "Tạo được chương trình với nhân vật chuyển động đơn giản."],
            "core_content": ["Nhóm lệnh Chuyển động (màu xanh dương) chứa các lệnh để thay đổi vị trí và hướng của nhân vật.", "Các lệnh thường dùng: di chuyển, xoay, đi tới vị trí, lướt tới vị trí."],
            "activities": [
                { "name": "Hoạt động 1: Nhóm lệnh Chuyển động", "duration": 15, "teacher_tasks": ["Giới thiệu chức năng của một số lệnh chuyển động cơ bản trong Bảng 1."], "student_tasks": ["Đọc và hiểu chức năng các lệnh."] },
                { "name": "Hoạt động 2: Tạo chương trình", "duration": 25, "teacher_tasks": ["Hướng dẫn HS tạo chương trình 'Khám phá đại dương' với 2 nhân vật Cá và Sao biển.", "Nhân vật Cá sẽ lướt tới vị trí ngẫu nhiên, nhân vật Sao biển sẽ xoay."], "student_tasks": ["Xây dựng kịch bản và lập trình cho 2 nhân vật."] }
            ],
            "answer_keys": { "luyen_tap": ["a) Lệnh 'xoay (trái) 15 độ'.", "b) Lệnh 'di chuyển 10 bước', 'đi tới vị trí ngẫu nhiên', 'lướt trong 1 giây tới vị trí ngẫu nhiên'."], "van_dung": ["HS tạo chương trình với nhân vật Quả bóng, sử dụng lệnh 'lướt trong 2 giây tới vị trí ngẫu nhiên'."] }
        },
        "F1-6": {
            "objectives": ["Sử dụng được các lệnh trong nhóm lệnh Hiển thị để thay đổi kích thước, màu sắc của nhân vật.", "Tạo được chương trình với các hiệu ứng hình ảnh đơn giản."],
            "core_content": ["Nhóm lệnh Hiển thị (màu tím) chứa các lệnh để thay đổi ngoại hình của nhân vật.", "Các lệnh thường dùng: thay đổi/đặt kích thước, thay đổi/đặt hiệu ứng màu, bỏ hiệu ứng đồ hoạ."],
            "activities": [
                { "name": "Hoạt động 1: Tạo hiệu ứng hình ảnh", "duration": 15, "teacher_tasks": ["Giới thiệu chức năng của một số lệnh trong nhóm Hiển thị ở Bảng 1."], "student_tasks": ["Đọc và hiểu chức năng các lệnh."] },
                { "name": "Hoạt động 2: Tạo chương trình", "duration": 25, "teacher_tasks": ["Hướng dẫn HS tạo chương trình 'Cá biến hình' với 2 nhân vật.", "Cá Nóc sẽ phình to rồi nhỏ lại, Sứa sẽ đổi màu."], "student_tasks": ["Xây dựng kịch bản và lập trình cho 2 nhân vật, kết hợp lệnh Chuyển động và Hiển thị."] }
            ],
            "answer_keys": { "luyen_tap": ["Bài 1: Lệnh 'đặt hiệu ứng màu' hoặc 'thay đổi hiệu ứng màu'.", "Bài 2: B. đặt kích thước thành 200%"], "van_dung": ["HS tạo chương trình với nhân vật Quả bóng, sử dụng lệnh 'thay đổi hiệu ứng màu một lượng 25' trong sự kiện 'Khi bấm vào nhân vật này'."] }
        },
        "F1-7": {
            "objectives": ["Lựa chọn được nhân vật và xây dựng được kịch bản cho các nhân vật.", "Tự tạo được một chương trình đơn giản theo kịch bản đã xây dựng."],
            "core_content": ["Đây là bài thực hành tổng hợp theo dự án nhóm, vận dụng toàn bộ kiến thức về Scratch đã học."],
            "activities": [
                { "name": "Hoạt động 1: Giao nhiệm vụ và lập kế hoạch", "duration": 15, "teacher_tasks": ["Cho các nhóm chọn một hoạt động (kể chuyện, chuyển động, thay đổi hình dạng).", "Hướng dẫn các nhóm lập bản mô tả đề tài (yêu cầu, kịch bản)."], "student_tasks": ["Thảo luận nhóm, chọn đề tài và xây dựng kịch bản."] },
                { "name": "Hoạt động 2: Thực hiện dự án", "duration": 25, "teacher_tasks": ["Quan sát các nhóm làm việc, hỗ trợ khi cần."], "student_tasks": ["Các nhóm thực hiện tạo chương trình Scratch theo kịch bản đã xây dựng."] }
            ],
            "answer_keys": { "van_dung": ["HS tự do sáng tạo chương trình của riêng mình."] }
        }
    };
    return allDetails[lessonId] || { "objectives": ["Nội dung đang được cập nhật."], "core_content": [], "activities": [], "answer_keys": {} };
}
