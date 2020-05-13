import React, { useEffect } from "react";
import { connect } from "react-redux";
import axios from "../../axios-order";
import Burger from "../Burger/Burger";
import classes from "./Orders.module.css";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import { getAllOrders } from "../../redux/actions";

const Order = ({ orders, getAllOrders }) => {
  useEffect(() => {
    getAllOrders();
  }, [getAllOrders]);

  return (
    <>
      {orders.map((items) => {
        return (
          <div key={items.id} className={classes.Card}>
            <Burger ingredients={items.ingredients} />
            <div className={classes.Price}>
              <strong>
                Total price : ${Number.parseFloat(items.totalPrice).toFixed(2)}
              </strong>
            </div>
          </div>
        );
      })}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    orders: state.orders,
  };
};

const mapDispatchToProps = {
  getAllOrders,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Order, axios));
