import React, { useState } from "react";
import { connect } from "react-redux";

import classes from "./Contact.module.css";
import Button from "../../components/UI/Button/Button";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../../components/UI/Spinner/Spinner";
import InputType from "../../components/UI/Input/Input";

const ContactData = ({ ingredients, totalPrice, history }) => {
  const [contactDetails, setContactDetails] = useState({
    name: {
      elementType: "input",
      value: "",
      elementConfig: {
        type: "text",
        placeholder: "Please enter you name",
      },
    },
    email: {
      elementType: "input",
      value: "",
      elementConfig: {
        type: "email",
        placeholder: "Please enter you email",
      },
    },
    street: {
      elementType: "input",
      value: "",
      elementConfig: {
        type: "text",
        placeholder: "Please enter you street",
      },
    },
    pincode: {
      elementType: "input",
      value: "",
      elementConfig: {
        type: "text",
        placeholder: "Please enter you pincode",
      },
    },
    country: {
      elementType: "select",
      value: "india",
      elementConfig: {
        options: [
          { value: "Afghanistan", displayValue: "Afghanistan" },
          { value: "Åland Islands", displayValue: "Åland Islands" },
          { value: "Albania", displayValue: "Albania" },
          { value: "Algeria", displayValue: "Algeria" },
          { value: "American Samoa", displayValue: "American Samoa" },
          { value: "Andorra", displayValue: "Andorra" },
          { value: "Angola", displayValue: "Angola" },
          { value: "Anguilla", displayValue: "Anguilla" },
          { value: "Antarctica", displayValue: "Antarctica" },
          { value: "Antigua and Barbuda", displayValue: "Antigua and Barbuda" },
          { value: "Argentina", displayValue: "Argentina" },
          { value: "Armenia", displayValue: "Armenia" },
          { value: "Aruba", displayValue: "Aruba" },
          { value: "Australia", displayValue: "Australia" },
          { value: "Austria", displayValue: "Austria" },
          { value: "Azerbaijan", displayValue: "Azerbaijan" },
          { value: "Bahamas", displayValue: "Bahamas" },
          { value: "Bahrain", displayValue: "Bahrain" },
          { value: "Bangladesh", displayValue: "Bangladesh" },
          { value: "Barbados", displayValue: "Barbados" },
          { value: "Belarus", displayValue: "Belarus" },
          { value: "Belgium", displayValue: "Belgium" },
          { value: "Belize", displayValue: "Belize" },
          { value: "Benin", displayValue: "Benin" },
          { value: "Bermuda", displayValue: "Bermuda" },
          { value: "Bhutan", displayValue: "Bhutan" },
          { value: "Bolivia", displayValue: "Bolivia" },
        ],
      },
    },
    deliveryOptons: {
      elementType: "select",
      value: "fastest",
      elementConfig: {
        options: [
          { value: "fastest", displayValue: "Fastest" },
          { value: "standard", displayValue: "Standard" },
        ],
      },
    },
  });
  const [isLoading, setIsLoading] = useState(false);

  const placeOrderHandler = (event) => {
    event.preventDefault();
    let customerContactDetails = {};
    for (let contactKey in contactDetails) {
      customerContactDetails[contactKey] = contactDetails[contactKey].value;
    }
    setIsLoading(true);
    // const orders = {
    //   ingredients: ingredients,
    //   totalPrice: totalPrice,
    //   customer: customerContactDetails,
    // };
  };

  if (isLoading) {
    return <Spinner />;
  }

  let formElement = [];
  if (contactDetails) {
    for (let key in contactDetails) {
      formElement.push({
        id: key,
        config: contactDetails[key],
      });
    }
  }

  const changeHandler = (event, name) => {
    const customerDetails = { ...contactDetails };
    const updatedform = { ...customerDetails[name] };
    updatedform.value = event.target.value;
    customerDetails[name] = updatedform;
    setContactDetails(customerDetails);
  };
  return (
    <div className={classes.ContactData}>
      <h1>Please enter your contact details</h1>
      <form>
        <div>
          {formElement.map((details) => {
            return (
              <InputType
                key={details.id}
                value={details.config.value}
                {...details.config}
                change={(event) => changeHandler(event, details.id)}
              />
            );
          })}
        </div>
        <div className={classes.Container}>
          <Button
            className={classes.InputElement}
            isPrimary
            text="Place order"
            handler={placeOrderHandler}
          />
        </div>
      </form>
      <ToastContainer autoClose={3000} />
    </div>
  );
};

const mapStateToprops = (state) => {
  return {
    ingredients: state.ingredients,
  };
};

export default connect(mapStateToprops)(ContactData);
