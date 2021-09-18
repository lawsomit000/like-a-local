import React, {useState, createContext} from "react"
import { Route } from "react-router-dom"

// The context is imported and used by individual components that need data
export const AttractionsContext = createContext()

export const AttractionsProvider = (props) => {
    const [attractions, setAttraction] = useState([])

    const getAttractions = () => {
        return fetch("http://localhost:8088/attractions")
        .then(res => res.json())
        .then(setAttraction)
    }

    const addAttraction = attraction => {
        return fetch("http://localhost:8088/attractions", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(attraction)
        }) 
        .then(response => response.json().then(getAttractions))
    }

    const deleteAttraction = attraction => {
        return fetch (`http://localhost:8088/attractions/${attraction}`, {
            method: "DELETE"
        })
        .then(getAttractions)
    }

    // <AttractionsProvider>
    //     <Route exact path="/things-to-do/detail/:attractionId(\d+)">
    //         <AttractionDetail />
    //     </Route>
    // </AttractionsProvider>

    // You return a context provider which has the
    //     functions above as keys. This
    //     allows any child elements to access them.

    return (
        <AttractionsContext.Provider value ={{
            attractions, getAttractions, addAttraction, deleteAttraction
        }}>
            {props.children}
        </AttractionsContext.Provider>
    )
}