import Header from '@/Header/Index';
import { Outlet } from 'react-router';
import Footer from './Footer/_components/Footer';


export default function RootLayout() {
  return (
    <>
      <main className="font-poppins">
        <div className="">
          <div className="sticky top-0 z-50 w-full bg-white shadow-md">
            <Header />
          </div>

          <main>
            <Outlet></Outlet>
          </main>
          <div>
         <Footer/>
          </div>
        </div>
      </main>
    </>
  );
}
