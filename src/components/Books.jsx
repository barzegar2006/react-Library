import React from 'react'
import { getBooks } from "../Data/Data"
import { NavLink, Outlet, useSearchParams } from 'react-router-dom'

const Books = () => {
  let [searchParams] = useSearchParams()
  let books = getBooks()

  return (
    <div style={{paddingTop:"10vw"}}>
      <div>
        <Outlet />
        <div className='list my-5'>
          <div className="container">
            <div className="row gy-4">
              {
                books.filter(book => {
                  let filter = searchParams.get("filter")
                  if (!filter) return true
                  let name = book.name
                  return name.includes(filter)
                })
                  .map(book => (

                    <div className="col-4">
                      <div className="rounded p-4 h-100 shadow" style={{ backgroundColor: "" }}>
                        <div className='w-100 overflow-hidden rounded shadow'>
                          <img src={book.img} alt='book' className='w-100' />
                        </div>
                        <div className='py-3'>
                          <h4>{book.name}</h4>
                          <span style={{ fontWeight: "bold" }}>{book.price}$</span>
                          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, reiciendis!</p>
                        </div>
                        <NavLink to={book.id} key={book.id} className="btn btn-primary px-5">Buy</NavLink>
                      </div>
                    </div>
                  ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Books
