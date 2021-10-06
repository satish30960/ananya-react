import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {WeDoList, NursingContainer, DesignWeD, HowDoWeWor} from './styles';
import DesignImage from '../../images/health.jpg';
import DesignerImage from '../../images/development.jpg';
import CoderImage from '../../images/financial.jpg'; 
import MaintainImage from '../../images/software.jpg'; 
import SoftImage from '../../images/mobile.jpg';
import HardImage from '../../images/cloud.jpg';
import NursingImage from '../../images/nursing.jpg';
import FAQToggler from './FAQToggler';
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
  const rect = (color) => (
    <svg width="87" height="13" viewBox="0 0 87 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d)">
        <rect x="4" width="78.7487" height="4.66064" fill={color || "#F6797D"}/>
      </g>
      <defs>
        <filter id="filter0_d" x="0" y="0" width="86.7487" height="12.6606" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        </filter>
      </defs>
      </svg>
    );
    return(
    <NursingContainer>
      <div className={"combine"}>
        <div className={"fullLine"}>
          <div className={"dheader"}>We’re All About You</div>
          <div className={'textDetails'}>
              Your Career, Your Family, Your World<br/>
              We help you expand your nursing & Student career and 
              accomplish your dreams as a nurse in the UK and Ireland
              We’ll guide you through the recruitment, credentialing, immigration, licensing and 
              relocation process.<br/>
              We understand that moving to another country can be a stressful experience. We’re 
              here to make it as easy as possible.<br/>
              When you register with us, your consultant will tailor a 
              recruitment plan to your specific needs, ensuring that you’re placed into nothing 
              short of your ideal nursing position & University.<br/>
              With ample of experience, you can rest assured that we’ll provide you the advice, 
              information and support you need to secure your dream job abroad.<br/>
              Think about where you are today and where you’d like to be. If living and working 
              abroad is part of your plans, We can guide you every step of 
              the way!
          </div>
        </div>
        <div className={"fullLine"}>
          <div className={"dheader"}>What We Offer</div>
          <div className={'textDetails'}>
            Finding the right nursing job and good university has never been easier<br/>
            Nursing & Student Careers in the UK & Ireland
          </div>
          <div className="dheader">
            Why Work Abroad
          </div>
          <div className="textDetails">
            Learn New Skills & Accomplish Your Dreams<br/>
            • Competitive Salary & Benefits<br/>
            • Career Advancement Opportunities<br/>
            • Valued & Respected for your Skills<br/>
            • Better Quality of Life for your Family
          </div>
        </div>
      </div>
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
      <div className={"fullLines"}>
        <div className={'textDetails'}>
          If you trained within the EU or EEA, you would only have to 
          complete the OSCE if you failed to meet certain standards or 
          requirements during your application. See the NMC's information for 
          those who Trained in the EU or EEA for more details
        </div>
      </div>
      <div className={"fullLines"}>
        <div className={"dheader"}>Part 1: Computer based test</div>
        <div className={'textDetails'}>
          Part 1 is a computer based test, based of 120 multiple-choice 
          questions. You will need to take this test under formal exam 
          conditions in a Pearson VUE test centre. See 
          the <a href={'https://www.pearsonvue.com/nmc/'} target="_blank">www.pearsonvue.com/nmc/</a> website for more details.
          You can also read more about this exam in the NMC's 
          guide, <a href={'https://www.nmc.org.uk/search/?q=Candidate+information+guide+ToC+Part+1+Pearson+VUE&sortBy=NoFilter'} target="_blank">Candidate information booklet for the NMC Test of 
          Competence, Part 1: Pearson VUE</a>.
        </div>
      </div>
      <div className={"fullLines"}>
        <div className={"dheader"}>Part 2: The OSCE exam (Objective Structured Clinical Examination)</div>
        <div className={'textDetails'}>
        Part 2 of the test is called the OSCE, which will act out scenarios 
        which nurses and midwives would be likely to come across when 
        they assess, plan, carry out and evaluate care.<br/> You must sit the 
        OSCE exam at one of three test centres in the UK. These are:<br/>
        • Northampton University<br/>
        • Oxford Brookes University (On campuses in Swindon and 
        Oxford)<br/>
        • Ulster University
        </div>
      </div>
      {/* <HowDoWeWor left={1}>
          <div className="help-text">
            FAQ's
            {rect()}
          </div>
          <div className="desc-text">
            <FAQToggler/>
          </div>
      </HowDoWeWor> */}
    </NursingContainer>
    );
}
export default function SimpleTabs(props) {
  const classes = useStyles();
  const {tabStatus} = props;
  const [value, setValue] = React.useState(props.tabStatus === 'it' ? 0 : 1);

React.useEffect(() => {
  setValue(props.tabStatus === 'it' ? 0 : 1)
}, [tabStatus])
  return (
    <div className={classes.root}>
      <TabPanel value={value} index={0}>
        <DesignWeUI />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <NursingCon />
      </TabPanel>
    </div>
  );
}
