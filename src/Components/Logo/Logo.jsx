import React from "react";
import logo from "../../../public/bookCourier.jpg";

const Logo = () => {
  return (
    <div className="flex">
      <img className="h-7 w-10 mx-1" src={logo} alt="" />
      <span>BookCourier</span>
    </div>
  );
};

export default Logo;
