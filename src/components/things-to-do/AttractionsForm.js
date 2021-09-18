import React, { useContext, useEffect, useState } from "react"
import { AttractionsContext } from "./AttractionsProvider"
import "./Attractions.css"
import { useHistory } from 'react-router-dom'

export const AttractionsForm = () => { 
    const { addAttraction, getAttractions } = useContext(AttractionsContext)


    const [attraction, setAttraction] = useState({
        name: "", 
        description: "",
        // location: "",
        imageURL: "",
        // userId: 0,
        // cityId: 0
    });

    const history = useHistory();

    useEffect(() => {
        getAttractions()
    }, [])

    const handleControlledInputChange = (e) => {
        const newAttraction = { ...attraction }
        newAttraction[e.target.id] = e.target.value
        setAttraction(newAttraction)
    }

    const handleClickSaveAttraction = (e) => {
        e.preventDefault()

        //I need to add location and user context so we can pull that data in
        const newAttraction = {
            name: attraction.name, 
            description: attraction.description,
            // location: locationId,
            imageURL: attraction.imageURL
            //userId: 
            //cityID
        }
        addAttraction(newAttraction)
            .then(() => history.push("/things-to-do"))
    }

return (
    <form className="attractionForm">
      <h2 className="attractionForm__title">New Attraction</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" required autoFocus className="form-control" placeholder="Attraction name" value={attraction.name} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Description:</label>
          <input type="text" id="description" required autoFocus className="form-control" placeholder="Attraction description" value={attraction.description} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Image URL:</label>
          <input type="url" id="imageURL" required autoFocus className="form-control" placeholder="image URL" value={attraction.imageURL} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <button className="btn btn-primary" onClick={handleClickSaveAttraction}>
        Save Attraction
          </button>
    </form>
  )
}