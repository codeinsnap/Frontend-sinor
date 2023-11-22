// components/PatientList.tsx
import React from 'react';
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';

type TPaitent ={
  email: string,
  contact: number,
  lastTreatmentData: string
}

type TPatientlistProps = {
  patientsTreated: TPaitent[]
}

const PatientList: React.FC<TPatientlistProps> = ({patientsTreated}) => {

  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Patient Name</TableCell>
              <TableCell>Contact</TableCell>
              <TableCell>Last Treatment Date</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patientsTreated.length > 0 ? patientsTreated.map((patient: any, index: number) => (
              <TableRow key={index}>
                <TableCell>{patient.email}</TableCell>
                <TableCell>{patient.contact}</TableCell>
                <TableCell>{patient.lastTreatmentDate}</TableCell>
                <TableCell>
                    <EditIcon className="cursor-pointer" color="primary" />
                  </TableCell>
                  <TableCell>
                    <DeleteIcon className="cursor-pointer" color="warning" />
                  </TableCell>
                </TableRow>
            )): "No Record Found"}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default PatientList;
