import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Link } from "react-router-dom"


// get jobList from api on load (axios, useEffect)
// var change for jobList : useState
// Link for links
const DashboardPage = () => {
    const [jobList, setJobList] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/jobs')
        .then(response=> {
            // console.log first to check console on inspect page
            setJobList(response.data)
        })
        .catch(err=>console.log(err))
    }, [])

    const handleDelete=(deleteID)=>{
        axios.delete(`http://localhost:8000/api/jobs/${deleteID}`)
        .then(response=>{
            const filteredList = jobList.filter((eachJob)=>eachJob._id != deleteID)
            setJobList(filteredList)
        })
        .catch(err=>console.log(err))
    }


    return (
        <div>
            <p>
                <Link to="/jobs/new"> <button>Create new job</button> </Link>
            </p>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Company</th>
                        <th>Salary</th>
                        <th>Remote</th>
                        <th>Applied</th>
                        <th colSpan={2}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        jobList.map((eachJob, idx) =>{
                            return(
                                <tr key={idx}>
                                    <td><Link to={`/jobs/${eachJob._id}`}>{eachJob.title}</Link></td>
                                    <td>{eachJob.company}</td>
                                    <td>{eachJob.salary}</td>
                                    <td>{eachJob.isRemote?"Yes":"No"}</td>
                                    <td>{eachJob.isApplied?"Yes":"No"}</td>
                                    <td>{eachJob.actions}</td>
                                    <td><Link to={`/jobs/edit/${eachJob._id}`} className='btn btn-primary'>Edit</Link></td>
                                    <td><button className='btn btn-danger'onClick={()=>handleDelete(eachJob._id)}> Delete</button></td>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default DashboardPage