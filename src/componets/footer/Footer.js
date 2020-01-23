import React from "react"
import "./footer.css"

const Footer = props => {
    return (
        <div className="footer-cta">
         <p className="copyright">© {props.copyright}</p>
        </div>
    )
}

export default Footer