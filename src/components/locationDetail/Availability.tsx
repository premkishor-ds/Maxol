import * as React from "react";
import opennow from "../../images/circle-check.svg";
import Fiiting_rooms from "../../images/circle-check.svg";
import Parking from "../../images/circle-check.svg";
import Availibilityclosed from "../../images/Availibilityclosed.svg";
import Availibilityservices from "./Availibilityservices";
export default function Availability(props: any) {
  return (
    <>
      {props.c_openForShoppingAvailibility?.availability != undefined ? (
        props.c_openForShoppingAvailibility.availability ? (
          <Availibilityservices
            icon={opennow}
            available="active-feci"
            text="Open for Shopping"
          />
        ) : (
          <Availibilityservices
            icon={Availibilityclosed}
            available="deactive-feci"
            text="Open for Shopping"
          />
        )
      ) : (
        <Availibilityservices
          icon={opennow}
          available="active-feci"
          text="Open for Shopping"
        />
      )}

      {props.c_fitting_rooms?.availability != undefined ? (
        props.c_fitting_rooms.availability ? (
          <Availibilityservices
            icon={Fiiting_rooms}
            available="active-feci"
            text="Fitting Rooms"
          />
        ) : (
          <Availibilityservices
            icon={Availibilityclosed}
            available="deactive-feci"
            text="Fitting Rooms"
          />
        )
      ) : (
        <div className="opennow-sec">
          <div className="icons">
            <img
              className=" "
              src={Fiiting_rooms}
              width="20"
              height="20"
              alt="Fitting Rooms"
            />{" "}
          </div>
          Fitting Rooms
        </div>
      )}

      {props.c_clickCollectAvaliability?.availability != undefined ? (
        props.c_clickCollectAvaliability.availability ? (
          <Availibilityservices
            icon={opennow}
            available="active-feci"
            text="Click & Collect available"
          />
        ) : (
          <Availibilityservices
            icon={Availibilityclosed}
            available="deactive-feci"
            text="Click & Collect available"
          />
        )
      ) : (
        <Availibilityservices
          icon={opennow}
          available="active-feci"
          text="Click & Collect available"
        />
      )}

      {props.c_parking_facilities?.availability != undefined ? (
        props.c_parking_facilities.availability ? (
          <Availibilityservices
            icon={Parking}
            available="active-feci"
            text="Parking Facilities"
          />
        ) : (
          <Availibilityservices
            icon={Availibilityclosed}
            available="deactive-feci"
            text="Parking Facilities"
          />
        )
      ) : (
        <Availibilityservices
          icon={Parking}
          available="active-feci"
          text="Parking Facilities"
        />
      )}
    </>
  );
}
