import React from "react";
import CustomerReview from "../CustomerReview/CustomerReview";
import "./RightSide.css";
import Updates from "../Updates/Updates";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div>
        <h3>Update</h3>
        <Updates />
      </div>
      <div>
        <h3>Customer Review</h3>
        <CustomerReview />
      </div>
    </div>
  );
};

export default RightSide;
