import React from 'react';

const PlayerNameModal = () => {
    return (
        <form>

            <div>
                <label htmlFor="player1">
                    Player 1 :
                </label>

                <input type="text" name="player1" id="player1" />
            </div>

            <div>
                <label htmlFor="player2">
                    Player 2 :
                </label>

                <input type="text" name="player2" id="player2" />
            </div>

            <div>
                <button>
                    Start Game
                </button>

                <button>
                    Close
                </button>
            </div>
        </form>
    )
}

export default PlayerNameModal