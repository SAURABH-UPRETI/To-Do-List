import React, { useState } from "react";
import "./ListForm.css";

const ListForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const listData = {
      title: enteredTitle,
    };
    props.onSaveListData(listData);
    setEnteredTitle("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-list__controls">
        <div className="new-list__control">
         
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-list__actions">
        <button type="submit">Add Task</button>
      </div>
      </div>
      
    </form>
  );
};

export default ListForm;
