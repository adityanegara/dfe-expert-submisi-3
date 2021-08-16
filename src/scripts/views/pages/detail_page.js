import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurants-soruce';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import {
  createRestaurantDetailTemplate,
  renderInfo,
  renderMenus,
  renderReviews,
  errorWarningTemplate,
} from '../templates/template-creator';

const DetailPage = {
  async render() {
    return `<div class="warning"><h3>Loading Data...</h3></div>
            <div class = "restaurant-detail"></div>
            <div id="likeButtonContainer"></div>
            <div class ="give-review">
              <label for="your-name">Review name:</label>
              <input type="text" id="your-name" name="your-name">
              <label for="your-review">Reviews :</label>
              <input type="text" id="your-review" name="your-review"><br><br>
              <button aria-label="submit review button" id="give-review-button">Submit</button>
            </div> 
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailRestaurantContainer = document.querySelector('.restaurant-detail');
    const warningElement = document.querySelector('.warning');
    const response = await RestaurantSource.detailRestaurant(url.id);
    if (response !== false) {
      const { restaurant } = response;
      detailRestaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
      this._detailContent(restaurant);
      this._giveReview(restaurant.id);
      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        restaurant,
      });
      warningElement.innerHTML = '';
    } else {
      warningElement.innerHTML = errorWarningTemplate();
    }
  },

  _giveReview(id) {
    const giveReviewButton = document.getElementById('give-review-button');
    const yourNameInput = document.getElementById('your-name');
    const yourReviewInput = document.getElementById('your-review');
    giveReviewButton.addEventListener('click', async () => {
      console.log('Click Give Review');
      const reviewerName = yourNameInput.value;
      const review = yourReviewInput.value;
      const reviewResponse = await RestaurantSource.reviewRestaurant(id, reviewerName, review);
      console.log(reviewResponse);
      const contentElement = document.querySelector('.restaurant-content');
      contentElement.innerHTML = renderReviews(reviewResponse);
    });
  },
  _detailContent(restaurant) {
    const contentElement = document.querySelector('.restaurant-content');
    const infoButton = document.querySelector('#info-button');
    const foodsButton = document.querySelector('#foods-button');
    const drinksButton = document.querySelector('#drinks-button');
    const reviewButton = document.querySelector('#reviews-button');
    infoButton.addEventListener('click', () => {
      contentElement.innerHTML = renderInfo(restaurant);
      infoButton.classList.add('active');
      foodsButton.classList.remove('active');
      drinksButton.classList.remove('active');
      reviewButton.classList.remove('active');
    });
    foodsButton.addEventListener('click', () => {
      contentElement.innerHTML = renderMenus(restaurant.menus.foods);
      foodsButton.classList.add('active');
      infoButton.classList.remove('active');
      drinksButton.classList.remove('active');
      reviewButton.classList.remove('active');
    });
    drinksButton.addEventListener('click', () => {
      contentElement.innerHTML = renderMenus(restaurant.menus.drinks);
      drinksButton.classList.add('active');
      foodsButton.classList.remove('active');
      infoButton.classList.remove('active');
      reviewButton.classList.remove('active');
    });
    reviewButton.addEventListener('click', () => {
      contentElement.innerHTML = renderReviews(restaurant.customerReviews);
      reviewButton.classList.add('active');
      drinksButton.classList.remove('active');
      foodsButton.classList.remove('active');
      infoButton.classList.remove('active');
    });
  },
};

export default DetailPage;
