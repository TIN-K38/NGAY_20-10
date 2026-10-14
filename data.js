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
    ten: "Nguyễn Thị Lan",
    goiTat: ["lan", "co lan", "cô lan"],
    theme: "theme-1",
    thiep: "images/co-lan.jpg",
    loiChuc: "Kính chúc cô Lan luôn mạnh khỏe, hạnh phúc bên gia đình và tràn đầy nhiệt huyết trên hành trình giảng dạy. Chúc cô có một ngày 20/10 thật vui vẻ và ý nghĩa!"
  },
  {
    ten: "Vũ Thị Bích Diệp",
    goiTat: ["diệp", "diep", "co diep", "vu thi bich diep", "cô diệp"],
    theme: "theme-2",
    thiep: "images/co-diep.jpg",
    loiChuc: "Kính chúc cô Diệp luôn mạnh khỏe, hạnh phúc bên gia đình và tràn đầy nhiệt huyết trên hành trình giảng dạy. Chúc cô có một ngày 20/10 thật vui vẻ và ý nghĩa!"
  },
  {
    ten: "Dương Thị Bình",
    goiTat: ["binh", "co binh", "cô Bình", "Cô Bình"],
    theme: "theme-3",
    thiep: "images/co-binh.jpg",
    loiChuc: "Kính chúc cô Bình luôn mạnh khỏe, hạnh phúc bên gia đình và tràn đầy nhiệt huyết với những con số trên hành trình giảng dạy. Chúc cô có một ngày 20/10 thật vui vẻ và ý nghĩa!"
  },
  {
    ten: "Ngô Thị Thanh Huyền",
    goiTat: ["huyen", "co huyen", "thanh huyen", "ngo huyen", "cô Huyền", "Thanh Huyền"],
    theme: "theme-4",
    thiep: "images/co-huyen.jpg",
    loiChuc: "Kính chúc cô Huyền luôn mạnh khỏe, hạnh phúc bên gia đình và tràn đầy nhiệt huyết trên hành trình giảng dạy. Chúc cô có một ngày 20/10 thật vui vẻ và ý nghĩa!"
  },
  {
    ten: "[TÊN CÔ 5]",
    goiTat: ["[tên gọi tắt 5]"],
    theme: "theme-5",
    thiep: "images/co-5.jpg",
    loiChuc: "[LỜI CHÚC CÔ 5]"
  },
  {
    ten: "[TÊN CÔ 6]",
    goiTat: ["[tên gọi tắt 6]"],
    theme: "theme-6",
    thiep: "images/co-6.jpg",
    loiChuc: "[LỜI CHÚC CÔ 6]"
  },
  {
    ten: "[TÊN CÔ 7]",
    goiTat: ["[tên gọi tắt 7]"],
    theme: "theme-7",
    thiep: "images/co-7.jpg",
    loiChuc: "[LỜI CHÚC CÔ 7]"
  }
];

// Thiệp chung cho tên không có trong danh sách
const LOI_CHUC_CHUNG = "Nhân ngày 20/10, chúng em xin kính chúc cô luôn mạnh khỏe, hạnh phúc và tràn đầy niềm vui. Cảm ơn cô đã luôn tận tâm dìu dắt chúng em!";
