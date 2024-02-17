import { createSlice, isAnyOf } from "@reduxjs/toolkit";

import { initialState } from "../initialState";
import { catalogPageThunk, catalogThunk } from "./thunkCatalog";
import { handleFulfilled, handleFulfilledCatalog, handleFulfilledCatalogPage,  handlePending, handleRejected } from "./funcSupportSliceCatalog";


const catalogSlice = createSlice({
    name: "catalog",
    initialState: initialState.catalog,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(catalogThunk.fulfilled, handleFulfilledCatalog)
        .addCase(catalogPageThunk.fulfilled, handleFulfilledCatalogPage)
        .addMatcher(
          isAnyOf(
            catalogThunk.pending,
            catalogPageThunk.pending,
          ),
          handlePending
        )
        .addMatcher(
          isAnyOf(
            catalogThunk.rejected,
            catalogPageThunk.rejected,
          ),
          handleRejected
        )
        .addMatcher(
          isAnyOf(
            catalogThunk.fulfilled,
            catalogPageThunk.fulfilled,
          ),
          handleFulfilled
        );
    },
  });
  
  export const catalogReducer = catalogSlice.reducer;