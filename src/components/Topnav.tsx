import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Image } from 'react-bootstrap';
import image from './65649124_878683279174791_7107573462108995584_n.jpg'



export const Topnav :React.FC <{}> = () => {
    
return <>
<div className="topnav">
<Row >
        <Col className="random" sm={6}> 
      
        <Image className="profile-img" src={image} roundedCircle />
       <span className="profile-name">Prashanth</span>
        </Col>
        <Col className="random" sm={6}>
           <div className="contact"><a href="" className="contactme">contact me</a></div>
        </Col>
      </Row>
</div>

</>


}