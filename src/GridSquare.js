import React, {useState} from "react";
import App from "./App";

function GridSquare({X, Y, DebugMode, Color}) {
    const [xLocation]= useState(X);
    const [yLocation]= useState(Y);
    const [debugMode]= useState(DebugMode)
    const [color] =useState(Color)

    return(
            <div className="InternalSquare">{ debugMode ?  `${xLocation}, ${yLocation}`: ""} </div>
        )

}

export default GridSquare;
