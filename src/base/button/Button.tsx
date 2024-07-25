import { ComponentPropsWithoutRef, ReactNode } from "react";

import classes from "./Button.module.css";

type Props = {
  styles?: string;
  children: ReactNode;
} & ComponentPropsWithoutRef<"button">;

const Button: React.FC<Props> = (props: Props) => {
  const { styles: style, children, ...other } = props;
  const buttonstyle = `${
    style ? `${classes["btn"]} ${style}` : `${classes["btn"]}`
  }`;
  return (
    <button className={buttonstyle} {...other}>
      {children}
    </button>
  );
};

export default Button;
