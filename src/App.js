import React from "react"
import "./App.css"
import { ApplicationViews } from "./components/ApplicationViews"
import { NavBar } from "./components/nav/NavBar"
import { Route, Redirect } from "react-router-dom"
import { Register } from "./components/auth/Register"
import { Login } from "./components/auth/Login"

export const App = () => (
  <>
    <Route
      render={() => {
        if (localStorage.getItem("app_user")) {
          return (
            <>
              <NavBar />
              <ApplicationViews />
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
)
