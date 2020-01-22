import React from "react"
import "./content.css"

const Content = props => {
    return (
        <div className="img-desc-cta">
            <div className="img">
              {props.url}</div>
            <div className="desc-wrap">
                <p className="desc">Description: {props.explanation} </p>
            </div>
        </div>
    )
}

export default Content