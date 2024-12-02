import React from 'react';
import Square from './Square';

const Board = ({ board, handleSquareClick}) => {

    return (
        <div>
            <div className='grid grid-cols-3 my-8 border border-black rounded-3xl text-white'>
                {
                    board.map((value, index) => (
                        <Square
                            key={index}
                            value={value}
                            no={index}
                            onclick={() => handleSquareClick(index)}
                        />
                    ))
                } 
            </div>
        </div>
    )
}

export default Board