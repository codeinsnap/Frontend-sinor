import { useRoutes } from "react-router-dom";
import Routes from "./RoutingConstant";

const Router = () => {
  const routes = useRoutes([...Routes]);
  return routes;
};

export default Router;
