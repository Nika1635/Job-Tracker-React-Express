import './jobtracker.module.css'
import '../../styles/componentstyles.css'
import '../../styles/buttonstyle.css'
import { useEffect} from 'react'
import { getAllDataService } from '../services'

export default function Jobtracker({modalStatus, showModalActivate, trackerJobData, setTrackerJobData}){

    useEffect(() => {
        getAllDataService(setTrackerJobData)
    }, [])

    const deleteButton = async (e) => {
        const id = e.target.value
        const response = await fetch(`https://job-tracker-t0qo.onrender.com/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        })
        setTrackerJobData(prev => prev.filter(job => job.id !== +id))
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
                        {trackerJobData.map((data) => (
                            <tr key={data.id}>
                                <td>{data.company}</td>
                                <td>{data.position}</td>
                                <td>{data.status}</td>
                                <td><button value={data.id} onClick={deleteButton}>Delete</button></td>
                            </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </section>
    )
}