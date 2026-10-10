export interface GeneralInfoItem {
  key: string;
  title: string;
  content: string;
  subDetails?: string[];
  badge: string;
  iconName: string;
}

export interface StrandItem {
  id: number;
  strand: string;
  competency: string;
  role: string;
  color: string;
  icon: string;
  sampleActivity: string;
}

export interface GradeLevelJourney {
  id: 'tieuhoc' | 'thcs' | 'thpt';
  level: string;
  grades: string;
  focusTitle: string;
  focusContent: string;
  methods: string;
  keySkills: string[];
  sampleProject: {
    title: string;
    description: string;
  };
}

export interface DimensionItem {
  id: number;
  name: string;
  description: string;
  example: string;
  icon: string;
}

export const INFOGRAPHIC_SOURCE = {
  title: 'Khung nội dung giáo dục trí tuệ nhân tạo cho học sinh phổ thông',
  decision: 'Quyết định số 2422/QĐ-BGDĐT',
  date: '18-8-2026',
  issuer: 'Bộ Giáo dục và Đào tạo',
};

// 1. Thông tin chung
export const GENERAL_INFO: GeneralInfoItem[] = [
  {
    key: 'scope',
    title: 'Phạm vi',
    content: 'Từ lớp 1 đến lớp 12, gồm 3 cấp học',
    subDetails: [
      'Tiểu học: Lớp 1 đến Lớp 5',
      'Trung học cơ sở (THCS): Lớp 6 đến Lớp 9',
      'Trung học phổ thông (THPT): Lớp 10 đến Lớp 12',
    ],
    badge: '12 năm học xuyên suốt',
    iconName: 'GraduationCap',
  },
  {
    key: 'structure',
    title: 'Cấu trúc',
    content: '4 mạch nội dung, năng lực và 13 chủ đề thành phần',
    subDetails: [
      'Tư duy lấy con người làm trung tâm',
      'Đạo đức AI',
      'Các kỹ thuật và ứng dụng AI',
      'Thiết kế hệ thống AI',
    ],
    badge: '4 mạch · 13 chủ đề',
    iconName: 'Layers',
  },
  {
    key: 'duration',
    title: 'Thời lượng cốt lõi',
    content: '12 tiết/lớp/năm học',
    subDetails: [
      'Bố trí trong kế hoạch giáo dục của nhà trường',
      'Lồng ghép vào kế hoạch dạy học 2 buổi/ngày',
      'Phù hợp điều kiện thực tế, không gây quá tải',
    ],
    badge: '12 tiết/năm',
    iconName: 'Clock',
  },
  {
    key: 'qualities',
    title: 'Phẩm chất và năng lực chung',
    content: 'Góp phần hình thành 5 phẩm chất chủ yếu và phát triển 3 năng lực chung',
    subDetails: [
      '5 phẩm chất: Yêu nước, Nhân ái, Chăm chỉ, Trung thực, Trách nhiệm',
      '3 năng lực: Tự chủ và tự học, Giao tiếp và hợp tác, Giải quyết vấn đề và sáng tạo',
    ],
    badge: '5 phẩm chất · 3 năng lực',
    iconName: 'Award',
  },
  {
    key: 'assessment',
    title: 'Đánh giá',
    content: 'Không quy định bài kiểm tra, bài thi hoặc đầu điểm riêng đối với nội dung giáo dục AI',
    subDetails: [
      'Đánh giá quá trình giữ vai trò chủ đạo',
      'Dựa trên sản phẩm, thái độ và hồ sơ học tập',
      'Không gây áp lực điểm số đối với học sinh',
    ],
    badge: '0 điểm số riêng',
    iconName: 'CheckCircle2',
  },
];

// 2. Mục tiêu lớn nhất
export const BIG_OBJECTIVE = {
  core: 'Hình thành và phát triển năng lực AI để học sinh trở thành công dân số chủ động',
  subtext: 'Có khả năng đáp ứng 5 năng lực cốt lõi trong thời đại công nghệ số:',
  abilities: [
    {
      id: 1,
      title: 'Tương tác với AI',
      description: 'Giao tiếp, đặt câu lệnh, phản hồi và điều hướng các công cụ AI một cách hiệu quả.',
      inPractice: 'Đặt lời nhắc (prompt) rõ ràng, trò chuyện với trợ lý ảo để tra cứu kiến thức.',
    },
    {
      id: 2,
      title: 'Ứng dụng AI trong học tập và cuộc sống',
      description: 'Vận dụng AI để tối ưu hóa việc tiếp thu tri thức, làm việc nhóm và giải quyết sinh hoạt thường nhật.',
      inPractice: 'Tóm tắt bài đọc, gợi ý dàn ý bài viết, hỗ trợ phân loại dữ liệu bài tập nhóm.',
    },
    {
      id: 3,
      title: 'Kiểm chứng, đánh giá kết quả do AI cung cấp',
      description: 'Phản biện, đối chiếu nguồn tin, nhận diện sai lệch, ảo giác AI để không phụ thuộc mù quáng.',
      inPractice: 'Tra cứu chéo sách giáo khoa, nguồn học liệu chuẩn để xác nhận câu trả lời của AI.',
    },
    {
      id: 4,
      title: 'Tham gia kiến tạo sản phẩm, giải pháp ứng dụng AI',
      description: 'Không chỉ là người dùng thụ động mà chủ động sáng tạo công cụ, sản phẩm số phục vụ cộng đồng.',
      inPractice: 'Thiết kế chatbot hỏi đáp nội quy trường, mô hình nhận diện phân loại rác thải.',
    },
    {
      id: 5,
      title: 'Sử dụng và phát triển AI hiệu quả, sáng tạo, có trách nhiệm',
      description: 'Tuân thủ đạo đức số, tôn trọng bản quyền, bảo mật dữ liệu và ý thức tác động xã hội.',
      inPractice: 'Luôn khai báo khi dùng AI hỗ trợ, không sử dụng AI để giả mạo nội dung hoặc gian lận.',
    },
  ],
};

// 3. Bốn mạch kiến thức và bốn miền năng lực
export const FOUR_STRANDS: StrandItem[] = [
  {
    id: 1,
    strand: 'Tư duy lấy con người làm trung tâm',
    competency: 'Xác định nhu cầu thực tế; đánh giá lợi ích, mức độ phù hợp và tác động của AI; duy trì quyền chủ động và kiểm soát của con người.',
    role: 'Định hướng, kiểm soát',
    color: 'emerald',
    icon: 'Compass',
    sampleActivity: 'Học sinh đánh giá liệu có nên dùng AI để chấm điểm bài luận thay giáo viên không, phân tích quyền kiểm soát của con người.',
  },
  {
    id: 2,
    strand: 'Đạo đức AI',
    competency: 'Nhận diện, phân tích các vấn đề về quyền riêng tư, dữ liệu cá nhân, thiên lệch, nội dung giả mạo, bản quyền, trách nhiệm giải trình và tác động xã hội.',
    role: 'Định hướng, kiểm soát',
    color: 'rose',
    icon: 'ShieldCheck',
    sampleActivity: 'Thực hành phát hiện hình ảnh deepfake và phân tích rủi ro lộ dữ liệu khi tải ảnh khuôn mặt lên các ứng dụng trực tuyến.',
  },
  {
    id: 3,
    strand: 'Các kỹ thuật và ứng dụng AI',
    competency: 'Hiểu những khái niệm cơ bản về dữ liệu, thuật toán, mô hình; lựa chọn, sử dụng, kiểm chứng và đánh giá công cụ AI.',
    role: 'Nền tảng hiểu biết & phương pháp',
    color: 'blue',
    icon: 'Cpu',
    sampleActivity: 'Khám phá cách máy học nhận diện hình ảnh qua các nhãn dữ liệu huấn luyện; thử nghiệm công cụ nhận diện giọng nói.',
  },
  {
    id: 4,
    strand: 'Thiết kế hệ thống AI',
    competency: 'Xác định vấn đề, hình thành ý tưởng, thiết kế, thử nghiệm, đánh giá và cải tiến sản phẩm hoặc giải pháp ứng dụng AI.',
    role: 'Vận dụng tổng hợp giải quyết thực tiễn',
    color: 'amber',
    icon: 'Wrench',
    sampleActivity: 'Xây dựng một giải pháp AI đơn giản: tạo bot hỗ trợ ôn tập từ vựng tiếng Anh theo chủ đề cho các bạn trong lớp.',
  },
];

export const STRANDS_RELATIONSHIP = {
  guiding: 'Tư duy lấy con người làm trung tâm và đạo đức AI giữ vai trò định hướng, kiểm soát.',
  foundation: 'Kỹ thuật và ứng dụng AI cung cấp nền tảng hiểu biết và phương pháp.',
  synthesis: 'Thiết kế hệ thống AI thể hiện sự vận dụng tổng hợp để giải quyết vấn đề thực tiễn.',
  corePrinciple: 'Bốn năng lực không được hình thành tách biệt mà được huy động đồng thời trong từng nhiệm vụ học tập.',
};

// 4. Hành trình năng lực qua ba cấp học
export const THREE_LEVEL_JOURNEY: GradeLevelJourney[] = [
  {
    id: 'tieuhoc',
    level: 'Tiểu học',
    grades: 'Lớp 1 – Lớp 5',
    focusTitle: 'Nhận biết và trải nghiệm',
    focusContent:
      'Nhận biết AI trong thiết bị, ứng dụng gần gũi; hiểu AI do con người tạo ra và không có cảm xúc thật; trải nghiệm nhận diện hình ảnh, giọng nói, trợ lý ảo; biết AI học từ dữ liệu và có thể trả lời sai; bảo vệ thông tin cá nhân, tôn trọng bản quyền; hình thành ý tưởng sử dụng AI giải quyết vấn đề gần gũi.',
    methods:
      'Kể chuyện, tranh, thẻ, trò chơi, đóng vai, quan sát, trải nghiệm ngắn và mô phỏng thủ công.',
    keySkills: [
      'Nhận biết AI trong thiết bị đời sống',
      'Hiểu AI do con người tạo ra, không có cảm xúc thật',
      'Trải nghiệm nhận diện hình ảnh, giọng nói',
      'Biết AI học từ dữ liệu & có thể trả lời sai',
      'Bảo vệ thông tin cá nhân & bản quyền',
    ],
    sampleProject: {
      title: 'Trò chơi: "AI có cảm xúc thật không?"',
      description: 'Học sinh đóng vai robot và con người qua thẻ hình, phân biệt sự khác nhau giữa phản hồi được lập trình và cảm xúc thật.',
    },
  },
  {
    id: 'thcs',
    level: 'THCS',
    grades: 'Lớp 6 – Lớp 9',
    focusTitle: 'Hiểu, sử dụng và kiểm chứng',
    focusContent:
      'Hiểu các khái niệm cơ bản về dữ liệu, thuật toán và mô hình; sử dụng AI hỗ trợ học tập, tạo sản phẩm số; kiểm chứng kết quả; nhận diện thiên lệch, nội dung giả mạo và rủi ro quyền riêng tư; xác định tình huống nên hoặc không nên dùng AI; thiết kế, thử nghiệm và cải tiến sản phẩm đơn giản theo nhóm.',
    methods:
      'Điều tra, đặt câu hỏi, so sánh, kiểm chứng, phân tích dữ liệu, xử lý tình huống đạo đức và thử nghiệm giải pháp.',
    keySkills: [
      'Hiểu khái niệm dữ liệu, thuật toán, mô hình',
      'Dùng AI tạo sản phẩm số và hỗ trợ học tập',
      'Kiểm chứng kết quả AI',
      'Nhận diện thiên lệch và thông tin giả mạo',
      'Xác định khi nào NÊN hoặc KHÔNG NÊN dùng AI',
      'Thiết kế sản phẩm đơn giản theo nhóm',
    ],
    sampleProject: {
      title: 'Dự án: "Kiểm chứng thông tin AI cung cấp"',
      description: 'Học sinh nhập một câu hỏi lịch sử vào công cụ AI, sau đó đối chiếu kết quả với tư liệu bảo tàng và sách giáo khoa để tìm lỗi sai lệch.',
    },
  },
  {
    id: 'thpt',
    level: 'THPT',
    grades: 'Lớp 10 – Lớp 12',
    focusTitle: 'Phân tích, phản biện và kiến tạo',
    focusContent:
      'Phân tích quyền kiểm soát và trách nhiệm của con người trong vòng đời hệ thống AI; hiểu AI tạo sinh, AI phân loại, dự đoán, mạng nơ-ron và dữ liệu huấn luyện; sử dụng câu lệnh phù hợp; đánh giá độ tin cậy, giới hạn, sai số và tác động; đề xuất, thiết kế, thử nghiệm và cải tiến giải pháp AI; vận dụng AI trong học tập, nghiên cứu, phục vụ cộng đồng và định hướng nghề nghiệp.',
    methods:
      'Nghiên cứu trường hợp, tranh biện, phân tích dữ liệu hoặc mô hình, đánh giá rủi ro, thực hiện dự án và phản biện phương án.',
    keySkills: [
      'Phân tích quyền kiểm soát và trách nhiệm con người',
      'Hiểu sâu AI tạo sinh, phân loại, mạng nơ-ron',
      'Viết câu lệnh (prompt) chuẩn xác',
      'Đánh giá độ tin cậy, giới hạn và sai số AI',
      'Đề xuất, thiết kế và cải tiến giải pháp AI',
      'Vận dụng định hướng nghề nghiệp và cộng đồng',
    ],
    sampleProject: {
      title: 'Đồ án: "Hệ thống AI hỗ trợ học tập & Phục vụ cộng đồng"',
      description: 'Nhóm học sinh xây dựng mô hình phân loại dữ liệu rác tái chế trong trường học và phản biện về trách nhiệm đạo đức, sai số nhận diện.',
    },
  },
];

// 5. Tiến trình phát triển năng lực
export const PROGRESSION_STAGES = [
  {
    stage: 1,
    title: 'Quan sát, trải nghiệm, nhận biết',
    description: 'Tiếp cận ban đầu thông qua trực quan, cảm nhận và phân biệt các biểu hiện của AI trong đời sống.',
    accentColor: 'indigo',
    icon: 'Eye',
  },
  {
    stage: 2,
    title: 'Tìm hiểu, giải thích, kiểm chứng',
    description: 'Đào sâu nguyên lý hoạt động, giải thích cách thức vận hành và hình thành thói quen đối chiếu dữ liệu.',
    accentColor: 'sky',
    icon: 'Search',
  },
  {
    stage: 3,
    title: 'Phân tích, phản biện, đánh giá',
    description: 'Xem xét nhiều chiều, nhận diện rủi ro sai số, thiên lệch đạo đức và tác động xã hội của hệ thống.',
    accentColor: 'amber',
    icon: 'Scale',
  },
  {
    stage: 4,
    title: 'Đề xuất, thiết kế và cải tiến giải pháp',
    description: 'Chủ động sáng tạo, ứng dụng tổng hợp tri thức để giải quyết bài toán thực tế của học đường và xã hội.',
    accentColor: 'emerald',
    icon: 'Sparkles',
  },
];

export const PROGRESSION_DYNAMICS = [
  {
    title: 'Sự hỗ trợ trực tiếp của giáo viên',
    direction: 'GIẢM DẦN',
    type: 'decrease',
    description: 'Từ cầm tay chỉ việc, hướng dẫn trực tiếp sang vai trò cố vấn, phản biện và đồng hành cùng học sinh.',
    startValue: '100%',
    endValue: '25%',
  },
  {
    title: 'Độ phức tạp của nhiệm vụ',
    direction: 'TĂNG DẦN',
    type: 'increase',
    description: 'Từ quan sát biểu hiện đơn giản đến xử lý bài toán đa biến, thiết kế mô hình và phân tích rủi ro hệ thống.',
    startValue: '20%',
    endValue: '95%',
  },
  {
    title: 'Mức độ tự chủ và trách nhiệm của học sinh',
    direction: 'TĂNG DẦN',
    type: 'increase',
    description: 'Từ trải nghiệm theo chỉ dẫn đến chủ động quyết định, tự chịu trách nhiệm về sản phẩm và tính trung thực.',
    startValue: '15%',
    endValue: '95%',
  },
  {
    title: 'Yêu cầu về kiểm chứng và chất lượng minh chứng',
    direction: 'NGÀY CÀNG CAO',
    type: 'increase',
    description: 'Từ nhận xét bằng mắt thường đến lập bảng đối chiếu nguồn tin, hồ sơ học tập và phản biện khoa học.',
    startValue: '20%',
    endValue: '100%',
  },
];

// 6. Học AI không chỉ là học công cụ
export const SIX_DIMENSIONS: DimensionItem[] = [
  {
    id: 1,
    name: 'Hiểu biết',
    description: 'Hiểu các nguyên lý, bản chất dữ liệu, thuật toán và giới hạn của trí tuệ nhân tạo.',
    example: 'Biết vì sao AI có thể bị ảo giác (hallucination) thay vì coi AI là nguồn chân lý tuyệt đối.',
    icon: 'BookOpen',
  },
  {
    id: 2,
    name: 'Nhiệm vụ và bối cảnh',
    description: 'Nhận biết khi nào nên dùng AI, khi nào không nên dùng AI trong từng bối cảnh cụ thể.',
    example: 'Biết tận dụng AI để tìm ý tưởng bài thuyết trình nhưng không dùng AI để viết hộ bài luận cảm xúc.',
    icon: 'Target',
  },
  {
    id: 3,
    name: 'Mức độ tự chủ',
    description: 'Giữ quyền kiểm soát, tự chủ trong việc ra quyết định, không phụ thuộc máy móc.',
    example: 'Con người là người duyệt cuối cùng và chịu trách nhiệm cho quyết định giải pháp.',
    icon: 'Compass',
  },
  {
    id: 4,
    name: 'Kiểm chứng và chứng cứ',
    description: 'Biết cách tra cứu chéo, tìm minh chứng xác thực cho những gì AI tạo ra.',
    example: 'Lập bảng đối chiếu thông tin AI tạo ra với các bài báo khoa học và dữ liệu chính thống.',
    icon: 'FileCheck',
  },
  {
    id: 5,
    name: 'An toàn và trách nhiệm',
    description: 'Bảo vệ thông tin cá nhân, tôn trọng sở hữu trí tuệ, khai báo trung thực.',
    example: 'Không chia sẻ mật khẩu hay ảnh cá nhân nhạy cảm lên chatbot; ghi rõ nguồn hỗ trợ.',
    icon: 'Shield',
  },
  {
    id: 6,
    name: 'Thiết kế và cải tiến',
    description: 'Khả năng sáng tạo, thiết kế sản phẩm và tinh chỉnh mô hình để phục vụ đời sống.',
    example: 'Cải tiến câu lệnh hoặc dữ liệu mẫu để công cụ đưa ra kết quả sát thực tiễn hơn.',
    icon: 'Lightbulb',
  },
];

export const EMPHASIS_QUOTE = {
  quote: '“Khung không đồng nhất năng lực AI với kỹ năng viết câu lệnh, thao tác công cụ hoặc lập trình.”',
  explanation: 'Công cụ chỉ là phương tiện hỗ trợ hoạt động học tập và tạo minh chứng cho năng lực.',
};

// 7. Cách tổ chức trong nhà trường
export const SCHOOL_ORGANIZATION = [
  {
    id: 'core',
    type: 'Nội dung cốt lõi',
    badge: '12 tiết / lớp / năm',
    color: 'indigo',
    points: [
      'Bảo đảm các yêu cầu cần đạt thiết yếu đối với mọi học sinh;',
      'Tổ chức thành các chuyên đề giáo dục AI với thời lượng 12 tiết/lớp/năm học;',
      'Bố trí trong kế hoạch giáo dục của nhà trường và kế hoạch dạy học 2 buổi/ngày;',
      'Phù hợp đặc điểm học sinh, điều kiện thực tế và không gây áp lực, quá tải.',
    ],
  },
  {
    id: 'extended',
    type: 'Nội dung mở rộng',
    badge: 'Ngoài 12 tiết · Tự nguyện',
    color: 'emerald',
    points: [
      'Có thể tổ chức ngoài 12 tiết thông qua câu lạc bộ, dự án, hoạt động trải nghiệm, ngoại khóa, nghiên cứu hoặc hình thức phù hợp khác.',
      'Nội dung mở rộng không thay thế nội dung cốt lõi và phải bảo đảm cơ hội tiếp cận công bằng cho học sinh.',
    ],
  },
  {
    id: 'integrated',
    type: 'Lồng ghép',
    badge: 'Liên môn · STEM / STEAM',
    color: 'violet',
    points: [
      'Kiến thức, kỹ năng AI được củng cố và vận dụng thông qua các môn học, hoạt động giáo dục, dạy học liên môn, hoạt động STEM/STEAM và những vấn đề thực tiễn của nhà trường, cộng đồng, địa phương.',
      'Việc lồng ghép không làm thay đổi hoặc gia tăng yêu cầu cần đạt của môn học và hoạt động giáo dục.',
    ],
  },
];

// 8. Đánh giá học sinh như thế nào
export const ASSESSMENT_PRINCIPLES = [
  {
    id: 1,
    title: 'Đánh giá quá trình giữ vai trò chủ đạo',
    description: 'Theo dõi sự tiến bộ, thái độ học tập và tư duy phản biện qua từng hoạt động thay vì điểm thi một lần.',
    icon: 'Activity',
  },
  {
    id: 2,
    title: 'Không tổ chức bài kiểm tra định kỳ và không xác lập đầu điểm riêng',
    description: 'Giáo dục AI không tạo thêm áp lực thi cử hay gánh nặng điểm số cho học sinh phổ thông.',
    icon: 'CheckCircle',
  },
  {
    id: 3,
    title: 'Không kết luận toàn bộ năng lực từ một sản phẩm hay một công cụ',
    description: 'Không đánh giá toàn diện chỉ từ một sản phẩm, một lần thực hiện nhiệm vụ hoặc kết quả dùng một công cụ đơn lẻ.',
    icon: 'Layers',
  },
  {
    id: 4,
    title: 'Không gây bất lợi do điều kiện thiết bị hay kết nối',
    description: 'Không gây bất lợi do học sinh thiếu thiết bị, tài khoản, kết nối Internet hoặc khả năng tiếp cận một công cụ AI cụ thể.',
    icon: 'HeartHandshake',
  },
];

export const ASSESSMENT_EVIDENCES = [
  'Câu trả lời',
  'Phiếu học tập',
  'Kết quả xử lý tình huống',
  'Bảng kiểm chứng thông tin',
  'Sơ đồ, mô hình',
  'Sản phẩm số',
  'Nguyên mẫu (prototype)',
  'Báo cáo thử nghiệm',
  'Bài trình bày',
  'Kết quả phản biện',
  'Nhật ký học tập',
  'Hồ sơ học tập (portfolio)',
];

export const AI_DECLARATION_RULES = {
  requirement: 'Khi sử dụng AI, học sinh cần khai báo 4 nội dung:',
  fields: [
    {
      id: 'tool',
      label: 'Công cụ AI đã sử dụng',
      placeholder: 'Ví dụ: ChatGPT, Google Gemini, Canva Magic Write...',
      guide: 'Nêu tên cụ thể của mô hình hoặc phần mềm hỗ trợ.',
    },
    {
      id: 'purpose',
      label: 'Mục đích và phạm vi AI hỗ trợ',
      placeholder: 'Ví dụ: Tìm kiếm ý tưởng ban đầu, tóm tắt bài báo, gợi ý bố cục slide...',
      guide: 'Chỉ rõ AI tham gia vào khâu nào của nhiệm vụ học tập.',
    },
    {
      id: 'student_work',
      label: 'Phần việc học sinh trực tiếp thực hiện',
      placeholder: 'Ví dụ: Tự viết nội dung chi tiết, vẽ sơ đồ, chọn lọc tư liệu, liên hệ thực tế...',
      guide: 'Khẳng định dấu ấn tư duy và công sức tự thân của người học.',
    },
    {
      id: 'verification',
      label: 'Cách kiểm chứng và chỉnh sửa kết quả',
      placeholder: 'Ví dụ: Đối chiếu số liệu với SGK Lịch sử lớp 11, sửa 2 lỗi sai về mốc thời gian...',
      guide: 'Chứng minh học sinh không phụ thuộc mù quáng vào AI.',
    },
  ],
  conclusion:
    'Việc khai báo sử dụng AI là minh chứng về tính trung thực và trách nhiệm, không phải căn cứ để tự động tăng hoặc giảm kết quả đánh giá.',
};

export const TABS_CONFIG = [
  { id: 1, title: 'Thông tin chung', shortTitle: '1. Thông tin chung', badge: 'Lớp 1-12' },
  { id: 2, title: 'Mục tiêu lớn nhất', shortTitle: '2. Mục tiêu lớn', badge: 'Công dân số' },
  { id: 3, title: 'Bốn mạch kiến thức & năng lực', shortTitle: '3. Bốn mạch', badge: '4 Mạch' },
  { id: 4, title: 'Hành trình qua ba cấp học', shortTitle: '4. Ba cấp học', badge: 'Tiểu học - THPT' },
  { id: 5, title: 'Tiến trình phát triển năng lực', shortTitle: '5. Tiến trình', badge: '4 Bước' },
  { id: 6, title: 'Không chỉ là học công cụ', shortTitle: '6. Không chỉ công cụ', badge: '6 Phương diện' },
  { id: 7, title: 'Cách tổ chức trong nhà trường', shortTitle: '7. Tổ chức dạy học', badge: '12 Tiết cốt lõi' },
  { id: 8, title: 'Đánh giá học sinh như thế nào', shortTitle: '8. Đánh giá', badge: 'Khai báo AI' },
];
