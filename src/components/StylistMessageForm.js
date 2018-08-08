import React from "react";
import PropTypes from "prop-types";
import { css } from "emotion";

import TextArea from "./TextArea";
import Jumbo from "./Jumbo";
import stylistImage from "../assets/Stylist.png";

const StylistMessage = props => (
  <Jumbo>
    {props.showStylist && (
      <div
        className={css`
          text-align: center;
          margin-bottom: 32px;
        `}
      >
        <img src={stylistImage} alt="stylistImage" />
      </div>
    )}
    <div
      className={css`
        text-align: center;
        margin-bottom: 8px;
      `}
    >
      Is there anything else that you would like to share with your Stylist?
    </div>
    <TextArea
      value={props.form.message}
      onChange={event => {
        props.onChange({ ...props.form, message: event.target.value });
      }}
    />
  </Jumbo>
);

StylistMessage.propTypes = {
  form: PropTypes.shape({
    message: PropTypes.string
  }),
  onChange: PropTypes.func,
  showStylist: PropTypes.bool
};

export default StylistMessage;
