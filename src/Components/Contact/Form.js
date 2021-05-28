import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import emailjs from 'emailjs-com';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';

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
      padding: "30px 15px 30px"
    }
  },
  textarea: {
    width: "100%",
    margin: "20px 0"
  }
}));

export default function TextFieldSizes() {
  const classes = useStyles();
  const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_wqj6fcd','template_vbkgv1b', e.target, "user_6hfKyPUvvW8Eya5mbdX26")
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
  }
  return (
    <form className={classes.root} validate autoComplete="off" onSubmit={sendEmail} name={"Contact us"}>
      <div>
        <TextField
          required
          label="Name"
          id="standard-size-small"
          name={"name"}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          />
      </div>
      <div>
      <TextField
        label="Email"
        id="standard-size-normal"
        name={"email"}
        fullWidth
        margin="normal"
        required
        type="email"
        InputLabelProps={{
          shrink: true,
        }}
        />
      </div>
      <div>
        <TextareaAutosize required className={classes.textarea} rowsMin={6} aria-label="Message" placeholder="Message" name="message" />
      </div><div>
        <Button variant="contained" color="primary" type="submit">
          Send
        </Button>
      </div>
     </form>
  );
}
