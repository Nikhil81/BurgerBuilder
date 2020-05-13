import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import Orders from "./components/Orders/Orders";

const App = () => {
  return (
    <>
      <Layout>
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/Orders" component={Orders} />
          <Route path="/" exact component={BurgerBuilder} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </>
  );
};

export default App;
