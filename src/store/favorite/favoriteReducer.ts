import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../initialState";

const favoriteReducer = createSlice({
    name: "favorite",
    initialState: initialState.favorite,
    reducers: {
        createFavorite: (state, action) => {
            state.favoriteList.push(action.payload)
        },

        deleteFavorit: (state, action) => {
            return {
              ...state,
              favoriteList: state.favoriteList.filter(
                (cars) => cars.id !== action.payload),
              }
            },
}})

export const {createFavorite, deleteFavorit} = favoriteReducer.actions
export default favoriteReducer.reducer