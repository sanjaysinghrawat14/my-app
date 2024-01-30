import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
<nav className={`navbar navbar-expand-lg bg-${props.mode} border-bottom border-body`} data-bs-theme={props.mode}> 
{/* <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark"> */}
    {/* <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark"> */}
        <div className="container-fluid">
            <a className="navbar-brand" href="/">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/about">{props.aboutText}</Link>
                    </li>
                </ul>
                <div className={`form-check form-switch text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                    <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode === 'dark' ? 'light' : 'dark'} Mode</label>
                </div>
                <div className='mx-5'>
                    <label htmlFor="themeSelector">Select theme</label>
                    <select id="myTheme" onChange={props.changeTheme}>
                        <option value=""> </option>
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="yellow">Yellow</option>
                    </select>
                </div>
                {/* <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
            </div>
        </div>
    </nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string
  }

  Navbar.defaultProps = {
    title: "Please give me title",
    aboutText: "Please give me about"
  }
  