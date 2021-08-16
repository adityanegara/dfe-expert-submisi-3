class HeroContainer extends HTMLElement {
  connectedCallback() {
    this.title = this.getAttribute('title') || null;
    this.description = this.getAttribute('description') || null;
    this.buttonCaption = this.getAttribute('button-caption') || null;
    this.backgroundImage = this.getAttribute('background-image') || null;
    this.render();
  }

  render() {
    this.innerHTML = `<div  style="
    width: 100%;
    height: 500px;
    background-image: linear-gradient(to bottom, rgba(245, 71, 72, 0.52), rgba(0, 0, 0, 0.73)),
    url('${this.backgroundImage}');
  " class="hero-container">
        <h2 tabindex = "0" >${this.title}</h2>
        <h3 tabindex = "0" >${this.description}</h3>
        <button aria-label="Download Button">${this.buttonCaption}</button>
        </div>`;
  }
}

customElements.define('hero-container', HeroContainer);
