import DrawerInitiator from '../utils/drawer_initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({
    navElement, navLinksElement, burgerElement, contentElement,
  }) {
    console.log(contentElement);
    this._navElement = navElement;
    this._navLinksElement = navLinksElement;
    this._burgerElement = burgerElement;
    this._contentElement = contentElement;
    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      navElement: this._navElement,
      navLinksElement: this._navLinksElement,
      burgerElement: this._burgerElement,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._contentElement.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
