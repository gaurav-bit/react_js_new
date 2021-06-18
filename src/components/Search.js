import Cake from './Cake';
import axios from 'axios';
import { useEffect, useState } from "react";
import querystring from "query-string";

function Search(props) {

    var [cakelist,setCakes] = useState([]);
    var query = querystring.parse(props.location.search);
    var apiurl=process.env.REACT_APP_BASE_URL+"searchcakes?q="+query.q;
    useEffect(()=>{
        axios({
            url:apiurl,
            method:"get",
        }).then((response)=>{
            // console.log("response from cakes api" , response , response.data) 
            setCakes(response.data.data)
        },(error)=>{
            console.log("error from cakes api" , error)
        })
     }, [apiurl]);

     if (cakelist.length === 0) {
            return (<div className="container pt-3 pb-3">
                        <img className="img-responsive w-100" src="/images/404.gif" alt="" height="500"/>
                </div>
            );
     }

     return (
        <div className="container mt-4">
            <div className="row">
                { cakelist.map((each,index)=>{
                    return (<Cake cake={each} key={index}></Cake>)
                })}
            </div>
        </div>
     )
}

export default Search;