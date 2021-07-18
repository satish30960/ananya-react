import React from 'react';
import {Header} from '../Feeds/styles';
import {FAQConatiner, FaqList} from './styles';
import {FAQs} from './faqs';
class FAQLIST extends React.Component {
    render() { 
        return (
        <FAQConatiner margin={'12px'}>
            <Header>FAQ's</Header>
            <FaqList>
            {FAQs.map((data, index) => (
                <div className={"fullLine"} key={index}>
                    <div className={"dheader"}>{data.title}</div>
                    <div className={'textDetails'}>
                        {data.description}
                    </div>
              </div>
            ))}
            </FaqList>
        </FAQConatiner> );
    }
}
 
export default FAQLIST;