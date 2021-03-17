import React from 'react'
import { Link } from 'react-router-dom'
import Acer from '../images/acer.jpg'
import ipxr from '../images/ip xr 64.jpg'
import ip11 from '../images/ip 11.jpg'
function Elektronik() {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </nav>
        <h1><i>Elektronik</i></h1>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <div className="card" style={{width: '18rem'}}>
                <img src={Acer} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Rp12.479.000</h5>
                  <p className="card-text">ACER PREDATOR NITRO 5 AN515-55 144Hz i5-10300H 8GB 512GB GTX1650Ti 4GB</p>
                  <Link to='./beli' className="btn btn-primary">Beli</Link>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card" style={{width: '18rem'}}>
                <img src={ipxr} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Rp.9.000.000</h5>
                  <p className="card-text">iPhone XR 64GB</p>
                  <Link to='./beli' className="btn btn-primary">Beli</Link>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card" style={{width: '18rem'}}>
                <img src={ip11} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Rp16.499.000</h5>
                  <p className="card-text">iPhone 11 Pro 64GB</p>
                  <Link to='./beli' className="btn btn-primary">Beli</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}
export default Elektronik