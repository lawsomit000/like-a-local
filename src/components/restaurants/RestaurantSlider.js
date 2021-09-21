import React, { useContext, useEffect } from "react"
import { RestaurantContext } from "./RestaurantProvider"
import "./Restaurant.css"
import { useHistory } from "react-router-dom"
import "react-multi-carousel/lib/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, Button } from 'react-bootstrap';
import Slider from "react-slick"
import { Component } from "react";


export const RestaurantSlider = () => {
    
    const { restaurants, getRestaurants } = useContext(RestaurantContext)
    const history = useHistory()
    const { deleteRestaurant } = useContext(RestaurantContext)

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true
    };

    useEffect(() => {
        getRestaurants()
    }, [])

    const handleDelete = (restaurant) => {
        deleteRestaurant(restaurant.id)
            .then(() => {
            })
    }

    return (
        <>
            <Slider {...settings}>
                {
                    restaurants.map(restaurant => {
                        return (
                            <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={restaurant.imageURL} />
                                    <Card.Body>
                                        <Card.Title>{restaurant.name}</Card.Title>
                                        <Card.Text>
                                            {restaurant.description}
                                        </Card.Text>
                                        <Button onClick={() => {
                                            history.push(`/restaurants/detail/${restaurant.id}`)
                                        }} type="button" variant="outline-primary">View</Button>
                                        <Button onClick={() => handleDelete(restaurant)} type="button" variant="outline-primary">Delete</Button>
                                    </Card.Body>
                                </Card>
                        )
                    })
                }
            </Slider>
            );
        </>
    )
}

