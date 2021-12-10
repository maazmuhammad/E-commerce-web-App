import React from "react";
//import { Switch, Route, withRouter } from "react-router-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";
//import { withRouter } from "react-router";

import { withRouter } from "./WithRouter";
import { ProtectedRoute } from "./ProtectedRoute";


import Home from '../Screen/Home/Home'
import Signup from "../Screen/Signup/Signup";
import Login from "../Screen/Login/Login"
import Product from "../Screen/Product/Product";
import Cart from "../Screen/Cart/Cart";
import Checkout from "../Screen/Checkout/Checkout";
import PageNotFound from "../Screen/NotFound/PageNotFound";


const routesArr = [
  {
    path: "/",
    Component: Home,
    hideDrawer : false
  },
  {
    path: "/product/:id",
    Component: Product,
    hideDrawer : true
  },
  {
    path: "/cart",
    Component: Cart,
    hideDrawer : true
  },
  {
    path: "/checkout",
    Component: Cart,
    hideDrawer : true
  },
  {
    path: "/signup",
    Component: Signup,
    hideDrawer : true
  },
  {
    path: "/login",
    Component: Login,
    hideDrawer:true
  }
];



const routes = () => {
    return (
      <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="*" element={<PageNotFound/>} />
        {routesArr.map((route) => {
          return (
            <Route
              key={route.path}
              //exact={route.exact}
              path={route.path}
              element={ <ProtectedRoute component={route.Component} hideDrawer={route.hideDrawer}  />}
            //render={(props) => <route.component {...props} />}
            />
          );
        })}
      </Routes>
    )
};

export default withRouter(routes);
//export default routes;