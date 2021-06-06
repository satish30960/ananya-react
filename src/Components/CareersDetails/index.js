import React, {Component} from 'react';
import axios from 'axios';
import {CareersContainer, CareerListContainer} from '../Careers/styles';
import CareerForm from '../Careers/CareerForm';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
 
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
  getDiff = (stringDate) => {
    let currDate = new Date();
    let diffMs=currDate.getTime() - new Date(stringDate).getTime();
    let sec=(diffMs/1000);
    if(sec<60)
        return parseInt(sec)+' second'+(parseInt(sec)>1?'s':'')+' ago';
    let min=sec/60;
    if(min<60)
        return parseInt(min)+' minute'+(parseInt(min)>1?'s':'')+' ago';
    let h=min/60;
    if(h<24)
        return parseInt(h)+' hour'+(parseInt(h)>1?'s':'')+' ago';
    let d=h/24;
    if(d<30)
        return parseInt(d)+' day'+(parseInt(d)>1?'s':'')+' ago';
    let m=d/30;
    if(m<12)
        return parseInt(m)+' month'+(parseInt(m)>1?'s':'')+' ago';
    let y=m/12;
    return parseInt(y)+' year'+(parseInt(y)>1?'s':'')+' ago';
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
            <span>{this.getDiff(data.postedDate)}</span>
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