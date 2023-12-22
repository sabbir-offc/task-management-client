import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const Main = () => {
  return (
    <div className="">
      <Navbar />
      <div className="min-h-[calc(100vh-138px)] container mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
