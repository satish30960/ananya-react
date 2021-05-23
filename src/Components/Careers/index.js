import React, {Component} from 'react';
import axios from 'axios';
import {CareersContainer, Filters, CareerListContainer} from './styles';
import MainImage from '../../images/career1.png';
import {Hero} from '../Services/styles';
import GroupedSelect from './CustomMenu';
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
    <CareerListContainer>
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