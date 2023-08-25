import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Guard from './Guard';
import DashboardLayout from '../components/layout/dashboard/DashboardLayout';
import ErrorPage from '../components/page/ErrorPage';
import { Home } from '../pages/home';
import { Permissions, Roles } from '../pages/acl';
import AuthLayout from '../components/layout/auth/AuthLayout';
import { Login, Register } from '../pages/auth';
import NotFoundPage from '../components/page/NotFoundPage';
import { pathEnum } from '../enums';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Guard>
        <DashboardLayout />
      </Guard>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: pathEnum.acl.roles.path,
        element: <Roles />,
      },
      {
        path: pathEnum.acl.permissions.path,
        element: <Permissions />,
      },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: pathEnum.auth.register.path,
        element: <Register />,
      },
      {
        path: pathEnum.auth.register.path,
        element: <Login />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
