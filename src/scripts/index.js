import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'regenerator-runtime';
import '../styles/style.scss';
import './component/navbar/navbar-list';
import './component/hero/HeroContainer';
import './component/aboutus/AboutUsContainer';
import './component/footer/FooterContainer';
import './component/restaurants/restaurant-list';
import swRegister from './utils/sw-register';
import links from './component/navbar/navbar-links';
import App from './views/app';

const renderNavbar = (navbarLinks) => {
  const navbarContainer = document.getElementById('nav-container');
  const navbarListElement = document.createElement('navbar-list');
  navbarListElement.navbarLinks = navbarLinks;
  navbarContainer.appendChild(navbarListElement);
  const app = new App({
    navElement: document.querySelector('.nav-links'),
    navLinksElement: document.querySelectorAll('.nav-links li'),
    burgerElement: document.querySelector('.burger'),
    contentElement: document.getElementById('main'),
  });
  return app;
};

const app = renderNavbar(links);
window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
