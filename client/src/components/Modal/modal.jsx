import { useEffect, useState } from 'react'
import "./modal.css"
import { jobPostRequest } from '../services.jsx'

export default function Modal({modalStatus, showModalActivate, setModalJobData, setLoaderStatus}){
    const [formData, setFormData] = useState({
        company: "",
        position: "",
        status: ""
    })

    const handleChanges = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(formData)
        jobPostRequest(formData, setModalJobData, setLoaderStatus)
    }

    return (
        <div className="modalHero" onClick={() => {showModalActivate(!modalStatus)}}>
            <section 
                className='component-hero'
                onClick={(e) => e.stopPropagation()}
            >
                <form className ="modal-form" onSubmit={handleSubmit}>
                    <div className="modal-inputfield">
                        <label htmlFor="company">Company Name</label>
                        <input type="text" name="company" onChange={handleChanges} />
                    </div>
                    <div className="modal-inputfield">
                        <label htmlFor="position">Position</label>
                        <input type="text" name="position" onChange={handleChanges} />
                    </div>
                    <div className="modal-inputfield">
                        <label htmlFor="status">Status</label>
                        <select value={formData.status} name="status" onChange={handleChanges}>
                            <option value="" disabled>Status</option>
                            <option value="Applied">Applied</option>
                            <option value="Interview">Interview</option>
                            <option value="Rejected">Rejected</option>
                            <option value="Offer">Offer</option>
                            <option value="Accepted">Accepted</option>
                        </select>
                    </div>
                    <button type="submit" className="modal-submit">Edit</button>
                </form>
            </section>
        </div>
    )
}