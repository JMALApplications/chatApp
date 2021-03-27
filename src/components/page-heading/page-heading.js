import React from "react"

const getPageHeadingClassList = (mobileOnly) => {

    const baseClassList = "container bg-purple-900 text-white text-center mx-auto px-10 pt-20 pb-20";

    return (mobileOnly == true) ? baseClassList + " block md:hidden" : baseClassList; 

}

const PageHeading = (props) => {

    return (
        <div className="bg-purple-900">
            <div className={getPageHeadingClassList(props.mobileOnly)}>
                <h1 className="text-center font-bold mb-5 text-lg">{props.heading}</h1>
                <p>{props.desc}</p>
            </div>
        </div>
    );

}

export default PageHeading