import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type LoadingSpinnerState = {
  displayloadingspinner: boolean;
  loadingspinnertext: string;
};

const initialState: LoadingSpinnerState = {
  displayloadingspinner: false,
  loadingspinnertext: "",
};

export const loadingSpinnerSlice = createSlice({
  name: "loadingSpinnerSlice",
  initialState: initialState,
  reducers: {
    showLoadingSpinner(state, action: PayloadAction<string>) {
      
      state.displayloadingspinner = true;
      state.loadingspinnertext = action.payload;
    },
    hideLoadingSpinner(state) {
      state.displayloadingspinner = false;
    },
  },
});

export const { showLoadingSpinner, hideLoadingSpinner } =
  loadingSpinnerSlice.actions;
