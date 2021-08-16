class NavbarItem extends HTMLElement {
  set navbarLink(navbarLink) {
    this._navbarLink = navbarLink;
    this.render();
  }

  render() {
    this.innerHTML = ` <li class ='hover-underline-animation'>
            <a id = "${this._navbarLink.id}"  href = "${this._navbarLink.href}"> ${this._navbarLink.caption} </a>
          </li>
        `;
  }
}

customElements.define('navbar-item', NavbarItem);
