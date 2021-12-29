import React, { useState, useEffect} from "react";
import DataGrid from "./grid.jsx";
import Table from "./table.jsx"
import NewApplication from './newApplication.jsx'

const dashboard = () => {
    return (
        <div id='dashboard'>
            <Table/>    
            <NewApplication/>
        </div>
    );
};

export default dashboard;