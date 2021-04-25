import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Burger from './Burger'

const Nav = styled.nav`
	width:100%;
	height: 55px;
	border-bottom: 2px solid #f1f1f1;
	padding 0 20px;
	display:flex;
	justify-content:space-between;

	.logo{
		padding: 15px 0;

	}
	
	.logout-link{
		color:#242424;
		text-decoration:none;
	}
	.logout-link:hover{
		color:#23ce94;
	}

`
const Navbar = ()=>{
	return(
	  <Nav>
		 <div className='logo'>
		  <span><Link to={'/login'} className="logout-link">Logout <i class="fa fa-twitter"></i></Link></span>
		 </div>
		 <Burger />
		 
	  </Nav>
		)
}

export default Navbar