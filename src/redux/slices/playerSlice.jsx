import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    player1Name: localStorage.getItem("player1") ? JSON.parse(localStorage.getItem("player1")) : null,
    player2Name: localStorage.getItem("player2") ? JSON.parse(localStorage.getItem("player2")) : null,
    gamesPlayed: localStorage.getItem("gamesPlayed") ? JSON.parse(localStorage.getItem("gamesPlayed")) : 0,
    player1Won: localStorage.getItem("player1Won") ? JSON.parse(localStorage.getItem("player1Won")) : 0,
    player2Won: localStorage.getItem("player2Won") ? JSON.parse(localStorage.getItem("player2Won")) : 0,
}

const playerSlice = createSlice({
    name: "player",
    initialState: initialState,
    reducers: {
        setPlayer1Name(state, value){
            state.player1Name = value.payload ;
        },
        setPlayer2Name(state, value){
            state.player2Name = value.payload ;
        },
        setGamesPlayed(state, value){
            state.gamesPlayed = value.payload ;
        },
        setPlayer1Won(state, value){
            state.player1Won = value.payload ;
        },
        setPlayer2Won(state, value){
            state.player2Won = value.payload ;
        }
    }
})

export const { setPlayer1Name, setPlayer2Name, setGamesPlayed, setPlayer1Won, setPlayer2Won } = playerSlice.actions ;
export default playerSlice.reducer ;