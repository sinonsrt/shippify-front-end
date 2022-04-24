import { NavBar } from "components/NavBar";
import { CompanyForm, CompanyList } from "pages/Company";
import { DriverForm, DriverList } from "pages/Driver";
import { VehicleForm, VehicleList } from "pages/Vehicle";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Home } from "../pages/Home";

export const AppRoutes = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/companiesList" element={<CompanyList />} />
        <Route path="/companyForm" element={<CompanyForm />} />
        <Route path="/driversList" element={<DriverList />} />
        <Route path="/driversForm" element={<DriverForm />} />
        <Route path="/vehiclesList" element={<VehicleList />} />
        <Route path="/vehicleForm" element={<VehicleForm />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};
