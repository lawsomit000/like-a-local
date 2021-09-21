import React, { useContext, useEffect } from "react"
import { PlacesContext } from "./PlacesProvider"
import "./Places.css"
import { Card, Button } from 'react-bootstrap';
// import "bootstrap/dist/css/bootstrap.min.css"
import { useHistory } from "react-router-dom";

export const PlacesList = () => {
    const { places, getPlaces } = useContext(PlacesContext)
    const { deletePlace } = useContext(PlacesContext)

    const history = useHistory()

    useEffect(() => {
        getPlaces()
    }, [])

    const handleDelete = (place) => {
        deletePlace(place.id)
            .then(() => {
            })
    }

    return (
        <>
            <div className="placeContainer">
                <div className="placeHeader">
                <h2>My Favorite Places</h2>
                <Button className="placeBtn" onClick={
                    () => history.push("/places/create")
                }>
                    Add Places
                </Button>
                </div>
                <section className="placeList">
                    {
                        places.map(place => {
                            return (
                                <div className="">
                                    <Card className="place" style={{ width: '18rem' }}>
                                        <Card.Img variant="top" className="cardImg" src={place.imageURL} />
                                        <Card.Body>
                                            <Card.Title>{place.cityName}</Card.Title>
                                            <Button onClick={() => {
                                                history.push(`/places/detail/${place.id}`)
                                            }} type="button" variant="outline-primary">View</Button>
                                            <Button onClick={() => handleDelete(place)} type="button" variant="outline-primary">Delete</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        })
                    }
                </section>
            </div>
        </>
    )
}