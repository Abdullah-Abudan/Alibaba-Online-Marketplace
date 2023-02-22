import React from "react";

function Error(props) {
  return (
    <div style={{ color: "red", marginBottom: "6px", marginTop:"-4px" }}>
      <p>{props.message}</p>
    </div>
  );
}

export default Error;
