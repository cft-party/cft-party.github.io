document.addEventListener("DOMContentLoaded", function () {
  const loader = document.getElementById("loader");
  const menuBtn = document.getElementById("menuBtn");
  const sideNav = document.getElementById("sideNav");
  const menu = document.getElementById("menu");

  // Hide loader
  setTimeout(() => {
    loader.classList.add("loader-hidden");
  }, 1000);

  // Toggle side navigation
  menuBtn.addEventListener("click", () => {
    if (sideNav.style.right === "-250px") {
      sideNav.style.right = "0";
      menu.src = "https://i.ibb.co/9cC0MXD/x-menu.png";
    } else {
      sideNav.style.right = "-250px";
      menu.src = "https://i.ibb.co/rs8wZpF/btn.png";
    }
  });

  // Scroll reveal animation
  const reveals = document.querySelectorAll(".reveal");
  const reveal = () => {
    reveals.forEach((reveal) => {
      const windowHeight = window.innerHeight;
      const elementTop = reveal.getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveal.classList.add("active");
      } else {
        reveal.classList.remove("active");
      }
    });
  };

  window.addEventListener("scroll", reveal);
});
