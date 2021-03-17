import React from 'react'
import { Link } from 'react-router-dom'
import ipxr from '../images/ip xr 64.jpg'
import ip11 from '../images/ip 11.jpg'
import store from '../images/jahfal-store.png'
import scarlet from '../images/Scarlet.jpg'
function Home() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={store} width={70} height={70} />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <Link to='./daftar' className="nav-link">Daftar</Link>
                <li className="nav-item">
                  <Link to='./login' className="nav-link">Log In</Link>
                </li>
                <li className="nav-item">
                  <Link to='./about' className="nav-link">Tentang Kami</Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Kategori
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link to='./elektronik' className="dropdown-item">Elektronik</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#" /></li>
                  </ul>
                </li>
                <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </ul></div>
          </div>
        </nav>
        <h1><i>Flash Deal</i></h1>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <div className="card" style={{width: '18rem'}}>
                <img src={scarlet} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Rp39.000</h5>
                  <p className="card-text">Scarlet Whitening Bodylotion</p>
                  <Link to='./beli' className="btn btn-primary">Beli</Link>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card" style={{width: '18rem'}}>
                <img src={ipxr} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Rp.111.000</h5>
                  <p className="card-text">iPhone XR 64GB</p>
                  <Link to='./beli' className="btn btn-primary">Beli</Link>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card" style={{width: '18rem'}}>
                <img src={ip11} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Rp12.000</h5>
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
export default Home