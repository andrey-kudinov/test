import React from "react";
import "@/styles/reset.scss";
import "@/styles/global.scss";
import Home from ".";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
