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
import AboutUs from '../pages/AboutUs/AboutUs';
import Contact from '../pages/Contact/Contact';
import DashboardLayout from '../layouts/DashboardLayout/DashboardLayout';
import DashboardHome from '../components/dashboard/DashboardHome/DashboardHome';

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
      { path: 'about-us', Component: AboutUs },
      { path: 'contact', Component: Contact },
      {
        path: 'listing-details/:id',
        Component: ListingDetails,
      },
      { path: 'auth/register', Component: Register },
      { path: 'auth/login', Component: Login },
    ],
  },

  // DashboardLayout Routes
  {
    path: 'dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      { index: true, Component: DashboardHome },
      { path: 'listings/create', Component: AddListing },
      { path: 'listings/my-listings', Component: MyListings },
      { path: 'orders/my-orders', Component: MyOrders },
    ],
  },

  // NotFound Route
  {
    path: '*',
    element: <NotFound />,
  },
]);
