import { ChangeEvent, useState } from "react";

type ReturnType = {
  enteredValue: string;
  enteredValueIsValid: boolean;
  enteredValueHasError: boolean;
  setValueChangeHandler: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  setOnBlurHandler: () => void;
  reset: () => void;
};

export const useValidateInput = (
  cb: (value: string) => boolean
): ReturnType => {
  const [enteredValue, setEnteredValue] = useState<string>("");
  const [valueTouched, setValueTouched] = useState<boolean>(false);

  const enteredValueIsValid: boolean = cb(enteredValue);

  const enteredValueHasError: boolean = !enteredValueIsValid && valueTouched;

  const setValueChangeHandler = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
      setEnteredValue(event.target.value);
  };

  const setOnBlurHandler = (): void => {
    setValueTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
  };

  return {
    enteredValue,
    enteredValueIsValid,
    enteredValueHasError,
    setValueChangeHandler,
    setOnBlurHandler,
    reset,
  };
};
