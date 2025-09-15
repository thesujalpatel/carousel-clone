document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector("#menu-btn");
  const collapsibleNav = document.querySelector(".nav-collapsible");

  let menuOpen = false;

  button.addEventListener("click", function () {
    if (menuOpen) {
      collapsibleNav.style.height = collapsibleNav.scrollHeight + "px";
      setTimeout(function () {
        collapsibleNav.style.height = "0px";
      }, 1);
    } else {
      collapsibleNav.style.height = collapsibleNav.scrollHeight + "px";
      setTimeout(function () {
        if (menuOpen) {
          collapsibleNav.style.height = "auto";
        }
      }, 300);
    }
    menuOpen = !menuOpen;
  });
});
