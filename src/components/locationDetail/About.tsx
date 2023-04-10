import * as React from "react";


const Facility = (props: any) => {
  const {
    about
  } = props;
  return (
    <>
      <div className="hours">
        <div className="hours-sec">
          <div className="title-with-link-1">
            <h4 className="box-title">{about.title}</h4>
          </div>
          <img src={about.image.url} alt="" />
          <div className="hours-div mb-5 md:mb-1 flex flex-col">
           <p>{about.subtitle}</p>
           <p>{about.description1}</p>
           <p>{about.description2}</p>
           <a href={about.supportCta.link}>{about.supportCta.label}</a>
           <a href={about.learnMore.link}>{about.learnMore.label}</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Facility;
