import * as React from "react";
import "../index.css";
import {
  GetHeadConfig,
  GetPath,
  HeadConfig,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import { SearchHeadlessProvider } from "@yext/search-headless-react";
import PageLayout from "../components/layouts/PageLayout";
import SearchLayout from "../components/locatorPage/SearchLayout";
import {
  experienceKey,
  apiKey,
  verticalKey,
  stagingBaseurl,
  AnswerExperienceConfig,
  logo,
  AnalyticsEnableDebugging,
  AnalyticsEnableTrackingCookie,
  metaBots,
  liveHomePage,
  favicon,
  matalanLogo,
} from "../sites-global/global";
import Newsletter from "../components/locatorPage/Newsletter";
import { JsonLd } from "react-schemaorg";
import { StaticData } from "../sites-global/staticData";
import {
  AnalyticsProvider,
  AnalyticsScopeProvider,
} from "@yext/pages/components";

export const config: TemplateConfig = {
  stream: {
    $id: "Locator",
    // Specifies the exact data that each generated document will contain. This data is passed in
    // directly as props to the default exported function.
    fields: [
      "name"
    ],
    // Defines the scope of entities that qualify for this stream.
    filter: {
      entityIds: ["global-data"],
    },
    // The entity language profiles that documents will be generated for.
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

export const getPath: GetPath<TemplateProps> = () => {
  return `/index.html`;
};
export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {
  return {
    charset: "UTF-8",
    title: `${
      document.c_meta_title ? document.c_meta_title : StaticData.Meta_title
    }`,
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: `${
            document.c_meta_description
              ? document.c_meta_description
              : StaticData.Meta_description
          }`,
        },
      },

      {
        type: "meta",
        attributes: {
          name: "author",
          content: "Matalan",
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
          rel: "shortcut icon",
          href: favicon,
        },
      },

      {
        type: "link",
        attributes: {
          rel: "canonical",
          href: "#",
        },
      },
      {
        type: "meta",
        attributes: {
          property: "og:url",
          content: `${stagingBaseurl}`,
        },
      },

      {
        type: "meta",
        attributes: {
          property: "og:description",
          content: `${
            document.c_meta_description
              ? document.c_meta_description
              : StaticData.Meta_description
          }`,
        },
      },
      {
        type: "meta",
        attributes: {
          property: "og:title",
          content: `${
            document.c_meta_title
              ? document.c_meta_title
              : StaticData.Meta_title
          }`,
        },
      },
      {
        type: "meta",
        attributes: {
          property: "og:image",
          content: `https://a.mktgcdn.com/p-sandbox/VgddlDjYzDF07X3Tw-BttjNIoMwYUaCyslD_8Khf61E/2000x1333.jpg`,
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
          content: `${stagingBaseurl}`,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:description",
          content: `${
            document.c_meta_description
              ? document.c_meta_description
              : StaticData.Meta_description
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

const Locator: Template<TemplateRenderProps> = ({ __meta, document }) => {
  const { _site } = document;
  const templateData = { document: document, __meta: __meta };

  return (
    <>
      <AnalyticsProvider
        templateData={templateData}
        enableDebugging={AnalyticsEnableDebugging}
        enableTrackingCookie={AnalyticsEnableTrackingCookie}
      >
        {" "}
        <AnalyticsScopeProvider name={""}>
          <PageLayout global={_site}>
            <SearchHeadlessProvider
              experienceKey={experienceKey}
              locale={AnswerExperienceConfig.locale}
              apiKey={apiKey}
              verticalKey={verticalKey}
              experienceVersion="STAGING"
              sessionTrackingEnabled={true}
              endpoints={AnswerExperienceConfig.endpoints}
            >
              <SearchLayout _site={_site} mode={__meta.mode} />
            </SearchHeadlessProvider>
          </PageLayout>
        </AnalyticsScopeProvider>
      </AnalyticsProvider>
    </>
  );
};

export default Locator;
