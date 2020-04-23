import React from "react";


import {
  Button,
  NavItem,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";





class CardsFooter extends React.Component {
  render() {
    return (
      <>
        <footer className="footer has-cards" style={{width:'97%'}}>
         
         
            
            <hr />
            <Row className="align-items-center justify-content-md-between">
              <Col md="6">
                <div className="copyright">
                  © {new Date().getFullYear()}{" "}
                  <a aria-label="breadcrumb"
                    href="https://www.facebook.com/mohamed.ibnhicham"
                  >
                   IBN HICHAM mohamed
                  </a> , Eleve Ingenieur genie logiciel (full stack <i class="fas fa-grin-beam-sweat"></i>)
                 .
                </div>
              </Col>
              <Col md="6">
                <Nav className="nav-footer justify-content-end">
                  <NavItem>
                  <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="github"
                  href="https://www.facebook.com/mohamed.ibnhicham"
                  id="tooltip495507257"
                >
                  <span className="btn-inner--icon">
                  <i className="fab fa-facebook"></i>
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip495507257">
                  Compte facebook
                </UncontrolledTooltip>
                  </NavItem>
                  
                  <NavItem>
                  <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="github"
                  href="mailto:mohamedibnhicham@gmail.com"
                  id="tooltip495507251"
                >
                  <span className="btn-inner--icon">
                  <i className="fas fa-envelope"></i>
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip495507251">
                  Adresse Emali
                </UncontrolledTooltip>
                  </NavItem>

                  <NavItem>
                  <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="github"
                  href="https://linkedin.com/in/mohamed-ibn-hicham-37b49115b"
                  id="tooltip495507253"
                >
                  <span className="btn-inner--icon">
                  <i class="fab fa-linkedin"></i>
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip495507253">
                 Compte linkedin
                </UncontrolledTooltip>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
        
        </footer>
      </>
    );
  }
}

export default CardsFooter;