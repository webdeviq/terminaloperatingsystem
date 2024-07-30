import { useAppSelector } from "../../../store/index.ts";

// utils.
import {
  selectUnitCategoryStyle,
  selectStuffStyle,
  selectYardStyle,
} from "../../../util/entityStatusTheme";

import {
  setUnitLifeCycleOnDischargeFromVessel,
  unitRequiresPower,
} from "../../../util/calculate.ts";

//models.

//types
import { BaseTableProps } from "../TableBody.tsx";
// import Notification from "../../notification/Notification.tsx";
const UnitTableBody: React.FC<Omit<BaseTableProps, "entity">> = (
  props: Omit<BaseTableProps, "entity">
) => {
  const unitEntityList = useAppSelector((state) => state.unitSlice.data);

  const {
    classes,
    onActivateEntityRow,
    onDoubleClickEntity,
    onRightClickEntity,
  } = props;

  const transformedUnitList = unitEntityList.map((unit) => {
    return setUnitLifeCycleOnDischargeFromVessel(unit);
  });

  return transformedUnitList.map(
    (
      unit // cannot assign to readonly gkey...
    ) => (
      <tr
        className={unit.isunitrowselected ? classes["active-unit-row"] : ""}
        key={unit.gkey}
        onClick={() => onActivateEntityRow(unit.gkey)}
        onContextMenu={onRightClickEntity}
        onDoubleClick={() => onDoubleClickEntity(unit.gkey)}
      >
        <td>{unit.kind}</td>
        <td>{unit.unitnumber}</td>
        <td>{unit.unitowner}</td>
        <td
          className={classes[selectUnitCategoryStyle(unit.lifecycle!.category)]}
        >
          {unit.lifecycle!.category}
        </td>
        <td className={classes[selectStuffStyle(unit.lifecycle!.stuffstate)]}>
          {unit.lifecycle!.stuffstate}
        </td>
        <td className={classes[selectYardStyle(unit.lifecycle!.yardstate)]}>
          {unit.lifecycle!.yardstate}
        </td>
        <td>{unit.location!.block}</td>
        <td>{unit.type}</td>
        <td>{unitRequiresPower(unit)}</td>
        <td>{unit.vesseloperator}</td>
      </tr>
    )
  );
};

export default UnitTableBody;
