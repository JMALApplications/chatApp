import React from "react";
import { graphql } from "gatsby";
import Header from "../components/header/header";
import HomeSlider from "../components/home-slider/home-slider";
import Footer from "../components/footer/footer";

export default function Home({data}) {
  return (

    <div>

      <Header siteTitle={data.site.siteMetadata.title} />
      <HomeSlider />
      <Footer siteTitle={data.site.siteMetadata.title} />

    </div>
    
  );
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
