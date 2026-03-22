import { useState } from "react"
import "./modal.css"

export default function Modal({modalStatus, showModalActivate}){
    const [formData, setFormData] = useState({
        company: "",
        position: "",
        status: "Interview"
    })

    const handleChanges = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        // e.preventDefault()
        console.log(formData)
        fetch("https://job-tracker-t0qo.onrender.com/", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData)
        })
    }

    return (
        <div className="modalHero" onClick={() => {showModalActivate(!modalStatus)}}>
            <section 
                className='component-hero'
                onClick={(e) => e.stopPropagation()}
            >
                <form className ="modal-form"  onSubmit={handleSubmit}>
                    <div className="modal-inputfield">
                        <label htmlFor="company">Company Name</label>
                        <input type="text" name="company" onChange={handleChanges} />
                    </div>
                    <div className="modal-inputfield">
                        <label htmlFor="position">Position</label>
                        <input type="text" name="position" onChange={handleChanges} />
                    </div>
                    <button type="submit" className="modal-submit">submit</button>
                </form>
            </section>
        </div>
    )
}