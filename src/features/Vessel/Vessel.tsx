import React, { useEffect } from "react";

// redux imports.
import { useAppDispatch, useAppSelector } from "../../store/index.ts";
import {
  hideLoadingSpinner,
  showLoadingSpinner,
} from "../../store/ui/loadingSpinnerSlice.ts";
import { setAmountOfEntityQty } from "../../store/footer/footerSlice.ts";
import {
  showEntityDetails,
  hideEntityDetails,
  showUpdatedEntityHistory,
  hideUpdatedEntityHistory,
} from "../../store/ui/uiSlice.ts";
import {
  setActiveVesselHistoryToDisplay,
  setActiveVesselRowObjectToHighlight,
} from "../../store/vessel/vesselSlice.ts";
import { setUnitEntityDataList } from "../../store/unit/unitSlice.ts";

// Components.
import LoadingSpinner from "../../base/loadingspinner/LoadingSpinner.tsx";
import Overlay from "../../base/modal/Overlay.tsx";
import VesselTable from "./VesselTable.tsx";
import AppNavigation from "../../base/navigation/AppNavigation.tsx";
import VesselHistory from "./VesselHistory/VesselHistory.tsx";
import Notification from "../../base/notification/Notification.tsx";
// Utils
import { awaitResponse } from "../../util/agent.ts";
// Models
import { vesselTableHeaderData } from "../../models/vessel/vessel.ts";
import { Vessel as VesselModel } from "../../models/vessel/vessel.ts";
// Css
import classes from "./Vessel.module.css";
//import Container from "../../base/form/Container.tsx";

const Vessel = () => {
  const dispatch = useAppDispatch();
  const listOfVesselsInTerminal = useAppSelector(
    (state) => state.vesselSlice.listofvessels
  );
  const isDisplayLoadingSpinner = useAppSelector(
    (state) => state.loadingSpinnerSlice.displayloadingspinner
  );
  const isDisplayUpdatedEntityNotification = useAppSelector(
    (state) => state.uiSlice.isUpdatedEntityNotification
  );
  const vesselHistorySelectedEntity = useAppSelector(
    (state) => state.vesselSlice.activeVesselHistoryToDisplay
  );
  const isDisplayEntityDetails = useAppSelector(
    (state) => state.uiSlice.isDisplayEntityHistory
  );
  useEffect(() => {
    awaitResponse()
      .then(() =>
        dispatch(
          setAmountOfEntityQty({
            entity: "Vessel",
            quantity: listOfVesselsInTerminal.length,
          })
        )
      )
      .catch((error) => console.log(error))
      .finally(() => dispatch(hideLoadingSpinner()));
  }, [dispatch, listOfVesselsInTerminal.length]);
  const onRightClickVesselEntity = () =>
    console.log("Vessel Entity Right Clicked");

  const onVesselDoubleClick = (vesselGkey: string) => {
    dispatch(setActiveVesselHistoryToDisplay(vesselGkey));
    dispatch(showEntityDetails());
    dispatch(showLoadingSpinner());

    awaitResponse()
      .catch((error) => console.log(error))
      .finally(() => dispatch(hideLoadingSpinner()));
  };

  const onVesselUnitDischarge = (vesselGkey: string) => {
    dispatch(showLoadingSpinner());
    dispatch(hideEntityDetails());
    const vesselClicked = listOfVesselsInTerminal.find(
      (vessel) => vessel.gkey === vesselGkey
    );

    if (vesselClicked) {
      dispatch(setUnitEntityDataList(vesselClicked.loadlist));
    }

    awaitResponse()
      .then(() => dispatch(showUpdatedEntityHistory()))
      .finally(() => dispatch(hideLoadingSpinner()));
  };

  const onVesselRowClick = (unitGkey: string) => {
    const temporaryVesselList: VesselModel[] = [...listOfVesselsInTerminal];
    const clickedVesselRow = temporaryVesselList.filter(
      (element) => element.gkey === unitGkey
    )[0];
    // Dispatch the method to change the isvesselrowselected property of Vessel object.
    dispatch(setActiveVesselRowObjectToHighlight(clickedVesselRow));
  };

  const onHideVesselHistory = () => {
    dispatch(hideEntityDetails());
  };
  const onHideNotification = () => {
    dispatch(hideUpdatedEntityHistory());
  };
  let loadingSpinnerResultText = "";
  if (isDisplayLoadingSpinner && isDisplayEntityDetails) {
    loadingSpinnerResultText = "Loading Vessel Details...";
  } else if (isDisplayLoadingSpinner && !isDisplayEntityDetails) {
    loadingSpinnerResultText = "Loading Vessels...";
  } else if (
    isDisplayEntityDetails &&
    !isDisplayEntityDetails &&
    isDisplayEntityDetails
  ) {
    loadingSpinnerResultText = "Discharging Units...";
  } else {
    loadingSpinnerResultText = "";
  }
  const showVesselHistory = !isDisplayLoadingSpinner && isDisplayEntityDetails;
  const showVesselUnitsDischargedNotification =
    isDisplayUpdatedEntityNotification;
  // const showLoadingSpinnerOrNot =
  //   isDisplayLoadingSpinner && isDisplayEntityDetails;
  //const showEntityHistoryDetails = displayEntityHistory;
  return (
    <React.Fragment>
      <AppNavigation />
      {showVesselUnitsDischargedNotification && (
        <Overlay>
          <Notification
            buttonized={true}
            btnmessage="Close"
            headerinfo="Notification"
            message="Units discharged succesfully!"
            onClickNotificationAction={onHideNotification}
            externalstyles={classes["notification-styles"]}
          />
        </Overlay>
      )}
      {showVesselHistory && (
        <Overlay>
          <VesselHistory
            onCloseVesselDetails={onHideVesselHistory}
            onVesselUnitDischarge={onVesselUnitDischarge}
            vesselHistorySelectedEntity={vesselHistorySelectedEntity!}
          />
        </Overlay>
      )}
      {isDisplayLoadingSpinner && (
        <Overlay>
          <LoadingSpinner loadingtext={loadingSpinnerResultText} />
        </Overlay>
      )}
      <section className={classes["vessels-section"]}>
        <VesselTable
          entity="vessel"
          tableheadelements={vesselTableHeaderData}
          onActivateEntityRow={onVesselRowClick}
          onDoubleClickEntity={onVesselDoubleClick}
          onRightClickEntity={onRightClickVesselEntity}
        />
      </section>
    </React.Fragment>
  );
};

export default Vessel;
