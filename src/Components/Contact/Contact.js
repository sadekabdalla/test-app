import './Contact.css'
const Contact = () => {
    
    return (
        <div className='contact'>
            <div className='contaner'>
                <div className='form'>
                    <h2>#contact us</h2>
                    <form method='POST'>
                        <div className='box'>
                            <div className='lable'>
                                <h4>Name</h4>
                            </div>
                            <div className='input-filed'>
                                <input type='text' placeholder='Name' name='Name' ></input>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='lable'>
                                <h4>E-mail</h4>
                            </div>
                            <div className='input-filed'>
                                <input type='email' placeholder='E-mail' name='email' ></input>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='lable'>
                                <h4>Subject</h4>
                            </div>
                            <div className='input-filed'>
                                <input type='email' placeholder='subject' name='subject' ></input>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='lable'>
                                <h4>Message</h4>
                            </div>
                            <div className='input-filed'>
                                <textarea placeholder='Message !' name='Message' ></textarea>
                            </div>
                        </div>
                        <button type='submit'>send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
