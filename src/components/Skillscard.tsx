import React from "react";
import { Card, Col, Row } from "react-bootstrap";

interface props{
  skill1:string;
  skill2:string;
  skill3:string;
  skill4:string;
  skill5:string;
  heading:string;
}


export const Skillscard : React.FC <props> = ({skill1,skill2,skill3,skill4,skill5,heading}) => {
    return <>
    
    <Row className="skill-cards">
      <Col sm={2}>
      <Card style={{ width: '18rem'}} className="skill-card">
      <Card.Body>
        <Card.Title>{heading}</Card.Title>
        <div className="card-content">
        <span className="skill-card-elements">{skill1}</span><span className="skill-card-elements">{skill2}</span>
       <span className="skill-card-elements">{skill3}</span><span className="skill-card-elements">{skill4}</span>
       <span className="skill-card-elements">{skill5
}</span>
       </div>
      </Card.Body>
    </Card></Col>
    </Row>
   </>
}