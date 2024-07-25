import Table from "../../base/table/Table.tsx";
import TableHead from "../../base/table/TableHead.tsx";
import TableBody from "../../base/table/TableBody.tsx";

import { VesselTableProps } from "../../base/table/table.ts";
import classes from "./VesselTable.module.css";

const VesselTable: React.FC<VesselTableProps> = (props: VesselTableProps) => {
  const {
    entity,
    onActivateEntityRow: onActivateUnitRow,
    onDoubleClickEntity,
    tableheadelements,
    onRightClickEntity,
  } = props;
  return (
    <Table externalstyles={classes["vessel-table"]}>
      <TableHead tableheadelements={tableheadelements} />
      <TableBody
        entity={entity}
        onActivateEntityRow={onActivateUnitRow}
        onDoubleClickEntity={onDoubleClickEntity}
        classes={classes}
        onRightClickEntity={onRightClickEntity}
      />
    </Table>
  );
};

export default VesselTable;
