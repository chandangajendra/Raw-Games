import React from 'react'
import { Outlet, Link } from "react-router-dom";


export const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="navbar-item"></div>
                <div className="navbar-item"><h4>RAWAPI</h4></div>
                <div className="navbar-item">
                    <form className="d-flex" role="search">
                        <input className="form-control mx-3 input-navbar" type="search" placeholder="search games" aria-label="Search" />
                    </form>
                </div>
                <div className="navbar-item"> <ul className='ul-navbar'>
                    <li>
                        <div className="btn-group btn-navbar">
                            <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                More
                            </button>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to={`/Shooter`}>Shooter</Link></li>
                                <li><Link className="dropdown-item" to={`/Adventure`}>Adventure</Link></li>
                                <li><Link className="dropdown-item" to={`/multiplayer`}>Multiplayer</Link></li>
                                <li><Link className="dropdown-item" to={`/Fighting`}>Fighting</Link></li>
                                <li><Link className="dropdown-item" to={`/RPG`}>RPG</Link></li>
                                <li><Link className="dropdown-item" to={`/Indie`}>Indie</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li><Link to={""}>Action</Link></li>
                    <li><Link to={`/racing`}>racing</Link></li>
                    <li><Link to="/sports">sports</Link></li>

                </ul>
                </div>
                <div className="navbar-item"></div>
            </div>

            <Outlet />
        </>
    )
}

