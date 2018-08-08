import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";

import colors from "../colors";

const ActiveIndicator = props => (
  <button
    className={css`
      display: block;
      border: 1px solid ${colors.brand};
      border-radius: 2px;
      height: 16px;
      width: 16px;
      background: ${props.isActive ? colors.brand : `transparent`};
    `}
  />
);

ActiveIndicator.propTypes = {
  isActive: PropTypes.bool
};

export default ActiveIndicator;
