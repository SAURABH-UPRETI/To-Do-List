import React from "react";
import ListItem from "./ListItem";
import Card from "../UI/Card";
import "./List.css";

const List = (props) => {
  return (
    <div>
      <Card className="list">
        {props.items.map((list) => (
          <ListItem
          key = {list.id}
            title={list.title}
            amount={list.amount}
            date={list.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default List;
