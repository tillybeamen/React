import React, {useState} from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import {Link} from "react-router-dom"

// form: input & submit (input : state)
// post data to backend : axios
// redirect: useNavigate
const CreatePage = () => {
    const [title, setTitle] = useState("")
    const [company, setCompany] = useState("")
    const [salary, setSalary] = useState("")
    const [isRemote, setIsRemote] = useState(false)

    const [errors, setErrors ] = useState([])

    const navigate = useNavigate()

    const handleSubmit =(e)=>{
        e.preventDefault()
        axios.post("http://localhost:8000/api/jobs", {title, company, salary, isRemote, isApplied: false})
        .then(response=>{
            console.log(response.data)
            navigate(`/jobs/${response.data._id}`)
            // localhost:3000/jobs/id
        })
        .catch(err=>{
            const errorResponseData = err.response.data.errors 
            const errMsgArr =[]

            for(const eachKey in errorResponseData){
                errMsgArr.push(errorResponseData[eachKey].message)
            }
            setErrors(errMsgArr)
        })
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
            <button type="submit" className='btn btn-primary mt-2'>Create Job</button>
            <button type='button' className='btn btn-secondary mt-2 mx-2' onClick={()=>navigate("/")}>Cancel</button>
            </form>
            {
                errors.map((err, idx) =>(
                    <p className='mt-3' key={idx} style={{color:"red"}}>{err}</p>
                ))
            }
        </div>
    )
}

export default CreatePage
                
