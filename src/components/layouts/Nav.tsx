import * as React from "react";
import Menu from "./Menu";
import {
  humburgerIcon,
  logo,
  Mid_Logo,
  small_logo,
} from "../../sites-global/global";
import Linking from "../commons/Link";


  const Nav = (props: any) => {
        /* This is set id in body  everytime     */
        React.useEffect(() => {
          document.body.setAttribute("id", "body");
        });
        /* This function for open menu toggle when our screen size exist in mobile size   */
        const toggle = () => {
          (document.getElementById("body") as HTMLInputElement).classList.toggle(
            "menu-opened"
          );
        };

         /* This function for Close menu toggle when our screen size exist in mobile size   */
        const RemoveMenu = () => {
          (document.getElementById("body") as HTMLInputElement).classList.remove(
            "menu-opened"
          );
        };
  return (
    <>
      {/* This is for full part logo */}
      <div className="site-header">
        <div className="header-top">
          <div className="container">
            <div className="hidden lg:block  logo">
              <div className="logo-inner">
                {props._site.c_maxol_header_logo ? (
                  <a
                    href={
                      props._site.c_maxol_header_logo.clickthroughUrl
                        ? props._site.c_maxol_header_logo.clickthroughUrl
                        : "https://www.maxol.co.uk/"
                    }
                  >
                    <img
                      src={props._site.c_maxol_header_logo.image.url}
                      height={props._site.c_maxol_header_logo.image.height}
                      width={props._site.c_maxol_header_logo.image.width}
                      alt="middlelogo"
                    />
                  </a>
                ) : (
                  <div dangerouslySetInnerHTML={{ __html: logo }} />
                )}
              </div>
            </div>
     
            <ul className="top-hdr-links left-logo">
              {props._site.c_newTopHeader &&
                props._site.c_newTopHeader.map((toplinks: any) => {
                  return (
                    <li className="px-4 inline">
                      <a href={toplinks.iconLink}>
                      <img src={toplinks.icon.url}  height={toplinks.icon.height}
                        width={toplinks.icon.width}
                        className="top-icons"/> </a>
                    </li> 
                  
                  );
                })}
            </ul>
            {/* This is for Midddle part logo */}
            <div className="block logo-large-mob lg:hidden logo">
              <div className="logo-inner">
                {props._site.c_maxol_mobile_view_header_logo ? (
                  <a
                    href={
                      props._site.c_maxol_mobile_view_header_logo
                        .clickthroughUrl
                        ? props._site.c_maxol_mobile_view_header_logo
                            .clickthroughUrl
                        : "https://www.maxol.co.uk/"
                    }
                  >
                    <img
                      src={
                        props._site.c_maxol_mobile_view_header_logo.image.url
                      }
                      alt="mobilelogo"
                    />
                  </a>
                ) : (
                  <div dangerouslySetInnerHTML={{ __html: Mid_Logo }} />
                )}
              </div>
            </div>

            <div className=" hidden logo-sm-mob logo">
              <div className="logo-inner">
                {/* This is for Small part logo */}
                <div dangerouslySetInnerHTML={{ __html: small_logo }} />
              </div>
            </div>

            <ul className="top-hdr-links">
              {props._site.c_newTopHeader &&
                props._site.c_newTopHeader.map((toplinks: any,index:number) => {
                  return (
                    <li className="px-4 inline">
                      <a href={toplinks.iconLink}>
                      <img src={toplinks.icon.url}  height={toplinks.icon.height}
                        width={toplinks.icon.width}
                        alt={`topicon-${index}`}
                        className="top-icons"/> </a>
                    </li> 
                  
                  );
                })}
            </ul>
          </div>
        </div>

        <div className="main-nav" onClick={RemoveMenu}>
          <div className="container">
            <Menu c_maxolMenu={props._site} />
          </div>
        </div>

        <button
          type="button"
          className="menu-btn"
          id="menu-btn"
          onClick={toggle}
        >
          <span dangerouslySetInnerHTML={{ __html: humburgerIcon }} />
        </button>
      </div>
    </>
  );
};

export default Nav;
