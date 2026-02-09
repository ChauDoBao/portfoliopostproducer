// Scroll Reveal Script

  const observerOptions = {

    root: null,

    threshold: 0.1

  };



  function handleIntersection(entries, observer) {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add('revealed');

      } else {

        entry.target.classList.remove('revealed');

      }

    });

  }



  const observer = new IntersectionObserver(handleIntersection, observerOptions);

  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  revealElements.forEach(element => observer.observe(element));



  // Rotating Text

  const textPath = document.getElementById('rotating-text');

  function animateText() {

    let offset = 0;

    let direction = 1; 

    setInterval(() => {

      offset += 0.1 * direction; 

      if (offset >= 100) direction = -1; 

      if (offset <= 0) direction = 1; 

      textPath.setAttribute('startOffset', offset + '%');

    }, 10); 

  }

  animateText();



  // Hamburger Menu

  const hamburger = document.getElementById('hamburger-icon');

  const navLinks = document.querySelector('.nav-links');



  if(hamburger && navLinks) {

    hamburger.addEventListener('click', () => {

        navLinks.classList.toggle('active');

    });

  }