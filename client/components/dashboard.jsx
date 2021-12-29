import React, { useState, useEffect} from "react";
import DataGrid from "./grid.jsx";
import NewApplication from './newApplication.jsx'

const dashboard = () => {
    return (
        <div>
            <DataGrid/>    
            <NewApplication/>
        </div>
    );
};

export default dashboard;