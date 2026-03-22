export function getAllDataService(state){
    fetch("https://job-tracker-t0qo.onrender.com/")
    .then(jsonResponse => jsonResponse.json())
    .then(data => state(data))
}