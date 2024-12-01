import React, { useState } from 'react';
import Board from './Board';
import PlayerNameModal from './PlayerNameModal';

const Game = () => {

    const [playerNameModal, setPlayerNameModal] = useState(false) ;

    const handleStartGame = () => {
        console.log("Start button clicked.") ;
    }

    return (
        // <div className='w-full h-full mx-auto'>

            <div className='flex flex-col justify-center items-center'>
                <p>
                    Tic - Tac - Toe
                </p>

                <Board />

                <div>
                    <button onClick={() => setPlayerNameModal(true)} className='py-4 px-2 bg-blue-700'>
                        Start
                    </button>
                </div>

            {/* </div> */}

            {
                playerNameModal && <PlayerNameModal />
            }

        </div>
    )
}

export default Game