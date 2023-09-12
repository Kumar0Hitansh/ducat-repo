import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Editrecord() {
   
    
    const [sv,sf]= useState({
        fullname:"",
        phone:"",
        email:"",
        gender:"",
        comment:""
      });
      const {id} = useParams();
    const Mygetapi = () => {
        axios.get(`http://localhost:8080/view/${id}`).then((e) => {
            console.log(e.data);
            sf(e.data);
        })
    }

    useEffect(() => {
        Mygetapi();
    }, []);




    

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


      const updatefuncion = async (e) => {
        e.preventDefault();
        const {fullname,email,phone,comment,gender} = sv;
        
        const res = await fetch(`http://localhost:8080/updaterecord/${id}`,{
          method:"PATCH",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify({
            fullname,email,phone,comment,gender
          })
        })
        
        const data1 = await res.json();
        console.log(data1);
        
}

  return (
    <form>
        <div className='container mt-5 border shadow p-5 cus-w'>
            <div className='row'>
                <div className='col-12 text-center'>
                    <h1>Edit Eecord page</h1>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-6 mt-3'>
                    <input type="text" className="form-control" placeholder='fullname' name='fullname' value={sv.fullname} onInput={setdata}/>
                </div>

                <div className='col-md-6 mt-3'>
                    <input type="email" className="form-control" placeholder='email' name='email' value={sv.email} onInput={setdata}/>
                </div>

                <div className='col-md-6 mt-3'>
                    <input type="text" className="form-control" placeholder='phone' name='phone' value={sv.phone} onInput={setdata}/>
                </div>

                <div className='col-md-6 mt-3'>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" value="male"  name='gender' checked={sv.gender==='male'} onChange={setdata}/>
                        <label className="form-check-label">Male</label>
                    </div>

                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" value="female" name="gender" checked={sv.gender==='female'} onChange={setdata}/>
                        <label className="form-check-label">Female</label>
                    </div>
                </div>

                <div className='col-md-12 mt-3'>
                    <textarea className='form-control' placeholder='enter comment' name='comment' value={sv.comment} onChange={setdata}></textarea>
                </div>

                <div className='col-md-12 mt-3 text-center'>
                    <input type='button' value="update" className='btn btn-success'  onClick={updatefuncion}/>
                    <Link to="/" className='btn btn-success ms-2'>login</Link>
                    
                </div>
            </div>
            </div>
            </form>
  )
}

export default Editrecord