import React,{useState} from "react"

const obj = {width:"400px",height:"300px"}   

export default  function Seats({img}){
    function handler(){
        setCount(count-1);
       }
    const [count,setCount] = useState(5);
    return (<><div>
        <img src={img} style= {obj} alt="train"/>
        <br/><br/>
        <button onClick = {handler} >Seats:{count}</button>
        </div>
        <br/>
    </>)
 }