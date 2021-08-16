import RestaurantSource from '../../data/restaurants-soruce';
import { createRestaurantTemplate, errorWarningTemplate } from '../templates/template-creator';

const NearPage = {
  async render() {
    return `<h3 tabindex="0">Restaurants Near You</h3>
            <div class="warning"><h3>Loading Data...</h3></div>
            <div class="restaurants-container">
            </div>`;
  },

  // eslint-disable-next-line no-empty-function
  async afterRender() {
    const restaurantsContainer = document.querySelector('.restaurants-container');
    const warningElement = document.querySelector('.warning');
    const restaurants = await RestaurantSource.restaurantList();
    if (restaurants !== false) {
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantTemplate(restaurant);
        warningElement.innerHTML = '';
      });
    } else {
      warningElement.innerHTML = errorWarningTemplate();
    }
  },
};

export default NearPage;
