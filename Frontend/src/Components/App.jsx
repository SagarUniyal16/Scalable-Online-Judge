import Login from "./Login";
import Header from "./Header";
import { createBrowserRouter,Outlet } from "react-router-dom";
import"../../public/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../Components/Home";
import Footer from "./Footer";
import Leaderboard from "./Leaderboard";
import Error from "./Error";
import Register from "./Register";
import { Provider } from "react-redux";
import appStore from "../../utils/Store/appStore";
import PostProblems from "./PostProblems";
import { lazy, Suspense } from "react";

const Problems=lazy(()=>import("./Problems"));

const GetProblem=lazy(()=>import("./GetProblem"));

function App() {
  return (
    <div>
      <Provider store={appStore}>
      <Header />
      <Outlet/>
        <Footer/>
        </Provider>
    </div>
  );
}


 const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/login",
        element:<Login />,
      },
      {
        path:"/leaderboard",
        element:<Leaderboard/>
      },
      {
        path:"/register",
        element:<Register/>
      },{
        path:"/addproblem",
        element:<PostProblems/>
      },
      {
        path:"/problems",

        element:(
          <Suspense fallback={<h1>Loading...</h1>}>
           <Problems/>
        </Suspense>)
      },
      {
        path:"/problem/:problemId",
        element:(
        <Suspense fallback={<h1>Loading...</h1>}>
        <GetProblem/>
        </Suspense>
        )
      }

    ]
  },
]);
export default routes;

