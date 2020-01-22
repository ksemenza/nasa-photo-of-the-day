import React, { useState, useEffect} from "react";
import Header from "./header/Header"
import Content from "./content/Content"
import Footer from "./footer/Footer"
import axios from "axios"

const NasaData = () => {
    const [photos, setPhotos] = useState([])
    useEffect(()=> {
        axios
        .get(/*"https://api.nasa.gov/planetary/apod?api_key=iFx2nUK3wi6A2VU1zTu54YT72hWRNDwvNwUMHaRF"*/)
        .then(res => {
            console.log(res.data)
            setPhotos(res.data)
            console.log(photos)
        })
        .catch(error =>{
            console.log("data not return", error)
        })
    }, []);
    
    useEffect(() => {}, [])

    return <div className="photo">
        <Header title={photos.title}
        date={photos.date}/>
        <Content
        url={photos.url}
        explanation={photos.explanation}/>
      
        <Footer copyright={photos.copyright}/>
      
    </div>
}
export default NasaData