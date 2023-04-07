import * as React from "react";
import Linking from "../commons/Link";
import { humburgerIcon, logo } from "../../sites-global/global";

function Menu(props: any) {
  const toggle = () => {
    (document.getElementById("body") as HTMLInputElement).classList.toggle(
      "menu-opened"
    );
  };
  return (
    <>
      <ul className="primary-nav">
        <li>
          <button
            type="button"
            className="menu-btn"
            id="menu-btn2"
            onClick={toggle}
          >
            <span dangerouslySetInnerHTML={{ __html: humburgerIcon }} />
          </button>
        </li>

        {props.c_maxolMenu.c_header_links.map((item: any, i: number) => {
          return (
            <>
              <li className={item.label === "Sale" ? "sales":''}>
                <Linking props={item} />
              </li>
            </>
          );
        })}
  
      </ul>
    </>
  );
}

export default Menu;
