import React, { useState } from "react";
import {
  Container,
  Typography,
  Paper,
  Table,
  TableContainer,
  TableBody,
  TableRow,
  Button,
  TableCell,
} from "@mui/material";
import PatientList from "../component/PaitentList/PatientList";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MedicalStaffDetails: React.FC = () => {
  const navigate = useNavigate()
  const store = useSelector(
    (state: any) => state.seniorLivingStore.currentUsersData
  );

  const HoverButton: React.FC = () => {
    const [isHovered, setHovered] = useState(false);

    return (
      <Button
        className="absolute normal-case"
        variant="contained"
        onClick={() => navigate('/edit-medicalStaff')}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          transition: "width 2s",
          minWidth: isHovered ? "200px" : "100px",
        }}
      >
        {isHovered ? "+ Add past paitent" : "+ Add"}
      </Button>
    );
  };

  return (
    <Container className="p-10 mt-16">
      <div className="flex justify-end">
        <Button className="absolute me-56" variant="contained">
          Generate Daily Report
        </Button>
        <Button className="absolute me-0" variant="contained">
          Medication Reminder
        </Button>
      </div>
      <div className="flex">
        <Typography variant="h4" className="capitalize" gutterBottom>
          {store.name}
        </Typography>
      </div>
      <Paper elevation={3} sx={{ padding: "20px" }}>
        <Typography
          variant="h6"
          component="div"
          align="center"
          sx={{ marginBottom: "20px" }}
        >
          Personal Information
        </Typography>
        <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>Name:</TableCell>
                <TableCell>{store.name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>Email:</TableCell>
                <TableCell>{store.email}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>Address:</TableCell>
                <TableCell>{store.address}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>
                  Contact Information:
                </TableCell>
                <TableCell>{store.contact}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <Paper elevation={3} sx={{ marginTop: "20px", padding: "20px" }}>
        <div className="flex justify-end">
          <HoverButton />
        </div>
        <Typography
          variant="h6"
          component="div"
          align="center"
          sx={{ marginBottom: "20px" }}
        >
          Patients List
        </Typography>
        <PatientList patientsTreated={store.patientsTreated} />
      </Paper>
    </Container>
  );
};

export default MedicalStaffDetails;
