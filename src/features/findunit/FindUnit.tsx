import React, { ReactNode, useState } from "react";
import { useAppSelector } from "../../store/index.ts";

import FindUnitForm from "./FindUnitForm.tsx";
import classes from "./FindUnit.module.css";
import AppNavigation from "../../base/navigation/AppNavigation.tsx";
import { unitTableHeaderData } from "../../models/unit/unit";
import UnitTable from "../Unit/UnitTable.tsx";

const FindUnit = () => {
  const [showResult, setShowResult] = useState<boolean>(false);
  const [submitSearch, setSubmitSearch] = useState<string>("");
  const unitList = useAppSelector((state) => state.unitSlice.data);

  const onHandleSubmitSearch = (unitNumber: string) => {
    setSubmitSearch(unitNumber);
    setShowResult(true);
  };
  const result = unitList.filter(
    (element) => element.unitnumber === submitSearch
  );

  let contentResult: ReactNode;
  if (showResult && result.length >= 0) {
    contentResult = (
      <UnitTable
        entity="unit"
        manualListOfUnitsToSearch={result}
        tableheadelements={unitTableHeaderData}
      />
    );
  } else if (showResult && result.length <= 0) {
    contentResult = (
      <p className={classes["no-units-notification"]}>
        No such units found in inventory...
      </p>
    );
  }

  return (
    <React.Fragment>
      <AppNavigation />
      <section className={classes["find-unit-section"]}>
        <FindUnitForm onHandleSubmitSearch={onHandleSubmitSearch} />
        {contentResult}
        {!showResult && (
          <p className={classes["no-units-notification"]}>
            No units searched yet...
          </p>
        )}
      </section>
    </React.Fragment>
  );
};

export default FindUnit;
