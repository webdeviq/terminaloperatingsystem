import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./login/loginSlice";
import { unitSlice } from "./unit/unitSlice";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { footerSlice } from "./footer/footerSlice";
import { uiSlice } from "./ui/uiSlice";
import { loadingSpinnerSlice } from "./ui/loadingSpinnerSlice";
import { vesselSlice } from "./vessel/vesselSlice";
export const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    unitSlice: unitSlice.reducer,
    footerSlice: footerSlice.reducer,
    uiSlice: uiSlice.reducer,
    loadingSpinnerSlice: loadingSpinnerSlice.reducer,
    vesselSlice: vesselSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
