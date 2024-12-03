window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  const scrollClass = 'backdrop-blur-md bg-darkmode/60 shadow-md';

  if (window.scrollY > 50) {
    header.classList.add(...scrollClass.split(' '));
  } else {
    header.classList.remove(...scrollClass.split(' '));
  }
});

// Mengambil elemen penting
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
const header = document.querySelector('header');

// Toggle menu saat hamburger diklik
hamburger.addEventListener('click', function () {
  navMenu.classList.toggle('hidden');
  hamburger.classList.toggle('hamburger-active'); // Untuk animasi hamburger (jika ada)
});

// Menutup menu jika klik di luar menu
window.addEventListener('click', function (e) {
  if (e.target !== hamburger && !hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.add('hidden');
    hamburger.classList.remove('hamburger-active'); // Reset animasi hamburger
  }
});

// Menambahkan efek scroll untuk header
window.addEventListener('scroll', function () {
  const scrollClass = 'backdrop-blur-md bg-darkmode/60 shadow-md';

  if (window.scrollY > 50) {
    header.classList.add(...scrollClass.split(' '));
  } else {
    header.classList.remove(...scrollClass.split(' '));
  }
});
