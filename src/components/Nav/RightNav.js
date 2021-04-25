import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
const UL = styled.ul`
	
		list-style:none;
		display:flex;
		flex-flow:row nowrap;

	li{
		padding:18px 10px;
	}
	li:hover{
		color:#23ce94;
    	cursor:pointer;
	}
	.link{
		text-decoration:none;
		color:#242424;
    	cursor:pointer;
	}
	.link:hover{
		color:#23ce94;
	}

	@media(max-width: 768px){
		flex-flow: column nowrap;
		background: #0D2538;
		position:fixed;
		top:0;
		right:0;
		height:100vh;
		width:300px;
		padding-top:3.5rem;
		transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
		transition:transform 0.3s ease-in-out;

		.link, li{
			color:white;
		}
	}


`
const RightNav = ({open}) =>{
	console.log(open)
	return(
		 <UL open={open}>
		  <li><Link	className="link"to={'/'}>Home</Link></li>
		  <li>Table</li>
		  <li>Message</li>
		 </UL>
		)
}

export default RightNav