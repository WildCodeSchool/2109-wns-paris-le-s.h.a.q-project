import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, TextField } from '@mui/material';
import { useQuery, gql} from '@apollo/client';
import "./App.css"

export const GET_TASK = gql`
  query allTasks {
    allTasks {
      id
      subject
      project
      description
      assignee
      dueDate
      status
    }
  }
`;

interface ITaskData{
  subject: string,
  project: string,
  description: string,
  assignee: string,
  dueDate: string,
  status: string,
};

export default function App () {

  const { loading, error, data } = useQuery(GET_TASK);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

    
  return (
    <div className="App">
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Subject</TableCell>
            <TableCell align="right">Project</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Assignee</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.allTasks.map((row:ITaskData) => (
            <TableRow
              key={row.subject}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.subject}
              </TableCell>
              <TableCell align="right">{row.project}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.assignee}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <TextField/>
    <Button type="submit" variant="contained">submit</Button>
  </div>
  )
};

