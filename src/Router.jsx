// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './Pages/Landing/Landing';
import Auth from './Pages/Auth/Auth';
// import Payments from './Pages/Payments/Payments';
import Payments from './Pages/Payments/Payments';
import Orders from './Pages/Orders/Orders';
import Cart from './Pages/Cart/Cart';
import Results from './Pages/Results/Results';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import ProtectedRoute from './Component/ProtectedRoute/ProtectedRoute';


const stripePromise = loadStripe('pk_test_51OnW7jFIH1av9OpjuDXs0wqpirnq3h6SkUrP1DOgpLBsJovJFOrFfESJOM66HkKI1lMehRJKObslt1mIUh4jglGk009GucRmmn');


function Routing() {
  return (
    <Router>
        <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/payments" element={
                    <ProtectedRoute 
                    msg={"You must log-in to pay first"} redirect={"/payments"}>
                        <Elements stripe={stripePromise}>
                            <Payments />
                        </Elements>
                    </ProtectedRoute>
                } />

                <Route path='/orders' element={
                    <ProtectedRoute 
                    msg={"You must log-in first to access your orders "} redirect={"/orders"}>
                            <Orders />
                    </ProtectedRoute>
               } />
                <Route path='/category/:categoryName' element={<Results />} />
                <Route path='/products/:productId' element={<ProductDetail />} />
                <Route path='/cart' element={<Cart />} />
        </Routes>
    </Router>
  )
}

export default Routing;