import React from "react";
import Box from "./box";
import "../CSS/hourly.css";

const Hourly = props => {
  return (
    <div className="hourMap">
      <p>Hours</p>
      <div className="return">
        {props.data.map((data, index) => {
          return (
            <div key={index} className="hourBox">
              <Box data={data} index={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hourly;
