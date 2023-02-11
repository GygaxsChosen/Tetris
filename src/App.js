import './App.css';
import React from "react";

import GridSquare from "./GridSquare";




class App extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            gameBoard: [],
            activeColor: "none",
            activePiece: [],
            activeXPos: 4,
            activeYPos: 10,
            isGameInitilized: false,


        };
        this.createGameBoard = this.createGameBoard.bind(this);
        this.spawnPiece = this.spawnPiece.bind(this);
        this.tickGame = this.tickGame.bind(this);
        this.insertPiece = this.insertPiece.bind(this);

         this.isActivePiece= false;
    }


   createGameBoard() {
    let virturalGameboard = [];
    for (let height = 0; height < 20; height ++){
        virturalGameboard.push([]);
    for (let width = 0; width < 10; width++){
        virturalGameboard[height].push({backgroundColor: "grey"});
    }

    }

    this.setState({gameBoard: virturalGameboard, isGameInitilized: true});
  }
     async spawnPiece(){

        let pieceToSpawn = Math.floor(Math.random() * 7);

        let shape = [];


        if (pieceToSpawn === 0){
             shape = [[1,1],[1,1]];
            this.isActivePiece = true;
            this.setState({ activePiece: shape, activeColor:"Yellow"}, this.insertPiece);

        }else if(pieceToSpawn === 1) {
            shape = [[1, 1, 1, 1]];
            this.isActivePiece = true;
            this.setState({ activePiece: shape, activeColor:"Cyan"}, this.insertPiece);
        }else if(pieceToSpawn === 2) {
            shape = [
                [0,0,1],
                [1,1,1],


            ];
            this.isActivePiece = true;
            this.setState({ activePiece: shape, activeColor:"Orange"}, this.insertPiece);
        }else if(pieceToSpawn === 3) {
            shape = [
                [0,1,1],
                [1,1,0]

            ];
            this.isActivePiece = true;
            this.setState({ activePiece: shape, activeColor:"Green"}, this.insertPiece);
        }else if(pieceToSpawn === 4) {
            shape = [
                [0,1],
                [1,1,1]


            ];
            this.isActivePiece = true;
            this.setState({ activePiece: shape, activeColor:"Purple"}, this.insertPiece);
        }else if(pieceToSpawn === 5) {
            shape = [
                [1],
                [1,1,1]


            ];
            this.isActivePiece = true;
            this.setState({ activePiece: shape, activeColor:"Blue"}, this.insertPiece);
        }else if(pieceToSpawn === 6) {
            shape = [
                [1,1],
                [0,1,1]


            ];
            this.isActivePiece = true;
            this.setState({ activePiece: shape, activeColor:"Red"}, this.insertPiece);
        }


    }

    insertPiece(){
        const {activeYPos, activeXPos, gameBoard} =this.state;
        if(this.state.activePiece === undefined){
            debugger;
        }

        let localXOffset = 0;
        let loacalYoffset = 0;
        let localGameBoard =  JSON.parse(JSON.stringify(gameBoard));

        this.state.activePiece.forEach((row) =>{
            localXOffset =  0;
            row.forEach((cell) =>{
                if(cell === 1){

                    localGameBoard[activeYPos + loacalYoffset][activeXPos + localXOffset].backgroundColor = this.state.activeColor;

                }
                localXOffset++;
            })
            loacalYoffset++;
        })
        this.setState({gameBoard: localGameBoard})

    }


    async tickGame(){
      console.log("tick");


          if (this.isActivePiece){

          }else{
              this.spawnPiece();


          }




  }


 componentDidMount() {
     this.createGameBoard();
    setInterval(this.tickGame, 5000)
}

    render(){
        const {gameBoard} = this.state


    return (
        <div>
            <div className="OuterSquare">

                {
                    gameBoard.map((rowElement )=>{

                        return (
                            <div className="RowPanel">
                                {
                                    rowElement.map((cellElement) =>{
                                        return <div className={`InternalSquare ${cellElement.backgroundColor}`}> </div>
                                    } )
                                }
                            </div>
                        )
                    })
                }


            </div>
        </div>
    );
}

}

export default App;
