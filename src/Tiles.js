import React from "react";

function Tiles(props){
    let makeTiles = props.tiles.map(tile=>(
        <div id ={tile.id} className="tile" key={tile.id} onClick={()=>props.tileClick(tile)}></div>
    ))
    return(
        <div className="tile-container">
            {makeTiles}
        </div>
    )
}

export default Tiles;