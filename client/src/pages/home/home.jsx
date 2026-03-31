import { useState } from "react";
import Jobtracker from "../../components/JobTracker/jobtracker";
import Modal from "../../components/Modal/modal";
import Loader from "../../components/loader/loader";

export default function Home(){

    const [showModal, setShowModal] = useState(false)
    const [jobData, setJobData] = useState([])
    const [loaderStatus, setLoaderStatus] = useState(false)

    const [mode, setMode] = useState("")
    const [jobId, setJobId] = useState(null)

    return(
        <>
        {
            loaderStatus?
                <Loader/>
            : null
        }
            {
                showModal ? <Modal 
                    modalStatus = {showModal}
                    showModalActivate={setShowModal}
                    setModalJobData={setJobData}
                    setLoaderStatus={setLoaderStatus}
                    mode={mode}
                    jobId={jobId}
                /> : null
            }
            <Jobtracker 
                modalStatus = {showModal}
                showModalActivate={setShowModal}
                trackerJobData={jobData}
                setTrackerJobData={setJobData}
                setLoaderStatus={setLoaderStatus}
                setMode={setMode}
                setJobId={setJobId}
            />
        </>
    )
}