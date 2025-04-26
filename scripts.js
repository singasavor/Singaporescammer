// Smooth Quiz Feedback + Fun Effects
document.querySelectorAll('.quiz-btn').forEach(button => {
  button.addEventListener('click', () => {
    const messages = [
      "Correct! Too good to be true, right?",
      "Scammers are sneaky—stay sharp!",
      "Partially legit sounding, but trust no one blindly!",
      "Great job! Always verify before you trust.",
      "Stay sharp! Scams can look real."
    ];
    const random = messages[Math.floor(Math.random() * messages.length)];
    alert(random);

    // Little fun confetti effect
    const confetti = document.createElement('div');
    confetti.textContent = "🎉";
    confetti.style.position = 'fixed';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = '-20px';
    confetti.style.fontSize = '2rem';
    confetti.style.animation = 'fall 3s linear forwards';
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 3000);
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
    }, 4000);
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
        li.style.animation = "fadeIn 1s ease";
        commentList.appendChild(li);
        input.value = '';
      }
    });
  }

  // FAQ Accordion Toggle with Bounce
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const panel = header.nextElementSibling;
      const isOpen = panel.style.display === 'block';
      document.querySelectorAll('.accordion-panel').forEach(p => p.style.display = 'none');
      panel.style.display = isOpen ? 'none' : 'block';
      panel.scrollIntoView({ behavior: 'smooth', block: 'center' });

      // Bounce effect
      panel.style.animation = "bounce 0.5s";
      setTimeout(() => {
        panel.style.animation = "";
      }, 500);
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

// CSS Animations (Add dynamically via JS)
const style = document.createElement('style');
style.innerHTML = `
@keyframes fall {
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(100vh); opacity: 0; }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes bounce {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}
`;
document.head.appendChild(style);