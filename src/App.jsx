import { useEffect, useRef, useState } from "react";
import "./styles/App.css";
import Board from "./components/Board";
import Card from "./components/Card";

const App = () => {

  const optionsRef = useRef(null) 

  useEffect(()=>{
    const option_box = document.getElementsByClassName("options");
    Array.from(option_box[0].childNodes).forEach(child =>{
      child.style.display = "block"
    },  [optionsRef.current])
  })
  return (
    <div>
      <main className="flexbox">
      <div ref={optionsRef} className="board options">
          <Card id="card_2" draggable="true" className="card container">
            <p>Container</p>
          </Card>
        </div>


        <Board id="board_1" className="board">
          <Card id="card_1" draggable="true" className="card">
            <p>Card one</p>
          </Card>
        </Board>

        
        {/* <Board id="board_2" className="board">
          <Card id="card_2" draggable="true" className="card">
            <p>Card two</p>
          </Card>
        </Board> */}
      </main>
    </div>
  );
};

export default App;
