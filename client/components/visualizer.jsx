import React, { useState } from "react";
import applications from './visData';
import Navbar from './navbar.jsx';


const visualizer = () => {
  //in future, will get application objects from state through mapStateToProps

  const onDragOver = (e) => {
    e.preventDefault();
  } 

  const onDrop = (e, stat) => {
    let compName = e.dataTransfer.getData("company");
    console.log(compName);
    //change status to status of dropped section through http request, update db and state through redux
    // for (let obj of applications) {
    //   if (obj.company === compName) obj.status = stat;
    // }
  }

  //convert to switch case and push accordingly?
  const incompletes = applications.filter(app => app.status === 'incomplete');
  const pendings = applications.filter(app => app.status === 'pending');
  const phoneScreens = applications.filter(app => app.status === 'phoneScreen');
  const behaviorals = applications.filter(app => app.status === 'behavioral');
  const technicals = applications.filter(app => app.status === 'technical');
  const sdis = applications.filter(app => app.status === 'sdi');
  const rejections = applications.filter(app => app.status === 'rejected');
  const offers = applications.filter(app => app.status === 'offer');
  

    return (
      //map function in here to create the objects
      //all stage divs will have grid display (use scss)
      <div id="visualizer-page">
          <h1>Visualizer</h1> 

          <div id="positive-stage-container">

            <div className="app-stage" id="pendings" onDragOver={(e)=> onDragOver(e)} onDrop={(e)=> onDrop(e, "pending")}>
              <center><h2>Pending</h2></center>
              <BoxContainer apps={pendings}/>
            </div>

            <div className="app-stage" id="phone-screens" onDragOver={(e)=> onDragOver(e)} onDrop={(e)=> onDrop(e, "phoneScreen")}>
              <center><h2>Phone Screens</h2></center>
              <BoxContainer apps={phoneScreens}/>
            </div>

            <div id="interview-stages">
              <center><h2>Interviews</h2></center>

              <div className="app-stage" id="behaviorals" onDragOver={(e)=> onDragOver(e)} onDrop={(e)=> onDrop(e, "behavioral")}>
                <h3>Behavioral</h3>
                <BoxContainer apps={behaviorals}/>
              </div>

              <div className="app-stage" id="sdis" onDragOver={(e)=> onDragOver(e)} onDrop={(e)=> onDrop(e, "sdi")}>
                <h3>SDIs</h3>
                <BoxContainer apps={sdis}/>
              </div>

              <div className="app-stage" id="technicals" onDragOver={(e)=> onDragOver(e)} onDrop={(e)=> onDrop(e, "technicals")}>
                <h3>Technical</h3>
                <BoxContainer apps={technicals}/>
              </div>
            </div>
            
            <div className="app-stage" id="offers" onDragOver={(e)=> onDragOver(e)} onDrop={(e)=> onDrop(e, "offer")}>
              <center><h2>Offers</h2></center>
              <BoxContainer apps={offers}/>
            </div>
          </div>
          
          <div id="negative-stage-container">
            <div className="app-stage" id="incompletes" onDragOver={(e)=> onDragOver(e)} onDrop={(e)=> onDrop(e, "incomplete")}>
              <h2>In Progress</h2>
              <BoxContainer apps={incompletes}/>
            </div>
            <div className="app-stage" id="rejections" onDragOver={(e)=> onDragOver(e)} onDrop={(e)=> onDrop(e, "rejected")}>
              <h2>Rejected</h2>
              <BoxContainer apps={rejections}/>
            </div>
          </div>
      </div>
    );
};

const BoxContainer = (props) => {
  const onDragStart = (e, company) => {
    e.dataTransfer.setData("company", company);
  }

  const appBoxes = props.apps.map((app, i = 0) => {
    return <div 
    key={i}
    className="app-box"
    company={app.company}
    description={app.description}
    location={app.location}
    salary={app.salary}
    status={app.status}
    onDragStart={(e)=> onDragStart(e, app.company)}
    draggable
    ><center>{app.company}</center></div>
  });

  return(
    <div className="vis-box">
      {appBoxes}
    </div>
  );
}


//top priority is showing correct positions/stages and metrics
//depending on which section it's in its status will update via request, 
//and after that the visualizer will reload with the updated view & metrics
//search function will filter only what was searched for, showing updated metrics - ex. only companies above 150k pass rate, by industry, etc.
//maybe drag and drop within the visualizer? //user can search for a div by company name (filter) then drag & drop to destination stage, 



//metrics must be calculated after all components in the user's visualizer are retrieved from the DB

export default visualizer;