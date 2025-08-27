import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="fixed bottom-[20px] left-[20px] z-12">
        <a href="tel:*6600">
          <img src="./img/float.png" className="w-[150px] h-[70px]" />
        </a>
      </div>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
