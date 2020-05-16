import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import classes from "./Checkout.module.css";
import CheckoutSummary from "../../components/Orders/CheckoutSummary/CheckoutSummary";
import ContactData from "../ContactData/ContactData";
import { burderBuildingFinish } from "../../redux/actions";

const Checkout = ({ history, ingredients, match, burderBuildingFinish }) => {
  //const [ingredients, setIngredients] = useState({});
  //const [totalPrice, setTotalPrice] = useState(0);

  //const { search } = location;

  useEffect(() => {
    burderBuildingFinish();
  }, [burderBuildingFinish]);
  const cancelHander = () => {
    history.push("/");
  };

  const successHandler = () => {
    history.push("/Checkout/contact-data");
  };
  return (
    <div className={classes.Checkout}>
      <CheckoutSummary
        ingredients={ingredients}
        cancelHander={cancelHander}
        successHandler={successHandler}
      />
      <Route
        path={match.path + "/contact-data"}
        render={() => (
          <ContactData
            ingredients={ingredients}
            totalPrice="0"
            history={history}
          />
        )}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients,
  };
};

const mapDispatchToProps = {
  burderBuildingFinish,
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
