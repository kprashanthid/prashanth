import React from "react";
import Mynav from "../components/Mynav";
import { Col, Container, Row } from 'react-bootstrap';
import { Pimaage } from "../components/Pimage";
import { Aboutme } from "../components/Aboutme";
import { Projects } from "../components/Projects";


export const Mainpage : React.FC = () => {
    return <>
   
   <Row>
        <Col sm={12}> <Mynav/></Col>
       </Row>
       <Row>
        <Col sm={4} style={{padding:'20px'}}><Pimaage/></Col>
        <Col sm={8} style={{padding:'20px'}}><Aboutme/></Col>
      </Row>
       <Row>
        <Col sm style={{padding:'40px'}}> <Projects Image={"https://img.freepik.com/premium-vector/project-concept-vector-business-horizontal-illustration-banner-white-background_104589-19.jpg"} cardhead={"project1"} cardcontent={"project content 1"} />
</Col>
        <Col sm style={{padding:'40px'}}> <Projects Image={"https://img.freepik.com/premium-vector/project-concept-vector-business-horizontal-illustration-banner-white-background_104589-19.jpg"} cardhead={"project1"} cardcontent={"project content 1"} />
</Col>
        <Col sm  style={{padding:'40px'}}>  <Projects Image={"https://img.freepik.com/premium-vector/project-concept-vector-business-horizontal-illustration-banner-white-background_104589-19.jpg"} cardhead={"project1"} cardcontent={"project content 1"} />
</Col>
<Col sm style={{padding:'40px'}}>  <Projects Image={"https://img.freepik.com/premium-vector/project-concept-vector-business-horizontal-illustration-banner-white-background_104589-19.jpg"} cardhead={"project1"} cardcontent={"project content 1"} />
</Col>

      </Row>
    </>
}