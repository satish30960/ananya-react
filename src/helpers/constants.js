export const HeaderBackground = '#FFFFFF';
export const FooterBackground = '#10074e';
export const svgFillColor = '#45A735';
export const Font = 'Mulish';
export const ButtonBackground = '#45A735';
export const BodyBackground = "#FFF";
export const DropDownIcon = (props) => 
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
    <path className="a" d="M0,0H26V26H0Z" fill={'none'}/>
    <path className="b" d="M19.446,8.59l-5.828,5.815L7.79,8.59,6,10.38,13.618,18l7.618-7.618Z" transform="translate(-1 0.036)" fill={props.fill ? props.fill : '#fff'}/>
  </svg>;