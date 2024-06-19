import { Col, Row } from 'react-bootstrap'
import './Banners.css'

const Banners = () => {
    return (
        <div className="banners">
            <div className="contaner">
                <Row>
                    <Col xs='12' s='12' lg='5'>
                        <div className="left-box">
                            <div className="box">
                                <img src="/image/Multi-Banner-1.avif" alt=""></img>
                            </div>
                            <div className="box">
                                <img src="/image/Multi-Banner-2.avif" alt=""></img>
                            </div>
                        </div>
                    </Col>
                    <Col xs='0' s='0' lg='7'>
                        <div className='right-box'>
                            <div className='top'>
                            <img src="/image/Multi-Banner-3.webp" alt=""></img>
                            <img src="/image/Multi-Banner-4.avif" alt=""></img>
                            </div>
                            <div className='bottom'>
                            <img src="/image/Multi-Banner-5.webp" alt=""></img>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Banners
