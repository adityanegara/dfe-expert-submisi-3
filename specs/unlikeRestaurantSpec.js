import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';
import FavoriteRestaurantIdb from '../src/scripts/data/favoriterestaurants-idb';
import { restaurantComplete } from './test_variables';

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Unliking A Restaurant', () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestaurantIdb.putRestaurant(restaurantComplete);
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should display unlike widget when the restaurant has been liked', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: restaurantComplete,
    });
    expect(document.querySelector('[aria-label="unlike this restaurant"]'))
      .toBeTruthy();
  });

  it('should not display the like widget when the restaurant has been liked', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: restaurantComplete,
    });
    expect(document.querySelector('[aria-label="like this restaurant"]'))
      .toBeFalsy();
  });

  it('should be able to unlike the restaurant', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: restaurantComplete,
    });
    document.querySelector('[aria-label="unlike this restaurant"]')
      .dispatchEvent(new Event('click'));
    const getRestaurant = await FavoriteRestaurantIdb.getRestaurant(1);
    expect(getRestaurant).toEqual(undefined);
  });

  it('should not throw error if the unliked restaurant is not on the list', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: restaurantComplete,
    });
    await FavoriteRestaurantIdb.deleteRestaurant(1);
    document.querySelector('[aria-label="unlike this restaurant"]')
      .dispatchEvent(new Event('click'));
    const getRestaurant = await FavoriteRestaurantIdb.getRestaurant(1);
    expect(getRestaurant).toEqual(undefined);
  });
});
