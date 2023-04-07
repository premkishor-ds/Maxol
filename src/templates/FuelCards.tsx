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
  maxolLogo,
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
    $id: "Fuel-Cards",
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "c_fuelCardBanner",
      "c_takeControl",
      "c_fuelCardsLists",
      "c_businessTitle",
      "c_cardsLists",
      "c_requestCallBack",
      "c_whyChooseMaxol",
      "c_accountBenefits",
      "c_faqs",
      "c_certifiedQuality",
      "c_testimonialsTitle",
      "c_testimonialsSection",
      "c_subSection",
      "c_certified"
    ],
    filter: {
      entityIds: ["Fuel-Cards"],
    },
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};
export const getPath: GetPath<TemplateProps> = ({ document }) => {

  let url: any = "";
  if (typeof document.dm_directoryParents != 'undefined' && document.dm_directoryParents.length > 0) {
    document.dm_directoryParents.map((i: any) => {
      if (i.meta.entityType.id == "ce_country") {
        url = `${i.slug}`;
      } else if (i.meta.entityType.id == "ce_region") {
        url = `${url}/${i.slug}/${document.slug.toString()}`;
      }
    });
  }
  else {
    url = "gb/" + constant.slugify(document.name);
  }
  return url;
};



export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  document,
}): HeadConfig => {
  let canonical = "";

  if (typeof document.dm_directoryChildren != 'undefined' && document.dm_directoryChildren.length > 0) {
    document.dm_directoryChildren.map((entity: any) => {
      canonical =
        entity.address.countryCode.toLowerCase().replaceAll(" ", "-") +
        "/" +
        entity.address.region.toLowerCase().replaceAll(" ", "-");
    });
  }

  return {
    title: `${document.c_meta_title
      ? document.c_meta_title
      : `maxol Stores in ${document.name} | Find a Local Store`
      }`,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
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
          content: "maxol",
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
          href: `${document.c_canonical
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
          content: `${document.c_canonical
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
          content: `${document.c_canonical
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

const Fuel_Cards: Template<TemplateRenderProps> = ({
  path,
  __meta,
  document,
}) => {
  const {
    name,
    _site,
  } = document;
  console.log(document, "document");
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
          <PageLayout global={_site}>


            <div className="topbanner">
              <img src={document.c_fuelCardBanner.url} alt="" />
            </div>
            <div className="">
              <div className="takeControl">
                <p>{document.c_takeControl.title}</p>
                <p>{document.c_takeControl.description}</p>
              </div>
              <div className="fuelCardsLists">
                <ul>
                  {document.c_fuelCardsLists.ctas.map((data: any) => {
                    return (
                      <li><a href="#">{data.label}</a></li>
                    )
                  }
                  )}
                </ul>
              </div>
            </div>

            <div className="businessTitle">
              <p>{document.c_businessTitle}</p>
              {document.c_cardsLists.map((data: any) => {
                return (
                  <div>
                    <p>{data.title}</p>
                    <img src={data.image.url} alt="" />
                    <p>{data.description}</p>
                  </div>
                )
              }
              )}
            </div>

            <div className="requestCallBack">
              <div>
                <p>{document.c_requestCallBack.section.title}</p>
                <p>{document.c_requestCallBack.section.description}</p>
                <a href="#">{document.c_requestCallBack.cta.label}</a>
              </div>
            </div>

            <div className="">
              <div className="Benefits">
                <div>
                  <p>{document.c_accountBenefits.title}</p>
                  <p>{document.c_accountBenefits.description}</p>
                </div>
                <div className="faqs">
                  {document.c_faqs.map((data: any) => {
                    return (
                      <div>
                        <p>{data.title}</p>
                        <p>{data.description}</p>
                      </div>
                    )
                  }
                  )}
                </div>
              </div>
              <div className="choose">
                <p>{document.c_whyChooseMaxol.title}</p>
                {document.c_whyChooseMaxol.lists.map((data: any) => {
                  <ul>
                    return(
                    <li>{data}</li>
                    )
                  </ul>
                }
                )}
              </div>
            </div>

            <div className="certifiedQuality">
              <div>
                <img src={document.c_certifiedQuality.image.url} alt="" />
              </div>
              <div>
                <p>{document.c_certifiedQuality.title}</p>
                <p>{document.c_certifiedQuality.description}</p>
              </div>
            </div>

            <div className="testimonials">
              <p>{document.c_testimonialsTitle}</p>
              <div>
                <div>
                  <img src={document.c_testimonialsSection.image.url} alt="" />
                </div>
                <div>
                  <p>{document.c_testimonialsSection.title}</p>
                  <p>{document.c_testimonialsSection.description}</p>
                </div>
              </div>
            </div>

            <div className="subSection">
              {document.c_subSection.map((data: any) => {
                return (
                  <div>
                    <img src={data.photo.url} alt="" />
                    <div>
                      <p>{data.title}</p>
                      <a href="#">{data.cta.label}</a>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="certified">
               <img src={document.c_certified.image.url} alt="" />
               <div>
                <p>{document.c_certified.title}</p>
                <p>{document.c_certified.description}</p>
               </div>
            </div>

          </PageLayout>
        </AnalyticsScopeProvider>
      </AnalyticsProvider>
    </>
  );
};
export default Fuel_Cards;