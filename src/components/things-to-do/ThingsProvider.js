import React, {useState, createContext} from "react"
import { Route } from "react-router-dom"
import { ThingsDetail } from "./ThingsDetail"

// The context is imported and used by individual components that need data
export const ThingsContext = createContext()

export const ThingsProvider = (props) => {
    const [things, setThings] = useState([])

    const getThings = () => {
        return fetch("http://localhost:8088/things")
        .then(res => res.json())
        .then(setThings)
    }

    const addThing = thing => {
        return fetch("http://localhost:8088/things", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(thing)
        }) 
        .then(response => response.json().then(getThings))
    }

    const deleteThing = thing => {
        return fetch (`http://localhost:8088/things/${thing}`, {
            method: "DELETE"
        })
        .then(getThings)
    }

    <ThingProvider>
        <Route exact path="/things-to-do/detail/:thingId(\d+)">
            <ThingDetail />
        </Route>
    </ThingProvider>

    // You return a context provider which has the
    //     functions above as keys. This
    //     allows any child elements to access them.

    return (
        <ThingsContext.Provider value ={{
            things, getThings, addThing, deleteThing
        }}>
            {props.children}
        </ThingsContext.Provider>
    )
}