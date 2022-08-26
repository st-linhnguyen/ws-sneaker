import { lazy } from 'react';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

const appRoutes = [
  {
    path: '',
    element: Home
  },
  {
    path: 'about',
    element: About
  },
  {
    path: 'contact',
    element: Contact
  }
];

export default appRoutes;
