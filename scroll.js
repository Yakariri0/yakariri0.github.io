
window.addEventListener('scroll', reveal);
function reveal() {
  var reveals = document.querySelectorAll('.reveal');
  for (var i = 0; i < reveals.length; i++) {
    var element = reveals[i];
    if (element.closest('#testimonials') || element.closest('#contact') || element.closest('footer')) {
      element.classList.add('active');
      continue;
    }
    var windowHeight = window.innerHeight;
    var elementTop = element.getBoundingClientRect().top;
    var elementVisible = 100;
    if (elementTop < windowHeight - elementVisible) {
      element.classList.add('active');
    } else {
      element.classList.remove('active');
    }
  }
}
