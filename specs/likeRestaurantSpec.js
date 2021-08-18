import FavoriteRestaurantIdb from '../src/scripts/data/favoriterestaurants-idb';
import { restaurantComplete, restaurantWithoutId } from './helpers/test_variables';
import * as TestFactories from './helpers/testFactories';

describe('Liking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonWithRestaurant(restaurantComplete);
    expect(document.querySelector('[aria-label="like this restaurant"]'))
      .toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonWithRestaurant(restaurantComplete);
    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await TestFactories.createLikeButtonWithRestaurant(restaurantComplete);
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const getRestaurant = await FavoriteRestaurantIdb.getRestaurant(1);
    expect(getRestaurant).toEqual(restaurantComplete);
    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant again when its already liked', async () => {
    await TestFactories.createLikeButtonWithRestaurant(restaurantComplete);
    await FavoriteRestaurantIdb.putRestaurant(restaurantComplete);
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([restaurantComplete]);
    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.createLikeButtonWithRestaurant(restaurantWithoutId);
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
