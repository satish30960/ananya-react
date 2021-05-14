import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default function TextFieldSizes() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField label="First Name" id="standard-size-small" defaultValue="Small" size="small" />
        <TextField label="Last Name" id="standard-size-normal" defaultValue="Normal" />
      </div><div>
        <TextField label="Email" id="standard-size-small" defaultValue="Small" size="small" />
        <TextField label="Telephone Number" id="standard-size-normal" defaultValue="Normal" />
      </div><div>
        <TextField label="Organisation Name" id="standard-size-small" defaultValue="Small" size="small" />
        <TextField label="How Can We Help You?" id="standard-size-normal" defaultValue="Normal" />
      </div>
     </form>
  );
}
