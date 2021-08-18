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
        style="width:100%; height:100%"
        srcset="${this.backgroundImageSmall}">
        <img style="width:100%; height:100%" src="${this.backgroundImageLarge}"></img>
      </picture>
     
    </div>`;
  }
}

customElements.define('hero-container', HeroContainer);
