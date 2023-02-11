import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";
import SLinkGroup from "../SLinkGroup/SLinkGroup";
import "./style.css"
import sLinksData from "../../sLinkData";

class App extends Component {    
  constructor(){
      super();
      this.state = {
          femc:false,
          sLinks:sLinksData,
          show:false
      }
  };

  toggleRoute = () =>{
    this.setState({femc:!this.state.femc});
    const body = document.querySelector("body");
    body.classList.toggle("femc");
  }

  show = (status) => this.setState({show:status});

  getSLinks(){
    const {sLinks, femc} = this.state;
    if(femc){
      return sLinks.filter((sLink) => {
        return sLink.route === "f";
      })
    } else {
      return sLinks.filter((sLink) => {
        return sLink.route === "m";
      })
    }
  }

  render(){
    const filteredSLinks = this.getSLinks();
    const { show } = this.state;
    return(
      <div className="fondo">
        <NavBar toggleRoute={this.toggleRoute} show={show} toggleShow={this.show}/>        
        <SLinkGroup sLinks={filteredSLinks} show={show} toggleShow={this.show} />
      </div>
    );
  }
};

export default App;