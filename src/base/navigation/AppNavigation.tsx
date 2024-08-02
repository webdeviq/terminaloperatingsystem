import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";
import Header from "./Header";
import Container from "../form/Container";
import { LuContainer } from "react-icons/lu";

import { GiShipBow } from "react-icons/gi";

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

          {pathname != "/vessels" && (
            <Link to="/vessels">
              <GiShipBow />
              <span>Vessels</span>
            </Link>
          )}
          {pathname != "/history" && (
            <Link to="/history">
              <MdHistory />
              <span>History</span>
            </Link>
          )}
        </Container>
      </nav>
      <Container externalstyles={classes["logo-container"]}>
        <Button onClick={() => console.log("Terminal Operating System")}>
          <span>Terminal Operating System</span>
        </Button>
      </Container>
    </Header>
  );
};

export default AppNavigation;
