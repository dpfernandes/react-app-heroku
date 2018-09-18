import React, { Component } from 'react';
/*import logo from './logo.svg';*/
import logoThread from './thread.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logoThread} className="App-logoThread" alt="logoThread" /> 
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h1 className="App-title">Tak Emil</h1>
        </header>
        <p className="App-intro">
        Project Agenda
        </p>
        <p className="App-week"> 
           W01 - 30/09
        </p>
        <p className="App-week-tasks">
          - Presentation of the project, work agreement and group formation.
        </p>  
        <p className="App-week"> 
          W02 - 07/10 (Sprint 01)
        </p>
        <p className="App-week-tasks">
          - Presentation of the Mockups previously given by the mentors and start with the UI development for Main Menu, Search by text, Calendar and Geolocation map for Jobs, Events, Shadows and Organisations using Storybook.io.
        </p>  
        <p className="App-week"> 
           W03 - 14/10 (Sprint 02)
        </p>
        <p className="App-week-tasks">
          - Build Menu View with React and based on the Views previously created with the Storybook.io;
          </p>
        <p className="App-week-tasks">
          - Built List Views with React using the APIs structure for Job ads, Events and Organisations to list the information;
          </p>
        <p className="App-week-tasks">
          - Built Search View with React using the Elastic Search previously set up by the mentors;
          </p>
        <p className="App-week-tasks">
          - Built List View with for Calendar using the API's structure for Shadows and their availability.
        </p>
        <p className="App-week"> 
          W04 - 21/10 (Sprint 03)
        </p>
        <p className="App-week-tasks">
          - Create the DB based on the Data Model previously given by the mentors;
          </p>
        <p className="App-week-tasks">
          - Built Insertion and Edit Views for Job ads, Events, Shadows and Organisations that generate a JSON file for each insertion;
          </p>
        <p className="App-week-tasks">
          - Create procedures in the DB that get the JSON files from the Insertion View and Edit View and insert or modify the data into the tables;
          </p>
        <p className="App-week-tasks">
          Note: Deletion will be handled by Active and Inactive State.
          </p>
        <p className="App-week-tasks">
        </p>
        <p className="App-week"> 
          W05 - 28/10 (Sprint 04)
        </p>
        <p className="App-week-tasks">
          - Built Map View with React for the geolocations for the Jobs, Events, Shadows and Organisations and pin down the geolocations.
        </p>
        <p className="App-week"> 
          W06 - 04/11
        </p>
        <p className="App-week-tasks">
          - Feature Freeze and Code Review.
        </p>
        <p className="App-week"> 
          W07 - 11/11
        </p>
        <p className="App-week-tasks">
          - Preparation for the graduation presentations.
        </p>
        <p className="App-week"> 
          W08 - 18/11
        </p>
        <p className="App-week-tasks">
          - Graduation.
        </p>
      </div>
    );
  }
}

export default App;
