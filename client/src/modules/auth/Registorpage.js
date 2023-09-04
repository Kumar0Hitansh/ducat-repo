import React,{useState} from 'react'

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
      const mysubmit = async (e)=>{
        e.preventDefault();
        if(sv.fullname==="" || sv.email==="" || sv.comment==="")
        {
            alert("fill form properly");
        }
        else{
       
        const { fullname, email, phone, comment, gender } = sv;
        const res = await fetch("http://localhost:8080/create", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                fullname, email, phone, comment, gender
            })
        })
        const data = await res.json();
        console.log(data);
        }
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
                    <input type="text" className="form-control" placeholder='fullname' name='fullname' onInput={setdata}/>
                </div>

                <div className='col-md-6 mt-3'>
                    <input type="email" className="form-control" placeholder='email' name='email' onInput={setdata}/>
                </div>

                <div className='col-md-6 mt-3'>
                    <input type="text" className="form-control" placeholder='phone' name='phone' onInput={setdata}/>
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
                    <textarea className='form-control' placeholder='enter comment' name='comment' onChange={setdata}></textarea>
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
