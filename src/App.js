import Nav1 from "./Components/Nav/Nav1"
import {BrowserRouter} from "react-router-dom"
import Rout from "./Components/Rout"
import Footer from "./Components/Footer/Footer"
import Product from "./Components/Product"
import { useState } from "react"
import Nav2 from "./Components/Nav/Nav2"

const App = () => {
  // add To Cart
  const [cart , setCart] = useState([])
  const [shop,setShop] = useState(Product)
  // shop search fillter 
  const [search ,setSearch] = useState('')
  // categories filter
  const Filter = ((x)=>{
    const cateFilter = Product.filter((Product)=>{
      return Product.cat === x
    })
    setShop(cateFilter)
  })
  //all categories fillter
  const allCateFilter = () => {
    setShop(Product)
  }
  // shop search fillter
  const searchProduct = () => {
    const searchFilter = Product.filter((x)=>{
      return x.cat === search
    })
    setShop(searchFilter)
  }
  //Add To Cart 
  const addToCart = (product) => {
    const exist = cart.find((x)=>{
      return x.id === product.id
    })
    if (exist)
      {
        alert('this product is already added in cart')
      }
      else{
        setCart([...cart,{...product,qty:1}])
        alert('added to cart')
      }
  }
  console.log(cart)
  return (
    <BrowserRouter>
      <Nav1 search={search} setSearch={setSearch} searchProduct={searchProduct} />
      <Nav2/>
      <Rout cart={cart} setCart={setCart} shop={shop} Filter={Filter} allCateFilter={allCateFilter} addToCart={addToCart} />
      <Footer/>
    </BrowserRouter>
  )
}

export default App
