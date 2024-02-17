
import Header from "./Header";
import { createBrowserRouter,Outlet } from "react-router-dom";
import"../../public/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";

 function App() {
  return (
    <div>
      <Header />
      <Outlet/>
        <Footer/>
    </div>
  );
}

 const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<Error/>,
 

  }
]);
export default routes;
