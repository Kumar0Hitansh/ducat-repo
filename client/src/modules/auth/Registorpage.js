import React,{useState} from 'react'
import {Link} from 'react-router-dom'; 

export default function Registorpage() {
    const [sv,sf]= useState({
        fullname:"",
        phone:"",
        email:"",
        gender:"",
        comment:""
      });

      const setdata = (e)=>{
        console.log(e.target.value);
        const {name,value} = e.target;
        sf((preval)=>{
          return{
            ...preval,
            [name]:value
          }
        })
      }
      const mysubmit = ()=>{

        console.log(sv);
      }




    return (

        <div className='container mt-5 border shadow p-5 cus-w'>
            <div className='row'>
                <div className='col-12 text-center'>
                    <h1>Registor page</h1>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-6 mt-3'>
                    <input type="text" class="form-control" placeholder='fullname' name='fullname' onInput={setdata}/>
                </div>

                <div className='col-md-6 mt-3'>
                    <input type="email" class="form-control" placeholder='email' name='email' onInput={setdata}/>
                </div>

                <div className='col-md-6 mt-3'>
                    <input type="text" class="form-control" placeholder='phone' name='phone' onInput={setdata}/>
                </div>

                <div className='col-md-6 mt-3'>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" value="male"  name='gender' onChange={setdata}/>
                        <label className="form-check-label">Male</label>
                    </div>

                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" value="female" name="gender" onChange={setdata}/>
                        <label className="form-check-label">Female</label>
                    </div>
                </div>

                <div className='col-md-12 mt-3'>
                    <textarea className='form-control' value="type text" name='comment' onInput={setdata}></textarea>
                </div>

                <div className='col-md-12 mt-3 text-center'>
                    <input type='button' value="register" className='btn btn-success'  onClick={mysubmit}/>
                    {/* <Link to="/" className='btn btn-success'>register</Link> */}
                    <input type='reset' value="cancel" className='btn btn-danger ms-5' />
                </div>
            </div>
            </div>
            )
}
