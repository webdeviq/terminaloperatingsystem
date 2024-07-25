// Generates random Id for entities.
export const generateRandomId = (): string => {
  // every gkey should have 8 digits. 4 number 4 letters.
  const randomGkey: string[] = [];
  let randomIndexString: string = "";
  let randomFourDigitNumber: number = 0;
  const letters: string[] = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  for (let index = 0; index < 4; index++) {
    randomIndexString = letters[Math.floor(Math.random() * 26)];
    randomFourDigitNumber = Math.floor(Math.random() * 10);
    randomGkey.push(randomIndexString);
    randomGkey.push(randomFourDigitNumber.toString());
  }
  return randomGkey.join("");
};
