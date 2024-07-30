import { Unit } from "../unit/unit.ts";
import { UNITS } from "../../data/data.ts";
import { ListOfStrings } from "../unit/unit";
import { Berth } from "../unit/lifecycle";

export const vesselTableHeaderData: ListOfStrings = [
  "vessel name",
  "line",
  "vessel visit",
  "destination",
  "port of discharge",
  "arrival",
  "departure",
  "berth",
  "load list count",
  "is discharged",
  "is docked",
];

export interface Vessel {
  gkey: string;
  vesselname: string;
  vesselvisit: string;
  loadlist: Unit[];
  line: string;
  timeofarrival: string;
  timeofdeparture?: string;
  countryofdestination: string;
  portofdischarge: string;
  berth: Berth;
  isvesseldischarged: boolean;
  isvesseldocked: boolean;
  isvesselrowselected: boolean;
}
const options: Intl.DateTimeFormatOptions = {
  month: "long",
  weekday: "long",
  year: "numeric",
  day: "numeric",
};
const date: Date = new Date(2024, 5, 29);
export const VESSELS: Vessel[] = [
  {
    gkey: "VERL2303",
    vesselname: "Ever Lively",
    countryofdestination: "Iraq",
    line: "CMA",
    portofdischarge: "UM QASR",
    timeofarrival: date.toLocaleDateString("en-US", options),
    berth: "B27",
    vesselvisit: "EVL01",
    loadlist: UNITS,
    isvesseldocked: true,
    isvesseldischarged: false,
    isvesselrowselected: false,
  },
];
