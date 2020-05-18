import React, { Component } from 'react';
import './App.css';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import DrawerToggleButton from './components/SideDrawer/DrawerToggleButton';
import Content from './components/Content/Content'
import Introduction from './components/Introduction/Introduction'


class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState: any) => { ////////////////////////////////
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClosingClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render(){
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClosingClickHandler} />
    }
    return (
      <div className="App">
        <div className="background"></div>
        <SideDrawer click={this.backdropClosingClickHandler} show={this.state.sideDrawerOpen}/>
        {backdrop}
        <DrawerToggleButton click={this.drawerToggleClickHandler}/>
        <Introduction/>
        <Content/>
      </div>
    );
  }
}

export default App;
