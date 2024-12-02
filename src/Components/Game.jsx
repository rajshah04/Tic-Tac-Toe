import React, { useEffect, useState } from 'react';
import Board from './Board';
import PlayerNameModal from './PlayerNameModal';
import { useDispatch, useSelector } from 'react-redux';
import { updateStats } from '../redux/slices/playerSlice';
import ConfettiExplosion from 'react-confetti-explosion';

const Game = () => {

    const [playerNameModal, setPlayerNameModal] = useState(false) ;

    const { player1Name, player2Name, gamesPlayed, player1Won, player2Won, player1Sym, player2Sym } = useSelector((state) => state.player) ;

    const dispatch = useDispatch() ;
       
    const [board, setBoard] = useState(Array(9).fill(null)) ;
    const [currentPlayer, setCurrentPlayer] = useState(player1Sym) ;


    const handleSquareClick = (index) => {
        if (board[index] || checkWinner(board)) return ;

        const updatedBoard = board.map((value, i) => (i === index ? currentPlayer : value)) ;
        setBoard(updatedBoard);
        setCurrentPlayer((prev) => (prev === player1Sym ? player2Sym : player1Sym)) ;

        console.log("Board : ", board) ;
    };

    const checkWinner = (board) => {
        const winningCombos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // for all rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // for all columns
            [0, 4, 8], [2, 4, 6]             // for both diagonals
        ];

        for (let combo of winningCombos) {
            const [a, b, c] = combo;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }
        return null;
    };  
    
    let winner = checkWinner(board) ;
    let isDraw = board.every((square) => square !== null) && !winner ;

    useEffect(() => {
        if(winner){
            dispatch(updateStats({ winner }));
        }
        if(isDraw){
            dispatch(updateStats({ gamesPlayed })) ;
        }
    }, [winner, isDraw]);

    const resetGame = () => {
        setBoard(Array(9).fill(null)) ;
        setCurrentPlayer(player1Sym) ;
        winner = null ;
        isDraw = null ;
    }

    return (
        <div className='max-w-full h-full mx-auto flex'>

            <div className='flex flex-col justify-center items-center w-[50%]'>
                <p className='text-6xl font-semibold text-white font-serif my-4'>
                    Tic - Tac - Toe
                </p>

                <div className='mt-3 mb-3'>
                    <Board board={board} handleSquareClick={handleSquareClick} />
                </div>

                <div className='flex gap-x-4'>
                    <button onClick={() => setPlayerNameModal(true)} className='py-2 px-4 mt-3 mb-3 bg-yellow-400 text-black hover:scale-105 text-xl rounded-md'>
                        Start Game
                    </button>
                    
                    <button onClick={() => resetGame()} className='py-2 px-4 mt-3 mb-3 bg-yellow-400 text-black hover:scale-105 text-xl rounded-md'>
                        Reset Game
                    </button>
                </div>

            </div>

            <div className='w-[50%] bg-black text-white flex flex-col gap-y-4 font-serif p-6'>
                
                {
                    winner && (
                        // <ReactConfetti width={window.innerWidth} height={300} />
                        <ConfettiExplosion force={0.7} duration={2500} particleCount={500} width={1000} />
                    )
                }

                <h1 className='text-4xl font-semibold text-center mb-4'>
                    Game Stats
                </h1>

                <div className='flex flex-row justify-center gap-x-4'>
                    {/* player 1 stats */}
                    <div className='border border-white w-[45%] p-4 rounded-lg flex flex-col gap-4'>
                        <h1 className='text-center text-2xl'>
                            Player 1 Stats
                        </h1>

                        <p>
                            Player 1 : {" "}
                            {
                                player1Name ? player1Name : ""
                            }
                        </p>

                        <p>
                            {
                                player1Name ? player1Name : "Player 1"
                            }'s Symbol : {" "}
                            {
                                player1Sym
                            }
                        </p>

                        <p>
                            Games won by {
                                player1Name ? player1Name : "Player 1"
                            } : {" "} { player1Won }
                        </p>

                        <p>
                            Winning % of {
                                player1Name ? player1Name : "Player 1"
                            } : {" "} 
                            { 
                                player1Won / gamesPlayed * 100 ? Math.round(player1Won / gamesPlayed * 100, 3) : "0"
                            } %
                        </p>

                        <p>
                            Games draw : {gamesPlayed - player1Won - player2Won }
                        </p>

                        <p>
                            Total Games Played : {" "} {gamesPlayed}
                        </p>

                    </div>
                    
                    {/* player 2 stats */}
                    <div className='border border-white w-[45%] p-4 rounded-lg flex flex-col gap-4'>
                        <h1 className='text-center text-2xl'>
                            Player 2 Stats
                        </h1>

                        <p>
                            Player 2 : {" "}
                            {
                                player2Name ? player2Name : ""
                            }
                        </p>

                        
                        <p>
                            {
                                player2Name ? player2Name : "Player 2"
                            }'s Symbol : {" "}
                            {
                                player2Sym
                            }
                        </p>

                        <p>
                            Games won by {
                                player2Name ? player2Name : "Player 2"
                            } : {" "} { player2Won }
                        </p>

                        <p>
                            Winning % of {
                                player2Name ? player2Name : "Player 2"
                            } : {" "} 
                            { 
                                player2Won / gamesPlayed * 100 ? Math.round(player2Won / gamesPlayed * 100, 3) : "0"
                            } %
                        </p>

                        <p>
                            Games draw : {gamesPlayed - player1Won - player2Won }
                        </p>

                        <p>
                            Total Games Played : {" "} {gamesPlayed}
                        </p>

                    </div>
                </div>

                {/* Show game results */}
                {
                    winner ? (
                        <p className="text-center text-3xl mt-4">
                            {winner === player1Sym ? player1Name : player2Name} Wins!
                        </p>
                    ) : isDraw ? (
                        <p className="text-center text-3xl mt-4">
                            It's a Draw!
                        </p>
                    ) : player1Name && player2Name ? (
                        <p className="text-center text-3xl mt-4">
                            {currentPlayer === player1Sym ? player1Name : player2Name}'s Turn
                        </p>
                    ) : (
                        <p>

                        </p>
                    )
                }

                

            </div>

            {
                playerNameModal && <PlayerNameModal setPlayerNameModal={setPlayerNameModal} />
            }

        </div>
    )
}

export default Game