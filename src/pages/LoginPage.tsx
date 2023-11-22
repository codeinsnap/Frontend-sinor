import { Button, TextField } from "@mui/material";
import { useCallback, useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useDispatch } from "react-redux";
import { handleCurrentUser } from "../Redux/Reducers/navigationReducer";
import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import { SelectChangeEvent } from '@mui/material/Select';

type loginPageProps = {
  handleClose: () => void;
};

const LoginPage = ({ handleClose }: loginPageProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("resident")
  const [error, setError] = useState({ email: false, password: false });
  const navigate = useNavigate();
  const dispatch = useDispatch<any>()

  const handleLogin = async () => {
    if (email === "" || password === "")
      setError({ email: true, password: true });

    if (email && password) {
      const response = await axios
        .post("http://localhost:8000/users/login", { email, password, userType })
        .catch((error) => {
          console.error("Error:", error);
        });
      if (response?.data.token) {
        handleClose();
        localStorage.setItem('token', response?.data.token)
        localStorage.setItem('userData', JSON.stringify(response?.data.data))
        dispatch(handleCurrentUser(response.data.data))
        if (userType === 'resident') {
          setTimeout(() => navigate('/resident-details'), 1000)
        } else {
          setTimeout(() => navigate('/medical-staff'), 1000)
        }
      }
    }
  };

  const handleTypeHandler = useCallback(
    (event: ChangeEvent) => {
      if (email !== "") setError({ email: false, password: error.password });
      if (password !== "") setError({ email: error.email, password: false });
      const { value, name } = event.target as HTMLInputElement;
      if (name === "email") setEmail(value);
      if (name === "password") setPassword(value);
    },

    [email, error.email, error.password, password]
  );

  const handleSignUp = useCallback(() => {
    handleClose();
    navigate("/sign-up");
  }, [navigate, handleClose]);

  const handleUserType = useCallback((event: SelectChangeEvent<string>) => {

    setUserType(event.target.value)

  }, [])

  return (
    <div className="flex justify-center items-center">
      <div className="w-[80%] p-8 bg-white rounded-lg">
        <Typography variant="h4" align="center" gutterBottom>
          Login - Senior Living Hub
        </Typography>
        <form>
          <div className="mb-4">
            <TextField
              label="Email"
              variant="outlined"
              name="email"
              fullWidth
              value={email}
              helperText={error.email && "email is required"}
              error={error.email}
              onChange={handleTypeHandler}
            />
          </div>
          <div className="mb-4">
            <TextField
              type="password"
              label="Password"
              name="password"
              variant="outlined"
              fullWidth
              error={error.password}
              helperText={error.password && "password is required"}
              value={password}
              onChange={handleTypeHandler}
            />
          </div>
          <div className="mb-4">
            <FormControl fullWidth>
              <InputLabel>User Type</InputLabel>
              <Select label="User Type" value={userType} onChange={handleUserType}>
                <MenuItem value={"resident"}>Resident</MenuItem>
                <MenuItem value={"medicalStaff"}>Medical Staff</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="flex justify-between">
            <div className="items-center">
              <Typography fontSize={12}>Don't have account ?</Typography>
              <Button
                variant="contained"
                color="primary"
                className="text-white bg-blue-700 hover:bg-blue-600 me-4"
                onClick={handleSignUp}
              >
                Sign Up
              </Button>
            </div>
            <div className="flex justify-end">
              <Button
                variant="contained"
                color="primary"
                onClick={handleLogin}
                className="text-white bg-blue-700 hover:bg-blue-600 me-4"
              >
                Login
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
