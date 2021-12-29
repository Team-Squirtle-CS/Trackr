import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "company",
    headerName: "Company Name",
    width: 150,
    editable: true
  },
  {
    field: "companyDescription",
    headerName: "Company description",
    width: 150,
    editable: true
  },
  {
    field: "position",
    headerName: "Position",
    width: 150,
    editable: true
  },
  {
    field: "salary",
    headerName: "Salary",
    type: "number",
    width: 150,
    editable: true
  },
  {
    field: "deadline",
    headerName: "Deadline",
    type: "date",
    width: 110,
    editable: true
  },
  {
    field: "notes",
    headerName: "Notes",
    width: 150,
    editable: true
  },

];
// use mapDispatchToProps to access getApplications action from actions.js 
// create a function that calls getApplications when the grid component is rendered or when user submits new application info
// need a function to populate rows with the data from applications table in DB
const rows = [
  // dummy data 
  {
    id: 1,
    company: "TechCorp",
    companyDescription: "FinTech",
    position: "frontend Engineer",
    salary: 100,
    deadline: "01/30/2022",
    notes: "Great salary but evil corporation"
  }
];

export default function DataGridDemo() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        sx={{
          boxShadow: 2,
          border: 2,
          borderColor: 'primary.light',
          '& .MuiDataGrid-cell:hover': {
            color: 'primary.main',
          },
        }}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
