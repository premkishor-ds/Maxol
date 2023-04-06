import * as React from "react";
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
  matalanLogo,
  metaBots,
  stagingBaseurl,
} from "../sites-global/global";
import { JsonLd } from "react-schemaorg";
import PageLayout from "../components/layouts/PageLayout";
import {
  AnalyticsProvider,
  AnalyticsScopeProvider,
  Link,
} from "@yext/pages/components";
import constant from "../constant";
export const config: TemplateConfig = {
  stream: {
    $id: "fuel",
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "c_fuelPhoto",
      "c_fuelText",
      "c_fuelLists",
      "c_fuelsSection",
      "c_environmentallyFriendly",
      "c_bottomSection"
    ],
    filter: {
      entityIds: ["fuel"],
    },
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  console.log(document,"document");
  let url: any = "";
    if(typeof document.dm_directoryParents != 'undefined' && document.dm_directoryParents.length > 0){ 
    document.dm_directoryParents.map((i: any) => {
      if (i.meta.entityType.id == "ce_country") {
        url = `${i.slug}`;
      } else if (i.meta.entityType.id == "ce_region") {
        url = `${url}/${i.slug}/${document.slug.toString()}`;
      }
    });
  }
  else{
    url = "gb/" + constant.slugify(document.name);
  }
  return url;
};



export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  document,
}): HeadConfig => {
  let canonical = "";
  
  if(typeof document.dm_directoryChildren != 'undefined' && document.dm_directoryChildren.length > 0){ 
    document.dm_directoryChildren.map((entity: any) => {
      canonical =
        entity.address.countryCode.toLowerCase().replaceAll(" ", "-") +
        "/" +
        entity.address.region.toLowerCase().replaceAll(" ", "-");
    });
  }

  return {
    title: `${
      document.c_meta_title
        ? document.c_meta_title
        : `Matalan Stores in ${document.name} | Find a Local Store`
    }`,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: `${
            document.c_meta_description
              ? document.c_meta_description
              : `Use this page to find your nearest Matalan store in ${document.name} and discover the location details you need to visit us today.`
          }`,
        },
      },
      {
        type: "link",
        attributes: {
          rel: "shortcut icon",
          href: favicon,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "author",
          content: "MATALAN",
        },
      },

      {
        type: "meta",
        attributes: {
          name: "robots",
          content: metaBots,
        },
      },

      {
        type: "link",
        attributes: {
          rel: "canonical",
          href: `${
            document.c_canonical
              ? document.c_canonical +
                "/" +
                canonical +
                "/" +
                document.slug +
                ""
              : stagingBaseurl
              ? stagingBaseurl + canonical + "/" + document.slug + ""
              : "/" + document.slug + ""
          }`,
        },
      },
      // /og tags

      {
        type: "meta",
        attributes: {
          property: "og:url",
          content: `${
            document.c_canonical
              ? document.c_canonical +
                "/" +
                canonical +
                "/" +
                document.slug +
                ""
              : stagingBaseurl
              ? stagingBaseurl + canonical + "/" + document.slug + ""
              : "/" + document.slug + ""
          }`,
        },
      },
      {
        type: "meta",
        attributes: {
          property: "og:description",
          content: `${
            document.c_meta_description
              ? document.c_meta_description
              : `Use this page to find your nearest Matalan store in ${document.name} and discover the location details you need to visit us today.`
          }`,
        },
      },
      {
        type: "meta",
        attributes: {
          property: "og:title",
          content: `${document.name}`,
        },
      },
      {
        type: "meta",
        attributes: {
          property: "og:image",
          content: favicon,
        },
      },

      {
        type: "meta",
        attributes: {
          name: "twitter:card",
          content: "summary",
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:url",
          content: `${
            document.c_canonical
              ? document.c_canonical +
                "/" +
                canonical +
                "/" +
                document.slug +
                ""
              : stagingBaseurl
              ? stagingBaseurl + canonical + "/" + document.slug + ""
              : "/" + document.slug + ""
          }`,
        },
      },

      {
        type: "meta",
        attributes: {
          name: "twitter:description",
          content: `${
            document.c_meta_description
              ? document.c_meta_description
              : `Use this page to find your nearest Matalan store in ${document.name} and discover the location details you need to visit us today.`
          }`,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:image",
          content:
            "https://a.mktgcdn.com/p-sandbox/VgddlDjYzDF07X3Tw-BttjNIoMwYUaCyslD_8Khf61E/2000x1333.jpg",
        },
      },
      {
        type: "meta",
        attributes: {
          name: "google-site-verification",
          content: "iWn62N3m6trq8ikZhoq2vhIQdwgVEps95PiP2uisvRE",
        },
      },
    ],
  };
};

const Fuel: Template<TemplateRenderProps> = ({
  path,
  __meta,
  document,
}) => {
  const {
    name,
    _site,
  } = document;

  const templateData = { document: document, __meta: __meta };
  let url: any = "";
  document.dm_directoryParents && document.dm_directoryParents.map((i: any) => {
    if (i.meta.entityType.id == "ce_country") {
      url = `${i.slug}`;
    } else if (i.meta.entityType.id == "ce_region") {
      url = `${url}/${i.slug}/${document.slug.toString()}`;
    }
  });
  const breadcrumbScheme: any = [];
  breadcrumbScheme.push({
    "@type": "ListItem",
    position: 0,
    item: {
      "@id": "#",
      name: "Home",
    },
  },
  {
    "@type": "ListItem",
    position: 1,
    item: {
      "@id": stagingBaseurl,
      name: StaticData.Store_locator,
    },
  });
  document.dm_directoryParents &&
    document.dm_directoryParents.map((i: any, index: any) => {
      if (i.meta.entityType.id == "ce_country") {
        document.dm_directoryParents[index].name =
          document.dm_directoryParents[index].name;
        document.dm_directoryParents[index].slug =
          document.dm_directoryParents[index].slug;

        breadcrumbScheme.push({
          "@type": "ListItem",
          position: 2,
          item: {
            "@id":
              stagingBaseurl +
              document.dm_directoryParents[index].slug +
              "",
            name: i.name,
          },
        });
      } else if (i.meta.entityType.id == "ce_region") {
        let url = "";
        document.dm_directoryParents.map((j: any) => {
          if (
            j.meta.entityType.id != "ce_region" &&
            j.meta.entityType.id != "ce_city" &&
            j.meta.entityType.id != "ce_root"
          ) {
            url = url + j.slug;
          }
        });
        breadcrumbScheme.push({
          "@type": "ListItem",
          position: 3,
          item: {
            "@id":
              stagingBaseurl +
              url +
              "/" +
              document.dm_directoryParents[index].slug +
              "",
            name: i.name,
          },
        });
      }
    });

  breadcrumbScheme.push({
    "@type": "ListItem",
    position: 4,
    item: {
      "@id": `${stagingBaseurl}${path}`,
      name: document.name,
    },
  });
  return (
    <>
      <JsonLd<Organization>
        item={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "MATALAN",
          url: liveHomePage,
          logo: matalanLogo,
        }}
      />
      <JsonLd<BreadcrumbList>
        item={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: breadcrumbScheme,
        }}
      />
      <AnalyticsProvider
        templateData={templateData}
        enableDebugging={AnalyticsEnableDebugging}
        enableTrackingCookie={AnalyticsEnableTrackingCookie}
      >
        {" "}
        <AnalyticsScopeProvider name={""}>
          <PageLayout global={_site}>


            <div className="content-list city-page">
              <div className="container-custom mx-auto">
               {name}
              </div>
            </div>
          </PageLayout>
        </AnalyticsScopeProvider>
      </AnalyticsProvider>
    </>
  );
};
export default Fuel;