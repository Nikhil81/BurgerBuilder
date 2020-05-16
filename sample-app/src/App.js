import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import Orders from "./components/Orders/Orders";
import Auth from "./containers/Auth/Auth";
import Logout from "./components/Logout/Logout";
import { authCheckState } from "./redux/actions/authActions";

const App = ({ authCheckState, isAunthenticated }) => {
  useEffect(() => {
    authCheckState();
  }, [authCheckState]);

  return (
    <>
      <Layout>
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/Orders" component={Orders} />
          <Route path="/Login" component={Auth} />
          <Route path="/Logout" component={Logout} />
          <Route path="/" exact component={BurgerBuilder} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = {
  authCheckState,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
