import React from 'react'

export default function Registorpage() {
    return (

        <div className='container mt-5 border shadow p-5 cus-w'>
            <div className='row'>
                <div className='col-md-6 mt-3'>
                    <input type="text" class="form-control" placeholder='fullname' />
                </div>

                <div className='col-md-6 mt-3'>
                    <input type="email" class="form-control" placeholder='email' />
                </div>

                <div className='col-md-6 mt-3'>
                    <input type="text" class="form-control" placeholder='phone' />
                </div>

                <div className='col-md-6 mt-3'>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" value="option1" />
                        <label className="form-check-label">Male</label>
                    </div>

                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" value="option1" />
                        <label className="form-check-label">Female</label>
                    </div>
                </div>

                <div className='col-md-12 mt-3'>
                    <textarea className='form-control' value="type text"></textarea>
                </div>

                <div className='col-md-12 mt-3'>
                    <input type='button' value="submit" className='btn btn-success' />
                </div>
            </div>
            </div>
            )
}
