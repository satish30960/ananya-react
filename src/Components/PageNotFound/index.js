import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CartIcon from "../../image/cart.svg";
import { ButtonBackground, Font } from '../../helpers/constants';
import { Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import Search from "../../image/noResults.png";
const useStyles = makeStyles((theme) => ({
  parent:{
    width: '100%',
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    borderRadius: '6px',
    opacity: '1',
    padding: '50px',
    margin: '30px',
    display: "flex",
    alignItems: "center",
    justifyContent: 'space-between',
    minHeight: "400px",
    [theme.breakpoints.down('md')]:{
      padding: '30px',
    },[theme.breakpoints.down('700')]:{
      padding: '15px',
      flexDirection: 'column'
    }
  },
  column: {
    width: "52%",
    display: "flex",
    alignItems: "center",
    "&:first-child":{
      width: "40%",
      justifyContent: "flex-end"
    },
    [theme.breakpoints.down(700)]:{
      flexDirection: 'column'
    }
  },
  image: {
    width: 304,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  oopsCss: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column"
  },
  ooptext:{
    width: "100%",
    fontFamily: Font,
    color: ButtonBackground,
    fontSize: "60px",
    fontWeight: "bold",
    marginBottom: '20px',
    [theme.breakpoints.down(700)]:{
      fontSize: "30px"
    }
  },
  destext:{
    width: "100%",
    fontFamily: Font,
    color: '#333333',
    fontSize: "25px",
    marginBottom: '10px',
    [theme.breakpoints.down(700)]:{
      fontSize: "14px"
    }
  },
  lighttext:{
    width: "100%",
    fontFamily: Font,
    color: '#333333',
    fontSize: "14px",
    opacity: 0.6,
    marginBottom: '10px'
  },
  buttonWrapper: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  buttonContainedClass: {
    fontFamily: Font,
    fontSize: '20px',
    width: '200px',
    height: '50px',
    color: '#FFFFFF',
    background: ButtonBackground,
    "&:hover": {
      background: ButtonBackground
    },
    [theme.breakpoints.down('1367')]:{
      fontSize: '14px',
      width: '200px',
      height: '40px',
    },
    [theme.breakpoints.down('md')]:{
      fontSize: '14px',
      width: '150px'
    },[theme.breakpoints.down('sm')]:{
      fontSize: '14px',
      width: '150px'
    }
  }
}));
const PageNotFound = (props) => {
  const classes = useStyles();
  const {t} = useTranslation();
  return <div className={classes.parent}>
    <div className={classes.column}>
      <img className={classes.image} src={props.searchResults ? Search : CartIcon} alt={"cart"}/>
    </div>
    <div className={classes.column}>
      <div className={classes.oopsCss}>
        <div className={classes.ooptext}>
        {t("Oops!")}
        </div><div className={classes.destext}>
        {t(props.searchResults ? "No results" : "Looks like something has went wrong")}!
        </div><div className={classes.lighttext}>
        {t(props.searchResults ? "Sorry we couldn't find any matches" : "The page you are looking for is not available")}.
        </div>
        <div className={classes.buttonWrapper}><Button variant="contained" color="primary" className={classes.buttonContainedClass} onClick={() => props.history.push("/")}>
          {t('Back to Home')}
        </Button></div>
      </div>
    </div>
  </div>
}

export default PageNotFound;