import React from 'react';
import { Component } from 'react';
//changes name browserRouter to router
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import Home from './pages/Home';
import Products from './pages/Products';
import Contacts from './pages/Contact';

import './styles.css';

class App extends Component {
  state = {
    products: []
  }
    componentDidMount(){
      //make GET request to endpoint
      fetch('/api/products')
      //parses the output to JSON
      .then(res => res.json())
      //sets the value of state to the output from the API call
      .then((data) => {
        this.setState({ products: data })
      })
      //logs any error
      .catch(console.log)
    }
  render(){
   
    return (
      <Router>
        <div>
          <NavBar />
            <Route exact path="/home" component={Home} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/contact" component={Contacts} />
          <Footer />
        </div>
      </Router>
    );
  }
  }
  
  
  export default App;
  
      
  

    
