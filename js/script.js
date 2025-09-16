document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector("#menu-btn");
  const collapsibleNav = document.querySelector(".nav-collapsible");

  let menuOpen = false;

  button.addEventListener("click", function () {
    if (menuOpen) {
      collapsibleNav.style.height = collapsibleNav.scrollHeight + "px";
      collapsibleNav.style.overflow = "hidden";
      setTimeout(function () {
        collapsibleNav.style.height = "0px";
      }, 1);
    } else {
      collapsibleNav.style.height = collapsibleNav.scrollHeight + "px";
      setTimeout(function () {
        if (menuOpen) {
          collapsibleNav.style.height = "auto";
          collapsibleNav.style.overflow = "visible";
        }
      }, 300);
    }
    menuOpen = !menuOpen;
  });
});
