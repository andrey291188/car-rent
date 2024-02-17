import { combineReducers } from "@reduxjs/toolkit";
import { catalogReducer } from "./catalog/catalogSlice";
import favoriteReducer from "./favorite/favoriteReducer";

export const reducer = combineReducers({
    catalog: catalogReducer,
    favorite: favoriteReducer,
})