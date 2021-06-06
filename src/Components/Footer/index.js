import React from 'react';
import Grid from '@material-ui/core/Grid';
import {FooterPanelContainer, LogoStyles, HelpContainer, CopyRight} from './styles';
import Logo from '../../images/svgLogo.svg';
const FacebookIcon = (props) => 
<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32">
  <rect className="a" width="22" height="22" fill={'none'}/>
  <path className="b" d="M30,16.01A14,14,0,1,0,13.2,29.74V20.213H10.4v-4.2h2.8v-3.5a4.907,4.907,0,0,1,4.9-4.9h3.5v4.2H18.8a1.4,1.4,0,0,0-1.4,1.4v2.8h4.2v4.2H17.4V29.95A14,14,0,0,0,30,16.01Z" transform="translate(0 0)" fill={props.fill ? props.fill : '#fff'}/>
</svg>
  const InstagramIcon = (props) => 
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32">
    <path className="a" d="M213.2,210.1a3.1,3.1,0,1,1-3.1-3.1A3.1,3.1,0,0,1,213.2,210.1Zm0,0" transform="translate(-194.1 -194.1)" fill={props.fill ? props.fill : '#fff'}/>
    <path className="a" d="M150.361,137.628a3.08,3.08,0,0,0-1.765-1.765,5.146,5.146,0,0,0-1.727-.32c-.981-.045-1.275-.054-3.759-.054s-2.778.009-3.759.054a5.15,5.15,0,0,0-1.727.32,3.081,3.081,0,0,0-1.766,1.765,5.148,5.148,0,0,0-.32,1.727c-.045.981-.054,1.275-.054,3.759s.01,2.778.054,3.759a5.146,5.146,0,0,0,.32,1.727,3.08,3.08,0,0,0,1.765,1.765,5.14,5.14,0,0,0,1.727.32c.981.045,1.275.054,3.758.054s2.778-.009,3.759-.054a5.14,5.14,0,0,0,1.727-.32,3.08,3.08,0,0,0,1.765-1.765,5.15,5.15,0,0,0,.32-1.727c.045-.981.054-1.275.054-3.759s-.009-2.778-.054-3.759A5.139,5.139,0,0,0,150.361,137.628ZM143.11,147.89a4.776,4.776,0,1,1,4.776-4.776A4.776,4.776,0,0,1,143.11,147.89Zm4.965-8.625a1.116,1.116,0,1,1,1.116-1.116A1.116,1.116,0,0,1,148.075,139.265Zm0,0" transform="translate(-127.11 -127.114)" fill={props.fill ? props.fill : '#fff'}/>
    <path className="a" d="M16,0A16,16,0,1,0,32,16,16,16,0,0,0,16,0Zm9.132,19.788a6.741,6.741,0,0,1-.427,2.23,4.7,4.7,0,0,1-2.687,2.687,6.745,6.745,0,0,1-2.23.427c-.98.045-1.293.055-3.788.055s-2.808-.011-3.788-.055a6.745,6.745,0,0,1-2.23-.427A4.7,4.7,0,0,1,7.3,22.018a6.739,6.739,0,0,1-.427-2.23c-.045-.98-.056-1.293-.056-3.788s.01-2.808.055-3.788a6.741,6.741,0,0,1,.427-2.23A4.7,4.7,0,0,1,9.982,7.295a6.747,6.747,0,0,1,2.23-.427c.98-.045,1.293-.055,3.788-.055s2.808.011,3.788.056a6.748,6.748,0,0,1,2.23.427,4.7,4.7,0,0,1,2.687,2.687,6.74,6.74,0,0,1,.427,2.23c.045.98.055,1.293.055,3.788S25.177,18.808,25.132,19.788Zm0,0" fill={props.fill ? props.fill : '#fff'}/>
  </svg>
  const TwitterIcon = (props) => 
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32">
      <path className="a" d="M16,0A16,16,0,1,0,32,16,16,16,0,0,0,16,0Zm7.305,12.475q.011.236.01.475A10.378,10.378,0,0,1,12.867,23.4h0a10.4,10.4,0,0,1-5.629-1.65,7.469,7.469,0,0,0,.876.051,7.369,7.369,0,0,0,4.561-1.572,3.677,3.677,0,0,1-3.431-2.551,3.66,3.66,0,0,0,1.659-.063,3.673,3.673,0,0,1-2.946-3.6c0-.017,0-.031,0-.047a3.647,3.647,0,0,0,1.663.459,3.676,3.676,0,0,1-1.137-4.9,10.427,10.427,0,0,0,7.57,3.837,3.674,3.674,0,0,1,6.258-3.349,7.366,7.366,0,0,0,2.332-.891,3.687,3.687,0,0,1-1.615,2.031,7.324,7.324,0,0,0,2.109-.578,7.463,7.463,0,0,1-1.832,1.9Zm0,0" fill={props.fill ? props.fill : '#fff'}/>
    </svg>
  const LogoContainer = (props) => (
    <LogoStyles>
      <img src={props.Logo} alt={'LOGO'} onClick={() => props.history.push('/')}/> 
      <div>Our organization structure is domain led and empowered to help provide Customers a single window to industry specific solutions. Agile industry units have embedded capabilities to enable rapid responses that provide a competitive edge to our Customers.</div>
    </LogoStyles>
  );
  const Footer = (props) => {
    const {history} = props;
    return (
      <FooterPanelContainer>
        <Grid container spacing={3} style={{borderBottom: '1px solid rgba(255, 255, 255, 0.2)'}}>
          <Grid item xs={6} sm={3}>
          <LogoContainer Logo={Logo} history={history}/>
          </Grid>
          <Grid item xs={6} sm={2}>
            <HelpContainer>
              <ul>
                <li>Important Links</li>
                <li onClick={() => props.history.push('/')} ><span>Home</span></li>
                <li onClick={() => props.history.push('/what-we-do')}><span>What we do</span></li>
                <li onClick={() => props.history.push('/services')}><span>Services</span></li>
                <li onClick={() => props.history.push('/careers')}><span>Careers</span></li>
                <li onClick={() => props.history.push('/contact')}><span>Contact us</span></li>
              </ul>
            </HelpContainer>
          </Grid>
          <Grid item xs={6} sm={2}>
            <HelpContainer>
              <ul>
                <li>Important Links</li>
                <li onClick={() => props.history.push('/services')}><span>Customers</span></li>
                <li onClick={() => props.history.push('/careers')}><span>Join us</span></li>
                <li onClick={() => props.history.push('/feeds')}><span>Feeds</span></li>
              </ul>
            </HelpContainer>
          </Grid>
          <Grid item xs={6} sm={3}>
            <HelpContainer>
              <ul>
                <li>Get In Touch</li>
                <li><span>+44 -01277725105</span></li>
                <li><span>+44 7842743263</span></li>
                <li><a href="mailto:info@ananyaitservices.com">info@ananyaitservices.com</a></li>
              </ul>
              <ul className="support">
                <li>
                  <a href="http://" target="_blank" rel="noopener noreferrer"><FacebookIcon fill={"#93a987"}/></a>
                  <a href="http://" target="_blank" rel="noopener noreferrer"><InstagramIcon fill={"#93a987"}/></a>
                  <a href="http://" target="_blank" rel="noopener noreferrer"><TwitterIcon fill={"#93a987"}/></a>
                </li>
              </ul>
            </HelpContainer>
          </Grid>
          <Grid item xs={6} sm={2}>
            <HelpContainer>
              <ul>
                <li>Address</li>
                <li><span>#225, Jubilee House 3 The Drive Brentwood CM13 3FR</span></li>
              </ul>
            </HelpContainer>
          </Grid>
        </Grid>
        <CopyRight>Copyright<i className="far fa-copyright"/>{`${new Date().getFullYear()} - All rights reserverd`}</CopyRight>
      </FooterPanelContainer>
    );
  }

export default Footer;