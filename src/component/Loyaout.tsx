import { Suspense } from "react";
import { Loader } from "./Loader/Loader";
import { Outlet } from "react-router-dom";
import Headers from "./Headers/Headers";

const Layout = () => {
    return (
      <>
        <Headers/>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </>
    );
  };
  
  export default Layout;