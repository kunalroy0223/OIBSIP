// scripts.js
document.addEventListener('DOMContentLoaded', () => {

  /* ================= HERO ANIMATION ================= */
  anime.timeline({ loop: false })
    .add({
      targets: '#hero h1',
      translateY: [-50, 0],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 1200
    })
    .add({
      targets: '#hero h3',
      translateY: [-30, 0],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 1000,
      offset: '-=800'
    })
    .add({
      targets: '.hero-cta button',
      translateY: [20, 0],
      opacity: [0, 1],
      delay: anime.stagger(200),
      easing: 'easeOutExpo',
      duration: 800,
      offset: '-=600'
    });

  /* ================= SKILLS POP ================= */
  anime({
    targets: '.skill-card',
    scale: [0, 1],
    opacity: [0, 1],
    easing: 'easeOutBack',
    delay: anime.stagger(150)
  });

  /* ================= PROJECT CARDS ================= */
  anime({
    targets: '.project-card',
    translateY: [50, 0],
    opacity: [0, 1],
    easing: 'easeOutExpo',
    delay: anime.stagger(200)
  });

  /* ================= EXPERIENCE TIMELINE ================= */
  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach((item, index) => {
    anime({
      targets: item,
      translateX: index % 2 === 0 ? [-100, 0] : [100, 0],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      delay: index * 300
    });
  });

  /* ================= ACHIEVEMENTS & EXTRACURRICULARS ================= */
  anime({
    targets: '#achievements li, #extracurriculars li',
    translateY: [50, 0],
    opacity: [0, 1],
    easing: 'easeOutExpo',
    delay: anime.stagger(200)
  });

  /* ================= SCROLL REVEAL ================= */
  const scrollElements = document.querySelectorAll('section');
  const animatedSections = new WeakSet(); // track sections already animated

  const elementInView = (el, offset = 150) => {
    const elementTop = el.getBoundingClientRect().top;
    return elementTop <= (window.innerHeight - offset);
  };

  const revealSection = (el) => {
    anime({
      targets: el,
      opacity: [0, 1],
      translateY: [50, 0],
      easing: 'easeOutExpo',
      duration: 800
    });
    animatedSections.add(el);
  };

  const handleScrollAnimation = () => {
    scrollElements.forEach(el => {
      if (elementInView(el, 100) && !animatedSections.has(el)) {
        revealSection(el);
      }
    });
  };

  window.addEventListener('scroll', handleScrollAnimation);
  handleScrollAnimation(); // animate sections in view on load

  /* ================= THEME TOGGLE ================= */
  const themeToggle = document.getElementById('themeToggle');
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    // Update icon
    const icon = themeToggle.querySelector('i');
    if (document.body.classList.contains('dark')) {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
  });

});
