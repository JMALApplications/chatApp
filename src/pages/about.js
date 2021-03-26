import React from "react"
import Layout from "../components/layout/layout"
import { LoremIpsum } from "react-lorem-ipsum"

const About = () => {
  return (
    <Layout>
      <div>
        <body className="bg-blue-100	h-screen overscroll-none	">
          <div className="lg:pl-3">
            <div className="  mt-12 md:mt-12 lg:ml-44">
              <div className=" p-4	">
                <div>
                  <h1 className="text-gray-60 lg:text-5xl text-2xl lg:font-light mb-2  	">
                    Finonah Hamlehron
                  </h1>
                </div>

                <div className=" inline-block mb-2  lg:w-2/5  ">
                  <div className="border-b-2 border-purple-900  mb-2"></div>

                  <p className=" text-gray-600 mb-2	text-lg		">
                    <LoremIpsum p={2} />
                  </p>
                </div>
                <div className=" mb-2">
                  <p className="text-gray-600 lg:w-2/5 text-lg	"></p>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </body>
      </div>
    </Layout>
  )
}

export default About
