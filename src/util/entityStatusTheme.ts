import {
  CategoryState,
  DepartureState,
  LoadedState,
  StuffState,
  YardState,
} from "../models/unit/lifecycle";

type UnitLifeStateKind = "category" | "stuffstate" | "yardstate";
type VesselLoadState = "vesseldischarged" | "vesseldocked";
export type UnitBackgroundClass = {
  kind: UnitLifeStateKind;
  style: string;
} | null;
export type VesselBackgroundClass = {
  kind: VesselLoadState;
  style: string;
} | null;

export const unitBackgroundColorObject: UnitBackgroundClass[] = [
  { kind: "category", style: "categoryimport" },
  { kind: "category", style: "categoryexport" }, // define a color for export.
  { kind: "category", style: "categoryshipped" },
  { kind: "category", style: "categoryreturned" },
  { kind: "stuffstate", style: "stufffull" },
  { kind: "stuffstate", style: "stuffempty" },
  { kind: "yardstate", style: "yardstored" },
  { kind: "yardstate", style: "yardout" },
  { kind: "yardstate", style: "yardactive" },
];
export const vesselBackgroundColorObject: VesselBackgroundClass[] = [
  { kind: "vesseldischarged", style: "vesselloaded" },
  { kind: "vesseldischarged", style: "vesseldischarged" },
  { kind: "vesseldocked", style: "vesseldocked" },
  { kind: "vesseldocked", style: "vesseldeparted" },
];

export const selectVesselDischargeState = (
  loadedstate: LoadedState
): string => {
  switch (loadedstate) {
    case "Loaded":
      return vesselBackgroundColorObject[0]!.style;
    case "Discharged":
      return vesselBackgroundColorObject[1]!.style;
    default:
      return "not-found";
  }
};

export const selectVesselDepartedState = (departedstate: DepartureState) => {
  switch (departedstate) {
    case "Docked":
      return vesselBackgroundColorObject[2]!.style;
    case "Departed":
      return vesselBackgroundColorObject[3]!.style;
    default:
      return "not-found";
  }
};

export const selectUnitCategoryStyle = (category: CategoryState): string => {
  switch (category) {
    case "Import":
      return unitBackgroundColorObject[0]!.style;
    case "Export":
      return unitBackgroundColorObject[1]!.style;
    case "Shipped":
      return unitBackgroundColorObject[2]!.style;
    case "Returned":
      return unitBackgroundColorObject[3]!.style;
    default:
      return "not-found";
  }
};

export const selectStuffStyle = (stuffState: StuffState): string => {
  switch (stuffState) {
    case "Full":
      return unitBackgroundColorObject[4]!.style;
    case "Empty":
      return unitBackgroundColorObject[5]!.style;
    default:
      return "not-found";
  }
};

export const selectYardStyle = (yardState: YardState): string => {
  switch (yardState) {
    case "Stocked":
      return unitBackgroundColorObject[6]!.style;
    case "Out":
      return unitBackgroundColorObject[7]!.style;
    case "Active":
      return unitBackgroundColorObject[8]!.style;
    default:
      return "not-found";
  }
};
