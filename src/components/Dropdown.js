import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import colors from "../colors";

const Dropdown = props => (
  <select
    className={css`
      height: 36px;
      line-height: 36px;
      box-sizing: border-box;
      width: 100%;
      border: 1px solid grey;
      border-radius: 2px;
      font-size: 16px;
      padding: 8px 8px 8px 4px;
      :active,
      :focus {
        outline: 1px solid ${colors.brand};
      }
    `}
    value={props.value}
    onChange={props.onChange}
  >
    {props.items.map(item => (
      <option key={props.getItemValue(item)} value={props.getItemValue(item)}>
        {props.renderItem(item)}
      </option>
    ))}
  </select>
);

Dropdown.propTypes = {
  onChange: PropTypes.func,
  getItemValue: PropTypes.func,
  renderItem: PropTypes.func,
  items: PropTypes.array,
  value: PropTypes.string
};

export default Dropdown;
