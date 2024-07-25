type EmployeePositions =
  | "Forklift Driver"
  | "Truck Driver"
  | "Developer"
  | "Planner"
  | "Manager";

export interface Employee {
  gkey: string;
  firstname: string;
  lastname: string;
  username: string;
  employeeid: string;
  position: EmployeePositions;
}

export const EMPLOYEES: Employee[] = [
  {
    gkey: "TRNN3033",
    firstname: "Michael",
    lastname: "Lorry",
    username: "mlorry",
    employeeid: "49003",
    position: "Forklift Driver",
  },
  {
    gkey: "TUII2222",
    firstname: "David",
    lastname: "Johnson",
    username: "djnson",
    employeeid: "12922",
    position: "Forklift Driver",
  },
  {
    gkey: "UIOO3333",
    firstname: "Andy",
    lastname: "Messer",
    username: "amsser",
    employeeid: "98088",
    position: "Truck Driver",
  },
  {
    gkey: "XILL3211",
    firstname: "Scott",
    lastname: "Anderson",
    username: "srson",
    employeeid: "23988",
    position: "Truck Driver",
  },
  {
    gkey: "OPIO9999",
    firstname: "Jamie",
    lastname: "Harrison",
    username: "jrison",
    employeeid: "47833",
    position: "Truck Driver",
  },
];
