import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';



const routes = [
  {
    path: '/login',
    exact: true,
    name: 'login',
    component: LoginPage,
  },
  {
    path: '/home',
    exact: true,
    name: 'homePage',
    component: HomePage,
  },
];

export default routes;
