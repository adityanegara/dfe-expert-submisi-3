const DrawerInitiator = {
  init({ navElement, navLinksElement, burgerElement }) {
    burgerElement.addEventListener('click', () => {
      this._toggleDrawer(navElement, navLinksElement, burgerElement);
    });
  },

  _toggleDrawer(navElement, navLinksElement, burgerElement) {
    navElement.classList.toggle('nav-active');
    navLinksElement.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    });
    burgerElement.classList.toggle('toggle');
  },

};

export default DrawerInitiator;
