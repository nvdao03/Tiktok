import routesConfig from '../config/routes';

// Layouts
import { HeaderOnly } from '../components/Layout';

// Pages
import HomePage from '../pages/Home';
import FollowingPage from '../pages/Following';
import ProfilePage from '../pages/Profile';
import UploadPage from '../pages/Upload';
import SearchPage from '../pages/Search';

// 1. Các routes ko cần login vẫn xem được
const publicRoutes = [
  { path: routesConfig.home, component: HomePage },
  { path: routesConfig.following, component: FollowingPage },
  { path: routesConfig.profile, component: ProfilePage },
  { path: routesConfig.upload, component: UploadPage, layout: HeaderOnly }, // Nếu là null thì lấy DefaultLayout và ngược lại nếu có Layout thì phải lấy Layout truyền vào
  { path: routesConfig.search, component: SearchPage, layout: null },
];

// 2. Các routes yêu cầu login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
