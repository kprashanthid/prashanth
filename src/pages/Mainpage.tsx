import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Sidenav from "../components/Sidenav";
import { Topnav } from "../components/Topnav";
import { Projects } from "../components/Projects";
import { Skillscard } from "../components/Skillscard";
import { Aboutme } from "../components/Abouteme";






export const Mainpage : React.FC = () => {
    const myStyle = {
      marginTop: '20px',
    };
    return <>
 <div style={{background:'black'}}>
    <Row style={{width:'100%'}}>
        <Col sm={2}>
        <Sidenav/>   
        </Col>
        <Col   sm={10} >
        <Topnav/>
        <Row style={myStyle}>
        <h1 style={{background:'black',color:'white'}}>Projects</h1>
        <Col sm={3}><Projects Image={"https://wp.mridul.tech/wp-content/uploads/2023/02/React-Project-Ideas.webp"} cardhead={"project 1"} cardcontent={"details about project 1"} /></Col>
        <Col sm={3}><Projects Image={"data:image/png;base64,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"} cardhead={"project 1"} cardcontent={"details about project 1"} /></Col>
        <Col sm={3}><Projects Image={"https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220310072422/7-Best-React-Project-Ideas-for-Beginners-in-2022.png"} cardhead={"project 1"} cardcontent={"details about project 1"} /></Col>
        <Col sm={3}><Projects Image={"https://media.geeksforgeeks.org/wp-content/uploads/20230519095635/How-to-Deploy-React-App-on-Netlify-Using-Github.png"} cardhead={"project 1"} cardcontent={"details about project 1"} /></Col>
      </Row>
      <br/>
      <Row className="">  
      <h1 style={{background:'black',color:'white'}}>skills</h1>
        <Col sm={4}><Skillscard skill1={"HTML"} skill2={"CSS"} skill3={"JAVASCRIPT"} skill4={"REACT JS"} skill5={"TYPESCRIPT"} heading={"FRONTEND"}/> </Col>
        <Col sm={4}><Skillscard skill1={"JAVA"} skill2={""} skill3={"NODE JS (BASICS)"} skill4={""} skill5={"PYTHON (BASICS)"} heading={"BACKEND"}/> </Col>
        <Col sm={4}><Skillscard skill1={"MONGO DB"} skill2={""} skill3={""} skill4={"MY SQL"} skill5={""} heading={"DATABASE"}/> </Col>
        </Row><br/>
        <Row><br/>
          <Col sm={12}> <Aboutme/></Col>
        </Row>
        </Col>
     
      </Row>
      
    
      </div>
        
    </>
}