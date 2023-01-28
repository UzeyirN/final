import React from 'react'
import './PracticeSec.css'
import '../../PlayFair.css'

const PracticeSec = () => {
    return (
        <>
            <div className="practicesec-wrapper">
                <div style={{ width: "40%", margin: "30px auto 50px auto", textAlign: "center" }}>
                    <h2  style={{ fontSize: "32px" }}><span className='playFair__font' style={{ fontWeight: 700, marginRight: "20px" }}>Practice</span>
                        <span className='playFair__font' style={{ color: "RGB(54, 77, 89)",fontWeight:"400" }}>Areas</span> </h2>
                    <p style={{ color: "RGB(54, 77, 89)" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-4 col-lg-4 col-md-6 col-sm-12">
                            <div className="practice-card__wrapper">
                                <div style={{ display: "flex", justifyContent: "start" }}>
                                    <i class="fa-solid fa-building-columns practise-icon"></i>
                                </div>
                                <h3 className='playFair__font'>Bankruptcy Law</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
                            </div>
                        </div>
                        <div className="col-4 col-lg-4 col-md-6 col-sm-12">
                            <div className="practice-card__wrapper">
                                <div style={{ display: "flex", justifyContent: "start" }}>
                                    <i class="fa-solid fa-circle-dollar-to-slot  practise-icon"></i>
                                </div>
                                <h3 className='playFair__font'>Business Law</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
                            </div>
                        </div>
                        <div className="col-4 col-lg-4 col-md-6 col-sm-12">
                            <div className="practice-card__wrapper">
                                <div style={{ display: "flex", justifyContent: "start" }}>
                                    <i class="fa-solid fa-person-military-to-person practise-icon"></i>
                                </div>
                                <h3 className='playFair__font'>Civil Rights Law</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
                            </div>
                        </div>
                        <div className="col-4 col-lg-4 col-md-6 col-sm-12">
                            <div className="practice-card__wrapper">
                                <div style={{ display: "flex", justifyContent: "start" }}>
                                    <i class="fa-solid fa-gun practise-icon"></i>
                                </div>
                                <h3 className='playFair__font'>Criminal Law</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
                            </div>
                        </div>
                        <div className="col-4 col-lg-4 col-md-6 col-sm-12">
                            <div className="practice-card__wrapper">
                                <div style={{ display: "flex", justifyContent: "start" }}>
                                    <i class="fa-solid fa-plane-departure practise-icon"></i>
                                </div>
                                <h3 className='playFair__font'>Immigration Law</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
                            </div>
                        </div>
                        <div className="col-4 col-lg-4 col-md-6 col-sm-12">
                            <div className="practice-card__wrapper">
                                <div style={{ display: "flex", justifyContent: "start" }}>
                                    <i class="fa-solid fa-people-roof practise-icon"></i>
                                </div>
                                <h3 className='playFair__font'>Family Law</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PracticeSec
