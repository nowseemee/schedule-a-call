import React from "react";
import Button from "../components/Button";
import Aligner from "../components/Aligner";

export default () => (
  <Aligner textAlign="center">
    <h2>YOUR PERSONAL STYLIST</h2>
    <h1>Too busy to worry about clothes shopping?</h1>
    <h2>Let our stylist shop for you</h2>

    <Button to={"/schedule/message"}>GET STARTED</Button>
  </Aligner>
);
