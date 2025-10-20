import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="space-y-5">
      <h3 className="font-bold">Find Us On</h3>
      <div>
        <div className="join join-vertical w-full">
          <button className="btn bg-base-100 justify-start join-item">
            <FaFacebook></FaFacebook> Facebook</button>
          <button className="btn bg-base-100 justify-start join-item">
            <FaTwitter></FaTwitter> Twitter</button>
          <button className="btn bg-base-100 justify-start join-item">
            <FaInstagram></FaInstagram> Instagram</button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
