import React, { Fragment,useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';


function Detailsuser() {
    const {id} = useParams();
    const [single, singupdate] = useState([])
    const Mygetapi = () => {
        axios.get(`http://localhost:8080/view/${id}`).then((e) => {
            console.log(e.data);
            singupdate(e.data);
        })
    }

    useEffect(() => {
        Mygetapi();
    }, []);
    
  return (
    <div className='container bg-light border shadow'>
        <div className='row bg-primary p-3'>
            <div className='col-8 text-center text-white'>
                <p className='h3'>Display Single User Details</p>
            </div>
            <div className='col-4 text-end'>
                <Link to="/landing" className='btn btn-danger'>Back</Link>
            </div>
        </div>
        <div className='row p-5'>
            <div className='col-md-6'>
                <h1>image</h1>
            </div>

            <div className='col-md-6'>
                <h2>Full Name: {single.fullname}</h2>
                <h2>Email Id: {single.email}</h2>
                <h2>Phone No: {single.phone}</h2>
                <h2>Gender: {single.gender}</h2>
                <h2>Comments Type: {single.comment}</h2>
            </div>
        </div>
    </div>
  )
}

export default Detailsuser