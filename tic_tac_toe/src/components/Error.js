import React from "react";
import "./Error.css";
import CustomButton from "./CustomButton";

const Error = props => {
  return (
    <div className="error-container">
      <h2>there was an error...</h2>
      <div className="error-btn">
        <CustomButton value="Go Back" onClick={props.clickError} />
      </div>
    </div>
  );
};

export default Error;
