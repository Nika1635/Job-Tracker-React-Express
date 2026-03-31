import './jobtracker.module.css'
import '../../styles/componentstyles.css'
import '../../styles/buttonstyle.css'
import { useEffect} from 'react'
import { jobDeleteRequest, jobGetRequest } from '../services'

export default function Jobtracker({modalStatus, showModalActivate, trackerJobData, setTrackerJobData, setLoaderStatus, setMode, setJobId}){

    useEffect(() => {
        jobGetRequest(setTrackerJobData, setLoaderStatus)
    }, [])



    const deleteButton = async (e) => {
        const id = e.target.value
        jobDeleteRequest(id, setTrackerJobData, setLoaderStatus)
    }

    return(
        <section className='component-hero'>
            <div className='component-header'>
                <h1>Job Tracker</h1>
                <button onClick={() =>{showModalActivate(!modalStatus), setMode("new")}}>Add New</button>
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
                                <td>
                                    <button value={data.id} onClick={deleteButton}>Delete</button>
                                    <button value={data.id} onClick={() =>{showModalActivate(!modalStatus), setMode("edit"), setJobId(data.id)}}>Edit</button>
                                </td>
                            </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </section>
    )
}