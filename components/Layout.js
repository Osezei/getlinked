import React from "react";
import Navigation from "./Navigation";
import Head from "next/head";

const Layout = ({ children, activePage }) => {
  return (
    <section className="overflow-hidden">
      <Head>
        <title>{activePage} -- getlinked</title>
      </Head>
      <Navigation activePage={activePage} />
      <div>{children}</div>
    </section>
  );
};

export default Layout;
