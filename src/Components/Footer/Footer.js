import { Col, Row } from 'react-bootstrap'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className='contaner'>
                <Row>
                    <Col xs='12' s='12' md='6' lg='4'>
                        <div className='left-box'>
                            <div className='box'>
                                <div className='icon-box'>
                                    <i className="fa-solid fa-piggy-bank"></i>
                                </div>
                                <div className='detail'>
                                    <h3>Great saving</h3>
                                    <p>lorem ipsum dolar set amet</p>
                                </div>
                            </div>
                            <div className='box'>
                                <div className='icon-box'>
                                <i className="fa-solid fa-truck-fast"></i>
                                </div>
                                <div className='detail'>
                                    <h3>Free delivery</h3>
                                    <p>lorem ipsum dolar set amet</p>
                                </div>
                            </div>
                            <div className='box'>
                                <div className='icon-box'>
                                <i className="fa-solid fa-headphones-simple"></i>
                                </div>
                                <div className='detail'>
                                    <h3>24X7 support</h3>
                                    <p>lorem ipsum dolar set amet</p>
                                </div>
                            </div>
                            <div className='box'>
                                <div className='icon-box'>
                                <i className="fa-solid fa-wallet"></i>
                                </div>
                                <div className='detail'>
                                    <h3>mony back</h3>
                                    <p>lorem ipsum dolar set amet</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs='0' s='0' md='6' lg='8'>
                    <div className='right-box'>
                        <div className='header'>
                            <img src='/image/logo.webp' alt=''></img>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                        </div>
                        <div className='bottom'>
                            <div className='box'>
                                <h3>your account</h3>
                                <ul>
                                    <li>About Us</li>
                                    <li>account</li>
                                    <li>payment</li>
                                    <li>sales</li>
                                </ul>
                            </div>
                            <div className='box'>
                                <h3>Products</h3>
                                <ul>
                                    <li>delivery</li>
                                    <li>track order</li>
                                    <li>New Product</li>
                                    <li>old product</li>
                                </ul>
                            </div>
                            <div className='box'>
                                <h3>Contact Us</h3>
                                <ul>
                                    <li>4005  ,silver Business PointIndia</li>
                                    <li>+(963) 0939075331</li>
                                    <li>info@gmail.com</li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                    </Col>
                </Row>
                
            </div>
        </div>
    )
}

export default Footer
