/* eslint-disable */
import React, { Component } from 'react';
import '../../App.css';
import Header from '../Header';
import Footer from '../Footer';
import { withRouter } from 'react-router-dom';
class WebLayout extends Component {
  constructor(props){
    super(props);
    this.state = {
      routePath: '/'
    }
  }
  componentDidUpdate(){
    window.scroll(0, 0);
  }


  render() {
    const{history} = this.props;
    console.log("historyhistory", history)
    return (
      <div className="App">
        <div className="App-header"><Header history={history}/></div>
        <div className="App-data">
          {this.props.children}
        </div>
        <div className="App-footer"><Footer history={history}/></div>
      </div>
    )
  }
}

export default withRouter(WebLayout);