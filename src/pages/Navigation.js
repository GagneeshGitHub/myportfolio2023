import React from 'react'
import { useNavigate } from 'react-router-dom'
import './navigation.css'

export default function Navigation() {
  const navigate = useNavigate();

  return (
    <div className='navDiv'>
        <div className='innNavDiv'>
            <div className='leftInnDiv'>
                <p className='leftText'><p className='leftTextName'>Gagneesh</p> Portfolio</p>
            </div>
            <div className="rightInnDiv">
                <button className="btnRight" onClick={()=>navigate("/")}>  Home  </button>
                <button className="btnRight" onClick={()=>navigate("/mywebsites")}>  MyWebsites  </button>
                {/* <button className="btnRight" onClick={()=>navigate("/education")}>  Education  </button>
                <button className="btnRight" onClick={()=>navigate("/myskills")}>  Skills  </button> */}
                <button className="btnRight" onClick={()=>navigate("/contact")}>  Contact  </button>
            </div>
        </div>
    </div>
  )
}
