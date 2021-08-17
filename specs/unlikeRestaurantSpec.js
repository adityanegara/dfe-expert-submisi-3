import FavoriteRestaurantIdb from '../src/scripts/data/favoriterestaurants-idb';
import { restaurantComplete } from './helpers/test_variables';
import * as TestFactories from './helpers/testFactories';

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
    await TestFactories.createLikeButtonWithRestaurant(restaurantComplete);
    expect(document.querySelector('[aria-label="unlike this restaurant"]'))
      .toBeTruthy();
  });

  it('should not display the like widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonWithRestaurant(restaurantComplete);
    expect(document.querySelector('[aria-label="like this restaurant"]'))
      .toBeFalsy();
  });

  it('should be able to unlike the restaurant', async () => {
    await TestFactories.createLikeButtonWithRestaurant(restaurantComplete);
    document.querySelector('[aria-label="unlike this restaurant"]')
      .dispatchEvent(new Event('click'));
    const getRestaurant = await FavoriteRestaurantIdb.getRestaurant(1);
    expect(getRestaurant).toEqual(undefined);
  });

  it('should not throw error if the unliked restaurant is not on the list', async () => {
    await TestFactories.createLikeButtonWithRestaurant(restaurantComplete);
    await FavoriteRestaurantIdb.deleteRestaurant(1);
    document.querySelector('[aria-label="unlike this restaurant"]')
      .dispatchEvent(new Event('click'));
    const getRestaurant = await FavoriteRestaurantIdb.getRestaurant(1);
    expect(getRestaurant).toEqual(undefined);
  });
});
