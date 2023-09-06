import React, { Fragment, useEffect, useState } from 'react'
import Mynav from '../shares/Mynav';
import axios from 'axios';

function Landingpage() {
    const [sv, sf] = useState([])


    const Mygetapi = () => {
        axios.get('http://localhost:8080/alldata').then((e) => {
            console.log(e.data);
            sf(e.data);
        })
    }
    useEffect(() => {
        Mygetapi();
    }, []);


const Mydeleterecord = async(id)=>{
    const delrec = await fetch(`http://localhost:8080/deleterecord/${id}`,{
      method:"DELETE",
      headers:{"Content-Type":"application/json"}
    })
    const deleterow = await delrec.json();
    console.log(deleterow);
    Mygetapi();
   
  };



    return (
        <Fragment>
            <Mynav />
            <div className='container cus-mt'>
                <div className='row'>
                    <div className='col-12'>
                        <p>Home page / landing page</p>
                    </div>
                    <section className='row'>
                        <div className='col-md-3'>
                            <div className="card text-bg-primary mb-3">
                                <div className="card-header">Header</div>
                                <div className="card-body">
                                    <h5 className="card-title">Primary card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-3'>
                            <div className="card text-bg-info mb-3">
                                <div className="card-header">Header</div>
                                <div className="card-body">
                                    <h5 className="card-title">Primary card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className="card text-bg-danger mb-3">
                                <div className="card-header">Header</div>
                                <div className="card-body">
                                    <h5 className="card-title">Primary card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className="card text-bg-success mb-3">
                                <div className="card-header">Header</div>
                                <div className="card-body">
                                    <h5 className="card-title">Primary card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </section>


                </div>
                <div className='row'>
                    <div className='col-12'>

                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">id</th>
                                    <th scope="col">Full Name</th>
                                    <th scope="col">Phone no</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Comments</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sv.map((d) => {
                                    return (
                                        <tr>
                                            <th scope="row">{d._id}</th>
                                            <td>{d.fullname}</td>
                                            <td>{d.phone}</td>
                                            <td>{d.gender}</td>
                                            <td>{d.email}</td>
                                            <td>{d.comment}</td>
                                            <td>
                                                <button className='btn btn-sm btn-info me-2'>view</button>
                                                <button className='btn btn-sm btn-warning me-2'>Edit</button>
                                                <button className='btn btn-sm btn-danger' onClick={()=>{Mydeleterecord(d._id)}}>Del</button>
                                            </td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Landingpage