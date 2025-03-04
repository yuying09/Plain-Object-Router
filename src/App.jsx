import { Routes, Route } from "react-router-dom"
import Navbar from './component/Navbar'


import  {
  Home,
  About,
  AlbumIndex,
  AlbumLayout,
  AlbumPhoto,
  AlbumSearch,
  NotFound
} from "./pages"



function App() {


  return (
    <>
      <Navbar />
      <div className="container mt-2">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/album" element={<AlbumLayout />}>
            <Route index element={<AlbumIndex />}></Route>
            <Route path="search" element={<AlbumSearch/>} ></Route>
            <Route path=":id" element={<AlbumPhoto/>}></Route>
          </Route>
        <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
