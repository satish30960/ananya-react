import React from 'react';
import { makeStyles, withStyles  } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails  from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {FAQs} from './faqs';
import { Font } from '../../helpers/constants';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));
const AccordionSummary = withStyles({
    root: {
      backgroundColor: 'rgba(16,7,78,0.8)',
      borderBottom: '1px solid rgba(0, 0, 0, .125)',
      marginBottom: -1,
      color: '#fff',
      fontFamily: Font,
      fontSize: 18,
      fontWeight: 500,  
      minHeight: 56,
      '&$expanded': {
        minHeight: 56,
      },
    },
    content: {
      '&$expanded': {
        margin: '12px 0',
      },
    },
    expanded: {},
  })(MuiAccordionSummary);
const AccordionDetails = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
      background: 'rgba(16,7,78,0.4)'
    },
  }))(MuiAccordionDetails);
export default function SimpleAccordion() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className={classes.root}>
      {FAQs.map((data, index) => (
      <Accordion expanded={expanded === index} onChange={handleChange(index)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel${index+1}a-content`}
          id={`panel${index+1}a-header`}
        >
          <Typography className={classes.heading}>{data.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {data.description}
          </Typography>
        </AccordionDetails>
      </Accordion>))}
    </div>
  );
}
