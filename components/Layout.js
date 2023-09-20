import React from "react";
import Navigation from "./Navigation";
import Head from "next/head";
import Link from "next/link";

const Layout = ({ children, activePage }) => {
  return (
    <section className="overflow-hidden">
      <Head>
        <Link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@700,500,600&display=swap"
          rel="stylesheet"
        ></Link>
        <title>{activePage} -- getlinked</title>
      </Head>
      <Navigation activePage={activePage} />
      <div>{children}</div>
    </section>
  );
};

export default Layout;
