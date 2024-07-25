/** Accepts a string to convert to a Date. Throw exception if the input is not convertable. */

export const convertStringToDate = (input: Date): string => {
  const dateOptions: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  if (stringConvertableToDate(input)) {
    return new Date(input).toLocaleString("en-US", dateOptions);
  }
  throw new Error("Date input is not acceptable.");
};

export function calculateDaysInYard(): number;
export function calculateDaysInYard(timeout?: Date): number;

export function calculateDaysInYard(timeout?: Date): number {
  const defaultTimeInDate = new Date(2024, 5, 29);

  if (timeout && stringConvertableToDate(timeout)) {
    const timeDiff = timeout.valueOf() - defaultTimeInDate.valueOf();
    return Math.floor(timeDiff / (1000 * 60 * 24));
  }
  const currentDateDifference =
    new Date().valueOf() - defaultTimeInDate.valueOf();

  return Math.floor(currentDateDifference / (1000 * 60 * 60 * 24));
}

/**Returns true if the input is convertable to a valid Date. */
const stringConvertableToDate = (input: Date): boolean =>
  input.toLocaleDateString() !== "Invalid Date";
