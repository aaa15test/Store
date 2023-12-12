import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  isRouteErrorResponse,
  useRouteError
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Navigation from '../src/components/Navigation/index'
import { Foodstuffs } from '../src/pages/Foodstuffs/index'
import { Clothes } from '../src/pages/Clothes/index'
import { Electronics } from '../src/pages/Electronics/index'
import { store } from './redux/store'
import './App.css';

export default function App() {
  const Layout = () => {
    return (
      <div className='layout'>
        <Navigation />
        <Outlet/>
      </div>
    )
  }

  function RootBoundary() {
    const error = useRouteError();
  
    if (isRouteErrorResponse(error)) {
      if (error.status === 404) {
        return <div>This page doesn't exist!</div>;
      }
  
      if (error.status === 401) {
        return <div>You aren't authorized to see this</div>;
      }
  
      if (error.status === 503) {
        return <div>Looks like our API is down</div>;
      }
  
      if (error.status === 418) {
        return <div>🫖</div>;
      }
    }
  
    return <div>Something went wrong</div>;
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <RootBoundary />,
      children: [
        {
          path: '/',
          element: <Foodstuffs />
        },
        {
          path: '/foodstuffs',
          element: <Foodstuffs />
        },
        {
          path: '/clothes',
          element: <Clothes />
        },
        {
          path: '/electronics',
          element: <Electronics />
        }
      ]
    }
  ]) 

  return (
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  );
}
