import React from "react"
import "./footer.css"

const Footer = props => {
    return (
        <div className="footer-cta">
         <p>copyright {props.copyright}</p>
        </div>
    )
}

export default Footer