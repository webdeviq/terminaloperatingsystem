import Table from "../../base/table/Table.tsx";
import TableHead from "../../base/table/TableHead.tsx";
import TableBody from "../../base/table/TableBody.tsx";
import { UnitTableProps } from "../../base/table/table.ts";

import classes from "./UnitTable.module.css";

const UnitTable: React.FC<UnitTableProps> = (props: UnitTableProps) => {
  // const [selected, setSelected] = useState<boolean>(false);

  const {
    entity,
    tableheadelements,
    onActivateEntityRow: onActivateUnitRow,
    onDoubleClickEntity: selectUnitHistoryRowObject,
  } = props;

  return (
    <Table externalstyles={classes["unit-table"]}>
      <TableHead tableheadelements={tableheadelements} />
      <TableBody
        entity={entity}
        classes={classes}
        onActivateEntityRow={onActivateUnitRow}
        onDoubleClickEntity={selectUnitHistoryRowObject}
        onRightClickEntity={() => console.log("Right Clicked")}
      />
    </Table>
  );
};

export default UnitTable;
