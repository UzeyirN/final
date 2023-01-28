import React from 'react'
import './LegalSolution.css'
import '../../PlayFair.css'

const LegalSolution = () => {
    return (
        <>
            <div className="solution-wrapper">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-4 col-lg-4 col-md-12 col-sm-12 book-img">
                            <img style={{ objectFit: "cover", width: "100%", height: "100%" }} src="https://preview.colorlib.com/theme/notary/images/atty_2.jpg" alt="" />
                        </div>
                        <div className="col-4 col-lg-4 col-md-12 col-sm-12 solution-img">
                            <h3 style={{ fontSize: "40px", color: "#364D59" }} className='playFair__font'><span className='playFair__font' style={{ fontWeight: 400 }}> We Have</span> Legal Solutions</h3>
                            <p style={{ color: "RGB(54, 77, 89)" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam reprehenderit perspiciatis iste culpa consequuntur consequatur eum, voluptatum, quod deserunt maiores?</p>
                            <p style={{ color: "RGB(54, 77, 89)" }}>Modi perferendis ipsa ducimus consequuntur excepturi autem, numquam facere aperiam iste nam molestias provident consectetur molestiae voluptatibus ipsum. Fugiat, quas.</p>
                            <div className='check-wrapper'>
                                <i class="fa-solid fa-check"></i>
                                <span style={{ color: "RGB(54, 77, 89)" }}>Aperiam iste nam molestias</span>
                            </div>
                            <div className='check-wrapper'>
                                <i class="fa-solid fa-check"></i>
                                <span style={{ color: "RGB(54, 77, 89)" }}>Aperiam iste nam molestias</span>
                            </div>
                            <div className='check-wrapper'>
                                <i class="fa-solid fa-check"></i>
                                <span style={{ color: "RGB(54, 77, 89)" }}>Aperiam iste nam molestias</span>
                            </div>
                        </div>

                        <div className="col-4 col-lg-4 col-md-12 col-sm-12" style={{ display: "flex", justifyContent: "center", alignItems: "flex-start" }}>
                            <div >
                                <div style={{ border: "1px solid gray", padding: "5px", width: "100%", marginBottom: "5px",textAlign:"center" }}><p>How to download and Register?</p></div>
                                <div style={{ padding: "5px", width: "100%", backgroundColor: "#F8F9FA" }}>
                                    <p style={{ color: "RGB(136, 136, 136)" }}>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
                                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default LegalSolution
