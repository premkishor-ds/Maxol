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
      "googlePlaceId"
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
          <PageLayout global={_site}>

            {name}

          </PageLayout>
        </AnalyticsScopeProvider>
      </AnalyticsProvider>
    </>
  );
};

export default Location;