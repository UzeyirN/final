import React from 'react'
import './Book.css'

const Book = () => {
    return (
        <>
            <div className="book-wrapper">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-4 book-img">
                            <img style={{ objectFit: "cover", width: "100%", height: "100%" }} src="https://preview.colorlib.com/theme/notary/images/atty_1.jpg" alt="" />
                        </div>
                        <div className="col-4 book-img">
                            <img style={{ objectFit: "cover", width: "100%", height: "100%" }} src="https://preview.colorlib.com/theme/notary/images/atty_2.jpg" alt="" />
                        </div>
                        <div className="col-4" style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <div className="book">
                                <h2 style={{ color: "RGB(54, 77, 89)" }} className='playFair__font'>We Provide Highly Reliable & Effective Legal Solutions</h2>
                                <p style={{ color: "RGB(54, 77, 89)" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, explicabo iste a labore id est quas, doloremque veritatis!
                                    Provident odit pariatur dolorem quisquam, voluptatibus voluptates optio accusamus, vel quasi quidem!</p>
                                    <button className='book-btn' >Book an appointment</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Book
