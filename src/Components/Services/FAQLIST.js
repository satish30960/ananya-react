import React from 'react';
import {Header} from '../Feeds/styles';
import {FAQConatiner} from './styles';
class FAQLIST extends React.Component {
    render() { 
        return (
        <FAQConatiner margin={'30px'}>
            <Header>FAQ's</Header>
        </FAQConatiner> );
    }
}
 
export default FAQLIST;