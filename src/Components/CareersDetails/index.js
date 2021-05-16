import React, {Component} from 'react';
import axios from 'axios';
import {CareersContainer, CareerListContainer} from '../Careers/styles';
import CareerForm from '../Careers/CareerForm';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
 
let statusofDate = 1;
class Careers extends Component{
  constructor(props){
    super(props);
    this.state={
      careersData: [],
      location: [],
      jobType: [],
      open: false
    }
  }
  componentDidMount(){ 
     const {history} =this.props;
     let array = history.location.pathname.split("/");
     let careerId = array[array.length - 1];
     console.log(array);
    axios.get(`https://my-json-server.typicode.com/satish30960/ananya-react/careers?id=${careerId}`).then((res) => {
      this.setState({careersData: res.data})
    }).catch(() => {
      this.setState({careersData: []})
    })
  }
  handleClickOpen = () => {
    this.setState({open: true})
  };
  handleClose = () => {
    this.setState({open: false})
  };
  getDiff = (date) => {
    const date1 = new Date(date);
    const date2 = new Date();
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const months = diffDays/30;
    const year = (diffDays/30)/12;
    if(year < 1) {statusofDate = 0} else{statusofDate = 1}
    return parseInt(year < 1 ? months : year);
  }
  renderList = () => (
    <CareerListContainer margin={1}>
      {this.state.careersData && this.state.careersData.length > 0 ? this.state.careersData.map((data, index) => (<div key={index}>
        <div className={"roleName"}>
          {data.roleName}
        </div>
        <div className="jobDetails">
          <div className={"dateinfo"}>
            <AccessTimeIcon/>
            <span>{this.getDiff(data.postedDate)}</span>{statusofDate ? "year ago" : "months ago"}
          </div>
          <div className={"dateinfo"}>
            <LocationOnIcon/>
            <span>{data.location}</span>
          </div>
          <div className={"dateinfo"}>
            <BusinessCenterIcon/>
            <span>{data.jobType}</span>
          </div>
        </div>
        <div className="jobDescription">
          {data.aboutCompany}
        </div>
        <div className={"header"}>
            Job Description:
        </div>
        <div className="jobDescription">
          <ul>{data.jobDescription.map((data, index) => <li key={index}>{data}</li>)}</ul>
        </div>
        {data.mandatorySkills && data.mandatorySkills.length > 0 ?
        <>
            <div className={"header"}>
                Mandatory Skills, Knowledge and Experience:
            </div>
            <div className="jobDescription">
                <ul>{data.mandatorySkills.map((data, index) => <li key={index}>{data}</li>)}</ul>
            </div>
        </> : null
        }
        {data.technicalSkill && data.technicalSkill.length > 0 ?
        <>
            <div className={"header"}>
            Technical skills:
            </div>
            <div className="jobDescription">
                <ul>{data.technicalSkill.map((data, index) => <li key={index}>{data}</li>)}</ul>
            </div>
        </> : null
        }
        {data.desiredSkills && data.desiredSkills.length > 0 ?
        <>
            <div className={"header"}>
            Desired Skills:
            </div>
            <div className="jobDescription">
                <ul>{data.desiredSkills.map((data, index) => <li key={index}>{data}</li>)}</ul>
            </div>
        </> : null
        }
        {data.additionalInfo && data.additionalInfo.length > 0 ?
        <>
            <div className={"header"}>
            Additional information about the role:
            </div>
            <div className="jobDescription">
                <ul>{data.additionalInfo.map((data, index) => <li key={index}>{data}</li>)}</ul>
            </div>
        </> : null
        }
        {data.qualification && data.qualification.length > 0 ?
        <>
            <div className={"header"}>
            Educational Qualifications:
            </div>
            <div className="jobDescription">
                <ul>{data.qualification.map((data, index) => <li key={index}>{data}</li>)}</ul>
            </div>
        </> : null
        }
        <div className={"header"}>
            {data.salary}
        </div>
        <div className={"expired"}>
            {data.expiredStatus && "This job is Expired"}
        </div>
        {!data.expiredStatus && <div className="loadMore" onClick={() => this.handleClickOpen()}>
          Apply
        </div>}
      </div>)) : null}
    </CareerListContainer>
  );
  render() {
    return (
       <CareersContainer>
            {this.renderList()}
            <CareerForm handleClose={this.handleClose} open={this.state.open}/>
       </CareersContainer>
    );
  }
}

export default Careers;