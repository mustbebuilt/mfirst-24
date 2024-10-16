(() => {
  const initBurgerMenu = () => {
    const burgerMenu = document.querySelector(".burger");
    const navBar = document.querySelector("nav");
    let navBarStatus = false;

    // Move these inside the toggleMenu function to recalculate dynamically
    const toggleMenu = () => {
      const navHeight = navBar.scrollHeight; // Dynamically calculate height

      if (navBarStatus) {
        navBarStatus = false;
        navBar.style.height = "0px";
        burgerMenu.classList.remove("changeBurger");
      } else {
        navBarStatus = true;
        navBar.style.height = navHeight + "px";
        burgerMenu.classList.add("changeBurger");
      }
    };

    // Add event listener only once
    if (!burgerMenu.hasEventListener) {
      burgerMenu.addEventListener("click", toggleMenu);
      burgerMenu.hasEventListener = true; // Custom flag to avoid re-adding listener
    }
  };

  const handleResize = () => {
    const navBar = document.querySelector("nav");
    // Ensure the nav is properly closed on resize
    navBar.style.height = "0px";
    initBurgerMenu();
  };

  initBurgerMenu();
  window.addEventListener("resize", handleResize);
})();
