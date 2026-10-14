// =====================================================================
// DỮ LIỆU 7 CÔ GIÁO  -->  CHỈ CẦN SỬA FILE NÀY ĐỂ THÊM/ĐỔI NỘI DUNG
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
    goiTat: ["tinh", "co tinh"],
    theme: "theme-1",
    thiep: "images/CoTinh.png",
    loiChuc: "Nhân ngày 20/10, chúng em kính chúc cô Tình luôn mạnh khỏe, vui vẻ và hạnh phúc! Cảm ơn cô vì những tiết học Hoạt động trải nghiệm đầy ắp tiếng cười và những trò chơi thú vị giúp lớp chúng em gắn kết với nhau hơn. Chúc cô luôn tràn đầy năng lượng để tiếp tục đồng hành cùng chúng em!"
  },
  {
    ten: "Vũ Thị Bích Diệp",
    goiTat: ["diệp", "diep", "co diep", "vu thi bich diep", "cô diệp"],
    theme: "theme-2",
    thiep: "images/CoDiep.jfif",
    loiChuc: "Kính chúc cô Diệp kính yêu có một ngày 20/10 thật trọn vẹn và ý nghĩa! Cảm ơn cô đã không chỉ truyền cho chúng em những kiến thức Tin học bổ ích, mà còn luôn bao dung, lo lắng và bảo bọc chúng em với tư cách là một cô giáo chủ nhiệm. Chúng em chúc cô luôn giữ mãi nụ cười rạng rỡ và ngọn lửa nhiệt huyết trên bục giảng!"
  },
  {
    ten: "Dương Thị Bình",
    goiTat: ["binh", "co binh", "cô Bình", "Cô Bình"],
    theme: "theme-3",
    thiep: "images/CoBinh.jfif",
    loiChuc: "Kính chúc cô Bình kính yêu một ngày 20/10 thật nhiều hoa và những lời chúc tốt đẹp! Cảm ơn cô đã luôn kiên nhẫn dẫn dắt chúng em đi qua những bài toán khó của môn học và cả những 'bài toán' của cuộc sống. Chúc cô luôn mạnh khỏe, hạnh phúc và giữ mãi ngọn lửa nhiệt huyết trên bục giảng!"
  },
  {
    ten: "Ngô Thị Thanh Huyền",
    goiTat: ["huyen", "co huyen", "thanh huyen", "ngo huyen", "cô Huyền", "Thanh Huyền"],
    theme: "theme-4",
    thiep: "images/CoHuyen.jpg",
    loiChuc: "Kính chúc cô Huyền có một ngày 20/10 ngập tràn niềm vui và hoa! Cảm ơn cô đã luôn là 'chất xúc tác' tuyệt vời, biến những tiết học Hóa khô khan thành những bài học đầy thú vị và sắc màu. Chúc cô luôn mạnh khỏe, giữ vững ngọn lửa đam mê và gặt hái được nhiều thành công trên bục giảng!"
  },
  {
    ten: "Nguyễn Thị Hồng Nhung",
    goiTat: ["nhung", "co nhung", "cô nhung"],
    theme: "theme-5",
    thiep: "images/CoNhung.jfif",
    loiChuc: "Kính chúc cô Nhung kính yêu luôn mạnh khỏe, hạnh phúc và luôn giữ mãi ngọn lửa đam mê với văn học. Cảm ơn cô đã mang những lời hay ý đẹp, những bài học làm người sâu sắc vào bài giảng, chắp cánh cho tâm hồn chúng em thêm bay bổng. Chúc cô có một ngày 20/10 thật trọn vẹn và ý nghĩa!"
  },
  {
    ten: "Đinh Thị Thu Hường",
    goiTat: ["co thu huong", "thu huong"],
    theme: "theme-6",
    thiep: "images/CoHuongTA.jpg",
    loiChuc: "Dear Ms. Huong, on Vietnamese Women's Day, we want to express our deepest gratitude to you. Thank you for making every English lesson so inspiring and for being such a wonderful teacher. Wishing you a happy October 20th filled with love, laughter, and beautiful flowers!"
  },
  {
    ten: "Trần Thị Hường",
    goiTat: ["co thi huong", "thi huong"],
    theme: "theme-7",
    thiep: "images/CoHuongQPAN.jfif",
    loiChuc: "Kính chúc cô Hường có một ngày Phụ nữ Việt Nam 20/10 thật ý nghĩa! Cảm ơn cô đã mang đến cho chúng em những bài học QPAN đầy bổ ích, rèn luyện cho chúng em tác phong kỷ luật, nghiêm túc và lòng yêu nước. Chúc cô giáo - người 'chiến sĩ' trên bục giảng của chúng em luôn mạnh khỏe, hạnh phúc và luôn giữ mãi ngọn lửa nhiệt huyết!"
  },
  {
    ten: "Quang gay",
    goiTat: ["quanggay", "cap quang"],
    theme: "theme-7",
    thiep: "images/KE GAY PHAI CO LONG NGAI.png",
    loiChuc: "GOD QUANG GAY NUMBER ONE!"
  },
  {
    ten: "Bình Minh bel",
    goiTat: ["minh gay", "thằng vừa lùn vừa xấu"],
    theme: "theme-7",
    thiep: "images/binhminh2.png",
    loiChuc: "Chúc Bình Minh bel mãi gay, vừa lùn vừa xấu"
  }
];

// Thiệp chung cho tên không có trong danh sách
const LOI_CHUC_CHUNG = "Nhân ngày 20/10, chúng em xin kính chúc cô luôn mạnh khỏe, hạnh phúc và tràn đầy niềm vui. Cảm ơn cô đã luôn tận tâm dìu dắt chúng em!";
