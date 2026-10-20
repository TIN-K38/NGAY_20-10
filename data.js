// =====================================================================
// DỮ LIỆU 7 CÔ GIÁO & PHỤ HUYNH --> CHỈ CẦN SỬA FILE NÀY ĐỂ THÊM/ĐỔI NỘI DUNG
//
// ten      : tên đầy đủ, KHÔNG cần chữ "Cô" (web tự thêm)
// goiTat   : các cách gọi ngắn. Gõ đúng nguyên cụm mới khớp (không cần dấu,
//            không phân biệt hoa thường). Ví dụ "lan", "co lan"
// theme    : "theme-1" ... "theme-7" (màu của nhóm giao diện)
// thiep    : (tuỳ chọn) ảnh thiệp HOÀN CHỈNH do nhóm thiệp làm, ví dụ
//            "images/co-lan.jpg". Có dòng này thì web hiện nguyên tấm ảnh.
// hoaTiet  : (tuỳ chọn) ảnh họa tiết nhỏ nằm trong khung thiệp chữ
// loiChuc  : lời chúc. Nếu có "thiep" thì vẫn nên điền làm dự phòng khi ảnh lỗi
//
// Tên file ảnh: viết thường, không dấu, không khoảng trắng, khớp từng chữ.
// =====================================================================
const DANH_SACH_CO = [
  {
    ten: "Nguyễn Thị Tình",
    goiTat: ["tinh", "co tinh", "cô tình", "nguyen thi tinh"],
    theme: "theme-1",
    thiep: "images/tinh.png",
    loiChuc: "Nhân ngày 20/10, chúng em kính chúc cô Tình luôn mạnh khỏe, vui vẻ và hạnh phúc! Cảm ơn cô vì những tiết học Hoạt động trải nghiệm đầy ắp tiếng cười và những trò chơi thú vị giúp lớp chúng em gắn kết với nhau hơn. Chúc cô luôn tràn đầy năng lượng để tiếp tục đồng hành cùng chúng em!"
  },
  {
    ten: "Vũ Thị Bích Diệp",
    goiTat: ["diep", "co diep", "vu thi bich diep", "cô diệp", "bích diệp", "bich diep"],
    theme: "theme-2",
    thiep: "images/codiep.png",
    loiChuc: "Kính chúc cô Diệp kính yêu có một ngày 20/10 thật trọn vẹn và ý nghĩa! Cảm ơn cô đã không chỉ truyền cho chúng em những kiến thức Tin học bổ ích, mà còn luôn bao dung, lo lắng và bảo bọc chúng em với tư cách là một cô giáo chủ nhiệm. Chúng em chúc cô luôn giữ mãi nụ cười rạng rỡ và ngọn lửa nhiệt huyết trên bục giảng!"
  },
  {
    ten: "Hồn",
    goiTat: ["lớp trưởng", "lop", "lốp trưởng"],
    theme: "theme-2",
    thiep: "images/Lê Duy Trường.png",
    loiChuc: ""
  },
  {
    ten: "Dương Thị Bình",
    goiTat: ["binh", "co binh", "cô bình", "duong thi binh"],
    theme: "theme-3",
    thiep: "images/binhtoan.png",
    loiChuc: "Kính chúc cô Bình kính yêu một ngày 20/10 thật nhiều hoa và những lời chúc tốt đẹp! Cảm ơn cô đã luôn kiên nhẫn dẫn dắt chúng em đi qua những bài toán khó của môn học và cả những 'bài toán' của cuộc sống. Chúc cô luôn mạnh khỏe, hạnh phúc và giữ mãi ngọn lửa nhiệt huyết trên bục giảng!"
  },
  {
    ten: "Ngô Thị Thanh Huyền",
    goiTat: ["huyen", "co huyen", "thanh huyen", "ngo huyen", "cô huyền", "ngo thi thanh huyen"],
    theme: "theme-4",
    thiep: "images/huyenhoa.png",
    loiChuc: "Kính chúc cô Huyền có một ngày 20/10 ngập tràn niềm vui và hoa! Cảm ơn cô đã luôn là 'chất xúc tác' tuyệt vời, biến những tiết học Hóa khô khan thành những bài học đầy thú vị và sắc màu. Chúc cô luôn mạnh khỏe, giữ vững ngọn lửa đam mê và gặt hái được nhiều thành công trên bục giảng!"
  },
  {
    ten: "Nguyễn Thị Hồng Nhung",
    goiTat: ["nhung", "co nhung", "cô nhung", "hồng nhung", "hong nhung", "nguyen thi hong nhung"],
    theme: "theme-5",
    thiep: "images/nhungvan.png",
    loiChuc: "Kính chúc cô Nhung kính yêu luôn mạnh khỏe, hạnh phúc và luôn giữ mãi ngọn lửa đam mê với văn học. Cảm ơn cô đã mang những lời hay ý đẹp, những bài học làm người sâu sắc vào bài giảng, chắp cánh cho tâm hồn chúng em thêm bay bổng. Chúc cô có một ngày 20/10 thật trọn vẹn và ý nghĩa!"
  },
  {
    ten: "Đinh Thị Thu Hường",
    goiTat: ["co thu huong", "thu huong", "cô thu hường", "huong ta", "hường", "dinh thi thu huong"],
    theme: "theme-6",
    thiep: "images/huonganh.png",
    loiChuc: "Dear Ms. Huong, on Vietnamese Women's Day, we want to express our deepest gratitude to you. Thank you for making every English lesson so inspiring and for being such a wonderful teacher. Wishing you a happy October 20th filled with love, laughter, and beautiful flowers!"
  },
  {
    ten: "Trần Thị Hường",
    goiTat: ["co thi huong", "thi huong", "cô thi hường", "huong qpan", "hường qpan", "tran thi huong"],
    theme: "theme-7",
    thiep: "images/hl.png",
    loiChuc: "Kính chúc cô Hường có một ngày Phụ nữ Việt Nam 20/10 thật ý nghĩa! Cảm ơn cô đã mang đến cho chúng em những bài học QPAN đầy bổ ích, rèn luyện cho chúng em tác phong kỷ luật, nghiêm túc và lòng yêu nước. Chúc cô giáo - người 'chiến sĩ' trên bục giảng của chúng em luôn mạnh khỏe, hạnh phúc và luôn giữ mãi ngọn lửa nhiệt huyết!"
  },
  {
    ten: "Nguyễn Anh Minh 01/10",
    goiTat: ["anh minh 0110"],
    theme: "theme-1",
    thiep: "images/NguyenAnhMinh0110.png",
    loiChuc: "Con chúc mẹ mãi trẻ, tươi cười như tuổi 18 !" // Đã sửa từ loichuc thành loiChuc
  },
  {
    ten: "QUANG gaY",
    goiTat: ["quanggay"],
    theme: "theme-1",
    thiep: "images/KE GAY PHAI CO LONG NGAI.png",
    loiChuc: "gay" // Đã sửa từ loichuc thành loiChuc
  },
  {
    ten: "Bài Đức Tuồi",
    goiTat: ["Tiền Chó Đai", "Bài Tuồi"],
    theme: "theme-1",
    thiep: "images/baiductuoi.png",
    loiChuc: "god meme"
  },
  {
    ten: "Bình Minh bel",
    goiTat: ["minh gay", "thằng vừa lùn vừa xấu"],
    theme: "theme-1",
    thiep: "images/binhminh2.png",
    loiChuc: "" // Đã sửa từ loichuc thành loiChuc
  },
  {
    ten: "Vương Anh Kiệt",
    goiTat: ["kiet", "vuong kiet"],
    theme: "theme-1",
    thiep: "images/Kiet.jfif",
    loiChuc: ""
  },
  {
    ten: "Dương Bình Minh",
    goiTat: ["Bình Minh", "dương bình minh"],
    theme: "theme-1",
    thiep: "images/Dương Bình Minh.jpg",
    loiChuc: "hehe"
  },
  {
    ten: "Lê Mai Trang",
    goiTat: ["hieu1"],
    theme: "theme-1",
    thiep: "images/hieu1.jfif",
    loiChuc: ""
  },
  {
    ten: "Lý Hoài Chi",
    goiTat: ["hieu2"],
    theme: "theme-1",
    thiep: "images/hieu2.jfif",
    loiChuc: ""
  },
  {
    ten: "Đỗ Nhật Minh",
    goiTat: ["dnm"],
    theme: "theme-1",
    thiep: "images/donhatminh.jfif",
    loiChuc: ""
  },
  {
    ten: "Hà Minh Quang",
    goiTat: ["quang"],
    theme: "theme-1",
    thiep: "images/haminhquang.png",
    loiChuc: ""
  },
  {
    ten: "Giá Minh Hiếu",
    goiTat: ["Hiếu", "hieu"],
    theme: "theme-1",
    thiep: "images/hieu.jfif",
    loiChuc: ""
  },
  {
    ten: "Lường Minh Phú",
    goiTat: ["Phú", "phu"],
    theme: "theme-1",
    thiep: "images/phu.png",
    loiChuc: ""
  },
  {
    ten: "ĐỖ THU GIANG",
    goiTat: ["Giang"],
    theme: "theme-1",
    thiep: "images/giang.jfif",
    loiChuc: ""
  },
  {
    ten: "Nguyễn Bá Lâm",
    goiTat: ["Bá Lâm", "stdwlamo"],
    theme: "theme-1",
    thiep: "images/bakhi.jfif",
    loiChuc: ""
  },
  {
    ten: "Trương Đức Lâm",
    goiTat: ["đức lâm", "thằng bệnh cầm khóa tủ điện thoại"],
    theme: "theme-1",
    thiep: "images/DUCLAM.jfif",
    loiChuc: ""
  },
  {
    ten: "Trần Đức Minh",
    goiTat: ["trần đức minh", "đm"],
    theme: "theme-1",
    thiep: "images/TRẦN ĐỨC MINH.jpg",
    loiChuc: ""
  },
  {
    ten: "Mế Hiền",
    goiTat: ["Mế", "Hiền"],
    theme: "theme-1",
    thiep: "images/Mế Hiền.jpg",
    loiChuc: ""
  },
  {
    ten: "HỨA THỊ THÙY DƯƠNG",
    goiTat: ["dương", "duong"],
    theme: "theme-1",
    thiep: "images/duong.jfif",
    loiChuc: ""
  }
]

// Thiệp chung cho tên không có trong danh sách
const LOI_CHUC_CHUNG = "Nhân ngày 20/10, chúng em xin kính chúc cô luôn mạnh khỏe, hạnh phúc và tràn đầy niềm vui. Cảm ơn cô đã luôn tận tâm dìu dắt chúng em!";
