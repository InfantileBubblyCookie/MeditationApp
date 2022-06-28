import Video1 from '../assets/calm1.PNG' 
import YouTube from 'react-youtube'
import { Link } from 'react-router-dom'
import Video2 from '../assets/calm2.PNG' 
import Video3 from '../assets/calm3.PNG' 
import React from 'react'
import Header from '../components/header.js'
import {Col, Row, Container, Card, Button} from 'react-bootstrap'
export default function videos() {
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        }}
        const _onReady=(event)=> {
            // access to player in all event handlers via event.target
            event.target.pauseVideo();
          }
  return (
    <div>
    <Header></Header>
    <Container className="d-flex flex-column justify-content-center align-items-center" style={{gap:"20px 20px"}}>
        <Row style={{gap:"20px 20px"}}>
            {/* <Container className="d-flex flex-column justify-content-center align-items-center" style={{gap:"20px 20px"}}> */}
            <Col>
            <Card style={{ width: '18rem' , height: '26rem'}}>
            <Card.Img variant="top" src={Video2} />
            <Card.Body>
                <Card.Title>Daily Calm | 10 Minute Mindfulness Meditation</Card.Title>
                <Card.Text>
                Tamara Levitt guides this 10 minute Daily Calm mindfulness meditation to powerfully restore and re-connect with the present.
                </Card.Text>
                <Container className="d-flex flex-row justify-content-center align-items-center">
                <Link to={'/videos/ZToicYcHIOU'}>
                <Button variant="primary">Watch Video</Button>
                </Link>

                </Container>
            </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card style={{ width: '18rem' , height: '26rem'}}>
            <Card.Img variant="top" src={Video3} />
            <Card.Body>
                <Card.Title>You Are Life Itself | Guided Meditation with Mooji</Card.Title>
                <Card.Text>
                A beautiful guided meditation with Mooji into the space of pure being. 
“Everything is in place for life to unfold in its natural way. 
                </Card.Text>
                <Container className="d-flex flex-row justify-content-center align-items-center">
                <Link to={'/videos/8vMEoPgg-PE'}>
                <Button variant="primary">Watch Video</Button>
                </Link>
                </Container>
            </Card.Body>
            </Card>
            </Col>
            {/* card */}
            <Col>
            <Card style={{ width: '18rem' , height: '26rem'}}>
            <Card.Img variant="top" src={Video1} />
            <Card.Body>
                <Card.Title>Find Your Focus with this Mini Meditation</Card.Title>
                <Card.Text>
                Practice a relaxed sense of focus using this one-minute meditation. 
                </Card.Text>
                <Container className="d-flex flex-row justify-content-center align-items-center">
                <Link to={'/videos/IReEu2kI6oI'}>
                <Button variant="primary">Watch Video</Button>
                </Link>
                </Container>
            </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card style={{ width: '18rem' , height: '26rem'}}>
            <Card.Img variant="top" src={Video1} />
            <Card.Body>
                <Card.Title>Find Your Focus with this Mini Meditation</Card.Title>
                <Card.Text>
                Practice a relaxed sense of focus using this one-minute meditation. 
                </Card.Text>
                <Container className="d-flex flex-row justify-content-center align-items-center">
                <Link to={'/videos/IReEu2kI6oI'}>
                <Button variant="primary">Watch Video</Button>
                </Link>
                </Container>
            </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card style={{ width: '18rem' , height: '26rem'}}>
            <Card.Img variant="top" src={Video1} />
            <Card.Body>
                <Card.Title>Find Your Focus with this Mini Meditation</Card.Title>
                <Card.Text>
                Practice a relaxed sense of focus using this one-minute meditation. 
                </Card.Text>
                <Container className="d-flex flex-row justify-content-center align-items-center">
                <Link to={'/videos/IReEu2kI6oI'}>
                <Button variant="primary">Watch Video</Button>
                </Link>
                </Container>
            </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card style={{ width: '18rem' , height: '26rem'}}>
            <Card.Img variant="top" src={Video1} />
            <Card.Body>
                <Card.Title>Find Your Focus with this Mini Meditation</Card.Title>
                <Card.Text>
                Practice a relaxed sense of focus using this one-minute meditation. 
                </Card.Text>
                <Container className="d-flex flex-row justify-content-center align-items-center">
                <Link to={'/videos/IReEu2kI6oI'}>
                <Button variant="primary">Watch Video</Button>
                </Link>
                </Container>
            </Card.Body>
            </Card>
            </Col>
            {/* end of card */}


            {/* </Container> */}
        </Row>
    </Container>
    </div>
  )
}
