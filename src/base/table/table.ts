import { ReactNode } from "react";


export type TableBodyEntityType =
  | "unit"
  | "employee"
  | "machine"
  | "invoice"
  | "vessel";

export interface TableProps {
  children: ReactNode;
  externalstyles?: string;
}

export interface TableHeadProps {
  tableheadelements: string[];
  externalstyles?: string;
}

export interface TableBodyProps {
  entity: TableBodyEntityType;
  externalstyles?: string;
  
}

export interface EntityTableBodyProps extends TableBodyProps {
  onActivateEntityRow: (unitGkey: string) => void;
  onDoubleClickEntity: (unitGkey: string) => void;
  onRightClickEntity: () => void;
}

export type UnitTableProps = TableHeadProps &
  TableBodyProps &
  EntityTableBodyProps;

export type VesselTableProps = TableHeadProps &
  TableBodyProps &
  EntityTableBodyProps;

// interface TableBodyEntityUnit {
//     type: 'unit',
//     element: Unit[];
// }

// interface TableBodyEntityEmployee {
//     type: 'employee',
//     element: string[];
// }

// interface TableBodyEntityMachine {
//     type: 'machine',
//     element: number[];
// }

// interface TableBodyEntityInvoice {
//     type: 'invoice',
//     element: object[];
// }
