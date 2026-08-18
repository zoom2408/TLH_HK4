/* =========================================================
   MA TRẬN SO SÁNH — ưu điểm & hạn chế của 11 cách tiếp cận
   Môn: Các tiếp cận tham vấn trị liệu tâm lý

   Dùng cho so-sanh.html. Nội dung tách từ mục "Ưu điểm & hạn
   chế" đã có trong từng file tiep-can/*.html, chia rõ theo 2
   chiều: LÝ THUYẾT (khung khái niệm, nền tảng khoa học/triết
   học) và THỰC HÀNH (áp dụng thật trong phòng tham vấn) — vì
   một cách tiếp cận có thể lý thuyết hay nhưng khó thực hành,
   hoặc ngược lại.

   timeHorizon dùng 1 trong 6 giá trị cố định (để lọc theo chip):
   "Rất ngắn – ngắn hạn" | "Ngắn – trung hạn" | "Trung hạn" |
   "Trung – dài hạn" | "Dài hạn" | "Linh hoạt"

   selfFit: gợi ý 1 câu "phù hợp với bạn nếu..." — dùng trực tiếp
   để trả lời câu tự luận đề thi "bạn sẽ chọn cách tiếp cận nào
   và vì sao" (xem cau-hoi-ngan.html).

   CÁCH THÊM/SỬA — copy 1 object rồi sửa (id phải khớp
   data/approaches.js):
   {
     id: "...",
     timeHorizon: "...",
     bestFor: ["...", "...", "..."],
     theory:   { pros: ["..."], cons: ["..."] },
     practice: { pros: ["..."], cons: ["..."] },
     selfFit: "..."
   }
   ========================================================= */

const COMPARISON = [
  {
    id: "phan-tam-hoc",
    timeHorizon: "Dài hạn",
    bestFor: ["Vấn đề gốc rễ sâu, mãn tính", "TC sẵn sàng cam kết dài hạn", "Mẫu quan hệ lặp lại khó lý giải"],
    theory: {
      pros: [
        "Đặt nền móng lý thuyết cho toàn ngành trị liệu hiện đại: vô thức, cơ chế tự vệ, chuyển di",
        "Giải thích được chiều sâu và nguồn gốc phát triển của vấn đề, không chỉ dừng ở triệu chứng bề mặt"
      ],
      cons: [
        "Mang tính quyết định luận — Id/Ego/Superego khó đo lường, khó kiểm chứng bằng thực nghiệm",
        "Phụ thuộc nhiều vào diễn giải chủ quan của nhà phân tích"
      ]
    },
    practice: {
      pros: [
        "Kỹ thuật (liên tưởng tự do, phân tích chuyển di) hữu ích để hiểu mẫu quan hệ lặp lại khó lý giải bằng logic thông thường",
        "Cơ chế tự vệ vẫn là công cụ quan sát hữu ích dù trị liệu theo trường phái nào"
      ],
      cons: [
        "Thời gian trị liệu dài, chi phí cao, đòi hỏi đào tạo/giám sát nhà trị liệu bài bản",
        "Ít phù hợp với can thiệp khủng hoảng cần hiệu quả nhanh"
      ]
    },
    selfFit: "Bạn thích tìm hiểu chiều sâu, kiên nhẫn với một quá trình dài, và tò mò về việc vì sao con người lặp lại những mẫu hành vi từ quá khứ."
  },
  {
    id: "tam-ly-ca-nhan-adler",
    timeHorizon: "Ngắn – trung hạn",
    bestFor: ["Tham vấn học đường, giáo dục cha mẹ", "Thân chủ trẻ / thanh thiếu niên", "Can thiệp ngắn/trung hạn có cấu trúc"],
    theory: {
      pros: [
        "Mô hình lạc quan, phi bệnh lý hóa — nhìn TC như người \"chưa được khuyến khích\" chứ không phải người bệnh",
        "Khung lý thuyết linh hoạt: kết nối thứ tự sinh, lối sống với bối cảnh xã hội một cách dễ hiểu"
      ],
      cons: [
        "Một số khái niệm (thứ tự sinh, chòm sao gia đình) khó kiểm chứng bằng nghiên cứu thực nghiệm nghiêm ngặt",
        "Phụ thuộc nhiều vào khả năng diễn giải chủ quan của nhà trị liệu về logic cá nhân của TC"
      ]
    },
    practice: {
      pros: [
        "Adlerian Brief Therapy (ABT) có quy trình 4 giai đoạn rõ ràng, can thiệp ngắn hạn",
        "Ứng dụng rộng: giáo dục, giáo dục cha mẹ, hôn nhân, gia đình, tham vấn nhóm"
      ],
      cons: [
        "Nhà trị liệu mới, thiếu kinh nghiệm dễ áp đặt ý nghĩa chủ quan khi diễn giải chòm sao gia đình",
        "Hiệu quả phụ thuộc nhiều vào kỹ năng phỏng vấn/khuyến khích của NTV"
      ]
    },
    selfFit: "Bạn lạc quan, thích làm việc với trẻ em/gia đình, và tin vào sức mạnh của sự khuyến khích hơn là phân tích bệnh lý."
  },
  {
    id: "hien-sinh",
    timeHorizon: "Trung – dài hạn",
    bestFor: ["Khủng hoảng ý nghĩa sống / tuổi trung niên", "Đối mặt mất mát, bệnh nan y", "TC có nhu cầu tự khám phá sâu"],
    theory: {
      pros: [
        "Nền tảng triết học sâu sắc, tôn trọng tính độc đáo và tự do lựa chọn của từng con người",
        "Không áp đặt một khuôn mẫu \"con người khỏe mạnh\" cố định — mở với sự đa dạng trải nghiệm"
      ],
      cons: [
        "Không có mô hình cấu trúc nhân cách rõ ràng (như Id/Ego hay A-B-C) để giảng dạy hệ thống",
        "Mang tính triết học nên khó chuẩn hóa, khó nghiên cứu thực nghiệm"
      ]
    },
    practice: {
      pros: [
        "Rất phù hợp với khủng hoảng ý nghĩa sống, mất mát, khủng hoảng các giai đoạn phát triển (vị thành niên, trung niên, rời nhà)",
        "Logotherapy của Frankl cho một hướng cụ thể (công việc – tình yêu – thái độ trước đau khổ) dù không có \"kỹ thuật\" cố định"
      ],
      cons: [
        "Không có bộ kỹ thuật cụ thể — đòi hỏi nhà trị liệu có chiều sâu triết học và trải nghiệm sống",
        "Khó đào tạo hàng loạt, khó áp dụng khi TC cần một giải pháp nhanh, cụ thể"
      ]
    },
    selfFit: "Bạn quan tâm triết học, thoải mái ngồi cùng những câu hỏi khó của kiếp người (ý nghĩa sống, cái chết, sự cô đơn) mà không vội \"sửa\" cảm xúc của thân chủ."
  },
  {
    id: "than-chu-trong-tam",
    timeHorizon: "Linh hoạt",
    bestFor: ["Xây dựng liên minh trị liệu ban đầu", "TC cần không gian an toàn để tự khám phá", "Làm nền tảng kết hợp trường phái khác"],
    theory: {
      pros: [
        "3 điều kiện cốt lõi (chân thành, thấu cảm, tôn trọng vô điều kiện) là nền tảng lý thuyết được hầu hết trường phái khác thừa nhận giá trị",
        "Mô hình nhân văn, tôn trọng quyền tự quyết của thân chủ — tin vào xu hướng tự hiện thực hóa"
      ],
      cons: [
        "Ít lý giải sâu về cơ chế/nguồn gốc cụ thể của từng loại vấn đề tâm lý",
        "Khó giải thích các trường hợp cần một khung can thiệp cấu trúc rõ ràng (rối loạn nặng)"
      ]
    },
    practice: {
      pros: [
        "Không cần kỹ thuật phức tạp — dễ tiếp cận, là nền tảng kỹ năng lắng nghe/thấu cảm cho hầu hết ngành tham vấn",
        "Hiệu quả trong can thiệp khủng hoảng, lo hãi, trầm cảm khi kết hợp với đánh giá/lên kế hoạch"
      ],
      cons: [
        "Có thể quá phi chỉ định (non-directive) với TC cần hướng dẫn cụ thể hoặc đang khủng hoảng cấp tính",
        "Hiệu quả phụ thuộc rất nhiều vào năng lực thấu cảm và tự nhận thức của chính nhà trị liệu"
      ]
    },
    selfFit: "Bạn là người lắng nghe tốt, tin vào khả năng tự chữa lành của con người hơn là muốn đưa lời khuyên hay giải pháp ngay."
  },
  {
    id: "gestalt",
    timeHorizon: "Trung hạn",
    bestFor: ["Việc dang dở, cảm xúc chưa xử lý (mất mát, ly hôn)", "TC có xu hướng \"trí thức hóa\" quá mức", "Trải nghiệm nhóm/thân thể"],
    theory: {
      pros: [
        "Nhấn mạnh tính tổng thể (thân – tâm – cảm xúc – môi trường) — cái nhìn toàn diện về con người",
        "\"Ở đây và bây giờ\" lý giải hành vi qua trải nghiệm hiện tại thay vì chỉ suy đoán nguyên nhân quá khứ"
      ],
      cons: [
        "Ít có hệ thống khái niệm chẩn đoán rõ ràng — dễ mơ hồ nếu nhà trị liệu chưa có nền tảng vững",
        "Nhiều khái niệm (rào cản tiếp xúc, việc dang dở) mang tính trải nghiệm, khó lượng hóa"
      ]
    },
    practice: {
      pros: [
        "Kỹ thuật trực quan, sinh động (ghế trống, đối thoại nội tâm) tạo insight nhanh, khai thác cảm xúc mạnh",
        "Tích hợp tốt yếu tố cơ thể/ngôn ngữ phi lời vào tiến trình trị liệu"
      ],
      cons: [
        "Kỹ thuật cảm xúc mạnh có thể gây khó chịu nếu TC chưa sẵn sàng hoặc thiếu tin tưởng nhà trị liệu",
        "Đòi hỏi NTV có kỹ năng dẫn dắt cảm xúc rất tốt để tránh gây tổn thương thêm"
      ]
    },
    selfFit: "Bạn thoải mái làm việc với cảm xúc mạnh và thích những bài tập trải nghiệm trực tiếp hơn là chỉ trò chuyện, phân tích."
  },
  {
    id: "hanh-vi",
    timeHorizon: "Rất ngắn – ngắn hạn",
    bestFor: ["Ám ảnh sợ cụ thể, lo âu có mục tiêu rõ", "TC cần kết quả đo lường được, nhanh", "Môi trường giáo dục/lâm sàng có cấu trúc"],
    theory: {
      pros: [
        "Nền tảng thực nghiệm mạnh nhất trong các cách tiếp cận cổ điển — nguyên lý học tập được kiểm chứng rộng rãi",
        "Mục tiêu quan sát/đo lường được — dễ giảng dạy hệ thống, dễ nghiên cứu"
      ],
      cons: [
        "Ít lý giải vai trò của suy nghĩ/ý nghĩa chủ quan (trước khi có nhánh nhận thức–hành vi bổ sung)",
        "Thiên hướng quyết định luận, dễ giảm nhẹ vai trò cảm xúc và nội tâm sâu"
      ]
    },
    practice: {
      pros: [
        "Thời gian trị liệu ngắn, mục tiêu rõ ràng, dễ đánh giá tiến độ bằng số liệu quan sát được",
        "Kỹ thuật chuẩn hóa cao (giải mẫn cảm hệ thống, phơi nhiễm) — dễ đào tạo, dễ nhân rộng"
      ],
      cons: [
        "Có thể chỉ giải quyết triệu chứng bề mặt nếu không kết hợp yếu tố nhận thức/cảm xúc",
        "Đòi hỏi thân chủ hợp tác và tuân thủ chương trình cao"
      ]
    },
    selfFit: "Bạn thích sự rõ ràng, đo lường được, và muốn làm việc theo quy trình/kế hoạch cụ thể hơn là những buổi trò chuyện mở."
  },
  {
    id: "nhan-thuc-hanh-vi",
    timeHorizon: "Ngắn – trung hạn",
    bestFor: ["Trầm cảm, lo âu (bằng chứng mạnh nhất)", "TC thích cấu trúc, công cụ cụ thể", "Tham vấn học đường/doanh nghiệp, thời gian hạn chế"],
    theory: {
      pros: [
        "Khối lượng bằng chứng thực nghiệm lớn nhất trong các liệu pháp tâm lý",
        "Mô hình rõ ràng, dễ giảng dạy: A-B-C(-D-E-F) của Ellis, suy nghĩ tự động/lược đồ của Beck"
      ],
      cons: [
        "Có thể bị xem là đơn giản hóa vai trò của vô thức, mối quan hệ trị liệu sâu hoặc yếu tố văn hóa – xã hội",
        "3 nhánh (REBT/CT/CBM) có phong cách khác nhau, người mới học dễ nhầm lẫn khi áp dụng"
      ]
    },
    practice: {
      pros: [
        "Có cấu trúc rõ ràng, thời gian ngắn/trung hạn (12–20 buổi); trang bị kỹ năng tự lực TC dùng suốt đời",
        "Đa dạng kỹ thuật (disputing, tái cấu trúc nhận thức, SIT) nên linh hoạt chọn công cụ phù hợp từng TC"
      ],
      cons: [
        "Có thể quá \"kỹ thuật\", ít chú trọng mối quan hệ trị liệu và cảm xúc sâu nếu áp dụng máy móc",
        "Đòi hỏi TC có khả năng tự quan sát, làm bài tập về nhà đều đặn"
      ]
    },
    selfFit: "Bạn thích công cụ thực tế, có cấu trúc, và tin rằng thay đổi cách nghĩ sẽ kéo theo thay đổi cảm xúc và hành vi."
  },
  {
    id: "thuc-te",
    timeHorizon: "Rất ngắn – ngắn hạn",
    bestFor: ["TC cần hành động cụ thể, nhanh (mất việc, khủng hoảng hiện tại)", "Trường học, tái hòa nhập, cai nghiện", "TC có xu hướng đổ lỗi hoàn cảnh"],
    theory: {
      pros: [
        "Mô hình 5 nhu cầu cơ bản + thuyết lựa chọn dễ hiểu, dễ giải thích cho TC không chuyên",
        "Nhấn mạnh trách nhiệm cá nhân — tránh đổ lỗi hoàn cảnh, phù hợp với tư duy \"chủ động\""
      ],
      cons: [
        "Không chú trọng những khía cạnh khác trong tham vấn: quá khứ, vô thức, trải nghiệm tổn thương, chuyển di",
        "Có thể đơn giản hóa các vấn đề có gốc rễ tâm lý sâu, sang chấn phức tạp"
      ]
    },
    practice: {
      pros: [
        "Ngắn hạn, tập trung; quy trình WDEP rõ ràng — dễ áp dụng cho nhiều đối tượng (giáo dục, cai nghiện, quân đội)",
        "Không cần chờ TC tự nguyện hoàn toàn — vẫn có thể bắt đầu bằng việc xây kết nối trước"
      ],
      cons: [
        "Ít khai thác cảm xúc/quá khứ nên có thể bỏ sót yếu tố quan trọng ở một số ca",
        "Đòi hỏi TC có mức sẵn sàng chịu trách nhiệm nhất định — khó với TC đang khủng hoảng nặng"
      ]
    },
    selfFit: "Bạn thực dụng, thích hành động ngay và tin vào trách nhiệm cá nhân hơn là dành nhiều thời gian phân tích quá khứ."
  },
  {
    id: "nu-quyen",
    timeHorizon: "Trung hạn",
    bestFor: ["TC nữ chịu áp lực vai trò giới/xã hội", "Vấn đề liên quan bất bình đẳng, phân biệt đối xử", "TC muốn thay đổi cả cấp cá nhân và xã hội"],
    theory: {
      pros: [
        "Đưa giới & quyền lực xã hội vào trung tâm phân tích vấn đề tâm lý cá nhân — điều nhiều trường phái cổ điển bỏ qua",
        "Phê phán có cơ sở với việc dùng DSM khi giới/chủng tộc có thể ảnh hưởng đến quá trình chẩn đoán"
      ],
      cons: [
        "Không phải một lý thuyết thống nhất — nhiều \"làn sóng\" nữ quyền với quan điểm khác nhau, khó hệ thống hóa",
        "Gắn chặt với bối cảnh chính trị – xã hội nên có thể gây tranh cãi tùy góc nhìn của TC"
      ]
    },
    practice: {
      pros: [
        "Trao quyền mạnh mẽ cho TC, mối quan hệ mang tính bình đẳng thay vì thứ bậc chuyên gia",
        "Kỹ thuật đa dạng: phân tích vai trò giới, trị liệu nhóm, tham gia hoạt động xã hội"
      ],
      cons: [
        "Có thể đưa ra ý kiến thiếu khách quan do NTV chia sẻ trải nghiệm cá nhân",
        "Có thể áp đặt hoặc chưa phù hợp khi TC chưa sẵn sàng nhìn vấn đề qua lăng kính giới/quyền lực"
      ]
    },
    selfFit: "Bạn quan tâm đến công bằng xã hội và tin rằng vấn đề cá nhân luôn gắn liền với bối cảnh quyền lực, văn hóa xung quanh."
  },
  {
    id: "hau-hien-dai",
    timeHorizon: "Rất ngắn – ngắn hạn",
    bestFor: ["TC đã \"chán\" kể lể vấn đề nhiều lần không tiến triển", "Tham vấn ngắn hạn, giới hạn số buổi", "Bổ sung kỹ thuật cho trường phái khác"],
    theory: {
      pros: [
        "Nền tảng kiến tạo xã hội linh hoạt — tôn trọng TC là chuyên gia về chính cuộc đời mình",
        "Không áp đặt một \"sự thật\" khách quan duy nhất — cởi mở với nhiều phiên bản thực tại"
      ],
      cons: [
        "Ít nền tảng lý thuyết về cấu trúc nhân cách so với các trường phái cổ điển",
        "Khó lý giải cơ chế sâu của rối loạn tâm lý nghiêm trọng"
      ]
    },
    practice: {
      pros: [
        "Rất ngắn hạn (có thể chỉ 1 buổi), tôn trọng và trao quyền tối đa cho TC",
        "Công cụ hỏi (câu hỏi phép màu, thang đo, ngoại tâm hóa) dễ học, dễ kết hợp linh hoạt với trường phái khác"
      ],
      cons: [
        "Có thể bỏ sót việc xử lý sâu sang chấn hoặc vấn đề tâm lý nghiêm trọng cần can thiệp chuyên sâu hơn",
        "Khó áp dụng nếu TC đang khủng hoảng cấp tính, chưa đủ ổn định để nghĩ về \"giải pháp\""
      ]
    },
    selfFit: "Bạn tin vào nguồn lực sẵn có của thân chủ và thích đặt câu hỏi khơi gợi hơn là đưa ra chẩn đoán hay giải pháp có sẵn."
  },
  {
    id: "he-thong-gia-dinh",
    timeHorizon: "Trung – dài hạn",
    bestFor: ["Xung đột gia đình, cha mẹ – con cái", "Rối loạn hành vi ở trẻ có nguồn gốc từ tương tác gia đình", "TC muốn thay đổi bền vững cả hệ thống"],
    theory: {
      pros: [
        "Nhìn vấn đề cá nhân trong bối cảnh hệ thống — lý giải được vì sao \"chữa\" một cá nhân đơn lẻ đôi khi không hiệu quả",
        "8 lăng kính bổ trợ nhau (Bowen, Minuchin, Satir, Adler...) tạo khung phân tích đa chiều, phong phú"
      ],
      cons: [
        "Phức tạp — nhiều lăng kính lý thuyết có thể chồng chéo, khó áp dụng nhất quán nếu NTV thiếu kinh nghiệm",
        "Một số khái niệm (tam giác hóa, phân hóa bản thân) đòi hỏi quan sát tinh tế, khó dạy qua lý thuyết đơn thuần"
      ]
    },
    practice: {
      pros: [
        "Giải quyết vấn đề tận gốc của hệ thống thay vì chỉ chữa triệu chứng ở một cá nhân",
        "Hiệu quả rõ với xung đột gia đình, ly hôn, rối loạn hành vi ở trẻ"
      ],
      cons: [
        "Cần sự tham gia của nhiều thành viên — khó thực hiện nếu có người từ chối tham gia",
        "Phức tạp về hậu cần (lịch hẹn, chi phí), đòi hỏi kỹ năng quản lý động lực nhóm/xung đột nhiều bên"
      ]
    },
    selfFit: "Bạn thích nhìn bức tranh lớn và muốn làm việc với nhiều người cùng lúc thay vì chỉ tham vấn 1-1."
  }
];

if (typeof module !== "undefined") module.exports = COMPARISON;
