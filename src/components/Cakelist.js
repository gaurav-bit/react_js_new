// import cakelist from './Data';
import Cake from './Cake';
import axios from 'axios';
import { useEffect, useState } from "react";
function Cakelist(){
    var [cakelist,setCakes] = useState([]);
    useEffect(()=>{
        axios({
            url:process.env.REACT_APP_BASE_URL+"allcakes",
            method:"get",
        }).then((response)=>{
            //   console.log("response from cakes api" , response , response.data) 
              setCakes(response.data.data)
        },(error)=>{
            console.log("error from cakes api" , error)
        })
     }, []);
    
    return (
        <div className="container mt-4">
	        <h2 className="text-center">Available Cakes</h2>
            <div className="row">
                { cakelist.map((each,index)=>{
                    return (<Cake cake={each} key={index}></Cake>)
                })}
            </div>
        </div>
        
    )
}
export default Cakelist