import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async restaurantList() {
    try {
      const response = await fetch(API_ENDPOINT.LIST);
      const responseJson = await response.json();
      return responseJson.restaurants;
    } catch (error) {
      return false;
    }
  }

  static async detailRestaurant(id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  static async searchRestaurant(query) {
    const response = await fetch(API_ENDPOINT.SEARCH(query));
    return response.json();
  }

  static async reviewRestaurant(restaurantId, reviewerName, reviewReview) {
    try {
      const rawResponse = await fetch(API_ENDPOINT.REVIEW, {
        method: 'POST',
        headers: {
          'X-Auth-Token': '12345',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: restaurantId, name: reviewerName, review: reviewReview }),
      });
      const content = await rawResponse.json();
      return content.customerReviews;
    } catch (er) {
      console.log(er);
      return false;
    }
  }
}

export default RestaurantSource;
