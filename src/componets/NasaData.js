import React, { useState, useEffect} from "react";
import Header from "./header/Header"
import Content from "./content/Content"
import Footer from "./footer/Footer"
import Date from "./date/Date"
import axios from "axios"

const NasaData = () => {
    const [photos, setPhotos] = useState([])

    useEffect(()=> {
        axios
        .get("https://api.nasa.gov/planetary/apod?api_key=424Q1GpFyqQq2J3Rdpx4X3ljCNwTHIzabBxSbLtO")
        .then(res => {
            console.log(res.data)
            setPhotos(res.data)
           const todaysDate = res.data.date
           console.log(todaysDate)
            console.log(photos)
        })
        .catch(error =>{
            console.log("data not return", error)
        })
    }, [photos]);
    
    useEffect(() => {}, [])
    return <div className="photo">
        <Header title={photos.title}
        date={photos.date}/>
        <Date date={photos.date}/>
        <Content
        url={photos.url}
        explanation={photos.explanation}/>
        <Footer copyright={photos.copyright}/>
    </div>
}
export default NasaData