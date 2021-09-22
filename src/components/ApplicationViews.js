import React from "react"
import { Route } from "react-router-dom"
import { PlacesForm } from "./places/PlacesForm"
import { PlacesList } from "./places/PlacesList"
import { PlaceDetail } from "./places/PlacesDetail"
import { PlaceProvider } from "./places/PlacesProvider"
import { RestaurantDetail } from "./restaurants/RestaurantDetail"
import { RestaurantForm } from "./restaurants/RestaurantForm"
import { RestaurantList } from "./restaurants/RestaurantList"
import { RestaurantProvider } from "./restaurants/RestaurantProvider"
import { AttractionsForm } from "./things-to-do/AttractionsForm"
import { AttractionsList } from "./things-to-do/AttractionsList"
import { AttractionsProvider } from "./things-to-do/AttractionsProvider"
import { RestaurantSlider } from "./restaurants/RestaurantSlider"
import { PlacesSlider } from "./places/PlaceSlider"
import { AttractionsSlider } from "./things-to-do/AttractionsSlider"
import { HomeMasthead } from "./utilities/HomeMasthead"

export const ApplicationViews = () => {
    return (
        <>
            <RestaurantProvider>
                <PlaceProvider>
                <AttractionsProvider>
                <Route exact path="/">
                    <HomeMasthead />
                    <RestaurantSlider />
                    <PlacesSlider />
                    <AttractionsSlider />
                </Route>
                </AttractionsProvider>
                </PlaceProvider>
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

            <PlaceProvider >
                <Route exact path ="/places">
                    <PlacesList />
                </Route>
                
                <Route exact path ="/places/create">
                    <PlacesForm />
                </Route>

                <Route path="/places/detail/:placeId(\d+)">
                    < PlaceDetail />
                </Route>
            </PlaceProvider>
        </>
    )
}