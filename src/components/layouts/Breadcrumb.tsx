import * as React from "react";
import { Link } from "@yext/pages/components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useEffect } from "react";
import "swiper/css";
import { stagingBaseurl } from "../../sites-global/global";

type data = {
  name: any;
  parents: any;
  address: any;
  locale: any;
};

const BreadCrumbs = (props: data) => {
  const [list, setList] = React.useState(null);

  var breadcrumbs;
  var data: any = [];
  React.useEffect(() => {
    setURL(props);
  }, [setList]);
  const regionNames = new Intl.DisplayNames(
    [props.locale ? props.locale : "en"],
    { type: "region" }
  );
  const [timeout, setTimeout] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeout(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const setURL = (res: any) => {
    console.log(res,"res")
    if (res.parents) {
      for (let i = 0; i < res.parents.length; i++) {
        if (res.parents[i].meta.entityType.id == "ce_country") {
          try {
            res.parents[i].name = regionNames.of(res.parents[i].name);
          } catch (error) {
            res.parents[i].name = res.parents[i].name;
          }
          res.parents[i].slug =
             res.parents[i].slug;

          data.push({
            name: res.parents[i].name,
            slug: res.parents[i].slug,
          });
        } else if (res.parents[i].meta.entityType.id == "ce_region") {
          res.parents[i].name = res.parents[i].name;
          res.parents[i].slug =
            res.parents[i - 1].slug + "/" + res.parents[i].slug;
          data.push({
            name: res.parents[i].name,
            slug: res.parents[i].slug,
          });
        } else if (res.parents[i].meta.entityType.id == "ce_city") {
          res.parents[i].name = res.parents[i].name;
          res.parents[i].slug =
            res.parents[i - 1].slug + "/" + res.parents[i].slug;
          data.push({
            name: res.parents[i].name,
            slug: res.parents[i].slug,
          });
        }
      }

      breadcrumbs = data.map((crumb: any, index: any) => (
        <li key={crumb.slug}>
          <Link
            href={
              "/" + crumb.slug + ".html"
            }
            rel="noopener noreferrer"
            eventName={"BreadCrumbs" + (index + 1)}
            style={{ color: "#3a356e" }}
          >
            {crumb.name}
          </Link>
        </li>
      ));
      setList(breadcrumbs);
    } else {
      setList(null);
    }
  };


  return (
    <>
      {timeout ? (
        <Skeleton count={1} />
      ) : (
        <>
          <div className="breadcrumb">
            <div className="container-custom ">
              <ul className="flex">
                <li>
                  <a className="home" href="index.html">Home</a>
                </li>
                {list ? (
                  list
                ) : (
                  <>
                    {props.address && props.address.city ? (
                      <li className="inline-block">
                        {" "}
                        <a
                          href={props.address.city + ".html"}
                          style={{ color: "#3a356e" }}
                        >
                          {props.address.city ? props.address.city : ""}
                        </a>
                      </li>
                    ) : (
                      <></>
                    )}
                  </>
                )}
                <li style={{ color: "#3a356e" }}>{props && props.name}</li>
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default BreadCrumbs;
