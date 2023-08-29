window.addEventListener("scroll", () => {
  const fixedBoth = document.querySelector(".fixed_both");
  const scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    fixedBoth.classList.add("fixed_top");
  } else {
    fixedBoth.classList.remove("fixed_top");
  }
});

AOS.init({
  duration: 1200,
});
