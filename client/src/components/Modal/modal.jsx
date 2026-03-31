import { useEffect, useState } from 'react'
import "./modal.css"
import { getJobWithIdRequest, jobPostRequest } from '../services.jsx'

export default function Modal({modalStatus, showModalActivate, setModalJobData, setLoaderStatus, mode, jobId}){
    const [formData, setFormData] = useState({
        company: "",
        position: "",
        status: ""
    })

    useEffect(() => {
        if(mode === "edit"){
            getJobWithIdRequest(setFormData, setLoaderStatus, jobId)
        }
    }, [])

    const handleChanges = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(mode === "new"){
            jobPostRequest(formData, setModalJobData, setLoaderStatus)
        } else if(mode === "edit"){
            console.log(formData)
        }
    }

    return (
        <div className="modalHero" onClick={() => {showModalActivate(!modalStatus)}}>
            <section 
                className='component-hero'
                onClick={(e) => e.stopPropagation()}
            >
                <h1 className='modal-header'>
                    {mode === "new" ? "New Job" : mode === "edit" ? "Edit Job" : ""}
                </h1>
                <form className ="modal-form" onSubmit={handleSubmit}>
                    <div className="modal-inputfield">
                        <label htmlFor="company">Company Name</label>
                        <input type="text" name="company" onChange={handleChanges} value={mode === "new" ? formData.company : mode === "edit" ? formData.company : "0"}/>
                    </div>
                    <div className="modal-inputfield">
                        <label htmlFor="position">Position</label>
                        <input type="text" name="position" onChange={handleChanges} value={mode === "new" ? formData.position : mode === "edit" ? formData.position : "0"}/>
                    </div>
                    <div className="modal-inputfield">
                        <label htmlFor="status">Status</label>
                        <select value={mode === "new" ? formData.status : mode === "edit" ? formData.status : "0"} name="status" onChange={handleChanges}>
                            <option value="" disabled>Status</option>
                            <option value="Applied">Applied</option>
                            <option value="Interview">Interview</option>
                            <option value="Rejected">Rejected</option>
                            <option value="Offer">Offer</option>
                            <option value="Accepted">Accepted</option>
                        </select>
                    </div>
                    <button type="submit" className="modal-submit">Submit</button>
                </form>
            </section>
        </div>
    )
}