/* =========================================================
   Danh sách 11 cách tiếp cận tham vấn trị liệu tâm lý
   — dựa trên slide bài giảng thật của giáo viên (11 bài, Drive)

   5 mục giáo viên yêu cầu nắm rõ, có ở mỗi approach:
   - name / founders    → Tên cách tiếp cận, Sáng lập chính
   - coreConcepts[]     → Các khái niệm cốt lõi
   - goal               → Mục tiêu trị liệu là gì
   - techniques[]       → Tên các kỹ thuật

   Thứ tự & nội dung khớp với 11 bài slide gốc (Bài 1–11).
   Đổi tên, thêm/bớt, hoặc sửa nội dung ngay tại đây — index.html
   (bảng tổng hợp nhanh + mục lục), quiz và câu hỏi ngắn đều đọc
   từ file này nên chỉ cần sửa một chỗ.
   ========================================================= */

const APPROACHES = [
  {
    id: "phan-tam-hoc",
    no: 1,
    name: "Trị liệu Phân tâm học",
    en: "Psychoanalytic Therapy",
    founders: "Sigmund Freud (1856–1939)",
    file: "tiep-can/01-phan-tam-hoc.html",
    coreConcepts: [
      "Cấu trúc nhân cách: Id (nguyên tắc thỏa mãn) – Ego (nguyên tắc thực tế) – Superego (nguyên tắc đạo đức)",
      "Ý thức – tiền ý thức – vô thức",
      "Lo âu: lo âu thực tế, lo âu nhiễu tâm, lo âu đạo đức",
      "Cơ chế tự vệ (11 loại): dồn nén, chối bỏ, thăng hoa, thoái lui, hình thành phản ứng ngược, phóng chiếu, chuyển di, hợp lý hóa, nội tâm hóa, đồng nhất hóa, bù trừ",
      "5 giai đoạn phát triển tâm tính dục: môi miệng – hậu môn – dương vật (Oedipus/Electra) – tiềm ẩn – phát dục"
    ],
    goal: "Đưa nội dung vô thức (xung đột, dồn nén) vào vùng ý thức; giúp thân chủ hiểu những nhiệm vụ chưa hoàn thành trong quá khứ, nhìn nhận xung đột bên trong và cơ chế tự vệ của mình.",
    techniques: [
      "Duy trì khung trị liệu (maintaining the analytic framework)",
      "Liên tưởng tự do (free association)",
      "Lý giải / diễn giải (interpretation)",
      "Phân tích giấc mơ (nội dung ẩn dấu – nội dung thể hiện)",
      "Phân tích & lý giải sự kháng cự (resistance)",
      "Phân tích & lý giải sự chuyển di (transference)"
    ]
  },
  {
    id: "tam-ly-ca-nhan-adler",
    no: 2,
    name: "Tâm lý học cá nhân (Adler)",
    en: "Adlerian Therapy",
    founders: "Alfred Adler (1870–1937)",
    file: "tiep-can/02-tam-ly-ca-nhan-adler.html",
    coreConcepts: [
      "Nhận thức chủ quan về thực tại khách quan (subjective perception of reality)",
      "Hành vi có chủ đích, hướng đến mục tiêu (teleological) — Fictional finalism",
      "Phấn đấu vì ý nghĩa & sự vượt trội — cảm giác tự ti và bù trừ",
      "Lối sống (lifestyle) — kế hoạch, cách nhìn nhận về bản thân/người khác/cuộc đời",
      "Quan tâm xã hội & thức cộng đồng (social interest); 3 nhiệm vụ sống: tình bạn, gắn bó, xã hội",
      "Thứ tự sinh & chòm sao gia đình (birth order and sibling relationships)"
    ],
    goal: "Giúp thân chủ nhận ra & điều chỉnh logic cá nhân (private logic) và những mục tiêu/giả định sai lầm hình thành từ thơ ấu, phát triển quan tâm xã hội, thấy được sự bình đẳng và giá trị riêng của mọi người.",
    techniques: [
      "Adlerian Brief Therapy (ABT) — 4 giai đoạn: thiết lập quan hệ, khám phá động lực tâm lý, động viên tự hiểu, hỗ trợ tái định hướng",
      "Phân tích chòm sao gia đình & thứ tự sinh",
      "Phân tích ký ức/trải nghiệm tuổi thơ (early recollections)",
      "Xác định ưu tiên cá nhân: nổi trội – kiểm soát – thoải mái – làm hài lòng",
      "Phát hiện 5 lỗi cơ bản trong logic cá nhân (khái quát hóa quá mức, mục tiêu bất khả thi, nhìn nhận sai về cuộc sống, hạ thấp giá trị bản thân, giá trị sai lầm)",
      "Khuyến khích (encouragement)"
    ]
  },
  {
    id: "hien-sinh",
    no: 3,
    name: "Trị liệu Hiện sinh",
    en: "Existential Therapy",
    founders: "Viktor Frankl (1905–1997), Rollo May (1909–1994)",
    file: "tiep-can/03-hien-sinh.html",
    coreConcepts: [
      "Mệnh đề 1 — Năng lực tự hiểu bản thân: con người có giới hạn (finite), có tiềm năng hành động hay không hành động",
      "Mệnh đề 2 — Tự do & trách nhiệm: con người là kết quả của lựa chọn của chính mình (\"We are our choice\")",
      "Mệnh đề 3 — Tìm kiếm bản sắc & xây dựng quan hệ với người khác: cô đơn là bản chất, dũng cảm để \"trở thành\"",
      "Mệnh đề 4 — Tìm kiếm ý nghĩa cuộc sống (kể cả trong đau khổ — logotherapy của Frankl)",
      "Mệnh đề 5 — Lo hãi là một điều kiện của cuộc sống (lo hãi bình thường vs lo hãi bệnh lý)",
      "Mệnh đề 6 — Nhận thức về cái chết & sự không tồn tại (nonbeing) như động lực để sống trọn vẹn hơn"
    ],
    goal: "Giúp thân chủ nhận ra cách sống chưa trọn vẹn, thách thức những gì đã hạn chế \"tự do\" của cá nhân, đối mặt với lo hãi hiện sinh, và đưa ra lựa chọn để trở thành người mình mong muốn — không phải \"chữa trị\" mà tăng cường nhận thức, thoát khỏi vị trí \"nạn nhân\".",
    techniques: [
      "Không có kỹ thuật cố định — bản thân nhà trị liệu là công cụ, quan hệ trị liệu (I/Thou) là yếu tố chính",
      "Đối thoại hiện sinh — làm rõ thế giới chủ quan hiện tại của thân chủ",
      "Logotherapy (Frankl) — tìm ý nghĩa qua công việc, tình yêu, đau khổ",
      "Đối diện trực tiếp với tự do, cô đơn, vô nghĩa, cái chết",
      "Đặt câu hỏi khai thác trải nghiệm chủ quan \"ở đây và bây giờ\""
    ]
  },
  {
    id: "than-chu-trong-tam",
    no: 4,
    name: "Trị liệu Thân chủ trọng tâm",
    en: "Person-Centered Therapy",
    founders: "Carl Rogers (1902–1987)",
    file: "tiep-can/04-than-chu-trong-tam.html",
    coreConcepts: [
      "Xu hướng hiện thực hóa (actualizing tendency) — con người đáng tin cậy, có khả năng tự hiểu & tự định hướng",
      "3 điều kiện cốt lõi: trung thực (congruence/genuineness), chấp nhận & quan tâm vô điều kiện (unconditional positive regard), thấu hiểu chính xác (accurate empathic understanding)",
      "4 giai đoạn phát triển lý thuyết: non-directive (1940s) → client-centered (1950s) → điều kiện cần cho trị liệu (1950s–70s) → person-centered (1980s–90s)",
      "Trải nghiệm của thân chủ: cởi mở với trải nghiệm, tin vào bản thân, đánh giá nguồn lực nội tại, sẵn sàng thay đổi",
      "Mối quan hệ TC–NTV mang tính bình đẳng, chính mối quan hệ tạo ra sự thay đổi"
    ],
    goal: "Tăng khả năng độc lập và kết nối của thân chủ; hỗ trợ TC tự trưởng thành, tự giải quyết vấn đề hiện tại và tương lai; giúp TC loại bỏ \"mặt nạ\" và kết nối tốt hơn với chính mình — nhà trị liệu không chọn mục tiêu thay TC.",
    techniques: [
      "Không dùng kỹ thuật chỉ định — thái độ của nhà trị liệu quan trọng hơn kỹ năng/lý thuyết",
      "Phản hồi cảm xúc (reflection of feeling) để hiểu cách nhìn của TC về thế giới",
      "Lắng nghe, chấp nhận, tôn trọng, thấu hiểu",
      "Có thể chia sẻ phản ứng/đối đầu thân thiện khi cần, tùy từng thân chủ",
      "Không đánh giá, không chẩn đoán, không định hướng tần suất/thời gian trị liệu"
    ]
  },
  {
    id: "gestalt",
    no: 5,
    name: "Trị liệu Gestalt",
    en: "Gestalt Therapy",
    founders: "Fritz Perls (1893–1970), Laura Perls (1905–1990)",
    file: "tiep-can/05-gestalt.html",
    coreConcepts: [
      "Tính tổng thể / toàn vẹn (Holism) — TC là chỉnh thể thống nhất của suy nghĩ, cảm xúc, mơ ước",
      "Hợp nhất với môi trường (Trường) & quá trình hình thành hình (figure-formation process)",
      "Khả năng tự điều chỉnh (organismic self-regulation)",
      "\"Ở đây và bây giờ\" (here-and-now) — trải nghiệm hiện tại quan trọng hơn lý giải nguyên nhân",
      "Việc dang dở (unfinished business) & sự bế tắc (impasse)",
      "6 rào cản của sự liên hệ/kết nối: nhập tâm (introjection), phóng chiếu (projection), hồi hướng (retroflection), chuyển hướng (deflection), hòa lẫn (confluence)"
    ],
    goal: "Giúp thân chủ hiểu biết nhiều hơn về bản thân, môi trường; đưa ra lựa chọn tốt hơn; nhận thức quá trình của chính mình, chịu trách nhiệm về trải nghiệm (nghĩ – cảm – hành động) và chuyển từ tìm hỗ trợ bên ngoài sang hỗ trợ bên trong.",
    techniques: [
      "Đối thoại nội tâm (top dog / under dog)",
      "Gia nhập và chia sẻ (making the rounds)",
      "Bài tập đảo ngược (reversal exercise)",
      "Luyện tập sắm vai như thực tế (rehearsal exercise)",
      "Bài tập phóng đại thể hiện cơ thể (exaggeration exercise)",
      "Sống với cảm xúc (staying with the feeling) & tiếp cận giấc mơ",
      "Kỹ năng đối đầu trực tiếp (\"Bạn nói… nhưng cử chỉ của bạn lại nói…\")"
    ]
  },
  {
    id: "hanh-vi",
    no: 6,
    name: "Trị liệu Hành vi",
    en: "Behavior Therapy",
    founders: "B.F. Skinner (1904–1990)",
    file: "tiep-can/06-hanh-vi.html",
    coreConcepts: [
      "4 hướng của tiếp cận hành vi: điều kiện hóa cổ điển (S–R), điều kiện hóa thao tác (củng cố/hậu quả), học tập xã hội (Bandura), nhận thức–hành vi",
      "Củng cố tích cực – củng cố tiêu cực – trừng phạt",
      "10 mệnh đề đặc trưng (Kazdin, Miltenberger…): dựa trên nguyên tắc khoa học, tập trung vấn đề hiện tại, TC chủ động, nhấn mạnh tự kiểm soát, hợp tác NTV–TC…",
      "Mô hình đánh giá chức năng hành vi (functional assessment)",
      "BASIC ID (Lazarus) — Behavior, Affect, Sensation, Imagery, Cognition, Interpersonal, Drugs/biology"
    ],
    goal: "Tăng khả năng lựa chọn cá nhân và tạo điều kiện cho việc học tập; TC cùng NTV xác định mục tiêu cụ thể, rõ ràng, đo lường được để thay đổi hành vi thiếu thích nghi thành hành vi thích nghi hơn.",
    techniques: [
      "Luyện tập thư giãn (relaxation training)",
      "Giải mẫn cảm hệ thống (systematic desensitization)",
      "Liệu pháp trải nghiệm / ngập tràn (exposure therapy)",
      "Giải mẫn cảm nhãn cầu & tái nhận thức (EMDR)",
      "Luyện tập tự khẳng định (assertion training)",
      "Chương trình tự quản lý bản thân (self-management)",
      "Mô hình kết hợp / Multimodal Therapy (BASIC ID — Arnold Lazarus)"
    ]
  },
  {
    id: "nhan-thuc-hanh-vi",
    no: 7,
    name: "Trị liệu Nhận thức – Hành vi",
    en: "Cognitive Behavior Therapy (CBT)",
    founders: "Albert Ellis (REBT), Aaron T. Beck (CT), Donald Meichenbaum (CBM)",
    file: "tiep-can/07-nhan-thuc-hanh-vi.html",
    coreConcepts: [
      "Mô hình A–B–C(–D–E–F) của Ellis: sự kiện – niềm tin – hệ quả cảm xúc/hành vi – tranh luận – hiệu ứng – cảm xúc mới",
      "Niềm tin phi lý (irrational beliefs) & tư duy \"phải\", \"dứt khoát\", \"luôn luôn\"",
      "Suy nghĩ tự động (automatic thoughts) & lỗi tư duy của Beck: kết luận thiếu chứng cứ, khái quát hóa quá mức, phóng đại/giảm thiểu, cá nhân hóa, dán nhãn, tư duy phân cực",
      "Lời tự nói với bản thân (self-verbalization) & huấn luyện tự chỉ dẫn (Meichenbaum)",
      "Chấp nhận bản thân vô điều kiện (USA) & chấp nhận người khác vô điều kiện (UOA)"
    ],
    goal: "Giúp thân chủ nhận ra niềm tin/suy nghĩ phi lý hoặc méo mó là nguyên nhân gây khó khăn cảm xúc – hành vi; học triết lý sống thực tế hơn; tái cấu trúc lại cách suy nghĩ để đạt cảm xúc & hành vi lành mạnh hơn.",
    techniques: [
      "Tranh luận (disputing) niềm tin phi lý — REBT",
      "Đối thoại Socratic & tái cấu trúc nhận thức — CT (Beck)",
      "Huấn luyện tự chỉ dẫn (self-instructional training) & Dự phòng căng thẳng SIT — CBM (Meichenbaum)",
      "Bài tập vượt xấu hổ (shame-attacking exercises)",
      "Điều chỉnh cảm xúc trong tưởng tượng (rational-emotive imagery)",
      "Bài tập về nhà, trị liệu qua đọc (bibliotherapy), ghi chép suy nghĩ tự động"
    ]
  },
  {
    id: "thuc-te",
    no: 8,
    name: "Trị liệu Thực tế / Lý thuyết lựa chọn",
    en: "Reality Therapy / Choice Theory",
    founders: "William Glasser (1925–2013), Robert E. Wubbolding",
    file: "tiep-can/08-thuc-te.html",
    coreConcepts: [
      "5 nhu cầu cơ bản: tồn tại, yêu thương & thuộc về, năng lực & thành công, tự do & độc lập, vui vẻ/tận hưởng",
      "Thế giới chất lượng (quality world) — nơi lưu trữ những gì ta mong muốn",
      "Thuyết lựa chọn (choice theory): mọi hành vi đều là lựa chọn, dùng ngôn ngữ \"chủ động\" thay vì \"bị động\"",
      "Hành vi tổng thể (total behavior): hành động – suy nghĩ – cảm xúc – sinh lý",
      "Hệ thống WDEP: Wants (điều mong muốn) – Direction/Doing (định hướng) – Evaluation (lượng giá) – Planning (kế hoạch)"
    ],
    goal: "Giúp thân chủ kết nối/tái kết nối với những người quan trọng trong \"thế giới chất lượng\" của mình; tự đánh giá xem hành vi hiện tại có giúp đạt được điều mong muốn không, từ đó chọn hành vi có trách nhiệm hơn.",
    techniques: [
      "Hệ thống WDEP (Wants – Direction/Doing – Evaluation – Planning)",
      "Câu hỏi tự đánh giá hành vi (self-evaluation questions)",
      "Kế hoạch SAMIC (simple, attainable, measurable, immediate, involved, controlled by planner)",
      "Không tập trung vào quá khứ, triệu chứng, hay sự chuyển di — chỉ tập trung hiện tại",
      "Môi trường tham vấn hỗ trợ, không chỉ trích/đổ lỗi/phàn nàn"
    ]
  },
  {
    id: "nu-quyen",
    no: 9,
    name: "Tiếp cận nữ quyền",
    en: "Feminist Therapy",
    founders: "Jean Baker Miller, Carolyn Zerbe Enns, Laura S. Brown, Olivia M. Espin",
    file: "tiep-can/09-nu-quyen.html",
    coreConcepts: [
      "Cá nhân – chính trị (\"the personal is political\") — vấn đề cá nhân có nguồn gốc xã hội/chính trị",
      "Giới & quyền lực trong quá trình tham vấn; tác động của văn hóa – xã hội đến TC nữ",
      "Các làn sóng nữ quyền: tự do, văn hóa, cấp tiến, xã hội (làn sóng 2); hậu hiện đại, da màu, đồng tính nữ, toàn cầu (làn sóng 3)",
      "Khuôn mẫu giới (gender role socialization — Chodorow, Sandra Bem, Kaschak)",
      "6 nguyên tắc của tiếp cận nữ quyền, trong đó có mối quan hệ tham vấn bình đẳng và coi trọng quan điểm/kinh nghiệm của nữ"
    ],
    goal: "Hướng tới bình đẳng, cân đối giữa độc lập và kết nối, nâng cao quyền năng (empowerment), coi trọng sự đa dạng; thay đổi ở cả cấp độ cá nhân lẫn xã hội, giúp TC hiểu áp lực xã hội về giới tác động đến cuộc sống mình.",
    techniques: [
      "Nâng cao quyền năng (empowerment) — thỏa thuận trị liệu do TC đề xuất",
      "Chia sẻ bản thân của nhà trị liệu (self-disclosure)",
      "Phân tích vai trò giới & can thiệp vai trò giới (gender-role analysis/intervention)",
      "Phân tích quyền năng (power analysis)",
      "Trị liệu thông qua đọc (bibliotherapy) & luyện tập tự khẳng định",
      "Đổi hướng suy nghĩ/dán nhãn (reframing/relabeling), trị liệu nhóm, tham gia hoạt động xã hội"
    ]
  },
  {
    id: "hau-hien-dai",
    no: 10,
    name: "Các tiếp cận hậu hiện đại",
    en: "Postmodern Approaches (Solution-Focused & Narrative Therapy)",
    founders: "Insoo Kim Berg, Steve de Shazer (SFBT); Michael White, David Epston (Narrative)",
    file: "tiep-can/10-hau-hien-dai.html",
    coreConcepts: [
      "Kiến tạo xã hội (social constructionism) — thực tại được hiểu qua bối cảnh, lịch sử và ngôn ngữ",
      "Giải kiến tạo (deconstruction) & TC là chuyên gia về chính vấn đề của mình",
      "Tập trung giải pháp (Solution-Focused): định hướng tích cực, tìm điều đang hiệu quả, tình huống \"loại trừ\"",
      "Kể chuyện/tự thuật (Narrative): diễn ngôn thống trị (dominant discourse), ngoại tâm hóa vấn đề (externalization), kết quả khác biệt (unique outcomes)",
      "Cách tiếp cận hệ thống hợp tác ngôn ngữ — nhà trị liệu ở vị trí \"không biết\" (not-knowing position)"
    ],
    goal: "Giúp TC chuyển từ tập trung vấn đề sang tập trung giải pháp/tương lai mong muốn; tách biệt bản thân khỏi câu chuyện vấn đề mang tính diễn ngôn để viết lại (re-author) một câu chuyện cuộc đời mới, trao quyền hơn.",
    techniques: [
      "Câu hỏi phép thuật (miracle question)",
      "Câu hỏi tình huống loại trừ (exception question)",
      "Câu hỏi thang đo (scaling question, 0–10)",
      "Ngoại tâm hóa & tái cấu trúc vấn đề (externalizing, tách con người khỏi vấn đề)",
      "Câu hỏi vòng (circular questions) & tìm kết quả khác biệt (unique outcomes)",
      "Tài liệu hóa thông tin — viết thư tóm tắt buổi làm việc"
    ]
  },
  {
    id: "he-thong-gia-dinh",
    no: 11,
    name: "Trị liệu Hệ thống gia đình",
    en: "Family Systems Therapy",
    founders: "Alfred Adler, Murray Bowen, Virginia Satir, Carl Whitaker, Salvador Minuchin, Jay Haley",
    file: "tiep-can/11-he-thong-gia-dinh.html",
    coreConcepts: [
      "Hiểu cá nhân trong mối tương quan với gia đình — vấn đề TC có thể là hành vi có mục đích hoặc đang duy trì/thực hiện một chức năng của gia đình",
      "8 lăng kính/hướng tiếp cận hệ thống: hệ thống cá nhân nội tại, mục tiêu, trình tự tương tác, tổ chức, phát triển, đa văn hóa, giới, tiến trình",
      "Tam giác hóa (triangulation) & phân hóa bản thân (differentiation of self) — Bowen",
      "Cấu trúc, ranh giới, tiểu hệ thống — Minuchin",
      "Thứ tự sinh & chòm sao gia đình — Adler; kết nối gia đình & giao tiếp — Satir"
    ],
    goal: "Thay đổi cấu trúc và mẫu tương tác rối loạn chức năng trong hệ thống gia đình (chứ không chỉ chữa triệu chứng của một cá nhân); tăng khả năng phân hóa bản thân, giao tiếp và kết nối lành mạnh của từng thành viên.",
    techniques: [
      "4 bước can thiệp: thiết lập mối quan hệ – đánh giá – đưa giả thuyết/chia sẻ ý nghĩa – thúc đẩy thay đổi",
      "Cây phả hệ (genogram) qua 3 thế hệ",
      "Câu hỏi vòng để thu thập thông tin theo từng lăng kính tiếp cận",
      "Hóa giải tam giác hóa (detriangulation)",
      "Tái cấu trúc ranh giới & vai trò trong gia đình",
      "Nhóm phản hồi / đối thoại về cuộc đối thoại (Tom Andersen)"
    ]
  }
];

if (typeof module !== "undefined") module.exports = APPROACHES;
