import React from 'react';

import ListForm from './ListForm';
import './NewList.css';

const NewList = (props) => {
  const saveListDataHandler = (enteredListData) => {
    const listData = {
      ...enteredListData,
      id: Math.random().toString()
    };
    props.onAddList(listData);
  };

  
  return (
    <div className='new-list'>
      <ListForm onSaveListData={saveListDataHandler} />
     
    </div>
  );
};

export default NewList;