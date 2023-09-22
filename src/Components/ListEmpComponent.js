import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';


const ListEmpComponent = () => {
        const url = "http://localhost:1234/api/getall";

    const [data, setData] = useState([]);
    const fetchData=async(ApiUrl)=>{
           try{
            const res = await fetch(ApiUrl);
            const jsdata =await res.json();
            console.log(jsdata);
            setData(jsdata)
           }
           catch(e){
            console.log("not fetched");
           }
    }
    useEffect(() => {
      fetchData(url);
    }, [])

    

  return (
    <div>
        <h2 className="text-center">Employess List</h2>
    <div className="row">    
                    <Link to="/add-employee">
                        <button className='btn-btn-primary'>Add Employee</button>
                    </Link>
    </div>
        <div className="row">
        <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>EmailId</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((obj)=>{
                        const {id,firstName,lastName,emailId}=obj;
                        return(
                           <tr key={id}>
                                <td>{id}</td>
                                <td>{firstName}</td>
                                <td>{lastName}</td>
                                <td>{emailId}</td>
                                <td>
                                <Link to="/update-employee"> <button className="btn btn-info" >Update</button></Link>   
                                    <button className='btn btn-info'>Delete</button>
                                </td>

                           </tr> 
                        )
                    })
                }
            </tbody>
        </table>
        </div>
        
    </div>
  )
}

export default ListEmpComponent