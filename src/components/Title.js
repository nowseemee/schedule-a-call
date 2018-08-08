import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";

const Title = props => (
  <div
    className={css`
      margin-bottom: 8px;
      font-size: 16px;
      font-weight: ${props.weight};
    `}
  >
    {props.children}
  </div>
);

Title.propTypes = {
  children: PropTypes.node,
  weight: PropTypes.oneOf(["bolder", "normal"])
};

Title.defaultProps = {
  weight: "bolder"
};

export default Title;
