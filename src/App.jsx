import { Outlet } from 'react-router-dom'
import Navbar from './component/Navbar'

function App() {


  return (
    <>
      <Navbar />
      <div className="container mt-2">
        <Outlet/>
      </div>
    </>
  )
}

export default App
