import * as React from "react";
import { StaticData } from "../../sites-global/staticData";
import alterimage from "../../images/Group.png";
import { Link } from "@yext/pages/components";
import Linking from "../commons/Link";
import { Image } from "@yext/pages/components"

export default function StoreHighlight(props: any) {
  return (
    <div className="container-custom mx-auto">
      <div className="sec-title">
        <h2>
          {props.c_storeHighlightsHeading
            ? `${props.c_store_name?props.c_store_name:''} ${props.c_storeHighlightsHeading}`
            : `${StaticData.Brandname} ${props.name} ${StaticData.Storehighlight}`}
        </h2>
      </div>

      <div className="services-inner">
        {props.c_storeHighlightInfo.map((res: any, i: number) => {
          return (
            <>
             
                <div className="item" key={i}>
                  <div className="service-item">
                    <div className="service-img">
                      {res.image ? (
                     <Image image={res.image.image} layout="fixed" width={430} height={208}/>
                      ) : (
                        <img
                          className="w-full"
                          src={alterimage}
                          height="250"
                          alt="url"
                        />
                      )}
                    </div>
                    <div className="service-desc-main">
                      
                      <h3>{res.title ? res.title :''}</h3>
                      <div className="service-desc">{res.description ? res.description :''}</div>
                      {res.findOutMore && res.findOutMore.link && res.findOutMore.label ? (
                        <div className="button-bx !ml-0 mt-4">
                            <Linking props={res.findOutMore} btnclass="btn"/>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>{" "}
                </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
