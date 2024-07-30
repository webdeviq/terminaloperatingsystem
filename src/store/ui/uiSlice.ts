import { createSlice } from "@reduxjs/toolkit";

type EntityHistory = {
  isDisplayEntityHistory: boolean;
  isGeneralNotificationDisplayed: boolean;
};

const initialState: EntityHistory = {
  isDisplayEntityHistory: false,
  isGeneralNotificationDisplayed: false,
};

/**  the idea behind this slice is to have reducers or actions to show
 a single units history or mulitple history rows for the unit.*/

export const uiSlice = createSlice({
  name: "unitHistorySlice",
  initialState: initialState,
  reducers: {
    showEntityDetails(state) {
      state.isDisplayEntityHistory = true;
    },
    hideEntityDetails(state) {
      state.isDisplayEntityHistory = false;
    },
    showGeneralNotification(state) {
      state.isGeneralNotificationDisplayed = true;
    },
    hideGeneralNotification(state) {
      state.isGeneralNotificationDisplayed = false;
    },
  },
});

export const {
  showEntityDetails,
  hideEntityDetails,
  showGeneralNotification,
  hideGeneralNotification,
} = uiSlice.actions;
