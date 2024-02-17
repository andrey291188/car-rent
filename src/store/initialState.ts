import { StateInitial } from "../types/types";

export const initialState: StateInitial = {
    catalog: { catalogList: [], isRefreshing: false, isLoading: false, error: "", total: 0 },
    favorite: { favoriteList: [] },
}