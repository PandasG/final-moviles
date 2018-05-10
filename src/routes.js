import {
  Dashboard,
  Performance,
  Security,
  Reachability,
  Storage,
  Bugzilla,
} from './views';
import DefaultLayout from './containers/DefaultLayout';

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/performance', name: 'Performance', component: Performance },
  { path: '/security', name: 'Security', component: Security },
  { path: '/reachability', name: 'Reachability', component: Reachability },
  { path: '/storage', name: 'Storage', component: Storage },
  { path: '/bugzilla', name: 'Bugzilla', component: Bugzilla },

];

export default routes;
