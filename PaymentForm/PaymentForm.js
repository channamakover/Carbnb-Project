import { Divider } from '@material-ui/core';
import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { Link } from 'react-router-dom'
import './PaymentForm.css'
import AccountsList from "../../Data/AccountsList.json";


 // component for paying was taken from 'react-credit-cards'
export default class PaymentForm extends React.Component {
  constructor(props) {
    super(props)
  this.state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
    email:''
  }};

 
  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }
  
  handleInputChange = (e) => {
    const { name, value } = e.target;
    
    this.setState({ [name]: value });
  }
  
  render() {
    const userDetails=AccountsList.accountsList.filter(account=>account.name===this.props.userName);
    console.log(this.props.userName)
    console.log(userDetails)
    return (
      <div className="PaymentForm">
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <div className="form"> 
        	<input className="input-card"
            type="tel"
            name="number"
            placeholder="מספר כרטיס"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
             	<input className="input-card"
            type="tel"
            name="name"
            placeholder="שם בעל הכרטיס"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />

             	<input className="input-card"
            type="tel"
            name="expiry"
            placeholder="תוקף"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
             	<input className="input-card"
            type="tel"
            name="cvc"
            placeholder="Cvc"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}/>
            </div>
            <div className="form-2"> 
            <input className="input-card"
              type="tel"
              
              placeholder={this.props.userName}
            />
                 <input className="input-card"
              type="tel"
              
              placeholder="כתובת"
            />
  
                 <input className="input-card "
              type="tel"
              
              placeholder="טלפון" 
            />
                 <input className="input-card"
              type="tel"
              
              placeholder="כתובת מייל" onBlur={(e)=>{this.setState({email:e.target.value})}}
          />
        
            <Link to ='/email' >
            <button >שלח
                </button>
                </Link > 
                </div>
            
      </div>
    );
  }
}
