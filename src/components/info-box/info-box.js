import React from 'react'

const InfoBox = (props) => {

return (
    <div>
        <h1 className="text-center font-bold">{props.infoBoxHeading}</h1>
        <div className="text-center">{props.infoBoxDesc}</div>
    </div>
);


}

export default InfoBox