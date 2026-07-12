/* =========================================================
   DANH SÁCH CÂU HỎI NGẮN (SHORT ANSWER) + VĂN MẪU
   Môn: Các tiếp cận tham vấn trị liệu tâm lý

   Đề thi thật: 2 câu tự luận, thiên về cảm nghĩ cá nhân — "bạn sẽ
   chọn cách tiếp cận nào và vì sao", khá thực tế/cá nhân hoá. Hai
   câu đầu tiên bên dưới (examQuestion: true) đúng format đó — được
   cau-hoi-ngan.html hiển thị nổi bật riêng ở đầu trang.

   Vì đây là câu hỏi cảm nghĩ cá nhân, KHÔNG có một "đáp án đúng"
   duy nhất — 3 văn mẫu của mỗi câu minh hoạ 3 lựa chọn approach
   khác nhau, để thấy KHUNG lập luận (chọn gì → gắn với khái niệm
   cốt lõi/mục tiêu của approach đó → lý do cá nhân/giá trị →
   ví dụ cụ thể) rồi tự viết theo lựa chọn thật của mình.

   CÁCH THÊM CÂU HỎI MỚI — copy 1 object bên dưới rồi sửa:
   {
     id: "duy nhất — vd 'sa07'",
     approachId: "id khớp data/approaches.js, hoặc '' nếu câu tổng hợp/so sánh",
     examQuestion: true,  // chỉ đặt true cho câu đúng format đề thi thật
     question: "Nội dung câu hỏi ngắn",
     samples: [
       { label: "Văn mẫu 1", html: "...đoạn trả lời dạng <p>...</p>..." },
       { label: "Văn mẫu 2", html: "..." },
       { label: "Văn mẫu 3", html: "..." }
     ]
   }
   ========================================================= */

const SHORT_ANSWERS = [
  {
    id: "sa-exam-1",
    approachId: "",
    examQuestion: true,
    question: "Trong 11 cách tiếp cận đã học, bạn sẽ chọn cách tiếp cận nào làm nền tảng triết lý cho phong cách tham vấn của bản thân trong tương lai? Vì sao?",
    samples: [
      {
        label: "Văn mẫu 1 — chọn Thân chủ trọng tâm",
        html: `<p>Nếu phải chọn một nền tảng triết lý cho phong cách tham vấn của mình, tôi sẽ chọn Trị liệu Thân chủ trọng tâm của Carl Rogers. Lý do đầu tiên đến từ chính tính cách của tôi: tôi luôn có xu hướng lắng nghe nhiều hơn là đưa ra lời khuyên, và tôi tin rằng phần lớn mọi người — kể cả khi đang bế tắc — đều mang trong mình đủ nguồn lực để tự tìm ra hướng đi cho chính họ, chỉ là họ cần một không gian đủ an toàn để làm điều đó.</p>
        <p>Điều khiến tôi thực sự tin vào cách tiếp cận này là ba điều kiện cốt lõi mà Rogers đề ra: chân thành, thấu cảm và tôn trọng vô điều kiện. Tôi từng có một người bạn trải qua giai đoạn khủng hoảng vì áp lực "phải thành công" từ gia đình — điều bạn ấy cần lúc đó không phải là ai đó phân tích đúng-sai hay đưa giải pháp, mà là một người thật lòng lắng nghe mà không phán xét. Chính trải nghiệm đó khiến tôi tin rằng bản thân mối quan hệ trị liệu, chứ không phải một kỹ thuật cụ thể, mới là điều chữa lành sâu nhất.</p>
        <p>Tất nhiên tôi hiểu cách tiếp cận này không phải lúc nào cũng đủ — với những thân chủ cần một kế hoạch hành động cụ thể và nhanh, tôi sẽ cần linh hoạt vay mượn thêm kỹ thuật từ các trường phái khác. Nhưng làm nền tảng triết lý — cách tôi nhìn con người và mối quan hệ trị liệu — thì Thân chủ trọng tâm vẫn là lựa chọn gần với con người tôi nhất.</p>`
      },
      {
        label: "Văn mẫu 2 — chọn Nhận thức – Hành vi (CBT)",
        html: `<p>Tôi sẽ chọn Trị liệu Nhận thức – Hành vi (CBT) làm nền tảng cho phong cách tham vấn của mình, đơn giản vì đó là cách tư duy tự nhiên nhất với tôi: tôi thích sự rõ ràng, thích nhìn thấy tiến độ cụ thể, và tôi tin rằng phần lớn đau khổ tâm lý đến từ cách chúng ta diễn giải sự việc hơn là bản thân sự việc đó.</p>
        <p>Tôi đặc biệt bị thuyết phục bởi ý tưởng "hợp tác thực nghiệm" (collaborative empiricism) — việc nhà trị liệu và thân chủ cùng nhau kiểm chứng một suy nghĩ như hai nhà khoa học, thay vì nhà trị liệu áp đặt kết luận. Với tính cách của tôi — vốn thích có công cụ cụ thể để làm việc thay vì chỉ ngồi lắng nghe — cách tiếp cận này cho tôi một khung rõ ràng: nhận diện suy nghĩ tự động, kiểm tra bằng chứng, tìm cách diễn giải cân bằng hơn.</p>
        <p>Một lý do thực tế khác là CBT phù hợp với bối cảnh tôi hình dung mình sẽ làm việc — tham vấn học đường hoặc doanh nghiệp, nơi thời gian mỗi buổi thường có hạn và thân chủ (đặc biệt là người trẻ) thường mong muốn có công cụ cụ thể để tự áp dụng ngay, không chỉ là được lắng nghe. Dĩ nhiên tôi vẫn cần nền tảng thấu cảm cơ bản để xây dựng liên minh trị liệu trước khi bất kỳ kỹ thuật CBT nào phát huy tác dụng.</p>`
      },
      {
        label: "Văn mẫu 3 — chọn Hiện sinh",
        html: `<p>Tôi sẽ chọn Trị liệu Hiện sinh, dù đây có lẽ là lựa chọn ít "thực dụng" nhất trong 11 cách tiếp cận. Lý do xuất phát từ chính trải nghiệm cá nhân: tôi từng có một giai đoạn cảm thấy mọi thứ mình đang làm — học tập, công việc — trở nên vô nghĩa, và điều giúp tôi vượt qua không phải là một kỹ thuật cụ thể nào, mà là việc dám ngồi lại và thật sự đối diện với câu hỏi "mình đang sống để làm gì" thay vì né tránh nó bằng cách bận rộn liên tục.</p>
        <p>Chính vì vậy tôi tin vào tiền đề cốt lõi của Hiện sinh: con người luôn có tự do lựa chọn và phải chịu trách nhiệm cho lựa chọn đó, và đau khổ tâm lý nhiều khi đến từ việc né tránh (chứ không phải đối diện) những mối bận tâm tối hậu như sự cô đơn, cái chết, hay sự vô nghĩa. Tôi muốn trở thành kiểu nhà tham vấn không vội "sửa" cảm xúc của thân chủ, mà đủ can đảm ngồi cùng họ trong những câu hỏi khó nhất của kiếp người.</p>
        <p>Tôi cũng ý thức rằng cách tiếp cận này đòi hỏi bản thân tôi phải trưởng thành và có chiều sâu trải nghiệm sống nhất định — đây là một hành trình dài, không chỉ là kỹ năng có thể học trong một khóa học. Nhưng với tôi, đó chính xác là điều khiến nghề tham vấn trở nên ý nghĩa: không chỉ "chữa triệu chứng" mà đồng hành cùng con người trong hành trình đi tìm ý nghĩa sống của chính họ.</p>`
      }
    ]
  },
  {
    id: "sa-exam-2",
    approachId: "",
    examQuestion: true,
    question: "Giả sử bạn là nhà tham vấn cho một thân chủ đang trải qua một khủng hoảng thực tế cụ thể (tự chọn 1 tình huống: mất việc, đổ vỡ tình cảm/hôn nhân, xung đột gia đình, khủng hoảng tuổi trưởng thành...). Bạn sẽ ưu tiên vận dụng cách tiếp cận nào? Giải thích lý do lựa chọn gắn với tình huống cụ thể.",
    samples: [
      {
        label: "Văn mẫu 1 — tình huống mất việc, chọn Trị liệu Thực tế",
        html: `<p>Tình huống tôi chọn: một thân chủ ngoài 30 tuổi vừa bị sa thải sau nhiều năm gắn bó với công ty, đang trong trạng thái hoang mang, tự trách bản thân và có xu hướng nằm nhà, tránh né việc tìm kiếm cơ hội mới.</p>
        <p>Với tình huống này, tôi sẽ ưu tiên vận dụng Trị liệu Thực tế / Lý thuyết lựa chọn của Glasser. Lý do là vì ở giai đoạn khủng hoảng này, thân chủ dễ sa vào vòng lặp than vãn về quá khứ ("giá mà tôi đã làm khác đi") — điều thân chủ cần không phải là phân tích sâu nguyên nhân, mà là một điểm tựa để quay lại hành động. Tôi sẽ dùng mô hình WDEP: hỏi thân chủ thật sự muốn điều gì ở giai đoạn tiếp theo của sự nghiệp (Wants), họ đang làm gì mỗi ngày (Doing), điều đó có đang giúp họ tiến gần hơn đến điều mình muốn không (Evaluation), và cùng họ lập một kế hoạch hành động rất cụ thể, khả thi trong tuần tới (Planning).</p>
        <p>Tôi chọn cách tiếp cận này vì tính thực tế của nó phù hợp với bản chất của khủng hoảng việc làm — một vấn đề có thể giải quyết được bằng hành động cụ thể, và thân chủ cần cảm nhận được mình vẫn có quyền lựa chọn, thay vì chỉ là nạn nhân của hoàn cảnh. Tất nhiên tôi vẫn dành thời gian đầu để thấu cảm với cảm xúc mất mát trước khi chuyển sang phần hành động — không vội vàng "sửa" ngay khi thân chủ còn đang cần được lắng nghe.</p>`
      },
      {
        label: "Văn mẫu 2 — tình huống đổ vỡ tình cảm, chọn Gestalt",
        html: `<p>Tình huống tôi chọn: một thân chủ vừa trải qua một cuộc chia tay/ly hôn mà bản thân không hề mong muốn, cảm thấy vẫn còn rất nhiều điều "chưa nói hết" với người kia và liên tục bị cuốn vào những suy nghĩ dằn vặt.</p>
        <p>Trong trường hợp này, tôi sẽ ưu tiên vận dụng Trị liệu Gestalt, cụ thể là khái niệm "việc dang dở" (unfinished business) và kỹ thuật ghế trống. Tôi chọn cách tiếp cận này vì cảm nhận rằng vấn đề cốt lõi ở đây không phải là thân chủ thiếu kỹ năng hay suy nghĩ sai lệch (như CBT có thể tiếp cận), mà là những cảm xúc — giận dữ, tiếc nuối, có thể cả biết ơn — chưa từng được nói ra và giải tỏa trọn vẹn với người kia.</p>
        <p>Tôi sẽ mời thân chủ hình dung người cũ đang ngồi trên chiếc ghế trống trước mặt, và nói ra những điều họ chưa có cơ hội nói. Đây là một kỹ thuật khá mạnh về cảm xúc nên tôi sẽ chỉ dùng khi liên minh trị liệu đã đủ vững và thân chủ cảm thấy an toàn. Lý do tôi tin vào hướng đi này: một khi cảm xúc dang dở được đối diện và giải tỏa ngay trong "ở đây và bây giờ", thân chủ mới thực sự có thể bước tiếp, thay vì chỉ "cố quên đi" một cách gượng ép.</p>`
      },
      {
        label: "Văn mẫu 3 — tình huống xung đột gia đình, chọn Hệ thống gia đình",
        html: `<p>Tình huống tôi chọn: một thân chủ tuổi vị thành niên liên tục xung đột với cha mẹ, được cha mẹ đưa đến tham vấn với mong muốn "sửa" con, trong khi bản thân em cho rằng vấn đề nằm ở cách cha mẹ đối xử với nhau và với em.</p>
        <p>Với tình huống này, tôi sẽ ưu tiên vận dụng Trị liệu Hệ thống gia đình thay vì chỉ làm việc riêng với thân chủ. Lý do là vì nếu chỉ tham vấn cá nhân cho em, tôi có nguy cơ vô tình củng cố góc nhìn "em là người có vấn đề" mà cả gia đình đang mang — trong khi rất có thể em đang ở vị trí bị tam giác hóa (theo khái niệm của Bowen): trở thành nơi hấp thụ căng thẳng từ mâu thuẫn thực sự giữa cha và mẹ.</p>
        <p>Tôi sẽ đề xuất mời cả gia đình tham gia ít nhất một số buổi, dùng công cụ như genogram để cùng nhìn lại các mẫu quan hệ qua các thế hệ, và quan sát trực tiếp cách các thành viên tương tác với nhau trong buổi trị liệu thay vì chỉ nghe kể lại. Tôi chọn hướng đi này vì tin rằng "triệu chứng" của một cá nhân trong gia đình thường phản ánh sự mất cân bằng của cả hệ thống — và giải pháp bền vững chỉ đến khi cả hệ thống, không chỉ một người, cùng thay đổi.</p>`
      }
    ]
  },
  {
    id: "sa01",
    approachId: "phan-tam-hoc",
    question: "Trình bày vai trò của cơ chế phòng vệ (defense mechanisms) trong lý thuyết phân tâm học của Freud.",
    samples: [
      {
        label: "Văn mẫu 1",
        html: `<p>Trong lý thuyết phân tâm học, cơ chế phòng vệ là những chiến lược vô thức mà cái tôi (ego) sử dụng để bảo vệ bản thân khỏi lo âu, khi xung đột giữa các đòi hỏi của id (bản năng), superego (siêu tôi) và hiện thực bên ngoài trở nên quá căng thẳng để đối diện trực tiếp.</p>
        <p>Freud và sau này là Anna Freud đã hệ thống hóa nhiều cơ chế cụ thể như dồn nén (repression — đẩy những xung động, ký ức gây đau khổ xuống vô thức), phóng chiếu (projection — gán những cảm xúc/xung động của bản thân cho người khác), hợp lý hóa (rationalization — đưa ra lý do "nghe hợp lý" để che giấu động cơ thật), thoái lui (regression — quay về hành vi của giai đoạn phát triển sớm hơn) và thăng hoa (sublimation — chuyển hóa xung năng thành hoạt động được xã hội chấp nhận).</p>
        <p>Về bản chất, cơ chế phòng vệ không xấu hay tốt tuyệt đối — chúng là một phần bình thường của đời sống tâm lý, giúp con người duy trì sự ổn định tạm thời. Vấn đề chỉ nảy sinh khi cá nhân sử dụng chúng một cách cứng nhắc, lặp đi lặp lại, khiến người đó né tránh việc đối diện với xung đột thật sự — đây chính là điều mà nhà trị liệu phân tâm học tìm cách nhận diện và làm việc cùng thân chủ để đưa vào vùng ý thức.</p>`
      },
      {
        label: "Văn mẫu 2",
        html: `<p>Hãy hình dung một người vừa bị sa thải nhưng lại nói với bạn bè rằng "công việc đó vốn chẳng phù hợp với mình, nghỉ cũng tốt" — đó chính là một ví dụ sống động của hợp lý hóa, một trong nhiều cơ chế phòng vệ mà Freud mô tả.</p>
        <p>Theo phân tâm học, cái tôi luôn phải căng mình giữa ba lực: những đòi hỏi bản năng của id, chuẩn mực đạo đức nghiêm khắc của superego, và những giới hạn của thực tại. Khi áp lực từ ba phía này vượt quá khả năng chịu đựng, cơ chế phòng vệ xuất hiện như một "van an toàn" vô thức, giúp cái tôi tránh khỏi cảm giác lo âu quá tải.</p>
        <p>Các cơ chế phổ biến gồm dồn nén, phủ nhận, phóng chiếu, thoái lui, thăng hoa... mỗi cơ chế có một "logic" riêng nhưng đều chung mục đích: làm dịu bớt xung đột nội tâm mà cá nhân không hề ý thức được là mình đang làm vậy. Trong tiến trình trị liệu, việc giúp thân chủ dần nhận ra các cơ chế phòng vệ họ đang dùng — không phải để loại bỏ hoàn toàn mà để họ có thêm lựa chọn ứng phó trưởng thành hơn — là một phần trọng tâm của công việc phân tâm.</p>`
      },
      {
        label: "Văn mẫu 3",
        html: `<p><strong>Định nghĩa:</strong> Cơ chế phòng vệ là các chiến lược vô thức của cái tôi nhằm giảm lo âu phát sinh từ xung đột giữa id, superego và hiện thực.</p>
        <p><strong>Các cơ chế tiêu biểu:</strong></p>
        <ul>
          <li>Dồn nén — đẩy nội dung gây đau khổ xuống vô thức</li>
          <li>Phóng chiếu — quy gán cảm xúc của mình cho người khác</li>
          <li>Hợp lý hóa — tạo lý do có vẻ logic để che giấu động cơ thật</li>
          <li>Thoái lui — quay về hành vi của giai đoạn phát triển trước đó</li>
          <li>Thăng hoa — chuyển hóa xung năng thành hoạt động được xã hội chấp nhận</li>
        </ul>
        <p><strong>Ý nghĩa lâm sàng:</strong> bản thân cơ chế phòng vệ không phải bệnh lý; chúng trở thành vấn đề khi được sử dụng cứng nhắc, lặp lại, cản trở cá nhân đối diện với xung đột thật. Mục tiêu trị liệu không phải xóa bỏ mà là giúp thân chủ ý thức hóa và linh hoạt hóa cách ứng phó.</p>`
      }
    ]
  },
  {
    id: "sa02",
    approachId: "than-chu-trong-tam",
    question: "Vì sao Carl Rogers cho rằng \"tôn trọng vô điều kiện\" (unconditional positive regard) là điều kiện cốt lõi để trị liệu hiệu quả?",
    samples: [
      {
        label: "Văn mẫu 1",
        html: `<p>Carl Rogers xuất phát từ niềm tin rằng mỗi con người sinh ra đều mang một xu hướng tự hiện thực hóa (actualizing tendency) — một động lực bẩm sinh hướng đến sự phát triển, hoàn thiện và trở thành phiên bản trọn vẹn nhất của chính mình. Tuy nhiên, xu hướng này có thể bị bóp méo khi cá nhân lớn lên trong môi trường chỉ trao yêu thương và chấp nhận có điều kiện — nghĩa là chỉ khi họ đáp ứng được kỳ vọng của người khác.</p>
        <p>Khi điều đó xảy ra, cá nhân dần đánh mất sự kết nối với cảm xúc và giá trị thật của bản thân để chạy theo "điều kiện giá trị" (conditions of worth) do người khác đặt ra, dẫn đến sự không nhất quán (incongruence) giữa cái tôi lý tưởng và trải nghiệm thật.</p>
        <p>Chính vì vậy, Rogers cho rằng nhà trị liệu cần tạo ra một không gian hoàn toàn ngược lại — nơi thân chủ được chấp nhận trọn vẹn dù họ bộc lộ điều gì, không phán xét, không điều kiện. Chỉ trong môi trường an toàn đó, thân chủ mới dám gỡ bỏ lớp phòng thủ, kết nối lại với trải nghiệm thật của mình và để xu hướng tự hiện thực hóa vốn có được tự do vận hành trở lại.</p>`
      },
      {
        label: "Văn mẫu 2",
        html: `<p>Thử tưởng tượng một đứa trẻ chỉ được cha mẹ khen ngợi khi đạt điểm cao, còn khi thất bại thì bị lạnh nhạt — lớn lên, người đó rất dễ tin rằng giá trị của bản thân phụ thuộc vào thành tích, và sẽ luôn phải "diễn" một phiên bản hoàn hảo để được yêu thương. Đây chính là hiện tượng "điều kiện giá trị" mà Rogers muốn hóa giải bằng nguyên tắc tôn trọng vô điều kiện.</p>
        <p>Trong phòng trị liệu, nếu nhà trị liệu cũng chỉ chấp nhận thân chủ khi họ "nói đúng điều nên nói", quan hệ trị liệu sẽ vô tình lặp lại chính tổn thương mà thân chủ đang mang. Ngược lại, khi nhà trị liệu chấp nhận thân chủ một cách trọn vẹn — bao gồm cả những phần họ xấu hổ, sợ hãi hay cho là "không đáng yêu" — thân chủ mới có đủ an toàn tâm lý để bộc lộ thật, và từ đó bắt đầu quá trình tự chữa lành.</p>
        <p>Nói cách khác, tôn trọng vô điều kiện không phải là đồng tình với mọi hành vi của thân chủ, mà là tách bạch giữa con người và hành vi: chấp nhận con người vô điều kiện, trong khi vẫn có thể không đồng tình với một hành động cụ thể.</p>`
      },
      {
        label: "Văn mẫu 3",
        html: `<p><strong>Cơ sở lý thuyết:</strong> con người có xu hướng tự hiện thực hóa bẩm sinh, nhưng dễ bị lệch hướng bởi "điều kiện giá trị" từ môi trường xung quanh.</p>
        <p><strong>Hệ quả khi thiếu tôn trọng vô điều kiện:</strong></p>
        <ul>
          <li>Cá nhân học cách chỉ bộc lộ phần bản thân được chấp nhận</li>
          <li>Hình thành sự không nhất quán giữa cái tôi lý tưởng và trải nghiệm thật</li>
          <li>Gia tăng lo âu, phòng thủ tâm lý</li>
        </ul>
        <p><strong>Vai trò của tôn trọng vô điều kiện trong trị liệu:</strong> tạo môi trường an toàn để thân chủ bộc lộ trọn vẹn mà không sợ bị phán xét → giảm phòng thủ → kết nối lại với trải nghiệm thật → kích hoạt lại xu hướng tự hiện thực hóa.</p>
        <p><strong>Lưu ý:</strong> tôn trọng vô điều kiện là chấp nhận con người, không đồng nghĩa với tán thành mọi hành vi.</p>`
      }
    ]
  },
  {
    id: "sa03",
    approachId: "nhan-thuc-hanh-vi",
    question: "So sánh vai trò của \"suy nghĩ\" trong trị liệu Nhận thức – Hành vi (CBT) với trị liệu Phân tâm học.",
    samples: [
      {
        label: "Văn mẫu 1",
        html: `<p>Cả hai trường phái đều cho rằng những gì diễn ra "bên trong" con người quyết định cảm xúc và hành vi bên ngoài, nhưng cách hai trường phái định vị "cái bên trong" đó rất khác nhau.</p>
        <p>Phân tâm học đặt trọng tâm vào vô thức — những xung động, ký ức và xung đột bị dồn nén từ thời thơ ấu, thường không thể tiếp cận trực tiếp bằng ý thức. Muốn thay đổi, thân chủ cần trải qua một quá trình dài để đưa nội dung vô thức đó lên bề mặt ý thức thông qua liên tưởng tự do, phân tích giấc mơ, phân tích chuyển di.</p>
        <p>Trong khi đó, CBT tập trung vào những suy nghĩ có ý thức hoặc bán ý thức — cụ thể là "suy nghĩ tự động" và các niềm tin cốt lõi (core beliefs) — vốn có thể được nhận diện và kiểm chứng ngay trong hiện tại, không cần truy về quá khứ xa. CBT xem những suy nghĩ méo mó (như khái quát hóa quá mức, tư duy tất cả-hoặc-không) là nguyên nhân trực tiếp gây ra cảm xúc tiêu cực, và có thể được "sửa" thông qua các kỹ thuật tái cấu trúc nhận thức, ghi chép suy nghĩ, thử nghiệm hành vi.</p>
        <p>Nói ngắn gọn: phân tâm học đào sâu quá khứ vô thức để hiểu căn nguyên; CBT làm việc với suy nghĩ hiện tại, có thể quan sát và đo lường được, để thay đổi trực tiếp cảm xúc và hành vi.</p>`
      },
      {
        label: "Văn mẫu 2",
        html: `<p>Nếu phân tâm học ví tâm trí như một tảng băng mà phần lớn (vô thức) chìm dưới nước và cần được "trục vớt" dần qua nhiều năm, thì CBT lại giống như việc kiểm tra ngay phần nổi — những suy nghĩ ta có thể tự quan sát được trong khoảnh khắc hiện tại — và sửa lỗi từ đó.</p>
        <p>Với Freud, suy nghĩ có ý thức chỉ là "triệu chứng" bề mặt của xung đột vô thức sâu xa hơn; do đó trị liệu cần đi vòng qua các cơ chế phòng vệ để chạm đến gốc rễ. Với Beck và các nhà CBT, bản thân suy nghĩ — dù là suy nghĩ tự động thoáng qua — đã đủ sức mạnh để tạo ra cảm xúc và hành vi, nên không nhất thiết phải truy tìm nguồn gốc vô thức mới có thể can thiệp hiệu quả.</p>
        <p>Sự khác biệt này kéo theo khác biệt về thời lượng và kỹ thuật: phân tâm học cổ điển thường kéo dài nhiều năm với các phiên tự do liên tưởng, còn CBT thường có cấu trúc chặt chẽ, định hướng mục tiêu, và có thể mang lại thay đổi rõ rệt trong vài tháng.</p>`
      },
      {
        label: "Văn mẫu 3",
        html: `<table style="width:100%; border-collapse:collapse; font-size:14px;">
        <tr><th style="text-align:left; border-bottom:1px solid var(--line); padding:6px 8px;">Tiêu chí</th><th style="text-align:left; border-bottom:1px solid var(--line); padding:6px 8px;">Phân tâm học</th><th style="text-align:left; border-bottom:1px solid var(--line); padding:6px 8px;">CBT</th></tr>
        <tr><td style="padding:6px 8px;">Vị trí của "suy nghĩ"</td><td style="padding:6px 8px;">Chủ yếu ở vô thức, khó tiếp cận</td><td style="padding:6px 8px;">Suy nghĩ tự động, có thể quan sát trực tiếp</td></tr>
        <tr><td style="padding:6px 8px;">Nguồn gốc vấn đề</td><td style="padding:6px 8px;">Xung đột dồn nén từ thơ ấu</td><td style="padding:6px 8px;">Niềm tin/lược đồ nhận thức méo mó ở hiện tại</td></tr>
        <tr><td style="padding:6px 8px;">Kỹ thuật chính</td><td style="padding:6px 8px;">Liên tưởng tự do, phân tích giấc mơ, phân tích chuyển di</td><td style="padding:6px 8px;">Ghi chép suy nghĩ, tái cấu trúc nhận thức, thử nghiệm hành vi</td></tr>
        <tr><td style="padding:6px 8px;">Thời lượng điển hình</td><td style="padding:6px 8px;">Dài hạn</td><td style="padding:6px 8px;">Ngắn/trung hạn, có cấu trúc</td></tr>
        </table>
        <p style="margin-top:12px;"><strong>Kết luận:</strong> cả hai đều coi "cái bên trong" là gốc rễ của hành vi, nhưng khác nhau ở việc đó là nội dung vô thức (phân tâm học) hay suy nghĩ có thể quan sát, kiểm chứng (CBT).</p>`
      }
    ]
  },
  {
    id: "sa04",
    approachId: "",
    question: "Phân tích một điểm hạn chế chung mà các cách tiếp cận trị liệu \"cổ điển\" (phân tâm học, hành vi) thường bị phê phán, và cách các trường phái hậu hiện đại khắc phục.",
    samples: [
      {
        label: "Văn mẫu 1",
        html: `<p>Một trong những phê phán phổ biến nhất đối với cả phân tâm học lẫn trị liệu hành vi cổ điển là xu hướng đặt nhà trị liệu vào vị trí "chuyên gia" nắm giữ tri thức khách quan về thân chủ — nhà phân tâm học diễn giải vô thức của thân chủ, nhà trị liệu hành vi thiết kế chương trình can thiệp dựa trên nguyên lý học tập — trong khi bản thân thân chủ ít có tiếng nói trong việc định nghĩa vấn đề của chính mình.</p>
        <p>Các trường phái hậu hiện đại như Liệu pháp Giải pháp tập trung và Liệu pháp Tường thuật ra đời một phần như một phản ứng với mô hình "chuyên gia" này. Họ xuất phát từ quan điểm rằng không có một "sự thật" khách quan duy nhất về con người và vấn đề của họ, mà thực tại được kiến tạo qua ngôn ngữ và câu chuyện mà mỗi người kể về chính mình.</p>
        <p>Vì vậy, nhà trị liệu hậu hiện đại chuyển từ vai trò "người biết" sang vai trò "người đồng hành tò mò" (curious collaborator), đặt câu hỏi để giúp thân chủ tự khám phá nguồn lực, giải pháp và câu chuyện thay thế cho chính đời sống của họ — thay vì áp đặt một khung diễn giải có sẵn.</p>`
      },
      {
        label: "Văn mẫu 2",
        html: `<p>Hãy thử đặt mình vào vị trí thân chủ: trong một buổi trị liệu phân tâm học cổ điển, bạn có thể cảm thấy mọi lời nói của mình đều đang chờ được nhà trị liệu "giải mã"; trong một chương trình trị liệu hành vi, hành vi của bạn có thể được nhìn như một chuỗi phản xạ cần được lập trình lại. Ở cả hai trường hợp, trải nghiệm chủ quan và tiếng nói của chính thân chủ dễ bị đặt xuống hàng thứ yếu so với khung lý thuyết của nhà trị liệu.</p>
        <p>Đây chính là điểm mà các trường phái hậu hiện đại muốn đảo ngược. Thay vì hỏi "vấn đề của bạn bắt nguồn từ đâu trong quá khứ" hay "hành vi nào cần được củng cố/dập tắt", nhà trị liệu giải pháp tập trung hỏi "khi nào vấn đề này ít nghiêm trọng hơn, và lúc đó bạn đã làm gì khác đi?" — đặt thân chủ vào vị trí người nắm giữ câu trả lời, còn nhà trị liệu chỉ là người đặt câu hỏi khơi gợi.</p>
        <p>Tuy vậy, cách tiếp cận hậu hiện đại cũng có giới hạn riêng — ví dụ ít chú trọng đến các vấn đề tâm lý có nền tảng sinh học/cấu trúc sâu, nên trong thực hành, nhiều nhà trị liệu chọn kết hợp linh hoạt nhiều trường phái tùy ca lâm sàng cụ thể.</p>`
      },
      {
        label: "Văn mẫu 3",
        html: `<p><strong>Hạn chế thường bị phê phán ở các tiếp cận cổ điển:</strong></p>
        <ul>
          <li>Vai trò "chuyên gia" của nhà trị liệu lấn át tiếng nói chủ quan của thân chủ</li>
          <li>Phân tâm học: quá trình dài, khó kiểm chứng thực nghiệm</li>
          <li>Trị liệu hành vi cổ điển: có thể bỏ qua chiều kích nhận thức, cảm xúc và ý nghĩa cá nhân</li>
        </ul>
        <p><strong>Cách các trường phái hậu hiện đại khắc phục:</strong></p>
        <ul>
          <li>Xem thân chủ là chuyên gia về chính cuộc đời họ, nhà trị liệu là người đồng hành</li>
          <li>Nhấn mạnh tính kiến tạo xã hội của "sự thật" và "vấn đề"</li>
          <li>Dùng câu hỏi (câu hỏi phép màu, câu hỏi ngoại lệ, ngoại hóa vấn đề) thay vì diễn giải/áp đặt khung lý thuyết</li>
          <li>Thời lượng ngắn hơn, định hướng giải pháp và nguồn lực sẵn có của thân chủ</li>
        </ul>
        <p><strong>Giới hạn cần lưu ý:</strong> hậu hiện đại không thay thế hoàn toàn các tiếp cận cổ điển — trong thực hành, nhiều nhà trị liệu kết hợp (integrative) tùy theo ca lâm sàng.</p>`
      }
    ]
  }
];

if (typeof module !== "undefined") module.exports = SHORT_ANSWERS;
