import React from 'react';
import { useState } from 'react';
import {
    UncontrolledCollapse,
    NavbarBrand,
    Navbar,
    NavItem,
    Nav,
    Container,
    NavbarText,
    Button
  } from "reactstrap";
  import logo from '../../images/covid.png'
import styles from './Portail.module.css'
import { Grid } from '@material-ui/core';
import LoadingBar from 'react-top-loading-bar';

const Exam = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
     
    <Navbar
    className="navbar navbar-dark bg-info fixed-top"
    expand="md"
  >
    
    <img src={logo} alt="new_message" className={styles.image} />
    &nbsp;&nbsp;&nbsp;&nbsp;
      <NavbarBrand href="/" >
      <h2>Covid-19 Outbreak</h2>
      </NavbarBrand>
      &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
      <button
        aria-controls="navbar-info"
        aria-expanded={false}
        aria-label="Toggle navigation"
        className="navbar-toggler"
        data-target="#navbar-info"
        data-toggle="collapse"
        id="navbar-info"
        type="button"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <UncontrolledCollapse navbar toggler="#navbar-info">
        <div className="navbar-collapse-header">
          
        </div>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavbarText
              className="nav-link-icon">
              <span >
              <a href="http://www.covidmaroc.ma/Pages/conseilar.aspx" className="nav-link-inner--text" target="_black">
                    <Button block color="success"  type="button">
                    <i class="fas fa-ad"></i>
                    &nbsp;
                    Tips for facing the virus
                    </Button>
                </a>
              </span>
            </NavbarText>
          </NavItem>
          <NavItem>&nbsp;&nbsp;&nbsp;&nbsp;</NavItem>
          <NavItem>
            <NavbarText
              className="nav-link-icon">
              <span >
              <a href="http://covid19.interieur.gov.ma/" className="nav-link-inner--text">
              <Button block color="success"    type="button">
              <i class="fas fa-globe-africa"></i>
                 &nbsp;
                  Ministry's website
                </Button>
                </a>
              </span>
            </NavbarText>
          </NavItem>
          <NavItem>&nbsp;&nbsp;&nbsp;&nbsp;</NavItem>
          <NavItem>
            <NavbarText
              className="nav-link-icon">
              <span >
              <a href="http://covid19.interieur.gov.ma/assets/files/attestation_confinement_ar.pdf" className="nav-link-inner--text" target="_black">
              <Button block color="success"  type="button">
                  <i class="fas fa-download"> </i>
                  &nbsp;
                    Download the mobility certificate
                    </Button>
                </a>
              </span>
            </NavbarText>
            
          </NavItem>
          <NavItem>&nbsp;&nbsp;</NavItem>
          <NavItem className="flex items-center justify-between">
          </NavItem>
        </Nav>
      </UncontrolledCollapse>
    
  </Navbar>
    
  );
}

export default Exam;