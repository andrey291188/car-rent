import { Suspense } from "react";
import { Loader } from "./Loader/Loader";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Headers from "./Headers/Headers";

const Layout = () => {
    return (
      <>
        <Headers/>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={true}
            theme="colored"
          />
      </>
    );
  };
  
  export default Layout;