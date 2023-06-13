import { Navigate, createBrowserRouter } from "react-router-dom";
import { Checkout } from "../Pages/Checkout";
import { CheckoutConfirm } from "../Pages/CheckoutConfirm";
const AppRouter = createBrowserRouter([
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/confirm",
    element: <CheckoutConfirm />,
  },
  {
    path: "*",
    element: <Navigate to="/checkout" />,
  },
]);

export { AppRouter };
