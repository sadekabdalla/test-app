import Banners from '../Banners/Banners'
import './Home.css'
import LeftBox from '../LeftBox/LeftBox'
import ProductType from '../ProductType/ProductType'
import RightBox from '../RightBox/RightBox'
import TopBanner from '../Banners/TopBanner'
import { Row,Col } from 'react-bootstrap'
const Home = ({addToCart}) => {
    return (
        <>
            <div className="home">
                <TopBanner/>
                <div className='trending'>
                    <div className='container'>
                        <Row>
                            <Col lg='9' xs='12' s='12' >
                            <LeftBox addToCart={addToCart} />
                            </Col>
                            <Col lg='3' xs='0' s='0'>
                            <RightBox/>
                            </Col>
                        </Row>
                    </div>
                </div>

                <Banners/>
                
                <ProductType addToCart={addToCart}/>
                
                
            </div>
        
        </>
    )
}

export default Home
