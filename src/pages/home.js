import React from 'react'
import Card from 'react-bootstrap/Card';
import Mountain_Lodge from '../assets/mountain_lodge.jpg'
import Header from '../components/header'
function home() {
  return (
        <>
        <Header> 
        </Header> 
        <div className='image-center'>
        <Card className="bg-dark text-white">
        <Card.Img src={Mountain_Lodge} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title><h1>Calming App</h1></Card.Title>
          {/* <br></br> */}
          <Card.Text>
            We make you calm. Sample text Sample text Sample text Sample text Sample text Sample text Sample text Sample text Sample text.
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
      </div>
      </>
  )
}

export default home