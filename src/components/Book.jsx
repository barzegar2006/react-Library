import React from 'react'
import { useParams , Link } from 'react-router-dom'
import { getBook } from "../Data/Data"


const Book = () => {
    let params = useParams()
    let book = getBook(params.bookId)
    if (book) {
        return (
            <div style={{padding:"5vh"}} className='shadow mt-5'>
                <div className="container">
                    <div className="row gx-5">
                        <figure className='col-5 h-100 overflow-hidden rounded '>
                            <img src={book.img} alt="" className='w-100 h-100 rounded' />
                        </figure>
                        <div className='col-7 position-relative'>
                            <h3> {book.name} </h3>
                            <h4>{book.author} </h4>
                            <h3> {book.price}$ </h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque velit consequatur quos voluptas cum quo laudantium eveniet maxime molestiae corporis.</p>
                            <button className='btn btn-primary'>buy</button>
                            <Link to={"/books"} className='position-absolute rounded px-3' style={{right : 0 , top : 0 , background: "red" , color : "white", padding : "0.5rem" , }} ><i className='fa fa-trash'></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <h3>
                Book Not Found
            </h3>
        )
    }



}

export default Book
