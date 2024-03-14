import React,{useState,useEffect} from "react";
import { Box, Button, CircularProgress, Grid, ThemeProvider} from "@material-ui/core";
import theme from "./theme/theme";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import JobCart from "./components/Job/JobCart";
import NewJobMod from "./components/Job/NewJobMod";
import {firestore1,firebase} from "../src/firebase"
import {Close as CloseIcon} from '@material-ui/icons'
import ViewJobModal from "./components/Job/ViewJobModal";

export default () => {
const [jobs, setJobs]= useState([]);
const [loading,setLoading] = useState(true);
const [customSearch,setCustomSearch] = useState(false);
const [newJobModal,setNewJobModal] = useState(false);
const [viewJob,setViewJob] = useState({});


const fetchJobs = async() =>{
  setCustomSearch(false);
  setLoading(true);
  const req = await firestore1.collection('jobs').orderBy('postedOn','desc').get();
 const tempJobs = req.docs.map((job) => ({...job.data(), id:job.id,postedOn:job.data().postedOn.toDate(),}));
 setJobs(tempJobs);
 setLoading(false);
};
const fetchJobsCustom = async jobSearch =>{
  setLoading(true);
  setCustomSearch(true);
  const req = await firestore1.collection('jobs').orderBy('postedOn','desc')
  .where("location","==",jobSearch.location)
  .where("type","==",jobSearch.type)
  .get();
 const tempJobs = req.docs.map((job) => ({...job.data(), id:job.id,postedOn:job.data().postedOn.toDate(),}));
 setJobs(tempJobs);
 setLoading(false);

}

const postJob = async jobDetails =>{
  await firestore1.collection('jobs').add({
    ...jobDetails,
    // postedOn: firebase.firestore1.FieldValue.serverTimestamp()
  });
  fetchJobs();
}

useEffect(()=>{
  fetchJobs();
},[]);
  return <ThemeProvider theme={theme}>
    <Header openNewJobModal={() =>setNewJobModal(true)}/>
    <NewJobMod closeModal={() =>setNewJobModal(false)} newJobModal={newJobModal} postJob={postJob}/>
    <ViewJobModal job= {viewJob} closeModal={() => setViewJob({})}/>
    <Box mr={3}>
    <Grid container justify="center">
      <Grid item xs={10}>
        <SearchBar fetchJobsCustom={fetchJobsCustom}/>
        {loading ?( 
          <Box display='flex' justifyContent='center'>
            <CircularProgress/>
            </Box>
        ):(
         <>
         {customSearch && (
            <Box ny={2} display="flex" justifyContent="flex-end">
              <Button onClick={fetchJobs}>
                <CloseIcon size={20}/>
                Custom Search 
              </Button>
            </Box>
            )}
            {jobs.map((job)=>(
            <JobCart open={() =>setViewJob(job)} key={job.id}{...job}/>
            ))}
            </>
        )}
      </Grid>
    </Grid>
    </Box>
  </ThemeProvider>
};
