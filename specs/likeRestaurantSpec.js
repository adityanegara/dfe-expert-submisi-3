import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';
import FavoriteRestaurantIdb from '../src/scripts/data/favoriterestaurants-idb';
import { restaurantComplete, restaurantWithoutId } from './test_variables';

describe('Liking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: restaurantComplete,
    });
    expect(document.querySelector('[aria-label="like this restaurant"]'))
      .toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: restaurantComplete,
    });
    expect(document.querySelector('[aria-label="unlike this movie"]')).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: restaurantComplete,
    });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const getRestaurant = await FavoriteRestaurantIdb.getRestaurant(1);
    expect(getRestaurant).toEqual(restaurantComplete);
    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant again when its already liked', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: restaurantComplete,
    });
    await FavoriteRestaurantIdb.putRestaurant(restaurantComplete);
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([restaurantComplete]);
    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant when it has no id', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: restaurantWithoutId,
    });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
