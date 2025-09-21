// REVEAL SECTIONS
const sections = document.querySelectorAll('.section');
const revealOnScroll = () => {
  const triggerBottom = window.innerHeight / 5 * 4;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if(sectionTop < triggerBottom) { section.classList.add('visible'); }
  });
};
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// RIPPLE BUTTON EFFECT
document.querySelectorAll('.ripple-button').forEach(button => {
  button.addEventListener('click', function(e){
    const circle = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    circle.style.width = circle.style.height = size + 'px';
    circle.style.left = e.clientX - rect.left - size/2 + 'px';
    circle.style.top = e.clientY - rect.top - size/2 + 'px';
    circle.classList.add('ripple');
    button.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
  });
});

// CONFETTI
const confettiWrapper = document.querySelector('.confetti-wrapper');
for(let i=0;i<50;i++){
  const confetti = document.createElement('div');
  confetti.classList.add('confetti');
  confetti.style.left = Math.random()*100+'vw';
  confetti.style.animationDuration = (Math.random()*3+2)+'s';
  confetti.style.background = `hsl(${Math.random()*360},100%,70%)`;
  confettiWrapper.appendChild(confetti);
}

// NAV LINK ACTIVE STATE
const navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
  let fromTop = window.scrollY + 80;
  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    if(section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop){
      link.classList.add('active');
    } else { link.classList.remove('active'); }
  });
});

// HAMBURGER MENU
const hamburger = document.querySelector('.hamburger');
const navLinksContainer = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinksContainer.classList.toggle('open');
});
