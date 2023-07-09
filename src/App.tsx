import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import Select from "./pages/SelectPage/Select";
import Result from "./pages/ResultPage/Result";
import AnimationCoin from "./pages/Animation/AnimationCoin";
import AnimationDice from "./pages/Animation/AnimationDice";
import ResultCoin from "./pages/ResultPage/ResultCoin";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/select",
        element: <Select />,
      },
      {
        path: "/animationCoin",
        element: <AnimationCoin />,
      },
      {
        path: "/animationDice",
        element: <AnimationDice />,
      },
      {
        path: "/result",
        element: <Result />,
      },
      {
        path: "/resultCoin",
        element: <ResultCoin />,
      },
    ],
  },
]);
function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
