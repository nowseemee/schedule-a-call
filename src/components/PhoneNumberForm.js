import React from "react";
import PropTypes from "prop-types";

import TextInput from "./TextInput";
import Dropdown from "./Dropdown";
import Aligner from "./Aligner";

const COUNTRY_DIALING_CODE_LIST = [
  { value: "+49", valueFormatted: "Germany (+49)" },
  { value: "+44", valueFormatted: "United Kingdom (+44)" }
];

const PhoneNumberForm = props => (
  <div>
    <Aligner margin="8px 0 0 0">
      <Dropdown
        items={COUNTRY_DIALING_CODE_LIST}
        renderItem={item => item.valueFormatted}
        getItemValue={item => item.value}
        value={props.form.dialingCode}
        onChange={event => {
          props.onChange({ ...props.form, dialingCode: event.target.value });
        }}
      />
    </Aligner>
    <Aligner margin="8px 0 0 0">
      {" "}
      <TextInput
        value={props.form.phoneNumber}
        onChange={event => {
          props.onChange({ ...props.form, phoneNumber: event.target.value });
        }}
      />
    </Aligner>
  </div>
);

PhoneNumberForm.propTypes = {
  form: PropTypes.shape({
    phoneNumber: PropTypes.string,
    dialingCode: PropTypes.string
  }),
  onChange: PropTypes.func
};

export default PhoneNumberForm;
