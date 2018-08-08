import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import { css } from "emotion";

const ScheduleButtons = props => (
  <div
    className={css`
      display: flex;
    `}
  >
    <span
      className={css`
        flex: 0;
      `}
    >
      <Button theme="secondary" onClick={props.onClickBack}>
        Back
      </Button>
    </span>
    <span
      className={css`
        flex: 1;
      `}
    >
      <Button disabled={props.isSubmitDisabled} onClick={props.onClickSubmit}>
        Confirm order
      </Button>
    </span>
  </div>
);

ScheduleButtons.propTypes = {
  children: PropTypes.node,
  onClickBack: PropTypes.func,
  onClickSubmit: PropTypes.func,
  isSubmitDisabled: PropTypes.bool
};

export default ScheduleButtons;
