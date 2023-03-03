import { Outlet } from "react-router";
import Layout from "../components/layouts/Layout";

const PrivateRoute = ({ children }) => {
  return <Layout>{children || <Outlet />}</Layout>;
};

export default PrivateRoute;
