import React from "react";

import Title from "../components/Title";
import Aligner from "../components/Aligner";
import Button from "../components/Button";
import Jumbo from "../components/Jumbo";
import stylistImage from "../assets/Stylist@2x.png";

export default props => (
  <Aligner textAlign="center">
    <img src={stylistImage} alt="stylistImage" />

    <Title>
      Thank you very much! {props.match.params.stylist} will now start putting
      together your OUTFITTERY BOX.
    </Title>

    <Aligner margin="16px 0">
      <Jumbo>mocked payment details...</Jumbo>
    </Aligner>
    <Button to={"/"}>GO TO ACCOUNT</Button>
  </Aligner>
);
