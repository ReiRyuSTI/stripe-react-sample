import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

import { ApplicationPage } from '@/pages/ApplicationPage';
import { SetupIntentPage } from '@/pages/SetupIntentPage';
import { TopPage } from '@/pages/TopPage';
import { UserEditPage } from '@/pages/UserEditPage';
import { RouteFirstEntry, RouteSecondEntry } from '@/routers/RouteFirstEntry';

export const RouterConfig = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route path="/" element={<RouteFirstEntry component={<Outlet />} />}>
              <Route index element={<TopPage />} />
              <Route path="setupIntent" element={<SetupIntentPage />} />
              <Route path="edit" element={<UserEditPage />} />
            </Route>
            <Route path="application" element={<RouteSecondEntry component={<ApplicationPage />} />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
