import { createBrowserRouter, Navigate } from 'react-router';
import MainLayout from '../layouts/MainLayout/MainLayout';
import Home from '../pages/Home/Home';
import PetsAndSupplies from '../pages/PetsAndSupplies/PetsAndSupplies';
import Services from '../pages/Services/Services';
import PrivateRoute from './PrivateRoute';
import AddListing from '../pages/AddListing/AddListing';
import MyListings from '../pages/MyListings/MyListings';
import MyOrders from '../pages/MyOrders/MyOrders';
import NotFound from '../pages/NotFound/NotFound';
import Register from '../pages/Auth/Register/Register';
import Login from '../pages/Auth/Login/Login';
import CategoryFiltered from '../pages/CategoryFiltered/CategoryFiltered';
import ListingDetails from '../pages/ListingDetails/ListingDetails';

export const router = createBrowserRouter([
  // MainLayout Routes
  {
    path: '/',
    Component: MainLayout,
    children: [
      { index: true, Component: () => <Navigate to="home" replace /> },
      { path: 'home', Component: Home },
      { path: 'shop', Component: PetsAndSupplies },
      {
        path: 'category-filtered-product/:categoryName',
        Component: CategoryFiltered,
      },
      { path: 'services', Component: Services },
      {
        path: 'listing-details/:id',
        element: (
          <PrivateRoute>
            <ListingDetails />
          </PrivateRoute>
        ),
      },
      {
        path: 'listings/create',
        element: (
          <PrivateRoute>
            <AddListing />
          </PrivateRoute>
        ),
      },
      {
        path: 'listings/my-listings',
        element: (
          <PrivateRoute>
            <MyListings />
          </PrivateRoute>
        ),
      },
      {
        path: 'orders/my-orders',
        element: (
          <PrivateRoute>
            <MyOrders />
          </PrivateRoute>
        ),
      },
      { path: 'auth/register', Component: Register },
      { path: 'auth/login', Component: Login },
    ],
  },

  // NotFound Route
  {
    path: '*',
    element: <NotFound />,
  },
]);
