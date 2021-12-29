import React, { useState } from "react";
import DataGrid from "./grid.jsx";

const dashboard = () => {
    return (
        <div>
            <DataGrid/>    
            <span>
                <form>
                    <input type='text' placeholder="Company Name"></input>
                    <input type='text' placeholder="Company Description"></input>
                    <input type='text' placeholder="Position"></input>
                    <input type='text' placeholder="Salary"></input>
                    <input type='text' placeholder="Deadline"></input>
                    <input type='text' placeholder="Notes"></input>
                    <button type='submit' value='add application'>Add Application</button>
                </form>
            </span>
        </div>
    );
};

export default dashboard;