import React, { useEffect, useState, useMemo } from "react"
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useLoadScript
} from "@react-google-maps/api"
import mapStyles from "./mapStyles"

const libraries = ["places"]
const mapContainerStyle = {
  width: "50vw",
  height: "685px",
  border: "4px solid #05386B",
  borderRadius: "20px",
  minWidth: "575px"
}
const center = {
  lat: 51.01,
  lng: -114.1
}
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true
}

export default function GardenMap() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries
  })

  // This is passed through the first Marker array
  const loadingMessage = [{name: 'Loading...', address: "This won't take long!", "coordinates":{"lat":"0","lng":"0"}}]
  const [swimmingList, setSwimmingList] = useState(loadingMessage)
  
  useEffect(() => {
    const getAllSwimming = async () => {
      let fetchUrl = "/api/swimming/get"
      let response = await fetch(fetchUrl)
      let resObject = await response.json()
      let listResult = resObject.swimmingList

      setSwimmingList(listResult)
    }
    getAllSwimming()
  }, [])

  // Prevent re-rendering of data

  // Prevent re-rendering of data
  const data = useMemo(() => swimmingList, [swimmingList])
  
  const [selected, setSelected] = React.useState(null)

  if (loadError) return "Error loading maps"
  if (!isLoaded) return "Loading Maps"
  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10.5}
        center={center}
        options={options}
      >
        {data.map(function (marker, index) {
          return (
            <Marker
              key={marker.locationName}
              position={{lat: parseFloat(marker.coordinates.lat), lng: parseFloat(marker.coordinates.Lng)}}
              onMouseOver={() => {
                setSelected(marker)
              }}
            />
          )
        })}

        {selected ? (
          <InfoWindow
            position={{lat: parseFloat(selected.coordinates.lat), lng: parseFloat(selected.coordinates.Lng)}}
            onCloseClick={() => {
              setSelected(null)
            }}
          >
            <div style={{ fontWeight: "bold" }}>{selected.locationName}</div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  )
}
