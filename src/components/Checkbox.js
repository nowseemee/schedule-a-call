import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import ActiveIndicator from "./ActiveIndicator";
import colors from "../colors";

const styles = {
  container: css`
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    height: 36px;
    line-height: 36px;
    box-sizing: border-box;
    width: 100%;
    border: 1px solid ${colors.brand};
    border-radius: 2px;
    user-select: none;
    font-size: 16px;
    cursor: pointer;
    button {
      margin: 0 8px;
    }
  `,
  leftGroup: css`
    display: inline-flex;
    padding: 0 8px;

    img {
      margin-right: 4px;
    }
  `
};

const Checkbox = props => (
  <a onClick={props.onChange} className={styles.container}>
    <span className={styles.leftGroup}>
      {props.icon && (
        <img alt="checkbox icon" src={props.icon} className={styles.icon} />
      )}
      <span className={styles.body}>{props.children}</span>
    </span>
    <ActiveIndicator isActive={props.checked} />
  </a>
);

Checkbox.propTypes = {
  icon: PropTypes.string,
  children: PropTypes.node,
  checked: PropTypes.bool
};

export default Checkbox;
