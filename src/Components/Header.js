import React from "react"
import image from "./bjorn-img.jpg"

function Header() {
    return (
        <header>
            <img src={image} className="header-image" alt="my profile" />
        </header>
    )
}

export default Header