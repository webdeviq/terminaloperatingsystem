import { ReactNode } from "react";

import classes from "./Main.module.css";

type Props = {
  children: ReactNode;
};

const Main: React.FC<Props> = (props: Props) => {
  const { children } = props;
  return <main className={classes["main"]}>{children}</main>;
};

export default Main;
