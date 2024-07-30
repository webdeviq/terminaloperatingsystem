import { LifeCycle } from "./lifecycle.ts";
import { UnitMoveHistory } from "./unitmovehistory.ts";
import { ILocation } from "./yard.ts";

type UnitType = "reefer" | "dry";
type VesselOperator = "YANG MING" | "GULF" | "EMIRATES";
type UnitOwner = "CMA" | "HL" | "OOL" | "HILTON" | "ESL";
type Entity = "Unit" | "Truck" | "Train";
export type ListOfStrings = string[];

export const unitTableHeaderData: ListOfStrings = [
  "entity",
  "unit",
  "operator",
  "category",
  "s-state",
  "y-state",
  "location",
  "type",
  "power",
  "vessel",
];

export type RequiresPower = "Yes" | "No";

export interface Unit {
  gkey: string;
  kind: Entity;
  vesseloperator: VesselOperator;
  unitowner: UnitOwner;
  unitnumber: string;
  type: UnitType;
  location?: ILocation;
  lifecycle?: LifeCycle;

  isunitrowselected: boolean;
  unitmovehistory?: UnitMoveHistory;
}
