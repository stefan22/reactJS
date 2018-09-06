import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar dark color='primary'>
          <div className='container'>
            <NavbarBrand href='/'>Ristorante Confusion</NavbarBrand>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default App;
