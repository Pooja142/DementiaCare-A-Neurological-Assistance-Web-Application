import "./App.css";
import Navbar from "./Navbar";
import { Home } from "./pages/Home";
import NoMatch from "./components/NoMatch";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import About from "./pages/About";
import Registration from "./Auth/Registration";
import Login from "./Auth/Login";
import ChangePassword from "./Auth/ChangePassword";
import Dementiatalk from "./pages/Dementiatalk";
import ProtectedRoute from "./Auth/Protected";
import Docter from "./components/Docter";
import Quiz from "./components/Quiz";
import Caregiver from "./Caregiver";
import ContactForm from "./pages/ContactUs";
import MainPage from "./components/MainPage/MainPage";
import Appointment from "./components/Appointment/Appointment";
import DoctorsZone from "./components/DoctorsZone/DoctorsZone";
import ScoreChart from "./ScoreChart";
import Patients from "./Patients";
import Settings from "./components/Settings/Settings";
import App1 from "./App1";
import Prescription from "./Prescription";
import Help from "./pages/Help";
import Logout from "./Auth/Logout";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/About" element={<About />}></Route>
        <Route exact path="/Dementiatalk" element={<ProtectedRoute />}>
          {" "}
          <Route exact path="/Dementiatalk" element={<Dementiatalk />} />
        </Route>

        <Route exact path="/Caregiver" element={<Caregiver />} />

        <Route exact path="/Register" element={<Registration />}></Route>
        <Route exact path="/Login" element={<Login />}></Route>
        <Route exact path="/recommended" element={<Docter />} />

        <Route exact path="/quiz" element={<ProtectedRoute />}>
          {" "}
          <Route exact path="/quiz" element={<Quiz />} />
        </Route>

        <Route
          exact
          path="/ChangePassword"
          element={<ChangePassword />}
        ></Route>

        <Route exact path="/main-page" element={<ProtectedRoute />}>
          {" "}
          <Route exact path="/main-page" element={<MainPage />} />
        </Route>

        <Route exact path="/Appointment" element={<Appointment />} />
        <Route exact path="/doctorsZone" element={<DoctorsZone />} />
        <Route exact path="/dashboard" element={<App1 />} />
        <Route exact path="/settings" element={<Settings />} />
        <Route exact path="/contactUs" element={<ContactForm />} />
        <Route exact path="/patients" element={<Patients />} />
        <Route exact path="/Prescription" element={<Prescription />} />
        <Route exact path="/Sentiment" element={<ScoreChart />} />
        <Route exact path="/help" element={<Help />} />
        <Route exact path="/logout" element={<Logout />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
