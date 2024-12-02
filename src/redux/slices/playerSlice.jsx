import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    player1Name: "",
    player2Name: "",
    gamesPlayed: 0,
    player1Won: 0,
    player2Won: 0,
    player1Sym: "",
    player2Sym: "",
}

const playerSlice = createSlice({
    name: "player",
    initialState: initialState,
    reducers: {
        setPlayerNames: (state, action) => {
            state.player1Name = action.payload.player1Name ;
            state.player2Name = action.payload.player2Name ;
        },
        updateStats: (state, action) => {
            const { winner } = action.payload;
            state.gamesPlayed += 1;
            if (winner === state.player1Sym) state.player1Won += 1 ;
            if (winner === state.player2Sym) state.player2Won += 1 ;
        },
        setPlayerSymbols: (state, action) => {
            state.player1Sym = action.payload.player1Sym ;
            state.player2Sym = action.payload.player2Sym ;
        }
    }
})

export const { setPlayerNames, updateStats, setPlayerSymbols } = playerSlice.actions ;
export default playerSlice.reducer ;