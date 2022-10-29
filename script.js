const cards = document.querySelectorAll("button");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.parentElement.classList.toggle("active");
  });
});
