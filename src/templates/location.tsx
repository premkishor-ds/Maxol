import * as React from "react";
import Contact from "../components/locationDetail/contact";
import Nearby from "../components/locationDetail/Nearby";
import { JsonLd } from "react-schemaorg";
import { nearByLocation } from "../types/nearByLocation";
import "../index.css";
import {
  Template,
  GetPath,
  GetRedirects,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  TransformProps,
  HeadConfig,
} from "@yext/pages";
import PageLayout from "../components/layouts/PageLayout";
import { fetch } from "@yext/pages/util";
import About from "../components/locationDetail/About";
import CustomMap from "../components/locationDetail/CustomMap";
import BreadCrumbs from "../components/layouts/Breadcrumb";
import StoreHighlight from "../components/locationDetail/SoreHighlight";
import OpenClose from "../components/commons/openClose";
import Faq from "../components/locationDetail/Faqs";
import { StaticData } from "../sites-global/staticData";
import Newsletter from "../components/locatorPage/Newsletter";
import { AnswerExperienceConfig, apiKey, experienceKey, stagingBaseurl, verticalKey, AnalyticsEnableDebugging, AnalyticsEnableTrackingCookie, favicon, metaBots, liveHomePage, logo, maxolLogo } from "../sites-global/global";
import {
  AnalyticsProvider,
  AnalyticsScopeProvider,
} from "@yext/pages/components";
import constant from "../constant";
import Facility from "../components/locationDetail/Facility";
import EngineCare from "../components/locationDetail/EngineCare";


/**
 * Required when Knowledge Graph data is used for a template.
 */
export const config: TemplateConfig = {
  stream: {
    $id: "locations",
    // Specifies the exact data that each generated document will contain. This data is passed in
    // directly as props to the default exported function.
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "address",
      "mainPhone",
      "photoGallery",
      "description",
      "dm_directoryParents.name",
      "dm_directoryParents.dm_baseEntityCount",
      "dm_directoryParents.slug",
      "dm_directoryParents.meta.entityType",
      "additionalHoursText",
      "hours",
      "slug",
      "timezone",
      "yextDisplayCoordinate",
      "displayCoordinate",
      "cityCoordinate",
      "geomodifier",
      "googlePlaceId",
      "services",
      "c_serviceLabel",
      "c_fuelsAvailableLabel",
      "c_fuelsType",
      "c_fuelCardsAcceptedLabel",
      "c_fuelCardsAccepted",
      "c_about",
      "c_engineCare"
    ],
    // Defines the scope of entities that qualify for this stream.
    filter: {
      savedFilterIds: ["1170130669"],
    },
    // The entity language profiles that documents will be generated for.
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

/**
 * Defines the path that the generated file will live at for production.
 *
 * NOTE: This currently has no impact on the local dev path. Local dev urls currently
 * take on the form: featureName/entityId
 */
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  var url = document.name;
  return url;
};
/**
 * Defines a list of paths which will redirect to the path created by getPath.
 *
 * NOTE: This currently has no impact on the local dev path. Redirects will be setup on
 * a new deploy.
 */
// export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
//   relativePrefixToRoot,
//   path,
//   document,
// }): HeadConfig => {
//   return {
//     title: document.c_meta_title ? document.c_meta_title : ` Matalan ${document.geomodifier} Store - Online Clothes Store`,
//     charset: "UTF-8",
//     viewport: "width=device-width, initial-scale=1",
//     tags: [
//       {
//         type: "meta",
//         attributes: {
//           name: "description",
//           content: `${document.c_meta_description ? document.c_meta_description : `Visit Matalan ${document.geomodifier} Store | Matalan is your local great value family retailer shop. Find latest seasonal looks for Women, Men and kids, plus a huge range of homeware.`}`,
//         },
//       },


//       {
//         type: "meta",
//         attributes: {
//           name: "author",
//           content: "Matalan",
//         },
//       },

//       {
//         type: "meta",
//         attributes: {
//           name: "robots",
//           content: metaBots,
//         },
//       },

//       {
//         type: "link",
//         attributes: {
//           rel: "canonical",
//           href: `${document._site.c_canonical ? document.c_canonical : stagingBaseurl}${document.slug ? document.slug : `${document.id}-${document.geomodifier.toLowerCase().replace(' ', '-')}`}`,
//         },
//       },

//       {
//         type: "meta",
//         attributes: {
//           property: "og:description",
//           content: `${document.c_meta_description ? document.c_meta_description : `Visit Matalan ${document.geomodifier} Store | Matalan is your local great value family retailer shop. Find latest seasonal looks for Women, Men and kids, plus a huge range of homeware.`}`,
//         },
//       },
//       {
//         type: "link",
//         attributes: {
//           rel: "shortcut icon",
//           href: favicon,
//         },
//       },
//       {
//         type: "meta",
//         attributes: {
//           property: "og:title",
//           content: document.c_meta_title ? document.c_meta_title : ` Matalan ${document.geomodifier} Store - Online Clothes Store`,
//         },
//       },
//       {
//         type: "meta",
//         attributes: {
//           property: "og:url",
//           content: `${document._site.c_canonical ? document.c_canonical : stagingBaseurl
//             }${document.slug ? document.slug : `${document.id}-${document.geomodifier.toLowerCase().replace(' ', '-')}`}`,
//         },
//       },
//       {
//         type: "meta",
//         attributes: {
//           property: "og:image",
//           content: favicon,
//         },
//       },
//       {
//         type: "meta",
//         attributes: {
//           name: "twitter:card",
//           content: "summary",
//         },
//       },
//       {
//         type: "meta",
//         attributes: {
//           name: "twitter:url",
//           content: `${document._site.c_canonical ? document.c_canonical : stagingBaseurl

//             }${document.slug ? document.slug : `${document.id}-${document.geomodifier.toLowerCase()}`}`,
//         },
//       },
//       {
//         type: "meta",
//         attributes: {
//           name: "twitter:description",
//           content: `${document.c_meta_description ? document.c_meta_description : `Visit Matalan ${document.geomodifier} Store | Matalan is your local great value family retailer shop. Find latest seasonal looks for Women, Men and kids, plus a huge range of homeware.`}`,
//         },

//       },
//       {
//         type: "meta",
//         attributes: {
//           name: "twitter:image",
//           content: "https://a.mktgcdn.com/p-sandbox/VgddlDjYzDF07X3Tw-BttjNIoMwYUaCyslD_8Khf61E/2000x1333.jpg",
//         },
//       },
//       {
//         type: "meta",
//         attributes: {
//           name: "google-site-verification",
//           content: "iWn62N3m6trq8ikZhoq2vhIQdwgVEps95PiP2uisvRE",
//         },
//       },
//       /// twitter tag
//     ],

//   };
// };
type ExternalApiData = TemplateProps & { externalApiData: nearByLocation };
export const transformProps: TransformProps<ExternalApiData> = async (
  data: any
) => {

  var location = `${data.document.yextDisplayCoordinate ? data.document.yextDisplayCoordinate.latitude : data.document.displayCoordinate.latitude},${data.document.yextDisplayCoordinate ? data.document.yextDisplayCoordinate.longitude : data.document.displayCoordinate.longitude}`;
  const url = `${AnswerExperienceConfig.endpoints.verticalSearch}?experienceKey=${experienceKey}&api_key=${apiKey}&v=20220511&version=${AnswerExperienceConfig.experienceVersion}&locale=${AnswerExperienceConfig.locale}&location=${location}&locationRadius=${AnswerExperienceConfig.locationRadius}&verticalKey=${verticalKey}&limit=4&retrieveFacets=true&skipSpellCheck=false&sessionTrackingEnabled=true&source=STANDARD`;

  const externalApiData = (await fetch(url).then((res: any) =>
    res.json()

  )) as nearByLocation;
  return { ...data, externalApiData };
};



type ExternalApiRenderData = TemplateRenderProps & {
  externalApiData: nearByLocation;
};
/* destructure the data from Document*/
const Location: Template<ExternalApiRenderData> = ({
  relativePrefixToRoot,
  path,
  document,
  __meta,
  externalApiData,
}) => {
  const {
    _site,
    id,
    name,
    address,
    slug,
    hours,
    c_specific_day,
    mainPhone,
    photoGallery,
    services,
    c_serviceLabel,
    c_fuelsAvailableLabel,
    c_fuelsType,
    c_fuelCardsAcceptedLabel,
    c_fuelCardsAccepted,
    c_about,
    c_engineCare,
    c_canonical,
    description,
    c_about_us_image,
    c_about_us_heading,
    c_about_us_description,
    dm_directoryParents,
    additionalHoursText,
    c_related_fAQs,
    c_clickCollectCta,
    c_viewMore,
    c_viewMoreFAQs,
    timezone,
    yextDisplayCoordinate,
    displayCoordinate,
    cityCoordinate,
    c_click_collect_availability,
    c_open_for_shopping,
    geomodifier,
    googlePlaceId,
    c_parking_facilities,
    c_fitting_rooms,
    c_store_name,
    c_storeInfoHeading,
    c_storeHighlightsHeading,
    c_fAQsHeading,
    c_store_highlights,
    c_nearbyStoresheading,
    c_getDirectionsCTAText,
  } = document;

  console.log(document, "documentdocument")

  let templateData = { document: document, __meta: __meta };


  return (
    <>
      {/* Analytics Provider */}
      <AnalyticsProvider
        templateData={templateData}
        enableDebugging={AnalyticsEnableDebugging}
        enableTrackingCookie={AnalyticsEnableTrackingCookie}>
        {" "}
        <AnalyticsScopeProvider name={""}>

          {/*Our Header and Footer in pagelayout component  */}
          <PageLayout header={_site.c_mainSiteHeader} footer={_site.c_mainSiteFooter}>
            {/* breadcrum */}
            {dm_directoryParents && (
            <>
              <BreadCrumbs
                  name={name}
                  parents={dm_directoryParents}
                  address={address}
                  locale={document.meta.locale}  ></BreadCrumbs>
            </>
          )}

            <div className="container">
              <div className='banner-text banner-dark-bg justify-center text-center'>
                <h1 className="">{name}</h1>
                <div className="openClosestatus detail-page closeing-div bigclose">
                  <OpenClose timezone={timezone} hours={hours} />
                </div>
              </div>
            </div>

            <div className="location-information">
              <Contact address={address} c_openForShoppingAvailibility={c_open_for_shopping}
                c_storeInfoHeading={c_storeInfoHeading}
                googlePlaceId={googlePlaceId}
                phone={mainPhone}
                latitude={yextDisplayCoordinate ? yextDisplayCoordinate.latitude : displayCoordinate?.latitude}
                yextDisplayCoordinate={yextDisplayCoordinate}
                longitude={yextDisplayCoordinate ? yextDisplayCoordinate.longitude : displayCoordinate?.longitude}
                hours={hours} additionalHoursText={additionalHoursText}
                photo={photoGallery}
              >

              </Contact>

              {hours ?
                <div className="map-sec" >
                  <CustomMap prop={yextDisplayCoordinate ? yextDisplayCoordinate : displayCoordinate} />
                </div> :
                <div className="map-sec without-hours">
                  <CustomMap prop={yextDisplayCoordinate ? yextDisplayCoordinate : displayCoordinate} />
                </div>}
            </div>

            <Facility services={services}
              serviceLabel={c_serviceLabel}
              fuelsAvailableLabel={c_fuelsAvailableLabel}
              fuelsType={c_fuelsType}
              fuelCardsAcceptedLabel={c_fuelCardsAcceptedLabel}
              fuelCardsAccepted={c_fuelCardsAccepted}
            />

            <About about={c_about} />

            <EngineCare engineCare={c_engineCare} />

            {/* Nearby Section */}
            <div className="nearby-sec">
              <div className="container-custom">
                <div className="sec-title"><h2 className="">{StaticData.NearStoretext}</h2></div>
                <div className="nearby-sec-inner">
                  {yextDisplayCoordinate || cityCoordinate || displayCoordinate ?
                    <Nearby externalApiData={externalApiData} /> : ''}
                </div>
              </div>
            </div>

          </PageLayout>
        </AnalyticsScopeProvider>
      </AnalyticsProvider>
    </>
  );
};

export default Location;