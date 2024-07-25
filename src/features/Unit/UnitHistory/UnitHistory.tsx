import Container from "../../../base/form/Container.tsx";
import Header from "../../../base/navigation/Header.tsx";
import Button from "../../../base/button/Button.tsx";
import { Unit } from "../../../models/unit/unit.ts";

import { PiShippingContainerDuotone } from "react-icons/pi";
import classes from "./UnitHistory.module.css";

interface UnitHistoryProps {
  unittodisplay: Unit;
  onCloseUnitHistory: () => void;
}

const UnitHistory: React.FC<UnitHistoryProps> = (props: UnitHistoryProps) => {
  const { unittodisplay, onCloseUnitHistory } = props;
  return (
    <aside className={classes["unit-history-aside"]}>
      <Container externalstyles={classes["unit-history-container"]}>
        <Header externalstyles={classes["unit-history-header"]}>
          <Container>
            <PiShippingContainerDuotone />
            <span>unit number: {unittodisplay.unitnumber}</span>
          </Container>
        </Header>
        <Container className={classes["unit-history-article-container"]}>
          <article className={classes["unit-history-article"]}>
            <span>unit type</span>
            <span>unit location</span>
            <span>unit lifecycle details</span>
            <span>unit time in</span>
            <span>unit days in yard?</span>
          </article>
        </Container>
        <Container className={classes["unit-history-btn-container"]}>
          <Button onClick={onCloseUnitHistory}>Close</Button>
        </Container>
      </Container>
    </aside>
  );
};

export default UnitHistory;
