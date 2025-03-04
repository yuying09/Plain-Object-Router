import { NavLink } from "react-router-dom"

function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <span className="navbar-brand" >Navbar</span>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" style={({isActive})=>{
            return{
              color: isActive ? "red": "",
              fontSize: isActive ?  "20px" :"16px"
            }
          }} to="/" >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" style={({isActive})=>{
            return{
              color: isActive ? "red": "",
              fontSize: isActive ? "20px" :"16px"
            }
          }} to="/about" >about</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" style={({isActive})=>{
            return{
              color: isActive ? "red": "",
              fontSize: isActive ? "20px" :"16px"
            }
          }} to="/album" >album</NavLink>
        </li>
        </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar


