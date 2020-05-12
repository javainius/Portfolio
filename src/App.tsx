import React, { Component } from 'react';
import './App.css';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import DrawerToggleButton from './components/SideDrawer/DrawerToggleButton';

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState: any) => { ////////////////////////////////
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render(){
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div className="App">
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
        <DrawerToggleButton click={this.drawerToggleClickHandler}/>
        <div className="introduction">
          <h1>Vainius Baranauskas</h1>
          <h2>web developer</h2>
        </div>
      </div>
    );
  }
}

export default App;
