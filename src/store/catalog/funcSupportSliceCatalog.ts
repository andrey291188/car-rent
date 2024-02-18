
import { ActionDataCard, ActionError, CatalogList } from "../../types/types";

export const handleFulfilledCatalog = (state: CatalogList, action: ActionDataCard) => {
  state.catalogList = [...action.payload.data];
  state.total = action.payload.total;
};

export const handleFulfilledCatalogPage = (state: CatalogList, action: ActionDataCard) => {
    state.catalogList.push(...action.payload.data);
    state.total = action.payload.total;
  };

export const handlePending = (state: CatalogList) => {
    state.isLoading = true;
    state.isRefreshing = true;
    state.error = "";
  };
  
  export const handleFulfilled = (state: CatalogList) => {
    state.isRefreshing = false;
    state.isLoading = false;
  };

  export const handleRejected = (state: CatalogList, action: ActionError) => {
    state.isRefreshing = false;
    state.isLoading = false;
    state.error = action.payload;
  };