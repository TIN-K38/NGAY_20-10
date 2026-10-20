// Logic của trang. Dữ liệu các cô nằm trong data.js

const inputEl = document.getElementById('ten-input');
const thongBao = document.getElementById('thong-bao');
const formScreen = document.getElementById('form-screen');
const cardScreen = document.getElementById('card-screen');
const card = document.querySelector('.card');
const imgEl = card.querySelector('.hoa-tiet');
const tenEl = card.querySelector('.ten-co');
const loiEl = card.querySelector('.loi-chuc');
const audio = document.getElementById('bg-music');
const btnMusic = document.getElementById('btn-music');

// Bỏ dấu, bỏ khoảng trắng thừa, không phân biệt hoa thường
function chuanHoa(s) {
  return s.toLowerCase()
    .replace(/đ/g, 'd')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

// Khớp CHÍNH XÁC (không dùng includes) để "Thùy Lan" không ra nhầm cô Lan
function timCo(tenNhap) {
  const k = chuanHoa(tenNhap);
  if (!k) return null;
  return DANH_SACH_CO.find(co =>
    chuanHoa(co.ten) === k ||
    chuanHoa('cô ' + co.ten) === k ||
    co.goiTat.some(t => chuanHoa(t) === k)
  ) || null;
}

function hienThiep(co, tenNhap) {
  // Màu theo từng cô (theme áp lên #card-screen để nền đổi màu theo)
  cardScreen.className = (co && co.theme) || 'theme-1';

  // Dùng textContent (không dùng innerHTML) để ký tự lạ không làm hỏng trang
  tenEl.textContent = co ? co.ten : tenNhap;
  loiEl.textContent = co ? co.loiChuc : LOI_CHUC_CHUNG;

  // Ảnh: nếu tải được thì hiện, lỗi thì tự quay về thiệp chữ
  card.classList.remove('full', 'open');
  imgEl.hidden = true;
  imgEl.onload = null;
  imgEl.onerror = null;
  const src = co && (co.thiep || co.hoaTiet);
  if (src) {
    imgEl.onload = () => {
      imgEl.hidden = false;
      if (co.thiep) card.classList.add('full');
    };
    imgEl.onerror = () => {
      imgEl.hidden = true;
      card.classList.remove('full');
    };
    imgEl.src = src;
  }

  formScreen.hidden = true;
  cardScreen.hidden = false;

  // Chờ 1 nhịp để hiệu ứng CSS (class open) chạy
  requestAnimationFrame(() => {
    requestAnimationFrame(() => card.classList.add('open'));
  });

  chayPhaoHoa();
}

function xuLy() {
  const ten = inputEl.value.trim();
  if (!ten) {
    thongBao.textContent = 'Bạn hãy nhập tên cô giáo nhé!';
    return;
  }
  thongBao.textContent = '';

  // Phát nhạc (trình duyệt có thể chặn, không sao)
  audio.play().then(() => {
    btnMusic.hidden = false;
    btnMusic.textContent = '🔊';
  }).catch(() => {});

  hienThiep(timCo(ten), ten);
}

function chayPhaoHoa() {
  if (typeof confetti !== 'function') return; // mất mạng thì bỏ qua, không lỗi
  const end = Date.now() + 2000;
  const colors = ['#e91e63', '#ffffff', '#ffd1dc', '#ff0055'];
  (function frame() {
    confetti({ particleCount: 3, angle: 60, spread: 55, origin: { x: 0, y: 0.7 }, colors });
    confetti({ particleCount: 3, angle: 120, spread: 55, origin: { x: 1, y: 0.7 }, colors });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
}

function quayLai() {
  card.classList.remove('open', 'full');
  cardScreen.hidden = true;
  formScreen.hidden = false;
  inputEl.value = '';
  thongBao.textContent = '';
  inputEl.focus();
}

document.getElementById('mo-thiep').addEventListener('click', xuLy);
document.getElementById('lam-lai').addEventListener('click', quayLai);
inputEl.addEventListener('keydown', e => { if (e.key === 'Enter') xuLy(); });

btnMusic.addEventListener('click', () => {
  if (audio.paused) { audio.play().catch(() => {}); btnMusic.textContent = '🔊'; }
  else { audio.pause(); btnMusic.textContent = '🔇'; }
});
