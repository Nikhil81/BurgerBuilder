import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import classes from "./Checkout.module.css";
import CheckoutSummary from "../../components/Orders/CheckoutSummary/CheckoutSummary";
import ContactData from "../ContactData/ContactData";

const Checkout = ({ history, ingredients, match }) => {
  //const [ingredients, setIngredients] = useState({});
  //const [totalPrice, setTotalPrice] = useState(0);

  //const { search } = location;

  // useEffect(() => {
  //   const query = new URLSearchParams(search);
  //   let ingredients = {};
  //   for (let params of query.entries()) {
  //     if (params[0] === "price") {
  //       setTotalPrice(params[1]);
  //     } else {
  //       ingredients[params[0]] = +params[1];
  //     }
  //   }
  //   setIngredients({ ...ingredients });
  // }, []);
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

export default connect(mapStateToProps)(Checkout);
