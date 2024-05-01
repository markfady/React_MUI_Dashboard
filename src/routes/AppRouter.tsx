import { createBrowserRouter, RouterProvider } from "react-router-dom";
// layouts
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../scenes/dashboard/Dashboard";
import ManageTeam from "../scenes/manageTeam/ManageTeam";
import Contacts from "../scenes/contacts/Contacts";
import Invoices from "../scenes/invoices/Invoices";
// pages


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/team",
        element: <ManageTeam />,
      },
      {
        path:"contacts",
        element:<Contacts/>
      },
      {
        path:"invoices",
        element:<Invoices/>
      }
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;