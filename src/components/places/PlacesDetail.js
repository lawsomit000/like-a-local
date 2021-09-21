import React, {useContext, useEffect, useState } from "react"
import { PlacesContext } from "./PlacesProvider"
import "./Places.css"
import { useParams } from "react-router-dom"
import Image from 'react-bootstrap/Image'

export const PlaceDetail = () => {
    const { places } = useContext(PlacesContext)
    const [ place, setPlace] = useState({})

    const { placeId } = useParams();

    useEffect(() => {
        const thisPlace = places.find(p => p.id === parseInt
            (placeId)) 

        setPlace(thisPlace)
    }, [placeId])

    return (
        <>
        <section className="placeDetail">
            <h3> {place.cityName}, {place.cityState} </h3>
            <Image className="reactImage" src={place.imageURL} fluid />
            <p>{place.description} </p>
        </section>
        </>
    )
}