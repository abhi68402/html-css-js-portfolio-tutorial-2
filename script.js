function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
window.addEventListener('scroll', () => {
  const skillsSection = document.getElementById('skills');
  const skillsPosition = skillsSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.2;

  if(skillsPosition < screenPosition) {
    document.querySelectorAll('.skill-level').forEach(skill => {
      skill.style.width = skill.getAttribute('data-level');
    });
  }
});
<script>
  // Animate Skill Bars on scroll
  const skillLevels = document.querySelectorAll(".skill-level");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const skill = entry.target;
          const level = skill.getAttribute("data-level");
          skill.style.width = level;
          skill.classList.add("animated"); // optional for CSS transition
          observer.unobserve(skill); // stop observing after animation
        }
      });
    },
    { threshold: 0.5 }
  );

  skillLevels.forEach(skill => observer.observe(skill));
</script>
// Animate Skills on Scroll
const skillCards = document.querySelectorAll('.skill-card');
const skillLevels = document.querySelectorAll('.skill-level');

function animateSkills() {
  skillCards.forEach((card, i) => {
    const rect = card.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100) {
      card.classList.add('show');
      skillLevels[i].style.width = skillLevels[i].getAttribute('data-level');
    }
  });
}

window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);
