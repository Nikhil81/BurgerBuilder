import React, { Component } from "react";

import Modal from "../../components/UI/Modal/Modal";
const withErrorHandler = (WrappedComponents, axios) => {
  return class extends Component {
    state = {
      error: null,
    };

    componentWillMount() {
      this.requestInterceptors = axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });
      this.responseIterceptors = axios.interceptors.response.use(
        null,
        (error) => {
          this.setState({ error: error });
        }
      );
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.requestInterceptors);
      axios.interceptors.response.eject(this.responseIterceptors);
    }
    closeModelHanlder = () => {
      this.setState({ error: null });
    };
    render() {
      return (
        <>
          {this.state.error && (
            <Modal closeHander={this.closeModelHanlder}>
              {this.state.error ? this.state.error.message : null}
            </Modal>
          )}
          <WrappedComponents {...this.props} />
        </>
      );
    }
  };
};

export default withErrorHandler;
