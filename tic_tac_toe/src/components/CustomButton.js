import React from "react";

const CustomButton = props => {
  const { value, onClick } = props;
  return (
    <div>
      <input type="submit" value={value} onClick={onClick} className="btn" />
    </div>
  );
};

export default CustomButton;
