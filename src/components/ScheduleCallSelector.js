import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";

import Checkbox from "../components/Checkbox";
import Title from "../components/Title";
import stylistImage from "../assets/Stylist.png";
import calendarIcon from "../assets/calendar-icon.svg";

const styles = {
  container: css`
    display: flex;
  `,
  image: css`
    width: 68px;
    height: 68px;
  `,

  rightBox: css`
    padding-left: 8px;
    > a {
    }
  `
};

const ScheduleCallSelector = props => (
  <div className={styles.container}>
    <img className={styles.image} src={stylistImage} alt="stylistImage" />

    <div className={styles.rightBox}>
      <Title>
        Would you like to schedule a call with your stylist before they pack
        your box?
      </Title>

      <Checkbox
        icon={calendarIcon}
        checked={props.isCall}
        onChange={props.onChange}
      >
        Yes, please!
      </Checkbox>
    </div>
  </div>
);

ScheduleCallSelector.propTypes = {
  isCall: PropTypes.bool,
  onChange: PropTypes.func
};

export default ScheduleCallSelector;
