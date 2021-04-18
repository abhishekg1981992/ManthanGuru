import React from "react";
import "./pageStyles.css";

function contactUs() {
  return (
    <div className="pageContent">
      <h1>Contact Us</h1>
      <div style={{ padding: "15px" }}>
        <div style={{ fontSize: "14px" }}>Looking to buy a new policy</div>
        <div style={{ fontSize: "18px", fontWeight: "600" }}>
          Call at +91-98102-46109
        </div>
      </div>
      <div style={{ padding: "15px" }}>
        <div style={{ fontSize: "14px" }}>Registered Office</div>
        <div style={{ fontSize: "18px", fontWeight: "600" }}>
          Ground Floor, Plot No. 7G-7B, Roots Tower <br></br> District Centre,
          Laxmi Nagar, East Delhi, Delhi-110092
        </div>
      </div>
    </div>
  );
}

export default contactUs;
