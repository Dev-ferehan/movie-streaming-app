import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NetflixLogo from "../../assets/images/BrandAssets_Logos_01-Wordmark-removebg-preview.png";
import "../Header/Header2.css";

function Header2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggle = (isOpen) => setIsMenuOpen(isOpen);
  useEffect(() => {
    // Select the offcanvas element by the ID you defined in your JSX
    const offcanvasElement = document.getElementById(
      "offcanvasNavbar-expand-xl",
    );

    if (offcanvasElement) {
      const handleShow = () => setIsMenuOpen(true);
      const handleHide = () => setIsMenuOpen(false);

      // Add event listeners for Bootstrap Offcanvas events
      offcanvasElement.addEventListener("show.bs.offcanvas", handleShow);
      offcanvasElement.addEventListener("hide.bs.offcanvas", handleHide);

      // Clean up listeners when component unmounts
      return () => {
        offcanvasElement.removeEventListener("show.bs.offcanvas", handleShow);
        offcanvasElement.removeEventListener("hide.bs.offcanvas", handleHide);
      };
    }
  }, []);
  return (
    <div className={`header_container ${isMenuOpen ? "menu-active" : ""}`}>
      <Navbar
        expand="xl"
        className="bg-body-tertiary mb-3"
        onToggle={handleToggle}
      >
        <Container fluid className="header2 ">
          <Nav.Link href="#" className="left-logo">
            <img
              alt=""
              src={NetflixLogo}
              width="130"
              // height="300"
              className="d-inline-block align-top"
            />
          </Nav.Link>
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-xl`}
            className="openMenu"
          />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-xl`}
            aria-labelledby={`offcanvasNavbarLabel-expand-xl`}
            placement="end"
            onHide={() => setIsMenuOpen(false)}
          >
            <Offcanvas.Header closeButton className="header1">
              <Offcanvas.Title
                id={`offcanvasNavbarLabel-expand-xl`}
                className="header_icons"
              >
                <img
                  alt=""
                  src={NetflixLogo}
                  width="130"
                  // height="300"
                  className="d-inline-block align-top"
                />
                <div className="nav_right-sm-icons">
                  <a className="link" href="#">
                    <SearchIcon />
                  </a>
                  <a className="link" href="#">
                    <NotificationsNoneIcon />
                  </a>
                  <a className="link" href="#">
                    <PermIdentityIcon />
                  </a>
                </div>
              </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body className="openMenu">
              <Row className="nav_container">
                <Col lg="" className="nav_left">
                  <Nav>
                    <Nav.Link className="link" href="#">
                      Home
                    </Nav.Link>
                    <Nav.Link className="link" href="#">
                      Link
                    </Nav.Link>
                    <Nav.Link className="link" href="#">
                      TVShows
                    </Nav.Link>
                    <Nav.Link className="link" href="#">
                      Movies
                    </Nav.Link>
                    <Nav.Link className="link" href="#">
                      Latest
                    </Nav.Link>
                    <Nav.Link className="link" href="#">
                      MyList
                    </Nav.Link>
                    <Nav.Link className="link" href="#">
                      Browser by Languages
                    </Nav.Link>
                  </Nav>
                </Col>
                <Col lg="1" className="nav_right">
                  <Nav className="nav_right-sm">
                    <a className="link" href="#">
                      <SearchIcon />
                    </a>
                    <a className="link" href="#">
                      <NotificationsNoneIcon />
                    </a>
                    <a className="link" href="#">
                      <PermIdentityIcon />
                    </a>
                    {/* <Nav.Link className="link" href="#">
                      <ArrowDropDownIcon />
                    </Nav.Link> */}
                  </Nav>
                </Col>
              </Row>{" "}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header2;
