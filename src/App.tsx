import "./assets/scss/index.css"
import Topbar from "./components/topbar"
import Tree from './components/tree'
import { useState } from "react"

function App() {
  const [zoom, setZoom] = useState(90)

  return (
    <div>
      <Topbar zoom={zoom} setZoom={setZoom} />
      <main>
        <div className='canvas' style={{ zoom: zoom + "%" }}>
          <Tree/>
        </div>
      </main>
    </div>
  )
}

export default App
