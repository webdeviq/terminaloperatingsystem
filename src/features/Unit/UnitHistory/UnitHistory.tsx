import Container from "../../../base/form/Container.tsx";
import Header from "../../../base/navigation/Header.tsx";
import Button from "../../../base/button/Button.tsx";

import { PiShippingContainerDuotone } from "react-icons/pi";
import classes from "./UnitHistory.module.css";
import { useAppSelector } from "../../../store/index.ts";

interface UnitHistoryProps {
  onCloseUnitHistory: () => void;
}

const UnitHistory: React.FC<UnitHistoryProps> = (props: UnitHistoryProps) => {
  const { onCloseUnitHistory } = props;

  const unittodisplay = useAppSelector(
    (state) => state.unitSlice.activeUnitHistoryToDisplay
  );

  return (
    <aside className={classes["unit-history-aside"]}>
      <Header externalstyles={classes["unit-history-aside-header"]}>
        unit inspector
      </Header>
      <Container externalstyles={classes["unit-history-container"]}>
        <Container externalstyles={classes["unit-history-header"]}>
          <Container>
            <PiShippingContainerDuotone />
            <span>unit: {unittodisplay.unitnumber}</span>
          </Container>
        </Container>
        <Container className={classes["unit-history-article-container"]}>
          <article className={classes["unit-history-article"]}>
            <Container className={classes["unit-details-container"]}>
              <span>unit type: {unittodisplay.type}</span>
              <span>location: {unittodisplay.location!.block}</span>
              <span>time in: {unittodisplay.lifecycle!.security.timein}</span>
              <span>
                days in yard: {unittodisplay.lifecycle!.security.daysInYard}
              </span>
            </Container>
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
