import React from "react";
import PropTypes from "prop-types";

import { PasswordForgetForm } from "../PasswordForget";
import PasswordChangeForm from "../PasswordChange";
import withAuthorization from "../Session/withAuthorization";
import { Row, Col } from "react-materialize";

const AccountPage = (props, { authUser }) => (
  <div>
    <Row className="container">
      <Col s={12} className="col-wrapper">
        <h1>Account: {authUser.email}</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
      </Col>
    </Row>
  </div>
);

AccountPage.contextTypes = {
  authUser: PropTypes.object
};

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(AccountPage);
