import { ReactNode } from "react";

import classes from "./Header.module.css";

type Props = {
  children: ReactNode;
  externalstyles?: string;
};

const Header: React.FC<Props> = (props: Props) => {
  const { children, externalstyles: styles } = props;
  const headerStyles = `${
    styles ? `${classes["header"]} ${styles}` : `${classes["header"]}`
  }`;
  return <header className={headerStyles}>{children}</header>;
};

export default Header;