import React, { useState } from 'react'
import { FaCheck, FaMoon, FaSun } from 'react-icons/fa'

interface topbarProps {
    zoom: number,
    setZoom: React.Dispatch<React.SetStateAction<number>>
}

const Topbar = ({ zoom, setZoom }: topbarProps) => {
    const [open, setOpen] = useState(false)
    const [theme, setTheme] = useState("light")

    const handleTheme = () => {
        document.body.classList.toggle("dark")
    }

    return (
        <div className="topbar">
            <h2>Services <span>0</span></h2>

            <div className="buttons">
                <p onClick={() => handleTheme()}>theme</p>
                <p onClick={() => setZoom(zoom - 10)}>-</p>
                <p onClick={() => setOpen(!open)}>
                    {zoom}%
                    <ul className={open ? "open" : ""}>
                        {
                            [25, 30, 40, 50, 60, 70, 80, 90, 100, 125, 150].map(item => (
                                <li className={zoom === item ? "active" : ""} onClick={() => setZoom(item)}>{item}% {zoom === item ? <FaCheck /> : ""}</li>
                            ))
                        }
                    </ul>
                </p>
                <p onClick={() => setZoom(zoom + 10)}>+</p>
            </div>
        </div>
    )
}

export default Topbar;