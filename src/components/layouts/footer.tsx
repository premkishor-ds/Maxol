import * as React from "react";
import "../../index.css";
import { cookieText, cookiesUrl } from "../../sites-global/global";
import CookieConsent from "react-cookie-consent";
import { StaticData } from "../../sites-global/staticData";
import { useEffect, useState } from "react";
import FooterAccordian from "../commons/FooterAccordian";
import { Link } from "@yext/pages/components";
import Linking from "../commons/Link";

const Footer = (props: any) => {
  const { footer } = props;
  const [isSmallScreen, setIsSmallScreen] = useState(false);

/* When this component render very first time then this UseEffect will run and Check our screen size
and call handleMediaQueryChange function */  
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1023px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

/* This handleMediaQueryChange function check if screen is small it will update ouir state (setIsSmallScreen)*/  
  const handleMediaQueryChange = (mediaQuery: any) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };
  function convertToRtf(rtf:any) {
    rtf = rtf.replace(/\\par[d]?/g, "");
    rtf = rtf.replace(/\{\*?\\[^{}]+}|[{}]|\\\n?[A-Za-z]+\n?(?:-?\d+)?[ ]?/g, "")
    rtf=rtf.replace('/','');
    rtf=rtf.replace('\\','');
    rtf=rtf.replace(';','');
    
    // rtf=rtf.replace('-','');
    return rtf.replace(/\\'[0-9a-zA-Z]{2}/g, "").trim();
}

  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="store-locator">
            {footer.c_store_finder.map((storfinder: any, index: number) => {
              return (
                <>
                  <div className="store-inner" key={index}>
                    <img src={storfinder.icon.url} alt="ctalabel" 
                    height={storfinder.icon.height}
                    width={storfinder.icon.width}/>
                    <Linking props={storfinder.cTA}/>
                  </div>
                </>
              );
            })}

            <div className="store-inner">
              <img src={footer.c_fAQs.icon.url} 
               height={footer.c_fAQs.icon.height}
               width={footer.c_fAQs.icon.width}
              alt="faqlabel" />
              <Linking props={footer.c_fAQs.cTA}/>
            </div>
          </div>
          {!isSmallScreen ? (
            <div className="link-sec-footer ">
              <div className="footer-block">
                <h4 className="footer-block-title">
                  {footer.c_customer_services.headerLinksHeading}
                </h4>
                <ul className="list-none">
                  {footer.c_customer_services.iconCTA.map(
                    (customerService: any, index: number) => {
                      return (
                        <li key={index}>
                           <Linking props={customerService.cTA}/>
                        </li>
                      );
                    }
                  )}
                </ul>
              </div>
              <div className="footer-block">
                <h4 className="footer-block-title">
                  {footer.c_about_maxol.headerLinksHeading}
                </h4>
                <ul className="list-none">
                  {footer.c_about_maxol.headerLinks.map(
                    (aboutmaxol: any, index: number) => {
                      return (
                        <li key={index}>
                           <Linking props={aboutmaxol}/>
                        </li>
                      );
                    }
                  )}
                </ul>
              </div>
              <div className="footer-block">
                <h4 className="footer-block-title">
                  {footer.c_our_website.headerLinksHeading}
                </h4>
                <ul className="list-none">
                  {footer.c_our_website.headerLinks.map(
                    (ourWebsite: any, index: number) => {
                      return (
                        <li key={index}>
                           <Linking props={ourWebsite}/>
                        </li>
                      );
                    }
                  )}
                </ul>
              </div>
            </div>
          ) : (
            <FooterAccordian footer={footer} />
          )}
          <div className="copyright-bx">
            <h4 className="footer-block-title">{footer.c_appSectionText}</h4>
            <ul className="flex-row mt-4 flex w-full mb-3 app-icons">
              {footer.c_app_icon.map((appicon: any, index: number) => {
                return (
                  <>
                    <li className="mr-3" key={index}>
                    <Linking props={appicon.cTA} icon={appicon.icon} iconwidth={appicon.icon.width} 
                     iconheight={appicon.icon.height}
                    iconalt="applabel"/>
                    </li>
                  </>
                );
              })}
            </ul>
            <ul className="social-media-bx">
              {footer.c_socialIcons.map((icon: any, index: number) => {
                return (
                  <>
                    <li className="" key={index}>
                      {" "}
                       <Linking 
                       props={icon.cTA}
                       iconClass="inline-block w-5 h-auto"
                       iconwidth={20}
                       iconheight={21}
                        icon={icon.icon} iconalt="twitter"/>
                    </li>
                  </>
                );
              })}
            </ul>

            <span className="text-xs flex-wrap" data-copyright="">
              {convertToRtf(footer.c_footerDescription)}
            </span>

            <div className="company-logo">
              <img src={footer.c_maxol_footer_logo.url} width={footer.c_maxol_footer_logo.width} 
              height={footer.c_maxol_footer_logo.height}
              alt="footerlogo" />
            </div>
          </div>
        </div>
      </footer>

      <CookieConsent
        buttonText={StaticData.CookiebuttonText}
        buttonStyle={{
          marginLeft: "100px",
        }}
      >
        <p>
          {cookieText}
          <Link
            className="text-cookies-link"
            href={cookiesUrl}
            data-ya-track={`cookie`}
            eventName={`cookie`}
            rel="noopener noreferrer"
          >
            {StaticData.cookie}
          </Link>
          .
        </p>
      </CookieConsent>
    </>
  );
};

export default Footer;

