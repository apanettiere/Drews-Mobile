import React from "react";
const Image = ({ image}) => {
  return (
    <div className="p-2 shadow-lg min-w-[15rem] bg-white rounded-md">
      <img src={image} alt="" />
    </div>
  );
};

export default Image;