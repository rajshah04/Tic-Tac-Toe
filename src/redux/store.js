import { configureStore } from '@reduxjs/toolkit';
import playerSlice from './slices/playerSlice';

export const store = configureStore({
    reducer: {
        player: playerSlice
    },
})