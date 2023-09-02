import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <>
    <div className='contactHeader'>
      <h1>Contact Here:</h1>
    </div>
    <div className="details">
        <p>Name: Yeamin Rahman</p>
        <p>Mobile: 01648798079</p>
        <p>Address: Dhaka,Bangladesh</p>
        <p>Email: yeaminr07@gmail.com</p>
        <a className="link" href='https://www.facebook.com/yeamin.rahman.545'><b><u>Goto Facebook</u></b></a>
        <a className='link' href='https://github.com/yeamin07'><b><u>Goto Github</u></b></a>
    </div>
    </>
  )
}

export default Contact