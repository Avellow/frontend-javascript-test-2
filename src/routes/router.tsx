import { Route, Routes } from 'react-router-dom';

import { pagesData } from './pagesData';
import { IRouter } from './router.types';

const Router = () => {
  const pageRoutes = pagesData.map(({ path, element, title }: IRouter) => (
    <Route key={title} path={`/${path}`} element={element} />
  ));

  return (
    <Routes>{pageRoutes}</Routes>
  );
};

export default Router;
