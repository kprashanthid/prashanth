import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

interface ProjectsProps{
Image : string;
cardhead : string;
cardcontent : string;
}

export const Projects : React.FC <ProjectsProps> = ({Image,cardhead,cardcontent}) =>{

    return <>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Image} />
      <Card.Body>
        <Card.Title>{cardhead}</Card.Title>
        <Card.Text>
         {cardcontent}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </>
}