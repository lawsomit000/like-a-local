import React, {useContext, useEffect, useState } from "react"
import { RestaurantContext } from "./RestaurantProvider"
import "./Restaurant.css"
import { useParams } from "react-router-dom"

export const RestaurantDetail = () => {
    const { restaurants } = useContext(RestaurantContext)
    const [ restaurant, setRestaurant ] = useState()
    console.log('hello')

    const { restaurantId } = useParams();

    useEffect(() => {
        const thisRestaurant = restaurants.find(a => a.id === restaurantId) 

        setRestaurant(thisRestaurant)
    }, [restaurantId])

    return (
        <section className="restaurantDetail">
            <h3>Hello </h3>
        </section>

    )
}