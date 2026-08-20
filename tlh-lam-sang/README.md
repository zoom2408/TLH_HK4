# tlh-lam-sang — Nhập môn Tâm lý học Lâm sàng

Module môn học trong repo `TLH_HK4`, dựng theo đúng quy ước của `cac-tiep-can/`:
topbar + hub dữ liệu hoá + quiz trắc nghiệm tự chấm điểm. HTML/CSS/JS thuần, không cần build.

Môn này thi **trắc nghiệm tập trung** nên không có phần câu hỏi ngắn/tự luận.

## Cấu trúc

```
tlh-lam-sang/
├── index.html              # Mục lục môn — 3 nhánh trị liệu + link quiz
├── style.css               # CSS riêng (topbar, thẻ nhánh, bảng, quiz engine)
├── quiz.html               # Quiz 20/30/60 câu, tự chấm + xem lý giải đúng/sai
├── README.md
├── data/
│   ├── nhanh-tri-lieu.js       # Danh sách 3 nhánh (sửa 1 chỗ, mọi trang tự cập nhật)
│   ├── questions-cbt.js        # Ngân hàng — CBT (60 câu)
│   ├── questions-phan-tam.js   # — Lâm sàng định hướng phân tâm (76 câu)
│   └── questions-gia-dinh.js   # — Hệ thống gia đình (98 câu)
└── nhanh/
    ├── cbt.html
    ├── phan-tam.html
    └── he-thong-gia-dinh.html
```

Đối chiếu với `cac-tiep-can/`: `nhanh/` ↔ `tiep-can/`, `data/nhanh-tri-lieu.js` ↔
`data/approaches.js`, `data/questions-*.js` ↔ `data/quiz-bank.js` (tách làm 3 file
theo nhánh vì ngân hàng lớn — 234 câu).

## Trạng thái

| Phần | Trạng thái | Nguồn |
|---|---|---|
| Ngân hàng trắc nghiệm | **234 câu** — CBT 30+30, Phân tâm 38+38, Hệ thống gia đình 49+49, có lý giải đúng/sai từng phương án | |
| Quiz engine | Xong | |
| `nhanh/cbt.html` | **Đã đổ nội dung** — 10 mục | Slide Nguyễn Huỳnh Luân: *Cấu trúc các buổi làm việc*; *Làm việc trên các suy nghĩ & niềm tin* |
| `nhanh/phan-tam.html` | **Đã đổ nội dung** — 10 mục | Slide ThS. Phạm Ngọc Long: *Giới thiệu — Lâm sàng định hướng phân tâm*; *Trung gian trị liệu* |
| `nhanh/he-thong-gia-dinh.html` | **Đã đổ nội dung** — 10 mục I–X + bảng đối chiếu | Sổ tay chuyên đề **bản đầy đủ 6 trang**: ThS. Vương Nguyễn Toàn Thiện |

Cả ba ngân hàng đều viết bám sát tài liệu gốc của từng giảng viên, dùng đúng thuật ngữ
được dạy — *chuyển cảm / phản chuyển cảm*, *đồng nhất hoá*, *SNTĐ*, *định hình ca*,
*morphostasis / morphogenesis*, *bảng xoay nợ*, *phụ mẫu hoá*.

## CSS

Theo đúng quy ước repo — link `theme.css` dùng chung **trước**, rồi mới tới CSS riêng:

```html
<!-- index.html, quiz.html -->
<link rel="stylesheet" href="../assets/css/theme.css">
<link rel="stylesheet" href="style.css">

<!-- nhanh/*.html (sâu hơn 1 cấp) -->
<link rel="stylesheet" href="../../assets/css/theme.css">
<link rel="stylesheet" href="../style.css">
```

`style.css` **không** khai báo lại token màu/font, reset, `.eyebrow`, `.callout` hay
`.pill` — tất cả lấy từ `theme.css`, giống cách `cac-tiep-can/style.css` làm. Khối
`:root` ở đây chỉ thêm vài token riêng: `--ok`/`--bad` cho trạng thái chấm điểm và
`--cbt`/`--ptam`/`--httgd` cho màu nhận diện ba nhánh.

Nhãn thuật ngữ dùng `.pill` của theme kèm modifier màu theo nhánh:
`.pill--cbt`, `.pill--phan-tam`, `.pill--gia-dinh`, `.pill--ly-thuyet`,
`.pill--thuc-hanh`, `.pill--plain`.

Điều hướng: `index.html` dùng `.back-link` về landing page; `quiz.html` và `nhanh/*.html`
dùng `.topbar` với `a.back` + `.crumb` — cùng markup với `cac-tiep-can/`.

## Đổ nội dung cho một nhánh

Ba trang trong `nhanh/` đều đã có nội dung. Nếu bổ sung hoặc sửa: mỗi mục là một
`<section class="block">` với `.q-head` + `.q-no` + `.q-sub` làm tiêu đề.

Điền xong nhánh nào thì đặt `xong: true` trong `data/nhanh-tri-lieu.js`; nhãn trạng thái
trên trang mục lục và bảng tiến độ tự cập nhật.

Class dùng được ngay: `.callout` (ô nhấn mạnh, từ theme), `.pill` (nhãn thuật ngữ),
`.datatable` (bảng), `<h4>` (tiêu đề phụ in nghiêng), `.divider-end` (dòng kết).
Chú thích ôn thi viết bằng `<p class="q-sub" style="margin-left:0;">`.

## Quiz hoạt động thế nào

- **60 câu** — đề chuẩn: mỗi nhánh 10 lý thuyết + 10 tình huống.
- **30 câu** — đề ngắn: mỗi nhánh 5 + 5.
- **20 câu** — luyện riêng một nhánh: 10 + 10.
- Đáp án A–B–C–D xáo trộn mỗi lượt (tắt được); có tuỳ chọn trộn lẫn thứ tự các nhánh.
- Nộp bài → điểm tổng (số câu, %, thang 10), bảng điểm tách theo **nhánh** và theo
  **dạng câu**, danh sách **chủ đề sai nhiều nhất**.
- Mỗi câu hiện đáp án đúng, phương án đã chọn, lý do đúng và lý do sai của từng phương án.
- Bộ lọc: Tất cả / Chỉ câu sai / Chưa trả lời / Câu đúng. Có nút in ra PDF bản chữa.

| URL | Tác dụng |
|---|---|
| `quiz.html` | màn hình thiết lập |
| `quiz.html?branch=cbt` | mở sẵn đề 20 câu cho CBT (`phan-tam`, `gia-dinh` tương tự) |
| `quiz.html?mode=review` | đọc toàn bộ 234 câu kèm đáp án, không tính điểm |

## Thêm câu trắc nghiệm

Nối thêm object vào mảng `cauHoi` trong file `data/questions-*.js` tương ứng:

```js
{
  id:"CBT-LT-31",              // mã duy nhất
  loai:"ly-thuyet",            // "ly-thuyet" | "thuc-hanh"
  chuDe:"Mô hình nhận thức",   // dùng để thống kê chủ đề yếu
  boiCanh:"...",               // tuỳ chọn — đoạn tình huống lâm sàng
  cauHoi:"...",
  luaChon:["A...","B...","C...","D..."],
  dapAn:1,                     // chỉ số 0–3 của phương án đúng
  giaiThich:"Vì sao đáp án đúng là đúng.",
  viSaoSai:["Lý do A sai.", "", "Lý do C sai.", "Lý do D sai."]
}
```

`viSaoSai` phải có đúng 4 phần tử, phần tử ở vị trí `dapAn` để chuỗi rỗng.
Quy ước mã: `CBT` / `PT` / `GD` + `LT` hoặc `TH` + số thứ tự.
Dùng dấu nháy cong `"…"` cho ngoặc kép bên trong chuỗi để khỏi phải escape.

## Thêm một nhánh trị liệu mới

1. Tạo `nhanh/ten-nhanh.html` (copy một file có sẵn làm khung).
2. Tạo `data/questions-ten-nhanh.js`, đặt `window.QUIZ_BANK["ten-nhanh"] = {...}`.
3. Thêm object vào `data/nhanh-tri-lieu.js` với `ma: "ten-nhanh"`.
4. Thêm `<script src="data/questions-ten-nhanh.js"></script>` vào `index.html` và `quiz.html`.
5. Thêm modifier màu `.pill--ten-nhanh` và `.branch-card[data-branch="ten-nhanh"]` trong `style.css`.

## Chạy thử

```bash
# từ thư mục gốc repo
python3 -m http.server 8000
# rồi mở http://localhost:8000/tlh-lam-sang/
```

Mở thẳng bằng `file://` cũng chạy được vì dữ liệu nạp qua thẻ `<script>` chứ không phải `fetch`.
Không dùng `localStorage`, không phụ thuộc thư viện ngoài.
