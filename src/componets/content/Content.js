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
                <h3>Explanation</h3>
                <p className="desc">{props.explanation}</p>
            </div>
            <button id="enlarge"> HD </button>
        </div>
    )
}

export default Content