import React from 'react'
import './LegalSolution.css'
import '../../PlayFair.css'

const LegalSolution = () => {
    return (
        <>
            <div className="solution-wrapper">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-4 book-img">
                            <img style={{ objectFit: "cover", width: "100%", height: "100%" }} src="https://preview.colorlib.com/theme/notary/images/atty_2.jpg" alt="" />
                        </div>
                        <div className="col-4 solution-img">
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

                        <div className="col-4" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <div class="dropdown show">
                                <a class="btn btn-secondary dropdown-toggle"  role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown link
                                </a>

                                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <a class="dropdown-item" href="/">Action</a>
                                    <a class="dropdown-item" href="/">Another action</a>
                                    <a class="dropdown-item" href="/">Something else here</a>
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
