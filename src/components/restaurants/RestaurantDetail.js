import React, {useContext, useEffect, useState } from "react"
import { RestaurantContext } from "./RestaurantProvider"
import "./Restaurant.css"
import { useParams } from "react-router-dom"
import Image from 'react-bootstrap/Image'

export const RestaurantDetail = () => {
    const { restaurants } = useContext(RestaurantContext)
    const [ restaurant, setRestaurant ] = useState({})

    const { restaurantId } = useParams();

    useEffect(() => {
        const thisRestaurant = restaurants.find(r => r.id === parseInt
            (restaurantId)) 

        setRestaurant(thisRestaurant)
    }, [restaurantId])

    return (
        <>
        <section className="restaurantDetail">
            <h3> {restaurant.name} </h3>
            <Image className="reactImage" src={restaurant.imageURL} fluid />
            <p>{restaurant.description} </p>
        </section>
        </>
    )
}