import React, { Component } from "react";
import { Link } from "react-router-dom";

import withAuthorization from "../Session/withAuthorization";
import { db } from "../../firebase";
import * as routes from "../../constants/routes";
import { Row, Col } from "react-materialize";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: {}
    };
  }

  componentDidMount() {
    db
      .onceGetUsers()
      .then(snapshot => this.setState(() => ({ users: snapshot.val() })));
  }

  render() {
    const { users } = this.state;
    const test = this.state.users;

    console.log(test);

    return (
      <Row className="container">
        <Col s={12} className="frame-col-wrapper">
          <h1>Home</h1>
          <p>The Home Page is accessible by every signed in user.</p>
          <Link className="btn waves-effect waves-light" to={routes.INVENTORY}>
            Start Inventory
          </Link>
          {!!users && <UserList users={users} />}
        </Col>
      </Row>
    );
  }
}

const UserList = ({ users }) => (
  <div>
    <h2>List of Usernames of Users</h2>
    <p>(Saved on Sign Up in Firebase Database)</p>

    {Object.keys(users).map(key => <div key={key}>{users[key].username}</div>)}
  </div>
);

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(HomePage);
