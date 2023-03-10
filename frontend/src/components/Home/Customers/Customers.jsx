import React, { useEffect } from 'react'
import { useState } from 'react'
import './Customers.css'
import axios from 'axios'

const Customers = () => {
    const [customers, setCustomers] = useState(null)
    const [value, setValue] = useState("")

    const getData = () => {
        fetch('http://localhost:3080/customers')
            .then((response) => response.json())
            .then((data) => setCustomers(data));
    }
    const searchData = (e) => {
        setValue(e.target.value)
    }
    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:3080/customers/${id}`)
        getData()
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <div className="customers-wrapper">
                < div style={{ width: "40%", margin: "30px auto 50px auto", textAlign: "center" }}>
                    <div style={{ margin: "0 auto" }}> <h2 style={{ color: "RGB(54, 77, 89)" }} className='playFair__font'>Happy Customers</h2></div>
                    <div>
                        <p>Search...</p>
                        <input onChange={searchData} type="text" placeholder='search customer' style={{ padding: "5px 10px" }} />
                    </div>
                </div>
                <div className="container">
                    <div className="row g-5">
                        {
                            customers?.filter(data => {
                                return value.trim().toLowerCase() === "" ? data : data.name.toLowerCase().includes(value.toLowerCase())
                            })
                                .map(({ _id, image, name,specialty, comment }) => (
                                    <div className="col-4 col-lg-4 col-md-12 col-sm-12">
                                        <div className="practice-card__wrapper">
                                            <div style={{ display: "flex", justifyContent: "start" }}>
                                                <div className='customer-img__wrapper'>
                                                    <div className="customer-img">
                                                        <img src={image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                                    </div>
                                                    <div className="customer-name">
                                                        <div style={{ color: "RGB(54, 77, 89)" }}>{name}</div>
                                                        <div style={{ color: "RGB(204, 204, 204)" }}>{specialty}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p style={{ color: "RGB(54, 77, 89)" }}>{comment}</p>
                                        </div>
                                        <button onClick={() => handleDelete(_id)} className='delete-btn'>DELETE</button>
                                    </div>
                                ))
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default Customers
