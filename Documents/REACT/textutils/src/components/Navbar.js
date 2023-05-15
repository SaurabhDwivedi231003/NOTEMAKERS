import React from 'react' // ye likhna important h
import PropTypes from 'prop-types' //ye props ko as a object use krne k liye 
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
 <nav id="navbar-main" className= { `navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} ` }> { /* initially ye css hi tha but darkmode button k liye hum isme js component dalege */}
  <div className="container-fluid">
    {/* <Link className="navbar-brand"  to="/">{props.title}</Link> */}
    <a className="navbar-brand"  href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
          <a className="nav-link active" id="nav-link" aria-current="page" href="#">Home</a>
        </li>
      </ul>

      <div className={ `form-check form-switch text-${props.mode === 'light'?'dark':'light' }` }>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label" forhtml="flexSwitchCheckDefault">Comfort Mode</label>
</div>
    </div>
  </div>
</nav>  
 )
}

Navbar.propTypes = { title : PropTypes.string,
     aboutText : PropTypes.string   // dhyaan rkhna data types ka agr int hua tb string mt daldena wrna error milegi
}

// Agr default dena h toh de skte hain
 //Navbar.defaultProps = { title : 'Set title here',
 //aboutText : 'About textUtils'   
 //}

//Navbar.propTypes = { title : PropTypes.string.isRequired,
//     aboutText : PropTypes.string.isRequired
//}
// mostly isRequired daaldene chahiye