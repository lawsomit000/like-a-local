import React, {useState, createContext} from "react"
import { Route } from "react-router-dom"

// The context is imported and used by individual components that need data
export const PlacesContext = createContext()

export const PlaceProvider = (props) => {
    const [places, setPlaces] = useState([])

    const getPlaces = () => {
        return fetch("http://localhost:8088/places")
        .then(res => res.json())
        .then(setPlaces)
    }

    const addPlace = place => {
        return fetch("http://localhost:8088/places", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(place)
        }) 
        .then(response => response.json().then(getPlaces))
    }

    const deletePlace = place => {
        return fetch (`http://localhost:8088/places/${place}`, {
            method: "DELETE"
        })
        .then(getPlaces)
    }

    // You return a context provider which has the
    //     functions above as keys. This
    //     allows any child elements to access them.

    return (
        <PlacesContext.Provider value ={{
            places, getPlaces, addPlace, deletePlace
        }}>
            {props.children}
        </PlacesContext.Provider>
    )
}