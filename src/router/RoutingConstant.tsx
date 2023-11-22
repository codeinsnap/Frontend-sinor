import React, { lazy } from "react";
import ResidentSearchForm from "../pages/EditMedicalStaffDetails";

const Home = lazy(() => import("../pages/Home"));
const Signup = lazy(() => import("../pages/SignUpPage"));
const Resident = lazy(() => import("../pages/ResidentDetails"));
const MedicalStaffDetails = lazy(() => import("../pages/MedicalStaffDetials"));
const PaymentsPage = lazy(() => import("../component/PaymentPage/index"));
const About = lazy(() => import("../pages/About"))
const EditResident = lazy(() => import("../pages/EditResident"))

const Routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sign-up",
    element: <Signup />,
  },
  {
    path: "/resident-details",
    element: <Resident />,
  },
  {
    path: "/medical-staff",
    element: <MedicalStaffDetails />,
  },
  {
    path: "/payment",
    element: <PaymentsPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: '/edit-resident',
    element: <EditResident/>
  },
  {
    path: '/edit-medicalStaff',
    element: <ResidentSearchForm/>
  }

];

export default Routes;
