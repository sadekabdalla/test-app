import { useEffect, useState } from "react"
import Product from "../Product"
import './ProductType.css'
import { Col, Row } from "react-bootstrap"
const ProductType = ({addToCart}) => {
    const [newProduct,setNewProduct] = useState([])
    const [featurdProduct,setFeaturedProuduct] = useState([])
    const [topProuduct,setTopProduct] = useState([])
    const apiUrl="https://tarmeezacademy.com/api/v1/login";
    const productCategory = () =>{
        const newcategory = Product.filter((x) => {
            return x.type === 'new'
        })
        setNewProduct(newcategory)

        // featured category
        const featuredCategory = Product.filter((x)=>{
            return x.type === 'featured'
        })
        setFeaturedProuduct(featuredCategory)

        // top category
        const topCategory = Product.filter((x)=> {
            return x.type === 'top'
        })
        setTopProduct(topCategory)
    }
    useEffect(() => {
        productCategory()
    },[])
    
    return (
        <div className="product-type">
            
            <div className="contaner">
                <Row>
                    <Col xs='12' s='12' lg='4' md='6'>
                    <div className="box mx-5">
                        <div className="header">
                            <h2>New Prouct</h2>
                        </div>
                        {
                            newProduct.map((ele)=>{
                                return(
                                    <>
                                    <div className="productbox">
                                        <div className="img-box">
                                            <img src={ele.image} alt=""></img>
                                        </div>
                                        <div className="detail">
                                            <h3>{ele.name}</h3>
                                            <p>$ {ele.price}</p>
                                            <div className="icon">
                                                <button><i className="fa-solid fa-eye"></i></button>
                                                <button><i className="fa-solid fa-heart"></i></button>
                                                <button onClick={()=>addToCart(ele)}><i className="fa-solid fa-cart-shopping"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    </>
                                )
                            })
                        }
                    </div>
                    </Col>
                    <Col xs='0' s='0' lg='4' md='6'>
                    <div className="box mx-5">
                        <div className="header">
                            <h2>Featured Prouct</h2>
                        </div>
                        {
                            featurdProduct.map((ele)=>{
                                return(
                                    <>
                                    <div className="productbox">
                                        <div className="img-box">
                                            <img src={ele.image} alt=""></img>
                                        </div>
                                        <div className="detail">
                                            <h3>{ele.name}</h3>
                                            <p>$ {ele.price}</p>
                                            <div className="icon">
                                                <button><i className="fa-solid fa-eye"></i></button>
                                                <button><i className="fa-solid fa-heart"></i></button>
                                                <button onClick={()=>addToCart(ele)}><i className="fa-solid fa-cart-shopping"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    </>
                                )
                            })
                        }
                    </div>
                    </Col>
                    <Col xs='0' s='0' lg='4' md='0'>
                    <div className="box mx-5">
                        <div className="header">
                            <h2>Top Prouct</h2>
                        </div>
                        {
                            topProuduct.map((ele)=>{
                                return(
                                    <>
                                    
                                        <div className="productbox">
                                            
                                                <div className="img-box">
                                                    <img src={ele.image} alt=""></img>
                                                </div>
                                                
                                                <div className="detail">
                                                    <h3>{ele.name}</h3>
                                                    <p>$ {ele.price}</p>
                                                    <div className="icon">
                                                        <button><i className="fa-solid fa-eye"></i></button>
                                                        <button><i className="fa-solid fa-heart"></i></button>
                                                        <button onClick={()=>addToCart(ele)}><i className="fa-solid fa-cart-shopping"></i></button>
                                                    </div>
                                                </div>
                                                
                                            
                                        </div>
                                    
                                    
                                    </>
                                )
                            })
                        }
                    </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default ProductType
