import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios"


export default function AlertDialog() {

  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("Do you Agree with the prediction");
  const [visible, setVisible] = React.useState(false);
  const inputRef = React.useRef(null);
  const values = useSelector((state) => state.slider.value);
  const email = localStorage.getItem('email');
  const predictedJob=localStorage.getItem('prediction')

  React.useEffect(() => {
    if(predictedJob!==null){
    const timer = setTimeout(() => {
      setOpen(true);
    }, 5000);
    return () => clearTimeout(timer);
  }
  }, []);
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCloseDisagree = () => {
    setQuery("Please input the role you prefer");
    setVisible(true);
    setTimeout(() => inputRef.current?.focus(), 0);

  };

  const handleSubmit = async () => {
    setOpen(false);
    setVisible(false);
    setQuery("Do you agree with the prediction?");
    const data = {
      values,
      email,
      predictedJob,
      interestedJob: inputRef.current?.value || null,
    };

    try {
      // const response = await axios.post("http://localhost:3000/update", data);
      const response = await axios.post("https://flourishing-crisp-83b372.netlify.app/", data);
      console.log("Data submitted successfully:", response.data);
      localStorage.setItem('prediction',null)
      localStorage.setItem('email',null)
      dispatch(clearValue());
    } catch (error) {
      console.error("Error submitting data:", error);
    }

  };

  

  const handleCloseAgree = async () => {
    setOpen(false);
    setVisible(false);
    setQuery("Do you agree with the prediction?");
    const data = {
      values,
      email,
      predictedJob,
      interestedJob: predictedJob, 
    };

    try {
      const response = await axios.post("http://localhost:3000/update", data); 
      console.log("Data submitted successfully:", response.data);
      localStorage.setItem('prediction',null)
      localStorage.setItem('email',null)
      dispatch(clearValue());
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleCloseAgree}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Feedback"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" aria-live="polite">
            {query}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <input
            ref={inputRef}
            type="text"
            style={{ display: visible ? "inline-block" : "none" }}
            className="border p-1"
          />
          <Button
            style={{ display: visible ? "none" : "inline-block" }}
            onClick={handleCloseDisagree}
          >
            Disagree
          </Button>
          <Button
            style={{ display: visible ? "none" : "inline-block" }}
            onClick={handleCloseAgree}
          >
            Agree
          </Button>
          <Button
            style={{ display: visible ? "inline-block" : "none" }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
