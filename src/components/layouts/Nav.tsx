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
      <div className="site-header">
        <div className="header-top">
          <div className="container">
            <div className="hidden lg:block  logo">
              <div className="logo-inner">
                <a href="">
                  <img src="" />
                </a>
              </div>
            </div>
            <ul className="top-hdr-links">
              {props.header?.topNavigation &&
                props.header?.topNavigation.map((data: any) => {
                  return (
                    <li className="px-4 inline">
                     <a href={data.link}>{data.label}</a>
                    </li>
                  );
                })}
            </ul>
            <ul className="top-hdr-links">
            {props.header?.socialIcon &&
                  props.header?.socialIcon.map((data: any) => {
                  return (
                    <li className="px-4 inline">
                      <a href={data.cta.link}>
                        <img src={data.image.url} 
                          className="top-icons" /> </a>
                    </li>

                  );
                })}
            </ul>
            <ul className="top-hdr-links">
            {props.header?.mainNavigation &&
                props.header?.mainNavigation.map((data: any) => {
                  return (
                    <li className="px-4 inline">
                      <a href={data.link}>{data.label}</a>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
