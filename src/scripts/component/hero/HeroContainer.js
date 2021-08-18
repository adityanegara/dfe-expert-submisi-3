class HeroContainer extends HTMLElement {
  connectedCallback() {
    this.title = this.getAttribute('title') || null;
    this.description = this.getAttribute('description') || null;
    this.buttonCaption = this.getAttribute('button-caption') || null;
    this.backgroundImage = this.getAttribute('background-image') || null;
    this.render();
  }

  render() {
    this.innerHTML = `<div 
  " class="hero-container">
        <img style="width:100%; height:100%" src="${this.backgroundImage}"></img>
    </div>`;
  }
}

customElements.define('hero-container', HeroContainer);
