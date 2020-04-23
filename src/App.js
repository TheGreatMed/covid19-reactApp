import React from 'react';
import Styles from './App.module.css';
import { BrowserRouter } from 'react-router-dom'
import Portail from './components/layouts/portail'
import Countries from './components/countries/countries'
import Navbar from './components/layouts/Navbar'
import {displayData} from './api'
import Cards from './components/cards/cards'
import Charts from './components/charts/charts'
import Infos from './components/infos/infos'
import Footer from './components/layouts/footer'
class App extends React.Component {
  state = {
    data: {},
    country: '',
    lastUpdate:Date
  }

  onCountryChange = async (country) => {
    
    const data = await displayData(country);
    this.setState({ data, country: country });
     
  }
  async componentDidMount() {
    const data = await displayData();
    this.setState({ data,lastUpdate:data.lastUpdate});
    
  }
  


  render(){
    const { data,country,lastUpdate} = this.state;
    
    return ( 
      
      <BrowserRouter>
      
      <Navbar/>
      <br></br><br></br><br></br><br></br>
      
      <div className={Styles.container}>
      <br></br><br></br> 
      <Infos lastUpdate={lastUpdate}/>
       <br></br><br></br>
      <Cards data={data} />
      
      <br></br><br></br>
      <Countries onCountryChange={this.onCountryChange} />
        <br></br>
        <br></br>
        <Charts data={data} country={country} /> 
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Portail/>
        <br></br><br></br>
        <Footer/>
      </div>
      
      </BrowserRouter>
    );
  }
}

export default App;
