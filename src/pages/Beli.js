import React from 'react'
import { Link } from 'react-router-dom'
function Beli() {
    return (
        <div>
            <div className="container px-5 py-5">
          <p>Alamat Tujuan</p>
          <div className="col">
            <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
          </div>
        </div>
        <form className="container px-5 py-5">
          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">No. Telepon</label>
            <input type="text" className="form-control" id="Telepon" />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">Alamat</label>
            <input type="text" className="form-control" id="inputAddress" placeholder />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">Kota</label>
            <input type="text" className="form-control" id="inputCity" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">Jumlah Pesanan</label>
            <input type="text" className="form-control" id="Jumlahpesanan" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">Catatan</label>
            <input type="text" className="form-control" id="Catatan" />
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
            <button type="submit" className="btn btn-primary" href="index.html">Beli</button>
          </div>
        </form>
        </div>
    )
}
export default Beli