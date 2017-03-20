import React from 'react';

const Note = (props) => {
  const handleRemove = () =>{
    props.remove(props.id);
  };
  return(
    <div className="item">
      <h2>{props.title} <span onClick={handleRemove}>X</span></h2>
      <p>{props.text}</p>
    </div>
  )
};

export default Note;
