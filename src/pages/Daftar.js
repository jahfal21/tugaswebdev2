import React from 'react'
import { Link } from 'react-router-dom'
function Daftar() {
    return (
        <div>
        <div className="container px-5 py-5">
          <p>Nama Lengkap</p>
          <div className="col">
            <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
          </div>
        </div>
        <form className="container py-5 px-5">
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">Email</label>
            <input type="email" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">Username</label>
            <input type="email" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">Password</label>
            <input type="password" className="form-control" id="inputPassword4" />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">Alamat</label>
            <input type="text" className="form-control" id="inputAddress" placeholder />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">Kota</label>
            <input type="text" className="form-control" id="inputCity" />
          </div>
          <div className="col-12">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck" />
              <label className="form-check-label" htmlFor="gridCheck">
                Remember Me
              </label>
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">Daftar</button>
          </div>
        </form>
      </div>
    )
}
export default Daftar