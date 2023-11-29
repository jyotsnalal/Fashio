import React from 'react'
import './Footer.css';
import {  CDBBtn, CDBIcon, CDBBox,CDBLink } from 'cdbreact';
const Footers = () => {
  return (
    <div className='footers'>
      
      <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '79%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox alignSelf="center">
            <a href="/" className="d-flex align-items-center p-0 text-dark">
            
              <span className="ms-3 h5 font-weight-bold text-light ">Fashio</span>
            </a>
            <CDBBox display="flex" flex="column" className='display' >
              <CDBLink href="/">Address: 60-49 Road 11378 New York</CDBLink>
              <CDBLink href="/">Phone: +65 11.188.888</CDBLink>
              <CDBLink href="/">Email: hello.colorlib@gmail.com</CDBLink>
              
            </CDBBox>
            <CDBBox className="mt-5" display="flex">
              <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="facebook-f" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="mx-3 p-2">
                <CDBIcon fab icon="twitter" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="instagram" />
              </CDBBtn>
            </CDBBox>
            
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
            Fashio
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer' }}>
              <CDBLink href="/">Information</CDBLink>
              <CDBLink href="/">About Us</CDBLink>
              <CDBLink href="/">Contact</CDBLink>
              <CDBLink href="/">Blog</CDBLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Products
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer' }}>
              <CDBLink href="/">Checkout</CDBLink>
              <CDBLink href="/">Contact</CDBLink>
              <CDBLink href="/">Serivius</CDBLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Help
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer' }}>
              <CDBLink href="/">Support</CDBLink>
              <CDBLink href="/">Sign Up</CDBLink>
              <CDBLink href="/">Sign In</CDBLink>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <small className="text-center mt-5">&copy; Fashio, 2023. All rights reserved.</small>
      </CDBBox>
    
    </div>
  )
}

export default Footers
