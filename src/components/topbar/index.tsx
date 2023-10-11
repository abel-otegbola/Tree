import React from 'react'

interface topbarProps {
    zoom: number,
    setZoom: React.Dispatch<React.SetStateAction<number>>
}

const Topbar = ({ zoom, setZoom }: topbarProps) => {
    return (
        <div className="topbar">
            <h1>Front end Task</h1>

            <div className="buttons">
                <p onClick={() => setZoom(zoom - 10)}>-</p>
                <p>{zoom}</p>
                <p onClick={() => setZoom(zoom + 10)}>+</p>
            </div>
        </div>
    )
}

export default Topbar;