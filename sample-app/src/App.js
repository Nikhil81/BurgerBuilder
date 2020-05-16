import React, { useEffect, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Logout from "./containers/Auth/Logout/Logout";
import { authCheckState } from "./redux/actions/authActions";

const Orders = React.lazy(() => import("./components/Orders/Orders"));
const Checkout = React.lazy(() => import("./containers/Checkout/Checkout"));
const Auth = React.lazy(() => import("./containers/Auth/Auth"));

const App = ({ authCheckState, isAunthenticated }) => {
  useEffect(() => {
    authCheckState();
  }, [authCheckState]);

  return (
    <>
      <Layout>
        <Switch>
          <Route
            path="/checkout"
            render={(props) => (
              <Suspense fallback="Loading...">
                <Checkout {...props} />
              </Suspense>
            )}
          />
          <Route
            path="/Orders"
            render={(props) => (
              <Suspense fallback="Loading..">
                <Orders {...props} />
              </Suspense>
            )}
          />
          <Route
            path="/Login"
            render={(props) => (
              <Suspense fallback="Loading...">
                <Auth {...props} />
              </Suspense>
            )}
          />
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
