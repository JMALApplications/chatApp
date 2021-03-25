import React from "react";
import { graphql } from "gatsby";
import Header from "../components/header/header";
import HomeSlider from "../components/home-slider/home-slider";

export default function Home({data}) {
  return (

    <div>

      <Header siteTitle={data.site.siteMetadata.title} />
      <HomeSlider />

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
