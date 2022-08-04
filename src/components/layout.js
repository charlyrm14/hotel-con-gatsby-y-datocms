import * as React from "react";
import { Helmet } from "react-helmet";
import { Global, css } from "@emotion/react";
import Header from "./header";
import Footer from "./footer";
import useSeo from "../hooks/useSeo";


const Layout = ({ children }) => {

  const seo = useSeo();

  const { fallbackSeo: { description, title } } = seo;

  return(
    <>
      <Global
        styles={ css`
          *, *:before, *:after {
            box-sizing: inherit;
          }

          html {
            font-size: 62.5%;
            box-sizing: border-box;
            font-family: 'Mukta', sans-serif;
          }

          body {
            font-size: 18px;
            font-size: 1.8rem;
            line-height: 1.5;
          }

          h1, h2, h3 {
            margin: 0;
            line-height: 1.5;
          }

          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }

        ` }
      />

      <Helmet>
        <title> { title } </title>
        <meta name="description" content={ description }/>
        <link rel="stylesheet" 
              href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" 
              crossorigin="anonymous" 
              referrerpolicy="no-referrer" />
        <link rel="preconnect" 
              href="https://fonts.googleapis.com" />
        <link rel="preconnect" 
              href="https://fonts.gstatic.com" 
              crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Mukta:wght@200;400;700&display=swap" 
              rel="stylesheet" />
      </Helmet>
      <Header/>

      { children }

      <Footer title={ title }/>

    </>
  )
}

export default Layout
