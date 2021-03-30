import React from "react"
import Layout from "../components/layout/layout"
import { StaticImage } from "gatsby-plugin-image"

const Avator = (
  <StaticImage
    src="../assets/images/avator.png"
    alt="avator"
    placeholder="blurred"
    layout="constrained"
    width={100}
    height={100}
    className="rounded-full"
  />
)

const About = () => {
  return (
    <Layout>
      <div>
        <body className="bg-blue-50	h-screen overscroll-none flex justify-evenly flex-row  ">
          <div className=" h-4/6	 w-4/12 self-center ">
            {Avator}

            <div className="p-4	">
              <div>
                <h1 className="text-gray-60 lg:text-5xl text-2xl lg:font-light mb-2  	">
                  Finonah Hamlehron
                </h1>
              </div>

              <div className="w-full inline-block mb-2    ">
                <div className="border-b-2 border-purple-900  mb-2"></div>

                <p className=" text-gray-600 mb-2	text-lg		">
                  Lorem ipsum odor amet, consectetuer adipiscing elit. Duis
                  varius rhoncus mollis luctus magna id duis ultrices. Felis
                  platea facilisis turpis fringilla dolor finibus maecenas
                  convallis. Aliquet rhoncus maximus vivamus hac ut suscipit ex
                  donec. Facilisis magna libero himenaeos odio nullam aenean.
                  Augue sapien est tortor est, metus mi vel venenatis. Mi aptent
                  integer vestibulum taciti neque imperdiet convallis duis?
                  Morbi magna blandit magna mollis aptent curae.
                </p>
              </div>
              <div className="mb-2">
                <p className="text-gray-600 text-lg	"></p>
              </div>
            </div>
          </div>
          <div className=" h-4/6 w-4/12 self-center">
            {Avator}
            <div className=" p-4	">
              <div>
                <h1 className="text-gray-60 lg:text-5xl text-2xl lg:font-light mb-2  	">
                  Finonah Hamlehron
                </h1>
              </div>

              <div className="w-full	  inline-block mb-2    ">
                <div className="border-b-2 border-purple-900  mb-2"></div>

                <p className=" text-gray-600 mb-2	text-lg		">
                  Lorem ipsum odor amet, consectetuer adipiscing elit. Duis
                  varius rhoncus mollis luctus magna id duis ultrices. Felis
                  platea facilisis turpis fringilla dolor finibus maecenas
                  convallis. Aliquet rhoncus maximus vivamus hac ut suscipit ex
                  donec. Facilisis magna libero himenaeos odio nullam aenean.
                  Augue sapien est tortor est, metus mi vel venenatis. Mi aptent
                  integer vestibulum taciti neque imperdiet convallis duis?
                  Morbi magna blandit magna mollis aptent curae.
                </p>
              </div>
              <div className=" mb-2">
                <p className="text-gray-600 text-lg	"></p>
              </div>
            </div>
          </div>
        </body>
      </div>
    </Layout>
  )
}

export default About
