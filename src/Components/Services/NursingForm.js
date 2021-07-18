import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {CustomInputField, SelectField} from './styles';
import { FooterBackground, Font } from '../../helpers/constants';
import emailjs from 'emailjs-com';
const useStyles = makeStyles((theme) => ({
  root: {    
    display: 'flex',
    flexDirection: 'column',
    '& .MuiTextField-root': {
        margin: theme.spacing(1),
    },
  },
  Main:{
    width: '100%',
    backgroundColor: '#fff',
    margin: '0 auto',
    padding: 30,
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center'
  },
  NursingHeader:{
      width: '100%',
      textAlign: 'center',
      fontFamily: Font,
      fontSize: 20,
      marginBottom: 20,
      fontWeight: '600'
  },
  Btn:{
      width: 120,
      padding: 14,
      color: '#fff',
      backgroundColor: FooterBackground
  }
}));

export default function NursingForm() {
  const classes = useStyles();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_aecnu7m','template_8ehy5ec', e.target, "user_NjRfaGVRAQ4ZMuUjMCLek")
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
}
  return (
    <div className={classes.Main}>
        
        <form className={classes.root} onSubmit={sendEmail} validate autoComplete="off"name={"Nursing Registration"} >
            <div className={classes.NursingHeader}>Nursing Registration</div>
        <CustomInputField
          required
          id="outlined-required"
          label="Full Name"
          name={"name"}
          variant="outlined"
        /><CustomInputField
          required
          id="outlined-required"
          label="Email"
          name={"email"}
          variant="outlined"
          type="email"
        />
        <CustomInputField
          required
          id="outlined-required"
          label="Phone Number"
          name={"phoneNumber"}
          variant="outlined"
          type="numer"
          inputProps={{
            maxLength: 10,
          }}
        />         
        <SelectField name="Country" id="fld_1959195_1" required="required" aria-labelledby="fld_1959195Label">
		            <option value="" disabled selected>Country*</option>
					<option value="India" data-calc-value="India">
						India					</option>
										<option value="United Kingdom" data-calc-value="United Kingdom">
						United Kingdom					</option>
										<option value="United States" data-calc-value="United States">
						United States					</option>
										<option value="Afghanistan" data-calc-value="Afghanistan">
						Afghanistan					</option>
										<option value="Åland Islands" data-calc-value="Åland Islands">
						Åland Islands					</option>
										<option value="Albania" data-calc-value="Albania">
						Albania					</option>
										<option value="Algeria" data-calc-value="Algeria">
						Algeria					</option>
										<option value="American Samoa" data-calc-value="American Samoa">
						American Samoa					</option>
										<option value="Andorra" data-calc-value="Andorra">
						Andorra					</option>
										<option value="Angola" data-calc-value="Angola">
						Angola					</option>
										<option value="Anguilla" data-calc-value="Anguilla">
						Anguilla					</option>
										<option value="Antarctica" data-calc-value="Antarctica">
						Antarctica					</option>
										<option value="Antigua and Barbuda" data-calc-value="Antigua and Barbuda">
						Antigua and Barbuda					</option>
										<option value="Argentina" data-calc-value="Argentina">
						Argentina					</option>
										<option value="Armenia" data-calc-value="Armenia">
						Armenia					</option>
										<option value="Aruba" data-calc-value="Aruba">
						Aruba					</option>
										<option value="Australia" data-calc-value="Australia">
						Australia					</option>
										<option value="Austria" data-calc-value="Austria">
						Austria					</option>
										<option value="Azerbaijan" data-calc-value="Azerbaijan">
						Azerbaijan					</option>
										<option value="Bahamas" data-calc-value="Bahamas">
						Bahamas					</option>
										<option value="Bahrain" data-calc-value="Bahrain">
						Bahrain					</option>
										<option value="Bangladesh" data-calc-value="Bangladesh">
						Bangladesh					</option>
										<option value="Barbados" data-calc-value="Barbados">
						Barbados					</option>
										<option value="Belarus" data-calc-value="Belarus">
						Belarus					</option>
										<option value="Belgium" data-calc-value="Belgium">
						Belgium					</option>
										<option value="Belize" data-calc-value="Belize">
						Belize					</option>
										<option value="Benin" data-calc-value="Benin">
						Benin					</option>
										<option value="Bermuda" data-calc-value="Bermuda">
						Bermuda					</option>
										<option value="Bhutan" data-calc-value="Bhutan">
						Bhutan					</option>
										<option value="Bolivia, Plurinational State of" data-calc-value="Bolivia, Plurinational State of">
						Bolivia, Plurinational State of					</option>
										<option value="Bonaire, Sint Eustatius and Saba" data-calc-value="Bonaire, Sint Eustatius and Saba">
						Bonaire, Sint Eustatius and Saba					</option>
										<option value="Bosnia and Herzegovina" data-calc-value="Bosnia and Herzegovina">
						Bosnia and Herzegovina					</option>
										<option value="Botswana" data-calc-value="Botswana">
						Botswana					</option>
										<option value="Bouvet Island" data-calc-value="Bouvet Island">
						Bouvet Island					</option>
										<option value="Brazil" data-calc-value="Brazil">
						Brazil					</option>
										<option value="British Indian Ocean Territory" data-calc-value="British Indian Ocean Territory">
						British Indian Ocean Territory					</option>
										<option value="Brunei Darussalam" data-calc-value="Brunei Darussalam">
						Brunei Darussalam					</option>
										<option value="Bulgaria" data-calc-value="Bulgaria">
						Bulgaria					</option>
										<option value="Burkina Faso" data-calc-value="Burkina Faso">
						Burkina Faso					</option>
										<option value="Burundi" data-calc-value="Burundi">
						Burundi					</option>
										<option value="Cambodia" data-calc-value="Cambodia">
						Cambodia					</option>
										<option value="Cameroon" data-calc-value="Cameroon">
						Cameroon					</option>
										<option value="Canada" data-calc-value="Canada">
						Canada					</option>
										<option value="Cape Verde" data-calc-value="Cape Verde">
						Cape Verde					</option>
										<option value="Cayman Islands" data-calc-value="Cayman Islands">
						Cayman Islands					</option>
										<option value="Central African Republic" data-calc-value="Central African Republic">
						Central African Republic					</option>
										<option value="Chad" data-calc-value="Chad">
						Chad					</option>
										<option value="Chile" data-calc-value="Chile">
						Chile					</option>
										<option value="China" data-calc-value="China">
						China					</option>
										<option value="Christmas Island" data-calc-value="Christmas Island">
						Christmas Island					</option>
										<option value="Cocos (Keeling) Islands" data-calc-value="Cocos (Keeling) Islands">
						Cocos (Keeling) Islands					</option>
										<option value="Colombia" data-calc-value="Colombia">
						Colombia					</option>
										<option value="Comoros" data-calc-value="Comoros">
						Comoros					</option>
										<option value="Congo" data-calc-value="Congo">
						Congo					</option>
										<option value="Congo, the Democratic Republic of the" data-calc-value="Congo, the Democratic Republic of the">
						Congo, the Democratic Republic of the					</option>
										<option value="Cook Islands" data-calc-value="Cook Islands">
						Cook Islands					</option>
										<option value="Costa Rica" data-calc-value="Costa Rica">
						Costa Rica					</option>
										<option value="Côte d'Ivoire" data-calc-value="Côte d'Ivoire">
						Côte d'Ivoire					</option>
										<option value="Croatia" data-calc-value="Croatia">
						Croatia					</option>
										<option value="Cuba" data-calc-value="Cuba">
						Cuba					</option>
										<option value="Curaçao" data-calc-value="Curaçao">
						Curaçao					</option>
										<option value="Cyprus" data-calc-value="Cyprus">
						Cyprus					</option>
										<option value="Czech Republic" data-calc-value="Czech Republic">
						Czech Republic					</option>
										<option value="Denmark" data-calc-value="Denmark">
						Denmark					</option>
										<option value="Djibouti" data-calc-value="Djibouti">
						Djibouti					</option>
										<option value="Dominica" data-calc-value="Dominica">
						Dominica					</option>
										<option value="Dominican Republic" data-calc-value="Dominican Republic">
						Dominican Republic					</option>
										<option value="Ecuador" data-calc-value="Ecuador">
						Ecuador					</option>
										<option value="Egypt" data-calc-value="Egypt">
						Egypt					</option>
										<option value="El Salvador" data-calc-value="El Salvador">
						El Salvador					</option>
										<option value="Equatorial Guinea" data-calc-value="Equatorial Guinea">
						Equatorial Guinea					</option>
										<option value="Eritrea" data-calc-value="Eritrea">
						Eritrea					</option>
										<option value="Estonia" data-calc-value="Estonia">
						Estonia					</option>
										<option value="Ethiopia" data-calc-value="Ethiopia">
						Ethiopia					</option>
										<option value="Falkland Islands (Malvinas)" data-calc-value="Falkland Islands (Malvinas)">
						Falkland Islands (Malvinas)					</option>
										<option value="Faroe Islands" data-calc-value="Faroe Islands">
						Faroe Islands					</option>
										<option value="Fiji" data-calc-value="Fiji">
						Fiji					</option>
										<option value="Finland" data-calc-value="Finland">
						Finland					</option>
										<option value="France" data-calc-value="France">
						France					</option>
										<option value="French Guiana" data-calc-value="French Guiana">
						French Guiana					</option>
										<option value="French Polynesia" data-calc-value="French Polynesia">
						French Polynesia					</option>
										<option value="French Southern Territories" data-calc-value="French Southern Territories">
						French Southern Territories					</option>
										<option value="Gabon" data-calc-value="Gabon">
						Gabon					</option>
										<option value="Gambia" data-calc-value="Gambia">
						Gambia					</option>
										<option value="Georgia" data-calc-value="Georgia">
						Georgia					</option>
										<option value="Germany" data-calc-value="Germany">
						Germany					</option>
										<option value="Ghana" data-calc-value="Ghana">
						Ghana					</option>
										<option value="Gibraltar" data-calc-value="Gibraltar">
						Gibraltar					</option>
										<option value="Greece" data-calc-value="Greece">
						Greece					</option>
										<option value="Greenland" data-calc-value="Greenland">
						Greenland					</option>
										<option value="Grenada" data-calc-value="Grenada">
						Grenada					</option>
										<option value="Guadeloupe" data-calc-value="Guadeloupe">
						Guadeloupe					</option>
										<option value="Guam" data-calc-value="Guam">
						Guam					</option>
										<option value="Guatemala" data-calc-value="Guatemala">
						Guatemala					</option>
										<option value="Guernsey" data-calc-value="Guernsey">
						Guernsey					</option>
										<option value="Guinea" data-calc-value="Guinea">
						Guinea					</option>
										<option value="Guinea-Bissau" data-calc-value="Guinea-Bissau">
						Guinea-Bissau					</option>
										<option value="Guyana" data-calc-value="Guyana">
						Guyana					</option>
										<option value="Haiti" data-calc-value="Haiti">
						Haiti					</option>
										<option value="Heard Island and McDonald Islands" data-calc-value="Heard Island and McDonald Islands">
						Heard Island and McDonald Islands					</option>
										<option value="Holy See (Vatican City State)" data-calc-value="Holy See (Vatican City State)">
						Holy See (Vatican City State)					</option>
										<option value="Honduras" data-calc-value="Honduras">
						Honduras					</option>
										<option value="Hong Kong" data-calc-value="Hong Kong">
						Hong Kong					</option>
										<option value="Hungary" data-calc-value="Hungary">
						Hungary					</option>
										<option value="Iceland" data-calc-value="Iceland">
						Iceland					</option>
										<option value="Indonesia" data-calc-value="Indonesia">
						Indonesia					</option>
										<option value="Iran, Islamic Republic of" data-calc-value="Iran, Islamic Republic of">
						Iran, Islamic Republic of					</option>
										<option value="Iraq" data-calc-value="Iraq">
						Iraq					</option>
										<option value="Ireland" data-calc-value="Ireland">
						Ireland					</option>
										<option value="Isle of Man" data-calc-value="Isle of Man">
						Isle of Man					</option>
										<option value="Israel" data-calc-value="Israel">
						Israel					</option>
										<option value="Italy" data-calc-value="Italy">
						Italy					</option>
										<option value="Jamaica" data-calc-value="Jamaica">
						Jamaica					</option>
										<option value="Japan" data-calc-value="Japan">
						Japan					</option>
										<option value="Jersey" data-calc-value="Jersey">
						Jersey					</option>
										<option value="Jordan" data-calc-value="Jordan">
						Jordan					</option>
										<option value="Kazakhstan" data-calc-value="Kazakhstan">
						Kazakhstan					</option>
										<option value="Kenya" data-calc-value="Kenya">
						Kenya					</option>
										<option value="Kiribati" data-calc-value="Kiribati">
						Kiribati					</option>
										<option value="Korea, Democratic People's Republic of" data-calc-value="Korea, Democratic People's Republic of">
						Korea, Democratic People's Republic of					</option>
										<option value="Korea, Republic of" data-calc-value="Korea, Republic of">
						Korea, Republic of					</option>
										<option value="Kuwait" data-calc-value="Kuwait">
						Kuwait					</option>
										<option value="Kyrgyzstan" data-calc-value="Kyrgyzstan">
						Kyrgyzstan					</option>
										<option value="Lao People's Democratic Republic" data-calc-value="Lao People's Democratic Republic">
						Lao People's Democratic Republic					</option>
										<option value="Latvia" data-calc-value="Latvia">
						Latvia					</option>
										<option value="Lebanon" data-calc-value="Lebanon">
						Lebanon					</option>
										<option value="Lesotho" data-calc-value="Lesotho">
						Lesotho					</option>
										<option value="Liberia" data-calc-value="Liberia">
						Liberia					</option>
										<option value="Libya" data-calc-value="Libya">
						Libya					</option>
										<option value="Liechtenstein" data-calc-value="Liechtenstein">
						Liechtenstein					</option>
										<option value="Lithuania" data-calc-value="Lithuania">
						Lithuania					</option>
										<option value="Luxembourg" data-calc-value="Luxembourg">
						Luxembourg					</option>
										<option value="Macao" data-calc-value="Macao">
						Macao					</option>
										<option value="Macedonia, the former Yugoslav Republic of" data-calc-value="Macedonia, the former Yugoslav Republic of">
						Macedonia, the former Yugoslav Republic of					</option>
										<option value="Madagascar" data-calc-value="Madagascar">
						Madagascar					</option>
										<option value="Malawi" data-calc-value="Malawi">
						Malawi					</option>
										<option value="Malaysia" data-calc-value="Malaysia">
						Malaysia					</option>
										<option value="Maldives" data-calc-value="Maldives">
						Maldives					</option>
										<option value="Mali" data-calc-value="Mali">
						Mali					</option>
										<option value="Malta" data-calc-value="Malta">
						Malta					</option>
										<option value="Marshall Islands" data-calc-value="Marshall Islands">
						Marshall Islands					</option>
										<option value="Martinique" data-calc-value="Martinique">
						Martinique					</option>
										<option value="Mauritania" data-calc-value="Mauritania">
						Mauritania					</option>
										<option value="Mauritius" data-calc-value="Mauritius">
						Mauritius					</option>
										<option value="Mayotte" data-calc-value="Mayotte">
						Mayotte					</option>
										<option value="Mexico" data-calc-value="Mexico">
						Mexico					</option>
										<option value="Micronesia, Federated States of" data-calc-value="Micronesia, Federated States of">
						Micronesia, Federated States of					</option>
										<option value="Moldova, Republic of" data-calc-value="Moldova, Republic of">
						Moldova, Republic of					</option>
										<option value="Monaco" data-calc-value="Monaco">
						Monaco					</option>
										<option value="Mongolia" data-calc-value="Mongolia">
						Mongolia					</option>
										<option value="Montenegro" data-calc-value="Montenegro">
						Montenegro					</option>
										<option value="Montserrat" data-calc-value="Montserrat">
						Montserrat					</option>
										<option value="Morocco" data-calc-value="Morocco">
						Morocco					</option>
										<option value="Mozambique" data-calc-value="Mozambique">
						Mozambique					</option>
										<option value="Myanmar" data-calc-value="Myanmar">
						Myanmar					</option>
										<option value="Namibia" data-calc-value="Namibia">
						Namibia					</option>
										<option value="Nauru" data-calc-value="Nauru">
						Nauru					</option>
										<option value="Nepal" data-calc-value="Nepal">
						Nepal					</option>
										<option value="Netherlands" data-calc-value="Netherlands">
						Netherlands					</option>
										<option value="New Caledonia" data-calc-value="New Caledonia">
						New Caledonia					</option>
										<option value="New Zealand" data-calc-value="New Zealand">
						New Zealand					</option>
										<option value="Nicaragua" data-calc-value="Nicaragua">
						Nicaragua					</option>
										<option value="Niger" data-calc-value="Niger">
						Niger					</option>
										<option value="Nigeria" data-calc-value="Nigeria">
						Nigeria					</option>
										<option value="Niue" data-calc-value="Niue">
						Niue					</option>
										<option value="Norfolk Island" data-calc-value="Norfolk Island">
						Norfolk Island					</option>
										<option value="Northern Mariana Islands" data-calc-value="Northern Mariana Islands">
						Northern Mariana Islands					</option>
										<option value="Norway" data-calc-value="Norway">
						Norway					</option>
										<option value="Oman" data-calc-value="Oman">
						Oman					</option>
										<option value="Pakistan" data-calc-value="Pakistan">
						Pakistan					</option>
										<option value="Palau" data-calc-value="Palau">
						Palau					</option>
										<option value="Palestinian Territory, Occupied" data-calc-value="Palestinian Territory, Occupied">
						Palestinian Territory, Occupied					</option>
										<option value="Panama" data-calc-value="Panama">
						Panama					</option>
										<option value="Papua New Guinea" data-calc-value="Papua New Guinea">
						Papua New Guinea					</option>
										<option value="Paraguay" data-calc-value="Paraguay">
						Paraguay					</option>
										<option value="Peru" data-calc-value="Peru">
						Peru					</option>
										<option value="Philippines" data-calc-value="Philippines">
						Philippines					</option>
										<option value="Pitcairn" data-calc-value="Pitcairn">
						Pitcairn					</option>
										<option value="Poland" data-calc-value="Poland">
						Poland					</option>
										<option value="Portugal" data-calc-value="Portugal">
						Portugal					</option>
										<option value="Puerto Rico" data-calc-value="Puerto Rico">
						Puerto Rico					</option>
										<option value="Qatar" data-calc-value="Qatar">
						Qatar					</option>
										<option value="Réunion" data-calc-value="Réunion">
						Réunion					</option>
										<option value="Romania" data-calc-value="Romania">
						Romania					</option>
										<option value="Russian Federation" data-calc-value="Russian Federation">
						Russian Federation					</option>
										<option value="Rwanda" data-calc-value="Rwanda">
						Rwanda					</option>
										<option value="Saint Barthélemy" data-calc-value="Saint Barthélemy">
						Saint Barthélemy					</option>
										<option value="Saint Helena, Ascension and Tristan da Cunha" data-calc-value="Saint Helena, Ascension and Tristan da Cunha">
						Saint Helena, Ascension and Tristan da Cunha					</option>
										<option value="Saint Kitts and Nevis" data-calc-value="Saint Kitts and Nevis">
						Saint Kitts and Nevis					</option>
										<option value="Saint Lucia" data-calc-value="Saint Lucia">
						Saint Lucia					</option>
										<option value="Saint Martin (French part)" data-calc-value="Saint Martin (French part)">
						Saint Martin (French part)					</option>
										<option value="Saint Pierre and Miquelon" data-calc-value="Saint Pierre and Miquelon">
						Saint Pierre and Miquelon					</option>
										<option value="Saint Vincent and the Grenadines" data-calc-value="Saint Vincent and the Grenadines">
						Saint Vincent and the Grenadines					</option>
										<option value="Samoa" data-calc-value="Samoa">
						Samoa					</option>
										<option value="San Marino" data-calc-value="San Marino">
						San Marino					</option>
										<option value="Sao Tome and Principe" data-calc-value="Sao Tome and Principe">
						Sao Tome and Principe					</option>
										<option value="Saudi Arabia" data-calc-value="Saudi Arabia">
						Saudi Arabia					</option>
										<option value="Senegal" data-calc-value="Senegal">
						Senegal					</option>
										<option value="Serbia" data-calc-value="Serbia">
						Serbia					</option>
										<option value="Seychelles" data-calc-value="Seychelles">
						Seychelles					</option>
										<option value="Sierra Leone" data-calc-value="Sierra Leone">
						Sierra Leone					</option>
										<option value="Singapore" data-calc-value="Singapore">
						Singapore					</option>
										<option value="Sint Maarten (Dutch part)" data-calc-value="Sint Maarten (Dutch part)">
						Sint Maarten (Dutch part)					</option>
										<option value="Slovakia" data-calc-value="Slovakia">
						Slovakia					</option>
										<option value="Slovenia" data-calc-value="Slovenia">
						Slovenia					</option>
										<option value="Solomon Islands" data-calc-value="Solomon Islands">
						Solomon Islands					</option>
										<option value="Somalia" data-calc-value="Somalia">
						Somalia					</option>
										<option value="South Africa" data-calc-value="South Africa">
						South Africa					</option>
										<option value="South Georgia and the South Sandwich Islands" data-calc-value="South Georgia and the South Sandwich Islands">
						South Georgia and the South Sandwich Islands					</option>
										<option value="South Sudan" data-calc-value="South Sudan">
						South Sudan					</option>
										<option value="Spain" data-calc-value="Spain">
						Spain					</option>
										<option value="Sri Lanka" data-calc-value="Sri Lanka">
						Sri Lanka					</option>
										<option value="Sudan" data-calc-value="Sudan">
						Sudan					</option>
										<option value="Suriname" data-calc-value="Suriname">
						Suriname					</option>
										<option value="Svalbard and Jan Mayen" data-calc-value="Svalbard and Jan Mayen">
						Svalbard and Jan Mayen					</option>
										<option value="Swaziland" data-calc-value="Swaziland">
						Swaziland					</option>
										<option value="Sweden" data-calc-value="Sweden">
						Sweden					</option>
										<option value="Switzerland" data-calc-value="Switzerland">
						Switzerland					</option>
										<option value="Syrian Arab Republic" data-calc-value="Syrian Arab Republic">
						Syrian Arab Republic					</option>
										<option value="Taiwan, Province of China" data-calc-value="Taiwan, Province of China">
						Taiwan, Province of China					</option>
										<option value="Tajikistan" data-calc-value="Tajikistan">
						Tajikistan					</option>
										<option value="Tanzania, United Republic of" data-calc-value="Tanzania, United Republic of">
						Tanzania, United Republic of					</option>
										<option value="Thailand" data-calc-value="Thailand">
						Thailand					</option>
										<option value="Timor-Leste" data-calc-value="Timor-Leste">
						Timor-Leste					</option>
										<option value="Togo" data-calc-value="Togo">
						Togo					</option>
										<option value="Tokelau" data-calc-value="Tokelau">
						Tokelau					</option>
										<option value="Tonga" data-calc-value="Tonga">
						Tonga					</option>
										<option value="Trinidad and Tobago" data-calc-value="Trinidad and Tobago">
						Trinidad and Tobago					</option>
										<option value="Tunisia" data-calc-value="Tunisia">
						Tunisia					</option>
										<option value="Turkey" data-calc-value="Turkey">
						Turkey					</option>
										<option value="Turkmenistan" data-calc-value="Turkmenistan">
						Turkmenistan					</option>
										<option value="Turks and Caicos Islands" data-calc-value="Turks and Caicos Islands">
						Turks and Caicos Islands					</option>
										<option value="Tuvalu" data-calc-value="Tuvalu">
						Tuvalu					</option>
										<option value="Uganda" data-calc-value="Uganda">
						Uganda					</option>
										<option value="Ukraine" data-calc-value="Ukraine">
						Ukraine					</option>
										<option value="United Arab Emirates" data-calc-value="United Arab Emirates">
						United Arab Emirates					</option>
										<option value="United States Minor Outlying Islands" data-calc-value="United States Minor Outlying Islands">
						United States Minor Outlying Islands					</option>
										<option value="Uruguay" data-calc-value="Uruguay">
						Uruguay					</option>
										<option value="Uzbekistan" data-calc-value="Uzbekistan">
						Uzbekistan					</option>
										<option value="Vanuatu" data-calc-value="Vanuatu">
						Vanuatu					</option>
										<option value="Venezuela, Bolivarian Republic of" data-calc-value="Venezuela, Bolivarian Republic of">
						Venezuela, Bolivarian Republic of					</option>
										<option value="VietNam" data-calc-value="VietNam">
						VietNam					</option>
										<option value="Virgin Islands, British" data-calc-value="Virgin Islands, British">
						Virgin Islands, British					</option>
										<option value="Virgin Islands, U.S." data-calc-value="Virgin Islands, U.S.">
						Virgin Islands, U.S.					</option>
										<option value="Wallis and Futuna" data-calc-value="Wallis and Futuna">
						Wallis and Futuna					</option>
										<option value="Western Sahara" data-calc-value="Western Sahara">
						Western Sahara					</option>
										<option value="Yemen" data-calc-value="Yemen">
						Yemen					</option>
										<option value="Zambia" data-calc-value="Zambia">
						Zambia					</option>
										<option value="Zimbabwe" data-calc-value="Zimbabwe">
						Zimbabwe					</option>
										<option value="Others" data-calc-value="Others">
						Others					</option>
							</SelectField>
        <SelectField name="Qualification" id="fld_8919612_1" required="required" aria-labelledby="fld_8919612Label">
            <option value="" disabled selected>Qualification*</option>
			<option value="BSc Nursing" data-calc-value="BSc Nursing">BSc Nursing					</option>
            <option value="MSc Nursing" data-calc-value="MSc Nursing">MSc Nursing					</option>
            <option value="GNM" data-calc-value="GNM">GNM					</option>
            <option value="Others" data-calc-value="Others">Others					</option>
		</SelectField>
        <SelectField name="experience"  id="fld_5543628_1" required="required" aria-labelledby="fld_5543628Label">
                    <option value="" disabled selected>Years of Experience*</option>
					<option value="0-1" data-calc-value="0-1">
						0-1					</option>
										<option value="1" data-calc-value="1">
						1					</option>
										<option value="2" data-calc-value="2">
						2					</option>
										<option value="3" data-calc-value="3">
						3					</option>
										<option value="4" data-calc-value="4">
						4					</option>
										<option value="5+" data-calc-value="5+">
						5+					</option>
							</SelectField>
        <SelectField name="specialisation" id="fld_7846283_1" required="required" aria-labelledby="fld_7846283Label">
		<option value="" disabled selected>Nursing Specialisation*</option>
            <option value="General" data-calc-value="General">
            General					</option>
                            <option value="Emergencies" data-calc-value="Emergencies">
            Emergencies					</option>
                            <option value="ICU" data-calc-value="ICU">
            ICU					</option>
                            <option value="Oncology" data-calc-value="Oncology">
            Oncology					</option>
                            <option value="Others" data-calc-value="Others">
            Others					</option>
                </SelectField>
        <SelectField name="RegisteredtoaNursingbody" id="fld_6839676_1" required="required" aria-labelledby="fld_6839676Label">
        <option value="" disabled selected>Registered to a Nursing body?*</option>
            <option value="Yes" data-calc-value="Yes">
                Yes					</option>
                                <option value="No" data-calc-value="No">
                No					</option>
        </SelectField>
        <SelectField name="IELTS/OETtaken" id="fld_6839676_1" required="required" aria-labelledby="fld_6839676Label">
        <option value="" disabled selected>IELTS/OET taken?*</option>
            <option value="Yes" data-calc-value="Yes">
                Yes					</option>
                                <option value="No" data-calc-value="No">
                No					</option>
        </SelectField>
        <SelectField name="NMC"  id="fld_6839676_1" required="required" aria-labelledby="fld_6839676Label">
        <option value="" disabled selected>NMC registered?*</option>
            <option value="Yes" data-calc-value="Yes">
                Yes					</option>
                                <option value="No" data-calc-value="No">
                No					</option>
        </SelectField>
        <SelectField name="CBT" id="fld_6839676_1" required="required" aria-labelledby="fld_6839676Label">
            <option value="" disabled selected>CBT Test Taken?*</option>
            <option value="Yes" data-calc-value="Yes">
                Yes					</option>
                                <option value="No" data-calc-value="No">
                No					</option>
        </SelectField>
        <SelectField name="Availability" id="fld_2492191_1" required="required" aria-labelledby="fld_2492191Label">
		<option value="" disabled selected>Availability?*</option>
					<option value="Immediate" data-calc-value="Immediate">
						Immediate					</option>
										<option value="2-3 months" data-calc-value="2-3 months">
						2-3 months					</option>
										<option value="3+ months" data-calc-value="3+ months">
						3+ months					</option>
							</SelectField>
        <CustomInputField
          required
          id="outlined-required"
          label="Agent Email"
          name={"agentEmail"}
          variant="outlined"
        />
        <p>If referred by an agent, please provide the agent email</p>
        <input className={classes.Btn} type="submit" name="submit" id="fld_3424428_1" value="Submit" data-field="fld_3424428"></input>
    </form></div>
  );
}
