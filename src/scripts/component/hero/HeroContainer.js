class HeroContainer extends HTMLElement {
  connectedCallback() {
    this.title = this.getAttribute('title') || null;
    this.description = this.getAttribute('description') || null;
    this.buttonCaption = this.getAttribute('button-caption') || null;
    this.backgroundImageLarge = this.getAttribute('background-image-large') || null;
    this.backgroundImageSmall = this.getAttribute('background-image-small') || null;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="hero-container">
      <picture>
        <source media="(max-width: 600px)" 
        srcset="${this.backgroundImageSmall}">
        <img src="${this.backgroundImageLarge}"></img>
      </picture>
     
    </div>`;
  }
}

customElements.define('hero-container', HeroContainer);
