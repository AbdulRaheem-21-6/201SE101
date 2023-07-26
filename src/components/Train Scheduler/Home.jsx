import React from "react"
import Seats from "../Seats/Seats"

const imgDetails = {
    url1 : "https://tinyurl.com/2enassyu" ,
    url2 : "https://tinyurl.com/msar86ve"
}

export default function Home(){
    return (<>
    <h1>TICKET REGISTRATION</h1>
    <Seats img={imgDetails.url1}/> 
    <Seats img={imgDetails.url2}/> 
    </>);
}