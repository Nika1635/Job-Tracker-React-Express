import styles from './jobtracker.module.css'
import '../../styles/componentstyles.css'
import '../../styles/buttonstyle.css'
import { useEffect, useState } from 'react'

export default function Jobtracker({modalStatus, showModalActivate}){

    const [jobData, setJobData] = useState([])

    useEffect(() => {
        fetch("https://job-tracker-t0qo.onrender.com/")
        .then(jsonResponse => jsonResponse.json())
        .then(data => setJobData(data))
    }, [])

    const logButton = (e) => {
        console.log(e.target.value)
    }

    return(
        <section className='component-hero'>
            <div className='component-header'>
                <h1>Job Tracker</h1>
                <button onClick={() =>{showModalActivate(!modalStatus)}}>Add New</button>
            </div>

            <div className='component-info'>
                <table>
                    <thead>
                        <tr>
                            <th>Company name</th>
                            <th>Position</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobData.map((data) => (
                            <tr key={data.id}>
                                <td>{data.company}</td>
                                <td>{data.position}</td>
                                <td>{data.status}</td>
                                <td><button value={data.id} onClick={logButton}>Delete</button></td>
                            </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </section>
    )
}