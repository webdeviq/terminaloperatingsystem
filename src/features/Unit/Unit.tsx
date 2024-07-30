import React, { useEffect } from "react";

// components
import UnitTable from "./UnitTable.tsx";
import AppNavigation from "../../base/navigation/AppNavigation.tsx";
import Overlay from "../../base/modal/Overlay.tsx";
import Notification from "../../base/notification/Notification.tsx";
import LoadingSpinner from "../../base/loadingspinner/LoadingSpinner.tsx";
import classes from "./Unit.module.css";

import { useAppDispatch, useAppSelector } from "../../store/index.ts";
import {
  setActiveUnitHistoryToDisplay,
  // updateUnitDataList,
  setSelectedRowObjectToHiglight,
} from "../../store/unit/unitSlice.ts";
import {
  showEntityDetails,
  hideEntityDetails,
} from "../../store/ui/uiSlice.ts";
import {
  showLoadingSpinner,
  hideLoadingSpinner,
} from "../../store/ui/loadingSpinnerSlice.ts";
import { setAmountOfEntityQty } from "../../store/footer/footerSlice.ts";
import { unitTableHeaderData } from "../../models/unit/unit.ts";

import UnitHistory from "./UnitHistory/UnitHistory.tsx";

const Unit = () => {
  const dispatch = useAppDispatch();
  const unitsListSliceData = useAppSelector((state) => state.unitSlice.data);
  const showUnitHistoryBool = useAppSelector(
    (state) => state.uiSlice.isDisplayEntityHistory
  );

  
  const isDisplayLoadingSpinner = useAppSelector(
    (state) => state.loadingSpinnerSlice.displayloadingspinner
  );
  const loadingSpinnerText = useAppSelector(
    (state) => state.loadingSpinnerSlice.loadingspinnertext
  );

  useEffect(() => {
    const sleep = (): Promise<unknown> =>
      new Promise((resolve) => setTimeout(resolve, 3000));

    async function awaitResponse() {
      await sleep();
    }
    dispatch(showLoadingSpinner("Loading Units..."));
    awaitResponse()
      .then(() => dispatch(hideLoadingSpinner()))
      .catch((error) => console.log(error));

    dispatch(
      setAmountOfEntityQty({
        entity: "unit",
        quantity: unitsListSliceData.length,
      })
    );
  }, [dispatch, unitsListSliceData.length]);

  const onUnitRowClick = (unitGkey: string): void => {
    const temporaryUnitsList = [...unitsListSliceData];
    const clickedUnitRowObject = temporaryUnitsList.filter(
      (element) => element.gkey === unitGkey
    )[0];

    dispatch(setSelectedRowObjectToHiglight(clickedUnitRowObject));
  };

  const onDoubleClickShowUnitHistory = (unitGkey: string): void => {
    dispatch(showLoadingSpinner("Loading Unit Details..."));
    setTimeout(() => {
      dispatch(hideLoadingSpinner());
    }, 3000);
    dispatch(
      setActiveUnitHistoryToDisplay(unitGkey)
    );
    dispatch(showEntityDetails());
  };

  const onCloseUnitHistory = () => {
    dispatch(hideEntityDetails());
  };
  const onRightClickUnitEntity = () => console.log("Unit Right Clicked");
  const loadingHistoryFalseAndShowUnitHistoryTrue =
    !isDisplayLoadingSpinner && showUnitHistoryBool;

  return (
    <React.Fragment>
      <AppNavigation />
      {loadingHistoryFalseAndShowUnitHistoryTrue && (
        <Overlay>
          <UnitHistory
            onCloseUnitHistory={onCloseUnitHistory}
          />
        </Overlay>
      )}

      {isDisplayLoadingSpinner && (
        <Overlay>
          <LoadingSpinner loadingtext={loadingSpinnerText} />
        </Overlay>
      )}
      {unitsListSliceData.length <= 0 && (
        <Overlay externalstyles={classes["no-data-notification-overlay"]}>
          <Notification
            externalstyles={classes["no-data-notification-container"]}
            buttonized={false}
            headerinfo="Notification"
            message="No data to display..."
          />
        </Overlay>
      )}
      <section className={classes["units-section"]}>
        <UnitTable
          entity="unit"
          tableheadelements={unitTableHeaderData}
          onActivateEntityRow={onUnitRowClick}
          onDoubleClickEntity={onDoubleClickShowUnitHistory}
          onRightClickEntity={onRightClickUnitEntity}
        />
      </section>
    </React.Fragment>
  );
};

export default Unit;
