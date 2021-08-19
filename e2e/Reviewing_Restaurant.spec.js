Feature('Reviewing Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

const _getRandomString = (length) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i += 1) {
    result += characters.charAt(Math.floor(Math.random()
  * charactersLength));
  }
  return result;
};

const _checkContain = (string, substring, message) => {
  if (!string.includes(substring)) {
    throw new Error(message);
  }
};

Scenario('reviewing one restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.restaurant-name');
  const firstRestaurantDetailLink = locate('.restaurant-detail-link').first();
  const firstRestaurantHref = await I.grabTextFrom(firstRestaurantDetailLink);
  I.click(firstRestaurantHref);
  I.seeElement('#your-name');
  I.seeElement('#your-review');
  I.seeElement('#give-review-button');
  const reviewerName = _getRandomString(5);
  const reviewerReview = _getRandomString(10);
  I.fillField('Review name', reviewerName);
  I.fillField('Reviews', reviewerReview);
  I.click('#give-review-button');
  I.click('#reviews-button');
  const lastRestaurantReview = locate('.review-list').last();
  const lastRestaurantReviewText = await I.grabTextFrom(lastRestaurantReview);
  console.log(lastRestaurantReviewText);
  _checkContain(lastRestaurantReviewText, reviewerName, 'Reviewer Name Input and input name doenst match');
  _checkContain(lastRestaurantReviewText, reviewerReview, 'Reviewer Review and input review doesnt match');
});
