import NearPage from '../views/pages/near_page';
import DetailPage from '../views/pages/detail_page';
import FavoritePage from '../views/pages/favorite_page';

const routes = {
  '/': NearPage,
  '/near-you': NearPage,
  '/favorite': FavoritePage,
  '/detail/:id': DetailPage,
};

export default routes;
