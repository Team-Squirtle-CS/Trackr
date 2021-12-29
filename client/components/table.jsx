import * as React from "react";
import { connect } from 'react-redux';
import { deleteApplication } from '../actions/applicationActions';

const mapDispatchToProps = (dispatch) => ({
    deleteApplication: (applicationId) => dispatch(deleteApplication(applicationId))
});

const table = (props, columns) => {

    const Row = (props) => {

        return (
            <div className="row">
                <div id="rowItem"><center>{props.id}</center></div>
                <div id="rowItem"><center>{props.company}</center></div>
                <div id="rowItem"><center>{props.description}</center></div>
                <div id="rowItem"><center>{props.position}</center></div>
                <div id="rowItem"><center>{props.salary}</center></div>
                <div id="rowItem"><center>{props.deadline}</center></div>
                <div id="rowItem"><center>{props.notes}</center></div>
                <button id="rowItem">DELETE</button>
            </div>
        );
    }

    const ColumnLabels = (props) => {

        return (
            <div className="labels">
                <div id="rowItem"><center>id</center></div>
                <div id="rowItem"><center>company</center></div>
                <div id="rowItem"><center>description</center></div>
                <div id="rowItem"><center>position</center></div>
                <div id="rowItem"><center>salary</center></div>
                <div id="rowItem"><center>deadline</center></div>
                <div id="rowItem"><center>notes</center></div>
            </div>
        )
    }

    const applications = [
        [1, "TechCorp", "FinTech", "frontend Engineer", 100, "2022-01-30", "Greate salary but evil megacorporation"],
        [2, "Facebook", "FANG", "fullstack developer", 200, "2022-01-30", "^^"]
    ];
    const rows = [];
    applications.forEach(app => {
        rows.push(<Row id={app[0]} company={app[1]} description={app[2]} position={app[3]} salary={app[4]} deadline={app[5]} notes={app[6]}/>)
    })
    const labels = [<ColumnLabels/>]


    return (
        <div className="table">
            {labels}
            {rows}
        </div>
    );
};
  
  export default connect(null, mapDispatchToProps)(table);