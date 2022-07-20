import React, {useRef} from "react";

export default function Board(props) {

    const disable = useRef(null)

  const drop = (e) => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData("card_id");
    const card = document.getElementById(card_id);
    card.style.display = "block";
    e.target.appendChild(card);
    
  };
  const dragOver = (e) => {
    e.preventDefault();
    isHidden(e);
  };

  const isHidden = (e) => {
    console.log();
    Array.from(e.target.children).forEach((child) => {
        console.log(child)
      if (child.style.display == "none") {
        child.style.display = "block";
      }
    });
  };



  return (
    <div
    ref={disable}
      draggable={props.draggable}
      id={props.id}
      className={props.className}
      onDrop={drop}
      onDragOver={dragOver}
    >
      {props.children}
    </div>
  );
}
