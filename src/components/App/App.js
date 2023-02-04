import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";
import SLinkGroup from "../SLinkGroup/SLinkGroup";
import "./style.css"
import sLinksData from "../../sLinkData";
import Modale from '../Modale/Modale'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 1,
  p: 4,
};

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
        {/* <Modale />  */}
      </div>
    );
  }
};

export default App;