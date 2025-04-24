// Quiz Button Click Feedback
document.querySelectorAll('.quiz-btn').forEach(button => {
  button.addEventListener('click', () => {
    alert('Nice try! Keep learning to outsmart the scammers.');
  });
});

// Auto Carousel Scroll
document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.carousel');
  let scrollPosition = 0;
  if (carousel) {
    setInterval(() => {
      if (carousel.scrollWidth > carousel.clientWidth) {
        scrollPosition += 300;
        if (scrollPosition > carousel.scrollWidth - carousel.clientWidth) {
          scrollPosition = 0;
        }
        carousel.scrollTo({ left: scrollPosition, behavior: 'smooth' });
      }
    }, 5000);
  }

  // Comment System
  const commentForm = document.getElementById('comment-form');
  const commentList = document.getElementById('comment-list');
  if (commentForm && commentList) {
    commentForm.addEventListener('submit', e => {
      e.preventDefault();
      const input = commentForm.querySelector('input');
      if (input.value.trim()) {
        const li = document.createElement('li');
        li.textContent = input.value.trim();
        commentList.appendChild(li);
        input.value = '';
      }
    });
  }

  // Accordion FAQ
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const panel = header.nextElementSibling;
      const isActive = header.classList.toggle('active');
      panel.style.maxHeight = isActive ? panel.scrollHeight + 'px' : null;
    });
  });

  // Smooth Scroll for In-Page Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});