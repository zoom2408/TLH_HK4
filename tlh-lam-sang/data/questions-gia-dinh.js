/* ============================================================
   NGÂN HÀNG CÂU HỎI — NHÁNH 3: TRỊ LIỆU HỆ THỐNG GIA ĐÌNH
   60 câu = 30 lý thuyết (LT) + 30 tình huống suy luận (TH)
   Schema: xem chú thích trong questions-cbt.js
   ============================================================ */

window.QUIZ_BANK = window.QUIZ_BANK || {};

window.QUIZ_BANK["gia-dinh"] = {
  ten: "Trị liệu Hệ thống gia đình",
  mau: "gia-dinh",
  cauHoi: [

/* ========================= LÝ THUYẾT ========================= */

{
  id:"GD-LT-01", loai:"ly-thuyet", chuDe:"Lý thuyết hệ thống",
  cauHoi:"Nguyên lý “tính chỉnh thể” (wholeness) mà trị liệu gia đình tiếp thu từ lý thuyết hệ thống tổng quát của von Bertalanffy phát biểu rằng:",
  luaChon:[
    "Hệ thống là tổng cộng đơn giản của các thành phần cấu tạo nên nó",
    "Hệ thống lớn hơn tổng các thành phần; không thể hiểu một thành viên nếu tách họ khỏi các mối quan hệ trong hệ thống",
    "Mỗi thành viên trong gia đình vận hành hoàn toàn độc lập",
    "Hệ thống gia đình luôn hướng tới việc thay đổi liên tục"
  ],
  dapAn:1,
  giaiThich:"Đây là bước ngoặt nhận thức luận của trị liệu gia đình: hành vi của một cá nhân chỉ trở nên dễ hiểu khi được đặt trong mạng lưới tương tác mà nó thuộc về, vì thế đơn vị quan sát chuyển từ cá nhân sang hệ thống.",
  viSaoSai:[
    "Đây chính là quan điểm nguyên tử luận mà lý thuyết hệ thống bác bỏ.",
    "",
    "Trái ngược với nguyên lý liên thuộc giữa các thành phần.",
    "Hệ thống có xu hướng duy trì trạng thái ổn định, không phải thay đổi liên tục."
  ]
},
{
  id:"GD-LT-02", loai:"ly-thuyet", chuDe:"Nhân quả vòng tròn",
  cauHoi:"“Nhân quả vòng tròn” (circular causality) khác với nhân quả tuyến tính ở điểm nào?",
  luaChon:[
    "Nó xác định chính xác hơn ai là người có lỗi trong gia đình",
    "Nó xem hành vi của các thành viên như những mắt xích tác động qua lại và duy trì lẫn nhau, thay vì xếp thành chuỗi nguyên nhân – kết quả một chiều",
    "Nó chỉ áp dụng cho các gia đình có nhiều hơn ba thành viên",
    "Nó thay thế khái niệm hệ thống bằng khái niệm cá nhân"
  ],
  dapAn:1,
  giaiThich:"Trong tư duy vòng tròn, câu hỏi “ai bắt đầu trước” trở nên vô nghĩa vì việc đặt dấu chấm câu ở đâu chỉ là quy ước. Điều quan trọng là nhận ra khuôn mẫu tự duy trì và can thiệp vào bất kỳ điểm nào của vòng lặp.",
  viSaoSai:[
    "Ngược lại, nó chuyển trọng tâm ra khỏi việc quy lỗi.",
    "",
    "Nó áp dụng cho mọi hệ thống, kể cả cặp đôi hai người.",
    "Nó làm điều ngược lại: chuyển trọng tâm từ cá nhân sang hệ thống."
  ]
},
{
  id:"GD-LT-03", loai:"ly-thuyet", chuDe:"Cân bằng nội tại",
  cauHoi:"Khái niệm “cân bằng nội tại” (homeostasis) trong hệ thống gia đình chỉ:",
  luaChon:[
    "Sự bình đẳng về quyền lực giữa các thành viên",
    "Xu hướng của hệ thống duy trì trạng thái ổn định quen thuộc và chống lại thay đổi, kể cả khi trạng thái đó gây đau khổ",
    "Trạng thái không có xung đột trong gia đình",
    "Khả năng gia đình thích nghi nhanh với mọi biến cố"
  ],
  dapAn:1,
  giaiThich:"Homeostasis giải thích vì sao gia đình vừa tìm đến trị liệu vừa vô thức chống lại thay đổi: các cơ chế giữ ổn định được kích hoạt khi hệ thống bị đẩy ra khỏi trạng thái quen thuộc, ngay cả khi trạng thái đó có triệu chứng.",
  viSaoSai:[
    "Bình đẳng quyền lực là chủ đề khác, không phải nội dung của khái niệm này.",
    "",
    "Hệ thống có thể duy trì cân bằng ngay giữa xung đột triền miên.",
    "Đó là tính linh hoạt (adaptability), khái niệm bổ sung chứ không đồng nghĩa."
  ]
},
{
  id:"GD-LT-04", loai:"ly-thuyet", chuDe:"Phản hồi",
  cauHoi:"Trong ngôn ngữ điều khiển học, phản hồi âm (negative feedback) trong gia đình có chức năng gì?",
  luaChon:[
    "Đưa hệ thống trở lại trạng thái ổn định trước đó, giảm thiểu độ lệch",
    "Khuếch đại độ lệch và đẩy hệ thống sang trạng thái mới",
    "Tạo ra xung đột giữa các thành viên",
    "Cắt đứt liên lạc giữa các tiểu hệ thống"
  ],
  dapAn:0,
  giaiThich:"“Âm” ở đây không mang nghĩa xấu mà mang nghĩa điều chỉnh ngược: khi một thành viên đi lệch khỏi khuôn mẫu, hệ thống phát tín hiệu kéo họ trở lại. Phản hồi dương thì ngược lại — nó khuếch đại độ lệch và có thể dẫn tới thay đổi bậc hai.",
  viSaoSai:[
    "",
    "Đó là phản hồi dương (positive feedback).",
    "Xung đột không phải định nghĩa của phản hồi.",
    "Không liên quan tới định nghĩa của khái niệm."
  ]
},
{
  id:"GD-LT-05", loai:"ly-thuyet", chuDe:"Đẳng kết cục",
  cauHoi:"Nguyên lý “đẳng kết cục” (equifinality) hàm ý điều gì cho thực hành trị liệu gia đình?",
  luaChon:[
    "Mọi gia đình đều cần cùng một phác đồ can thiệp",
    "Cùng một kết cục có thể đến từ nhiều khởi điểm khác nhau, nên việc truy tìm “nguyên nhân gốc” trong quá khứ ít quan trọng hơn việc hiểu khuôn mẫu đang vận hành",
    "Kết quả trị liệu luôn giống nhau bất kể can thiệp gì",
    "Mỗi gia đình chỉ có một con đường duy nhất dẫn tới thay đổi"
  ],
  dapAn:1,
  giaiThich:"Đẳng kết cục (và khái niệm sinh đôi với nó là đa kết cục) là một lý do quan trọng khiến trị liệu hệ thống tập trung vào tương tác ở hiện tại thay vì khảo cổ học nguyên nhân trong quá khứ.",
  viSaoSai:[
    "Trái ngược: nguyên lý này ủng hộ tính đa dạng của con đường.",
    "",
    "Đây là hiểu sai; nguyên lý nói về con đường dẫn tới kết cục, không nói mọi can thiệp đều tương đương.",
    "Trái ngược với nội dung của nguyên lý."
  ]
},
{
  id:"GD-LT-06", loai:"ly-thuyet", chuDe:"Thân chủ được chỉ định",
  cauHoi:"Thuật ngữ “thân chủ được chỉ định” (identified patient) chỉ:",
  luaChon:[
    "Người được bảo hiểm chi trả chi phí trị liệu",
    "Thành viên được gia đình chỉ ra là “người có vấn đề”, nhưng theo góc nhìn hệ thống thì đang mang triệu chứng thay cho toàn bộ hệ thống",
    "Thành viên đầu tiên liên hệ đặt lịch hẹn",
    "Người có quyền quyết định trong gia đình"
  ],
  dapAn:1,
  giaiThich:"Khái niệm này chứa đựng toàn bộ bước chuyển của trị liệu gia đình: triệu chứng của một người được đọc như thông tin về hệ thống, chứ không phải như thuộc tính riêng của cá nhân đó.",
  viSaoSai:[
    "Đây là vấn đề hành chính, không liên quan khái niệm.",
    "",
    "Người liên hệ đầu tiên thường không phải người mang triệu chứng.",
    "Đó là vấn đề phân cấp quyền lực, một khái niệm khác."
  ]
},
{
  id:"GD-LT-07", loai:"ly-thuyet", chuDe:"Minuchin – ranh giới",
  cauHoi:"Theo Salvador Minuchin, gia đình có ranh giới “quá dính” (enmeshed) đặc trưng bởi:",
  luaChon:[
    "Ranh giới quá cứng, các thành viên ít giao tiếp và ít hỗ trợ nhau",
    "Ranh giới quá mờ nhạt, các thành viên can dự quá mức vào đời sống của nhau và cá tính riêng bị hoà tan",
    "Sự vắng mặt hoàn toàn của phân cấp trong gia đình",
    "Việc gia đình có quá nhiều thế hệ sống chung"
  ],
  dapAn:1,
  giaiThich:"Minuchin đặt ranh giới trên một trục liên tục: quá dính ở một đầu, rời rạc (disengaged) ở đầu kia, và ranh giới rõ ràng nhưng thẩm thấu được nằm ở giữa. Cả hai cực đều gắn với nguy cơ bệnh lý.",
  viSaoSai:[
    "Đó là mô tả của kiểu rời rạc (disengaged).",
    "",
    "Phân cấp là một chiều kích khác của cấu trúc gia đình.",
    "Số thế hệ sống chung không quyết định kiểu ranh giới."
  ]
},
{
  id:"GD-LT-08", loai:"ly-thuyet", chuDe:"Minuchin – tiểu hệ thống",
  cauHoi:"Ba tiểu hệ thống cơ bản trong mô hình cấu trúc gia đình của Minuchin là:",
  luaChon:[
    "Tiểu hệ thống vợ chồng, tiểu hệ thống cha mẹ, và tiểu hệ thống anh chị em",
    "Tiểu hệ thống kinh tế, tiểu hệ thống giáo dục, và tiểu hệ thống tình cảm",
    "Tiểu hệ thống ý thức, tiền ý thức và vô thức",
    "Tiểu hệ thống nội tâm, liên cá nhân và xã hội"
  ],
  dapAn:0,
  giaiThich:"Việc phân biệt tiểu hệ thống vợ chồng với tiểu hệ thống cha mẹ rất quan trọng trên thực hành: hai người có thể phối hợp tốt trong vai trò cha mẹ nhưng bế tắc trong vai trò vợ chồng, và ngược lại.",
  viSaoSai:[
    "",
    "Đây không phải cách phân chia của Minuchin.",
    "Đây là mô hình địa hình của Freud.",
    "Đây không phải khái niệm tiểu hệ thống trong trị liệu cấu trúc."
  ]
},
{
  id:"GD-LT-09", loai:"ly-thuyet", chuDe:"Phân cấp",
  cauHoi:"Trong trị liệu cấu trúc, “phân cấp rối loạn” (dysfunctional hierarchy) thường được hiểu là:",
  luaChon:[
    "Cha mẹ đặt ra quá nhiều quy tắc cho con cái",
    "Quyền lực điều hành không nằm đúng ở tiểu hệ thống cha mẹ — chẳng hạn một đứa trẻ hoặc ông bà nắm quyền quyết định thay cha mẹ",
    "Gia đình có nhiều hơn hai thế hệ",
    "Cha và mẹ có phong cách nuôi dạy khác nhau"
  ],
  dapAn:1,
  giaiThich:"Trị liệu cấu trúc coi việc khôi phục một phân cấp rõ ràng, trong đó cha mẹ giữ vai trò điều hành, là mục tiêu can thiệp trung tâm với nhiều vấn đề hành vi ở trẻ.",
  viSaoSai:[
    "Nhiều quy tắc chưa hẳn là phân cấp rối loạn.",
    "",
    "Số thế hệ tự nó không tạo ra phân cấp rối loạn.",
    "Khác biệt phong cách là bình thường, chỉ trở thành vấn đề khi nó phá vỡ liên minh cha mẹ."
  ]
},
{
  id:"GD-LT-10", loai:"ly-thuyet", chuDe:"Tam giác hoá",
  cauHoi:"“Tam giác hoá” (triangulation) mô tả hiện tượng gì?",
  luaChon:[
    "Ba thế hệ cùng tham gia buổi trị liệu",
    "Khi căng thẳng giữa hai người tăng lên, họ kéo một người thứ ba vào để giảm bớt áp lực trực tiếp giữa hai bên",
    "Việc nhà trị liệu làm việc lần lượt với ba tiểu hệ thống",
    "Ba nhà trị liệu cùng quan sát một gia đình qua gương một chiều"
  ],
  dapAn:1,
  giaiThich:"Bowen coi tam giác là đơn vị ổn định nhỏ nhất của hệ thống cảm xúc: cặp đôi hai người vốn không ổn định dưới áp lực, nên người thứ ba — thường là một đứa trẻ — bị kéo vào để hấp thụ căng thẳng.",
  viSaoSai:[
    "Đó là vấn đề tổ chức buổi làm việc, không phải khái niệm này.",
    "",
    "Đó là cách sắp xếp trị liệu, không phải hiện tượng cảm xúc.",
    "Đó là nhóm phản ánh (reflecting team)."
  ]
},
{
  id:"GD-LT-11", loai:"ly-thuyet", chuDe:"Liên minh xuyên thế hệ",
  cauHoi:"“Liên minh xuyên thế hệ” (cross-generational coalition) là:",
  luaChon:[
    "Việc ông bà và cha mẹ thống nhất cách dạy con",
    "Việc một phụ huynh và một đứa con liên kết với nhau chống lại phụ huynh còn lại, vượt qua ranh giới giữa các thế hệ",
    "Việc con cái ở các độ tuổi khác nhau chơi với nhau",
    "Việc gia đình duy trì truyền thống qua nhiều đời"
  ],
  dapAn:1,
  giaiThich:"Đây là một trong những cấu hình gây bệnh lý điển hình nhất trong mô hình cấu trúc: nó phá vỡ ranh giới thế hệ, làm suy yếu tiểu hệ thống cha mẹ và đặt đứa trẻ vào vị trí không phù hợp với lứa tuổi.",
  viSaoSai:[
    "Đó là sự phối hợp lành mạnh, không phải liên minh chống đối.",
    "",
    "Đó là quan hệ trong tiểu hệ thống anh chị em.",
    "Đó là truyền thống gia đình, khái niệm khác."
  ]
},
{
  id:"GD-LT-12", loai:"ly-thuyet", chuDe:"Kỹ thuật cấu trúc",
  cauHoi:"Kỹ thuật “diễn cảnh” (enactment) trong trị liệu cấu trúc là:",
  luaChon:[
    "Yêu cầu gia đình kể lại chi tiết một cuộc cãi vã đã xảy ra ở nhà",
    "Yêu cầu các thành viên tương tác trực tiếp với nhau ngay trong buổi trị liệu để nhà trị liệu quan sát và can thiệp vào khuôn mẫu đang diễn ra",
    "Nhà trị liệu đóng vai một thành viên trong gia đình",
    "Gia đình viết ra kịch bản cho cuộc sống lý tưởng của họ"
  ],
  dapAn:1,
  giaiThich:"Minuchin nhấn mạnh sự khác biệt giữa nghe kể và nhìn thấy. Khi khuôn mẫu diễn ra ngay trước mắt, nhà trị liệu có thể can thiệp vào chính thời điểm nó vận hành thay vì bàn luận về nó một cách trừu tượng.",
  viSaoSai:[
    "Kể lại chỉ cung cấp phiên bản đã được biên tập; diễn cảnh nhắm tới tương tác trực tiếp.",
    "",
    "Đó là kỹ thuật sắm vai, không phải diễn cảnh.",
    "Đó gần với kỹ thuật của trị liệu tập trung giải pháp."
  ]
},
{
  id:"GD-LT-13", loai:"ly-thuyet", chuDe:"Bowen – phân biệt hoá",
  cauHoi:"“Phân biệt hoá bản thân” (differentiation of self) theo Murray Bowen là:",
  luaChon:[
    "Khả năng cắt đứt hoàn toàn quan hệ với gia đình gốc để sống độc lập",
    "Khả năng phân biệt giữa quá trình lý trí và quá trình cảm xúc, giữ được lập trường riêng mà vẫn duy trì kết nối cảm xúc với người thân",
    "Mức độ khác biệt về tính cách giữa các thành viên trong gia đình",
    "Khả năng che giấu cảm xúc thật trước mặt gia đình"
  ],
  dapAn:1,
  giaiThich:"Phân biệt hoá không đồng nghĩa với xa cách. Người phân biệt hoá cao có thể ở gần người thân mà không bị cuốn vào phản ứng cảm xúc tự động của hệ thống, và có thể giữ vị thế “tôi” ngay giữa áp lực.",
  viSaoSai:[
    "Đó là cắt đứt cảm xúc (emotional cutoff) — trạng thái mà Bowen coi là biểu hiện của phân biệt hoá thấp.",
    "",
    "Đây không phải nội dung của khái niệm.",
    "Che giấu cảm xúc không phải phân biệt hoá."
  ]
},
{
  id:"GD-LT-14", loai:"ly-thuyet", chuDe:"Bowen – tam giác",
  cauHoi:"Vì sao Bowen coi tam giác là “khối xây dựng” cơ bản của hệ thống cảm xúc gia đình?",
  luaChon:[
    "Vì mọi gia đình đều có đúng ba thành viên",
    "Vì quan hệ hai người vốn không ổn định khi căng thẳng tăng, nên hệ thống tự động kéo người thứ ba vào để phân tán áp lực",
    "Vì ba thế hệ luôn sống cùng nhau trong một mái nhà",
    "Vì nhà trị liệu luôn tạo thành tam giác với cặp đôi"
  ],
  dapAn:1,
  giaiThich:"Bowen lập luận rằng khi lo âu ở mức thấp, một cặp đôi có thể ổn định; nhưng khi lo âu tăng, một người thứ ba sẽ được kéo vào, và các hệ thống lớn được cấu tạo từ nhiều tam giác lồng vào nhau.",
  viSaoSai:[
    "Số thành viên thực tế không liên quan đến luận điểm này.",
    "",
    "Không liên quan tới sắp xếp cư trú.",
    "Nhà trị liệu có thể bị kéo vào tam giác, nhưng đó là hệ quả chứ không phải lý do lý thuyết."
  ]
},
{
  id:"GD-LT-15", loai:"ly-thuyet", chuDe:"Bowen – phóng chiếu gia đình",
  cauHoi:"“Quá trình phóng chiếu gia đình” (family projection process) theo Bowen mô tả:",
  luaChon:[
    "Cách cha mẹ truyền sự thiếu phân biệt hoá và lo âu của mình sang một hoặc vài đứa con, thường là đứa được tập trung chú ý nhiều nhất",
    "Việc gia đình quy trách nhiệm cho các yếu tố bên ngoài như nhà trường hay xã hội",
    "Việc trẻ gán cho cha mẹ những cảm xúc của chính mình",
    "Cách gia đình lên kế hoạch cho tương lai của con cái"
  ],
  dapAn:0,
  giaiThich:"Đứa trẻ trở thành tiêu điểm của lo âu cha mẹ thường phát triển mức phân biệt hoá thấp hơn anh chị em, và đây là cơ chế nối liền một thế hệ với thế hệ tiếp theo trong lý thuyết Bowen.",
  viSaoSai:[
    "",
    "Đó là quy lỗi ra bên ngoài, không phải khái niệm này.",
    "Đó là phóng chiếu theo nghĩa phân tâm, khác với khái niệm của Bowen.",
    "Không liên quan tới nội dung khái niệm."
  ]
},
{
  id:"GD-LT-16", loai:"ly-thuyet", chuDe:"Bowen – truyền dẫn đa thế hệ",
  cauHoi:"“Quá trình truyền dẫn đa thế hệ” (multigenerational transmission process) hàm ý điều gì?",
  luaChon:[
    "Các bệnh tâm thần luôn được di truyền qua gen",
    "Mức phân biệt hoá và các khuôn mẫu cảm xúc được truyền từ thế hệ này sang thế hệ kế tiếp, có thể tích luỹ dần qua nhiều đời",
    "Mỗi thế hệ luôn phát triển lành mạnh hơn thế hệ trước",
    "Chỉ có con trưởng mới chịu ảnh hưởng từ gia đình gốc"
  ],
  dapAn:1,
  giaiThich:"Bowen cho rằng khuôn mẫu quan hệ được học và tái tạo qua các thế hệ; theo thời gian, một nhánh của gia đình có thể trượt dần xuống mức phân biệt hoá thấp hơn, làm tăng nguy cơ rối loạn.",
  viSaoSai:[
    "Đây là cơ chế quan hệ và học tập, không phải cơ chế di truyền sinh học.",
    "",
    "Lý thuyết không giả định tiến bộ tất yếu qua các thế hệ.",
    "Mọi thành viên đều chịu ảnh hưởng, tuy mức độ khác nhau."
  ]
},
{
  id:"GD-LT-17", loai:"ly-thuyet", chuDe:"Bowen – cắt đứt cảm xúc",
  cauHoi:"“Cắt đứt cảm xúc” (emotional cutoff) trong lý thuyết Bowen được hiểu là:",
  luaChon:[
    "Dấu hiệu của sự trưởng thành và độc lập đã hoàn tất",
    "Cách quản lý sự dính mắc chưa được giải quyết với gia đình gốc bằng khoảng cách vật lý hoặc im lặng — bề ngoài giống độc lập nhưng thực chất là phân biệt hoá thấp",
    "Việc gia đình chủ động từ chối tham gia trị liệu",
    "Sự mất trí nhớ về các sự kiện gia đình trong quá khứ"
  ],
  dapAn:1,
  giaiThich:"Bowen phân biệt rõ giữa phân biệt hoá và cắt đứt: người cắt đứt vẫn bị hệ thống chi phối mạnh, chỉ là họ quản lý cường độ đó bằng cách tránh tiếp xúc. Vì vậy việc quay lại kết nối với gia đình gốc là một phần công việc trị liệu.",
  viSaoSai:[
    "Đây chính là ngộ nhận mà Bowen muốn làm rõ.",
    "",
    "Đó là vấn đề tham gia trị liệu, không phải khái niệm này.",
    "Không liên quan tới trí nhớ."
  ]
},
{
  id:"GD-LT-18", loai:"ly-thuyet", chuDe:"Genogram",
  cauHoi:"Một genogram được xây dựng đúng chuẩn cần bao gồm tối thiểu:",
  luaChon:[
    "Một thế hệ với đầy đủ thông tin y tế",
    "Ba thế hệ, kèm các sự kiện quan trọng và ký hiệu thể hiện chất lượng quan hệ (gần gũi, xung đột, cắt đứt)",
    "Chỉ những thành viên hiện đang sống chung một nhà",
    "Sơ đồ chỗ ngồi của gia đình trong buổi trị liệu"
  ],
  dapAn:1,
  giaiThich:"Genogram không chỉ là cây phả hệ: giá trị lâm sàng nằm ở lớp thông tin về quan hệ và các khuôn mẫu lặp lại qua ba thế hệ, giúp nhìn thấy quá trình truyền dẫn đa thế hệ.",
  viSaoSai:[
    "Một thế hệ không cho thấy được khuôn mẫu lặp lại.",
    "",
    "Giới hạn ở hộ gia đình hiện tại sẽ bỏ mất chiều liên thế hệ.",
    "Đó là sơ đồ chỗ ngồi, một công cụ quan sát khác."
  ]
},
{
  id:"GD-LT-19", loai:"ly-thuyet", chuDe:"Trị liệu chiến lược",
  cauHoi:"“Kê đơn triệu chứng” (prescribing the symptom) là kỹ thuật đặc trưng của trường phái nào và dựa trên logic gì?",
  luaChon:[
    "Trị liệu cấu trúc; dựa trên việc củng cố ranh giới",
    "Trị liệu chiến lược; đây là một can thiệp nghịch lý, yêu cầu thân chủ chủ động thực hiện triệu chứng khiến nó mất tính tự động và không còn ngoài tầm kiểm soát",
    "Trị liệu tập trung giải pháp; dựa trên việc khuếch đại ngoại lệ",
    "Trị liệu tự sự; dựa trên việc ngoại hoá vấn đề"
  ],
  dapAn:1,
  giaiThich:"Logic nghịch lý là: nếu triệu chứng được thực hiện theo yêu cầu và theo lịch, nó không còn là thứ “tự xảy đến”. Dù thân chủ tuân thủ hay không tuân thủ, cả hai kết quả đều tạo ra thay đổi trong khuôn mẫu.",
  viSaoSai:[
    "Trị liệu cấu trúc làm việc với ranh giới và phân cấp, không dùng nghịch lý làm kỹ thuật trung tâm.",
    "",
    "Trị liệu tập trung giải pháp đi theo hướng hoàn toàn khác.",
    "Ngoại hoá là kỹ thuật của trị liệu tự sự, không phải kê đơn triệu chứng."
  ]
},
{
  id:"GD-LT-20", loai:"ly-thuyet", chuDe:"Nhóm Milan",
  cauHoi:"“Câu hỏi vòng tròn” (circular questioning) của nhóm Milan có đặc điểm gì?",
  luaChon:[
    "Hỏi lần lượt từng thành viên về cảm xúc của chính họ",
    "Hỏi một thành viên về quan hệ, suy nghĩ hoặc phản ứng giữa hai thành viên khác, qua đó làm hiện lên các khác biệt và khuôn mẫu trong hệ thống",
    "Lặp lại cùng một câu hỏi cho tới khi có câu trả lời thoả đáng",
    "Hỏi về quá khứ theo trình tự thời gian từ xa tới gần"
  ],
  dapAn:1,
  giaiThich:"Ví dụ: “Khi bố và mẹ tranh cãi, ai là người khó chịu nhất? Em nghĩ em gái em nhìn chuyện đó thế nào?” Kiểu câu hỏi này vừa thu thập thông tin về khuôn mẫu, vừa tự nó đã là một can thiệp vì buộc gia đình nhìn nhau theo cách mới.",
  viSaoSai:[
    "Đó là câu hỏi tuyến tính thông thường.",
    "",
    "Không liên quan tới định nghĩa kỹ thuật.",
    "Đó là khai thác tiền sử, không phải câu hỏi vòng tròn."
  ]
},
{
  id:"GD-LT-21", loai:"ly-thuyet", chuDe:"Nhóm Milan",
  cauHoi:"Ba nguyên tắc dẫn dắt do nhóm Milan (Selvini Palazzoli và cộng sự) đề xuất là:",
  luaChon:[
    "Đặt giả thuyết, tính vòng tròn, và trung lập",
    "Gia nhập, diễn cảnh, và tái cấu trúc",
    "Ngoại hoá, tái tác giả, và nhân chứng bên ngoài",
    "Chấp nhận, cam kết, và giá trị sống"
  ],
  dapAn:0,
  giaiThich:"Hypothesizing – circularity – neutrality là bộ ba nguyên tắc trong bài báo kinh điển năm 1980 của nhóm Milan, định hình phong cách làm việc dựa trên giả thuyết hệ thống và tránh liên minh với bất kỳ thành viên nào.",
  viSaoSai:[
    "",
    "Đó là các kỹ thuật của trị liệu cấu trúc (Minuchin).",
    "Đó là các khái niệm của trị liệu tự sự.",
    "Đó là các trụ cột của ACT trong nhánh CBT."
  ]
},
{
  id:"GD-LT-22", loai:"ly-thuyet", chuDe:"Tái định khung",
  cauHoi:"Mục đích chính của “tái định khung” (reframing) hoặc “hàm ý tích cực” (positive connotation) là:",
  luaChon:[
    "Khiến gia đình cảm thấy dễ chịu hơn về mặt cảm xúc",
    "Đưa ra một cách hiểu mới về hành vi có vấn đề, thường theo hướng nó phục vụ một chức năng nào đó cho hệ thống, nhờ đó giảm quy lỗi và mở đường cho thay đổi",
    "Che giấu mức độ nghiêm trọng của vấn đề với gia đình",
    "Thuyết phục gia đình rằng vấn đề không hề tồn tại"
  ],
  dapAn:1,
  giaiThich:"Tái định khung không phải nói dối cho dễ nghe: nó thay đổi khung nghĩa mà hành vi được đặt vào. Khi hành vi không còn được đọc là ác ý hay bệnh hoạn, phòng vệ của gia đình giảm và không gian cho lựa chọn mới xuất hiện.",
  viSaoSai:[
    "Cảm giác dễ chịu chỉ là hệ quả phụ, không phải mục đích.",
    "",
    "Che giấu vấn đề là phi đạo đức và không phải nội dung của kỹ thuật.",
    "Kỹ thuật này không phủ nhận sự tồn tại của vấn đề."
  ]
},
{
  id:"GD-LT-23", loai:"ly-thuyet", chuDe:"Virginia Satir",
  cauHoi:"Virginia Satir mô tả bốn kiểu ứng phó giao tiếp không nhất quán khi con người bị căng thẳng, đó là:",
  luaChon:[
    "Xoa dịu, đổ lỗi, lý trí hoá quá mức, và đánh trống lảng",
    "Tấn công, rút lui, im lặng, và bùng nổ",
    "Chủ động, thụ động, gây hấn thụ động, và quyết đoán",
    "Lo âu, né tránh, hỗn loạn, và an toàn"
  ],
  dapAn:0,
  giaiThich:"Satir gọi bốn kiểu này là placating, blaming, super-reasonable (computing) và irrelevant (distracting); kiểu thứ năm — giao tiếp nhất quán (congruent) — là mục tiêu trị liệu hướng tới.",
  viSaoSai:[
    "",
    "Đây không phải hệ phân loại của Satir.",
    "Đây là phân loại kiểu giao tiếp trong huấn luyện quyết đoán.",
    "Đây là các kiểu gắn bó trong lý thuyết Bowlby – Ainsworth."
  ]
},
{
  id:"GD-LT-24", loai:"ly-thuyet", chuDe:"Ràng buộc kép",
  cauHoi:"Giả thuyết “ràng buộc kép” (double bind) do nhóm Bateson đề xuất năm 1956 mô tả tình huống nào?",
  luaChon:[
    "Một người nhận hai mệnh lệnh mâu thuẫn ở hai cấp độ thông điệp khác nhau, không thể tuân thủ cả hai và cũng không được phép rời khỏi hay bình luận về mâu thuẫn đó",
    "Một người phải chăm sóc đồng thời cả cha mẹ già và con nhỏ",
    "Hai nhà trị liệu đưa ra hai lời khuyên trái ngược nhau",
    "Một thành viên bị hai tiểu hệ thống cùng lôi kéo"
  ],
  dapAn:0,
  giaiThich:"Ba yếu tố cấu thành ràng buộc kép là: thông điệp mâu thuẫn giữa lời nói và phi ngôn ngữ, cấm bình luận về mâu thuẫn đó, và không thể thoát khỏi mối quan hệ. Giả thuyết ban đầu liên hệ nó với tâm thần phân liệt, về sau bị phê phán mạnh về mặt bằng chứng nhưng vẫn có ảnh hưởng lớn tới tư duy hệ thống về giao tiếp.",
  viSaoSai:[
    "",
    "Đó là gánh nặng của thế hệ kẹp giữa, không phải ràng buộc kép.",
    "Không phải nội dung của giả thuyết.",
    "Đó gần với tam giác hoá hơn."
  ]
},
{
  id:"GD-LT-25", loai:"ly-thuyet", chuDe:"Trị liệu tập trung giải pháp",
  cauHoi:"Ba kỹ thuật đặc trưng nhất của trị liệu tập trung giải pháp (de Shazer và Berg) là:",
  luaChon:[
    "Câu hỏi phép màu, câu hỏi ngoại lệ, và câu hỏi thang đo",
    "Diễn cảnh, gia nhập, và đánh dấu ranh giới",
    "Tự do liên tưởng, phân tích giấc mơ, và diễn giải chuyển di",
    "Genogram, phi tam giác hoá, và giữ vị thế “tôi”"
  ],
  dapAn:0,
  giaiThich:"Trị liệu tập trung giải pháp chuyển trọng tâm khỏi vấn đề: câu hỏi phép màu dựng lên hình ảnh tương lai mong muốn, câu hỏi ngoại lệ tìm những lúc vấn đề không xuất hiện, câu hỏi thang đo lượng hoá tiến bộ và bước kế tiếp khả thi.",
  viSaoSai:[
    "",
    "Đó là kỹ thuật của trị liệu cấu trúc.",
    "Đó là kỹ thuật phân tâm.",
    "Đó là kỹ thuật của trường phái Bowen."
  ]
},
{
  id:"GD-LT-26", loai:"ly-thuyet", chuDe:"Trị liệu tự sự",
  cauHoi:"Câu châm ngôn “Vấn đề là vấn đề; con người không phải là vấn đề” gắn với kỹ thuật nào và của ai?",
  luaChon:[
    "Kỹ thuật tái định khung của nhóm Milan",
    "Kỹ thuật ngoại hoá vấn đề (externalizing) trong trị liệu tự sự của Michael White và David Epston",
    "Kỹ thuật kê đơn triệu chứng của Jay Haley",
    "Kỹ thuật phi tam giác hoá của Murray Bowen"
  ],
  dapAn:1,
  giaiThich:"Ngoại hoá tách con người khỏi vấn đề bằng ngôn ngữ — vấn đề được đặt tên và nói tới như một thực thể riêng (“Nỗi Lo Lắng”, “Cơn Giận”), nhờ đó gia đình chuyển từ đổ lỗi sang cùng nhau đối phó với vấn đề.",
  viSaoSai:[
    "Tái định khung có họ hàng về tinh thần nhưng câu này gắn với trị liệu tự sự.",
    "",
    "Kê đơn triệu chứng là can thiệp nghịch lý, không liên quan câu này.",
    "Phi tam giác hoá thuộc lý thuyết Bowen."
  ]
},
{
  id:"GD-LT-27", loai:"ly-thuyet", chuDe:"Chu kỳ đời sống gia đình",
  cauHoi:"Mô hình “chu kỳ đời sống gia đình” (Carter và McGoldrick) hữu ích cho trị liệu vì:",
  luaChon:[
    "Nó cho phép dự đoán chính xác thời điểm mỗi gia đình sẽ tan vỡ",
    "Nó giúp nhận diện các giai đoạn chuyển tiếp mà gia đình buộc phải tái tổ chức cấu trúc; triệu chứng thường xuất hiện đúng vào những điểm chuyển tiếp này",
    "Nó xác định mức phân biệt hoá của từng thành viên",
    "Nó thay thế cho việc đánh giá lâm sàng từng cá nhân"
  ],
  dapAn:1,
  giaiThich:"Kết hôn, sinh con đầu lòng, con vào tuổi vị thành niên, con rời nhà, nghỉ hưu, mất người thân — mỗi mốc đòi hỏi thay đổi quy tắc và vai trò. Gia đình mắc kẹt ở một điểm chuyển tiếp là bối cảnh rất hay gặp khi triệu chứng xuất hiện.",
  viSaoSai:[
    "Mô hình mô tả xu hướng chung, không dự đoán số phận từng gia đình.",
    "",
    "Phân biệt hoá là khái niệm của Bowen, đo bằng cách khác.",
    "Nó bổ sung cho đánh giá lâm sàng chứ không thay thế."
  ]
},
{
  id:"GD-LT-28", loai:"ly-thuyet", chuDe:"Biểu lộ cảm xúc",
  cauHoi:"Khái niệm “biểu lộ cảm xúc” (expressed emotion – EE) trong nghiên cứu gia đình chỉ:",
  luaChon:[
    "Mức độ gia đình thể hiện tình yêu thương với nhau",
    "Mức độ chỉ trích, thù địch và can dự cảm xúc quá mức của người thân đối với bệnh nhân; EE cao liên hệ với nguy cơ tái phát cao hơn, đặc biệt trong tâm thần phân liệt",
    "Khả năng gia đình bộc lộ cảm xúc trong buổi trị liệu",
    "Số lượng cảm xúc mà thân chủ nhận diện được"
  ],
  dapAn:1,
  giaiThich:"EE là một trong những phát hiện có nền tảng thực nghiệm vững nhất của nghiên cứu gia đình; các chương trình can thiệp gia đình nhằm giảm EE đã cho thấy hiệu quả giảm tỷ lệ tái phát.",
  viSaoSai:[
    "EE đo các thành phần chỉ trích và can dự quá mức, không phải mức độ yêu thương nói chung.",
    "",
    "Đây là quan sát trong buổi, không phải cấu trúc khái niệm EE.",
    "Đó gần với khái niệm nhận biết cảm xúc, không liên quan."
  ]
},
{
  id:"GD-LT-29", loai:"ly-thuyet", chuDe:"Bằng chứng thực nghiệm",
  cauHoi:"Trị liệu gia đình dựa trên mô hình Maudsley (FBT) được xem là can thiệp hàng đầu cho nhóm nào?",
  luaChon:[
    "Người lớn mắc rối loạn trầm cảm nặng",
    "Thanh thiếu niên mắc chán ăn tâm thần (anorexia nervosa)",
    "Trẻ em mắc rối loạn phổ tự kỷ",
    "Người cao tuổi mắc sa sút trí tuệ"
  ],
  dapAn:1,
  giaiThich:"FBT trao lại cho cha mẹ vai trò chủ động trong việc phục hồi dinh dưỡng cho con ở giai đoạn đầu, sau đó dần trả lại quyền tự chủ cho thiếu niên; đây là một trong những mảng có bằng chứng mạnh nhất của trị liệu gia đình.",
  viSaoSai:[
    "Trầm cảm ở người lớn không phải chỉ định chính của mô hình này.",
    "",
    "Tự kỷ cần các chương trình can thiệp phát triển khác.",
    "Sa sút trí tuệ cần can thiệp khác, dù hỗ trợ gia đình vẫn quan trọng."
  ]
},
{
  id:"GD-LT-30", loai:"ly-thuyet", chuDe:"Phê bình",
  cauHoi:"Phê bình từ góc nhìn nữ quyền đối với trị liệu gia đình truyền thống tập trung vào điểm nào?",
  luaChon:[
    "Trị liệu gia đình quá tốn kém so với trị liệu cá nhân",
    "Các khái niệm như “trung lập” và “nhân quả vòng tròn” có thể che giấu sự bất bình đẳng quyền lực và, trong các ca bạo lực, dẫn tới việc chia sẻ trách nhiệm một cách bất công cho nạn nhân",
    "Trị liệu gia đình không quan tâm tới trẻ em",
    "Trị liệu gia đình chỉ áp dụng được ở phương Tây"
  ],
  dapAn:1,
  giaiThich:"Nếu mọi hành vi đều được đọc là mắt xích trong một vòng lặp chung, thì bạo lực của một người có nguy cơ bị mô tả như “phần của khuôn mẫu”. Vì vậy đồng thuận hiện nay là an toàn được ưu tiên tuyệt đối và trung lập không áp dụng khi có bạo lực.",
  viSaoSai:[
    "Chi phí không phải nội dung của phê bình này.",
    "",
    "Trẻ em thường là trung tâm chú ý của trị liệu gia đình.",
    "Tính liên văn hoá là một phê bình khác và trị liệu gia đình lại thường được xem là phù hợp với các nền văn hoá coi trọng gia đình."
  ]
},

/* ========================= THỰC HÀNH / SUY LUẬN ========================= */

{
  id:"GD-TH-01", loai:"thuc-hanh", chuDe:"Chức năng của triệu chứng",
  boiCanh:"Bé Nam, 10 tuổi, được đưa tới vì “ăn vạ, la hét”. Khi hỏi kỹ, các cơn ăn vạ hầu như chỉ xảy ra vào buổi tối khi bố mẹ bắt đầu to tiếng với nhau; ngay khi Nam la hét, bố mẹ ngừng cãi và cùng dỗ con.",
  cauHoi:"Cách khái niệm hoá theo góc nhìn hệ thống là:",
  luaChon:[
    "Nam mắc rối loạn hành vi và cần can thiệp hành vi cá nhân",
    "Triệu chứng của Nam đang thực hiện một chức năng trong hệ thống: nó chuyển hướng căng thẳng khỏi mâu thuẫn vợ chồng và tạm thời tái lập sự phối hợp giữa bố mẹ — một dạng tam giác hoá",
    "Bố mẹ đang cố ý sử dụng con để tránh nói chuyện với nhau",
    "Nam đang bắt chước hành vi của bạn bè ở trường"
  ],
  dapAn:1,
  giaiThich:"Chi tiết quyết định là thời điểm: triệu chứng gắn chặt với chu trình xung đột vợ chồng và có tác dụng làm dừng chu trình đó. Đây là ví dụ kinh điển về tam giác hoá và về việc triệu chứng ổn định hệ thống.",
  viSaoSai:[
    "Cách hiểu này bỏ qua toàn bộ bối cảnh quan hệ và sẽ khiến can thiệp trượt mục tiêu.",
    "",
    "Quá trình này diễn ra ngoài ý thức; quy kết cố ý là quy lỗi chứ không phải khái niệm hoá hệ thống.",
    "Không có dữ liệu nào ủng hộ giả thuyết này."
  ]
},
{
  id:"GD-TH-02", loai:"thuc-hanh", chuDe:"Ranh giới",
  boiCanh:"Mẹ và con gái 15 tuổi chia sẻ mọi bí mật, mẹ kể cho con nghe chi tiết những bất mãn với bố, hai mẹ con ngủ chung phòng, còn bố ngủ riêng và “không được biết chuyện của hai mẹ con”.",
  cauHoi:"Cấu hình này được mô tả chính xác nhất là:",
  luaChon:[
    "Ranh giới rời rạc giữa mẹ và con",
    "Ranh giới quá dính giữa mẹ và con, kết hợp liên minh xuyên thế hệ chống lại người bố",
    "Phân cấp lành mạnh với người mẹ ở vị trí điều hành",
    "Cắt đứt cảm xúc giữa mẹ và con"
  ],
  dapAn:1,
  giaiThich:"Hai vấn đề cấu trúc chồng lên nhau: ranh giới thế hệ bị xoá (con gái được đặt vào vai trò bạn tâm giao của mẹ) và một liên minh mẹ – con hình thành chống lại bố, làm suy yếu tiểu hệ thống vợ chồng.",
  viSaoSai:[
    "Mô tả cho thấy sự can dự quá mức, ngược với rời rạc.",
    "",
    "Đây là phân cấp bị bóp méo, không phải lành mạnh.",
    "Cắt đứt cảm xúc là khoảng cách, trái với mô tả ở đây."
  ]
},
{
  id:"GD-TH-03", loai:"thuc-hanh", chuDe:"Ranh giới",
  boiCanh:"Trong một gia đình, bố mẹ đều làm ca kíp, cả nhà hầu như không ăn cơm chung, không ai biết con trai 14 tuổi đã nghỉ học ba tuần cho tới khi nhà trường gọi điện.",
  cauHoi:"Theo Minuchin, kiểu ranh giới ở gia đình này là:",
  luaChon:[
    "Ranh giới quá dính (enmeshed)",
    "Ranh giới rời rạc (disengaged)",
    "Ranh giới rõ ràng và thẩm thấu tốt",
    "Liên minh xuyên thế hệ"
  ],
  dapAn:1,
  giaiThich:"Ranh giới quá cứng khiến các tiểu hệ thống gần như tách biệt: sự hỗ trợ, giám sát và trao đổi thông tin đều thiếu, nên vấn đề của một thành viên có thể tiến rất xa mà không ai phát hiện.",
  viSaoSai:[
    "Quá dính là thái cực ngược lại, đặc trưng bởi can dự quá mức.",
    "",
    "Ranh giới rõ ràng cho phép vừa tự chủ vừa kết nối — không khớp với mô tả.",
    "Không có mô tả về liên minh chống lại ai."
  ]
},
{
  id:"GD-TH-04", loai:"thuc-hanh", chuDe:"Phân cấp",
  boiCanh:"Bà nội quyết định mọi việc liên quan tới cháu: giờ ăn, giờ học, trường học. Khi người mẹ đặt ra một quy tắc, bà lập tức phủ quyết trước mặt cháu và nói “mẹ cháu chẳng biết gì đâu”.",
  cauHoi:"Mục tiêu can thiệp ưu tiên theo trị liệu cấu trúc là:",
  luaChon:[
    "Làm việc với ký ức tuổi thơ của người mẹ để hiểu vì sao chị không dám phản kháng",
    "Khôi phục phân cấp: củng cố tiểu hệ thống cha mẹ ở vị trí điều hành và đánh dấu lại ranh giới với thế hệ ông bà",
    "Khuyên người mẹ cắt đứt liên lạc với mẹ chồng",
    "Dạy đứa trẻ các kỹ năng đối phó với mâu thuẫn giữa người lớn"
  ],
  dapAn:1,
  giaiThich:"Trong mô hình cấu trúc, vấn đề nằm ở nơi quyền quyết định đang đặt sai chỗ. Can thiệp nhắm vào việc trao lại chức năng điều hành cho cha mẹ, chẳng hạn bằng cách sắp xếp lại chỗ ngồi, chặn các lần cắt ngang và tạo diễn cảnh nơi cha mẹ ra quyết định trước mặt con.",
  viSaoSai:[
    "Đây là hướng tâm động, không phải ưu tiên của trị liệu cấu trúc.",
    "",
    "Cắt đứt là giải pháp cực đoan và thường tạo thêm vấn đề mới.",
    "Can thiệp vào đứa trẻ là bỏ qua nguyên nhân cấu trúc."
  ]
},
{
  id:"GD-TH-05", loai:"thuc-hanh", chuDe:"Kỹ thuật diễn cảnh",
  boiCanh:"Nhà trị liệu nói với bố mẹ: “Ngay bây giờ, ngay tại đây, anh chị hãy cùng nhau thống nhất một giờ giới nghiêm cho cháu. Tôi sẽ ngồi im quan sát.”",
  cauHoi:"Đây là kỹ thuật gì và nhằm mục đích gì?",
  luaChon:[
    "Câu hỏi vòng tròn; nhằm thu thập thông tin về khác biệt trong hệ thống",
    "Diễn cảnh (enactment); nhằm làm khuôn mẫu tương tác hiện ra ngay trong buổi để có thể quan sát và can thiệp trực tiếp",
    "Can thiệp nghịch lý; nhằm khiến gia đình chống lại chỉ thị",
    "Ngoại hoá vấn đề; nhằm tách con người khỏi vấn đề"
  ],
  dapAn:1,
  giaiThich:"Thay vì hỏi “anh chị thường ra quyết định thế nào”, nhà trị liệu tạo điều kiện để quá trình đó diễn ra thật. Những gì bộc lộ — ai nói trước, ai bị ngắt lời, con có xen vào không — đều là dữ liệu và cũng là điểm can thiệp.",
  viSaoSai:[
    "Câu hỏi vòng tròn là kỹ thuật hỏi, không phải yêu cầu tương tác trực tiếp.",
    "",
    "Không có yếu tố nghịch lý trong chỉ thị này.",
    "Ngoại hoá là kỹ thuật ngôn ngữ của trị liệu tự sự."
  ]
},
{
  id:"GD-TH-06", loai:"thuc-hanh", chuDe:"Tái định khung",
  boiCanh:"Gia đình mở đầu buổi trị liệu: “Nhà em chẳng có vấn đề gì cả, chỉ mỗi thằng bé là hư thôi. Bác chữa cho nó là xong.”",
  cauHoi:"Can thiệp phù hợp nhất ở buổi đầu là:",
  luaChon:[
    "Đồng ý với gia đình và bắt đầu làm việc cá nhân với cậu bé",
    "Ghi nhận nỗi vất vả của gia đình, rồi từng bước đưa ra một cách nhìn rộng hơn — ví dụ hỏi mỗi người ảnh hưởng của vấn đề tới họ ra sao — để chuyển dần trọng tâm từ “thằng bé có vấn đề” sang “cả nhà đang cùng vật lộn với một vấn đề”",
    "Nói thẳng rằng gia đình mới là nguyên nhân và cậu bé chỉ là nạn nhân",
    "Từ chối làm việc nếu gia đình không thừa nhận vai trò của mình"
  ],
  dapAn:1,
  giaiThich:"Đây là bài toán kinh điển của buổi đầu: nếu chấp nhận khung của gia đình thì trị liệu hệ thống không thể bắt đầu, nhưng nếu bác bỏ thẳng thì gia đình sẽ phòng vệ hoặc bỏ đi. Cách xử lý là gia nhập trước, mở rộng khung sau.",
  viSaoSai:[
    "Chấp nhận vai trò “thân chủ được chỉ định” củng cố chính khuôn mẫu cần thay đổi.",
    "",
    "Đảo chiều quy lỗi vẫn là quy lỗi và thường phá vỡ liên minh ngay lập tức.",
    "Ra điều kiện ở buổi đầu là bỏ qua bước gia nhập."
  ]
},
{
  id:"GD-TH-07", loai:"thuc-hanh", chuDe:"Nhân quả vòng tròn",
  boiCanh:"Vợ nói: “Tôi phải nhắc suốt vì anh ấy chẳng bao giờ chịu nói gì.” Chồng nói: “Tôi im vì cô ấy cằn nhằn suốt ngày.”",
  cauHoi:"Cách hiểu theo tư duy hệ thống là:",
  luaChon:[
    "Cần xác định ai là người khởi đầu chu trình để biết ai phải thay đổi trước",
    "Đây là một chu trình đeo bám – rút lui tự duy trì; mỗi hành vi vừa là phản ứng vừa là kích thích, và can thiệp có thể bắt đầu từ bất kỳ điểm nào trong vòng lặp",
    "Người vợ là nguyên nhân chính vì bà nói nhiều hơn",
    "Người chồng là nguyên nhân chính vì ông từ chối giao tiếp"
  ],
  dapAn:1,
  giaiThich:"Đây là ví dụ mẫu mực về việc “đặt dấu chấm câu” tuỳ tiện: mỗi bên đọc chuỗi sự kiện theo cách khiến mình là người phản ứng. Nhiệm vụ của nhà trị liệu là làm cho cả hai nhìn thấy vòng lặp thay vì tranh cãi về điểm khởi đầu.",
  viSaoSai:[
    "Truy tìm điểm khởi đầu chính là tư duy tuyến tính mà lý thuyết hệ thống bác bỏ.",
    "",
    "Quy lỗi cho một bên bỏ qua tính tương hỗ của khuôn mẫu.",
    "Quy lỗi cho bên còn lại cũng mắc cùng một sai lầm."
  ]
},
{
  id:"GD-TH-08", loai:"thuc-hanh", chuDe:"Đọc genogram",
  boiCanh:"Genogram ba thế hệ cho thấy: ông nội mất sớm, bà nội một mình nuôi con và con trưởng phải bỏ học đi làm; đến đời bố, ông cũng là con trưởng và gánh vác cả họ; hiện tại con trai cả 17 tuổi của thân chủ đang bỏ học để đi làm phụ gia đình.",
  cauHoi:"Khái niệm nào của Bowen mô tả sát nhất khuôn mẫu này?",
  luaChon:[
    "Cắt đứt cảm xúc",
    "Quá trình truyền dẫn đa thế hệ",
    "Đẳng kết cục",
    "Ràng buộc kép"
  ],
  dapAn:1,
  giaiThich:"Cùng một vai trò và cùng một kịch bản quan hệ được tái tạo qua ba thế hệ. Genogram làm khuôn mẫu này hiện ra bằng hình ảnh, và việc gia đình nhìn thấy nó tự nó đã là một can thiệp.",
  viSaoSai:[
    "Cắt đứt cảm xúc là sự xa cách với gia đình gốc, không có trong mô tả.",
    "",
    "Đẳng kết cục nói về nhiều con đường dẫn tới cùng kết cục, không phải sự lặp lại qua các đời.",
    "Ràng buộc kép là hiện tượng giao tiếp mâu thuẫn."
  ]
},
{
  id:"GD-TH-09", loai:"thuc-hanh", chuDe:"Cắt đứt cảm xúc",
  boiCanh:"Anh H., 40 tuổi, không liên lạc với bố mẹ suốt 15 năm. Anh nói: “Tôi ổn mà. Tôi chẳng cần họ, tôi đã tự lo được hết.” Tuy nhiên anh phản ứng dữ dội mỗi khi ai đó nhắc tới gia đình, và trong mọi mối quan hệ thân mật anh đều rút lui khi bắt đầu gần gũi.",
  cauHoi:"Theo Bowen, đây là biểu hiện của:",
  luaChon:[
    "Mức phân biệt hoá bản thân cao",
    "Cắt đứt cảm xúc — một cách quản lý sự dính mắc chưa được giải quyết, phản ánh mức phân biệt hoá thấp chứ không phải trưởng thành",
    "Ranh giới rõ ràng và lành mạnh",
    "Đẳng kết cục"
  ],
  dapAn:1,
  giaiThich:"Dấu hiệu phân biệt cắt đứt với phân biệt hoá thật nằm ở phản ứng cảm xúc: người phân biệt hoá cao có thể nói về gia đình mà không bị kích hoạt. Ở đây, cường độ phản ứng và sự lặp lại của khuôn mẫu rút lui cho thấy hệ thống vẫn đang chi phối anh H. rất mạnh.",
  viSaoSai:[
    "Phân biệt hoá cao đi kèm khả năng duy trì kết nối, không phải cắt đứt.",
    "",
    "Ranh giới lành mạnh cho phép vừa tự chủ vừa gần gũi.",
    "Đẳng kết cục là nguyên lý về con đường dẫn tới kết cục, không liên quan."
  ]
},
{
  id:"GD-TH-10", loai:"thuc-hanh", chuDe:"Phân biệt hoá",
  boiCanh:"Trong bữa cơm gia đình, mọi người gây áp lực buộc chị T. phải nghỉ việc để về quê chăm bố mẹ chồng.",
  cauHoi:"Phản ứng nào thể hiện mức phân biệt hoá bản thân CAO theo Bowen?",
  luaChon:[
    "Chị im lặng đồng ý cho êm chuyện rồi âm thầm oán giận",
    "Chị bình tĩnh nói rõ quan điểm và giới hạn của mình, không tấn công ai, đồng thời vẫn giữ được sự gắn kết và tiếp tục tham gia bữa cơm",
    "Chị nổi giận, kể tội cả nhà rồi bỏ về và cắt liên lạc",
    "Chị nhờ chồng đứng ra nói thay và tránh mặt gia đình"
  ],
  dapAn:1,
  giaiThich:"Phân biệt hoá cao thể hiện ở việc giữ vị thế “tôi”: nêu được lập trường riêng dưới áp lực của hệ thống mà không cần hoặc tấn công hoặc rút chạy, và vẫn duy trì kết nối.",
  viSaoSai:[
    "Đây là hoà tan vào hệ thống để tránh lo âu — biểu hiện của phân biệt hoá thấp.",
    "",
    "Đây là phản ứng cảm xúc và cắt đứt, cũng là biểu hiện của phân biệt hoá thấp.",
    "Đây là tam giác hoá: kéo người thứ ba vào để tránh đối diện trực tiếp."
  ]
},
{
  id:"GD-TH-11", loai:"thuc-hanh", chuDe:"Câu hỏi vòng tròn",
  boiCanh:"Nhà trị liệu hỏi cô con gái: “Khi bố và mẹ im lặng với nhau, theo em thì ai là người khó chịu hơn? Và em nghĩ mẹ hiểu sự im lặng của bố là gì?”",
  cauHoi:"Đây là kỹ thuật của trường phái nào và có tác dụng gì?",
  luaChon:[
    "Câu hỏi vòng tròn của nhóm Milan; vừa thu thập thông tin về khuôn mẫu quan hệ vừa tự nó là can thiệp vì buộc các thành viên nhìn nhau theo góc mới",
    "Câu hỏi phép màu của trị liệu tập trung giải pháp; nhằm dựng lên viễn cảnh tương lai",
    "Câu hỏi Socrates của CBT; nhằm kiểm định niềm tin",
    "Tự do liên tưởng của phân tâm; nhằm tiếp cận vô thức"
  ],
  dapAn:0,
  giaiThich:"Đặc trưng của câu hỏi vòng tròn là hỏi người này về quan hệ giữa hai người khác. Điều đó vừa cho nhà trị liệu thấy bản đồ quan hệ, vừa cho cả gia đình nghe thấy những khác biệt trong cách mỗi người đọc cùng một sự kiện.",
  viSaoSai:[
    "",
    "Câu hỏi phép màu hỏi về một tương lai giả định khi vấn đề biến mất.",
    "Câu hỏi Socrates nhắm vào niềm tin của cá nhân, không vào quan hệ giữa các thành viên khác.",
    "Tự do liên tưởng không phải kỹ thuật hỏi có cấu trúc như thế này."
  ]
},
{
  id:"GD-TH-12", loai:"thuc-hanh", chuDe:"Can thiệp nghịch lý",
  boiCanh:"Một cặp đôi cãi nhau mỗi tối và không thể dừng lại. Nhà trị liệu yêu cầu: “Từ nay tới buổi sau, mỗi tối anh chị hãy dành đúng 20 phút, bấm đồng hồ, để cãi nhau. Ngoài khung giờ đó thì không được cãi.”",
  cauHoi:"Logic của can thiệp này là gì?",
  luaChon:[
    "Giúp cặp đôi cãi nhau hiệu quả hơn và giải quyết vấn đề nhanh hơn",
    "Đây là can thiệp nghịch lý kiểu kê đơn triệu chứng: khi việc cãi nhau trở thành nhiệm vụ có lịch, nó mất tính tự phát và chuyển từ chỗ ngoài tầm kiểm soát sang chỗ có thể kiểm soát",
    "Nhằm chứng minh cho cặp đôi thấy họ vô lý đến mức nào",
    "Nhằm thu thập dữ liệu định lượng về tần suất xung đột"
  ],
  dapAn:1,
  giaiThich:"Dù cặp đôi tuân thủ (và thấy khó cãi theo lịch) hay không tuân thủ (và cãi ít đi), khuôn mẫu tự động đều bị phá vỡ. Lưu ý: các can thiệp nghịch lý cần được dùng thận trọng và không phù hợp khi có bạo lực.",
  viSaoSai:[
    "Mục tiêu không phải cải thiện kỹ năng tranh luận.",
    "",
    "Làm thân chủ bẽ mặt không phải mục đích của kỹ thuật.",
    "Thu thập dữ liệu là mục tiêu phụ, không phải logic của can thiệp."
  ]
},
{
  id:"GD-TH-13", loai:"thuc-hanh", chuDe:"Kiềm chế thay đổi",
  boiCanh:"Sau vài tiến bộ ban đầu, nhà trị liệu chiến lược nói với gia đình: “Tôi nghĩ ta nên đi chậm lại. Thay đổi nhanh quá đôi khi khiến mọi thứ mất thăng bằng, có lẽ tuần này gia đình đừng vội thay đổi thêm gì.”",
  cauHoi:"Kỹ thuật này được gọi là gì và nhằm mục đích gì?",
  luaChon:[
    "Kiềm chế thay đổi (restraining); nhằm giảm áp lực phải tiến bộ, xử lý sự chống đối với thay đổi và thường khiến gia đình tự thúc đẩy tiến bộ",
    "Gia nhập; nhằm tạo liên minh với gia đình",
    "Ngoại hoá; nhằm tách vấn đề khỏi con người",
    "Đánh dấu ranh giới; nhằm tái lập cấu trúc"
  ],
  dapAn:0,
  giaiThich:"Restraining là một can thiệp nghịch lý xuất phát từ nhận định rằng hệ thống có xu hướng chống lại áp lực thay đổi; khi nhà trị liệu đứng về phía sự thận trọng, xu hướng chống đối đó lại chuyển thành động lực tiến lên.",
  viSaoSai:[
    "",
    "Gia nhập diễn ra ở giai đoạn đầu và mang nội dung khác.",
    "Ngoại hoá là kỹ thuật ngôn ngữ của trị liệu tự sự.",
    "Đánh dấu ranh giới là kỹ thuật cấu trúc."
  ]
},
{
  id:"GD-TH-14", loai:"thuc-hanh", chuDe:"Hàm ý tích cực",
  boiCanh:"Nhà trị liệu nói với gia đình: “Tôi thấy mỗi khi bố mẹ căng thẳng thì con lại ốm. Có lẽ theo cách riêng của mình, con đang cố giữ cho bố mẹ ở gần nhau.”",
  cauHoi:"Mục đích chính của phát biểu này là:",
  luaChon:[
    "Khiến đứa trẻ cảm thấy có lỗi vì đã can thiệp vào chuyện người lớn",
    "Gán một ý nghĩa tích cực cho triệu chứng để giảm quy lỗi, đưa vấn đề trở lại bối cảnh quan hệ và mở đường cho gia đình nhìn nhận vai trò của mình",
    "Khẳng định rằng đứa trẻ đang giả vờ ốm",
    "Chuyển trách nhiệm điều trị sang cho bố mẹ"
  ],
  dapAn:1,
  giaiThich:"Hàm ý tích cực là kỹ thuật đặc trưng của nhóm Milan. Nó thay đổi khung nghĩa của triệu chứng từ “hư hỏng” hoặc “bệnh hoạn” sang “có chức năng”, nhờ đó giảm phòng vệ và làm hiện lên mối liên hệ giữa triệu chứng và hệ thống.",
  viSaoSai:[
    "Kỹ thuật này nhằm giảm chứ không tăng cảm giác tội lỗi.",
    "",
    "Nó không hàm ý đứa trẻ giả vờ; nó nói về chức năng chứ không nói về ý định.",
    "Đây là hệ quả có thể có, không phải mục đích chính."
  ]
},
{
  id:"GD-TH-15", loai:"thuc-hanh", chuDe:"Câu hỏi phép màu",
  boiCanh:"Bạn muốn dùng câu hỏi phép màu với một gia đình theo trị liệu tập trung giải pháp.",
  cauHoi:"Cách đặt câu hỏi nào đúng nhất?",
  luaChon:[
    "“Nếu có phép màu, gia đình mình muốn thay đổi ai nhất?”",
    "“Giả sử đêm nay khi cả nhà đang ngủ, một phép màu xảy ra và vấn đề này biến mất. Sáng mai, dấu hiệu đầu tiên nào khiến anh chị nhận ra điều gì đó đã khác? Ai sẽ là người nhận ra đầu tiên, và họ sẽ thấy gì?”",
    "“Theo anh chị, nguyên nhân sâu xa nhất của vấn đề này là gì?”",
    "“Nếu vấn đề không được giải quyết, chuyện tồi tệ nhất có thể xảy ra là gì?”"
  ],
  dapAn:1,
  giaiThich:"Câu hỏi phép màu được thiết kế để gia đình mô tả tương lai mong muốn bằng những dấu hiệu cụ thể, quan sát được và ở quy mô nhỏ — từ đó rút ra bước hành động khả thi ngay hôm nay.",
  viSaoSai:[
    "Câu hỏi này quay lại việc chỉ ra người có vấn đề.",
    "",
    "Truy tìm nguyên nhân là hướng ngược lại với triết lý tập trung giải pháp.",
    "Đây là câu hỏi hướng về kịch bản xấu, không phải câu hỏi phép màu."
  ]
},
{
  id:"GD-TH-16", loai:"thuc-hanh", chuDe:"Câu hỏi thang đo",
  boiCanh:"Thân chủ chấm tình trạng hiện tại của gia đình là 4 trên thang 0–10.",
  cauHoi:"Câu hỏi tiếp theo phù hợp nhất với tinh thần trị liệu tập trung giải pháp là:",
  luaChon:[
    "“Tại sao lại thấp như vậy? Điều gì khiến gia đình chỉ được 4?”",
    "“Điều gì đã giúp gia đình ở mức 4 chứ không phải 1 hay 2? Và dấu hiệu cụ thể nào sẽ cho anh chị biết mình đã nhích lên 5?”",
    "“Bao giờ thì anh chị nghĩ mình sẽ đạt 10?”",
    "“Ai trong nhà là người kéo điểm số xuống nhiều nhất?”"
  ],
  dapAn:1,
  giaiThich:"Câu hỏi thang đo được dùng theo hai hướng: nhìn xuống để phát hiện các nguồn lực đã có (vì sao không phải là 1), và nhìn lên một nấc để xác định bước kế tiếp nhỏ và cụ thể.",
  viSaoSai:[
    "Hỏi “tại sao thấp” kéo cuộc trò chuyện quay về vấn đề và sự thiếu hụt.",
    "",
    "Nhảy thẳng tới 10 tạo mục tiêu quá xa và không khả thi.",
    "Câu hỏi này quy lỗi cho một thành viên, đi ngược tinh thần của trường phái."
  ]
},
{
  id:"GD-TH-17", loai:"thuc-hanh", chuDe:"Ngoại hoá vấn đề",
  boiCanh:"Nhà trị liệu hỏi cậu bé: “Nỗi Lo Lắng thường thuyết phục con điều gì về bản thân? Có lần nào con không nghe lời nó không?”",
  cauHoi:"Kỹ thuật này thuộc trường phái nào và nhằm mục đích gì?",
  luaChon:[
    "Trị liệu tự sự; ngoại hoá vấn đề để tách con người khỏi vấn đề, giảm cảm giác tội lỗi và mở ra không gian cho hành động chống lại vấn đề",
    "Trị liệu cấu trúc; nhằm đánh dấu ranh giới giữa các tiểu hệ thống",
    "Trị liệu chiến lược; nhằm kê đơn triệu chứng",
    "Trị liệu Bowen; nhằm nâng mức phân biệt hoá"
  ],
  dapAn:0,
  giaiThich:"Ngoại hoá đặt vấn đề ra ngoài con người bằng chính ngôn ngữ. Câu hỏi thứ hai còn nhắm tới “kết quả độc đáo” — những lần cậu bé đã kháng lại vấn đề — là chất liệu để bắt đầu tái tác giả câu chuyện.",
  viSaoSai:[
    "",
    "Đánh dấu ranh giới là kỹ thuật khác hẳn.",
    "Không có yếu tố nghịch lý ở đây.",
    "Phân biệt hoá được làm việc bằng genogram và huấn luyện, không phải kiểu hỏi này."
  ]
},
{
  id:"GD-TH-18", loai:"thuc-hanh", chuDe:"Kết quả độc đáo",
  boiCanh:"Một thiếu niên nói: “Lúc nào con cũng nổi khùng, con không kiểm soát được gì hết.” Sau đó cậu kể thoáng qua rằng tuần trước bị bạn khiêu khích nhưng cậu đã bỏ đi chỗ khác.",
  cauHoi:"Theo trị liệu tự sự, nhà trị liệu nên làm gì với chi tiết này?",
  luaChon:[
    "Bỏ qua vì đó chỉ là một ngoại lệ nhỏ không đại diện cho vấn đề",
    "Dừng lại và khai thác kỹ chi tiết này như một “kết quả độc đáo”: cậu đã làm điều đó thế nào, điều đó nói lên gì về con người cậu, ai sẽ không ngạc nhiên khi biết chuyện này",
    "Dùng nó để chứng minh rằng cậu đã nói quá về vấn đề của mình",
    "Ghi lại làm dữ liệu cơ sở để so sánh về sau"
  ],
  dapAn:1,
  giaiThich:"Kết quả độc đáo là những khoảnh khắc không khớp với câu chuyện thống trị về vấn đề. Việc làm dày các chi tiết quanh những khoảnh khắc đó là cách trị liệu tự sự xây dựng một câu chuyện thay thế về bản sắc.",
  viSaoSai:[
    "Đây chính là chất liệu quý nhất, không nên bỏ qua.",
    "",
    "Bắt lỗi mâu thuẫn sẽ khiến thiếu niên phòng vệ và đóng lại.",
    "Ghi chép đơn thuần bỏ lỡ cơ hội can thiệp ngay lúc đó."
  ]
},
{
  id:"GD-TH-19", loai:"thuc-hanh", chuDe:"FBT cho chán ăn tâm thần",
  boiCanh:"Em gái 16 tuổi được chẩn đoán chán ăn tâm thần, chỉ số khối cơ thể rất thấp nhưng chưa tới mức phải nhập viện. Gia đình hỏi nên bắt đầu từ đâu.",
  cauHoi:"Theo mô hình trị liệu gia đình Maudsley (FBT), trọng tâm của giai đoạn đầu là:",
  luaChon:[
    "Khám phá nguyên nhân tâm lý sâu xa khiến em phát triển rối loạn ăn uống",
    "Trao lại cho cha mẹ vai trò chủ động trong việc phục hồi dinh dưỡng cho con, với lập trường không quy lỗi cho gia đình và tách rối loạn ra khỏi bản sắc của em",
    "Để em tự quyết định chế độ ăn nhằm tôn trọng quyền tự chủ",
    "Trị liệu cá nhân cho em về hình ảnh cơ thể trước, sau đó mới làm việc với gia đình"
  ],
  dapAn:1,
  giaiThich:"FBT đảo ngược cách tiếp cận truyền thống: thay vì coi gia đình là nguyên nhân, mô hình huy động cha mẹ như nguồn lực chính cho việc phục hồi cân nặng ở giai đoạn một, rồi mới dần trả lại quyền tự chủ cho thiếu niên ở các giai đoạn sau.",
  viSaoSai:[
    "Truy tìm nguyên nhân không phải trọng tâm và có thể trì hoãn việc xử lý nguy cơ y tế.",
    "",
    "Ở giai đoạn suy dinh dưỡng nặng, trao quyền quyết định ăn uống cho em là không an toàn.",
    "FBT đặt công việc gia đình lên trước, không phải sau."
  ]
},
{
  id:"GD-TH-20", loai:"thuc-hanh", chuDe:"Biểu lộ cảm xúc",
  boiCanh:"Anh trai của thân chủ mắc tâm thần phân liệt đã ổn định sau đợt điều trị. Mẹ liên tục nói: “Nó lười chứ bệnh gì, cứ nằm suốt ngày”, đồng thời theo sát, nhắc nhở từng việc nhỏ và tự làm thay mọi thứ cho con.",
  cauHoi:"Nguy cơ chính và hướng can thiệp phù hợp là:",
  luaChon:[
    "Không có nguy cơ gì; sự quan tâm của mẹ luôn có lợi cho quá trình hồi phục",
    "Đây là biểu hiện của mức biểu lộ cảm xúc cao (chỉ trích kèm can dự quá mức), liên hệ với nguy cơ tái phát; can thiệp phù hợp là chương trình giáo dục tâm lý gia đình nhằm giảm chỉ trích và điều chỉnh mức độ can dự",
    "Cần tách bệnh nhân khỏi gia đình càng sớm càng tốt",
    "Cần tăng liều thuốc để bù cho môi trường gia đình căng thẳng"
  ],
  dapAn:1,
  giaiThich:"Chỉ trích, thù địch và can dự cảm xúc quá mức là ba thành phần của EE cao. Các chương trình can thiệp gia đình giúp người thân hiểu bản chất bệnh, điều chỉnh kỳ vọng và cách giao tiếp, qua đó giảm rõ rệt tỷ lệ tái phát.",
  viSaoSai:[
    "Sự quan tâm ở dạng chỉ trích và can dự quá mức lại là yếu tố nguy cơ.",
    "",
    "Tách khỏi gia đình không phải khuyến nghị chuẩn và thường bất khả thi.",
    "Điều chỉnh thuốc không thay thế được việc can thiệp vào môi trường quan hệ."
  ]
},
{
  id:"GD-TH-21", loai:"thuc-hanh", chuDe:"Đạo đức – bạo lực gia đình",
  boiCanh:"Một cặp vợ chồng tới trị liệu. Trong buổi đầu, người vợ tiết lộ chồng đã nhiều lần đánh chị, lần gần nhất là tuần trước. Người chồng nói: “Tại cô ấy khiêu khích tôi.”",
  cauHoi:"Ứng xử phù hợp nhất là:",
  luaChon:[
    "Tiếp tục trị liệu cặp đôi với lập trường trung lập và mô tả bạo lực như một phần của chu trình tương tác giữa hai người",
    "Ưu tiên an toàn: đánh giá nguy cơ, gặp riêng người vợ, hỗ trợ lập kế hoạch an toàn, khẳng định rõ trách nhiệm về hành vi bạo lực thuộc về người gây ra, và không tiến hành trị liệu cặp đôi chung khi bạo lực còn tiếp diễn",
    "Yêu cầu người vợ thay đổi cách nói chuyện để tránh kích động chồng",
    "Từ chối ca này và không cung cấp bất kỳ thông tin hỗ trợ nào"
  ],
  dapAn:1,
  giaiThich:"Đây chính là điểm mà phê bình nữ quyền nhắm tới: áp dụng nhân quả vòng tròn và trung lập cho bạo lực sẽ khiến trách nhiệm bị san đều và làm tăng nguy cơ cho nạn nhân. Đồng thuận chuyên môn hiện nay là an toàn được ưu tiên tuyệt đối và trách nhiệm về bạo lực không được chia sẻ.",
  viSaoSai:[
    "Cách làm này nguy hiểm và đã bị phê phán rộng rãi trong y văn.",
    "",
    "Đây là quy trách nhiệm cho nạn nhân, hoàn toàn không chấp nhận được.",
    "Từ chối mà không hỗ trợ hay chuyển tuyến là bỏ rơi thân chủ trong tình huống nguy cơ."
  ]
},
{
  id:"GD-TH-22", loai:"thuc-hanh", chuDe:"Làm việc hệ thống với một người",
  boiCanh:"Chị M. muốn trị liệu để cải thiện quan hệ với gia đình chồng, nhưng không ai trong gia đình đồng ý tham gia.",
  cauHoi:"Lựa chọn phù hợp nhất là:",
  luaChon:[
    "Từ chối vì trị liệu hệ thống bắt buộc phải có mặt tất cả các thành viên",
    "Vẫn có thể làm việc theo hướng hệ thống với một mình chị M. — ví dụ dùng genogram, xác định các tam giác, huấn luyện chị giữ vị thế “tôi” và thay đổi phần của mình trong các vòng lặp tương tác",
    "Chuyển sang trị liệu cá nhân thuần tuý và bỏ hẳn khung hệ thống",
    "Yêu cầu chị thuyết phục bằng được gia đình tới, nếu không thì dừng"
  ],
  dapAn:1,
  giaiThich:"Bowen đặc biệt nổi tiếng với việc làm việc với một thành viên có động cơ nhất: nếu người đó thay đổi được cách mình tham gia vào hệ thống cảm xúc, toàn bộ hệ thống buộc phải điều chỉnh theo.",
  viSaoSai:[
    "Sự có mặt của tất cả là lý tưởng nhưng không phải điều kiện bắt buộc.",
    "",
    "Không cần từ bỏ khung hệ thống chỉ vì số người tham dự.",
    "Ra điều kiện như vậy đặt gánh nặng không hợp lý lên thân chủ."
  ]
},
{
  id:"GD-TH-23", loai:"thuc-hanh", chuDe:"Chu kỳ đời sống gia đình",
  boiCanh:"Chị K., 50 tuổi, xuất hiện triệu chứng trầm cảm ngay sau khi con út vào đại học và chuyển ra ở riêng. Chị nói: “Tự nhiên tôi chẳng biết mình còn để làm gì nữa.”",
  cauHoi:"Cách khái niệm hoá theo góc nhìn hệ thống là:",
  luaChon:[
    "Đây thuần tuý là một giai đoạn trầm cảm nội sinh, không liên quan bối cảnh",
    "Gia đình đang ở giai đoạn chuyển tiếp “con cái rời nhà”, đòi hỏi tái tổ chức vai trò và tái thương lượng quan hệ vợ chồng; triệu chứng của chị K. cần được đọc trong bối cảnh chuyển tiếp này",
    "Chị K. có mức phân biệt hoá cao nên phản ứng mạnh với sự thay đổi",
    "Đây là biểu hiện của ràng buộc kép trong gia đình"
  ],
  dapAn:1,
  giaiThich:"Các điểm chuyển tiếp trong chu kỳ đời sống gia đình là nơi triệu chứng hay xuất hiện nhất, vì chúng buộc hệ thống phải thay đổi quy tắc và vai trò. Can thiệp hữu ích thường bao gồm việc cặp vợ chồng tái thương lượng quan hệ sau khi vai trò làm cha mẹ toàn thời gian kết thúc.",
  viSaoSai:[
    "Bỏ qua bối cảnh chuyển tiếp là bỏ mất thông tin quan trọng nhất về thời điểm khởi phát.",
    "",
    "Phản ứng mạnh với thay đổi gợi ý phân biệt hoá thấp hơn chứ không phải cao.",
    "Không có mô tả nào về thông điệp mâu thuẫn hai cấp độ."
  ]
},
{
  id:"GD-TH-24", loai:"thuc-hanh", chuDe:"Nhà trị liệu bị tam giác hoá",
  boiCanh:"Sau vài buổi, hai đứa con liên tục nhìn nhà trị liệu tìm sự đồng tình mỗi khi nói về bố mẹ; bố mẹ bắt đầu nói: “Đấy, đến bác sĩ cũng thấy chúng tôi sai.” Nhà trị liệu nhận ra mình đang hay gật đầu với bọn trẻ hơn.",
  cauHoi:"Điều gì đang xảy ra và cần làm gì?",
  luaChon:[
    "Nhà trị liệu đang xây dựng liên minh tốt với trẻ, nên tiếp tục",
    "Nhà trị liệu đã bị kéo vào một tam giác trong hệ thống; cần nhận diện, khôi phục vị thế cân bằng và nếu phù hợp thì nêu chính hiện tượng này ra để cùng gia đình nhìn nhận",
    "Cần chuyển ca sang đồng nghiệp khác ngay lập tức",
    "Cần ngừng làm việc với trẻ và chỉ gặp riêng bố mẹ"
  ],
  dapAn:1,
  giaiThich:"Nhà trị liệu luôn có nguy cơ trở thành đỉnh thứ ba của một tam giác. Việc nhận ra và tự điều chỉnh — thậm chí đưa hiện tượng ra bàn luận — vừa bảo vệ tính hiệu quả của trị liệu vừa làm mẫu cho gia đình về cách thoát khỏi tam giác.",
  viSaoSai:[
    "Liên minh lệch với một phía làm mất khả năng làm việc với toàn hệ thống.",
    "",
    "Chuyển ca là phản ứng thái quá cho một hiện tượng có thể xử lý được.",
    "Loại trẻ khỏi buổi làm việc không giải quyết được vấn đề tam giác."
  ]
},
{
  id:"GD-TH-25", loai:"thuc-hanh", chuDe:"Cân bằng nội tại",
  boiCanh:"Sau bốn buổi, hành vi của cậu con trai cải thiện rõ. Đúng lúc đó bố mẹ bắt đầu nói tới chuyện ly thân; ngay tuần sau, cậu bé bỏ nhà đi hai ngày và mọi chuyện ly thân bị gác lại.",
  cauHoi:"Cách hiểu phù hợp nhất theo lý thuyết hệ thống là:",
  luaChon:[
    "Trị liệu đã thất bại vì cậu bé tái phát nặng hơn trước",
    "Đây là biểu hiện của cân bằng nội tại: khi hệ thống bị đẩy về phía một thay đổi lớn, triệu chứng quay lại và kéo hệ thống trở về trạng thái quen thuộc",
    "Cậu bé đang cố ý thao túng bố mẹ để họ không ly thân",
    "Bố mẹ đã bí mật khuyến khích con bỏ nhà đi"
  ],
  dapAn:1,
  giaiThich:"Sự tái xuất hiện của triệu chứng đúng vào thời điểm hệ thống sắp thay đổi cấu trúc là minh hoạ kinh điển của homeostasis. Nhận ra điều này giúp nhà trị liệu không hoảng hốt mà đưa chính mối liên hệ đó ra làm việc.",
  viSaoSai:[
    "Diễn giải này bỏ qua ý nghĩa của thời điểm và chức năng của triệu chứng.",
    "",
    "Quá trình này vận hành ngoài ý thức; quy kết cố ý là quy lỗi.",
    "Không có bằng chứng nào cho giả thuyết này."
  ]
},
{
  id:"GD-TH-26", loai:"thuc-hanh", chuDe:"Satir – kiểu giao tiếp",
  boiCanh:"Trong buổi trị liệu, mỗi khi có căng thẳng, người vợ lập tức xin lỗi, nói “tại em cả”, hạ giọng và đồng ý với mọi điều chồng nói dù trước đó chị vừa nêu quan điểm ngược lại.",
  cauHoi:"Theo phân loại của Satir, đây là kiểu ứng phó nào?",
  luaChon:[
    "Đổ lỗi (blaming)",
    "Xoa dịu (placating)",
    "Lý trí hoá quá mức (super-reasonable)",
    "Đánh trống lảng (irrelevant)"
  ],
  dapAn:1,
  giaiThich:"Kiểu xoa dịu hy sinh nhu cầu và quan điểm của bản thân để giữ hoà khí; người đó chú ý tới người khác và bối cảnh nhưng bỏ quên chính mình. Mục tiêu trị liệu là hướng tới giao tiếp nhất quán (congruent), nơi cả ba yếu tố đều có mặt.",
  viSaoSai:[
    "Đổ lỗi chú ý tới bản thân và bối cảnh nhưng bỏ qua người khác.",
    "",
    "Kiểu lý trí hoá quá mức chỉ chú ý tới bối cảnh, nói bằng ngôn ngữ trừu tượng và tách cảm xúc.",
    "Kiểu đánh trống lảng bỏ qua cả ba yếu tố, thường chuyển chủ đề hoặc pha trò."
  ]
},
{
  id:"GD-TH-27", loai:"thuc-hanh", chuDe:"Ràng buộc kép",
  boiCanh:"Mẹ nói với con: “Con cứ tự nhiên nói ra suy nghĩ của mình đi, mẹ muốn con thành thật.” Nhưng mỗi lần con nói điều mẹ không thích, mẹ im lặng, quay mặt đi và lạnh nhạt suốt hai ngày. Con không được phép nhắc tới chuyện này.",
  cauHoi:"Tình huống này minh hoạ khái niệm nào?",
  luaChon:[
    "Ràng buộc kép (double bind)",
    "Tam giác hoá",
    "Đẳng kết cục",
    "Hàm ý tích cực"
  ],
  dapAn:0,
  giaiThich:"Đủ cả ba yếu tố: thông điệp lời nói (“hãy thành thật”) mâu thuẫn với thông điệp phi ngôn ngữ (trừng phạt bằng sự lạnh nhạt), cấm bình luận về mâu thuẫn, và đứa trẻ không thể rời khỏi mối quan hệ.",
  viSaoSai:[
    "",
    "Không có người thứ ba bị kéo vào để giảm căng thẳng.",
    "Đẳng kết cục là nguyên lý về con đường dẫn tới kết cục.",
    "Hàm ý tích cực là một kỹ thuật can thiệp, không phải hiện tượng giao tiếp."
  ]
},
{
  id:"GD-TH-28", loai:"thuc-hanh", chuDe:"Gia nhập",
  boiCanh:"Buổi đầu tiên với một gia đình bốn người đang căng thẳng và nghi ngờ trị liệu.",
  cauHoi:"“Gia nhập” (joining) theo Minuchin có nghĩa là nhà trị liệu làm gì?",
  luaChon:[
    "Đứng về phía thành viên yếu thế nhất để bảo vệ họ",
    "Tạm thời hoà mình vào hệ thống — tôn trọng cách thức tổ chức, ngôn ngữ và thứ bậc của gia đình, kết nối với từng thành viên — để có đủ tín nhiệm mà sau đó can thiệp vào cấu trúc",
    "Giữ khoảng cách hoàn toàn để duy trì tính khách quan",
    "Đưa ra ngay các chỉ thị thay đổi cấu trúc từ buổi đầu"
  ],
  dapAn:1,
  giaiThich:"Minuchin dùng hình ảnh nhà trị liệu vừa là người trong cuộc vừa là người ngoài cuộc: phải được gia đình chấp nhận thì mới có “đòn bẩy” để tạo mất cân bằng và tái cấu trúc. Gia nhập trước, tái cấu trúc sau.",
  viSaoSai:[
    "Đứng hẳn về một phía ngay từ đầu sẽ phá vỡ khả năng làm việc với toàn hệ thống.",
    "",
    "Khoảng cách hoàn toàn khiến gia đình không cảm thấy được thấu hiểu và dễ bỏ trị liệu.",
    "Can thiệp cấu trúc quá sớm khi chưa có tín nhiệm thường bị hệ thống đẩy ra."
  ]
},
{
  id:"GD-TH-29", loai:"thuc-hanh", chuDe:"Ai tham dự buổi làm việc",
  boiCanh:"Nhà trường giới thiệu một học sinh lớp 7 có hành vi gây rối. Mẹ gọi điện đặt lịch và hỏi: “Em đưa mình cháu tới thôi có được không ạ?”",
  cauHoi:"Trả lời phù hợp nhất với khung hệ thống là:",
  luaChon:[
    "“Vâng, chị cứ đưa cháu tới, tôi sẽ làm việc riêng với cháu.”",
    "“Nếu được, tôi rất mong buổi đầu có mặt những người sống cùng và cùng chăm sóc cháu — vì hành vi của cháu diễn ra trong các mối quan hệ, và mỗi người sẽ cho tôi một góc nhìn mà cháu không tự kể được.”",
    "“Chị đưa cháu tới, còn bố cháu thì không cần thiết.”",
    "“Tôi chỉ nhận ca khi có mặt đầy đủ cả ba thế hệ.”"
  ],
  dapAn:1,
  giaiThich:"Việc mời ai tới buổi đầu tự nó đã là một can thiệp: nó gửi đi thông điệp rằng vấn đề nằm trong quan hệ chứ không nằm trong một đứa trẻ. Đồng thời lời mời cần linh hoạt và có giải thích, không phải một điều kiện cứng.",
  viSaoSai:[
    "Chấp nhận ngay khung “chỉ mình cháu có vấn đề” là củng cố vai trò thân chủ được chỉ định.",
    "",
    "Loại trừ người bố ngay từ đầu là một quyết định thiếu cơ sở và có thể củng cố cấu hình có sẵn.",
    "Đặt điều kiện cứng nhắc dễ khiến gia đình không tới nữa."
  ]
},
{
  id:"GD-TH-30", loai:"thuc-hanh", chuDe:"So sánh ba nhánh",
  boiCanh:"Một thiếu niên 15 tuổi có hành vi trốn học và cãi lời. Ba nhà trị liệu thuộc ba trường phái khác nhau đưa ra ba cách hiểu.",
  cauHoi:"Phát biểu nào phản ánh đúng nhất khái niệm hoá theo trị liệu HỆ THỐNG GIA ĐÌNH?",
  luaChon:[
    "“Em có niềm tin cốt lõi rằng mình vô dụng, dẫn tới các suy nghĩ tự động tiêu cực khi đến trường và hành vi né tránh.”",
    "“Hành vi của em cần được đọc trong bối cảnh gia đình: nó xuất hiện đúng lúc bố mẹ mâu thuẫn gay gắt và có tác dụng kéo hai người vào một nhiệm vụ chung, đồng thời ranh giới giữa các thế hệ trong nhà đang khá mờ.”",
    "“Sự chống đối của em là biểu hiện của xung đột chưa được giải quyết với người cha, được diễn ra thay vì được nhớ lại và nói thành lời.”",
    "“Hành vi của em được duy trì bởi củng cố âm: trốn học giúp em thoát khỏi lo âu về bài kiểm tra.”"
  ],
  dapAn:1,
  giaiThich:"Dấu hiệu nhận biết khái niệm hoá hệ thống là: đơn vị phân tích là mạng lưới quan hệ, triệu chứng được đọc như có chức năng trong hệ thống, và các khái niệm cấu trúc (ranh giới, phân cấp, tam giác) được huy động.",
  viSaoSai:[
    "Đây là khái niệm hoá theo CBT (mô hình nhận thức ba tầng).",
    "",
    "Đây là khái niệm hoá theo phân tâm (xung đột vô thức, acting out).",
    "Đây cũng là khái niệm hoá theo CBT, nhánh hành vi (mô hình hai yếu tố)."
  ]
}

]};
