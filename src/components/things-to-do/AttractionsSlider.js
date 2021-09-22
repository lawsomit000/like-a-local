import React, { useContext, useEffect } from "react"
import { AttractionsContext } from "./AttractionsProvider"
import "./Attractions.css"
import { useHistory } from "react-router-dom"
import "react-multi-carousel/lib/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, Button } from 'react-bootstrap';
import Slider from "react-slick"
import { NextArrow, PrevArrow } from "../utilities/SliderArrows";


export const AttractionsSlider = () => {

    const { attractions, getAttractions } = useContext(AttractionsContext)
    const history = useHistory()
    const { deleteAttraction } = useContext(AttractionsContext)

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: < NextArrow />,
        prevArrow: < PrevArrow />

    };

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
            <div className="slickContainer">
                <div className="sliderHead">
                    <h2>My Attractions</h2>
                    <Button onClick={
                        () => history.push("/attractions/create")
                    }>
                        Add Attraction
                    </Button>
                </div>
                <Slider className="slickSlider" {...settings}>
                    {
                        attractions.map(attraction => {
                            return (
                                <Card className="slickCard" style={{ width: '18rem' }}>
                                    <Card.Img className="slickImg" variant="top" src={attraction.imageURL} />
                                    <Card.Body>
                                        <Card.Title>{attraction.name}</Card.Title>
                                        <div className="sliderCardBtn">
                                        <Button onClick={() => {
                                            history.push(`/attractions/detail/${attraction.id}`)
                                        }} type="button" variant="outline-primary">View</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            )
                        })
                    }
                </Slider>
            </div>
            );
        </>
    )
}

