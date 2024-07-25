/*
    The main goal of this data is to track the security charges on a unit once being stored in yard.
    Containers should have security charges
    Calculation should start from the container comes in up to when the unit leaves, the yard.
    free days should be mentioned if any?

*/

export interface Security {
  timein: Date;
  timeout?: Date;
  daysInYard: () => number;

}

// export interface ISecurityLineStorage {

// }
