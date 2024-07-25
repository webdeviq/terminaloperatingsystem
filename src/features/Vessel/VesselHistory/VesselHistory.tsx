//Components.
import Button from "../../../base/button/Button";
import Container from "../../../base/form/Container";
import Header from "../../../base/navigation/Header";
import { RiShip2Line } from "react-icons/ri";
// Css
import classes from "./VesselHistory.module.css";
// Models.
import { Vessel } from "../../../models/vessel/vessel";

interface Props {
  vesselHistorySelectedEntity: Vessel;
  onVesselUnitDischarge: (vesselGkey: string) => void;
  onCloseVesselDetails: () => void;
}

const VesselHistory: React.FC<Props> = (props: Props) => {
  const {
    vesselHistorySelectedEntity,
    onCloseVesselDetails,
    onVesselUnitDischarge,
  } = props;

  return (
    <Container externalstyles={classes["vessel-history-container"]}>
      <Header externalstyles={classes["vessel-details-history-header"]}>
        <span>Vessel History</span>
      </Header>
      <Container externalstyles={classes["vessel-history-details-container"]}>
        <Container externalstyles={classes["vessel-history-logo-container"]}>
          <RiShip2Line className={classes["vessel-history-svg"]} />
          <span>{vesselHistorySelectedEntity.vesselname}</span>
        </Container>
        <Container externalstyles={classes["vessel-history-visit-container"]}>
          <span>Vessel Visit: {vesselHistorySelectedEntity.vesselvisit}</span>
          <span>Line: {vesselHistorySelectedEntity.line}</span>
          <span>
            Load List Count: {vesselHistorySelectedEntity.loadlist.length}
          </span>
        </Container>
        <Container externalstyles={classes["vessel-history-time-container"]}>
          <span>ETA: {vesselHistorySelectedEntity.timeofarrival}</span>
          <span>
            ETD:
            {vesselHistorySelectedEntity.timeofdeparture
              ? vesselHistorySelectedEntity.timeofdeparture
              : " inbound"}
          </span>
        </Container>
        <Container>
          <span>Dest: {vesselHistorySelectedEntity.countryofdestination}</span>
          <span>Port: {vesselHistorySelectedEntity.portofdischarge}</span>
        </Container>
        <Container>
          <span>Berth: {vesselHistorySelectedEntity.berth}</span>
          <span>
            Units Discharged:{" "}
            {vesselHistorySelectedEntity.isvessledischarged ? "true" : "false"}
          </span>
        </Container>
        <Container externalstyles={classes["vessel-actions-container"]}>
          <Button
            onClick={() => onVesselUnitDischarge(vesselHistorySelectedEntity.gkey)}
          >
            Simulate Discharge
          </Button>
          <Button onClick={onCloseVesselDetails}>Close</Button>
        </Container>
      </Container>
    </Container>
  );
};

export default VesselHistory;
