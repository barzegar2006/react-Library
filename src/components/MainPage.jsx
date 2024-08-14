import Image from "../assets/ribrary.png"

const MainPage = () => {
  return (
    <div style={{padding:"30vh 20vh 10vh 20vh"}}>
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-6 text-start h-100 d-flex flex-column gap-4">
            <h2 style={{fontSize : "60px" , fontFamily:"fantasy"}} >Find the best books for yourselft</h2>
            <p style={{fontFamily:"sans-serif"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eaque deserunt officia natus quidem perferendis.</p>
          </div>
          <div className='col-6 h-100'>
            <img src={Image} alt="" className='w-100 h-100' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage
