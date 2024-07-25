import { Employee, EMPLOYEES } from "./employees";

type MachineType = "Forklift" | "Truck";

export interface Machine {
  name: string;
  type: MachineType;
  model: string;
  yearofmake: number;
  mileage: number;
  assignee: Employee;
}

export const MACHINES: Machine[] = [
  {
    name: "Crane 1",
    assignee: EMPLOYEES[0],
    mileage: 22222,
    model: "GMT",
    type: "Forklift",
    yearofmake: 2023,
  },
];
