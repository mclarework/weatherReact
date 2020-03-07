import React from "react";
import Box from "./box";
import "../CSS/daily.css";

const Daily = props => {
  return (
    <div className="dayMap">
      <p>Days </p>
      <div className="return">
        {props.data.map((data, index) => {
          return (
            <div key={index} className="dayBox">
              <Box data={data} index={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Daily;
