import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Unit } from "../../models/unit/unit";

// this slice can represent the different categories for units
// to determine the next life cycle.
// for example  : if an operator releases an unit making it go out of the yard
// we can save the unit here in a seperate list (unitsYardOutList)
// therefore when retrieving the unit again, the unit can have a new life cycle.

interface InitialState {
  units: Unit[];
  retrievedUnits: Unit[];
}

const initialState: InitialState = {
  units: [],
  retrievedUnits: [],
};
const historySlice = createSlice({
  name: "historySlice",
  initialState: initialState,
  reducers: {
    pushUnitLifeCycle(
      state,
      action: PayloadAction<{ unit: Unit & { entry: number } }>
    ) {
      state.units.push(action.payload.unit);
    },
    retrieveUnitHistory(state, action: PayloadAction<{ unitNumber: string }>) {
      state.retrievedUnits = state.units.filter(
        (element) => element.unitnumber != action.payload.unitNumber
      );
    },
  },
});

export const { pushUnitLifeCycle, retrieveUnitHistory } = historySlice.actions;
