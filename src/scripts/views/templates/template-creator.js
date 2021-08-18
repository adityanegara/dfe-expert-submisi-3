import CONFIG from '../../globals/config';

const createRestaurantTemplate = (restaurant) => `
<div class="restaurant">
<img class="lazyload"
  tabindex="0"
  data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"
  alt="restaurant image ${restaurant.name}"
/>
<div class="restaurant-info">
  <p tabindex="0" class="restaurant-name">${restaurant.name}</p>
  <p tabindex="0" class="restaurant-city">City : ${restaurant.city}</p>
  <p tabindex="0" class="restaurant-rating">
    Rating : ${restaurant.rating}
  </p>
  <p tabindex="0" class="restaurant-description">
    ${restaurant.description}
  </p>
  <a href = "${`/#/detail/${restaurant.id}`}" aria-label="Detail Restaurant" class="restaurant-detail-link">
    Detail...
  </a>
</div>
</div>
`;

const renderMenus = (menus) => {
  let stringMenus = ``;
  menus.forEach((menu, i) => {
    stringMenus += `<li tabindex="0">${i + 1}) ${menu.name}</li>`;
  });
  return `<ul>${stringMenus}</ul>`;
};

const renderReviews = (reviews) => {
  let stringReviews = ``;
  reviews.forEach((review) => {
    stringReviews += `<li tabindex="0">${review.name} : ${review.review} (${review.date})</li>`;
  });
  return `<ul>
            ${stringReviews}
          </ul>`;
};

const renderInfo = (restaurant) => {
  let stringCategories = ``;
  restaurant.categories.forEach((category) => {
    stringCategories += `${category.name} , `;
  });
  return `<ul> 
    <li tabindex="0"> Address  : ${restaurant.address}</li>
    <li tabindex="0"> City : ${restaurant.city}</li>
    <li tabindex="0"> Categories : ${stringCategories}</li>
    <li tabindex="0"> Rating : ${restaurant.rating}</li>
  </ul>
 
  `;
};

const createRestaurantDetailTemplate = (restaurant) => `
  <div class = "restaurant-item restaurant-name"><p tabindex="0">${restaurant.name}</p></div>
  <div class = "restaurant-item restaurant-description"><p tabindex="0">${restaurant.description}</p></div>
  <div class = "restaurant-item restaurant-image">
    <img src = " ${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" 
      alt ="Picture of ${restaurant.name}"
      tabindex="0"></img>
  </div>
  <div class ="restaurant-item restaurant-info ">
    <button aria-label="Info restaurant button" class ="active" id="info-button">Info</button>
  </div>
  <div class = "restaurant-item restaurant-foods">
    <button aria-label="menu foods restaurant button" id="foods-button">Foods</button>
  </div>
  <div class = "restaurant-item restaurant-drinks">
    <button aria-label="menu drinks restaurant button" id="drinks-button">Drinks</button>
  </div>
  <div class = "restaurant-item restaurant-reviews">
    <button aria-label="menu reviews restaurant button" id="reviews-button">Reviews</button>
  </div>
  <div class ="restaurant-item restaurant-content">
    ${renderInfo(restaurant)}
  </div>
  `;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     Add Favorite
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="liked">
     Remove Favorite
  </button>
`;

const errorWarningTemplate = () => `
  <h3 tabindex="0">There is Something Wrong When Fetching Data</h3>
 `;
export {
  createRestaurantTemplate,
  createRestaurantDetailTemplate,
  renderMenus, renderInfo,
  renderReviews,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
  errorWarningTemplate,
};
