import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  Typography,
  InputLabel,
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import AllergiesList from "../constants/Allergies";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import { useDispatch } from "react-redux";
import { handleCurrentUser } from "../Redux/Reducers/navigationReducer";
import { useNavigate } from "react-router-dom";

interface Treatment {
  treatmentName: string;
  treatmentDate: string;
  diagnosis: string;
  healthCondition: string;
  incidents: string;
}

interface TAllergies {
  label: string;
  value: string;
}

interface FormValues {
  name: string;
  email: string;
  address: string;
  contact: string;
  emergencyNumber: string;
  password: string;
  dateofbirth: string;
  userType: string;
  patientsTreated: string[];
  allergies: TAllergies[];
  pastMedicalTreatments: Treatment[];
}

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  address: Yup.string().required("Address is required"),
  contact: Yup.string().required("Contact is required"),
  emergencyNumber: Yup.string().required("Emergency Number is required"),
  password: Yup.string().required("Password is required"),
  dateofbirth: Yup.string().required("Date of Birth is required"),
  userType: Yup.string().required("User Type is required"),
});

const userTypes = [{value: "medicalStaff", label: "Medical Staff"}, {value: "resident", label:"Resident"}];

const initialValues: FormValues = {
  name: "",
  email: "",
  address: "",
  contact: "",
  emergencyNumber: "",
  password: "",
  dateofbirth: "",
  userType: "resident",
  patientsTreated: [],
  allergies: [],
  pastMedicalTreatments: [],
};

const SignUpPage: React.FC = () => {
  const dispatch = useDispatch<any>()
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      const newData = JSON.parse(JSON.stringify(values)) 
      if (values.userType === 'medicalStaff') {
        delete newData.allergies
        delete newData.pastMedicalTreatments
      } else {
        delete newData.patientsTreated
      }
      const response: any = await axios.post("http://localhost:8000/users/signup", newData).catch((error) => {console.error("Error:", error)});
     if (response.status == 200) {
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('userData', JSON.stringify(response.data.data))
      dispatch(handleCurrentUser(response.data.data))
      if (response.data.data.userType === 'resident') {
        navigate('/resident-details')
      } else {
        navigate('/medical-staff')
      }
     }
    },
  });

  return (
    <div className="mt-20 flex justify-center items-center w-full p-5">
      <div className="w-[60%] p-6 bg-white shadow-lg rounded-lg">
        <Typography variant="h4" align="center" gutterBottom>
          Signup - Senior Living Hub
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <div className="flex w-full">
            <div className="me-4 w-full">
              <TextField
                label="Name"
                fullWidth
                margin="normal"
                {...formik.getFieldProps("name")}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
              <TextField
                label="Address"
                fullWidth
                multiline
                minRows={4}
                maxRows={4}
                margin="normal"
                {...formik.getFieldProps("address")}
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address}
              />
              <TextField
                label="Password"
                fullWidth
                className="mt-1"
                type="password"
                {...formik.getFieldProps("password")}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
            </div>

            <div className="w-full">
              <TextField
                label="Email"
                fullWidth
                margin="normal"
                {...formik.getFieldProps("email")}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                label="Contact"
                fullWidth
                margin="normal"
                {...formik.getFieldProps("contact")}
                error={formik.touched.contact && Boolean(formik.errors.contact)}
                helperText={formik.touched.contact && formik.errors.contact}
              />
              <TextField
                label="Emergency Number"
                fullWidth
                className="mt-1"
                {...formik.getFieldProps("emergencyNumber")}
                error={
                  formik.touched.emergencyNumber &&
                  Boolean(formik.errors.emergencyNumber)
                }
                helperText={
                  formik.touched.emergencyNumber &&
                  formik.errors.emergencyNumber
                }
              />

              <TextField
                label="Date of Birth"
                fullWidth
                margin="normal"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                {...formik.getFieldProps("dateofbirth")}
                error={
                  formik.touched.dateofbirth &&
                  Boolean(formik.errors.dateofbirth)
                }
                helperText={
                  formik.touched.dateofbirth && formik.errors.dateofbirth
                }
              />
            </div>
          </div>

          <FormControl fullWidth margin="normal">
            <InputLabel>User Type</InputLabel>
            <Select
              label="User Type"
              {...formik.getFieldProps("userType")}
              error={formik.touched.userType && Boolean(formik.errors.userType)}
            >
              {userTypes.map((type) => (
                <MenuItem key={type.label} value={type.value}>
                  {type.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {formik.values.userType === "resident" && (
            <>
              <Autocomplete
                multiple
                id="allergies"
                options={AllergiesList}
                onChange={(event, value) =>
                  formik.setFieldValue("allergies", value)
                }
                value={formik.values.allergies}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Allergies"
                    margin="normal"
                    fullWidth
                  />
                )}
              />
              <div className="flex justify-between mt-3">
                <Typography className="font-bold text-slate-600 text-xl">
                  Past Medical Histories
                </Typography>
                <Button
                  type="button"
                  variant="contained"
                  className="normal-case"
                  onClick={() =>
                    formik.setFieldValue("pastMedicalTreatments", [
                      ...formik.values.pastMedicalTreatments,
                      {   treatmentName: '',
                      treatmentDate: '',
                      diagnosis: '',
                      healthCondition: '',
                      incidents: '' },
                    ])
                  }
                >
                  <AddIcon fontSize="medium" />
                  Add
                </Button>
              </div>
              {formik?.values?.pastMedicalTreatments.map((treatment, index) => (
                <div key={index} className="flex w-full items-center">
                      <div className="flex w-full">
                      <TextField
                        label="Treatment Name"
                        size="small"
                        className="me-3"
                        fullWidth
                        margin="normal"
                        {...formik.getFieldProps(
                          `pastMedicalTreatments.${index}.treatmentName`
                        )}
                      />
                      <TextField
                        label="Treatment Date"
                        fullWidth
                        size="small"
                        className="me-3"
                        margin="normal"
                        type="date"
                        value={treatment?.treatmentDate?.split("T")[0]}
                        onChange={formik.handleChange}
                        name={`pastMedicalTreatments.${index}.treatmentDate`}
                        id={`pastMedicalTreatments.${index}.treatmentDate`}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                      <TextField
                        label="Diagnosis"
                        fullWidth
                        size="small"
                        className="me-3"
                        margin="normal"
                        {...formik.getFieldProps(
                          `pastMedicalTreatments.${index}.diagnosis`
                        )}
                      />
                      <TextField
                        label="Health Condition"
                        fullWidth
                        size="small"
                        className="me-3"
                        margin="normal"
                        {...formik.getFieldProps(
                          `pastMedicalTreatments.${index}.healthCondition`
                        )}
                      />
                      <TextField
                        label="Incidents"
                        fullWidth
                        size="small"
                        className="me-3"
                        margin="normal"
                        {...formik.getFieldProps(
                          `pastMedicalTreatments.${index}.incidents`
                        )}
                      />
                    </div>
                  <div>
                    <Button
                      type="button"
                      variant="outlined"
                      className="normal-case"
                      size="small"
                      color="secondary"
                      onClick={() => {
                        const updatedTreatments = [
                          ...formik.values.pastMedicalTreatments,
                        ];
                        updatedTreatments.splice(index, 1);
                        formik.setFieldValue(
                          "pastMedicalTreatments",
                          updatedTreatments
                        );
                      }}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              ))}
            </>
          )}
          <Button
            type="submit"
            variant="contained"
            className="normal-case mt-3"
            color="primary"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
