import React, { useState } from "react";
import Card from "../UI/Card";
import "./ListItem.css";

const ListItem = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Card className="list-item"  >
      <div className="list-item__description">
        <h2>{props.title}</h2>
        <input
          className="checkbox"
          type="checkbox"
          checked={isChecked}
          onChange={handleOnChange}
        />
        {isChecked ? "" : ""}
      </div>
    </Card>
  );
};

export default ListItem;
