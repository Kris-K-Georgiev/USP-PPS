document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navbarLinks = document.querySelector('.navbar-links');

  hamburger.addEventListener('click', function() {
    navbarLinks.classList.toggle('active');
  });
});
