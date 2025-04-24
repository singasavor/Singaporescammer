// Smooth Quiz Feedback
document.querySelectorAll('.quiz-btn').forEach(button => {
  button.addEventListener('click', () => {
    const messages = [
      "Correct! Too good to be true, right?",
      "Scammers are sneaky—stay sharp!",
      "Partially legit sounding, but trust no one blindly!"
    ];
    const random = messages[Math.floor(Math.random() * messages.length)];
    alert(random);
  });
});

// Auto Scroll for Scam Stories Carousel
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

  // Simple Comment System
  const commentForm = document.getElementById('comment-form');
  const commentList = document.getElementById('comment-list');

  if (commentForm && commentList) {
    commentForm.addEventListener('submit', e => {
      e.preventDefault();
      const input = commentForm.querySelector('input');
      if (input.value.trim()) {
        const li = document.createElement('li');
        li.textContent = input.value.trim();
        li.style.padding = "8px";
        li.style.borderBottom = "1px solid #ccc";
        commentList.appendChild(li);
        input.value = '';
      }
    });
  }

  // FAQ Accordion Toggle
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const panel = header.nextElementSibling;
      const isOpen = panel.style.display === 'block';
      document.querySelectorAll('.accordion-panel').forEach(p => p.style.display = 'none');
      panel.style.display = isOpen ? 'none' : 'block';
      panel.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  });

  // Smooth Scrolling for Anchor Links
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