import * as React from "react";
import GetDirection from "../components/commons/GetDirection";
import "../index.css";
import {
  Template,
  GetPath,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
  GetRedirects,
} from "@yext/pages";
import BreadCrumbs from "../components/layouts/Breadcrumb";
import { StaticData } from "../sites-global/staticData";
import {
  AnalyticsEnableDebugging,
  AnalyticsEnableTrackingCookie,
  favicon,
  liveHomePage,
  logo,
  maxolLogo,
  metaBots,
  stagingBaseurl,
} from "../sites-global/global";
import { JsonLd } from "react-schemaorg";
import Address from "../components/commons/Address";
import PageLayout from "../components/layouts/PageLayout";
import Availability from "../components/locationDetail/Availability";
import OpenClose from "../components/commons/openClose";
import {
  AnalyticsProvider,
  AnalyticsScopeProvider,
  Link,
} from "@yext/pages/components";
import constant from "../constant";
export const config: TemplateConfig = {
  stream: {
    $id: "city",
    filter: {
      entityTypes: ["ce_city"],
      savedFilterIds: ["dm_stores-directory_address_city"],
    },
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "slug",
      "dm_directoryParents.name",
      "dm_directoryParents.dm_baseEntityCount",
      "dm_directoryParents.slug",
      "dm_directoryParents.meta.entityType",
      "dm_directoryChildren.mainPhone",
      "dm_directoryChildren.timezone",
      "dm_directoryChildren.slug",
      "dm_directoryChildren.name",
      "dm_directoryChildren.id",
      "dm_directoryChildren.dm_baseEntityCount",
      "dm_directoryChildren.address",
      "dm_directoryChildren.hours",
      "dm_directoryChildren.yextDisplayCoordinate"
    ],
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  let url: any = document.name;
  //   if(typeof document.dm_directoryParents != 'undefined' && document.dm_directoryParents.length > 0){ 
  //   document.dm_directoryParents.map((i: any) => {
  //     if (i.meta.entityType.id == "ce_country") {
  //       url = `${i.slug}`;
  //     } else if (i.meta.entityType.id == "ce_region") {
  //       url = `${url}/${i.slug}/${document.slug.toString()}`;
  //     }
  //   });
  // }
  // else{
  //   url = "gb/" + constant.slugify(document.name);
  // }
  return url;
};





const City: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  __meta,
  document,
}) => {
  const {
    name,
    dm_directoryParents,
    dm_directoryChildren,
    _site,
  } = document;

  const templateData = { document: document, __meta: __meta };
  let address;
  let childrenDivs = <></>;
  if(typeof document.dm_directoryChildren != 'undefined' && document.dm_directoryChildren.length > 0){
    childrenDivs = dm_directoryChildren.map((entity: any) => {
    // let url = "";
    // const name: any = entity.name;
    // const string: any = name.toString();
    // const result: any = string.replaceAll(" ", "-");
    // const finalslug:any=constant.slugify(entity.slug);
    // if (!entity.slug) {
    //   url = `/${entity.id}-${result}`;
    // } else {
    //   url = `/${finalslug}`;
    // }

    return (
      <div className="nearby-card">
        <div className="location-name-miles icon-row">
          <h2>
            {/* <Link
              className="inline-block notHighlight"
              href={url}
              data-ya-track={`viewstore-${entity.name}`}
              eventName={`viewstore-${entity.name}`}
              rel="noopener noreferrer"
            >
              {entity.name}
            </Link> */}
          </h2>
        </div>
        {/* <div className="icon-row">
          <Address address={entity.address} />
        </div> */}

        {/* <div className="icon-row">
          <div className="content-col open-now-string">
            {typeof entity.hours?.reopenDate != "undefined" ? (
              <h6>{StaticData.tempClosed}</h6>
            ) : (
              <OpenClose timezone={entity.timezone} hours={entity.hours} />
            )}
          </div>
        </div> */}


        {/* <div className="button-bx">
          <Link
            className="btn"
            href={url}
            data-ya-track={`viewstore-${entity.name}`}
            eventName={`viewstore-${entity.name}`}
            rel="noopener noreferrer"
          >
            {StaticData.StoreDetailbtn}
          </Link>
          <GetDirection
            buttonText={StaticData.getDirection}
            address={entity.address}
            googlePlaceId={entity.googlePlaceId}
            latitude={entity.yextDisplayCoordinate.latitude}
            longitude={entity.yextDisplayCoordinate.longitude}
          />
        </div> */}
      </div>
    );
  });
}else{
//   childrenDivs =  <div className="content-list !pt-4">
//   <div className="container">
//     <div className="sec-title text-center">
//           <h1 className="text-xl font-second-main-font !text-gray" style={{ textAlign: "center" }}>
//                     {StaticData.PagenotFound}
//                   </h1>
//           <p className="text-xl">
//           We're really sorry, we can't find any open store in {document.name}. 
//           </p>
//           <p className="text-lg mt-3 font-second-main-font">
//                     { StaticData.Youcouldtry}
//           </p>
          
//       <div className="button-bx  !flex-col max-w-[45rem] !mx-auto !mt-3">
//         <a
//           className=" max-w-[20.5rem] mx-auto border-b border-dotted hover:text-red hover:border-red "
//           href="/gb"
//         >
//       {" View all available location in United Kingdom >"}
//         </a>
//         <a
//           className="max-w-[20.5rem] mx-auto border-b border-dotted hover:text-red hover:border-red"
//           href="/"
//         >
//           {" "}
//           {StaticData.homePage}
//         </a>
//       </div>
//     </div>
//     <div className="department-sec">
//               <h3 className="text-center first-letter:text-xl font-second-main-font !text-gray">
//                 {_site.c_shopByDepartmentHeading}
//               </h3>
//               <ul className="sec-title text-center ">
//                 {_site.c_departmentsCTA.map((res: any) => {
//                   if (res.link) {
//                     return (
//                       <>
//                        <li className="mx-6"> <a href={res.link}>{res.label}</a></li>
//                       </>
//                     );
//                   }
//                 })}
//               </ul>
//             </div>
//   </div>
// </div>
}

  // let url: any = "";
  // document.dm_directoryParents && document.dm_directoryParents.map((i: any) => {
  //   if (i.meta.entityType.id == "ce_country") {
  //     url = `${i.slug}`;
  //   } else if (i.meta.entityType.id == "ce_region") {
  //     url = `${url}/${i.slug}/${document.slug.toString()}`;
  //   }
  // });

  return (
    <>
      <AnalyticsProvider
        templateData={templateData}
        enableDebugging={AnalyticsEnableDebugging}
        enableTrackingCookie={AnalyticsEnableTrackingCookie}
      >
        {" "}
        <AnalyticsScopeProvider name={""}>
          <PageLayout header={_site.c_mainSiteHeader} footer={_site.c_mainSiteFooter}>
            {/* <BreadCrumbs
              name={name}
              _site={_site}
              address={address}
              parents={dm_directoryParents}
              baseUrl={relativePrefixToRoot}
              parentstate={undefined}
              parentcountry={undefined}
            ></BreadCrumbs> */}

            <div className="content-list city-page">
              <div className="container-custom mx-auto">
                <div className="sec-title">
                  <h1>
                    {StaticData.AllStores} {name}
                  </h1>
                </div>
                {/* <div className={`flex flex-wrap justify-center items-start -mx-2.5 lg:-mx-[.9375rem] ${!dm_directoryChildren && "!block"}`}>
                  <div className={`nearby-sec-inner ${(dm_directoryChildren && dm_directoryChildren.length == 1) && "w-full"} ${!dm_directoryChildren && "!block"}`}>{childrenDivs}</div>
                </div> */}
              </div>
            </div>
          </PageLayout>
        </AnalyticsScopeProvider>
      </AnalyticsProvider>
    </>
  );
};
export default City;
