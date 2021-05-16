import React, {Component} from 'react';
import axios from 'axios';
import {CareersContainer, Filters, CareerListContainer} from './styles';
import MainImage from '../../images/career1.png';
import {Hero} from '../Services/styles';
import GroupedSelect from './CustomMenu';
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
      locationMenuValue: "select Location",
      jobTypeValue: "select type"
    }
  }
  componentDidMount(){
    axios.get('https://my-json-server.typicode.com/satish30960/ananya-react/careers').then((res) => {
      this.setState({careersData: res.data})
    }).catch(() => {
      this.setState({careersData: []})
    })
    axios.get('https://my-json-server.typicode.com/satish30960/ananya-react/location').then((res) => {
      console.log(res)
      this.setState({location: res.data})
    }).catch(() => {
      this.setState({location: []})
    })
    axios.get('https://my-json-server.typicode.com/satish30960/ananya-react/jobType').then((res) => {
      this.setState({jobType: res.data})
    }).catch(() => {
      this.setState({jobType: []})
    })
  }
  onChange = (e, id) =>{
    if(id){
      this.setState({locationMenuValue: e.target.value}, () => {
        axios.get(`https://my-json-server.typicode.com/satish30960/ananya-react/careers?location=${e.target.value}`).then((res) => {
          this.setState({careersData: res.data})
        }).catch(() => {
          this.setState({careersData: []})
        })
      });
    }else{
      this.setState({jobTypeValue: e.target.value}, () => {
        axios.get(`https://my-json-server.typicode.com/satish30960/ananya-react/careers?jobType=${e.target.value}`).then((res) => {
          this.setState({careersData: res.data})
        }).catch(() => {
          this.setState({careersData: []})
        })
      });
    }
  }
  hero = () => (
    <Hero>
    <div className="aboutus">
    <img src={MainImage} alt={"some"}/>
    </div>
  </Hero>
  );
  filters = () => (
    <Filters>
      <GroupedSelect location={this.state.location} jobType={this.state.jobType} locationMenuValue={this.state.locationMenuValue} jobTypeValue={this.state.jobTypeValue} onChange={this.onChange}/>
    </Filters>
  );
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
    <CareerListContainer>
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
          {data.jobDescription.map((data) => data)}
        </div>
        <div className="loadMore" onClick={() => this.props.history.push(`/careers/${data.id}`)}>
          Details
        </div>
      </div>)) : null}
    </CareerListContainer>
  );
  render() {
    return (
       <CareersContainer>
         {this.hero()}
         {this.filters()}
         {this.renderList()}
         {/* <CareerForm/> */}
       </CareersContainer>
    );
  }
}

export default Careers;