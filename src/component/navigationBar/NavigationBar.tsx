import React, { useCallback, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import LoginPage from "../../pages/LoginPage";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleCurrentUser } from "../../Redux/Reducers/navigationReducer";

export default function NavigationBar() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }} className="shadow-2xl">
      <AppBar position="fixed" className="bg-black">
        <Toolbar>
          <Logo />
          <ModalLogin />
          <Button color="inherit" onClick={() => navigate("/payment")}>
            Payment
          </Button>
          <Button color="inherit" onClick={() => navigate("/about")}>
            About
          </Button>
          <ProfileDetails />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const Logo = () => {
  const navigate = useNavigate();
  return (
    <Typography
      variant="h1"
      fontSize={40}
      className="font-bold cursor-pointer"
      component="div"
      sx={{ flexGrow: 1 }}
      onClick={() => navigate("/")}
    >
      Senior Living Hub
    </Typography>
  );
};

const ProfileDetails = () => {
  const store = useSelector(
    (state: any) => state.seniorLivingStore.currentUsersData
  );
  const navigate = useNavigate();

  if (store?.userType) {
    return (
      <Button
        color="inherit"
        onClick={() =>
          navigate(
            store.userType === "resident"
              ? "/resident-details"
              : "/medical-staff"
          )
        }
      >
        Profile
      </Button>
    );
  } else {
    return <></>;
  }
};

const ModalLogin = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const token = localStorage.getItem('token')
  const dispatch = useDispatch<any>()
  const navigate = useNavigate()
  const handleRemoveToken = useCallback(() => { localStorage.clear(); navigate('/'); dispatch(handleCurrentUser({}))} , [dispatch, navigate])

  if (token) {
    return (
      <div>
        <Button color="inherit" onClick={handleRemoveToken}>
          Logout
        </Button>
      </div>
    );

  } else {
    return (
      <div>
        <Button color="inherit" onClick={handleOpen}>
          Login
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="absolute w-fit shadow-lg p-4 rounded-lg bg-white top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
            <LoginPage handleClose={handleClose} />
          </Box>
        </Modal>
      </div>
    );
  }

  
};
