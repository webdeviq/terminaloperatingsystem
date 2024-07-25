import { BaseTableProps } from "../TableBody.tsx";
import { useAppSelector } from "../../../store/index.ts";
import {
  selectVesselDepartedState,
  selectVesselDischargeState,
} from "../../../util/entityStatusTheme.ts";
const VesselTableBody: React.FC<Omit<BaseTableProps, "entity">> = (
  props: Omit<BaseTableProps, "entity">
) => {
  const vesselList = useAppSelector((state) => state.vesselSlice.listofvessels);
  const {
    onActivateEntityRow,
    classes,
    onDoubleClickEntity,
    onRightClickEntity,
  } = props;
  return vesselList.map((vessel) => (
    <tr
      className={vessel.isvesselrowselected ? classes["active-vessel-row"] : ""}
      key={vessel.gkey}
      onClick={() => onActivateEntityRow(vessel.gkey)}
      onContextMenu={onRightClickEntity}
      onDoubleClick={() => onDoubleClickEntity(vessel.gkey)}
    >
      <td>{vessel.vesselname}</td>
      <td>{vessel.line}</td>
      <td>{vessel.vesselvisit}</td>
      <td>{vessel.countryofdestination}</td>
      <td>{vessel.portofdischarge}</td>
      <td>{vessel.timeofarrival}</td>
      <td>{vessel.timeofdeparture}</td>
      <td>{vessel.berth}</td>
      <td>{vessel.loadlist.length}</td>
      <td
        className={
          classes[selectVesselDischargeState(vessel.isvessledischarged)]
        }
      >
        {vessel.isvessledischarged ? "true" : "false"}
      </td>
      <td className={classes[selectVesselDepartedState(vessel.isvesseldocked)]}>
        {vessel.isvesseldocked ? "true" : "false"}
      </td>
    </tr>
  ));
};

export default VesselTableBody;
