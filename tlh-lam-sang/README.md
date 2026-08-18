# tlh-lam-sang — Nhập môn Tâm lý học Lâm sàng

Module môn học cho repo [`TLH_HK4`](https://github.com/zoom2408/TLH_HK4), dựng theo đúng
quy ước của `cac-tiep-can/`: hub dữ liệu hoá + quiz trắc nghiệm tự chấm điểm,
HTML/CSS/JS thuần, không cần build.

## Cấu trúc

```
tlh-lam-sang/
├── index.html              # Mục lục môn — 3 nhánh + link quiz
├── style.css               # CSS riêng (hub, thẻ nhánh, quiz engine)
├── quiz.html               # Quiz 3 phiên bản 20/30/60 câu, tự chấm + xem lại
├── README.md
├── data/
│   ├── nhanh-tri-lieu.js   # Danh sách 3 nhánh (sửa 1 chỗ, mọi trang tự cập nhật)
│   ├── questions-cbt.js    # Ngân hàng trắc nghiệm — CBT (60 câu)
│   ├── questions-phan-tam.js   # — Phân tâm (60 câu)
│   └── questions-gia-dinh.js   # — Hệ thống gia đình (60 câu)
└── nhanh/                  # 3 file con, mỗi file 1 nhánh trị liệu (khung sườn)
    ├── cbt.html
    ├── phan-tam.html
    └── he-thong-gia-dinh.html
```

Đối chiếu với `cac-tiep-can/`: `nhanh/` ↔ `tiep-can/`, `data/nhanh-tri-lieu.js` ↔
`data/approaches.js`, `data/questions-*.js` ↔ `data/quiz-bank.js` (tách làm 3 file
theo nhánh vì ngân hàng lớn — 180 câu). Môn này **không có phần câu hỏi ngắn/tự luận** —
hình thức thi là trắc nghiệm tập trung.

## Trạng thái

| Phần | Trạng thái |
|---|---|
| Ngân hàng trắc nghiệm | **180 câu đầy đủ** — mỗi nhánh 30 lý thuyết + 30 tình huống, có lý giải đúng/sai từng phương án |
| Quiz engine | Xong |
| Nội dung 3 nhánh trong `nhanh/` | **Khung sườn** — 8 mục/nhánh, còn placeholder |

## CSS: quy ước link

Theo đúng README gốc của repo — link `theme.css` dùng chung **trước**, rồi mới tới CSS riêng:

```html
<!-- ở index.html và quiz.html -->
<link rel="stylesheet" href="../assets/css/theme.css">
<link rel="stylesheet" href="style.css">

<!-- ở nhanh/*.html (sâu hơn 1 cấp) -->
<link rel="stylesheet" href="../../assets/css/theme.css">
<link rel="stylesheet" href="../style.css">
```

Khối `:root` trong `style.css` ghim bảng màu riêng của môn (cùng hệ paper/maroon/gold
với `tlh-ton-giao/`) nên trang vẫn hiển thị đúng kể cả khi mở lẻ không có `theme.css`.
Nếu muốn môn này ăn theo đúng màu của `theme.css`, chỉ cần xoá các dòng token tương ứng
trong `:root` — phần còn lại của file không phải sửa gì. Lớp `.pill` được định nghĩa
đồng nghĩa với `.chip` để dùng chung tên gọi với các module khác.

## Thêm module này vào trang chủ repo

Chèn vào `index.html` ở gốc repo, cạnh các thẻ môn khác:

```html
<a class="subject-card subject-card--active" href="tlh-lam-sang/index.html">
  <p class="eyebrow">Học kỳ 4</p>
  <h2>Nhập môn Tâm lý học Lâm sàng</h2>
  <p>Ba nhánh trị liệu sẽ thi — CBT, Phân tâm, Hệ thống gia đình —
     kèm ngân hàng 180 câu trắc nghiệm tự chấm điểm.</p>
  <span class="pill">3 nhánh</span>
  <span class="pill">180 câu trắc nghiệm</span>
  <span class="pill">quiz 20/30/60</span>
</a>
```

## Đổ nội dung cho 3 nhánh

Mỗi trang trong `nhanh/` dựng sẵn 8 mục theo cùng một khung, để câu hỏi so sánh chéo
giữa ba nhánh làm được ngay:

1. Bối cảnh & lịch sử hình thành
2. Quan niệm về bệnh lý tâm thần
3. Mục tiêu trị liệu
4. Khái niệm cốt lõi
5. Kỹ thuật can thiệp
6. Tiến trình một ca trị liệu
7. Bằng chứng thực nghiệm & hạn chế
8. Đối chiếu với hai nhánh còn lại

Chỗ cần điền là các khối `<div class="placeholder"> … </div>` — thay cả khối bằng nội dung thật.
Điền xong nhánh nào thì đổi `xong: false` → `xong: true` trong `data/nhanh-tri-lieu.js`;
nhãn trạng thái trên trang chủ và bảng tiến độ tự cập nhật.

Class dùng được ngay: `.callout` (ô nhấn mạnh), `.pill` / `.chip` (nhãn thuật ngữ),
`.scoretable` (bảng so sánh), `<h4>` (tiêu đề phụ in nghiêng), `.divider-end` (dòng kết).

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
| `quiz.html?mode=review` | đọc toàn bộ 180 câu kèm đáp án, không tính điểm |

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

## Thêm một nhánh trị liệu mới

1. Tạo `nhanh/ten-nhanh.html` (copy một file có sẵn làm khung).
2. Tạo `data/questions-ten-nhanh.js`, đặt `window.QUIZ_BANK["ten-nhanh"] = {...}`.
3. Thêm object vào `data/nhanh-tri-lieu.js` với `ma: "ten-nhanh"`.
4. Thêm `<script src="data/questions-ten-nhanh.js"></script>` vào `index.html` và `quiz.html`.
5. Thêm màu nhận diện `.chip--ten-nhanh` trong `style.css`.

## Chạy thử

```bash
# từ thư mục gốc repo
python3 -m http.server 8000
# rồi mở http://localhost:8000/tlh-lam-sang/
```

Mở thẳng bằng `file://` cũng chạy được vì dữ liệu nạp qua thẻ `<script>` chứ không phải `fetch`.
Không dùng `localStorage`, không phụ thuộc thư viện ngoài.
