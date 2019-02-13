import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import './App.css';

class App extends React.Component {
  render() {
    return (
    	<div>
    		<Navbar/>
    		<Home/>
    		<Footer/>
    	</div>
    );
  }
}

export default App;
