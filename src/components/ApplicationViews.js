import React from "react"
import { Route } from "react-router-dom"
import { PlacesList } from "./places/PlacesList"
import { PlacesContext } from "./places/PlacesProvider"
import { RestaurantDetail } from "./restaurants/RestaurantDetail"
import { RestaurantForm } from "./restaurants/RestaurantForm"
import { RestaurantList } from "./restaurants/RestaurantList"
import { RestaurantProvider } from "./restaurants/RestaurantProvider"
import { AttractionsForm } from "./things-to-do/AttractionsForm"
import { AttractionsList } from "./things-to-do/AttractionsList"
import { AttractionsProvider } from "./things-to-do/AttractionsProvider"

export const ApplicationViews = () => {
    return (
        <>
            <RestaurantProvider>
                <Route exact path="/">
                    
                </Route>
            </RestaurantProvider>

            <RestaurantProvider>
                <Route exact path="/restaurants">
                    <RestaurantList />
                </Route>
                <Route exact path ="/restaurants/create">
                    < RestaurantForm />
                </Route>
                    
                <Route path="/restaurants/detail/:restaurantId(\d+)">
                    < RestaurantDetail />
                </Route>
            </RestaurantProvider>

            <AttractionsProvider>
                <Route exact path ="/things-to-do">
                    <AttractionsList />
                </Route>    
                <Route exact path ="/things-to-do/create">
                    <AttractionsForm />
                </Route>
            </AttractionsProvider>

            <PlacesContext >
                <Route exact path ="/places">
                    <PlacesList />
                </Route>
            </PlacesContext>
        </>
    )
}