Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.seeElement('#no-favorite-found-warning');
  I.see('No Restaurant Found...', '#no-favorite-found-warning');
});

Scenario('liking one restaurant', ({ I }) => {
  I.see('No Restaurant Found...', '#no-favorite-found-warning');
  I.amOnPage('/');
});
