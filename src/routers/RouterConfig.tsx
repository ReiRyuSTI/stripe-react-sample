import { Outlet, Route, Routes } from 'react-router-dom';

import { TopPage } from '@/pages/TopPage';
import { RouteHasAuthentication } from '@/routers/RouteHasAuthentication';

export const RouterConfig = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <RouteHasAuthentication>
              <Outlet />
            </RouteHasAuthentication>
          }
        >
          <Route index element={<TopPage />} />
        </Route>
      </Routes>
    </>
  );
};
