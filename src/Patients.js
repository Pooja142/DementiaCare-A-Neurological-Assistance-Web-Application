import React from "react";
import "./Patients.css";
import {
  TableContainer,
  Paper,
  Table,
  makeStyles,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import { useEffect } from "react";
import { useState } from "react";
import { db } from "./firebase";
import FullHeight from "react-full-height";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
const useStyle = makeStyles({
  table: {
    maxWidth: 1100,
  },
});

const Patients = () => {
  const classes = useStyle();
  const [appointment, setAppointment] = useState([]);

  useEffect(() => {
    const appointmentsRef = db.collection("appointments");
    const unsubscribe = appointmentsRef.onSnapshot((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => doc.data());
      if (data) {
        const fetchedData = data.reverse();
        setAppointment(fetchedData);
      }
    });
    return () => unsubscribe();
  }, []);
  console.log(appointment);
  return (
    <div className="patients">
      <Link to="/dashboard">
        <BsArrowLeft /> Back
      </Link>
      <FullHeight>
        <div className="patientsTable">
          <h4>Patients</h4>
          <div className="patientsTableDetails">
            <p>All Patients</p>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Sr. No</TableCell>
                    <TableCell align="left">Name</TableCell>
                    <TableCell align="left">Gender</TableCell>
                    <TableCell align="left">Age</TableCell>
                    <TableCell align="left">Weight</TableCell>
                    <TableCell align="left">Contact</TableCell>
                    <TableCell align="left">Address</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {appointment.map((appoint) => (
                    <TableRow key={appoint._id}>
                      <TableCell align="left">
                        {appointment.indexOf(appoint) + 1}
                      </TableCell>
                      <TableCell align="left">
                        {appoint?.details?.name}
                      </TableCell>
                      <TableCell align="left">Male</TableCell>
                      <TableCell align="left">25</TableCell>
                      <TableCell align="left">70</TableCell>
                      <TableCell align="left">
                        {appoint?.details?.phoneNumber}
                      </TableCell>
                      <TableCell align="left">
                        College Avenue, Barisal
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </FullHeight>
    </div>
  );
};

export default Patients;
