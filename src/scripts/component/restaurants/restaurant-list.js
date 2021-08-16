import './restaurant-item';

class RestaurantList extends HTMLElement {
  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this.render();
  }

  render() {
    this._restaurants.forEach((restaurant) => {
      const restaurantElement = document.createElement('restaurant-item');
      restaurantElement.restaurant = restaurant;
      this.appendChild(restaurantElement);
    });
  }
}

customElements.define('restaurant-list', RestaurantList);
