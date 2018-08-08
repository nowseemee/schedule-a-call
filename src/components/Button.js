import React from "react";
import { css } from "emotion";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import colors from "../colors";

const styles = {
  container: disabled => css`
    transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    box-sizing: border-box;
    display: inline-block;
    width: 100%;
    text-align: center;
    cursor: pointer;
    outline: none;
    height: 36px;
    line-height: 36px;
    transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;

    ${disabled
      ? `
        pointer-events: none;
        opacity: .7
      `
      : `
        &:active {
            box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 10px,
            rgba(0, 0, 0, 0.23) 0px 3px 10px;
        }
      `};
  `,

  body: theme => css`
    display: block;
    margin: 0px;
    user-select: none;
    padding-left: 16px;
    padding-right: 16px;
    text-decoration: none;
    font-weight: 600;
    border-radius: 2px;
    ${theme === "primary"
      ? `
      color: ${colors.background};
      background-color: ${colors.brand};
      border: 1px solid ${colors.brand}
    `
      : `
      color: ${colors.brand};
      background-color: ${colors.background};
      border: 1px solid ${colors.brand}
    `};
  `
};

const Button = ({ to, children, onClick, disabled, theme }) => (
  <div className={styles.container(disabled)}>
    {to ? (
      <Link to={to} className={styles.body(theme)}>
        {children}
      </Link>
    ) : (
      <a onClick={onClick} className={styles.body(theme)}>
        {children}
      </a>
    )}
  </div>
);

Button.defaultProps = {
  theme: "primary",
  to: ""
};

Button.propTypes = {
  theme: PropTypes.oneOf(["primary", "secondary"]),
  to: PropTypes.string
};

export default Button;
