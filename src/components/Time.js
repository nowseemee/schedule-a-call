import React from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import { css } from "emotion";

import ActiveIndicator from "./ActiveIndicator";
import colors from "../colors";

const styles = {
  container: isActive => css`
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
    width: 100%;
    user-select: none;
    padding: 4px 0;
    font-size: 18px;
    cursor: pointer;
    color: ${isActive ? colors.brand : colors.typography};
    font-weight: ${isActive ? "bold" : "normal"};
  `
};

const Time = props => (
  <span className={styles.container(props.isActive)} onClick={props.onChange}>
    <span>{dayjs(`1980-01-01 ${props.hour}`).format("h:mm A")}</span>
    <ActiveIndicator isActive={props.isActive} />
  </span>
);

Time.propTypes = {
  onChange: PropTypes.func,
  isActive: PropTypes.bool,
  hour: PropTypes.string
};

export default Time;
