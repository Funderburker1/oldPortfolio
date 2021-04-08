var hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", () => {
    document.querySelector(".container").classList.toggle("show-menu");
});
