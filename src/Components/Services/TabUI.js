import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {WeDoList, NursingContainer, DesignWeD} from './styles';
import DesignImage from '../../images/health.jpg';
import DesignerImage from '../../images/development.jpg';
import CoderImage from '../../images/financial.jpg'; 
import MaintainImage from '../../images/software.jpg'; 
import SoftImage from '../../images/mobile.jpg';
import HardImage from '../../images/cloud.jpg';
import NursingImage from '../../images/nursing.jpg';
const servicesArray = [
    {
      name: "Healthcare",
      image: DesignImage,
      color: "#69c2ff",
      bgColor: "rgba(107, 193, 251, 0.12)",
      description: "Transformational healthcare technology and services give caregivers the tools they need to improve processes across the continuum of care."
    },
    {
      name: "Development & DevOps",
      image: DesignerImage,
      color: "#93a987",
      bgColor: "rgba(147, 169, 135, 0.12)",
      description: "We help our clients by developing the product by Develop iteratively, Manage requirements, Use component architecture, Model software visually, Verify quality Control change with integration of DevOps which helps improve deployment frequency, leading to faster time to market, lower failure rate of new releases, shortened lead time between ﬁxes and faster time to recovery.",
    },
    {
      name: "Financial Solutions",
      image: CoderImage,
      color: "#f8a887",
      bgColor: "rgba(230, 167, 112, 0.12)",
      description: "We help customers in procure-to-pay (P2P), and record-to-analyze (R2A), business to business(B2B), Business to Consumer (B2C) and Front Office – promising the very best-in-class finance operations for your business by bench-marking your operations to ensure top performance, reducing your total cost of service",
    },
    {
      name: "Software QA",
      image: MaintainImage,
      color: "rgb(157,135,169)",
      bgColor: "rgb(157,135,169,0.12)",
      description:"We follow and adept years of matured testing advancements, continually enhance conventional testing capabilities through flexible, reliable and robust functional, automation & non-functional testing solutions.",
    },
    {
      name: "Mobile Solutions",
      image: SoftImage,
      color: "rgb(157,135,169)",
      bgColor: "rgb(157,135,169,0.12)",
      description:"Mobility drives agile enterprises that can pivot as quickly as technology demands in this era of electrifying change. We offers a portfolio of tools and services for the mobile enterprise that moves with the speed of its customers.",
    },
    {
      name: "Cloud Computing",
      image: HardImage,
      color: "rgb(157,135,169)",
      bgColor: "rgb(157,135,169,0.12)",
      description:"We help our customers establishing a robust private cloud solution which is not only highly available, but also highly flexible and elastic to cater to unpredictable demands and inorganic growth.",
    },
    ];
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'transparent',
  },
}));
function DesignWeUI() {
    return (
    <DesignWeD>
      {
        servicesArray.map((data, index) => (
          <WeDoList row={data.rotate ? "row-reverse" : "row"} bgColor={data.bgColor} width={index === 3 ? 1 : 0} key={index}>
            <div className="Software-text">
            <div className="det-text">
              <img src={data.image} alt={"some"}/>
            </div>
              <div className="header">
                {data.name}
              </div>
              <div className="description">
                {data.description}
              </div>
            </div>
          </WeDoList>
        ))
      }
    </DesignWeD>
    )
};
 function NursingCon(){
    return(
    <NursingContainer>
      <div className={"container"}>
        <div className={"image"}>
          <img src={NursingImage} alt={"Nursing"}/>
        </div>
        <div className={"description"}>
           <div className={"dheader"}>Nursing</div>
           <div className={"data"}> If you’re a nurse or Support Worker/HCA looking for flexibility, variety and
           challenge, whether in a temporary assignment or permanent role, and you care
           about joining a professional team that will achieve the best for you, register with
           us now</div>
           <div className={"data"}> As an overseas nurse, you will need to acquire both a UK Work permit (and an employer
             who is able to sponsor you) and NMC (Nursing & Midwifery Council) registration. To be able
             to practise in the UK as a nurse or midwife, every nurse needs to have a current registration
             and PIN number</div>
           <div className={"dheader"}>About NMC</div>
           <div className={"data"}>
             If you trained outside the EU or EEA, you will be required to
             complete the NMC Test of Competence which consists of two parts:
             <ul><li>A computer based test (CBT)</li>
             <li>A practical test called an "Objective Structured Clinical
             Examination," (OSCE)</li></ul>
           </div>
        </div>
      </div>
    </NursingContainer>
    );
}
export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="IT" {...a11yProps(0)} />
          <Tab label="NURSING" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <DesignWeUI />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <NursingCon />
      </TabPanel>
    </div>
  );
}
