import React, { Component } from "react";
import { connect } from "react-redux";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import { INGREDIENTS_PRICE } from "../../helper/ingredientsPrice";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import classes from "./BurgerBuilder.module.css";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Spinner from "../../components/UI/Spinner/Spinner";
import axios from "../../axios-order";
import {
  loadIngredients,
  addIngredients,
  removeIngredietns,
  burderBuilding,
} from "../../redux/actions";

class BurgerBuild extends Component {
  state = {
    purchasable: false,
    purchasing: false,
    isLoading: false,
  };

  componentDidMount() {
    this.props.loadIngredients();
  }
  closeHander = () => this.setState({ purchasing: false });
  checkOutHandler = () => {
    if (this.props.isAuthenticated) {
      this.setState({ purchasing: true });
    } else {
      this.props.burderBuilding();
      this.props.history.push("/Login");
    }
  };
  updatePurchasableState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((igkey) => {
        return ingredients[igkey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    this.setState({ purchasable: sum > 0 });
  };

  addIngredientsHander = (type) => {
    const oldQuantity = this.props.ingredients[type];
    const updateQunatity = oldQuantity + 1;
    const updatedIngredients = { ...this.props.ingredients };
    updatedIngredients[type] = updateQunatity;
    const oldTotalPrice = this.props.totalPrice;
    const updatedPrice = INGREDIENTS_PRICE[type] + oldTotalPrice;
    this.props.addIngredients(updatedIngredients, updatedPrice);
    this.updatePurchasableState(updatedIngredients);
  };

  removeIngredientsHander = (type) => {
    if (this.props.ingredients[type] <= 0) {
      return;
    }
    const oldQuantity = this.props.ingredients[type];
    const updateQunatity = oldQuantity - 1;
    const updatedIngredients = { ...this.props.ingredients };
    updatedIngredients[type] = updateQunatity;
    const oldTotalPrice = this.props.totalPrice;
    const updatedPrice = oldTotalPrice - INGREDIENTS_PRICE[type];
    this.props.removeIngredietns(updatedIngredients, updatedPrice);
    this.updatePurchasableState(updatedIngredients);
  };

  chcekOutHandler = () => {
    this.setState({ isLoading: true });
    this.props.history.push({
      pathname: "/checkout",
    });
  };
  render() {
    if (!this.props.ingredients) {
      return <Spinner />;
    }
    return (
      <>
        {this.state.purchasing && (
          <Modal closeHander={this.closeHander}>
            <OrderSummary
              showLoader={this.state.isLoading}
              closeHander={this.closeHander}
              ingredients={this.props.ingredients}
              totalPrice={this.props.totalPrice}
              checkOutHandler={this.chcekOutHandler}
            />
          </Modal>
        )}
        <div className={classes.TotalPrice}>
          ${this.props.totalPrice.toFixed(1)}
        </div>
        <div>
          <Burger />
        </div>

        <div>
          <BuildControls
            ingredients={this.props.ingredients}
            addIngredientsHandler={this.addIngredientsHander}
            removeIngredientsHandler={this.removeIngredientsHander}
            isPurchasable={this.state.purchasable}
            checkOutHandler={this.checkOutHandler}
            buttonText={
              this.props.isAuthenticated ? "Order Now" : "Sing in to Order"
            }
          />
        </div>
        <ToastContainer autoClose={3000} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients.ingredients,
    totalPrice: state.ingredients.totalPrice,
    isAuthenticated: state.auth.token !== null,
  };
};
const mapDispatchToProps = {
  loadIngredients,
  addIngredients,
  removeIngredietns,
  burderBuilding,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuild, axios));
