import React, { useContext, useEffect } from "react"
import { RestaurantContext } from "./RestaurantProvider"
import "./Restaurant.css"
import { Card, Button} from 'react-bootstrap';
// import "bootstrap/dist/css/bootstrap.min.css"
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export const RestaurantList = () => {
    const { restaurants, getRestaurants } = useContext(RestaurantContext)
    const { deleteRestaurant } = useContext(RestaurantContext)

    const history = useHistory() 

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
            <h2>My Nashville Restaurants</h2>
            <Button onClick={
                () => history.push("/restaurants/create")
            }>
                Add Restaurant
            </Button>
            <section className ="restaurantList">
                {
                    restaurants.map(restaurant => {
                        return (
                                <div className="restaurant">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={restaurant.imageURL}/>
                                    <Card.Body>
                                        <Card.Title>{restaurant.name}</Card.Title>
                                        <Card.Text>
                                            {restaurant.description}
                                        </Card.Text>
                                        <Link to={`/restaurants/detail/${restaurant.id}`}>
                                            <Button type="button" variant="outline-primary">View</Button>
                                        </Link>
                                            <Button onClick={ () => handleDelete(restaurant)} type="button" variant="outline-primary">Delete</Button>
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