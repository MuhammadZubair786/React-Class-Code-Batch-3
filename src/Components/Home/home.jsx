import { Link } from "react-router-dom"
import Navbar from "../../Widget/navbar"
import Slider from "../../Widget/slider"

function Home(){
    return(
        <>
       <Navbar/>
       <br/>
       <Slider/>
        <a href="/about">About page </a>
        <Link to={"/about535453"} >About page </Link>
      
        </>
        
    )
}
export default Home