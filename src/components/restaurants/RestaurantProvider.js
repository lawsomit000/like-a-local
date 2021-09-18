import React, {useState, createContext} from "react"
import { Route } from "react-router-dom"

// The context is imported and used by individual components that need data
export const RestaurantContext = createContext()

export const RestaurantProvider = (props) => {
    const [restaurants, setRestaurants] = useState([])

    const getRestaurants = () => {
        return fetch("http://localhost:8088/restaurant")
        .then(res => res.json())
        .then(setRestaurants)
    }

    const addRestaurant = restaurant => {
        return fetch("http://localhost:8088/restaurant", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(restaurant)
        }) 
        .then(response => response.json().then(getRestaurants))
    }

    const deleteRestaurant = restaurant => {
        return fetch (`http://localhost:8088/restaurant/${restaurant}`, {
            method: "DELETE"
        })
        .then(getRestaurants)
    }

    // You return a context provider which has the
    //     functions above as keys. This
    //     allows any child elements to access them.

    return (
        <RestaurantContext.Provider value ={{
            restaurants, getRestaurants, addRestaurant, deleteRestaurant
        }}>
            {props.children}
        </RestaurantContext.Provider>
    )
}