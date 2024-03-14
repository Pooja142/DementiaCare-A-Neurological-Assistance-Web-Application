import React, { useState } from "react";
import "./Prescription.css";

import {
  TableContainer,
  Paper,
  makeStyles,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@material-ui/core";
import { useEffect } from "react";
import FullHeight from "react-full-height";
import { db } from "./firebase";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
const useStyle = makeStyles({
  table: {
    maxWidth: 1300,
  },
});

const Prescription = () => {
  const classes = useStyle();
  const [appointment, setAppointment] = useState([]);
  const [openPrescription, setOpenPrescription] = useState(false);
  const [selectedPrescription, setSelectedPrescription] = useState({});
  const [newPrescription, setNewPrescription] = useState("");

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

  const handleViewPrescription = (prescription) => {
    setSelectedPrescription(prescription || newPrescription);
    setOpenPrescription(true);
  };

  const handleClosePrescription = () => {
    setOpenPrescription(false);
  };

  return (
    <div className="prescription">
      <Link to="/dashboard">
        <BsArrowLeft /> Back
      </Link>
      {appointment[0] ? (
        <FullHeight>
          <div className="prescriptionTable">
            <h4>Prescription</h4>
            <div className="prescriptionTableDetails">
              <p>All Prescription</p>
              <textarea
                value={newPrescription}
                onChange={(e) => setNewPrescription(e.target.value)}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  db.collection("appointments").add({
                    prescription: newPrescription,
                    details: {
                      // add appointment details here
                    },
                  });
                  setNewPrescription("");
                }}
              >
                Save Prescription
              </Button>
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="left">Sr. No</TableCell>
                      <TableCell align="left">Date</TableCell>
                      <TableCell align="left">Name</TableCell>
                      <TableCell align="left">Contact</TableCell>
                      <TableCell align="center">Prescription</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {appointment.map((appoint) => (
                      <TableRow key={appoint._id}>
                        <TableCell align="left">
                          {appointment.indexOf(appoint) + 1}
                        </TableCell>
                        <TableCell align="left">
                          {appoint?.details?.date}
                        </TableCell>
                        <TableCell align="left">
                          {appoint?.details?.name}
                        </TableCell>
                        <TableCell align="left">
                          {appoint?.details?.phoneNumber}
                        </TableCell>
                        <TableCell align="center">
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={() =>
                              handleViewPrescription(appoint.prescription)
                            }
                          >
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
          <Dialog open={openPrescription} onClose={handleClosePrescription}>
            <DialogTitle>Prescription</DialogTitle>
            <DialogContent>
              <pre>{JSON.stringify(selectedPrescription, null, 2)}</pre>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClosePrescription} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </FullHeight>
      ) : (
        <FullHeight>
          <div style={{ margin: "350px 550px", display: "flex" }}>
            <div className="spinner-grow text-info" role="status">
              <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow text-success" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </FullHeight>
      )}
    </div>
  );
};

export default Prescription;
