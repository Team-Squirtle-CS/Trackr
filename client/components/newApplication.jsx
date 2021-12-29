import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
// get actions we need to update state with 
import { addApplication } from '../actions/applicationActions';

// get user data from global state 
const mapStateToProps = (state) => ({
    // add pertinent state here
    user: state.page.user,
});

const mapDispatchToProps = (dispatch) => ({
    addApplication: (application) => dispatch(addApplication(application)),
});

const newApplication = (props) => {
    // initalize state for new application 
    const [companyName, setCompanyName] = useState('');
    const [companyDescription, setCompanyDescription] = useState('');
    const [location, setLocation] = useState('');
    const [position, setPosition] = useState('');
    const [salary, setSalary] = useState(0);
    const [deadline, setDeadline] = useState(new Date());
    const [notes, setNotes] = useState('');
    const [status, setStatus] = useState('');

    const addApplication = () => {
        // get userID from DB -> need it to add application to DB 
        // create application object 
        const application = {
            company: companyName, 
            description: companyDescription, 
            location: location, 
            position: position, 
            salary: salary, 
            status: status, 
            deadline: deadline, 
            notes: notes, 
            userID: props.user.userId
        }

        // add application to global state applications + DB
        props.addApplication(application);
    }

    return (
        <div>
            <span>
                <form>
                    <input type='text' placeholder="Company Name" value={companyName} onChange={ e => setCompanyName(e.target.value)}></input>
                    <input type='text' placeholder="Company Description" value={companyDescription} onChange={e => setCompanyDescription(e.target.value)}></input>
                    <input type='text' placeholder="Location" value={location} onChange={e => setLocation(e.target.value)}></input>
                    <input type='text' placeholder="Position" value={position} onChange={e => setPosition(e.target.value)}></input>
                    <input type='number' placeholder="Salary" value={salary} onChange={e => setSalary(e.target.value)}></input>
                    <input type='date' placeholder="Deadline" value={deadline} onChange={e => setDeadline(e.target.value)}></input>
                    <input type='text' placeholder="Notes" value={notes} onChange={e => setNotes(e.target.value)}></input>
                    <select name="status" id="status" value={status} onChange={e => setStatus(e.target.value)}>
                      <option value="incomplete">Not Sent</option>
                      <option value="pending">Pending</option>
                      <option value="phoneScreen">Phone Screen</option>
                      <option value="behavioral">Behavioral Int.</option>
                      <option value="sdi">Systems Design Int.</option>
                      <option value="technical">Technical Int.</option>
                      <option value="offer">Offered</option>
                      <option value="rejected">Rejected</option>
                    </select>
                    <button type="button" onClick={addApplication}>Add Application</button>
                </form>
            </span>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(newApplication);