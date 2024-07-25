import { EMPLOYEES } from "../data/employees.ts";
import { MACHINES } from "../data/Machinery.ts";
import { RequiresPower, Unit } from "../models/unit/unit.ts";
import { calculateDaysInYard } from "./Dates/dates.ts";

/** Used to calculate the days of a unit has spent in terminal yard. Returns the result as a  number. */

export const unitRequiresPower = (container: Unit): RequiresPower => {
  if (
    container.lifecycle!.yardstate === "Active" &&
    container.type === "Reefer"
  ) {
    return "Yes";
  } else {
    return "No";
  }
};

// When discharging units from vessel,
// the following need to be set for the units.
// lifecycle, location, unitmovehistory

export const setUnitLifeCycleOnDischargeFromVessel = (unit: Unit) => {
  const { ...unitdata } = unit;
  console.log("Before");

  console.log(unitdata);
  unitdata.lifecycle = {
    category: "Import",
    security: {
      timein: new Date(2024, 5, 29),
      daysInYard: function () {
        return calculateDaysInYard();
      },
    },
    stuffstate: "Full",
    yardstate: "Active",
  };
  unitdata.location = {
    block: "A1",
  };
  unitdata.unitmovehistory = {
    dateofmove: new Date(2024, 5, 29),
    destination: "Yard",
    movetype: "Unit Discharged",
    recorder: EMPLOYEES[0],
    source: MACHINES[0],
  };
  console.log(unitdata);
  return Object.assign({ ...unit }, unitdata);
};
