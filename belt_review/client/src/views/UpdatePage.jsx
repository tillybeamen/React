import React, {useEffect, useState } from 'react'
import axios from "axios"
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


// get id from params (useParams)
// get data from backend on load (useEffect, axios)

// form: input & submit (input : state)
// post data to backend : axios
// redirect: useNavigate

const UpdatePage = () => {
    const {id} = useParams()

    const [title, setTitle] = useState("")
    const [company, setCompany] = useState("")
    const [salary, setSalary] = useState("")
    const [isRemote, setIsRemote] = useState(false)
    const [isApplied, setIsApplied] = useState(false)

    const navigate = useNavigate()

    const handleSubmit =(e)=>{
        e.preventDefault()
        axios.patch(`http://localhost:8000/api/jobs/${id}`, {title, company, salary, isRemote, isApplied})
        .then(response=>{
            navigate(`/jobs/${id}`)
        })
        .catch(err=>console.log(err))
    }

    useEffect(() =>{
        axios.get(`http://localhost:8000/api/jobs/${id}`)
        .then(response=>{
            // console.log first to check console on inspect page
            const job = response.data
            console.log(job)
            setTitle(job.title)
            setCompany(job.company)
            setSalary(job.salary)
            setIsRemote(job.isRemote)
            setIsApplied(job.isApplied)
        })
        .catch(err=> console.log(err))
    }, [id])

    const handleDelete=()=>{
        axios.delete(`http://localhost:8000/api/jobs/${id}`)
        .then(response=>navigate("/"))
        .catch(err=>console.log(err))
    }



    return (
        <div>
        <form onSubmit={handleSubmit}>
        <div>
            <label> Title: </label> 
            <input type="text" name="title" value={title} onChange={e=>setTitle(e.target.value)} className="form-control mt-2"/>
        </div>
        <div>
            <label> Company: </label>
            <input type="text" name="company" value={company} onChange={e=>setCompany(e.target.value)} className="form-control mt-2"/>
        </div>
        <div>
            <label> Salary: </label>
            <input  type="number" name="salary" value={salary} onChange={e=>setSalary(e.target.value)} className="form-control mt-2"/>
        </div>
        <div>
            <input type="checkbox" className='mt-2' name="isRemote" checked={isRemote} onChange={e=>setIsRemote(e.target.checked)} />
            <label className='mx-2'>Remote</label>
        </div>
        <div>
            <input type="checkbox" className='mt-2' name="isApplied" checked={isApplied} onChange={e=>setIsApplied(e.target.checked)} />
            <label className='mx-2'>Applied?</label>
        </div>
        <button type="submit" className='btn btn-primary mt-2'>Update Job</button>
        <button type='button' className='btn btn-secondary mt-2 ' onClick={()=>navigate("/")}>Cancel</button>
        <button type='button' className='btn btn-danger mt-2' onClick={handleDelete}>Delete</button>
        </form>
        
    </div>
    )
}

export default UpdatePage