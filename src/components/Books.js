import React from "react";

const Books = (props) => {
  return (
    <div>
      <h2>Name: {props.bookName}</h2>
      <h3>writer: {props.writer}</h3>
    </div>
  );
};

export default Books;
