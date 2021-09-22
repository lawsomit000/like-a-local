import React, { useContext, useEffect } from "react"
import { PlacesContext } from "./PlacesProvider"
import "./Places.css"
import { useHistory } from "react-router-dom"
import "react-multi-carousel/lib/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, Button } from 'react-bootstrap';
import Slider from "react-slick"
import { NextArrow, PrevArrow } from "../utilities/SliderArrows";


export const PlacesSlider = () => {

    const { places, getPlaces } = useContext(PlacesContext)
    const history = useHistory()
    const { deletePlace } = useContext(PlacesContext)

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
        getPlaces()
    }, [])

    const handleDelete = (place) => {
        deletePlace(place.id)
            .then(() => {
            })
    }

    return (
        <>
            <div className="slickContainer">
                <div className="sliderHead">
                    <h2>My Places</h2>
                    <Button onClick={
                        () => history.push("/places/create")
                    }>
                        Add Place
                    </Button>
                </div>
                <Slider className="slickSlider" {...settings}>
                    {
                        places.map(place => {
                            return (
                                <Card className="slickCard" style={{ width: '18rem' }}>
                                    <Card.Img className="slickImg" variant="top" src={place.imageURL} />
                                    <Card.Body>
                                        <Card.Title>{place.cityName}</Card.Title>
                                        <div className="sliderCardBtn">
                                        <Button onClick={() => {
                                            history.push(`/places/detail/${place.id}`)
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

