import React from 'react'

const Footer = () => {
  return (
    <footer style={{background : "#2C3F5D" , color : "white"} }>
      <div className="container">
        <div className="row align-items-center p-5">
          <div className="col-6">
            <h2 style={{fontFamily:"fantasy" , fontSize:"30px"}}>Book Library</h2>
          </div>
          <div className="col-6" style={{fontFamily:"sans-serif"}}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid magnam natus omnis deleniti. Praesentium aliquam repudiandae voluptatem distinctio officiis incidunt!
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
