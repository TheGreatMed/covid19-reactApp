import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import styles from './Countries.module.css'

import {displayCountries} from '../../api' 


const Countries = ({ onCountryChange }) => {
    const [countries, setCountries] = useState([]);
  
    useEffect(() => {
      const fetchAPI = async () => {
        setCountries(await displayCountries());
      };
  
      fetchAPI();
    }, []);
  
    return (
     
    <FormGroup className={styles.selectControl}>
     
      <Label for="exampleSelect">List of Countries</Label>
      <Input type="select" onChange={(e) => onCountryChange(e.target.value)}>
     
      {countries.map((country, i) => <option key={i} value={country}> {country}</option>)}
      </Input>
       
    </FormGroup>
    )
  };
  
  export default Countries;