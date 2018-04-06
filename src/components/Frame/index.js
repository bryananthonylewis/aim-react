import React from "react";
import { formatPrice } from "../../helpers";
import { Col } from "react-materialize";
import "./index.css";

class Frame extends React.Component {
  render() {
    // const image = this.props.details.image;
    // const name = this.props.details.name;
    // this is the same as above but for es6
    const { image, name, price, desc, brand } = this.props.details;
    return (
      <Col s={6} className="frame-col-wrapper">
        <div className="frame">
          <img src={image} alt={name} />
          <p className="frame-name">{name}</p>
          <p className="frame-price">{formatPrice(price)}</p>
          <p className="frame-brand">{brand}</p>
          <p>{desc}</p>
        </div>
      </Col>
    );
  }
}

export default Frame;
