import React, { Component } from "react";
import linkedin from '../images/linkedin.svg';
import github from '../images/github.svg';
import {
          Route,
          NavLink,
          BrowserRouter,
          Link
} from "react-router-dom";

class Groups extends Component {
  render() {
    return (
      <div class="content-desc">
        <h2>Groups</h2>
        <h3>Student/GitHub Repo</h3>
        <h3>Group formation is not available yet</h3>
        <div class="content-desc"> 
            <a href="https://github.com/chandu87/">
                <img src={github} className="github-icon" alt="github-icon"/>
            </a>
            <a href="https://www.linkedin.com/in/chandrashekar-palle-65774617/">
                <img src={linkedin} className="linkedin-icon" alt="linkedin-icon"/>
            </a>Chandrashekar Palle 
        </div>
        <div>
        <img src="http://ghchart.rshah.org/chandu87" alt="chandu87's Github chart" />

        </div>
        <div class="content-desc">
            <a href="https://github.com/ibrsal/">
                <img src={github} className="github-icon" alt="github-icon"/>
          </a>   
          <a href="https://www.linkedin.com/in/ibrahim-salah-432264171/">
                  <img src={linkedin} className="linkedin-icon" alt="linkedin-icon"/>  
              </a>Ibrahim Kadoura  
       </div>
       <div>
        <img src="http://ghchart.rshah.org/ibrsal" alt="ibrsal's Github chart" />
       </div>
       <div class="content-desc">
            <a href="https://github.com/jacklinenassozi/">
                <img src={github} className="github-icon" alt="github-icon"/>
            </a>Jackline Nassozi
        </div>
        <div>
        <img src="http://ghchart.rshah.org/jacklinenassozi" alt="jacklinenassozi's Github chart" />
       </div>
       <div class="content-desc">
            <a href="https://github.com/JVDZMN">
                <img src={github} className="github-icon" alt="github-icon"/>
            </a>Javad Zamani        
        </div>
        <div>
           <img src="http://ghchart.rshah.org/JVDZMN" alt="JVDZMN's Github chart" />
        </div>
 
       <div class="content-desc">
         <a href="https://github.com/Majd-Darraj">
                <img src={github} className="github-icon" alt="github-icon"/>
                </a>
             <a href="https://www.linkedin.com/in/majd-darraj-39ab9399/">
                  <img src={linkedin} className="linkedin-icon" alt="linkedin-icon"/>  
              </a>Majd Darraj 
       </div>
       <div>
           <img src="http://ghchart.rshah.org/Majd-Darraj" alt="Majd-Darraj's Github chart" />
       </div>
       <div class="content-desc">
             <a href="https://github.com/majidkhan">
                 <img src={github} className="github-icon" alt="github-icon"/>
              </a>
             <a href="https://www.linkedin.com/in/majid-khan-2b914332/">
                  <img src={linkedin} className="linkedin-icon" alt="linkedin-icon"/>
              </a>Majid Khan 
       </div>
       <div>
           <img src="http://ghchart.rshah.org/majidkhan" alt="majidkhan's Github chart" />
       </div>

  
       <div class="content-desc">
            <a href="https://github.com/Milamanieva/">
                  <img src={github} className="github-icon" alt="github-icon"/>
            </a>
            <a href="https://www.linkedin.com/in/mila-manieva-91b368150/">
                <img src={linkedin} className="linkedin-icon" alt="linkedin-icon"/>
              </a> Mila Manieva 
        </div>
        <div>
           <img src="http://ghchart.rshah.org/Milamanieva" alt="Milamanieva's Github chart" />
       </div>
       <div class="content-desc">
            <a href="https://github.com/paredesrichard/">
                <img src={github} className="github-icon" alt="github-icon"/>
            </a>
            <a href="https://www.linkedin.com/in/richard-paredes-4a3a70133/">
              <img src={linkedin} className="linkedin-icon" alt="linkedin-icon"/>
            </a>Richard Paredes 
        </div>
        <div>
           <img src="http://ghchart.rshah.org/paredesrichard" alt="paredesrichard's Github chart" />
       </div>
       <div class="content-desc">
            <a href="https://github.com/smauddin/">
              <img src={github} className="github-icon" alt="github-icon"/>
            </a>
            <a href="https://www.linkedin.com/in/s-m-anowar-uddin-60ab0473/">
              <img src={linkedin} className="linkedin-icon" alt="linkedin-icon"/>
            </a>S M Anowar Uddin  
       </div>
       <div>
           <img src="http://ghchart.rshah.org/smauddin" alt="smauddin's Github chart" />
       </div>
       <div class="content-desc">
           <a href="https://github.com/talaaz">
              <img src={github} className="github-icon" alt="github-icon"/>
            </a>
            <a href="https://www.linkedin.com/in/tala-azrak-597226107/">
              <img src={linkedin} className="linkedin-icon" alt="linkedin-icon"/>
            </a>  Tala Azrak 
        </div>
        <div>
           <img src="http://ghchart.rshah.org/talaaz" alt="talaaz's Github chart" />
       </div>
          
          


        
      </div>
    );
  }
}
 
export default Groups;
