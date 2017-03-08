import React, { Component } from 'react';
import Map from './Map.jsx';
import Header from './Header.jsx';
import ListView from './ListView.jsx'
export default class App extends Component {
  render() {
    return (
    <div id = "main">
        <Header/>
         <Map/>
         <ListView/>
    </div>
    );
  }
}
