import Header from "@/components/header";
import {Outlet} from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <div className="p-10 text-center  mt-10 dark:text-white text-black dark:bg-gray-800 ">
        Made with ⚛
      </div>
    </div>
  );
};

export default AppLayout;
