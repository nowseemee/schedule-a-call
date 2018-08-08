import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import colors from "../colors";

const TextInput = props => (
  <input
    className={css`
      height: 36px;
      line-height: 36px;
      box-sizing: border-box;
      width: 100%;
      font-size: 16px;
      border: 1px solid grey;
      border-radius: 2px;
      padding: 8px;
      :active,
      :focus {
        outline: 1px solid ${colors.brand};
      }
    `}
    type="text"
    value={props.value}
    onChange={props.onChange}
  />
);

TextInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default TextInput;
