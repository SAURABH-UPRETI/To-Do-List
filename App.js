import React, { useState } from "react";

import NewList from "./Components/NewList/NewList";
import List from "./Components/List/List";

const DUMMY_LIST = [
  {
    id: "e1",
    title: "Reading book ",
  },
  { id: "e2", title: "Make a YouTube video" },
  {
    id: "e3",
    title: "Create a React Project",
  },
];

const App = () => {
  const [list, setlist] = useState(DUMMY_LIST);

  const addListHandler = (list) => {
    setlist((prevList) => {
      return [list, ...prevList];
    });
  };


  return (
    <div>
      <center>
        <h1> TO-DO LIST </h1>
      </center>
      <NewList onAddList={addListHandler} />
      <List items={list} />
    </div>
  );
};

export default App;
