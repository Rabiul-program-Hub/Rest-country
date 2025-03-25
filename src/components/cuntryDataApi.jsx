import { useEffect } from "react"
import { useState } from "react"
import Country from "./country"
import './component.css'


export default function DataApi(){
    const [countrys,setCountry]=useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=> res.json())
        .then(data=>setCountry(data))
    },[])
    console.log(countrys)
    return(
        <div>
            <h1>rest country</h1>
           <div  className="conatiner">
           {
                countrys.map(country => <Country key={country.cca3} pro= {country}></Country>)
            }
           </div>
        </div>
    )
}