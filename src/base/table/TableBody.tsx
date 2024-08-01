import { ReactNode, ComponentPropsWithoutRef} from "react";

import { EntityTableBodyProps } from "./table.ts";

import React from "react";
import VesselTableBody from "./Vessel/VesselTableBody.tsx";
import UnitTableBody from "./Unit/UnitTableBody.tsx";
import { Unit } from "../../models/unit/unit.ts";

export type BaseTableProps = EntityTableBodyProps & {
  classes: CSSModuleClasses;
  manualListOfUnitsToSearch?: Unit[];
};

type TableBody = BaseTableProps & ComponentPropsWithoutRef<"tbody">;

const TableBody: React.FC<TableBody> = (props: TableBody) => {
  //const [showNotification, setShowNotification] = useState<boolean>(false);
  const {
    entity,
    onActivateEntityRow,
    onDoubleClickEntity,
    classes,
    onRightClickEntity,
    manualListOfUnitsToSearch,
  } = props;

  let elementResult: ReactNode;

  if (entity === "unit") {
    elementResult = (
      <UnitTableBody
        manualListOfUnitsToSearch={manualListOfUnitsToSearch}
        classes={classes}
        onActivateEntityRow={onActivateEntityRow}
        onDoubleClickEntity={onDoubleClickEntity}
        onRightClickEntity={onRightClickEntity}
      />
    );
  } else if (entity === "vessel") {
    elementResult = (
      <VesselTableBody
        classes={classes}
        onActivateEntityRow={onActivateEntityRow}
        onRightClickEntity={onRightClickEntity}
        onDoubleClickEntity={onDoubleClickEntity}
      />
    );
  }
  return <tbody>{elementResult}</tbody>;
};

export default TableBody;
