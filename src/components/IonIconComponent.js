import React from 'react'
export default function IonIconComponent(props) {
    let icon = props.icon.replace("data:image/svg+xml;utf8,","");
    return (
        <div className="ion-icon-container">
            <div className="icon-inner" dangerouslySetInnerHTML={{__html:icon}}/>
        </div>
    )
}