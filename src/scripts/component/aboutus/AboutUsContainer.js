class AboutUsContainer extends HTMLElement {
  connectedCallback() {
    this.illustration = this.getAttribute('illustration') || null;
    this.text1 = this.getAttribute('text1') || null;
    this.text2 = this.getAttribute('text2') || null;
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="container">
            <div class=" illustrations">
                <img  tabindex = "0" src="${this.illustration}" alt="Illustration" />
            </div>
            <div class=" text1">
                <h2  tabindex = "0">${this.text1}</h2>
            </div>
            <div class=" text2">
                <p  tabindex = "0">
                    ${this.text2}
                </p>
            </div>
        </div>`;
  }
}

customElements.define('aboutus-container', AboutUsContainer);
