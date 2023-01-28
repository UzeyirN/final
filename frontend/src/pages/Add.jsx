import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import '../styles/Add.css'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from '../schema/FormValidation';
import axios from 'axios'

const Add = () => {

    const [state, setState] = useState({
        image: "",
        name: "",
        comment: "",
    })

    const addData = () => {
        axios.post("http://localhost:3080/customers", state);

        setState({
            image: "",
            name: "",
            specialty: "",
            comment: "",
        })

    }

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data) => {
        console.log({ data });
        addData()
    };
    return (
        <>
            <Helmet>
                <title>
                    Add
                </title>
            </Helmet>
            <div className="add-wrapper">
                <form onSubmit={handleSubmit(onSubmit)} className='add-form'>
                    <input name='image' value={state.image} {...register("image")} className='add-input' type="text" placeholder='image link' onChange={handleChange} />
                    <p className='error-message'>{errors.image?.message}</p>

                    <input name='name' value={state.name} {...register("name")} className='add-input' type="text" placeholder='name' onChange={handleChange} />
                    <p className='error-message'>{errors.name?.message}</p>

                    <input name='specialty' value={state.specialty} {...register("specialty")} className='add-input' type="text" placeholder='specialty' onChange={handleChange} />
                    <p className='error-message'>{errors.specialty?.message}</p>

                    <input name='comment' value={state.comment} {...register("comment")} className='add-input' type="text" placeholder='comment' onChange={handleChange} />
                    <p className='error-message'>{errors.comment?.message}</p>

                    <button className='add-btn'>Add</button>


                </form>
            </div>


        </>
    )
}

export default Add
