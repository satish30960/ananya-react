import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
}));

export default function GroupedSelect(props) {
  const classes = useStyles();

  return (
    <div>
      {props.location && props.location.length > 0 ? <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-native-select">Filter By Location</InputLabel>
        <Select value={props.locationMenuValue} id="location" onChange={(e) => props.onChange(e, 1)}>
            {props.location.map((data, index) => (<MenuItem key={index} value={data}>{data}</MenuItem>))}
        </Select>
      </FormControl> : null}
      {props.jobType && props.jobType.length > 0 ? <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-select">Filter By Job Type</InputLabel>
        <Select value={props.jobTypeValue} id="select-jobtype" onChange={(e) => props.onChange(e, 0)}>
          {props.jobType.map((data, index) => (<MenuItem key={index} value={data}>{data}</MenuItem>))}
        </Select>
      </FormControl> : null}
    </div>
  );
}
