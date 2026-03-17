import styles from './jobtracker.module.css'
import '../componentstyles.css'
import { useEffect, useState } from 'react'

export default function Jobtracker(){

    const [jobData, setJobData] = useState([])

    useEffect(() => {
        fetch("https://job-tracker-t0qo.onrender.com/")
        .then(jsonResponse => jsonResponse.json())
        .then(data => setJobData(data))
    }, [])

    return(
        <section className='component-hero'>
            <div className='component-header'>
                <h1>Job Tracker</h1>
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
                            </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </section>
    )
}