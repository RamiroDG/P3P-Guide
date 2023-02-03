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
          texto:''
      }
  };

  toggleRoute = () =>{
    this.setState({femc:!this.state.femc});
    const body = document.querySelector("body");
    body.classList.toggle("femc");
  }

  getSLinks(){
    const {sLinks, femc} = this.state;
    if(femc){
      return sLinks.filter((sLink) => {
        return sLink.route.includes("f");
      })
    } else {
      return sLinks.filter((sLink) => {
        return sLink.route.includes("m");
      })
    }
  }

  render(){
   
    const filteredSLinks = this.getSLinks();
    return(
      <div>
        <NavBar toggleRoute={this.toggleRoute}/>
        <SLinkGroup sLinks={filteredSLinks} />
      </div>
    );
  }


};

export default App;