import React, { useState, useEffect } from "react";

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
  showGeneralNotification,
  hideGeneralNotification,
} from "../../store/ui/uiSlice.ts";
import {
  updateVesselState,
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
  const isDisplayGeneralNotification = useAppSelector(
    (state) => state.uiSlice.isGeneralNotificationDisplayed
  );
  const vesselHistorySelectedEntity = useAppSelector(
    (state) => state.vesselSlice.activeVesselHistoryToDisplay
  );
  const isDisplayEntityDetails = useAppSelector(
    (state) => state.uiSlice.isDisplayEntityHistory
  );
  const loadingSpinnerText = useAppSelector(
    (state) => state.loadingSpinnerSlice.loadingspinnertext
  );
  const [isVesselAlreadyDischarged, setIsVesselAlreadyDischarged] =
    useState<boolean>(false);

  useEffect(() => {
    dispatch(showLoadingSpinner("Loading Vessels..."));
    // runs after the component mounts.

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
    dispatch(showLoadingSpinner("Loading Vessel Details..."));

    awaitResponse()
      .catch((error) => console.log(error))
      .finally(() => dispatch(hideLoadingSpinner()));
  };

  const onVesselUnitDischarge = (vesselGkey: string) => {
    dispatch(showLoadingSpinner("Loading Result..."));
    dispatch(hideEntityDetails());
    const vesselClicked = listOfVesselsInTerminal.find(
      (vessel) => vessel.gkey === vesselGkey
    );
    // if the vessel is already discharged and there is a vessel entity.
    // than -> set the isvesseldischarged to true and hide loading spinner and return.,
    if (vesselClicked && vesselClicked.isvesseldischarged) {
      console.log("Made it ");
      setIsVesselAlreadyDischarged(true);
      awaitResponse()
        .then(() => dispatch(showGeneralNotification()))
        .finally(() => dispatch(hideLoadingSpinner()));
    }
    if (vesselClicked && !vesselClicked.isvesseldischarged) {
      dispatch(setUnitEntityDataList(vesselClicked.loadlist));
      dispatch(
        updateVesselState({
          isvesseldischarged: true,
          gkey: vesselClicked.gkey,
        })
      );
      awaitResponse()
        .then(() => dispatch(showGeneralNotification()))
        .finally(() => dispatch(hideLoadingSpinner()));
    }
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
    dispatch(hideGeneralNotification());
  };

  const showVesselHistory = !isDisplayLoadingSpinner && isDisplayEntityDetails;

  const showUnitsAlreadyDischargedNotification =
    isVesselAlreadyDischarged && isDisplayGeneralNotification; // units already discharged.

  const showVesselUnitsDischargedNotification =
    isDisplayGeneralNotification && !isVesselAlreadyDischarged; // units succesfully discharged.

  return (
    <React.Fragment>
      <AppNavigation />
      {showUnitsAlreadyDischargedNotification && (
        <Overlay>
          <Notification
            buttonized={true}
            btnmessage="Close"
            headerinfo="Notification"
            message="Units already discharged!"
            onClickNotificationAction={onHideNotification}
            externalstyles={classes["notification-styles"]}
          />
        </Overlay>
      )}
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
          <LoadingSpinner loadingtext={loadingSpinnerText} />
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
