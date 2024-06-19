import { Link } from "react-router-dom"
import './About.css'
import { Col, Row } from "react-bootstrap"

const About = () => {
    return (
        <div className="cotainer">
            <h3 className="text-center my-5">The apps you love. From a place you can trust.</h3>
            <p className="text-center my-5">For over a decade, the Store App has proved to be a safe and trusted place to discover and download apps. But the App Store is more than just a storefront — it’s an innovative destination focused on bringing you amazing experiences. And a big part of those experiences is ensuring that the apps we offer are held to the highest standards for privacy, security, and content. Because we offer nearly two million apps — and we want you to feel good about using every single one of them</p>
            <Link to='/contact'><button className="btn btn-outline-danger contac">Contact With Us For More Details</button></Link>
                <div className="info">
                    <Row>
                        <Col xs='12' s='12' md='4' lg='3'>
                            <div className="card bg-primary mx-5 my-5 " >
                                <div className="card-title ">
                                    <p className="text-center text-light my-2"> Phone Number :</p>
                                    <p className="text-center p-2 text-light">+963 00963939075331</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs='' s='' md='4' lg='3'>
                            <div className="card bg-primary mx-5 my-5 " >
                                <div className="card-title ">
                                    <p className="text-center text-light my-2">Name : </p>
                                    <p className="text-center p-3 text-light">Sadek Al Abdalla</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs='' s='' md='4' lg='3'>
                            <div className="card bg-primary mx-5 my-5 " >
                                <div className="body ">
                                    <p className="text-center text-light my-2"> Email : </p>
                                    <p className="text-center p-3 text-light">sadekalabdalla2@gmail.com</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs='' s='' md='' lg='3'>
                            <div className="card bg-primary mx-5 my-5 " >
                                <div className="body ">
                                    <p className="text-center text-light my-2"> Note : </p>
                                    <p className="text-center p-3 text-light">We are 24 Hour Avalible</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
        </div>
    )
}

export default About
