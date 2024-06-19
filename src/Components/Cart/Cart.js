import { Col, Row } from 'react-bootstrap'
import './Cart.css'
import { Link } from 'react-router-dom'
const Cart = ({cart,setCart}) => {
    // increase quantity 
    const incqty = (product) => {
        const exist =cart.find((x)=>{
            return x.id === product.id
        })
        setCart(cart.map((ele) => {
            return ele.id === product.id ? {...exist,qty: exist.qty + 1} : ele
        }))
    }
    // decrease quantity 
    const decqty = (product)=>{
        const exist = cart.find((x)=>{
            return x.id === product.id
        })
        setCart(cart.map((ele) =>{
            return ele.id === product.id ? {...exist,qty:exist.qty -1} : ele
        }))
    }
    const removProduct = (product)=>{
        const exist = cart.find((x)=>{
            return x.id === product.id
        })
        if(exist.qty > 0)
            {
                setCart(cart.filter((ele)=>{
                    return ele.id !== product.id
                }))
            }
    }
    // total price 
    const total = cart.reduce((price,item)=> price + item.qty * item.price ,0 )
    return (
        <>
        <div className='cart'>
            <h3>#Cart</h3>
            {
                cart.length === 0 && 
                <>
                <div className='empty-cart'>
                    <h2>your shoping cart is empty</h2>
                    <Link to='/shop'><button>shop now</button></Link>
                    
                </div>
                </>
            }
            <div  className='contaner'>
                {
                    cart.map((ele)=>{
                        return (
                            <>
                            <div className='box'>
                                <Row>
                                    <Col xs='12' md='2' lg='8'>
                                        <div className='img-box'>
                                            <img src={ele.image} alt=''></img>
                                        </div>
                                    </Col>
                                    <Col xs='0' md='10' lg='4'>
                                        <div className='detail'>
                                            <div className='info'>
                                                <h4>{ele.cat}</h4>
                                                <h3>{ele.name}</h3>
                                                <p>price : $ {ele.price}</p>
                                                <p> total : $ {ele.price * ele.qty }</p>
                                            </div>
                                        
                                            <div className='quantity'>
                                                <button onClick={()=> incqty(ele)}>+</button>
                                                <input type='number' value={ele.qty}/>
                                                <button onClick={()=> decqty(ele)}>-</button>
                                            </div>
                                        
                                            <div className='icon'>
                                                <li onClick={() => removProduct(ele)}><i className="fa-solid fa-xmark"></i></li>
                                            </div>
                                                
                                    </div>
                                    </Col>
                                </Row>
                                
                                
                            </div>
                            </>
                        )
                    })
                }
            </div>
            <div className='bottom'>
                {
                    cart.length > 0 && 
                    <>
                    <div className='total'>
                        <h4> sub Total : $ {total}</h4>
                    </div>
                    <button>check out</button>
                    </>
                }
                
            </div>
        </div>
        </>
    )
}

export default Cart
