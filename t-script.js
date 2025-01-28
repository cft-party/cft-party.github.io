// Loader Script
window.addEventListener('load', function () {
  const loader = document.querySelector('.loader');
  // ซ่อน Loader หลังจากโหลดหน้าเว็บเสร็จ
  loader.classList.add('hidden');
});

// Menu Button Script
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
