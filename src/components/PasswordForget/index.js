import React, { Component } from "react";
import { Link } from "react-router-dom";

import { auth } from "../../firebase";
import * as routes from "../../constants/routes";
import { Row, Col } from "react-materialize";

const PasswordForgetPage = () => (
  <div>
    <Row className="container">
      <Col s={12} className="col-wrapper">
        <h1>PasswordForget</h1>
        <PasswordForgetForm />
      </Col>
    </Row>
  </div>
);

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  email: "",
  error: null
};

class PasswordForgetForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email } = this.state;

    auth
      .doPasswordReset(email)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(updateByPropertyName("error", error));
      });

    event.preventDefault();
  };

  render() {
    const { email, error } = this.state;

    const isInvalid = email === "";

    return (
      <Row className="container">
        <Col s={12} className="col-wrapper">
          <form onSubmit={this.onSubmit}>
            <input
              value={this.state.email}
              onChange={event =>
                this.setState(updateByPropertyName("email", event.target.value))
              }
              type="text"
              placeholder="Email Address"
            />
            <button className="btn" disabled={isInvalid} type="submit">
              Reset My Password
            </button>

            {error && <p>{error.message}</p>}
          </form>
        </Col>
      </Row>
    );
  }
}

const PasswordForgetLink = () => (
  <p>
    <Link to={routes.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>
);

export default PasswordForgetPage;

export { PasswordForgetForm, PasswordForgetLink };
