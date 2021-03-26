import React from 'react'

const InfoBoxList = (props) => {

    return (
        <div className="container grid-cols-1">
            <div className="grid">
                {props.children}
            </div>
        </div>
    );

}

export default InfoBoxList