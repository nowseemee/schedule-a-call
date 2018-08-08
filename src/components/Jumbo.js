import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import colors from "../colors";

const Jumbo = props => (
  <div
    className={css`
      background: ${colors.backgroundHighlight};
      padding: 32px 16px;
      border-radius: 2px;
      font-size: 16px;
    `}
  >
    {props.children}
  </div>
);

Jumbo.propTypes = {
  children: PropTypes.node
};

export default Jumbo;
