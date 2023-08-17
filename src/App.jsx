import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import AddProjects from "./components/addProject/AddProjects";
import Result from "./components/result/Result";
import { Toaster } from "react-hot-toast";

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
  return (
    <>
      <Toaster />

      <RouterProvider router={router} />
    </>
  );
};

export default App;
