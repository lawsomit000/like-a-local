import React, { useContext, useEffect, useState } from "react"
import { RestaurantContext } from "./RestaurantProvider"
import "./Restaurant.css"
import { useHistory } from 'react-router-dom'

export const RestaurantForm = () => { 
    const { addRestaurant, getRestaurants } = useContext(RestaurantContext)


    const [restaurant, setRestaurant] = useState({
        name: "", 
        description: "",
        // location: "",
        image: "",
        // userId: 0,
        // cityId: 0
    });

    const history = useHistory();

    useEffect(() => {
        getRestaurants()
    }, [])

    const handleControlledInputChange = (e) => {
        const newRestaurant = { ...restaurant }
        newRestaurant[e.target.id] = e.target.value
        setRestaurant(newRestaurant)
    }

    const handleClickSaveRestaurant = (e) => {
        e.preventDefault()

        //I need to add location and user context so we can pull that data in
        const newRestaurant = {
            name: restaurant.name, 
            description: restaurant.description,
            // location: locationId,
            imageURL: restaurant.imageURL
            //userId: 
            //cityID
        }
        addRestaurant(newRestaurant)
            .then(() => history.push("/restaurants"))
    }

return (
    <form className="restaurantForm">
      <h2 className="restaurantForm__title">New Restaurant</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" required autoFocus className="form-control" placeholder="Restaurant name" value={restaurant.name} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Description:</label>
          <input type="text" id="description" required autoFocus className="form-control" placeholder="Restaurant description" value={restaurant.description} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Image URL:</label>
          <input type="url" id="imageURL" required autoFocus className="form-control" placeholder="image URL" value={restaurant.imageURL} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <button className="btn btn-primary" onClick={handleClickSaveRestaurant}>
        Save Restaurant
          </button>
    </form>
  )
}