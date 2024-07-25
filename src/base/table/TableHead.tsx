
import { TableHeadProps } from "./table";

const TableHead: React.FC<TableHeadProps> = (props: TableHeadProps) => {
  const { tableheadelements } = props;
  return (
    <thead>
      <tr>
        {tableheadelements.map((element) => (
          <th key={element}>{element}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
