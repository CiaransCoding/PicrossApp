import React from "react";
import { useEffect } from "react";
import Tile from './Tile';

const boardSize = {
    x: '5',
    y: '5'
}

const tiles = [];

const createTiles = () => {
    for (let i = 0; i < boardSize.x * boardSize.y; i++) {
        tiles.push({index: i})
    }
}

console.log(tiles);

const Game = () => {
    useEffect(() => {
        createTiles();
    }, [])


    return (
        <div className="game">
            {tiles.map((index) => {
                return <Tile />
            } )}
        </div>
    )
}

export default Game