import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import{ Cats} from './components/Cats';
import Clients from './components/Clients';
import { Dogs } from './components/Dogs';
import { Home } from './components/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/cats",
    element: <Cats />,
  },
  {
    path: "/dogs",
    element: <Dogs />,
  },
  {
    path: "/clients",
    element: <Clients />,
  },
  {
    path: "/edit",
    element: <Dogs />,
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
