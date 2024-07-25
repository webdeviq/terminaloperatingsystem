import { Security } from "./security";
/*

    The following are the states of a life cycle.
    1) Container can be full, imported from a vessel, and stocked in yard. imported -> full -> stocked.
    2) Container can be full, shipped out from the yard , and out ->  shipped -> full -> out
    3) Container can be empty, returned from outside, and in -> returned -> empty -> stocked.
    4) Container can be empty, shipped out from the yard, and out -> shipped -> emtpy -> out.
    5) Container can be full , returned from outside, and in -> returned -> full -> stocked.
    Properties to represent the different states (CategoryState, StuffState, YardState)
    */
// category -> export, import, storage, stripped.
// stuffstate -> full, import

export type CategoryState = "Import" | "Export" | "Shipped" | "Returned";
export type StuffState = "Full" | "Empty";
export type YardState = "Stocked" | "Out" | "Active";

export interface LifeCycle {
  category: CategoryState;
  stuffstate: StuffState;
  yardstate: YardState;
  security: Security;
}

// Vessel State Types.
export type Berth = "B27" | "B20";

// export type DepartureState = "Departed" | "Docked";
// export type LoadedState = "Discharged" | "Loaded";

