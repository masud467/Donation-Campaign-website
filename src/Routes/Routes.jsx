import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/ErrorPage/Home/Home";
import DonationDetails from "../Pages/DonationDetails/DonationDetails";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children :[
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path : '/donation',
            element : <h1>Donation.....</h1>
        },
        {
            path: '/statistic',
            element: <h1>Statistic....</h1>
        },
        {
            path: '/donation-details/:id',
            element: <DonationDetails></DonationDetails>
        }
      ]
    },
    
  ]);

  export default router;