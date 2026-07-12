# Ôn thi Học kỳ 4

Trang web tĩnh (HTML/CSS/JS thuần, không cần build) tổng hợp dàn ý ôn thi cho các môn Tâm lý học kỳ 4. Trang chủ liệt kê các môn học; mỗi môn có một thư mục riêng chứa trang ôn tập của mình.

## Cấu trúc thư mục

```
.
├── index.html              # Trang chủ (landing page) — danh sách các môn học
├── assets/
│   ├── css/
│   │   ├── theme.css       # Design tokens dùng chung: màu sắc, font, reset, .callout, .pill, .eyebrow...
│   │   └── landing.css     # CSS riêng cho trang chủ
│   └── material/           # Giáo trình / sách / PDF nguồn — thả file trực tiếp vào đây
│       └── README.md       # Ghi chú tên file cần có cho từng môn
├── tlh-ton-giao/            # Môn: Tâm lý học Tôn giáo
│   ├── index.html           # Trang ôn tập (5 câu hỏi, trích dẫn đối chiếu, đáp án mẫu 3 giọng văn)
│   └── style.css            # CSS riêng cho trang này (tabs, drawer, citation, đáp án mẫu...)
└── cac-tiep-can/            # Môn: Các tiếp cận tham vấn trị liệu tâm lý
    ├── index.html           # Mục lục môn — 11 cách tiếp cận + link quiz/câu hỏi ngắn
    ├── style.css            # CSS riêng (hub, quiz engine, câu hỏi ngắn/văn mẫu, drawer)
    ├── quiz.html            # Quiz trắc nghiệm 3 phiên bản 20/30/60 câu, tự chấm điểm + xem lại
    ├── cau-hoi-ngan.html    # Danh sách câu hỏi ngắn, mỗi câu kèm 3 văn mẫu tham khảo
    ├── data/
    │   ├── approaches.js    # Danh sách 11 cách tiếp cận (sửa 1 chỗ, mọi trang tự cập nhật)
    │   ├── quiz-bank.js     # Ngân hàng câu hỏi trắc nghiệm (đang là bộ demo)
    │   └── short-answers.js # Câu hỏi ngắn + văn mẫu (đang là bộ demo)
    └── tiep-can/            # 11 file con, mỗi file 1 cách tiếp cận (khung sườn, nội dung điền dần)
```

**Lưu ý:** nút "Tải giáo trình gốc Vũ Dũng (PDF)" ở `tlh-ton-giao/index.html` trỏ tới `../assets/material/Giao trinh Tam ly hoc tam linh - ton giao_Vu Dung.pdf` — cần thả đúng file PDF này vào `assets/material/` để nút hoạt động (xem `assets/material/README.md`).

**Về `cac-tiep-can/`:** đây mới là khung sườn — nội dung chi tiết của 11 cách tiếp cận trong `tiep-can/*.html` còn để placeholder, và `data/quiz-bank.js` / `data/short-answers.js` mới có bộ câu hỏi demo. Thêm câu hỏi/cách tiếp cận mới bằng cách sửa trực tiếp trong các file `data/*.js` (có hướng dẫn ngay trong comment đầu mỗi file) — `index.html`, `quiz.html` và `cau-hoi-ngan.html` đều đọc từ đó nên không cần sửa HTML.

Mỗi môn học mới chỉ cần thêm một thư mục mới (ví dụ `tlh-lam-sang/`) với `index.html` + `style.css` riêng, rồi link tới `../assets/css/theme.css` để dùng chung bộ màu/font/typography — không cần lặp lại CSS nền tảng. Giáo trình/PDF cho môn mới cũng thả chung vào `assets/material/`.

## Thêm một môn học mới

1. Tạo thư mục mới, ví dụ `tlh-lam-sang/`.
2. Copy `tlh-ton-giao/index.html` làm khung sườn (tab rail, reading column, drawer trích dẫn nếu cần), rồi thay nội dung.
3. Trong `<head>`, link `../assets/css/theme.css` trước, rồi link file CSS riêng của môn đó (ví dụ `./style.css`).
4. Thêm một thẻ `<a class="subject-card subject-card--active">` mới vào `index.html` ở gốc, trỏ tới `tlh-lam-sang/index.html`.
5. Nếu có giáo trình PDF, thả vào `assets/material/` rồi trỏ link tải tới `../assets/material/ten-file.pdf`.

## Chạy thử ở máy local

Không cần cài gì thêm — mở thẳng `index.html` bằng trình duyệt, hoặc chạy một server tĩnh đơn giản:

```bash
python3 -m http.server 8000
# rồi mở http://localhost:8000
```

## Deploy lên GitHub Pages

1. Tạo repo trên GitHub, push toàn bộ thư mục này lên nhánh `main`.
2. Vào **Settings → Pages**, chọn nguồn build là nhánh `main`, thư mục `/ (root)`.
3. Trang sẽ chạy tại `https://<username>.github.io/<repo>/`.

## Nguồn tài liệu

Nội dung môn Tâm lý học Tôn giáo dựa trên giáo trình: Vũ Dũng, *Tâm lý học tôn giáo*, Viện Tâm lý học, NXB Khoa học Xã hội, Hà Nội, 1998 — kết hợp thêm ví dụ liên hệ thực tế. Tài liệu tổng hợp phục vụ mục đích ôn tập cá nhân, không thay thế giáo trình chính thức.
