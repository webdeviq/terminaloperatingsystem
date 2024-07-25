import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Vessel, VESSELS } from "../../models/vessel/vessel.ts";

type VesselInitialState = {
  listofvessels: Vessel[];
  activeVesselHistoryToDisplay: Vessel | null;
};

const initialState: VesselInitialState = {
  listofvessels: VESSELS,
  activeVesselHistoryToDisplay: null,
};

export const vesselSlice = createSlice({
  name: "vesselSlice",
  initialState: initialState,
  reducers: {
    /** Adds a  vessel to the state.listofvessels list, simulating the inbound of a vessel in the tos. */
    addVessel(state, action: PayloadAction<Vessel>) {
      const currentListOfVessels: Vessel[] = [
        ...state.listofvessels,
        action.payload,
      ];
      state.listofvessels = currentListOfVessels;
    },
    /** Removes a vessel from the state.listofvessels list, simulating the outbound of a vessel in the tos. */
    removeVessel(state, action: PayloadAction<Vessel>) {
      const currentListOfVessels: Vessel[] = [...state.listofvessels];
      const vesselPassedThroughToRemove = currentListOfVessels.find(
        (element) => element.gkey === action.payload.gkey
      );
      if (!vesselPassedThroughToRemove) return;
      state.listofvessels = currentListOfVessels.filter(
        (element) => element.gkey != vesselPassedThroughToRemove.gkey
      );
    },
    /** Accepts a Partial object of a vessel to be updated in the state.listofvessels list. */
    updateVesselState(state, action: PayloadAction<Partial<Vessel>>) {
      const passedThroughVesselToUpdate = state.listofvessels.find(
        (element) => element.gkey === action.payload.gkey
      );

      if (!passedThroughVesselToUpdate) return;

      const passedThroughVesselToUpdateIndex: number =
        state.listofvessels.findIndex(
          (element) => passedThroughVesselToUpdate.gkey === element.gkey
        );
      const result: Vessel = Object.assign(passedThroughVesselToUpdate, {
        ...action.payload,
      });

      state.listofvessels[passedThroughVesselToUpdateIndex] = result;
    },
    /** Controls which vessel row was selected to reflect the background color row. */
    setSelectedRowObject(state, action: PayloadAction<Vessel>) {
      const selectedVesselRowObjectTemp = state.listofvessels.find(
        (element) => element.gkey === action.payload.gkey
      );
      for (let index = 0; index < state.listofvessels.length; index++) {
        if (state.listofvessels[index].isvesselrowselected) {
          state.listofvessels[index].isvesselrowselected =
            !state.listofvessels[index].isvesselrowselected;
        }
      }

      if (selectedVesselRowObjectTemp) {
        selectedVesselRowObjectTemp.isvesselrowselected =
          !selectedVesselRowObjectTemp.isvesselrowselected;
      }
      const indexOfSelectedUnitRowObjectInData = state.listofvessels.findIndex(
        (element) => element.gkey === selectedVesselRowObjectTemp!.gkey
      );
      Object.assign(
        state.listofvessels[indexOfSelectedUnitRowObjectInData],
        selectedVesselRowObjectTemp
      );
    },
    setActiveVesselHistoryToDisplay(state, action: PayloadAction<string>) {
      const vesselFindResult = state.listofvessels.find(
        (element) => element.gkey === action.payload
      );
      if (vesselFindResult) {
        state.activeVesselHistoryToDisplay = vesselFindResult;
      }
    },
    setActiveVesselRowObjectToHighlight(state, action: PayloadAction<Vessel>) {
      const selectedVesselRowObjectTemporary = state.listofvessels.find(
        (element) => element.gkey === action.payload.gkey
      );
      // Reset the last selected row to highlight from true to false to unselect.
      for (let index = 0; index < state.listofvessels.length; index++) {
        if (state.listofvessels[index].isvesselrowselected) {
          state.listofvessels[index].isvesselrowselected =
            !state.listofvessels[index].isvesselrowselected;
        }
      }
      if (selectedVesselRowObjectTemporary) {
        selectedVesselRowObjectTemporary.isvesselrowselected =
          !selectedVesselRowObjectTemporary.isvesselrowselected;
      }
      const indexOfSectedVesselRowObjectInData = state.listofvessels.findIndex(
        (element) => element.gkey === selectedVesselRowObjectTemporary!.gkey
      );
      Object.assign(
        state.listofvessels[indexOfSectedVesselRowObjectInData],
        selectedVesselRowObjectTemporary
      );
    },
  },
});

export const {
  addVessel,
  removeVessel,
  setSelectedRowObject,
  setActiveVesselHistoryToDisplay,
  setActiveVesselRowObjectToHighlight,
} = vesselSlice.actions;
