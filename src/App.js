import './App.css';
import React, { useEffect, useState } from "react";
import Header from "./compoments/layout/Header/Header.js"
import Footer from "./compoments/layout/Footer/Footer.js"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WebFont from "webfontloader";
import Home from "./compoments/Home/Home.js";
import Loader from './compoments/layout/Loader/Loader.js';
import ProductDetails from './compoments/layout/Product/ProductDetails.js';
import Products from './compoments/layout/Product/Products.js';
import Search from './compoments/layout/Product/Search.js';
import LoginSignUp from './compoments/User/LoginSignUp.js';
import Profile from './compoments/User/Profile.js';
import store from "./store.js";
import { loadUser } from './actions/userAction.js';
import UserOptions from './compoments/layout/Header/UserOptions.js';
import { useSelector } from 'react-redux';
import Cart from "./compoments/Cart/Cart.js";
import Dashboard from "./compoments/Admin/Dashboard.js";
import UpdateProfile from "./compoments/User/UpdateProfile.js";
import UpdatePassword from "./compoments/User/UpdatePassword.js";
import ForgotPassword from "./compoments/User/ForgotPassword.js";
import ResetPassword from "./compoments/User/ResetPassword.js";
import Shipping from "./compoments/Cart/Shipping.js";
import ConfirmOrder from "./compoments/Cart/ConfirmOrder.js";
import axios from "axios";
import Payment from "./compoments/Cart/Payment.js";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./compoments/Cart/OrderSuccess.js";
import MyOrders from "./compoments/Order/MyOrders.js";
import OrderDetails from "./compoments/Order/OrderDetails.js";
import ProtectedRoute from './compoments/Route/ProtectedRoute.js';
import ProductList from "./compoments/Admin/ProductList.js";
import NewProduct from "./compoments/Admin/NewProduct.js";
import UpdateProduct from "./compoments/Admin/UpdateProduct.js";
import OrderList from "./compoments/Admin/OrderList.js";
import ProcessOrder from "./compoments/Admin/ProcessOrder.js";
import UsersList from "./compoments/Admin/UsersList.js";
import UpdateUser from "./compoments/Admin/UpdateUser.js";
import ProductReviews from "./compoments/Admin/ProductReviews.js";
import Contact from "./compoments/layout/Contact/Contact.js";
import About from "./compoments/layout/About/About.js";






function App() {

  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    store.dispatch(loadUser());
    getStripeApiKey();
  }, []);

  

  return <Router>
    <Header />
    {isAuthenticated && <UserOptions user={user} />}

    {isAuthenticated && (
      <Routes>
        <Route exact path="/account" Component={Profile} />
      </Routes>
    )}
    {isAuthenticated && (
      <Routes>
        <Route exact path="/me/update" Component={UpdateProfile} />
      </Routes>
    )}
    {isAuthenticated && (
      <Routes>
        <Route exact path="/password/update" Component={UpdatePassword} />
      </Routes>
    )}

    {isAuthenticated && (
      <Routes>
        <Route exact path="/orders" Component={MyOrders} />
      </Routes>
    )}

    {isAuthenticated && (
      <Routes>
        <Route exact path="/login/shipping" Component={Shipping} />
      </Routes>
    )}
    {isAuthenticated && (
      <Routes>
        <Route exact path="/success" Component={OrderSuccess} />
      </Routes>
    )}


    <Routes>
      {isAuthenticated && (
        <Route exact path="/order/confirm" Component={ConfirmOrder} />
      )}
      {isAuthenticated && (
        <Route exact path="/order/:id" Component={OrderDetails} />
      )}
    </Routes>

    {isAuthenticated && (
      <Routes>
        <Route path="/admin/dashboard" element={<ProtectedRoute
          isAuthenticated={isAuthenticated} user={user} isAdmin={true}>
          <Dashboard />
        </ProtectedRoute>} />
      </Routes>
    )}

    {isAuthenticated && (
      <Routes>
        <Route path="/admin/products" element={<ProtectedRoute
          isAuthenticated={isAuthenticated} user={user} isAdmin={true}>
          <ProductList />
        </ProtectedRoute>} />
      </Routes>
    )}

    {isAuthenticated && (
      <Routes>
        <Route path="/admin/product" element={<ProtectedRoute
          isAuthenticated={isAuthenticated} user={user} isAdmin={true}>
          <NewProduct />
        </ProtectedRoute>} />
      </Routes>
    )}

    {isAuthenticated && (
      <Routes>
        <Route path="/admin/product/:id" element={<ProtectedRoute
          isAuthenticated={isAuthenticated} user={user} isAdmin={true}>
          <UpdateProduct />
        </ProtectedRoute>} />
      </Routes>
    )}

    {isAuthenticated && (
      <Routes>
        <Route path="/admin/orders" element={<ProtectedRoute
          isAuthenticated={isAuthenticated} user={user} isAdmin={true}>
          <OrderList />
        </ProtectedRoute>} />
      </Routes>
    )}

    {isAuthenticated && (
      <Routes>
        <Route path="/admin/order/:id"
          element={<ProtectedRoute
            isAuthenticated={isAuthenticated} user={user} isAdmin={true}>
            <ProcessOrder />
          </ProtectedRoute>} />
      </Routes>
    )}

    {isAuthenticated && (
      <Routes>

        <Route path="/admin/users" element={<ProtectedRoute
          isAuthenticated={isAuthenticated}
          user={user} isAdmin={true}>
          <UsersList />
        </ProtectedRoute>} />
      </Routes>
    )}

    {isAuthenticated && (
      <Routes>
        <Route path="/admin/user/:id" element={<ProtectedRoute
          isAuthenticated={isAuthenticated}
          user={user} isAdmin={true}>
          <UpdateUser />
        </ProtectedRoute>} />
      </Routes>
    )}

    {isAuthenticated && (
      <Routes>
        <Route path="/admin/reviews" element={<ProtectedRoute
          isAuthenticated={isAuthenticated}
          user={user} isAdmin={true}>
          <ProductReviews />
        </ProtectedRoute>} />
      </Routes>
    )}


    {stripeApiKey && (
      <Elements stripe={loadStripe(stripeApiKey)}>
        <Routes>
          <Route exact path="/process/payment" Component={Payment} />
        </Routes>
      </Elements>
    )}



    <Routes>
      <Route exact path="/" Component={Home} />
      <Route exact path="/product/:id" Component={ProductDetails} />
      <Route exact path="/sad" Component={Loader} />
      <Route exact path="/products" Component={Products} />
      <Route path="/products/:keyword" Component={Products} />
      <Route exact path="/Search" Component={Search} />

      <Route exact path="/contact" Component={Contact} />
      <Route exact path="/about" Component={About} />

      <Route exact path="/password/forgot" Component={ForgotPassword} />

      <Route exact path="/password/reset/:token" Component={ResetPassword} />
      <Route exact path="/login" Component={LoginSignUp} />


      <Route exact path="/cart" Component={Cart} />

      

    </Routes>
    <Footer />
  </Router>
}

export default App;
