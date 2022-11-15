import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


const Navbar = (props) => {
    return (
        <div>
            <nav className={ `navbar navbar-expand-lg navbar-${props.theme} bg-${props.theme}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.tittle}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.about}</Link>
          </li>
          
        </ul>
        {/* Search bar */}
        {/* <button className="btn btn-outline-success" type="submit" onClick ={props.toggleMode}>Dark</button> */}
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"   onClick ={props.toggleMode}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color:props.mode==="On"?"black":"white"}}>{props.mode}</label>
</div>
      </div>
    </div>
  </nav>

        </div>
    );
}
export default Navbar;  
Navbar.propTypes = {title:PropTypes.string.isRequired,
  about:PropTypes.string
}


Navbar.defaultProps= { title:'NeW wAy',
 about:"About"
}