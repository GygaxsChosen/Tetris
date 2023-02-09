import React, {useState} from "react";
import App from "./App";

function GridSquare({X, Y, DebugMode}) {
    const [xLocation]= useState(X);
    const [yLocation]= useState(Y);
    const [debugMode]= useState(DebugMode)

    return(
            <div className="InternalSquare">{ debugMode ?  `${xLocation}, ${yLocation}`: ""} </div>
        )

}

export default GridSquare;
