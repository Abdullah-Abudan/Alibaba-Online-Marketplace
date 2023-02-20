import React from "react";
import { Img } from "../../../../Component/Header";

const img = (props) => (
  <Img
    src={props.src}
    alt={props.alt}
    width="185px"
    height="185px"
    style={{ margin: props.mAuto }}
  />
);

export default img;
