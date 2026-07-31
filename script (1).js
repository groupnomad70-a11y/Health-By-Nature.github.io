  const burgerBtn = document.getElementById('burgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuClose = document.getElementById('menuClose');

  function openMobileMenu(){
    mobileMenu.classList.add('active');
    burgerBtn.setAttribute('aria-expanded','true');
  }
  function closeMobileMenu(){
    mobileMenu.classList.remove('active');
    burgerBtn.setAttribute('aria-expanded','false');
  }

  burgerBtn.addEventListener('click', openMobileMenu);
  menuClose.addEventListener('click', closeMobileMenu);
