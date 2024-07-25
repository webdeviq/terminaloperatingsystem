import { ComponentPropsWithoutRef, ReactNode } from "react";

import classes from "./Form.module.css";

type Props = {
  children: ReactNode;
  style?: string;
} & ComponentPropsWithoutRef<"form">;

const Form: React.FC<Props> = (props: Props) => {
  const { children, style, ...other } = props;
  const formstyle = `${
    style ? `${classes["form"]} ${style}` : `${classes["form"]}`
  }`;

  return (
    <form className={formstyle} {...other}>
      {children}
    </form>
  );
};

export default Form;
