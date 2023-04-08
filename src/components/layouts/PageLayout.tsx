import * as React from "react";
import Footer from "./footer";
import Nav from "./Nav";

type Props = {
    title?: string;
    header:any;
    footer:any;
    children?: React.ReactNode;
};
  
  const PageLayout = ({
    children,
    header,
    footer
  }: Props) => {
    return (
        <>
        {typeof header!="undefined"?
            <Nav header={header} />:''}

        {/* All the section under in header and footer will coming in childer node */}
                {children}

        {typeof footer!="undefined"?
            <Footer footer={footer} />
            :''}
        </>
    );
  };

export default PageLayout;
  