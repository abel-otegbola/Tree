import { FaChevronDown, FaChevronLeft, FaChevronRight, FaChevronUp } from "react-icons/fa"
import "./assets/scss/index.css"
import Topbar from "./components/topbar"
import Tree from './components/tree'
import { useState } from "react"

function App() {
  const [zoom, setZoom] = useState(60)
  const [pos, setPos] = useState({ inline: 0, block: 0 })

  return (
    <div>
      <Topbar zoom={zoom} setZoom={setZoom} setPos={setPos} />
      <main>
        <div className='canvas' style={{ zoom: zoom + "%", 
          transform: `translate(${pos.block}px, ${pos.inline}px)`
        }}>
          <Tree/>
        </div>

        <div className="direction">
          <span className="top" onClick={() => setPos({ block: pos.block, inline: pos.inline - 40 })}><FaChevronUp /></span>
          <span className="bottom" onClick={() => setPos({ block: pos.block, inline: pos.inline + 40 })}><FaChevronDown /></span>
          <span className="left" onClick={() => setPos({ block: pos.block - 40, inline: pos.inline })}><FaChevronLeft /></span>
          <span className="right" onClick={() => setPos({ block: pos.block + 40, inline: pos.inline })}><FaChevronRight /></span>
        </div>
      </main>
    </div>
  )
}

export default App
