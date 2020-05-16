import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import classes from "./Auth.module.css";
import Button from "../../components/UI/Button/Button";
import { validateInput } from "../../helper/validatation";
import { signIn } from "../../redux/actions";
import Spinner from "../../components/UI/Spinner/Spinner";

class Auth extends Component {
  state = {
    username: "",
    password: "",
    validationMessage: "",
    singIn: true,
  };

  inputChangeHandler = (event) => {
    const imputValue = event.target.value;
    if (event.target.name === "username") {
      this.setState({ username: imputValue });
    } else {
      this.setState({ password: imputValue });
    }
  };

  newuserHandler = () => {
    this.setState({ singIn: false });
  };

  submitHandler = (event) => {
    event.preventDefault();
    if (validateInput(this.state.username, this.state.password)) {
      this.props.signIn(
        this.state.username,
        this.state.password,
        this.state.singIn
      );
    } else {
      this.setState({ validationMessage: "This field is required" });
    }
  };

  formatErrorMessage = (errorCode) => {
    switch (errorCode) {
      case "INVALID_PASSWORD":
        return "Please enter valid password";
      default:
        return "Invalid user";
    }
  };

  render() {
    let errorMessage = null;
    if (this.props.loading) {
      return <Spinner />;
    }
    if (this.props.error) {
      errorMessage = (
        <p className={classes.ValidationLabel + " " + classes.ErrorMessage}>
          {this.formatErrorMessage(this.props.error.message)}
        </p>
      );
    }
    if (this.props.isAuthenticated) {
      if (this.props.building) {
        return <Redirect to="/checkout" />;
      } else {
        return <Redirect to="/" />;
      }
    }
    return (
      <>
        <form className={classes.Auth}>
          {errorMessage}
          <div className={classes.Container}>
            <label className={classes.Label}>Username</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.inputChangeHandler}
            />
            <span className={classes.ValidationSpan}>*</span>
            <span className={classes.ValidationLabel}>
              {this.state.validationMessage}
            </span>
          </div>
          <div className={classes.Container}>
            <label className={classes.Label}>Password</label>
            <input
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.inputChangeHandler}
            />
            <span className={classes.ValidationSpan}>*</span>
            <span className={classes.ValidationLabel}>
              {this.state.validationMessage}
            </span>
          </div>
          <div className={classes.Container}>
            <Button
              type="submit"
              isPrimary
              handler={this.submitHandler}
              text={this.state.singIn ? "Sign In" : "Sign up"}
            />
            {this.state.singIn && (
              <Button
                type="button"
                handler={this.newuserHandler}
                text="New User?"
              />
            )}
          </div>
        </form>
      </>
    );
  }
}
const mapDispathToProps = {
  signIn,
};

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    building: state.ingredients.building,
    isAuthenticated: state.auth.token != null,
  };
};

export default connect(mapStateToProps, mapDispathToProps)(Auth);
