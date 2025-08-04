// Dữ liệu cho tất cả các bài học Lớp 3
const lessonsData = {
    "A": {
        "title": "Chủ đề A: Máy tính và em",
        "icon": "fas fa-desktop",
        "lessons": [
            { "id": "A1-1", "title": "Bài 1: Các thành phần của máy tính", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=M%C3%A1y+t%C3%ADnh" },
            { "id": "A1-2", "title": "Bài 2: Những máy tính thông dụng", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=C%C3%A1c+lo%E1%BA%A1i+m%C3%A1y+t%C3%ADnh" },
            { "id": "A1-3", "title": "Bài 3: Em tập sử dụng chuột", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=S%E1%BB%AD+d%E1%BB%A5ng+chu%E1%BB%99t" },
            { "id": "A1-4", "title": "Bài 4: Em bắt đầu sử dụng máy tính", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=Kh%E1%BB%9Fi+%C4%91%E1%BB%99ng+m%C3%A1y" },
            { "id": "A1-5", "title": "Bài 5: Bảo vệ sức khoẻ khi dùng máy tính", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=B%E1%BA%A3o+v%E1%BB%87+s%E1%BB%A9c+kho%E1%BA%BB" },
            { "id": "A2-1", "title": "Bài 1: Thông tin và quyết định", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=Th%C3%B4ng+tin" },
            { "id": "A2-2", "title": "Bài 2: Các dạng thông tin thường gặp", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=D%E1%BA%A1ng+th%C3%B4ng+tin" },
            { "id": "A2-3", "title": "Bài 3: Xử lí thông tin", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=X%E1%BB%AD+l%C3%AD+th%C3%B4ng+tin" },
            { "id": "A2-4", "title": "Bài 4: Ôn tập về thông tin và xử lí thông tin", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=%C3%94n+t%E1%BA%ADp" },
            { "id": "A3-1", "title": "Bài 1: Em làm quen với bàn phím", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=B%C3%A0n+ph%C3%ADm" },
            { "id": "A3-2", "title": "Bài 2: Em tập gõ hàng phím cơ sở", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=H%C3%A0ng+ph%C3%ADm+c%C6%A1+s%E1%BB%9F" },
            { "id": "A3-3", "title": "Bài 3: Em tập gõ hàng phím trên và dưới", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=C%C3%A1c+h%C3%A0ng+ph%C3%ADm" },
            { "id": "A3-4", "title": "Bài 4: Cùng thi đua gõ phím", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=Thi+%C4%91ua+g%C3%B5+ph%C3%ADm" }
        ]
    },
    "B": {
        "title": "Chủ đề B: Mạng máy tính và Internet",
        "icon": "fas fa-globe",
        "lessons": [
            { "id": "B1-1", "title": "Bài 1: Thông tin trên Internet", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=Internet" },
            { "id": "B1-2", "title": "Bài 2: Nhận biết những thông tin không phù hợp", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=Th%C3%B4ng+tin+kh%C3%B4ng+ph%C3%B9+h%E1%BB%A3p" }
        ]
    },
    "C": {
        "title": "Chủ đề C: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin",
        "icon": "fas fa-sitemap",
        "lessons": [
            { "id": "C1-1", "title": "Bài 1: Sự cần thiết của sắp xếp", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=S%E1%BA%AFp+x%E1%BA%BFp" },
            { "id": "C1-2", "title": "Bài 2: Sơ đồ hình cây", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=S%C6%A1+%C4%91%E1%BB%93+c%C3%A2y" },
            { "id": "C2-1", "title": "Bài 1: Sắp xếp phân loại các tệp dữ liệu", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=Ph%C3%A2n+lo%E1%BA%A1i+t%E1%BB%87p" },
            { "id": "C2-2", "title": "Bài 2: Cây thư mục", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=C%C3%A2y+th%C6%B0+m%E1%BB%A5c" },
            { "id": "C2-3", "title": "Bài 3: Em tập thao tác với thư mục", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=Thao+t%C3%A1c+v%E1%BB%9Bi+th%C6%B0+m%E1%BB%A5c" }
        ]
    },
    "D": {
        "title": "Chủ đề D: Đạo đức, pháp luật và văn hoá trong môi trường số",
        "icon": "fas fa-balance-scale-right",
        "lessons": [
            { "id": "D1-1", "title": "Bài học: Bảo vệ thông tin cá nhân", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=B%E1%BA%A3o+v%E1%BB%87+th%C3%B4ng+tin" }
        ]
    },
    "E": {
        "title": "Chủ đề E: Ứng dụng tin học",
        "icon": "fas fa-th-large",
        "lessons": [
            { "id": "E1-1", "title": "Bài 1: Em làm quen với phần mềm trình chiếu", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=PowerPoint" },
            { "id": "E1-2", "title": "Bài 2: Thêm ảnh vào trang trình chiếu", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=Th%C3%AAm+%E1%BA%A3nh" },
            { "id": "E1-3", "title": "Bài 3: Bài trình chiếu của em", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=B%C3%A0i+tr%C3%ACnh+chi%E1%BA%BFu+c%E1%BB%A7a+em" }
        ]
    },
    "F": {
        "title": "Chủ đề F: Giải quyết vấn đề với sự trợ giúp của máy tính",
        "icon": "fas fa-brain",
        "lessons": [
            { "id": "F1-1", "title": "Bài 1: Làm việc theo từng bước", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=L%C3%A0m+vi%E1%BB%87c+theo+b%C6%B0%E1%BB%9Bc" },
            { "id": "F1-2", "title": "Bài 2: Thực hiện một việc tuỳ thuộc vào điều kiện", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=N%E1%BA%BFu+-+Th%C3%AC" },
            { "id": "F1-3", "title": "Bài 3: Em tập làm người chỉ huy giỏi", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=Ng%C6%B0%E1%BB%9Di+ch%E1%BB%89+huy" },
            { "id": "F2-1", "title": "Bài 1: Phát biểu nhiệm vụ và tìm sự trợ giúp của máy tính", "image": "https://placehold.co/1200x400/C00000/FFFFFF?text=Nhi%E1%BB%87m+v%E1%BB%A5" },
            { "id": "F2-2", "title": "Bài 2: Thực hành – nhiệm vụ và sản phẩm", "image": "https://placehold.co/1200x400/002060/FFFFFF?text=Th%E1%BB%B1c+h%C3%A0nh" }
        ]
    }
};

function getLessonDetails(lessonId) {
    const allDetails = {
        // CHỦ ĐỀ A
        "A1-1": {
            "objectives": ["Nhận ra và phân biệt được các thành phần cơ bản của máy tính: thân máy, bàn phím, chuột và màn hình.", "Nêu được chức năng của bàn phím, chuột, màn hình và loa."],
            "core_content": ["Các thành phần cơ bản của máy tính gồm: Bàn phím (thu nhận thông tin), Chuột (điều khiển), Thân máy (lưu trữ, xử lí), Màn hình (hiển thị thông tin).", "Loa giúp phát ra âm thanh từ máy tính."],
            "activities": [
                { "name": "Hoạt động 1: Khám phá lợi ích", "duration": 10, "teacher_tasks": ["Cho HS xem các hình ảnh về việc sử dụng máy tính trong đời sống.", "Thảo luận về lợi ích của máy tính."], "student_tasks": ["Quan sát, thảo luận và nêu ý kiến."] },
                { "name": "Hoạt động 2: Tìm hiểu các thành phần", "duration": 25, "teacher_tasks": ["Giới thiệu 4 thành phần cơ bản và chức năng của chúng.", "Giới thiệu thêm về loa."], "student_tasks": ["Quan sát, gọi tên và ghi nhớ chức năng các thành phần."] }
            ],
            "answer_keys": { "luyen_tap": ["a) Màn hình", "b) Thân máy", "c) Bàn phím", "d) Chuột"], "van_dung": ["Câu 3 đúng. Câu 1 sai vì loa không phải thành phần cơ bản. Câu 2 sai vì loa phát ra âm thanh, không phải màn hình."] }
        },
        "A1-2": {
            "objectives": ["Biết được những máy tính thông dụng và các thành phần cơ bản của chúng.", "Biết được sự khác nhau giữa những máy tính thông dụng."],
            "core_content": ["Các loại máy tính thông dụng: máy tính để bàn, máy tính xách tay, máy tính bảng, điện thoại thông minh.", "Máy tính xách tay tích hợp các thành phần làm một và dùng vùng cảm ứng chuột.", "Máy tính bảng và điện thoại thông minh dùng màn hình cảm ứng, có bàn phím ảo."],
            "activities": [
                { "name": "Hoạt động 1: Nhận diện các loại máy tính", "duration": 15, "teacher_tasks": ["Giới thiệu 4 loại máy tính thông dụng qua hình ảnh.", "Yêu cầu HS chỉ ra điểm khác biệt."], "student_tasks": ["Quan sát, gọi tên và nêu sự khác nhau."] },
                { "name": "Hoạt động 2: Tìm hiểu thành phần", "duration": 20, "teacher_tasks": ["Yêu cầu HS chỉ ra các thành phần cơ bản trên từng loại máy tính.", "Giải thích về vùng cảm ứng chuột và màn hình cảm ứng."], "student_tasks": ["Thảo luận nhóm để tìm các thành phần."] }
            ],
            "answer_keys": { "luyen_tap": ["Câu 2 đúng. Các câu còn lại sai."], "van_dung": ["Máy tính 'All in one' có thân máy được tích hợp vào phía sau màn hình, gọn gàng hơn máy tính để bàn thông thường."] }
        },
        "A1-3": {
            "objectives": ["Cầm được chuột đúng cách.", "Thực hiện được các thao tác cơ bản khi sử dụng chuột."],
            "core_content": ["Cách cầm chuột đúng: ngón trỏ đặt ở nút trái, ngón giữa ở nút phải, lòng bàn tay ôm nhẹ chuột.", "5 thao tác cơ bản: Di chuyển chuột, Nháy chuột (trái), Nháy đúp chuột, Nháy chuột phải, Kéo thả chuột."],
            "activities": [
                { "name": "Hoạt động 1: Cầm chuột đúng cách", "duration": 15, "teacher_tasks": ["Hướng dẫn cách cầm chuột đúng qua hình ảnh.", "Đi uốn nắn cho từng học sinh."], "student_tasks": ["Thực hành cầm chuột theo hướng dẫn."] },
                { "name": "Hoạt động 2: Các thao tác cơ bản", "duration": 20, "teacher_tasks": ["Mô tả và làm mẫu 5 thao tác cơ bản.", "Cho HS thực hành trên màn hình nền."], "student_tasks": ["Làm theo và thực hành các thao tác."] }
            ],
            "answer_keys": { "luyen_tap": ["Bài 1: a) Nút trái, b) Nút phải, c) Hai bên chuột, d) Ngón trỏ.", "Bài 2: Khi nháy chuột phải, một bảng chọn (menu ngữ cảnh) sẽ hiện ra."] }
        },
        "A1-4": {
            "objectives": ["Khởi động và tắt được máy tính.", "Kích hoạt và đóng được phần mềm."],
            "core_content": ["Khởi động máy tính: Bật công tắc điện (nếu cần) và nhấn nút nguồn trên thân máy.", "Tắt máy tính đúng cách: Start -> Power -> Shut down.", "Kích hoạt phần mềm: Nháy đúp chuột vào biểu tượng.", "Đóng phần mềm: Nháy chuột vào dấu 'X' ở góc trên bên phải cửa sổ."],
            "activities": [
                { "name": "Hoạt động 1: Hướng dẫn", "duration": 15, "teacher_tasks": ["Hướng dẫn các bước khởi động và tắt máy tính đúng cách.", "Làm mẫu cách kích hoạt và đóng một phần mềm."], "student_tasks": ["Quan sát và ghi nhớ các bước."] },
                { "name": "Hoạt động 2: Thực hành", "duration": 25, "teacher_tasks": ["Yêu cầu HS thực hành bật, tắt máy, mở và đóng phần mềm This PC."], "student_tasks": ["Thực hành trên máy tính."] }
            ],
            "answer_keys": { "van_dung": ["Lệnh Restart có tác dụng tắt máy tính và sau đó tự động khởi động lại."] }
        },
        "A1-5": {
            "objectives": ["Biết ngồi đúng tư thế khi làm việc với máy tính.", "Nhận ra và nêu được tác hại của tư thế ngồi sai.", "Biết thực hiện quy tắc an toàn về điện."],
            "core_content": ["Tư thế ngồi đúng: Lưng thẳng, mắt ngang tầm màn hình và cách màn hình 50-80cm, tay đặt thoải mái.", "Tác hại của ngồi sai: Gây bệnh về cột sống và mắt.", "Quy tắc an toàn điện: Không chạm vào vật có điện, không để nước gần thiết bị điện."],
            "activities": [
                { "name": "Hoạt động 1: Tư thế ngồi", "duration": 20, "teacher_tasks": ["Cho HS so sánh tư thế ngồi đúng và sai.", "Giải thích các tiêu chí của tư thế ngồi đúng và tác hại của việc ngồi sai."], "student_tasks": ["Quan sát, so sánh và tự điều chỉnh tư thế ngồi."] },
                { "name": "Hoạt động 2: An toàn điện", "duration": 15, "teacher_tasks": ["Cho HS xem các hình ảnh về các tình huống mất an toàn điện.", "Giải thích các quy tắc an toàn."], "student_tasks": ["Nhận biết các hành vi nguy hiểm."] }
            ],
            "answer_keys": { "luyen_tap": ["Câu 2 sai. Ngồi sai tư thế gây bệnh về mắt và cột sống, không phải khiếm thính."], "van_dung": ["Những chỗ sai: lưng cong, đầu cúi, mắt quá gần màn hình, tay không thẳng."] }
        },
        "A2-1": {
            "objectives": ["Biết được hằng ngày mỗi người vẫn thường xuyên tiếp nhận thông tin và dựa vào thông tin để quyết định hành động.", "Nhận biết được đâu là thông tin và đâu là quyết định trong một vài tình huống quen thuộc."],
            "core_content": ["Hằng ngày, chúng ta thường đưa ra quyết định dựa vào thông tin thu nhận được.", "Thông tin giúp chúng ta có quyết định đúng đắn và kịp thời."],
            "activities": [
                { "name": "Hoạt động 1: Dựa vào thông tin để quyết định", "duration": 20, "teacher_tasks": ["Nêu các tình huống trong SGK (đèn giao thông, em bé khóc).", "Yêu cầu HS xác định đâu là thông tin, đâu là quyết định."], "student_tasks": ["Thảo luận và trả lời."] },
                { "name": "Hoạt động 2: Dựa vào thông tin để hành động", "duration": 15, "teacher_tasks": ["Nêu các tình huống (trời nắng, chuông báo thức).", "Yêu cầu HS chọn quyết định đúng."], "student_tasks": ["Thảo luận và lựa chọn hành động phù hợp."] }
            ],
            "answer_keys": { "luyen_tap": ["Thông tin: Tối nay có gió mùa Đông Bắc. Quyết định: Lấy chăn bông để sẵn trên giường."], "van_dung": ["HS tự kể lại một tình huống thực tế của bản thân."] }
        },
        "A2-2": {
            "objectives": ["Nhận biết được ba dạng thông tin thường gặp: dạng chữ, dạng hình ảnh, dạng âm thanh."],
            "core_content": ["Ba dạng thông tin thường gặp là: dạng chữ (sách, báo), dạng hình ảnh (tranh, ảnh, biển báo), và dạng âm thanh (tiếng nói, tiếng còi, tiếng chuông).", "Một đối tượng có thể chứa nhiều dạng thông tin (ví dụ: truyện tranh có cả chữ và hình ảnh)."],
            "activities": [
                { "name": "Hoạt động 1: Thông tin dạng chữ", "duration": 10, "teacher_tasks": ["Cho HS xem thời khóa biểu và hỏi các thông tin có trong đó."], "student_tasks": ["Đọc và nêu các thông tin."] },
                { "name": "Hoạt động 2: Thông tin dạng hình ảnh", "duration": 10, "teacher_tasks": ["Cho HS xem các biển báo giao thông và hỏi ý nghĩa."], "student_tasks": ["Quan sát và giải thích ý nghĩa."] },
                { "name": "Hoạt động 3: Thông tin dạng âm thanh", "duration": 10, "teacher_tasks": ["Nêu các ví dụ về âm thanh (tiếng chuông, tiếng còi).", "Hỏi HS về thông tin mà các âm thanh đó mang lại."], "student_tasks": ["Lắng nghe và nêu ý nghĩa."] }
            ],
            "answer_keys": { "luyen_tap": ["Trang truyện tranh có cả thông tin dạng chữ và dạng hình ảnh."], "van_dung": ["Gợi ý: 'Giúp đỡ cha mẹ', 'Lao động là vinh quang'."] }
        },
        "A2-3": {
            "objectives": ["Nêu được ví dụ minh hoạ: Bộ não của con người là một bộ phận xử lí thông tin.", "Nhận thấy được có những máy móc tiếp nhận thông tin để quyết định hành động."],
            "core_content": ["Ở con người, bộ não là nơi xử lí thông tin.", "Các giác quan thu nhận thông tin, bộ não xử lí và đưa ra quyết định hành động hoặc suy nghĩ.", "Các thiết bị số thông minh (máy tính, điện thoại) cũng có khả năng tiếp nhận và xử lí thông tin."],
            "activities": [
                { "name": "Hoạt động 1: Bộ não con người xử lí thông tin", "duration": 20, "teacher_tasks": ["Nêu các tình huống trong SGK.", "Yêu cầu HS phân tích: Giác quan nào thu nhận? Xử lí ở đâu? Kết quả là gì?"], "student_tasks": ["Thảo luận nhóm để phân tích các tình huống."] },
                { "name": "Hoạt động 2: Thiết bị số xử lí thông tin", "duration": 15, "teacher_tasks": ["Nêu các ví dụ về máy tính tính toán, điện thoại tự xoay màn hình.", "Yêu cầu HS xác định thông tin đầu vào và kết quả xử lí."], "student_tasks": ["Quan sát và trả lời câu hỏi."] }
            ],
            "answer_keys": { "luyen_tap": ["Cả hai câu đều đúng. Khi làm bài, bộ não phải xử lí để hiểu đề và tìm lời giải. Khi dùng máy tính, máy tính xử lí các lệnh của người dùng."], "van_dung": ["Ví dụ: Khi em nháy đúp chuột vào biểu tượng trò chơi. Máy tính tiếp nhận thông tin là lệnh mở phần mềm, kết quả là máy tính khởi động trò chơi đó lên."] }
        },
        "A2-4": {
            "objectives": ["Nhận biết được vai trò xử lí thông tin của bộ não con người và thiết bị số thông minh.", "Nhận biết vai trò quan trọng của thông tin thu nhận được đối với việc ra quyết định hành động của con người."],
            "core_content": ["Đây là bài ôn tập, củng cố kiến thức về thông tin và xử lí thông tin đã học ở 3 bài trước."],
            "activities": [
                { "name": "Trò chơi 1: Đoán từ", "duration": 20, "teacher_tasks": ["Tổ chức cho HS chơi trò chơi giải ô chữ trong SGK."], "student_tasks": ["Làm việc nhóm để giải ô chữ."] },
                { "name": "Trò chơi 2: Đố em", "duration": 15, "teacher_tasks": ["Đưa ra 2 tình huống và yêu cầu HS phân tích quá trình xử lí thông tin của người và máy."], "student_tasks": ["Thảo luận và trả lời."] }
            ],
            "answer_keys": { "luyen_tap": ["Câu 1 và 3 đúng. Câu 2 sai."], "van_dung": ["Cả hai cùng xử lí thông tin. Em xử lí thông tin trên màn hình để ra quyết định. Máy tính xử lí các quyết định của em để thay đổi trạng thái trò chơi."] }
        },
        // CHỦ ĐỀ B
        "B1-1": {
            "objectives": ["Biết được trên Internet có nhiều thông tin bổ ích và lí thú.", "Biết được có thể tìm thấy trên Internet những thông tin không có sẵn trong máy tính."],
            "core_content": ["Internet là một kho thông tin khổng lồ.", "Trên Internet có thể xem tin tức (thời tiết), các chương trình giải trí (phim hoạt hình, ca nhạc, kể chuyện).", "Nhiều thông tin mới và đa dạng không có sẵn trong máy tính có thể tìm thấy trên Internet."],
            "activities": [
                { "name": "Hoạt động 1: Khám phá thông tin", "duration": 20, "teacher_tasks": ["Cho HS xem các ví dụ về thông tin trên Internet (dự báo thời tiết, phim hoạt hình).", "Thảo luận về các loại thông tin có thể xem."], "student_tasks": ["Quan sát, kể tên các chương trình đã xem."] },
                { "name": "Hoạt động 2: Tìm thông tin mới", "duration": 15, "teacher_tasks": ["Đưa ra một câu hỏi mà thông tin không có sẵn trong máy (ví dụ: 'Làm sao để phòng ngừa COVID-19?').", "Cho xem trang web của Bộ Y tế để minh họa."], "student_tasks": ["Nhận thấy sự hữu ích của Internet trong việc tìm kiếm thông tin mới."] }
            ],
            "answer_keys": { "luyen_tap": ["Tin tức, phim ảnh, ca nhạc, truyện kể, thông tin học tập..."], "van_dung": ["Đồng ý. Vì Internet cung cấp dịch vụ xem dự báo thời tiết cho mọi nơi trên thế giới."] }
        },
        "B1-2": {
            "objectives": ["Biết được không phải thông tin nào trên Internet cũng phù hợp với lứa tuổi."],
            "core_content": ["Trên Internet có những thông tin không phù hợp với lứa tuổi học sinh như trò chơi bạo lực, phim ảnh không lành mạnh.", "Cần có sự hướng dẫn của bố mẹ, thầy cô để lựa chọn thông tin phù hợp.", "Nên tìm kiếm các thông tin hữu ích cho học tập, giải trí lành mạnh và mở rộng hiểu biết."],
            "activities": [
                { "name": "Hoạt động 1: Nhận biết thông tin không phù hợp", "duration": 20, "teacher_tasks": ["Tổ chức cho HS thảo luận về những việc không nên làm trên Internet.", "Giải thích lý do tại sao các thông tin đó không phù hợp."], "student_tasks": ["Thảo luận nhóm, đưa ra ý kiến."] },
                { "name": "Hoạt động 2: Tìm kiếm thông tin phù hợp", "duration": 15, "teacher_tasks": ["Cho xem các ví dụ về thông tin hữu ích (nhạc cụ dân tộc, bài hát thiếu nhi).", "Khuyến khích HS kể thêm các thông tin hữu ích mà các em biết."], "student_tasks": ["Quan sát, kể tên các thông tin hữu ích."] }
            ],
            "answer_keys": { "luyen_tap": ["Cả 3 đáp án đều đúng."], "van_dung": ["Khuyên bạn không nên chơi vì đó là trò chơi bạo lực, không phù hợp với lứa tuổi và không phải là giải trí lành mạnh."] }
        },
        // CHỦ ĐỀ C
        "C1-1": {
            "objectives": ["Giải thích được vì sao chúng ta cần sắp xếp đồ vật hay dữ liệu hợp lí.", "Thực hiện được một số sắp xếp theo yêu cầu cụ thể."],
            "core_content": ["Sắp xếp đồ vật/dữ liệu một cách hợp lí giúp chúng ta tìm kiếm dễ dàng và nhanh hơn.", "Có hai cách sắp xếp chính: sắp xếp phân loại (chia theo nhóm) và sắp xếp theo thứ tự (tăng/giảm dần)."],
            "activities": [
                { "name": "Hoạt động 1: Sắp xếp để tìm nhanh hơn", "duration": 20, "teacher_tasks": ["Cho HS so sánh hai tủ quần áo (bừa bộn và ngăn nắp).", "Tổ chức trò chơi 'Ai tìm ra nhanh hơn?' với các tấm bìa ghi số."], "student_tasks": ["So sánh và nhận ra lợi ích của việc sắp xếp.", "Tham gia trò chơi."] },
                { "name": "Hoạt động 2: Tập sắp xếp", "duration": 15, "teacher_tasks": ["Giới thiệu cách sắp xếp phân loại qua ví dụ giá đồ chơi.", "Yêu cầu HS vẽ sơ đồ sắp xếp giá sách của mình."], "student_tasks": ["Hiểu về sắp xếp phân loại.", "Vẽ sơ đồ."] }
            ],
            "answer_keys": { "luyen_tap": ["Gợi ý: Có thể phân loại thành 3 nhóm: Động vật (1, 3, 4, 8, 9), Hoa (2, 7, 11), Phong cảnh (5, 6, 10, 12)."], "van_dung": ["Danh sách lớp thường được sắp xếp theo thứ tự bảng chữ cái (vần a, b, c) để giáo viên dễ dàng tìm tên, điểm danh và quản lý."] }
        },
        "C1-2": {
            "objectives": ["Nêu được cách tìm đúng và nhanh một vật, một đối tượng dựa trên sự sắp xếp.", "Biết được có thể dùng sơ đồ hình cây để biểu diễn một sắp xếp phân loại."],
            "core_content": ["Để tìm được nhanh, cần biết trước đồ vật đã được sắp xếp như thế nào.", "Có thể dùng sơ đồ hình cây để mô tả (biểu diễn) cách sắp xếp phân loại."],
            "activities": [
                { "name": "Hoạt động 1: Tìm nhanh khi đã sắp xếp", "duration": 20, "teacher_tasks": ["Nêu ví dụ tìm toa tàu.", "Tổ chức trò chơi 'Nhóm nào tìm giỏi hơn?' với các bộ ảnh."], "student_tasks": ["Thảo luận cách tìm.", "Tham gia trò chơi, thực hành sắp xếp và tìm kiếm."] },
                { "name": "Hoạt động 2: Sơ đồ hình cây", "duration": 15, "teacher_tasks": ["Giới thiệu sơ đồ hình cây qua ví dụ tủ sách.", "So sánh sơ đồ dạng ngang và dạng dọc."], "student_tasks": ["Quan sát, hiểu cách biểu diễn của sơ đồ hình cây."] }
            ],
            "answer_keys": { "luyen_tap": ["Tìm trong ngăn 'Sách, truyện thiếu nhi', sau đó tìm trong chồng truyện Đô-ra-e-mon."], "van_dung": ["Gợi ý: Vẽ sơ đồ hình cây có gốc là 'Tài liệu', các nhánh là 'Học tập', 'Giải trí', 'Tranh ảnh'."] }
        },
        "C2-1": {
            "objectives": ["Nhận biết được tệp, thư mục và ổ đĩa.", "Biết được thư mục con hoặc tệp được chứa trong thư mục nào."],
            "core_content": ["Trong máy tính, thông tin được chứa trong các tệp (file).", "Thư mục (folder) dùng để chứa tệp và các thư mục con khác.", "Ổ đĩa (drive) là thư mục gốc, chứa tất cả các thư mục và tệp."],
            "activities": [
                { "name": "Hoạt động 1: Xem thông tin trong máy tính", "duration": 20, "teacher_tasks": ["Mở This PC và cho HS xem các biểu tượng của tệp (văn bản, ảnh, nhạc, video).", "Giải thích rằng biểu tượng giúp nhận biết loại tệp."], "student_tasks": ["Quan sát, nhận biết các loại tệp qua biểu tượng."] },
                { "name": "Hoạt động 2: Tìm hiểu tệp, thư mục, ổ đĩa", "duration": 15, "teacher_tasks": ["Chỉ cho HS thấy các ổ đĩa, thư mục, thư mục con và tệp.", "Giải thích vai trò của thư mục là để sắp xếp, phân loại tệp."], "student_tasks": ["Phân biệt được ổ đĩa, thư mục và tệp."] }
            ],
            "answer_keys": { "luyen_tap": ["1) Ổ đĩa", "2) Thư mục", "3) Tệp văn bản", "4) Tệp video", "5) Tệp âm thanh"], "van_dung": ["Chưa được sắp xếp phân loại kỹ. Nên tạo các thư mục con như 'Ảnh', 'Nhạc', 'Video' để chứa các tệp tương ứng."] }
        },
        "C2-2": {
            "objectives": ["Mô tả sơ lược được vai trò của cấu trúc cây thư mục.", "Tìm hiểu được cấu trúc cây của một thư mục để biết nó chứa những thư mục con nào, những tệp nào."],
            "core_content": ["Các thư mục trong máy tính được tổ chức theo cấu trúc hình cây, gọi là cây thư mục.", "Cây thư mục giúp tổ chức lưu trữ các tệp và thư mục một cách có hệ thống, dễ tìm kiếm."],
            "activities": [
                { "name": "Hoạt động 1: Vai trò cây thư mục", "duration": 20, "teacher_tasks": ["Cho HS quan sát một cây thư mục trong This PC.", "Yêu cầu HS mô tả mối quan hệ giữa các thư mục (thư mục cha, thư mục con)."], "student_tasks": ["Quan sát và trả lời các câu hỏi."] },
                { "name": "Hoạt động 2: Cấu trúc cây thư mục", "duration": 15, "teacher_tasks": ["Yêu cầu HS vẽ lại một cây thư mục đơn giản theo dạng ngang."], "student_tasks": ["Thực hành vẽ cây thư mục."] }
            ],
            "answer_keys": { "luyen_tap": ["Gồm các thư mục con: Ảnh, Nhạc, Video, Học tập, Khám phá."], "van_dung": ["Gợi ý: Gốc là 'Động vật', các nhánh là 'Trên cạn', 'Dưới nước', 'Trên trời'. Trong mỗi nhánh lại có các thư mục con cho từng loài."] }
        },
        "C2-3": {
            "objectives": ["Thực hiện được việc tạo, xoá và đổi tên thư mục.", "Tìm được tệp ở thư mục cho trước."],
            "core_content": ["Các thao tác cơ bản với thư mục trong This PC: Tạo mới (New folder), Đổi tên (Rename), Xoá (Delete).", "Để xem nội dung bên trong một thư mục, ta nháy đúp chuột vào nó."],
            "activities": [
                { "name": "Hoạt động 1: Tạo, xoá, đổi tên thư mục", "duration": 25, "teacher_tasks": ["Hướng dẫn các bước tạo, đổi tên và xoá một thư mục."], "student_tasks": ["Thực hành trên máy tính."] },
                { "name": "Hoạt động 2: Tìm tệp", "duration": 10, "teacher_tasks": ["Tổ chức trò chơi 'Tìm tệp' để HS luyện kỹ năng duyệt cây thư mục."], "student_tasks": ["Tham gia trò chơi."] }
            ],
            "answer_keys": {}
        },
        // CHỦ ĐỀ D
        "D1-1": {
            "objectives": ["Biết được thông tin cá nhân và gia đình có thể được lưu trữ và trao đổi nhờ máy tính.", "Biết được việc người xấu có thể lợi dụng thông tin cá nhân để gây hại.", "Có ý thức bảo vệ thông tin cá nhân và gia đình."],
            "core_content": ["Thông tin cá nhân (tên, địa chỉ, số điện thoại, ảnh...) có thể được lưu trữ trên máy tính.", "Cần có ý thức bảo vệ thông tin cá nhân, không tuỳ tiện chia sẻ trên Internet.", "Kẻ xấu có thể lợi dụng thông tin cá nhân để lừa đảo, giả mạo, hoặc gây hại."],
            "activities": [
                { "name": "Hoạt động 1: Thông tin cá nhân trên máy tính", "duration": 15, "teacher_tasks": ["Thảo luận về các thông tin cá nhân được lưu trên điện thoại, máy tính của gia đình."], "student_tasks": ["Kể tên các thông tin."] },
                { "name": "Hoạt động 2: Bảo vệ thông tin", "duration": 20, "teacher_tasks": ["Nêu các ví dụ về việc kẻ xấu lợi dụng thông tin cá nhân.", "Nhấn mạnh sự cần thiết phải bảo vệ thông tin."], "student_tasks": ["Thảo luận và nhận thức được sự nguy hiểm."] }
            ],
            "answer_keys": { "luyen_tap": ["2, 3, 4 là thông tin cá nhân và gia đình."], "van_dung": ["Kẻ xấu có thể dùng thông tin đó để lừa đảo người thân, giả mạo em để làm việc xấu, hoặc tìm đến nhà để gây hại."] }
        },
        // CHỦ ĐỀ E
        "E1-1": {
            "objectives": ["Nhận biết được biểu tượng và kích hoạt được phần mềm trình chiếu PowerPoint.", "Tạo được tệp trình chiếu, gõ được một vài dòng văn bản đơn giản không dấu.", "Lưu và đặt được tên cho tệp trình chiếu."],
            "core_content": ["Phần mềm trình chiếu PowerPoint có biểu tượng chữ P màu cam.", "Kích hoạt bằng cách nháy đúp chuột vào biểu tượng.", "Tạo bài trình chiếu mới: File -> New -> Blank Presentation.", "Thêm trang chiếu mới: Home -> New Slide.", "Lưu bài trình chiếu: File -> Save."],
            "activities": [
                { "name": "Hoạt động 1: Làm quen", "duration": 10, "teacher_tasks": ["Giới thiệu biểu tượng và cách kích hoạt PowerPoint."], "student_tasks": ["Tìm và kích hoạt phần mềm."] },
                { "name": "Hoạt động 2: Tạo bài trình chiếu đầu tiên", "duration": 25, "teacher_tasks": ["Hướng dẫn các bước tạo, nhập văn bản, thêm trang mới và lưu bài trình chiếu."], "student_tasks": ["Thực hành theo hướng dẫn."] }
            ],
            "answer_keys": { "luyen_tap": ["Đáp án 2)"], "van_dung": ["HS thực hành tạo bài trình chiếu 2 trang về gia đình mình."] }
        },
        "E1-2": {
            "objectives": ["Mở được tệp trình chiếu đã lưu.", "Thêm được ảnh vào trang trình chiếu."],
            "core_content": ["Mở tệp đã có: File -> Open.", "Thêm ảnh vào trang chiếu: Chọn trang chiếu, vào dải lệnh Insert -> Pictures."],
            "activities": [
                { "name": "Hoạt động 1: Mở tệp đã lưu", "duration": 15, "teacher_tasks": ["Hướng dẫn các bước mở một tệp PowerPoint đã lưu."], "student_tasks": ["Thực hành mở tệp 'Lam quen' đã tạo ở bài trước."] },
                { "name": "Hoạt động 2: Thêm ảnh", "duration": 20, "teacher_tasks": ["Hướng dẫn các bước để chèn một ảnh từ máy tính vào trang chiếu."], "student_tasks": ["Thực hành thêm ảnh vào bài trình chiếu của mình."] }
            ],
            "answer_keys": { "luyen_tap": ["Đáp án 1) Insert/Pictures"], "van_dung": ["HS thực hành tạo bài trình chiếu về gia đình và chèn ảnh gia đình vào."] }
        },
        "E1-3": {
            "objectives": ["Hoàn thành được bài trình chiếu đơn giản theo nhu cầu của bản thân."],
            "core_content": ["Đây là bài thực hành tổng hợp, vận dụng các kỹ năng đã học (tạo, lưu, mở tệp, nhập văn bản, chèn ảnh).", "Trước khi làm bài trình chiếu, cần chuẩn bị nội dung và hình ảnh liên quan đến chủ đề."],
            "activities": [
                { "name": "Hoạt động 1: Chuẩn bị", "duration": 15, "teacher_tasks": ["Tổ chức cho HS làm việc nhóm, chọn chủ đề và chuẩn bị nội dung, hình ảnh."], "student_tasks": ["Thảo luận nhóm, lên ý tưởng."] },
                { "name": "Hoạt động 2: Tạo và trình diễn", "duration": 25, "teacher_tasks": ["Yêu cầu các nhóm tạo bài trình chiếu theo chủ đề đã chọn.", "Tổ chức cho các nhóm trình diễn sản phẩm."], "student_tasks": ["Thực hành tạo bài trình chiếu.", "Trình bày sản phẩm trước lớp."] }
            ],
            "answer_keys": { "luyen_tap": ["Thứ tự đúng: 3 -> 1 -> 4 -> 2."] }
        },
        // CHỦ ĐỀ F
        "F1-1": {
            "objectives": ["Nêu được một số công việc thường làm theo từng bước, có thứ tự.", "Nhận thấy được việc chia một nhiệm vụ lớn thành những nhiệm vụ nhỏ hơn là để dễ hiểu và dễ thực hiện hơn."],
            "core_content": ["Nhiều công việc trong cuộc sống được thực hiện theo từng bước có thứ tự.", "Việc chia một nhiệm vụ lớn thành các bước nhỏ hơn giúp công việc trở nên dễ hiểu và dễ thực hiện hơn."],
            "activities": [
                { "name": "Hoạt động 1: Thực hiện theo từng bước", "duration": 20, "teacher_tasks": ["Nêu các ví dụ về công việc theo bước (tập thể dục, tính toán).", "Thảo luận về tầm quan trọng của thứ tự các bước."], "student_tasks": ["Quan sát, nhận biết các công việc theo bước."] },
                { "name": "Hoạt động 2: Chia nhỏ công việc", "duration": 15, "teacher_tasks": ["Phân tích ví dụ về việc tạo bài trình chiếu, chia thành các việc nhỏ hơn.", "Thảo luận về lợi ích của việc chia nhỏ công việc."], "student_tasks": ["Hiểu được lợi ích của việc chia nhỏ nhiệm vụ."] }
            ],
            "answer_keys": { "luyen_tap": ["Bước 1: Trên dải lệnh Insert, nháy chuột chọn lệnh Pictures.", "Bước 2: Mở thư mục chứa ảnh.", "Bước 3: Chọn ảnh muốn thêm.", "Bước 4: Nháy chuột chọn Insert."], "van_dung": ["HS nêu các bước gấp giấy thành hình con cá."] }
        },
        "F1-2": {
            "objectives": ["Sử dụng được cách nói 'Nếu... thì...' để thể hiện quyết định thực hiện một việc tuỳ thuộc vào một điều kiện."],
            "core_content": ["Trong cuộc sống, nhiều hành động của chúng ta phụ thuộc vào một điều kiện cụ thể.", "Có thể dùng cấu trúc 'Nếu [điều kiện] thì [hành động]' để diễn tả việc này."],
            "activities": [
                { "name": "Hoạt động 1: Tùy vào điều kiện để thực hiện", "duration": 20, "teacher_tasks": ["Nêu các ví dụ về hành động phụ thuộc điều kiện.", "Yêu cầu HS ghép cặp điều kiện và hành động hợp lý."], "student_tasks": ["Thảo luận và ghép cặp."] },
                { "name": "Hoạt động 2: Sử dụng cách nói 'Nếu... thì...'", "duration": 15, "teacher_tasks": ["Hướng dẫn HS sử dụng cấu trúc 'Nếu... thì...' để diễn đạt lại các tình huống.", "Tổ chức trò chơi 'Cho thú ăn'."], "student_tasks": ["Thực hành đặt câu.", "Tham gia trò chơi."] }
            ],
            "answer_keys": { "luyen_tap": ["Điều kiện: 'chiều nay chưa làm xong hết bài tập'. Việc làm: 'tối nay sẽ không xem ti vi mà làm nốt bài tập'."], "van_dung": ["Gợi ý: Nếu chữ số hàng đơn vị nhỏ hơn 5 thì giữ nguyên chữ số hàng chục. Nếu chữ số hàng đơn vị lớn hơn hoặc bằng 5 thì tăng chữ số hàng chục lên 1 đơn vị."] }
        },
        "F1-3": {
            "objectives": ["Chia được một công việc cụ thể thành những việc nhỏ hơn.", "Chia được một công việc cụ thể thành những việc nhỏ hơn, trong đó có những việc máy tính trợ giúp được cho em."],
            "core_content": ["Đây là bài học thực hành dưới dạng trò chơi để củng cố kỹ năng chia nhỏ nhiệm vụ và ra lệnh theo bước."],
            "activities": [
                { "name": "Trò chơi 1: Ai chia việc hợp lí?", "duration": 20, "teacher_tasks": ["Giao nhiệm vụ chuẩn bị bài trình chiếu.", "Yêu cầu HS đóng vai nhóm trưởng, chia nhỏ công việc và phân công."], "student_tasks": ["Thảo luận nhóm, lập kế hoạch và trình bày."] },
                { "name": "Trò chơi 2: Điều khiển robot", "duration": 20, "teacher_tasks": ["Giới thiệu luật chơi và các câu lệnh.", "Yêu cầu HS viết các lệnh để robot đi từ C đến D."], "student_tasks": ["Làm việc nhóm để tìm ra dãy lệnh đúng."] }
            ],
            "answer_keys": {}
        },
        "F2-1": {
            "objectives": ["Phát biểu được nhiệm vụ đặt ra bằng cách nêu những gì đã cho trước, cần làm gì hay cần tạo ra sản phẩm số nào.", "Tìm được sự trợ giúp của máy tính để làm một số việc nhỏ trong một nhiệm vụ được giao."],
            "core_content": ["Khi phát biểu một nhiệm vụ, cần xác định rõ: Đã có gì? (đầu vào) và Cần làm gì/tạo ra sản phẩm gì? (đầu ra).", "Chia nhỏ nhiệm vụ giúp dễ thực hiện và dễ xác định những việc có thể nhờ máy tính trợ giúp."],
            "activities": [
                { "name": "Hoạt động 1: Cách phát biểu nhiệm vụ", "duration": 20, "teacher_tasks": ["Phân tích các ví dụ về cách phát biểu nhiệm vụ.", "Yêu cầu HS xác định 'đã có' và 'cần làm' trong các ví dụ."], "student_tasks": ["Thảo luận và phân tích."] },
                { "name": "Hoạt động 2: Tìm sự trợ giúp của máy tính", "duration": 15, "teacher_tasks": ["Nêu nhiệm vụ làm tờ rơi.", "Yêu cầu HS thảo luận cách chia nhỏ nhiệm vụ và xác định những việc máy tính có thể giúp."], "student_tasks": ["Thảo luận nhóm và trình bày ý kiến."] }
            ],
            "answer_keys": { "luyen_tap": ["HS tự chọn một bài tập và phát biểu nhiệm vụ theo cấu trúc: Đã cho... Yêu cầu..."], "van_dung": ["Ví dụ: Soạn thảo văn bản, tìm kiếm hình ảnh trên Internet, làm bài trình chiếu."] }
        },
        "F2-2": {
            "objectives": ["Tạo được một sản phẩm số có sự trợ giúp của máy tính.", "Nhận thấy cần phát biểu nhiệm vụ rõ ràng, chia nhiệm vụ thành các bước khi thực hiện chung theo nhóm."],
            "core_content": ["Đây là bài thực hành tổng hợp theo dự án nhóm, vận dụng toàn bộ kiến thức của chủ đề F."],
            "activities": [
                { "name": "Hoạt động 1: Giao nhiệm vụ và lập kế hoạch", "duration": 15, "teacher_tasks": ["Cho các nhóm chọn đề tài.", "Hướng dẫn các nhóm phát biểu lại nhiệm vụ, chia nhỏ công việc và lập kế hoạch."], "student_tasks": ["Thảo luận nhóm, chọn đề tài và lập kế hoạch."] },
                { "name": "Hoạt động 2: Thực hiện dự án", "duration": 25, "teacher_tasks": ["Quan sát các nhóm làm việc, hỗ trợ khi cần."], "student_tasks": ["Các nhóm thực hiện tạo sản phẩm số theo kế hoạch."] }
            ],
            "answer_keys": {}
        }
    };
    return allDetails[lessonId] || { "objectives": ["Nội dung đang được cập nhật."], "core_content": [], "activities": [], "answer_keys": {} };
}
