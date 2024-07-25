import React from "react";
import { TableProps } from "./table.ts";

import classes from "./Table.module.css";

const Table: React.FC<TableProps> = (props: TableProps) => {
  const { children, externalstyles } = props;

  const tableClasses = `${
    externalstyles
      ? `${externalstyles} ${classes["main-table"]}`
      : classes["main-table"]
  }`;

  return <table className={tableClasses}>{children}</table>;
};

export default Table;
