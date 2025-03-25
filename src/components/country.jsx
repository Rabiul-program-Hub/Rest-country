import { useState } from "react"

export default function Country({pro}){
    const {name,flags,languages,population}=pro
console.log(pro)
const [visited,setVisited]= useState(false)
const visitHandler = ()=>{
    setVisited(!visited)
}
return(
<div className="box">
    <h1>Name: {name.common}</h1>
    <h1>languages:{languages?.eng}</h1>
    <h1 className="highLight">population:{population}</h1>
   <img src={flags.png} alt="" />
   <button onClick={visitHandler}>visited</button>
   {visited ? 'yes i visit' : 'i want to visit'}
</div>
)
}