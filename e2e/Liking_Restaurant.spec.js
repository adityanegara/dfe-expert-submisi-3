Feature('Liking Restaurant');

const assert = require('assert');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.seeElement('#no-favorite-found-warning');
  I.see('No Restaurant Found...', '#no-favorite-found-warning');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('No Restaurant Found...', '#no-favorite-found-warning');
  I.amOnPage('/');
  I.seeElement('.restaurant-name');
  const firstRestaurant = locate('.restaurant-name').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  const firstRestaurantDetailLink = locate('.restaurant-detail-link').first();
  const firstRestaurantHref = await I.grabTextFrom(firstRestaurantDetailLink);
  I.click(firstRestaurantHref);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant');
  const likedRestaurantName = await I.grabTextFrom('.restaurant-name');
  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});
