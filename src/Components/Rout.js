import { Route,Routes } from "react-router-dom" 
import Home from "./Home/Home"
import Shop from "./Shop/Shop"
import Cart from "./Cart/Cart"
import Contact from "./Contact/Contact"
import About from "./About/About"
import Login from "./Login/Login"
import Register from "./Register/Register"

const Rout = ({shop,Filter,allCateFilter,addToCart,cart,setCart}) => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home addToCart={addToCart}/>} />
                <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
                <Route path="shop" element={<Shop  shop={shop} Filter={Filter} allCateFilter={allCateFilter} addToCart={addToCart} /> } />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/about" element={<About/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </>
    )
}

export default Rout
