/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react"
import "./content.css"

const Content = props => {

    return (
        <div className="img-desc-cta">
            <div className="img-cta">
             <img alt="Space Image" src={props.url}/>
             </div>
            <div className="desc-wrap">
                <p className="desc">Description: {props.explanation} </p>
            </div>
        </div>
    )
}

export default Content