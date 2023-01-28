import React from 'react'
import './HeroSec.css'
import '../../PlayFair.css'

const HeroSec = () => {
    return (
        <>
            <div className="herosec-wrapper" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-6" >
                            <div className="herosec-content">
                                <h1 className='playFair__font' style={{ fontSize: "50px", color: "white" }}>Notary Public & Legal Solutions</h1>
                                <p style={{ color: "white" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis cupiditate deserunt
                                    placeat necessitatibus a aliquam corrupti nisi odio aliquid, accusamus.</p>
                            </div>
                        </div>
                        <div className="col-6"></div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default HeroSec
