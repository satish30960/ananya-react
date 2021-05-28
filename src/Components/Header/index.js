import React, {Component} from 'react';
import {HeaderContainer, MenuLinks, MenuList, CustomListItem, MobileView} from './style';
import Logo from '../../images/bubbleLogo.svg';
import ClearIcon from '@material-ui/icons/Clear';
import MoreIcon from '@material-ui/icons/Menu';
class Header extends Component{
  constructor(props){
    super(props);
    this.state = {
      active: '',
      routeArr: [],
      pathname: "/",
      isMobileMenuOpen: false
    }
  }
  componentDidMount() {
    const { history } = this.props;
    console.log("history", history);
    const arr = history?.location?.pathname?.split('/');
    console.log("arr", arr);
    this.setState({
      active: arr?.length > 0 ? arr[1] : '',
      routeArr: arr,
      pathname: history?.location?.pathname
    });
  }
  componentDidUpdate(){
    const { history } = this.props;
    if(this.state.pathname !== history.location.pathname){
      const arr = history?.location?.pathname?.split('/');
      console.log("arr", arr);
      this.setState({
        active: arr?.length > 0 ? arr[1] : '',
        routeArr: arr,
        pathname: history?.location?.pathname
      });
    }
  }
  navigateRoute = (link) => {
    const { history } = this.props;
    history.push(link);
    this.handleMobileMenuOpenClose(false);
    const arr = history?.location?.pathname?.split('/');
    console.log("arr", arr);
    this.setState({
      active: arr?.length > 0 ? arr[1] : '',
      routeArr: arr
    });
  }
  handleMobileMenuOpenClose = (bool) => {
    this.setState({
      isMobileMenuOpen: bool
    });
  }
  render() {
    const {isMobileMenuOpen} = this.state;
    const matches = window.innerWidth;
    console.log(matches);
    return (
       <HeaderContainer>
         <div className="logo" onClick={() => this.navigateRoute('/')}><img src={Logo} alt={"logo"}/><div className="ltext">ANANYA</div></div>
         <div className="menu-List">
          <MenuList>
            <CustomListItem showTab={true} active={this.state.active === ''}>
              <MenuLinks onClick={() => this.navigateRoute('/')}>
                Home
              </MenuLinks>
            </CustomListItem>
            <CustomListItem showTab={true} active={this.state.active === 'what-we-do'}>
              <MenuLinks onClick={() => this.navigateRoute('/what-we-do')}>
                What We Do
              </MenuLinks>
            </CustomListItem>
            <CustomListItem showTab={true} active={this.state.active === 'services'}>
              <MenuLinks onClick={() => this.navigateRoute('/services')}>
                Services
              </MenuLinks>
            </CustomListItem>
            <CustomListItem showTab={true} active={this.state.active === 'careers'}>
              <MenuLinks onClick={() => this.navigateRoute('/careers')}>
                Careers
              </MenuLinks>
            </CustomListItem>
            <CustomListItem showTab={true} active={this.state.active === 'contact'}>
              <MenuLinks onClick={() => this.navigateRoute('/contact')}>
                Contact us
              </MenuLinks>
            </CustomListItem>
            <CustomListItem showTab={true} active={this.state.active === 'feeds'}>
              <MenuLinks onClick={() => this.navigateRoute('/feeds')}>
                Feeds
              </MenuLinks>
            </CustomListItem>
          </MenuList>
        </div>
        <div className={"icon"}>{isMobileMenuOpen ? <ClearIcon onClick={() => this.handleMobileMenuOpenClose(false)} style={{fill: '#9155a8'}}/> : <MoreIcon onClick={() => this.handleMobileMenuOpenClose(true)} style={{fill: '#9155a8'}}/>}</div>
        <MobileView>
          {isMobileMenuOpen ?
          <div className={"mobileMenu"}>
            <ul>
              <li onClick={() => this.navigateRoute('/')}>
                <div className={'text'}>Home</div>
              </li>
              <li onClick={() => this.navigateRoute('/what-we-do')}>
              <div className={'text'}>What We do</div>
              </li>
              <li  onClick={() => this.navigateRoute('/services')}>
                <div className={'text'}>Services</div>
              </li>
              <li onClick={() => this.navigateRoute('/careers')}>
                <div className={'text'}>Careers</div>
              </li>
              <li onClick={() => this.navigateRoute('/contact')}>
                <div className={'text'}>Contact us</div>
              </li>
            </ul>
          </div> : null}
        </MobileView>
       </HeaderContainer>
    );
  }
}

export default Header;