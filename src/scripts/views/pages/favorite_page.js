import FavoriteRestaurantIdb from '../../data/favoriterestaurants-idb';
import { createRestaurantTemplate } from '../templates/template-creator';

const FavoritePage = {
  async render() {
    return `<h3 tabindex="0">Your Favorite Restaurant</h3>
    <div class="warning" id="no-favorite-found-warning">
      <h3>No Restaurant Found...</h3>
    </div>
    <div class="restaurants-container">
    </div>`;
  },

  // eslint-disable-next-line no-empty-function
  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const warningElement = document.querySelector('#no-favorite-found-warning');
    const restaurantsContainer = document.querySelector('.restaurants-container');
    if (restaurants !== false) {
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantTemplate(restaurant);
        warningElement.innerHTML = '';
      });
    }
  },
};

export default FavoritePage;
