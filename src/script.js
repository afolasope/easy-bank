const toggleBtn = document.querySelector('.toggle-bar');
const NavItems = document.querySelector('.nav');
const openNav = document.querySelector('.open-nav');
const closeNav = document.querySelector('.close-nav');
const overlay = document.querySelector('.overlay');

const toggleNavbar = function (e) {
  if (e.target.classList.contains('open-nav')) {
    NavItems.classList.add('show-nav');
    NavItems.classList.remove('hide-nav');
    openNav.classList.add('hidden');
    closeNav.classList.remove('hidden');
    overlay.classList.add('show-overlay');
  } else if (e.target.classList.contains('close-nav')) {
    NavItems.classList.remove('show-nav');
    NavItems.classList.add('hide-nav');
    openNav.classList.remove('hidden');
    closeNav.classList.add('hidden');
    overlay.classList.remove('show-overlay');
  }
};

overlay.addEventListener('click', function () {
  NavItems.classList.remove('show-nav');
  NavItems.classList.add('hide-nav');
  openNav.classList.remove('hidden');
  closeNav.classList.add('hidden');
  overlay.classList.remove('show-overlay');
});

toggleBtn.addEventListener('click', toggleNavbar);
