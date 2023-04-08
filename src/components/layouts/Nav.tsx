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
      <div>
        <div>
          <div className="icon">
            {/* <img src="" alt="" /> */}
            <a href="">

            </a>
          </div>
          <div>
            <div className="top-nav">
              <ul className="">
                {props.header?.topNavigation &&
                  props.header?.topNavigation.map((data: any) => {
                    return (
                      <li className="">
                        <a href={data.link}>{data.label}</a>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className="social-icon">
              <ul className="">
                {props.header?.socialIcon &&
                  props.header?.socialIcon.map((data: any) => {
                    return (
                      <li className="">
                        <a href={data.cta.link}>
                          <img src={data.image.url}
                            className="" /> </a>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
          <div className="main-nav">
            <ul className="">
              {props.header?.mainNavigation &&
                props.header?.mainNavigation.map((data: any) => {
                  return (
                    <li className="">
                      <a href={data.link}>{data.label}</a>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
        <div>

        </div>
      </div>
    </>
  );
};

export default Nav;
