import React from "react";
import PropTypes from "prop-types";
import Carousel from "react-slick";
import { css } from "emotion";
import "slick-carousel/slick/slick.css";

const Slider = props => (
  <div className={css``}>
    <Carousel variableWidth arrows={false} dots={false} infinite={false}>
      {props.children}
    </Carousel>
  </div>
);

Slider.propTypes = {
  children: PropTypes.node
};

export default Slider;
