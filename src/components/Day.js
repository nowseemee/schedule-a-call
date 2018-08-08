import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";
import dayjs from "dayjs";

import Title from "./Title";
import colors from "../colors";

const styles = {
  container: (isActive, isDisabled) => css`
    color: ${isDisabled ? "#CED4D6" : colors.typography};
    box-sizing: border-box;
    border: 1px solid ${isActive ? colors.brand : "grey"};
    background: ${isActive ? "#CFE5EC" : "transparent"};
    border-radius: 2px;
    font-size: 12px;
    cursor: pointer;
    margin-right: 8px;
    padding: 8px 8px 0 8px;
    width: 100px;
    text-align: center;
  `
};

const Day = props => (
  <div
    className={styles.container(props.isActive, props.isDisabled)}
    onClick={props.onChange}
  >
    <div className={styles.day}>{dayjs(props.date).format("dddd")}</div>
    <Title>{dayjs(props.date).format("MMM D")}</Title>
  </div>
);

Day.propTypes = {
  onChange: PropTypes.func,
  children: PropTypes.node,
  date: PropTypes.string,
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool
};

export default Day;
