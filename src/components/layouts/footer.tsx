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
  function convertToRtf(rtf: any) {
    rtf = rtf.replace(/\\par[d]?/g, "");
    rtf = rtf.replace(/\{\*?\\[^{}]+}|[{}]|\\\n?[A-Za-z]+\n?(?:-?\d+)?[ ]?/g, "")
    rtf = rtf.replace('/', '');
    rtf = rtf.replace('\\', '');
    rtf = rtf.replace(';', '');

    // rtf=rtf.replace('-','');
    return rtf.replace(/\\'[0-9a-zA-Z]{2}/g, "").trim();
  }

  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="company-logo">
            <img src="" />
          </div>

          <div className="link-sec-footer ">
            <div className="footer-block">
              <h4 className="footer-block-title">
                {footer.contactUsTitle}
              </h4>
              <p>{footer.address.line1}</p>
              <p>{footer.address.line2}</p>
              <p>{footer.address.line3}</p>
              <p><span>{footer.address.city}</span>,<span>{footer.address.postalCode}</span>,<span>{footer.address.country}</span></p>
            </div>
            <p className="">{footer.phone}</p>
            <p className="view-map">{footer.expandMap}</p>
          </div>
        </div>
        {/* icons */}
        <div className="copyright-bx">
          <h4 className="footer-block-title">{footer.joinTheChatterLabel}</h4>
          <ul className="flex-row mt-4 flex w-full mb-3 app-icons">
            {footer.socialIcons &&
              footer.socialIcons.map((data: any) => {
                return (
                  <>
                    <li className="mr-3">
                      <a href={data.cta.link}>
                        <img src={data.image.url}
                          className="" /> </a>
                    </li>
                  </>
                );
              })}
          </ul>
          {/* footer bottom */}
          <span className="text-xs flex-wrap" data-copyright="">
            <p>{footer.copyrightDescription}</p>
            <a href="">{footer.expandMap}</a>
          </span>
        </div>
      </footer >
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

