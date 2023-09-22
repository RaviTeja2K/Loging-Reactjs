import React, { useState } from 'react'
import {Link, json} from 'react-router-dom'
import axios from 'axios';


const UpdateEmpComponent = () =>{
    const [data, setData] = useState({
        firstName:'',
        lastName:'',
        emailId:''
    });
    const {firstName,lastName,emailId} = data;

    const changeFirstNameHandler =(e)=>{
        setData({...data,[e.target.name] : e.target.value})
    };
    const saveEmp =(e)=>{
        e.preventDefault();
        console.log(data);
        createEmp(data)
    };

    const createEmp = ()=>{
        return axios.put("http://localhost:1234/api/empupdate/2/");
    }

  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h3 className="text-center">Update Employee</h3>
                    <div className="card-body">
                        <form onSubmit={saveEmp}>
                            <div className="from-group">
                                <lable>First Name:</lable>
                                <input type="text" placeholder="firstName" name="firstName"
                                 className="form-control" value={firstName} onChange={changeFirstNameHandler}/>
                            </div>
                            <div className="from-group">
                                <lable>Last Name:</lable>
                                <input type="text" placeholder="lastName" name="lastName"
                                 className="form-control" value={lastName} onChange={changeFirstNameHandler}/>
                            </div>
                            <div className="from-group">
                                <lable>EmailId:</lable>
                                <input type="email" placeholder="emailId" name="emailId"
                                 className="form-control" value={emailId} onChange={changeFirstNameHandler}/>
                            </div>
                            {/* <button className='btn btn-success' onClick={saveEmp}>Save</button> */}
                            <input type='submit' className="btn btn-success" name='Save' onSubmit={saveEmp}/>
                            <Link to="/">
                               <input type='submit' className='btn btn-danger' name='Cancel'/>
                            </Link>
                            <div>
                        <h6 className="text-center"><Link to="/">Get All Employees</Link></h6>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UpdateEmpComponent