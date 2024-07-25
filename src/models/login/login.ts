export type Roles = "Planner" | "Management" | "Operator" | null;

interface IRoles {
  role: Roles;
}
// changes here as well.

export const IRolesList: IRoles[] = [
  { role: "Operator" },
  { role: "Planner" },
  { role: "Management" },
];
