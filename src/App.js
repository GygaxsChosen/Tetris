import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";

import GridSquare from "./GridSquare";




function App() {
  const [gameBoard] = useState(createGameBoard)


  function createGameBoard() {
    const debugMode = false;
    let gameBoard = [];
    for (let height = 0; height < 20; height ++){
      gameBoard.push(

          <div className="RowPanel">
            <GridSquare X={1} Y={height} debugMode={debugMode}> </GridSquare>
            <GridSquare X={2} Y={height} debugMode={debugMode}> </GridSquare>
            <GridSquare X={3} Y={height} debugMode={debugMode}></GridSquare>
            <GridSquare X={4} Y={height} debugMode={debugMode}></GridSquare>
            <GridSquare X={5} Y={height} debugMode={debugMode}> </GridSquare>
            <GridSquare X={6} Y={height} debugMode={debugMode}></GridSquare>
            <GridSquare X={7} Y={height} debugMode={debugMode}></GridSquare>
            <GridSquare X={8} Y={height} debugMode={debugMode}></GridSquare>
            <GridSquare X={9} Y={height} debugMode={debugMode}> </GridSquare>
            <GridSquare X={10} Y={height} debugMode={debugMode}></GridSquare>

          </div>
      )
    }

    return gameBoard
  }

  function getGridSquareByCoordinates(){
    let foundGridSquare = gameBoard;
    console.log(foundGridSquare)
  }
  getGridSquareByCoordinates();
  return (
    <div>
      <div className="OuterSquare">
          {gameBoard}


      </div>
    </div>
  );
}

export default App;
