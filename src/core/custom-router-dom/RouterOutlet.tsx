import { Suspense, useMemo } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { ClientRouter, RoutePropagator } from '@shopify/app-bridge-react';


function renderRoute(routes) {
  return routes.map((route: any, index: number) => {
    return (
      <Route
        key={ index }
        path={ route.path }
        element={ <route.element /> }
      >
        { route.children && renderRoute(route.children) }
      </Route>
    );
  });
}

export const RouterOutlet = ({ routes }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const history = useMemo(
    () => ({replace: (path) => navigate(path, {replace: true})}),
    [navigate],
  );

  return (
    <Suspense fallback={<></>}>
      <ClientRouter history={ history } />
      <RoutePropagator location={ location } />
      <Routes >
        { renderRoute(routes) }
      </Routes>
    </Suspense>
  );
};
