import React, {useEffect, useState } from 'react'
import axios from "axios"
import { Link, useParams } from 'react-router-dom'

// get id from params (useParams)
// get data from backend on load (useEffect, axios)
// oneJob : useState
const DetailsPage = () => {
    const [job, setJob] = useState()

    const {id} = useParams()

    useEffect(() =>{
        axios.get(`http://localhost:8000/api/jobs/${id}`)
        .then(response=>{
            // console.log first to check console on inspect page
            setJob(response.data)
        })
        .catch(err=> console.log(err))
    })

    return (
        <div>
            {
                job?
                <div>
                    <h3> Job Title: {job.title}</h3>
                    <h3> Job company: {job.company}</h3>
                    <h3> Job salary: {job.salary}</h3>
                    <h3> Remote Working : {job.isRemote?"Yes":"No"}</h3>
                    <h3> Applied : {job.isApplied?"Yes":"No"}</h3>
                    <Link to={`/jobs/edit/${job._id}`}> Edit </Link>
                </div>:
                <h1> The job is not available</h1>
            }
        </div>
    )
}

export default DetailsPage