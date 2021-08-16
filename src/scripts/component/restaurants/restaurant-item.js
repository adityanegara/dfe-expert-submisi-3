class RestaurantItem extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `   <div class="restaurant">
    <img tabindex ="0"
      src="${this._restaurant.pictureId}"
      alt="restaurant image ${this._restaurant.name}"
    />
    <div class="restaurant-info">
      <p  tabindex ="0" class="restaurant-name">${this._restaurant.name}</p>
      <p   tabindex ="0" class="restaurant-city">City : ${this._restaurant.city}</p>
      <p  tabindex ="0" class="restaurant-rating">Rating : ${this._restaurant.rating}</p>
      <p   tabindex ="0" class="restaurant-description">
        ${this._restaurant.description}.
      </p>
      <button aria-label="Detail Restaurant" class="restaurant-button">Detail</button>
    </div>
  </div>
          `;
  }
}

customElements.define('restaurant-item', RestaurantItem);
