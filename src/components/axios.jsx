import axios from "axios";
import React,{useState,useEffect} from "react";

export const Axios = () => {
    useEffect(()=>
    {
        fetchData();
    },[])
    const [data,setData]=useState([""]);

   

    const fetchData= async()=>
    {
        try{
            const respond= await axios.get("https://fakestoreapi.com/products/");
            console.log(respond);
            setData(respond.data);
        }
        catch(error)
        {
            console.log("this page is error",error);
        }
    };
    return(
        <>
        {/*{data.map(item => <h2>{item.description}</h2>)}*/}
        {data.map}
        </>
        )}