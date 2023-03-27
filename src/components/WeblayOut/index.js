import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import "./index.css";

const WeblayOut = () => (
  <div className="">
    <Header />
    <div className="d-flex justify-content-center">
      <div className="contentCon">
        <Outlet />
      </div>
    </div>

    <Footer />
  </div>
);

export default WeblayOut;
