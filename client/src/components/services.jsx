export function jobGetRequest(state, setLoaderStatus){
    setLoaderStatus(true)
    fetch("https://job-tracker-t0qo.onrender.com/")
    .then(jsonResponse => jsonResponse.json())
    .then(data => state(data))
    setLoaderStatus(false)
}

export async function jobDeleteRequest(id, changeData, setLoaderStatus){
    setLoaderStatus(true)
    await fetch(`https://job-tracker-t0qo.onrender.com/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
    })
    changeData(prev => prev.filter(job => job.id !== +id))
    setLoaderStatus(false)
}

export async function jobPostRequest(data, setData, setLoaderStatus){
    setLoaderStatus(true)
    const response = await fetch("https://job-tracker-t0qo.onrender.com/", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    })
    const newJob = await response.json()
    setData(prev => [...prev, newJob])
    setLoaderStatus(false)
}

export async function getJobWithIdRequest(setData, setLoaderStatus, id){
    setLoaderStatus(true)
    const response = await fetch(`https://job-tracker-t0qo.onrender.com/${JSON.parse(id)}`)
                            .then(jsonResponse => jsonResponse.json())
                            .then(async (data) => setData({
                                company: data[0].company,
                                position: data[0].position,
                                status: data[0].status,
                                id: data[0].id
                            }))
    setLoaderStatus(false)
}