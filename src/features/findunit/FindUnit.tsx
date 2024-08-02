import React, { ReactNode, useState } from "react";

import FindUnitForm from "./FindUnitForm.tsx";
import classes from "./FindUnit.module.css";
import AppNavigation from "../../base/navigation/AppNavigation.tsx";
import { unitTableHeaderData } from "../../models/unit/unit";
import UnitTable from "../Unit/UnitTable.tsx";

import { useAppSelector, useAppDispatch } from "../../store/index.ts";

import Overlay from "../../base/modal/Overlay.tsx";
import LoadingSpinner from "../../base/loadingspinner/LoadingSpinner.tsx";
import { awaitResponse } from "../../util/agent.ts";
import {
  hideLoadingSpinner,
  showLoadingSpinner,
} from "../../store/ui/loadingSpinnerSlice.ts";
import { setAmountOfEntityQty } from "../../store/footer/footerSlice.ts";

const FindUnit = () => {
  const dispatch = useAppDispatch();
  const isDisplayLoadingSpinner = useAppSelector(
    (state) => state.loadingSpinnerSlice.displayloadingspinner
  );
  const loadingSpinnerText = useAppSelector(
    (state) => state.loadingSpinnerSlice.loadingspinnertext
  );
  const [showResult, setShowResult] = useState<boolean>(false);
  const [submitSearch, setSubmitSearch] = useState<string>("");
  const unitList = useAppSelector((state) => state.unitSlice.data);

  const onHandleSubmitSearch = (unitNumber: string) => {
    dispatch(showLoadingSpinner("Loading Unit Result..."));
    setSubmitSearch(unitNumber);
    setShowResult(true);
    awaitResponse().then(() => dispatch(hideLoadingSpinner()));
  };
  const result = unitList.filter(
    (element) => element.unitnumber === submitSearch
  );

  dispatch(setAmountOfEntityQty({ entity: "unit", quantity: result.length }));

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
      {isDisplayLoadingSpinner && (
        <Overlay>
          <LoadingSpinner loadingtext={loadingSpinnerText} />
        </Overlay>
      )}
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
