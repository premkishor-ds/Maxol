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
} from "@yext/pages";
import BreadCrumbs from "../components/layouts/Breadcrumb";
import { StaticData } from "../sites-global/staticData";
import PageLayout from "../components/layouts/PageLayout";
import {
  AnalyticsEnableDebugging,
  AnalyticsEnableTrackingCookie,
  favicon,
  liveHomePage,
  logo,
  maxolLogo,
  metaBots,
  regionNames,
  stagingBaseurl,
} from "../sites-global/global";
import {
  AnalyticsProvider,
  AnalyticsScopeProvider,
  Link,
} from "@yext/pages/components";
import { JsonLd } from "react-schemaorg";
import constant from "../constant";

/**
 * Required when Knowledge Graph data is used for a template.
 */
let currentUrl = "";
export const config: TemplateConfig = {
  stream: {
    $id: "stores",
    // Specifies the exact data that each generated document will contain. This data is passed in
    // directly as props to the default exported function.
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "slug",
      "dm_directoryChildren.name",
      "dm_directoryChildren.address",
      "dm_directoryChildren.slug",
      "dm_directoryChildren.dm_baseEntityCount"
    ],
    // Defines the scope of entities that qualify for this stream.
    filter: {
      entityIds: ["stores-directory"],
    },
    // The entity language profiles that documents will be generated for.
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  currentUrl = "/" + document.slug.toString() + ".html";
  return "/" + document.slug.toString() + ".html";
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  document,
}): HeadConfig => {
  return {
    title: `${document.c_meta_title
        ? document.c_meta_title
        : `maxol Stores in ${document.name} | Find a Local Store`
      }`,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
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
          name: "description",
          content: `${document.c_meta_description
              ? document.c_meta_description
              : `Use this page to find your nearest maxol store in ${document.name} and discover the location details you need to visit us today.`
            }`,
        },
      },

      {
        type: "meta",
        attributes: {
          name: "author",
          content: StaticData.Brandname,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "keywords",
          content: document.name,
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
          href: `${stagingBaseurl
              ? stagingBaseurl + document.slug + ""
              : "/" + document.slug + ""
            }`,
        },
      },
      //   // /og tags

      {
        type: "meta",
        attributes: {
          property: "og:url",
          content: `${stagingBaseurl
              ? stagingBaseurl + document.slug + ""
              : "/" + document.slug + ""
            }`,
        },
      },
      {
        type: "meta",
        attributes: {
          property: "og:description",
          content: `${document.c_meta_description
              ? document.c_meta_description
              : `Use this page to find your nearest maxol store in ${document.name} and discover the location details you need to visit us today.`
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
          content: `${stagingBaseurl
              ? stagingBaseurl + document.slug + ""
              : "/" + document.slug + ""
            }`,
        },
      },

      {
        type: "meta",
        attributes: {
          name: "twitter:description",
          content: `${document.c_meta_description
              ? document.c_meta_description
              : `Use this page to find your nearest maxol store in ${document.name} and discover the location details you need to visit us today.`
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

const root: Template<TemplateRenderProps> = ({
  __meta,
  relativePrefixToRoot,
  document,
}) => {
  const {
    name,
    slug,
    _site,
    dm_directoryChildren,
  } = document;
  const breadcrumbScheme: any = [];
  breadcrumbScheme.push({
    "@type": "ListItem",
    position: 0,
    item: {
      "@id": "ggg",
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
    }, {
    "@type": "ListItem",
    position: 2,
    item: {
      "@id": `${stagingBaseurl}${document.slug.toString()}`,
      name: document.name,
    },
  });

  const templateData = { document: document, __meta: __meta };
  const childrenDivs = dm_directoryChildren
    ? dm_directoryChildren.map((entity: any) => {
      let detlslug = entity.slug + ".html";
      return (
        <li className=" storelocation-category" key={entity.slug}>
          <Link
            key={entity.slug}
            href={detlslug}
            data-ya-track={`dm-${entity.name}`}
            eventName={`dm-${entity.name}`}
            rel="noopener noreferrer"
          >
            {entity.name} ({entity.dm_baseEntityCount})
          </Link>
        </li>
      );
    })
    : null;

  return (
    <>
      <JsonLd<Organization>
        item={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "maxol",
          url: liveHomePage,
          logo: maxolLogo,
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
          <PageLayout header={_site.c_mainSiteHeader} footer={_site.c_mainSiteFooter}>
            {/* <BreadCrumbs
              name={regionNames.of(name)}
              _site={_site}
              address={address}
              parents={dm_directoryParents}
              baseUrl={relativePrefixToRoot} parentstate={undefined} parentcountry={undefined}></BreadCrumbs> */}

            <div className="content-list">
              <div className="container-custom">
                <div className="sec-title">
                  <h1 style={{ textAlign: "center" }}>
                    {StaticData.AllStores} {name}
                  </h1>
                </div>

                <ul className="region-list">{childrenDivs}</ul>
              </div>
            </div>
          </PageLayout>
        </AnalyticsScopeProvider>
      </AnalyticsProvider>
    </>
  );
};

export default root;
