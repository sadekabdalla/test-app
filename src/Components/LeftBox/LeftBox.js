import './LeftBox.css'
import { useState } from "react"
import Product from "../Product"
const LeftBox = ({addToCart}) => {
    const [trendingProduct,setTrendingProduct] = useState(Product)
    const filterCate =(x)=>{
        const filterProduct = Product.filter((ele) => {
            return ele.type === x;
        })
        setTrendingProduct(filterProduct)
    }
    const TrendingProduct=()=>{
        setTrendingProduct(Product)
    }
    return (
        <div className='left-box'>
            <div className='header'>
                <div className='heading'>
                    <h2 onClick={() => TrendingProduct()}>trending product</h2>
                </div>
                <div className='cate'>
                    <h3 onClick={()=> filterCate('new')}>New</h3>
                    <h3 onClick={()=> filterCate('featured')}>featured</h3>
                    <h3 onClick={()=> filterCate('top')}>top selling</h3>
                </div>
            </div>
            <div className='products'>
                <div className='containere'>
                    {
                        trendingProduct.map((ele)=>{
                            return (
                                <>
                                
                                <div className='box'>
                                    <div className='img_box'>
                                        <img src={ele.image} alt=""></img>
                                        
                                        <div className='icon'>
                                            <div className='icon-box'>
                                            <i className="fa-solid fa-eye"></i>
                                            </div>
                                            <div className='icon-box'>
                                            <i className="fa-solid fa-heart"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="info">
                                        <h3>{ele.name}</h3>
                                        <p>${ele.price}</p>
                                        <button className='btn' onClick={()=>addToCart(ele)}>Add To Cart</button>
                                    </div>
                                </div>
                                </>
                            )
                            
                        })
                    }
                </div>
                <button>Show More</button>
            </div>
        </div>
    )
}

export default LeftBox
