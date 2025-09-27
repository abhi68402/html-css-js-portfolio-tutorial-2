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
  // Animate skill bars
  window.addEventListener("DOMContentLoaded", () => {
    const skillLevels = document.querySelectorAll(".skill-card .skill-level");
    skillLevels.forEach(level => {
      const width = level.getAttribute("data-level") || level.style.width;
      level.style.width = "0"; // start from 0
      setTimeout(() => {
        level.style.transition = "width 1.2s ease-in-out";
        level.style.width = width;
      }, 100);
    });
  });
</script>
