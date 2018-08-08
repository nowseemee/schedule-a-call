import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";

const Aligner = props => (
  <div
    className={css`
      text-align: ${props.textAlign};
      margin: ${props.margin};
      padding: ${props.padding};
    `}
  >
    {props.children}
  </div>
);

Aligner.propTypes = {
  children: PropTypes.node,
  margin: PropTypes.node,
  padding: PropTypes.node,
  textAlign: PropTypes.string
};

Aligner.defaultProps = {
  textAlign: "left",
  margin: "0",
  padding: "0"
};

export default Aligner;
