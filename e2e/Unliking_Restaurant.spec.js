Feature('Unliking Restaurant');

const assert = require('assert');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Unliking one restaurant', async ({ I }) => {
  I.see('No Restaurant Found...', '#no-favorite-found-warning');
  I.amOnPage('/');
  I.seeElement('.restaurant-name');
  const firstRestaurant = locate('.restaurant-name').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  const firstRestaurantDetailLink = locate('.restaurant-detail-link').first();
  const firstRestaurantHref = await I.grabTextFrom(firstRestaurantDetailLink);
  I.click(firstRestaurantHref);
  I.seeElement('[aria-label="like this restaurant"]');
  I.click('[aria-label="like this restaurant"]');
  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant');
  const likedRestaurantName = await I.grabTextFrom('.restaurant-name');
  assert.strictEqual(firstRestaurantName, likedRestaurantName);
  const unlikeRestaurantDetailLink = locate('.restaurant-detail-link').first();
  const unlikeRestaurantHref = await I.grabTextFrom(unlikeRestaurantDetailLink);
  I.click(unlikeRestaurantHref);
  I.click('[aria-label="unlike this restaurant"]');
  I.amOnPage('/#/favorite');
  I.see('No Restaurant Found...', '#no-favorite-found-warning');
});
