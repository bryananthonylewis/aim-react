import React, { Component } from "react";

import withAuthorization from "../Session/withAuthorization";
import { base } from "../../firebase/firebase";
import SampleFrames from "../../sampledata/sampledata";
import Frame from "../Frame";
import { Row, Col } from "react-materialize";
import "./index.css";

class StartInventoryPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: {},
      frames: {},
      brand: ""
    };
  }

  componentDidMount() {
    /* passed from withAuthorization.js in session directory */
    const uid = this.props.authUser.uid;

    this.ref = base.syncState(`/users/${uid}/frames`, {
      context: this,
      state: "frames"
    });
  }

  loadSampleFrames = () => {
    this.setState({ frames: SampleFrames });
  };

  filter = brandName => {
    this.setState({ brand: brandName });
    this.frameResults();
  };

  frameResults = () => {
    const doBrandExist = Object.keys(this.state.brand).length >= 1;
    return doBrandExist ? this.showFilteredFrames() : this.showAllFrames();
  };

  showAllFrames = () => {
    console.log("showAllFrames");
    return Object.keys(this.state.frames).map(key => (
      <Frame key={key} index={key} details={this.state.frames[key]} />
    ));
  };

  showFilteredFrames = () => {
    console.log("showFilteredFrames");
    return Object.keys(this.state.frames)
      .filter(key => this.state.frames[key].brand === this.state.brand)
      .map(key => (
        <Frame key={key} index={key} details={this.state.frames[key]} />
      ));
  };

  render() {
    const doFramesExist = Object.keys(this.state.frames).length >= 1;
    const button = (
      <button
        className="btn waves-effect waves-light"
        onClick={this.loadSampleFrames}
      >
        Load Sample Frames
      </button>
    );

    return (
      <div>
        <Row className="container">
          <Col s={12} className="frame-col-wrapper">
            <h1>Start Inventory</h1>
            <p>The Inventory is accessible by every signed in user.</p>
            {!doFramesExist ? button : null}
          </Col>
        </Row>

        <Row className="container">
          <Col s={3} className="sidebar">
            <ul>
              <li>
                <button onClick={() => this.filter("")}>All</button>
              </li>
              <li>
                <button onClick={() => this.filter("altair")}>Altair</button>
              </li>
              <li>
                <button onClick={() => this.filter("anne klein")}>
                  Anne Klein
                </button>
              </li>
              <li>
                <button onClick={() => this.filter("bebe")}>bebe</button>
              </li>
              <li>
                <button onClick={() => this.filter("calvin klein jeans")}>
                  Calvin Klein Jeans
                </button>
              </li>
              <li>
                <button onClick={() => this.filter("cole haan")}>
                  Cole Haan
                </button>
              </li>
              <li>
                <button onClick={() => this.filter("genesis")}>Genesis</button>
              </li>
              <li>
                <button onClick={() => this.filter("joe joseph abboud")}>
                  JOE Joseph Abboud
                </button>
              </li>
              <li>
                <button onClick={() => this.filter("joseph abboud")}>
                  Joseph Abboud
                </button>
              </li>
              <li>
                <button onClick={() => this.filter("kilter")}>Kilter</button>
              </li>
              <li>
                <button onClick={() => this.filter("otis and piper")}>
                  Otis and Piper
                </button>
              </li>
            </ul>
          </Col>
          <Col s={9} className="main-frames-section">
            <div className="frames">{this.frameResults()}</div>
          </Col>
        </Row>
      </div>
    );
  }
}

const authCondition = authUser => !!authUser;
export default withAuthorization(authCondition)(StartInventoryPage);
