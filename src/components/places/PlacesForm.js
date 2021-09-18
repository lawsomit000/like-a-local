import React, { useContext, useEffect, useState } from "react"
import { PlacesContext } from "./PlacesProvider"
import "./Places.css"
import { useHistory } from 'react-router-dom'

export const PlaceForm = () => { 
    const { addPlace, getPlaces } = useContext(PlacesContext)


    const [place, setPlace] = useState({
        name: "", 
        description: "",
        // location: "",
        imageURL: "",
        // userId: 0,
        // cityId: 0
    });

    const history = useHistory();

    useEffect(() => {
        getPlaces()
    }, [])

    const handleControlledInputChange = (e) => {
        const newPlace = { ...place }
        newPlace[e.target.id] = e.target.value
        setPlace(newPlace)
    }

    const handleClickSavePlace = (e) => {
        e.preventDefault()

        //I need to add location and user context so we can pull that data in
        const newPlace = {
            name: place.name, 
            description: place.description,
            // location: locationId,
            imageURL: place.imageURL
            //userId: 
            //cityID
        }
        addPlace(newPlace)
            .then(() => history.push("/places"))
    }

return (
    <form className="placeForm">
      <h2 className="placeForm__title">New Place</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" required autoFocus className="form-control" placeholder="Place name" value={place.name} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Description:</label>
          <input type="text" id="description" required autoFocus className="form-control" placeholder="Place description" value={place.description} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Image URL:</label>
          <input type="url" id="imageURL" required autoFocus className="form-control" placeholder="image URL" value={place.imageURL} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <button className="btn btn-primary" onClick={handleClickSavePlace}>
        Save Place
          </button>
    </form>
  )
}