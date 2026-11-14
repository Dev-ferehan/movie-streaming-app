import React from "react";
import Nav from "react-bootstrap/Nav";
import "./footer.css";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const footer = () => {
  return (
    <Container className="footer_container">
      <Row>
        <Col>
          <Nav>
            <Nav.Link
              className="link"
              href="https://www.facebook.com/profile.php?id=61563064620269&mibextid=zbWKwL"
            >
              <FacebookSharpIcon />
            </Nav.Link>
            <Nav.Link
              className="link"
              href="https://www.instagram.com/esheshuahmed?igsh=MTj6eDNiZzQwcHdyMQ=="
            >
              <InstagramIcon />
            </Nav.Link>
            <Nav.Link
              className="link"
              href="https://www.linkedin.com/in/eshshu-ahmed-bb001a323"
            >
              <LinkedInIcon />
            </Nav.Link>
          </Nav>
          <ul>
            <li>Contact Us</li>
            <li>
              &#169; <a href="">1997-2024 Netflix inc</a>
            </li>
          </ul>
        </Col>

        <Col>
          <ul>
            <li>
              <a href="">Help Center</a>
            </li>
            <li>
              <a href="">Jops</a>
            </li>
            <li>
              <a href="">Cookie Preferences</a>
            </li>
          </ul>
        </Col>
        <Col>
          <ul>
            <li>
              <a href="">Gift Cards</a>
            </li>
            <li>
              <a href="">Terms of Use</a>
            </li>
            <li>
              <a href="">Corporate information</a>
            </li>
          </ul>
        </Col>
        <Col>
          <ul>
            <li>
              <a href="">Media Center</a>
            </li>
            <li>
              <a href="">Privacy</a>
            </li>
            <li>
              <a href="">Legal Notice</a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default footer;
