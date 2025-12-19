import { createBrowserRouter } from 'react-router';

import Home from './pages/Home';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import FAQ from './pages/FAQ';
import Blogs from './pages/Blogs';
import RootLayout from './layout';
import Login from './pages/Auth/_components/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element:<RootLayout></RootLayout> ,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: 'services',
        element: <Services></Services>,
      },
      {
        path: 'contact-us',
        element: <ContactUs></ContactUs>,
      },
      {
        path: 'FAQ',
        element: <FAQ></FAQ>,
      },
      {
        path: 'blogs',
        element: <Blogs></Blogs>,
      },
      {
        path:'login',
        element:<Login></Login>
      }
    ],
  },
]);

export default router;
