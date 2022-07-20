import React from "react";

export default function Card(props) {
  const dragStart = (e) => {
    const target = e.target;
    e.dataTransfer.setData("card_id", target.id);
  };
  const dragOver = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      id={props.id}
      onDragStart={dragStart}
      onDragOver={dragOver}
      draggable={props.draggable}
      className={props.className}
    >
      {props.children}
    </div>
  );
}
