import { createAsyncThunk } from "@reduxjs/toolkit";
import { MyErrorType, ParamsRequest } from "../../types/types";
import { getRequest } from "../../service/createResponse";
import { toast } from "react-toastify";

export const catalogThunk = createAsyncThunk(
    "catalog/get",
    async (body: ParamsRequest, { rejectWithValue }) => {
      try {
        const data = await getRequest(body);
        return data;
      } catch (error) {
        const {message} = error as MyErrorType;
        toast.error(message);
        return rejectWithValue(message);
      }
    }
  );

  export const catalogPageThunk = createAsyncThunk(
    "catalog/page",
    async (body: ParamsRequest, { rejectWithValue }) => {
      try {
        const data = await getRequest(body);
        return data;
      } catch (error) {
        const {message} = error as MyErrorType;
        toast.error(message);
        return rejectWithValue(message);
      }
    }
  );