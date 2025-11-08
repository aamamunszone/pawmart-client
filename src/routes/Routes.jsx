import { createBrowserRouter, Navigate } from 'react-router';
import MainLayout from '../layouts/MainLayout/MainLayout';
import Home from '../pages/Home/Home';

export const router = createBrowserRouter([
  // MainLayout Routes
  {
    path: '/',
    Component: MainLayout,
    children: [
      { index: true, Component: () => <Navigate to="home" replace /> },
      { path: 'home', Component: Home },
    ],
  },
]);
