import { createSlice } from "@reduxjs/toolkit";

type LoadingSpinnerState = {
  displayloadingspinner: boolean;
};

const initialState: LoadingSpinnerState = {
  displayloadingspinner: true,
};

export const loadingSpinnerSlice = createSlice({
  name: "loadingSpinnerSlice",
  initialState: initialState,
  reducers: {
    showLoadingSpinner(state) {
      console.log("Show loading spinner ran");
      state.displayloadingspinner = true;
    },
    hideLoadingSpinner(state) {
      console.log("Hide loading spinner ran");
      state.displayloadingspinner = false;
    },
  },
});

export const { showLoadingSpinner, hideLoadingSpinner } =
  loadingSpinnerSlice.actions;
