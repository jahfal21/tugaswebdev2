import React from 'react'
import { Link } from 'react-router-dom'
function NotFound() {
    return (
        <div>
           <form className="container px-5 py-5">
        <div className="col-auto">
          <label className="visually-hidden" htmlFor="autoSizingInputGroup">Username</label>
          <div className="input-group">
            <div className="input-group-text">@</div>
            <input type="text" className="form-control" id="autoSizingInputGroup" placeholder="Username" />
          </div>
        </div>
        <div className="col-auto">
          <label className="visually-hidden" htmlFor="autoSizingInput">Password</label>
          <input type="text" className="form-control" id="autoSizingInput" placeholder="Password" />
        </div>
        <div className="col-auto">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="autoSizingCheck" />
            <label className="form-check-label" htmlFor="autoSizingCheck">
              Remember me
            </label>
          </div>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary" href="index.html">Log In</button>
        </div>
         </form>
        </div>
    )
}
export default NotFound