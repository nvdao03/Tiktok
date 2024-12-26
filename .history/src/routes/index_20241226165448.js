// Layouts
import { HeaderOnly } from '../components/Layout';

// Pages
import HomePage from '../pages/Home';
import FollowingPage from '../pages/Following';
import ProfilePage from '../pages/Profile';
import UploadPage from '../pages/Upload';

// 1. Các routes ko cần login vẫn xem được
const publicRoutes = [
  { path: '/', component: HomePage },
  { path: '/following', component: FollowingPage },
  { path: '/profile', component: ProfilePage, layout: null },
  { path: '/upload', component: UploadPage, layout: HeaderOnly }, // Nếu là null thì lấy DefaultLayout và ngược lại nếu có Layout thì phải lấy Layout truyền vào
];

// 2. Các routes yêu cầu login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
