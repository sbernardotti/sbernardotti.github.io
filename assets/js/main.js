const showMenu = (n, e) => {
  const t = document.getElementById(n),
    c = document.getElementById(e);
  t &&
    c &&
    t.addEventListener("click", () => {
      c.classList.toggle("show");
    });
};
showMenu("nav-toggle", "nav-menu");
const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  navLink.forEach((n) => n.classList.remove("active")),
    this.classList.add("active"),
    document.getElementById("nav-menu").classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));
