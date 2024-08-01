import { ComponentPropsWithoutRef, ReactNode } from "react";

import classes from "./Form.module.css";

type Props = {
  children: ReactNode;
  externalstyles?: string;
} & ComponentPropsWithoutRef<"form">;

const Form: React.FC<Props> = (props: Props) => {
  const { children, externalstyles: style, ...other } = props;
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
