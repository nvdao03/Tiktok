import config from '../config';

// Layouts
import { HeaderOnly } from '../layouts';

// Pages
import HomePage from '../pages/Home';
import FollowingPage from '../pages/Following';
import ProfilePage from '../pages/Profile';
import UploadPage from '../pages/Upload';
import SearchPage from '../pages/Search';

// 1. Các routes ko cần login vẫn xem được
const publicRoutes = [
  { path: config.routes.home, component: HomePage },
  { path: config.routes.following, component: FollowingPage },
  { path: config.routes.profile, component: ProfilePage },
  { path: config.routes.upload, component: UploadPage, layout: HeaderOnly }, // Nếu là null thì lấy DefaultLayout và ngược lại nếu có Layout thì phải lấy Layout truyền vào
  { path: config.routes.search, component: SearchPage, layout: null },
];

// 2. Các routes yêu cầu login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
