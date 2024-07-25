import { ReactNode, ComponentPropsWithoutRef } from "react";

import classes from "./Container.module.css";

type Props = {
  children?: ReactNode;
  externalstyles?: string;
} & ComponentPropsWithoutRef<"div">;

const Container: React.FC<Props> = (props: Props) => {
  const { children, externalstyles: styles, ...other } = props;
  const containerstyle = `${
    styles ? `${classes["container"]} ${styles}` : `${classes["container"]}`
  }`;
  return (
    <div className={containerstyle} {...other}>
      {children}
    </div>
  );
};

export default Container;
