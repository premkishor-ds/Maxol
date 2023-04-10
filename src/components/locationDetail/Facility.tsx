import * as React from "react";


const Facility = (props: any) => {
  const {
    services,
    serviceLabel,
    fuelsAvailableLabel,
    fuelsType,
    fuelCardsAcceptedLabel,
    fuelCardsAccepted
  } = props;
  return (
    <>
      <div className="address-main-sec">
        <h4 className="box-title">{serviceLabel}</h4>
        <div className="icon-row content-col availability-col">
          <ul className="">
            {services.map((data: any) => {
              return (
                <li className="button-bx direction-button">
                  {data}
                </li>
              )
            })}
          </ul>
        </div>


        <h4 className="box-title mt-8 !mb-0">{fuelsAvailableLabel}</h4>

        <div className="icon-row content-col availability-col">
          <ul className="">
            {fuelsType.map((data: any) => {
              return (
                <li className="button-bx direction-button">
                  {data}
                </li>
              )
            })}
          </ul>
        </div>
      </div>


      <div className="hours">
        <div className="hours-sec">
          <div className="title-with-link-1">
            <h4 className="box-title">{fuelCardsAcceptedLabel}</h4>
          </div>
          <div className="hours-div mb-5 md:mb-1 flex flex-col">
            <ul className="">
              {fuelCardsAccepted.map((data: any) => {
                return (
                  <li className="button-bx direction-button">
                    <img src={data.photo.url} alt="" />
                    {data.label}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Facility;
