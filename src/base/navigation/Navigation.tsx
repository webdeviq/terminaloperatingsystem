import { Link } from "react-router-dom";

import Header from "./Header";
import Container from "../form/Container";
import { LuContainer } from "react-icons/lu";
import { IoPerson } from "react-icons/io5";
import { FaFileInvoice } from "react-icons/fa6";
import { GiCrane } from "react-icons/gi";
import { FiLogOut } from "react-icons/fi";
import { MdHistory } from "react-icons/md";
import { RiShip2Line } from "react-icons/ri";
import classes from "./Navigation.module.css";
import Button from "../button/Button";

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
          <Link to="/employees">
            <IoPerson />
            <span>Employees</span>
          </Link>
          <Link to="/machinery">
            <GiCrane />
            <span>Machinery</span>
          </Link>
          <Link to="/finance">
            <FaFileInvoice />
            <span>Finance</span>
          </Link>
          <Link to="/history">
            <MdHistory />
            <span>History</span>
          </Link>
          <Button externalstyles={classes["nav-logout-button"]}>
            <FiLogOut />
            <span>Logout</span>
          </Button>
        </Container>
      </nav>
    </Header>
  );
};

export default Navigation;
