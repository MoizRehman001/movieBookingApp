import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
     constructor(){
         super()
         this.state = {

         }
     }
     render() { 
         return (
             <div className='attribute'>
                <img id='HeaderImage' src='https://cdn.upgrad.com/uploads/production/286e1f11-1897-4d0c-ab0f-6b2bfc1ce642/logo.svg' alt='.'></img>
             </div>
         );
     }
 }
  
 export default Header;