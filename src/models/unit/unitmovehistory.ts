/*
    A unit moves from the vessel and dropped to the yard.
    Gets loaded by a operator on to a  forklift to be placed on a truck.
    exits out the yard by a truck driver.

    A unit comes back to the yard by a truck driver (either full or empty doesnt matter)
    Gets dropped of to the yard by a forklift driver.
    get loaded on a vessel by a forklif driver , if its category is export.


*/

import { Machine } from "../../data/Machinery";
import { Employee } from "../../data/employees";

type UnitEventLoad = "Unit Deliver" | "Unit Discharged";
type UnitEventEmployee = Employee;
type UnitEventSource = Machine;
type UnitEventDestination = "Yard" | "Truck" | "Vessel";

export interface UnitMoveHistory {
  movetype: UnitEventLoad;
  recorder: UnitEventEmployee;
  source: UnitEventSource;
  destination: UnitEventDestination;
  dateofmove: Date;
}


