import React,{useEffect} from "react";



function Hello(){
    useEffect(()=>{
        console.log("I'm Here!!");
    return () => console.log("Bye bye!!");
    },[]);
 
    return (
    <h1>
       Hello HelenNguyen
    </h1>);
}

export default Hello;