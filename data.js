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
    goiTat: ["lan", "co lan"],
    theme: "theme-1",
    thiep: "images/co-lan.jpg",
    loiChuc: "Kính chúc cô Lan luôn mạnh khỏe, hạnh phúc bên gia đình và tràn đầy nhiệt huyết trên hành trình giảng dạy. Chúc cô có một ngày 20/10 thật vui vẻ và ý nghĩa!"
  },
  {
    ten: "[TÊN CÔ 2]",
    goiTat: ["[tên gọi tắt 2]"],
    theme: "theme-2",
    thiep: "images/co-2.jpg",
    loiChuc: "[LỜI CHÚC CÔ 2]"
  },
  {
    ten: "[TÊN CÔ 3]",
    goiTat: ["[tên gọi tắt 3]"],
    theme: "theme-3",
    thiep: "images/co-3.jpg",
    loiChuc: "[LỜI CHÚC CÔ 3]"
  },
  {
    ten: "[TÊN CÔ 4]",
    goiTat: ["[tên gọi tắt 4]"],
    theme: "theme-4",
    thiep: "images/co-4.jpg",
    loiChuc: "[LỜI CHÚC CÔ 4]"
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
