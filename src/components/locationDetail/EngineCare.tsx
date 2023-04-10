import * as React from "react";


const EngineCare = (props: any) => {
  const {
    engineCare
  } = props;
  return (
    <>
      <div className="hours">
        <div className="hours-sec">
          <div className="title-with-link-1">
            <h4 className="box-title">{engineCare.label}</h4>
          </div>

          <div className="hours-div mb-5 md:mb-1 flex flex-col">
            {engineCare.cards.map((data: any) => {
              return (
                <div>
                  <img src={data.section.image.url} alt="" />
                  <h4>{data.section.title}</h4>
                  <p>{data.section.description}</p>
                  <a href={data.cta.link}>{data.cta.label}</a>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default EngineCare;
