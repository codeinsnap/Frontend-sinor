import React, { useState } from "react";
import {
  TextField,
  Button,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Typography,
} from "@mui/material";
import axios from "axios";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import CircularProgress from "@mui/material/CircularProgress";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch, useSelector } from "react-redux";
import { handleCurrentUser } from "../Redux/Reducers/navigationReducer";

export type Tresident = {
  name: String;
  email: String;
  address: String;
  contact: String;
  emergencyNumber: String;
  password: String;
  userType: String;
  dateofbirth: String;
  allergies: [
    {
      id: string;
      label: String;
      value: String;
    }
  ];
  pastMedicalTreatments: [
    {
      id: string;
      treatmentName: String;
      treatmentDate: Date;
      diagnosis: String;
      healthCondition: String;
      incidents: String;
    }
  ];
};

const ResidentSearchForm = () => {
  const [email, setEmail] = useState("");
  const [searchResult, setSearchResult] = useState<Tresident[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedResident, setSelectedResident] = useState<Tresident[]>([]);
  const dispatch = useDispatch<any>();
  const store = useSelector(
    (state: any) => state.seniorLivingStore.currentUsersData
  );

  const handleSearch = async () => {
    setLoading(true);
    try {
      if (email) {
        const response = await axios.get(
          `http://localhost:8000/resident?email=${email}`
        );
        if (response.data.message === "user found") {
          if (response.data.users.name) {
            setSearchResult([response.data.users]);
            setLoading(false);
          }
        } else if (
          response.data.message === "No users found with the provided email"
        ) {
          setSearchResult([]);
          setLoading(false);
        }
      } else {
        const response = await axios.get(`http://localhost:8000/resident`);
        if (!response?.data?.message && response?.data?.length > 0) {
          setSearchResult(response.data);
          setLoading(false);
        }
      }
    } catch (error) {
      console.error("Error:", error);
      setSearchResult([]);
      setLoading(true);
    }
  };

  const handleAddSelectedResident = (resident: Tresident) => {
    setSelectedResident([...selectedResident, resident]);
  };

  const handleSubmitAddedValues = async () => {
    const tempstore = JSON.parse(JSON.stringify(store));
    const newData = { ...tempstore };
    newData.patientsTreated = selectedResident;
    try {
      const response: any = await axios.put("http://localhost:8000/medicalstaff", newData)
      if (response.status === 200) dispatch(handleCurrentUser(response.data));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="mt-20 p-10 min-h-screen w-full">
      <div className="flex justify-center w-full">
        <div className="flex w-96">
          <TextField
            label="Search Resident by Email"
            variant="outlined"
            size="small"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            className="ms-5 rounded-lg"
            variant="contained"
            color="primary"
            onClick={handleSearch}
          >
            Search
          </Button>

          {selectedResident.length > 0 && (
            <Button
              className="ms-5 rounded-lg"
              variant="contained"
              color="primary"
              onClick={handleSubmitAddedValues}
            >
              Submit
            </Button>
          )}
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div className="w-fit">
          <TableContainer component={Paper} className="mt-3">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Contact</TableCell>
                  <TableCell>Date of Birth</TableCell>
                  <TableCell>Address</TableCell>
                  <TableCell></TableCell>
                  {/* Add more table headers based on your API response */}
                </TableRow>
              </TableHead>
              {loading ? (
                <div className="w-full flex justify-center">
                  <div className="flex justify-center w-full p-5">
                    <CircularProgress />
                  </div>
                </div>
              ) : searchResult.length > 0 ? (
                searchResult?.map((resident: Tresident, index: number) => (
                  <ResidentRow
                    resident={resident}
                    index={index}
                    handleAddSelectedResident={handleAddSelectedResident}
                  />
                ))
              ) : (
                <Typography className="p-3"> No Record Found</Typography>
              )}
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

type ResidentRowProp = {
  resident: Tresident;
  index: number;
  handleAddSelectedResident: (resident: Tresident) => void;
};

function ResidentRow({
  resident,
  index,
  handleAddSelectedResident,
}: ResidentRowProp) {
  const [selected, setSelected] = useState(false);
  return (
    <TableBody>
      <TableRow key={index}>
        <TableCell>{resident.name}</TableCell>
        <TableCell>{resident.email}</TableCell>
        <TableCell>{resident.contact}</TableCell>
        <TableCell>{resident.dateofbirth}</TableCell>
        <TableCell>{resident.address}</TableCell>
        <TableCell>
          <IconButton
            color="primary"
            onClick={() => {
              handleAddSelectedResident(resident);
              setSelected(!selected);
            }}
          >
            {selected ? <RemoveIcon color="warning" /> : <AddIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
    </TableBody>
  );
}

export default ResidentSearchForm;
