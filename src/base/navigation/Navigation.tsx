import { Link } from "react-router-dom";

import Header from "./Header";
import Container from "../form/Container";
import { LuContainer } from "react-icons/lu";
import { MdHistory } from "react-icons/md";
import { RiShip2Line } from "react-icons/ri";
import classes from "./Navigation.module.css";


type Props = {
  styles?: string;
};

const Navigation: React.FC<Props> = (props: Props) => {
  const { styles } = props;
  const navStyles = `${
    styles
      ? `${styles} ${classes["header-second"]}`
      : `${classes["header-second"]}`
  }`;

  return (
    <Header externalstyles={navStyles}>
      <nav className={classes["main-nav"]}>
        <Container externalstyles={classes["logos-container"]}>
          <Link to="/vessels">
            <RiShip2Line />
            <span>Vessels</span>
          </Link>
          <Link to="/unitsview">
            <LuContainer />
            <span>Units</span>
          </Link>
          <Link to="/history">
            <MdHistory />
            <span>History</span>
          </Link>
        </Container>
      </nav>
    </Header>
  );
};

export default Navigation;
