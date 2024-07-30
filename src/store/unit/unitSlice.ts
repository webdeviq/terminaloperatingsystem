import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Unit } from "../../models/unit/unit.ts";
import { setUnitLifeCycleOnDischargeFromVessel } from "../../util/calculate.ts";

interface IUnitInitialState {
  data: Unit[];
  activeUnitHistoryToDisplay: Partial<Unit>;
}

const initialState: IUnitInitialState = {
  data: [],
  activeUnitHistoryToDisplay: {},
};

export const unitSlice = createSlice({
  name: "unitSlice",
  initialState: initialState,
  reducers: {
    pushSingleUnitEntityToDataList(state, action?: PayloadAction<Unit>) {
      const currentData: Unit[] = [...state.data];
      if (action?.payload) {
        state.data = [...currentData, action.payload];
      }
    },
    setUnitEntityDataList(state, action: PayloadAction<Unit[]>) {
      const transformedUnitList = action.payload.map((element) =>
        setUnitLifeCycleOnDischargeFromVessel(element)
      );
            state.data = [...transformedUnitList];
    },
    setSelectedRowObjectToHiglight(state, action: PayloadAction<Unit>) {
      const selectedUnitRowObjectTemporary = state.data.find(
        (element) => element.gkey === action.payload.gkey
      );
      for (let index = 0; index < state.data.length; index++) {
        if (state.data[index].isunitrowselected) {
          state.data[index].isunitrowselected =
            !state.data[index].isunitrowselected;
        }
      }
      if (selectedUnitRowObjectTemporary) {
        selectedUnitRowObjectTemporary.isunitrowselected =
          !selectedUnitRowObjectTemporary.isunitrowselected;
      }
      const indexOfSelectedUnitRowObjectInData = state.data.findIndex(
        (element) => element.gkey === selectedUnitRowObjectTemporary!.gkey
      );
      Object.assign(
        state.data[indexOfSelectedUnitRowObjectInData],
        selectedUnitRowObjectTemporary
      );
    },
    setActiveUnitHistoryToDisplay(state, action: PayloadAction<string>) {
      const result = state.data.find(
        (element) => element.gkey === action.payload
      );
      if (result) {
        state.activeUnitHistoryToDisplay = result;
      }
    },
  },
});

export const {
  pushSingleUnitEntityToDataList,
  setSelectedRowObjectToHiglight,
  setUnitEntityDataList,
  setActiveUnitHistoryToDisplay,
} = unitSlice.actions;
