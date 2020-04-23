import React from 'react';
import cx from 'classnames';
import {Container,Row,Col,Button,Card} from 'reactstrap'
import styles from './Infos.module.css'
import image from '../../images/covid.png'
import Moment from 'react-moment';
import 'moment-timezone';
const info =({lastUpdate })=>{
    
    return (
      
        <div className="header bg-gradient-info pb-8 pt-5 pt-md-8 py-4" align="center" style={{width:'85%'}} >
          <Container fluid >
            <div className="header-body bg-light " style={{boxShadow: '2px 1px 7px 1px'}} >
              {/* Card stats */}
              <Card className="card-stats  mb-xl-0 border border-secondary">
              <Row >
              <Col lg="6" xl="4" className="mb-4 mb-xl-0">
                    <Row><br /></Row>
                    <img src={image} alt="new_message" className={styles.image} />
                </Col>
               
                <Col lg="6" xl="4" className="mb-4 mb-xl-0">
                        <Row><br /><br /></Row>
                    <h2>Covid-19 Coronavirus Outbreak</h2>
                    <br/>
                    <h3 className="text-gray-600">Welcome to my web site </h3>
                    
                    <p>
                        <span className="text-gray-600">
                           This web site is note official. Provide official developments of the Corona virus in the world 
                            <br /> 
                        </span>
                        
                    </p>
                  
                      
                </Col>
                <Col lg="6" xl="4" className="mb-5 mb-xl-0">
               
               <br />
               <br />
               <br/>
               <br/>
               <a href="/">
               <Button color="info" outline type="button">
               <i class="fas fa-sync"></i>
               &nbsp;
                Update the state
               </Button>
               </a>
               <br />
              
                   <p className="mt-4 mb-0 text-muted text-sm" >
                       <span className="text-info mr-2"> 
                       <Moment format="Do MMMM YYYY HH:mm:ss" locale="fr">{new Date(lastUpdate)}</Moment>
                       </span>
                   </p>
                   
           </Col>
                
              </Row>
              </Card>
            </div>
          </Container>
        </div>
     
    )
}
export default info;