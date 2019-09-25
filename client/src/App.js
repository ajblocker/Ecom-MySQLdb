import React from 'react';
//changes name browserRouter to router
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';

import './styles.css';

function App() {
  // state = {
  //   users:[]
  //   }
  //   componentDidMount();{
  //   this.getUsers();
    
  //   }
    
  //   getUsers = _ => {
  //   fetch('http://localhost:3006')
  //   .then(response => console.log(response))//response.json())
  //   .then(({response}) => this.setState({users: 'response.users'}))
  //   .catch(error => console.log(error));
  //   }
  //   showUsers = user => <div key={user.id}>{user.username}</div>
  //   render();{
  //     const{ users } = this.state;
  //   }
  return (
    <Router>
      <div>
        <NavBar />
          <Route exact path="/home" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/contact" component={Contact} />
        <Footer />
      </div>
    </Router>
  );
}


export default App;

    
