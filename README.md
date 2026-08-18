# Ôn thi Học kỳ 4

Trang web tĩnh (HTML/CSS/JS thuần, không cần build) tổng hợp dàn ý ôn thi cho các môn Tâm lý học kỳ 4. Trang chủ liệt kê các môn học; mỗi môn có một thư mục riêng chứa trang ôn tập của mình.

## Cấu trúc thư mục

```
.
├── index.html               # Trang chủ (landing page) — danh sách các môn học
├── assets/
│   ├── css/
│   │   ├── theme.css        # Design tokens dùng chung: màu, font, reset, .callout, .pill, .eyebrow
│   │   └── landing.css      # CSS riêng cho trang chủ
│   ├── img/
│   │   └── hero.png         # Ảnh minh hoạ trang chủ
│   └── material/            # Giáo trình / sách / PDF nguồn — thả file trực tiếp vào đây
│       └── README.md        # Ghi chú tên file cần có cho từng môn
│
├── tlh-ton-giao/            # Môn: Tâm lý học Tôn giáo
│   ├── index.html           # Trang ôn tập (5 câu hỏi, trích dẫn đối chiếu, đáp án mẫu 3 giọng văn)
│   └── style.css            # CSS riêng (tab rail dọc, drawer trích dẫn, đáp án mẫu…)
│
├── cac-tiep-can/            # Môn: Các tiếp cận tham vấn trị liệu tâm lý
│   ├── index.html           # Mục lục môn — 11 cách tiếp cận + link quiz / câu hỏi ngắn / so sánh
│   ├── style.css            # CSS riêng (topbar, hub, quiz engine, câu hỏi ngắn, drawer, ma trận so sánh)
│   ├── quiz.html            # Quiz trắc nghiệm 20/30/60 câu, tự chấm điểm + xem lại
│   ├── cau-hoi-ngan.html    # Câu hỏi ngắn, mỗi câu kèm 3 văn mẫu tham khảo
│   ├── so-sanh.html         # Ma trận so sánh 11 cách tiếp cận (in được khổ ngang)
│   ├── data/
│   │   ├── approaches.js    # Danh sách 11 cách tiếp cận (sửa 1 chỗ, mọi trang tự cập nhật)
│   │   ├── quiz-bank.js     # Ngân hàng câu hỏi trắc nghiệm (đang là bộ demo)
│   │   ├── short-answers.js # Câu hỏi ngắn + văn mẫu (đang là bộ demo)
│   │   └── comparison.js    # Dữ liệu cho ma trận so sánh
│   └── tiep-can/            # 11 file con, mỗi file 1 cách tiếp cận (khung sườn, nội dung điền dần)
│
└── tlh-lam-sang/            # Môn: Nhập môn Tâm lý học Lâm sàng
    ├── index.html           # Mục lục môn — 3 nhánh trị liệu + link quiz
    ├── style.css            # CSS riêng (topbar, thẻ nhánh, bảng, quiz engine)
    ├── quiz.html            # Quiz 20/30/60 câu, tự chấm + lý giải đúng/sai từng phương án
    ├── README.md            # Hướng dẫn riêng của môn (schema câu hỏi, cách thêm nhánh…)
    ├── data/
    │   ├── nhanh-tri-lieu.js       # Danh sách 3 nhánh (sửa 1 chỗ, mọi trang tự cập nhật)
    │   ├── questions-cbt.js        # Ngân hàng — CBT (60 câu)
    │   ├── questions-phan-tam.js   # — Lâm sàng định hướng phân tâm (60 câu)
    │   └── questions-gia-dinh.js   # — Hệ thống gia đình (60 câu)
    └── nhanh/
        ├── cbt.html
        ├── phan-tam.html
        └── he-thong-gia-dinh.html
```

## Quy ước giao diện dùng chung

Ba điều cần giữ đúng khi thêm hoặc sửa bất kỳ trang nào:

**1. Thứ tự link CSS** — `theme.css` dùng chung link **trước**, CSS riêng của môn link **sau**:

```html
<!-- trang ở cấp 1, ví dụ cac-tiep-can/index.html -->
<link rel="stylesheet" href="../assets/css/theme.css">
<link rel="stylesheet" href="style.css">

<!-- trang ở cấp 2, ví dụ tlh-lam-sang/nhanh/cbt.html -->
<link rel="stylesheet" href="../../assets/css/theme.css">
<link rel="stylesheet" href="../style.css">
```

**2. Không khai báo lại thứ đã có ở `theme.css`** — token màu/font, reset, `.eyebrow`, `.callout`, `.pill` đều nằm ở đó. File CSS của môn chỉ chứa bố cục và component riêng, cộng thêm vài token phụ trong một khối `:root` nhỏ nếu cần (ví dụ `--ok` / `--bad` cho trạng thái chấm điểm).

**3. Bề rộng container** — cột nội dung `.reading` (và `.quiz-shell`) dùng **`max-width:980px`** ở mọi môn, với padding `44px clamp(20px,5vw,72px)`. Trang chủ dùng `.page` = 960px vì đó là container khác loại (hero + lưới thẻ môn).

Điều hướng: trang mục lục của môn dùng `.back-link` để quay về trang chủ; các trang con dùng `.topbar` gồm `a.back` + `.crumb`.

## Trạng thái từng môn

| Môn | Nội dung | Ngân hàng câu hỏi |
|---|---|---|
| **Tâm lý học Tôn giáo** | Xong — 5 câu hỏi ôn tập kèm trích dẫn đối chiếu | — |
| **Các tiếp cận tham vấn trị liệu tâm lý** | Khung sườn — 11 file trong `tiep-can/` còn placeholder | Bộ demo |
| **Nhập môn Tâm lý học Lâm sàng** | CBT và Lâm sàng định hướng phân tâm đã bám sát slide bài giảng; Hệ thống gia đình còn khung sườn | **180 câu đầy đủ** |

**Về `tlh-lam-sang/`:** nhánh Hệ thống gia đình chưa đổ nội dung vì bản PDF nguồn là bản scan, chưa trích được text. Môn này thi trắc nghiệm tập trung nên không có phần câu hỏi ngắn/tự luận. Xem `tlh-lam-sang/README.md` để biết schema câu hỏi và cách thêm nhánh mới.

**Về `cac-tiep-can/`:** nội dung chi tiết 11 cách tiếp cận còn để placeholder; `data/quiz-bank.js` và `data/short-answers.js` mới có bộ câu hỏi demo.

**Lưu ý:** nút "Tải giáo trình gốc Vũ Dũng (PDF)" ở `tlh-ton-giao/index.html` trỏ tới `../assets/material/Giao trinh Tam ly hoc tam linh - ton giao_Vu Dung.pdf` — cần thả đúng file PDF này vào `assets/material/` để nút hoạt động (xem `assets/material/README.md`).

## Nguyên tắc dữ liệu hoá

Hai môn `cac-tiep-can/` và `tlh-lam-sang/` đều tách nội dung ra các file trong `data/*.js`. Trang mục lục, quiz và các trang con đều đọc từ đó, nên **thêm hoặc sửa nội dung chỉ cần đụng vào `data/`, không phải sửa HTML**. Mỗi file `data/*.js` có comment hướng dẫn schema ngay ở đầu file.

## Thêm một môn học mới

1. Tạo thư mục mới, ví dụ `tlh-lam-sang/`.
2. Copy `cac-tiep-can/` hoặc `tlh-lam-sang/` làm khung sườn — hai môn này dùng cấu trúc mới (topbar + hub dữ liệu hoá + quiz engine). `tlh-ton-giao/` là bản cũ với tab rail dọc, chỉ nên tham khảo phần drawer trích dẫn.
3. Trong `<head>`, link `../assets/css/theme.css` trước, rồi link CSS riêng của môn.
4. Giữ đúng ba quy ước giao diện ở mục trên (thứ tự link, không khai báo trùng, container 980px).
5. Thêm một thẻ `<a class="subject-card subject-card--active">` vào `index.html` ở gốc, trỏ tới `ten-mon/index.html`. Nếu môn chưa xong thì dùng `<div class="subject-card subject-card--soon">` để hiện nhãn "Sắp có".
6. Nếu có giáo trình PDF, thả vào `assets/material/` rồi trỏ link tải tới `../assets/material/ten-file.pdf`.

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

- **Tâm lý học Tôn giáo** — Vũ Dũng, *Tâm lý học tôn giáo*, Viện Tâm lý học, NXB Khoa học Xã hội, Hà Nội, 1998, kết hợp ví dụ liên hệ thực tế.
- **Các tiếp cận tham vấn trị liệu tâm lý** — khung 11 cách tiếp cận theo Corey.
- **Nhập môn Tâm lý học Lâm sàng** — slide bài giảng: Nguyễn Huỳnh Luân (CBT) và ThS. Phạm Ngọc Long (lâm sàng định hướng phân tâm).

Tài liệu tổng hợp phục vụ mục đích ôn tập cá nhân, không thay thế giáo trình chính thức.
