import React from 'react'
import MultiplePizzas from '../assets/multiplePizzas.jpeg'
import '../styles/About.css'

const About = () => {
  return (
    <div className='about'>
        <div className="aboutTop"
        style={{backgroundImage: `url(${MultiplePizzas})`}}
        ></div>
        <div className="aboutBottom">
            <h1>ABOUT US</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sit laudantium nihil, laborum excepturi nostrum modi ad explicabo eius voluptates alias recusandae doloremque non fuga. Doloremque accusamus dolorum illum exercitationem magnam necessitatibus neque? Ipsam quod praesentium natus quibusdam corrupti. Similique corporis nam voluptate. Asperiores et est cupiditate quam ex sint libero? Adipisci alias eius voluptates eligendi labore nam hic magni perferendis quam ea exercitationem odio, deleniti incidunt earum dolores assumenda illo debitis, sit ullam rem quis facilis vel! Cumque, id minus autem numquam necessitatibus blanditiis, soluta error reiciendis tempora itaque enim aliquam praesentium debitis dolor, aliquid molestias quam animi voluptas.</p>
        </div>
    </div>
  )
}

export default About