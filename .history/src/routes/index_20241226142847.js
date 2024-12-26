import HomePage from '../pages/Home';
import FollowingPage from '../pages/Following';
import ProfilePage from '../pages/Profile';
import UploadPage from '../pages/Upload';

// 1. Các routes ko cần login vẫn xem được
const publicRoutes = [
  { path: '/', component: HomePage },
  { path: '/following', component: FollowingPage },
  { path: '/profile', component: ProfilePage },
  { path: '/upload', component: UploadPage, layout: null },
];

// 2. Các routes yêu cầu login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
