import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IFooter {
  entity: string;
  quantityOfEntity: number;
}

const initialState: IFooter = {
  entity: "",
  quantityOfEntity: 0,
};

export const footerSlice = createSlice({
  name: "footerSlice",
  initialState: initialState,
  reducers: {
    setAmountOfEntityQty(
      state,
      action: PayloadAction<{ entity: string; quantity: number }>
    ) {
      state.entity = action.payload.entity;
      state.quantityOfEntity = action.payload.quantity;
    },
    resetAmountOfEntityQyt(state) {
      state.entity = "";
      state.quantityOfEntity = 0;
    },
  },
});

export const { setAmountOfEntityQty, resetAmountOfEntityQyt } =
  footerSlice.actions;
