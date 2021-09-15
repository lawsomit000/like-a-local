import React from "react"
import { Route } from "react-router-dom"
import { RestaurantDetail } from "./restaurants/RestaurantDetail"
import { RestaurantForm } from "./restaurants/RestaurantForm"
import { RestaurantList } from "./restaurants/RestaurantList"
import { RestaurantProvider } from "./restaurants/RestaurantProvider"

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

                <Route exact path="restaurants/detail/:restaurantId(\d+)">
                    <RestaurantDetail />
                </Route>
            </RestaurantProvider>
        </>
    )
}