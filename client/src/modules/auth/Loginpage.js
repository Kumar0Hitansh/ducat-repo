import React from 'react'
import { Link } from 'react-router-dom'

function Loginpage() {
  return (
    <main className="form-signin w-100 m-auto mt-5 border shadow p-5">
  <form>
    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

    <div className="form-floating">
      <input type="email" className="form-control" placeholder="name@example.com"/>
      <label>Email address</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control" placeholder="Password"/>
      <label>Password</label>
    </div>

    <div className="form-check text-start my-3">
      <input className="form-check-input" type="checkbox" value="remember-me"/>
      <label className="form-check-label">
        Remember me
      </label>
    </div>
    {/* <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button> */}
    <Link  to="landing" className='btn btn-success'>dashboard</Link>
    <Link  to="registor" className='text-underline'>user registor</Link>
  </form>
</main>
  )
}

export default Loginpage