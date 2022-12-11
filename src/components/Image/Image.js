import React from "react";
import bubbleTea from "../../pictures/bubbletea.jpg";
import classes from "../Layout/Header.module.css";

function Image() {
  return (
    <div className={classes["main-image"]}>
      <img src={bubbleTea} alt="Bubble Tea" />
    </div>
  );
}

export default Image;
