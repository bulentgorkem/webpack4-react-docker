import React from "react";
import ReactDOM from "react-dom";

const Hello = props => <div> Hello {props.name} </div>;

ReactDOM.render(
  <Hello name="Bulent Gorkem2" />,
  document.getElementById("root")
);
