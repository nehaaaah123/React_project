import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Home from './pages/Home';
import ErrorBoundary from './components/ErrorBoundary';
import Layout from './components/Layout';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorBoundary />}>
      <Route index element={<Home />} />
    </Route>
  )
);