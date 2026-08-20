/* ============================================================
   DANH SÁCH CÁC NHÁNH TRỊ LIỆU — Nhập môn Tâm lý học Lâm sàng
   (tương ứng với data/approaches.js của cac-tiep-can/)
   ------------------------------------------------------------
   Sửa ở đây là index.html, quiz.html tự cập nhật — không cần
   đụng vào HTML.

   Mỗi mục:
     ma      : mã nhánh, PHẢI trùng key trong window.QUIZ_BANK
               và trùng hậu tố class .chip--<ma> trong style.css
     ten     : tên hiển thị đầy đủ
     tenNgan : tên ngắn dùng cho tab rail và nhãn
     enTen   : tên tiếng Anh
     file    : đường dẫn trang nhánh (tương đối từ index.html)
     tomTat  : mô tả 1–2 câu trên thẻ ở trang chủ
     tuKhoa  : các từ khoá/nhân vật chính, hiện dạng .pill
     nguon   : slide/tài liệu gốc của nhánh
     xong    : true khi đã đổ xong nội dung lý thuyết
   ============================================================ */

window.NHANH_TRI_LIEU = [
  {
    ma: "cbt",
    ten: "Trị liệu Nhận thức – Hành vi",
    tenNgan: "CBT",
    enTen: "Cognitive Behavioural Therapy",
    file: "nhanh/cbt.html",
    tomTat: "Hai chuyên đề đã học: cấu trúc ba loại phiên làm việc (đánh giá – phiên đầu tiên – các phiên tiếp theo) và cách làm việc trên suy nghĩ tự động cùng niềm tin.",
    tuKhoa: ["phiên đánh giá", "định hình ca", "agenda", "SNTĐ", "niềm tin cốt lõi", "mũi tên đi xuống", "8 kỹ thuật điều chỉnh niềm tin"],
    nguon: "Slide: Nguyễn Huỳnh Luân — MSc, Swansea University",
    xong: true
  },
  {
    ma: "phan-tam",
    ten: "Lâm sàng định hướng phân tâm",
    tenNgan: "Phân tâm",
    enTen: "Psychoanalytically-oriented Clinical Psychology",
    file: "nhanh/phan-tam.html",
    tomTat: "Hai chuyên đề đã học: giới thiệu lâm sàng định hướng phân tâm (tâm thế lâm sàng, ba thành tố, chuyển cảm – phản chuyển cảm, năm hoạt động trong phòng) và trung gian trị liệu.",
    tuKhoa: ["đau khổ – than vãn – yêu cầu", "đồng nhất hoá", "chuyển cảm", "phản chuyển cảm", "chú ý lửng lơ", "im lặng", "liên tưởng tự do", "tranh vẽ hình người", "khung trị liệu", "nhiễu tâm · ranh giới · loạn tâm"],
    nguon: "Slide: ThS. Phạm Ngọc Long",
    xong: true
  },
  {
    ma: "gia-dinh",
    ten: "Trị liệu Hệ thống – Gia đình",
    tenNgan: "Gia đình",
    enTen: "Family Systems Therapy",
    file: "nhanh/he-thong-gia-dinh.html",
    tomTat: "Bản đầy đủ của sổ tay chuyên đề: khung pháp lý hành nghề, lý thuyết hệ thống tổng quát, nhân quả vòng tròn, chu kỳ đời sống gia đình, 5 tiên đề giao tiếp Watzlawick, 5 kiểu ứng phó Satir, liệu pháp bối cảnh xuyên thế hệ, 4 điển cứu lâm sàng và kỹ thuật genogram.",
    tuKhoa: ["Nghị định 96/2023", "von Bertalanffy", "phản hồi âm / dương", "McGoldrick — 6 giai đoạn", "5 tiên đề Watzlawick", "5 kiểu ứng phó Satir", "Minuchin · Bowen · Haley", "Böszörményi-Nagy", "thiên vị đa hướng", "miễn trừ", "bảng xoay nợ", "phụ mẫu hoá", "genogram", "4 điển cứu"],
    nguon: "Sổ tay chuyên đề (bản đầy đủ, 6 trang) — ThS. Vương Nguyễn Toàn Thiện",
    xong: true
  }
];
