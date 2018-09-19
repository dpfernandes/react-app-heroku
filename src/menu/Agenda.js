import React, { Component } from "react";
 
class Agenda extends Component {
  render() {
    return (
      <div class="App">
        <h2>Agenda</h2>
        
          <p className="App-week"> 
                    W01 - 30/09
                  </p>
                  <ul className="App-week-tasks">
                    <li className="App-week-tasks-item"> Presentation of the project, work agreement and group formation.</li>
                  </ul>
                  <p className="App-week"> 
                    W02 - 07/10 (Sprint 01)
                  </p>
                  <ul className="App-week-tasks">
                  <li className="App-week-tasks-item"> Presentation of the Mockups previously given by the mentors and start with the UI development for Main Menu, Search by text, Calendar 
                    and Geolocation map for Jobs, Events, Shadows and Organisations using Storybook.io.</li>
                  </ul>  
                  <p className="App-week"> 
                    W03 - 14/10 (Sprint 02)
                  </p>
                  <ul className="App-week-tasks">         
                    <li className="App-week-tasks-item"> Build Menu View with React and based on the Views previously created with the Storybook.io;</li>
                    <li className="App-week-tasks-item"> Built List Views with React using the APIs structure for Job ads, Events and Organisations to list the information;</li>
                    <li className="App-week-tasks-item"> Built Search View with React using the Elastic Search previously set up by the mentors;</li>
                  <li className="App-week-tasks-item"> Built List View with for Calendar using the API's structure for Shadows and their availability.</li>
                  </ul>
                  <p className="App-week"> 
                    W04 - 21/10 (Sprint 03)
                  </p>
                  <ul className="App-week-tasks">
                  <li className="App-week-tasks-item"> Create the DB based on the Data Model previously given by the mentors;</li>
                  <li className="App-week-tasks-item"> Built Insertion and Edit Views for Job ads, Events, Shadows and Organisations that generate a JSON file for each insertion;</li>
                  <li className="App-week-tasks-item"> Create procedures in the DB that get the JSON files from the Insertion View and Edit View and insert or modify the data into the tables;</li>
                  </ul>
                  <p className="App-week-tasks">
                    Note: Deletion will be handled by Active and Inactive State.
                  </p>
                  <p className="App-week"> 
                    W05 - 28/10 (Sprint 04)
                  </p>
                  <ul className="App-week-tasks">
                  <li className="App-week-tasks-item"> Built Map View with React for the geolocations for the Jobs, Events, Shadows and Organisations and pin down the geolocations.</li>
                  <li className="App-week-tasks-item"> Pin down your own location on the map.</li>
                  </ul>
                  <p className="App-week"> 
                    W06 - 04/11
                  </p>
                  <ul className="App-week-tasks">
                    <li className="App-week-tasks-item"> Feature Freeze and Code Review.</li>
                  </ul>
                  <p className="App-week"> 
                    W07 - 11/11
                  </p>
                  <ul className="App-week-tasks">
                    <li className="App-week-tasks-item"> Preparation for the graduation presentations.</li>
                  </ul>
                  <p className="App-week"> 
                    W08 - 18/11
                  </p>
                  <ul className="App-week-tasks">
                    <li className="App-week-tasks-item"> Graduation.</li>
                  </ul>
        
      </div>
    );
  }
}
 
export default Agenda;
