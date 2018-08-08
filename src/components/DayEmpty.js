import React from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import { css } from "emotion";

import Title from "./Title";

const DayEmpty = props => (
  <div
    className={css`
      text-align: center;
    `}
  >
    <Title weight="normal">
      <div
        className={css`
          margin-bottom: 16px;
        `}
      >
        Sorry there are no available slots on{" "}
        {dayjs(props.day).format("dddd, Do MMMM")}.
      </div>
      <div>Please select another day.</div>
    </Title>
  </div>
);

DayEmpty.propTypes = {
  day: PropTypes.string
};

export default DayEmpty;
