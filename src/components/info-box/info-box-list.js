import React from 'react'

const InfoBoxList = (props) => {

    return (
        <div className="bg-gray-100">
            <div className="container mx-auto px-10 md:px-20 pt-10 pb-10">
                <h1 className="text-center font-bold mb-5 text-lg">
                    {props.infoBoxListHeading}
                </h1>
                <div className="grid xl:grid-cols-3 md:grid-cols-3 gap-4 justify-items-center items-center">
                    {props.children}
                </div>
            </div>
        </div>
    );

}

export default InfoBoxList