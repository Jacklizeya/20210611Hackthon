import React, {useState, useEffect} from 'react'
import axios from "axios"

export default function Location() {

    const [locations, setLocations] = useState([])
    const [locationname, setLocationname] = useState("")
    const [latitude, setLatitude] = useState("")
    const [longitude, setLongitude] = useState("")

    const createNewLocation = () => {
        const createLocation = async () => {
            const {data} = await axios.post("/api/locations", {locationname, coordinates: {latitude, longitude}} ,{headers: {"content-type": "application/json"}})
            console.log("data", data)
            setLocationname("")
            setLatitude("")
            setLongitude("")
        }
        createLocation()
    }

    useEffect(()=>{
        const getLocations = async() => {
            const {data} = await axios.get("/api/locations", {headers: {"content-type": "application/json"}})
            console.log(data)
            setLocations(data) // could cause infinite loop
        }
        getLocations()
    }, []) 

    return (
        <div>
            <form onSubmit={createNewLocation}>
                <label> locationname </label>
                <input type="text" value={locationname} onChange={(e)=>{setLocationname(e.target.value)}}/> <br></br>
                <label> latitude </label>
                <input type="text" value= {latitude} onChange={(e)=>{setLatitude(e.target.value)}}/> <br></br>
                <label> longitude </label>
                <input type="text" value= {longitude} onChange={(e)=>{setLongitude(e.target.value)}}/> <br></br>
                <button type="submit"> Add a new location </button>
            </form>
            
            <p> The current locations </p>
            <table>
                <tr>
                    <th> Facility Name </th>
                    <th> Latitude </th>
                    <th> Longitude </th>
                </tr>
            {locations.map(
                location => 
                (<tr>  
                <td> {location.locationname} </td>
                <td> {location.coordinates.latitude} </td>
                <td> {location.coordinates.longitude} </td>
                </tr>)
            )}
            </table>
            
        </div>
    )
}
