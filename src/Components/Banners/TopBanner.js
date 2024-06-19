import { Link } from "react-router-dom"
import './TopBanner.css'


const TopBanner = () => {
    return (
        <div className="top-banner">
            <div className='content'>
                <h3>Silver aluminum</h3>
                <h2>Apple Watch</h2>
                <p>30% off at your first odder</p>
                <Link to='/shop' className='link'> Shop Now</Link>
            </div>
        </div>  
    )
}

export default TopBanner
