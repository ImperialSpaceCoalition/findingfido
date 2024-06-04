import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Container} from "react-bootstrap"
import DogPic from "./images/dog_image.jpeg";
import CatPic from "./images/cat_image.jpg";
import FerretPic from "./images/ferret_image.jpeg";
import RabbitPic from "./images/rabbit_image.jpeg";
import GuineaPigPic from "./images/guinea_pig_image.jpg";
import HamsterPic from "./images/hamster_image.jpg";
function Home() {
  return (
    <div>
      <h1>Welcome to Finding Fido</h1>
      <p>Adopt a family member today!</p>
      <Container>
      <Row>
        {/* animal of the week card on first 4/12 of page */}
        <Col sm={4}>
          <Card.Title>Animal of the Week</Card.Title>
          <Card style={{ width: '25rem', height: '30rem' }}>
         <Card.Img variant="top" src="holder.js/100px180" />
         <Card.Body>
          
          <Card.Text>
          A brief explanation of the animal's personality and needs for a home and family.
          </Card.Text>
          <Button variant="primary">Adopt</Button>
        </Card.Body>
          </Card>
        </Col>

          {/* links to specific animal species on other 8/12 of page */}
        <Col sm={8}>
        <Container>
      <Row>

        <Col>
          <div className='animal-link'>
            <h2>Dogs</h2>
            <img className="home-image" alt="animal pic" src={DogPic} />
            <a href="/dogs">Check Out Dogs</a>
          </div>
        </Col>

        <Col>
        <div className='animal-link'>
            <h2>Cats</h2>
            <img className="home-image" alt="animal pic" src={CatPic} />
            <a href="/cats">Check Out Cats</a>
          </div>
        </Col>
        
        <Col>
        <div className="animal-link">
            <h2>Rabbits</h2>
            <img className="home-image" alt="animal pic" src={RabbitPic} />
            <a href="/rabbits">Check Out Rabbits</a>
          </div>
        </Col>

        <Col>
         <div className="animal-link">
            <h2>Ferrets</h2>
            <img className="home-image" alt="animal pic" src={FerretPic} />
            <a href="/ferrets">Check Out Ferrets</a>
         </div>
        </Col>

        <Col>
         <div className="animal-link">
            <h2>Guinea Pigs</h2>
            <img className="home-image" alt="animal pic" src={GuineaPigPic}/>
            <a href="/guineapigs">Check Out Guinea Pigs</a>
         </div>
        </Col>

        <Col>
         <div className="animal-link">
            <h2>Hamsters/Gerbils</h2>
            <img className="home-image" alt="animal pic" src={HamsterPic} />
            <a href="/hamstersgerbils">Check Out Hamsters and Gerbils</a>
         </div>
        </Col>
        

        
      </Row>

     
    </Container>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Home;