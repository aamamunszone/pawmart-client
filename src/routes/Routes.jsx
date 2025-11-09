import { createBrowserRouter, Navigate } from 'react-router';
import MainLayout from '../layouts/MainLayout/MainLayout';
import Home from '../pages/Home/Home';
import PetsAndSupplies from '../pages/PetsAndSupplies/PetsAndSupplies';
import Services from '../pages/Services/Services';
import PrivateRoute from './PrivateRoute';
import AddListing from '../pages/AddListing/AddListing';
import MyListings from '../pages/MyListings/MyListings';
import MyOrders from '../pages/MyOrders/MyOrders';

export const router = createBrowserRouter([
  // MainLayout Routes
  {
    path: '/',
    Component: MainLayout,
    children: [
      { index: true, Component: () => <Navigate to="home" replace /> },
      { path: 'home', Component: Home },
      { path: 'shop', Component: PetsAndSupplies },
      { path: 'services', Component: Services },
      {
        path: 'listings/create',
        element: (
          <PrivateRoute>
            <AddListing />
          </PrivateRoute>
        ),
      },
      {
        path: 'listings/user',
        element: (
          <PrivateRoute>
            <MyListings />
          </PrivateRoute>
        ),
      },
      {
        path: 'orders/user',
        element: (
          <PrivateRoute>
            <MyOrders />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
