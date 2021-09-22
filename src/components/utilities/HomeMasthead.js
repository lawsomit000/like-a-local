import React from "react"
import { Container, Image } from "react-bootstrap"
import "./utilities.css"

export const HomeMasthead = () => {
    return (
        <>
            <Container className="mastheadContainer">
                <div className="mastheadText">
                    <h2>Welcome back, Mitch 👋 </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="mastheadImg">
                    <Image src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/nashville-skyline-at-sunset-lisa-wooten.jpg"></Image>
                </div>
            </Container>
        </>
    )
}