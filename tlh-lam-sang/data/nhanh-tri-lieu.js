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
    tuKhoa: ["đau khổ – than vãn – yêu cầu", "đồng nhất hoá", "chuyển cảm", "phản chuyển cảm", "chú ý lửng lơ", "im lặng", "liên tưởng tự do", "tranh vẽ hình người"],
    nguon: "Slide: ThS. Phạm Ngọc Long",
    xong: true
  },
  {
    ma: "gia-dinh",
    ten: "Trị liệu Hệ thống gia đình",
    tenNgan: "Gia đình",
    enTen: "Family Systems Therapy",
    file: "nhanh/he-thong-gia-dinh.html",
    tomTat: "Vấn đề nằm trong quan hệ chứ không nằm trong một cá nhân; can thiệp nhắm vào ranh giới, phân cấp, tam giác và các vòng lặp tương tác.",
    tuKhoa: ["Bowen", "Minuchin", "Haley", "Milan", "nhân quả vòng tròn", "genogram", "tự sự · giải pháp"],
    nguon: "Chờ bản PDF có lớp text (bản hiện tại là scan)",
    xong: false
  }
];
