import React, { useState } from "react";
import {
  Container,
  Typography,
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  Button,
  TableCell,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


interface Treatment {
  treatmentName: string;
  treatmentDate: string;
  diagnosis: string;
  healthCondition: string;
  incidents: string;
}


const PatientDetails: React.FC = () => {
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
        onClick={() => navigate('/edit-resident')}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          transition: "width 2s",
          minWidth: isHovered ? "200px" : "100px",
        }}
      >
        {isHovered ? "+ Add / Edit past medical data" : "+ Add / Edit"}
      </Button>
    );
  };

  return (
    <Container className="p-10 mt-16">
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
                <TableCell className="capitalize">{store?.name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>Email:</TableCell>
                <TableCell>{store?.email}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>Address:</TableCell>
                <TableCell>{store?.address}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>
                  Contact Information:
                </TableCell>
                <TableCell>{store?.contact}</TableCell>
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
          Health History
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Treatment Date</TableCell>
                <TableCell>Last Treatment Name</TableCell>
                <TableCell>Diagnosis</TableCell>
                <TableCell>Health Condition</TableCell>
                <TableCell>Incidents</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {store?.pastMedicalTreatments?.length > 0 ? (
                store.pastMedicalTreatments.map(
                  (
                    history: Treatment,
                    index: number
                  ) => {
                    const parseDate = history?.treatmentDate
                      ? new Date(history?.treatmentDate)?.toLocaleDateString()
                      : "";
                    return (
                      <TableRow key={index}>
                        <TableCell>{parseDate}</TableCell>
                        <TableCell>{history?.treatmentName}</TableCell>
                        <TableCell>{history?.diagnosis}</TableCell>
                        <TableCell>{history?.healthCondition}</TableCell>
                        <TableCell>{history?.incidents}</TableCell>
                      </TableRow>
                    );
                  }
                )
              ) : (
                <Typography>No Past Medical History</Typography>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
};

export default PatientDetails;
