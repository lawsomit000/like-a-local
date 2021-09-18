import React, { useContext, useEffect } from "react"
import { AttractionsContext } from "./AttractionsProvider"
import "./Attractions.css"
import { useHistory } from "react-router-dom"
import { Card, Button } from "react-bootstrap"

export const AttractionsList = () => {
    const { attractions, getAttractions } = useContext(AttractionsContext)
    const { deleteAttraction } = useContext(AttractionsContext)

    const history = useHistory()

    useEffect(() => {
        getAttractions()
    }, [])

    const handleDelete = (attraction) => {
        deleteAttraction(attraction.id)
            .then(() => {
            })
    }

    return (
        <>
            <h2>My favorite things to do in Nashville</h2>
            <Button onClick={
                () => history.push("/things-to-do/create")
            }>
                Add Attraction
            </Button>
            <section className="attractionList">
                {
                    attractions.map(attraction => {
                        return (
                            <div className="attraction">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={attraction.imageURL} />
                                    <Card.Body>
                                        <Card.Title>{attraction.name}</Card.Title>
                                        <Card.Text>
                                            {attraction.description}
                                        </Card.Text>
                                        <Button onClick={() => {
                                            history.push(`/things-to-do/detail/${attraction.id}`)
                                        }} type="button" variant="outline-primary">View</Button>
                                        <Button onClick={() => handleDelete(attraction)} type="button" variant="outline-primary">Delete</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    })
                }
            </section>
        </>
    )
}