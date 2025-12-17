import { createBrowserRouter } from 'react-router';

import Home from './pages/Home';
import HomeLayout from './pages/Home/layout';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import FAQ from './pages/FAQ';
import Blogs from './pages/Blogs';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout></HomeLayout>,
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
    ],
  },
]);

export default router;
