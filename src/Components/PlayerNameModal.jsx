import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { setPlayerNames, setPlayerSymbols } from '../redux/slices/playerSlice';

const PlayerNameModal = ({ setPlayerNameModal }) => {

    const [player1Name, setPlayer1Name] = useState("") ;
    const [player2Name, setPlayer2Name] = useState("") ;

    const dispatch = useDispatch() ;

    const player1NameChangeHandler = (e) => {
        setPlayer1Name(e.target.value) ;
    }

    const player2NameChangeHandler = (e) => {
        setPlayer2Name(e.target.value) ;
    }

    const startGameHandler = (e) => {
        e.preventDefault() ;
        if (!player1Name || !player2Name){
            toast("Please enter names for both players.") ;
            return ;
        } 
        
        dispatch(setPlayerNames({player1Name, player2Name})) ;

        const value = Math.random() ;
        // console.log(value) ;

        if(value < 0.5){
            dispatch(setPlayerSymbols({player1Sym: "X", player2Sym: "O"})) ;
        }else{
            dispatch(setPlayerSymbols({player1Sym: "O", player2Sym: "X"})) ;
        }

        setPlayerNameModal(false) ;
        console.log("Starting game") ;
    }

    return (
        <div className='fixed inset-0 z-[1000] grid place-items-center overflow-auto bg-white backdrop-blur-sm bg-opacity-20'>

            <form className='w-11/12 max-w-[370px] rounded-lg border-2 border-black bg-gray-700 text-white p-6 flex flex-col gap-4 font-serif'>
                <p className='text-2xl text-center '>
                    Tic-Tac-Toe
                </p>

                <label htmlFor="player1" className='text-lg flex gap-x-2 justify-center items-center'>
                    <p className='text-xl'>
                        Player 1 : 
                    </p>

                    <input onChange={player1NameChangeHandler} type="text" name="player1" value={player1Name} id="player1" className='bg-gray-500 rounded-md px-2 py-1' />
                </label>

                <label htmlFor="player2" className='text-lg flex gap-x-2 justify-center items-center'>
                    <p className='text-xl'>
                        Player 2 : 
                    </p>

                    <input onChange={player2NameChangeHandler} type="text" name="player2" value={player2Name} id="player2" className='bg-gray-500 rounded-md px-2 py-1' />
                </label>

                <div className='flex justify-between px-2'>
                    <button onClick={startGameHandler} className='bg-yellow-400 hover:scale-105 transition-all duration-200 text-black px-2 py-1 rounded-md'>
                        Start Game
                    </button>

                    <button onClick={() => setPlayerNameModal(false)} className='bg-yellow-400 hover:scale-105 transition-all duration-200 text-black px-2 py-1 rounded-md' >
                        Close
                    </button>
                </div>
            </form>

        </div>
    )
}

export default PlayerNameModal