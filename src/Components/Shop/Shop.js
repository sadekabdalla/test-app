import { Col, Row } from "react-bootstrap"
import './Shop.css'
import { useState } from "react"


const Shop = ({shop,Filter,allCateFilter,addToCart}) => {
    //togell product details
    const [showDetails,setShowDetails] = useState(false)
    //detail page data
    const [detail,setDetail] = useState([])
    //showing detail page
    const detailPage = (product)=>{
        const detailData = ([{product}])
        const productDetail = detailData[0]['product']
        setDetail(productDetail)
        setShowDetails(true)
    }
    console.log(detail)
    const closeDetail = () =>{
        setShowDetails(false)
    }
    return (
        <>
        {
            showDetails ? 
            <>
            <div className="product-details">
                <button className="close-btn" onClick={closeDetail}><i className="fa-solid fa-xmark"></i></button>
                <div className="contaner">
                    <div className="img-box">
                        <img src={detail.image} alt=""></img>
                    </div>
                    <div className="info">
                        <h4># {detail.cat}</h4>
                        <h2>{detail.name}</h2>
                        <p>A screen Everyone will love :whether your family is streaming or video chatting whit friends tablet A8...</p>
                        <h3> $ {detail.price}</h3>
                        <button onClick={()=>addToCart(detail)}>add to cart</button>
                    </div>
                </div>
            </div>
            </>
            : null
        }
        
        <div className="shop">
            <h2># Shop</h2>
            <p>Home . Shop</p>
            <Row className=" d-flex" >
                <Col lg='3' >
                    <div className='contaner'>
                        <div className="left-box">
                            <div className="category">
                                <div className="header">
                                    <h3 >All categories</h3>
                                </div>
                                <div className="box">
                                    <ul>
                                        <li onClick={() => allCateFilter()}># All</li>
                                        <li onClick={() => {Filter ("TV")}}># TV</li>
                                        <li onClick={() => {Filter ("Laptop")}}># Laptop</li>
                                        <li onClick={() => {Filter ("watch")}}># watch</li>
                                        <li onClick={() => {Filter ("speaker")}}># speaker</li>
                                        <li onClick={() => {Filter ("electronics")}}># electronics</li>
                                        <li onClick={() => {Filter ("headphone")}}># headphone</li>
                                        <li onClick={() => {Filter ("phone")}}># phone</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="banner">
                                <div className="img-box">
                                    <img src="/image/shop_left.avif" alt=""></img>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </Col>
                <Col lg='8'>
                <div className="contaner">
                    <div className="right-box">
                        <div className="banner">
                            <div className="img-box">
                                <img src="/image/shop_top.webp" alt=""></img>
                            </div>
                        </div>
                        <div className="product-box">
                            <h2>shop product</h2>
                            <div className="product-container">
                                
                                {
                                    shop.map((ele)=>{
                                        return (
                                            <>
                                            <div className='box'>
                                                <div className='img-box'>
                                                    <img src={ele.image} alt=""></img>
                                                    <div className='icon'>
                                                        <li onClick={()=>detailPage(ele)}><i className="fa-solid fa-eye"></i></li>
                                                        <li><i className="fa-solid fa-heart"></i></li>
                                                    </div>
                                                </div>
                                                <div className="detail">
                                                    <h3>{ele.name}</h3>
                                                    <p>$ {ele.price}</p>
                                                    <button className='btn' onClick={()=> addToCart (ele)}>Add To Cart</button>
                                                </div>
                                            </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                </Col>
            </Row>
        </div>
        </>
    )
}

export default Shop
