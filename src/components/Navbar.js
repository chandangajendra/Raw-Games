import React from 'react'

export const Navbar = () => {
    return (
        <><div className="navbar">
            <div className="navbar-item"></div>
            <div className="navbar-item"><h4>RAWAPI</h4></div>
            <div className="navbar-item">
                <form className="d-flex" role="search">
                    <input className="form-control mx-3 input-navbar" type="search" placeholder="search games" aria-label="Search" />
                </form>
            </div>
            <div className="navbar-item"> <ul className='ul-navbar'><li>Action</li>
                <li>Shooting</li>
                <li>Racing</li>
                <li>
                    <div className="btn-group btn-navbar">
                        <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            More
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Menu item</a></li>
                            <li><a className="dropdown-item" href="#">Menu item</a></li>
                            <li><a className="dropdown-item" href="#">Menu item</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
            </div>
            <div className="navbar-item"></div>
        </div> </>
    )
}
