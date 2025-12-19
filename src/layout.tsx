import Header from '@/Header/Index';
import { Outlet } from 'react-router';

export default function RootLayout() {
  return (
    <>
      <main className="font-poppins">
        <div className="">
          <div className="sticky top-0 z-50 w-full bg-white shadow-md">
            <Header />
          </div>

          <main className="mt-4">
            <Outlet></Outlet>
          </main>
        </div>
      </main>
    </>
  );
}
