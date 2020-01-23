import React from "react"
import "./footer.css"
import styled from "styled-components";


const FooterCta = styled.div`
width: 900px;
display: flex;
justify-content: left;
margin: 0 auto;
border: 1px groove slategray;
`



const Footer = props => {
    return (
        <FooterCta>
         <p className="copyright">© {props.copyright}</p>
        <p className="service_version">{props.service_version}</p>
  </FooterCta>
        
    )
}

export default Footer