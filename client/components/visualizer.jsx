import React, { useState } from "react";

const visualizer = () => {
  //in future, will get this array from state through mapStateToProps
  const applications = [
    {
      company: 'Facebook',
      description: 'FAANG',
      location: 'Menlo Park',
      salary: 180000,
      status: 'pending'
    },
    {
      company: 'Amazon',
      description: 'FAANG',
      location: 'San Francisco',
      salary: 150000,
      status: 'pending'
    },
    {
      company: 'Apple',
      description: 'FAANG',
      location: 'San Francisco',
      salary: 165000,
      status: 'pending'
    },
    {
      company: 'Netflix',
      description: 'FAANG',
      location: 'San Francisco',
      salary: 1680000,
      status: 'pending'
    },
    {
      company: 'Google',
      description: 'FAANG',
      location: 'San Francisco',
      salary: 152000,
      status: 'offer'
    },
    {
      company: 'Stripe',
      description: 'misc',
      location: 'New York',
      salary: 180000,
      status: 'phoneScreen'
    },
    {
      company: 'Oracle',
      description: 'gen tech',
      location: 'New York',
      salary: 135000,
      status: 'phoneScreen'
    },
  ]

  //convert to switch case and push accordingly?
  const incompletes = applications.filter(app => app.status === 'incomplete');
  const pendings = applications.filter(app => app.status === 'pending');
  const phoneScreens = applications.filter(app => app.status === 'phoneScreen');
  const behaviorals = applications.filter(app => app.status === 'behavioral');
  const technicals = applications.filter(app => app.status === 'technical');
  const rejections = applications.filter(app => app.status === 'rejected');
  const offers = applications.filter(app => app.status === 'offer');
  

    return (
      //map function in here to create the objects
      //all stage divs will have grid display (use scss)
        <div id="visualizer-page">
            <h1>Visualizer</h1> 
            <div id="positive-stage-container">
              <div className="app-stage" id="pendings">
                <h2>Pending</h2>
                <BoxContainer apps={pendings}/>
              </div>
              <div className="app-stage" id="phone-screens">
                <h2>Phone Screens</h2>
                <BoxContainer apps={phoneScreens}/>
              </div>

              <div id="interview-stages">
                <h2>Interviews</h2>

                <div className="app-stage" id="behaviorals">
                  <h3>Behavioral</h3>
                  <BoxContainer apps={behaviorals}/>
                </div>
                <div className="app-stage" id="technicals">
                  <h3>Technical</h3>
                  <BoxContainer apps={technicals}/>
                </div>
              </div>
              
              <div className="app-stage" id="offers">
                <h2>Offers</h2>
                  <BoxContainer apps={offers}/>
              </div>
            </div>
            <div id="negative-stage-container">
              <div className="app-stage" id="rejections">
                <h2>Rejected</h2>
                  <BoxContainer apps={rejections}/>
              </div>
              <div className="app-stage" id="incompletes">
                <h2>In Progress</h2>
                  <BoxContainer apps={incompletes}/>
              </div>
            </div>
        </div>
    );
};

const BoxContainer = (props) => {
  const appBoxes = props.apps.map((app, i = 0) => {
    return <div 
    key={i}
    className="app-box"
    company={app.company}
    description={app.description}
    location={app.location}
    salary={app.salary}
    status={app.status}
    >{app.company}</div>
  })
  return(
    <div className="vis-box">
      {appBoxes}
    </div>
  )
}


//top priority is showing correct positions/stages and metrics
//depending on which section it's in its status will update via request, 
//and after that the visualizer will reload with the updated view & metrics
//search function will filter only what was searched for, showing updated metrics - ex. only companies above 150k pass rate, by industry, etc.
//maybe drag and drop within the visualizer? //user can search for a div by company name (filter) then drag & drop to destination stage, 



//metrics must be calculated after all components in the user's visualizer are retrieved from the DB

export default visualizer;