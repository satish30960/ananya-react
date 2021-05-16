import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { makeStyles } from '@material-ui/core/styles';
import emailjs from 'emailjs-com';

const useStyles = makeStyles((theme) => ({
    root: {
      width: "82%",
      margin: "30px auto",
      background: "#FFFFFF",
      padding: "30px",
      boxShadow: "rgb(19 19 19 / 21%) 0px 0px 3px",
      borderRadius: '6px',
      [theme.breakpoints.down('1000')]: {
        width: '60%'
      },
      [theme.breakpoints.down('700')]: {
        width: '82%',
        margin: "20px 25px 20px 10px",
      }
    },
    textarea: {
      width: "95%",
      margin: "20px 0"
    }
  }));
export default function FormDialog(props) {
  const {open, handleClose} = props;
  const classes = useStyles();
  const sendEmail = (e) => {
        e.preventDefault();
        console.log(e.target);
        emailjs.sendForm('service_wqj6fcd','template_bga0zl9', e.target, "user_6hfKyPUvvW8Eya5mbdX26")
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }
  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">APPLY NOW</DialogTitle>
        <form onSubmit={sendEmail} name="Careers">
          <DialogContent>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Name"
                type="text"
                fullWidth
                name="name"
            />
            <TextField
                autoFocus
                margin="dense"
                id="phone"
                label="Phone Number"
                type="number"
                name="phone"
                fullWidth
            />
            <TextField
                autoFocus
                margin="dense"
                id="email"
                label="Email Address"
                type="email"
                name="email"
                fullWidth
            />
            <TextareaAutosize className={classes.textarea} rowsMin={6} aria-label="Message" placeholder="Cover Letter" name="coverletter" />
            <label for="myfile">Resume:</label>
            <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="primary">
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Apply
          </Button>
        </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
