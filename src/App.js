import React from "react";
import { useState } from "react";
import Timer from './Timer'
import bg from "./bg.jpg";
import chip from "./chip.png";
import {GrStatusGood} from 'react-icons/gr'
import {CgLayoutGridSmall} from 'react-icons/cg'
import {RiGridFill} from 'react-icons/ri'
import { BiEditAlt } from "react-icons/bi";
import {BsWifi} from 'react-icons/bs'
import {FaApple, FaRegIdBadge} from 'react-icons/fa'

import "./App.css";

function PayNow() {
  const [cardNumber, setCardNumber] = useState("");
  const [cvvNumber, setCvvNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [password, setPassWord] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (event) => {
    alert(cardNumber + "," + cvvNumber + "," + expiryDate + "," + password);
  };
  const payNow = () => {
    alert(cardNumber , cvvNumber, expiryDate ,password);
  };

  return (
    <div className="flow">
      <div className="top">
        <span className="flow_cion">
          <img className="img-logo" src={''} alt="" width={12} />
          <span className="company"> AceCion</span> Pay
          
          
        </span>
        <Timer />
      </div>
     
      <div>
        <form onSubmit={handleSubmit}>
          <div className="flow_add">
            <label>
              Card Number
              <span className="hee">
                <BiEditAlt className="hee" />
                Edit
              </span>
              <p>Enter the 16-digit card number on the card</p>
              <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" className='card-icon' alt=''/>
              
              <input
                className="flow_bb"
                type="text"
                value={cardNumber}
                required
                placeholder="2412 - 7512 - 3412 - 3456"
                onChange={(event) => setCardNumber(event.target.value)}
              />
              <GrStatusGood className="icon-c" />
            </label>
          </div>

          <div className="flow_add">
            <label>
              CVV Number <br />
              <span className="enter">
                Enter the 3 or 4 digit number on the card
              </span>
              <input
                className="flow_vv"
                type="cvvNumber"
                value={cvvNumber}
                required="true"
                onChange={(event) => setCvvNumber(event.target.value)}
                placeholder=" 234"
              />
              <RiGridFill className="icon" />
            </label>
          </div>

          <div className="flow_add">
            <label>
              Expiry date <br />
              <span className="enter">
                Enter the expiration date on the card
              </span>
              <input
                className="flow_date"
                type="text"
                value={expiryDate}
                required="true"
                onChange={(event) => setExpiryDate(event.target.value)}
                placeholder=" 09"
              />
            </label>
            <span className="divider">/</span>
            <label>
              <input
                className="flow_date"
                type="text"
                value={expiryDate}
                required="true"
                onChange={(event) => setExpiryDate(event.target.value)}
                placeholder=" 22"
              />
            </label>
          </div>
          <div className="flow_add">
            <label>
              Password <br />
              <span className="enter"> Enter your dynamic password</span>
              <input
                className="flow_pp"
                type="password"
                value={password}
                required="true"
                onChange={(event) => setPassWord(event.target.value)}
                placeholder="........"
              />
              <CgLayoutGridSmall className="icon" />
            </label>
          </div>
          <div>
            <input
              className="input-wrapper"
              type="submit"
              value="Pay Now"
              onClick={payNow}
            />
          </div>
          <div className="flow_wrapper">
            <div className="bankcard">

            <img className="img-sim" src={chip} alt="kc" width={14} />
            <BsWifi alt="" className="img-network" /> 
                <p>
                Jonathan Michael
                <br /> ......3456
              </p>
              <span className="cardNumber">
                09/22
                <img
                src="https://img.icons8.com/color/48/000000/mastercard-logo.png"alt="" className="img-card" width={10}/>
              </span>
            </div>
            <div className="card-info">
              <p>
                Company &nbsp;&nbsp;&nbsp;&nbsp;
                <FaApple />
                Apple
              </p>

              <span>Other Number&nbsp;&nbsp;&nbsp;&nbsp; 1266201</span>
              <p>Product &nbsp;&nbsp;&nbsp;&nbsp;MockBock Ar</p>
              <span>Vat(20%)&nbsp;&nbsp;&nbsp;&nbsp; $100.00</span>
            </div>
            <div className="to-pay">
              You have to pay
              <p>
                <span className="number">549</span> .99
                USD&nbsp;&nbsp;&nbsp;&nbsp;
                <FaRegIdBadge />
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PayNow;