import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import AddProjects from "./components/addProject/AddProjects";
import Result from "./components/result/Result";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/addproject",
    element: <AddProjects />,
  },
  {
    path: "/result",
    element: <Result />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
