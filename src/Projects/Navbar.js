import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">{props.about}</a>
              </li>

            </ul>
            {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">Search</button>
          </form> */}
            <div class={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
              <input class="form-check-input"  onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault" />
              <lable class="form-check-label" htmlFor="switchCheckDefault ">Enable Darkmode </lable>
            </div>
          </div>
        </div>
      </nav>

    </>
  )
}
Navbar.propTypes = {
  tilte: PropTypes.string.isRequired, about: PropTypes.string.isRequired
}

Navbar.defultProps = {
  title: "Set title here",
  about: 'About text here'
}
