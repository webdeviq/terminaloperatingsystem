import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";
import Header from "./Header";
import Container from "../form/Container";
import { LuContainer } from "react-icons/lu";
import { IoPerson } from "react-icons/io5";
import { FaFileInvoice } from "react-icons/fa6";
import { GiCrane, GiShipBow } from "react-icons/gi";
import { FiLogOut } from "react-icons/fi";
import { MdHistory } from "react-icons/md";

import classes from "./AppNavigation.module.css";

import Button from "../button/Button";

const AppNavigation = () => {
  const { pathname } = useLocation();

  return (
    <Header externalstyles={classes["app-header"]}>
      <nav>
        <Container externalstyles={classes["logos-container"]}>
          {pathname != "/unitsview" && (
            <Link to="/unitsview">
              <LuContainer />
              <span>Units</span>
            </Link>
          )}
          {pathname != "/employees" && (
            <Link to="/employees">
              <IoPerson />
              <span>Employees</span>
            </Link>
          )}
          {pathname != "/machinery" && (
            <Link to="/machinery">
              <GiCrane />
              <span>Machinery</span>
            </Link>
          )}
          {pathname != "/finance" && (
            <Link to="/finance">
              <FaFileInvoice />
              <span>Finance</span>
            </Link>
          )}
          {pathname != "/history" && (
            <Link to="/history">
              <MdHistory />
              <span>History</span>
            </Link>
          )}
          {pathname != "/vessels" && (
            <Link to="/vessels">
              <GiShipBow />
              <span>Vessels</span>
            </Link>
          )}

          <Button externalstyles={classes["nav-logout-button"]}>
            <FiLogOut />
            <span>Logout</span>
          </Button>
        </Container>
      </nav>
      <Container externalstyles={classes["logo-container"]}>
        <Button onClick={() => console.log("Clicked")}>
          <span>Terminal Operating System</span>
        </Button>
      </Container>
    </Header>
  );
};

export default AppNavigation;
