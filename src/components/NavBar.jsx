import React from 'react'
import { NavLink, useSearchParams } from 'react-router-dom'


const NavBar = () => {
    let [searchParams, setSearchParams] = useSearchParams()
    return (
        <header style={{ position: "fixed" , top:"0" , right:"0" , left:"0" , backgroundColor:"#F0F8FF" , zIndex:"2" }} className='shadow'>
            <div className="container d-flex justify-content-between py-4 align-items-center">
                <div className="d-flex align-items-center gap-5">
                    <div className=''>
                        <h1 className='' style={{ fontSize: "30px", fontFamily: "fantasy" }}>
                            Book Library
                        </h1>
                    </div>
                    <div>
                        <nav className=''>
                            <NavLink to="/MainPage" style={{ color: "black", fontSize: "17px" }} className="m-5">About</NavLink>
                            <NavLink to="/Books" style={{ color: "black", fontSize: "17px" }}>Books</NavLink>
                        </nav>
                    </div>
                </div>
                <div className='d-flex align-items-center justify-content-end'>
                    <div className="container">
                        <div className="row">
                            <input className='w-100 rounded shadow justify-content-end' style={{ width: "", height: "3rem" }} type='text' placeholder='search for books' onChange={
                                (e) => {
                                    let filter = e.target.value
                                    if (filter) {
                                        setSearchParams({ filter })
                                    }
                                    else {
                                        setSearchParams({})
                                    }
                                }
                            } value={searchParams.get("filter")} />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default NavBar
