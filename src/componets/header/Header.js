import React from "react"
import "./header.css"

const Header = props => {
    return (
        <div className="top-header">
            <div className="title-date-wrapper">
                <h1 className="title">Title:{props.title} </h1>
                <h2 className="date">Date: {props.date} </h2>
            </div>
            </div>

    )
}

export default Header