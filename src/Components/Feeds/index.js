import React, {Component} from 'react';
import {FeedsContainer, Header, FeedsGridContainer, FeedsCard} from './styles';
import axios from 'axios';
class Feeds extends Component {
    constructor(props) {
        super(props);
        this.state = { feedsData: [] }
    }
      componentDidMount(){ 
        axios.get(`https://my-json-server.typicode.com/satish30960/ananyaJson/feeds`).then((res) => {
          this.setState({feedsData: res.data})
        }).catch(() => {
          this.setState({feedsData: []})
        })
      }
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
    render() {
        const {feedsData} = this.state;
        return (
            <FeedsContainer>
                <Header>
                    Latest Feeds
                </Header>
                <FeedsGridContainer>
                    {feedsData && feedsData.length > 0 ? feedsData.map((data, index) => (<FeedsCard key={index}>
                        <div className={"title"}>
                            {data.feedName}
                        </div>
                        <div className={"date"}>
                            {this.getDiff(data.postDate)}
                        </div>
                        <div className="description">
                            {data.feedDescription}
                        </div>
                        <div className="readMore">
                            <button onClick={() => window.open(data.readMoreLink, "_blank")}>Read More</button>
                        </div>
                    </FeedsCard>)) : null}
                </FeedsGridContainer>
            </FeedsContainer>
        );
    }
}
 
export default Feeds;