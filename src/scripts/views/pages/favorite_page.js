import FavoriteRestaurantIdb from '../../data/favoriterestaurants-idb';
import { createRestaurantTemplate } from '../templates/template-creator';

const FavoritePage = {
  async render() {
    return `<h3 tabindex="0">Your Favorite Restaurant</h3>
    <div class="restaurants-container">
    </div>`;
  },

  // eslint-disable-next-line no-empty-function
  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('.restaurants-container');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantTemplate(restaurant);
    });
  },
};

export default FavoritePage;
