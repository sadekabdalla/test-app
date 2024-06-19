import './RightBox.css'


const RightBox = () => {
    return (
        <div className='right-box'>
            <div className="right_container">
                <div className='testimonial'>
                    <div className='head'>
                        <h3>Our testimonial</h3>
                    </div>
                    <div className='detail'>
                        <div className='img_box'>
                            <img src='/image/T1.avif' alt='testimonial'></img>
                        </div>
                        <div className='info'>
                            <h3>stephan robot</h3>
                            <h4>web designer</h4>
                            <p>Duis faucubos enim vitae nuinc moliste , nec facilisis arcue pulvi</p>
                        </div>
                    </div>
                </div>
                <div className='newsletter'>
                <div className='head'>
                        <h3>newsletter</h3>
                    </div>
                    <div className='form'>
                        <p>join our  malling list</p>
                        <input type='email' placeholder='E-mail' autoComplete='off'></input>
                        <button>subscribe</button>
                        <div className='icon-box'>
                            <div className='icon'>
                            <i className="fa-brands fa-facebook"></i>
                            </div>
                            <div className='icon'>
                            <i className="fa-brands fa-twitter"></i>
                            </div>
                            <div className='icon'>
                            <i className="fa-brands fa-instagram"></i>
                            </div>
                            <div className='icon'>
                            <i className="fa-brands fa-youtube"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightBox
