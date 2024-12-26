import HomePage from '../pages/Home';
import FollowingPage from '../pages/Following';

// 1. Các routes ko cần login vẫn xem được
const publicRoutes = [
  { path: '/', component: HomePage },
  { path: '/following', component: FollowingPage },
];

// 2. Các routes yêu cầu login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
