import { createSlice } from "@reduxjs/toolkit";

type EntityHistory = {
  isDisplayEntityHistory: boolean;
  isUpdatedEntityNotification: boolean;
};

const initialState: EntityHistory = {
  isDisplayEntityHistory: false,
  isUpdatedEntityNotification: false,
};

/**  the idea behind this slice is to have reducers or actions to show
 a single units history or mulitple history rows for the unit.*/

export const uiSlice = createSlice({
  name: "unitHistorySlice",
  initialState: initialState,
  reducers: {
    showEntityDetails(state) {
      console.log("Triggered Show Unit History");
      state.isDisplayEntityHistory = true;
    },
    hideEntityDetails(state) {
      state.isDisplayEntityHistory = false;
    },
    showUpdatedEntityHistory(state) {
      state.isUpdatedEntityNotification = true;
    },
    hideUpdatedEntityHistory(state) {
      state.isUpdatedEntityNotification = false;
    },
  },
});

export const {
  showEntityDetails,
  hideEntityDetails,
  showUpdatedEntityHistory,
  hideUpdatedEntityHistory,
} = uiSlice.actions;
