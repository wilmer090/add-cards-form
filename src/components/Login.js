import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    overflow-y:hidden;
  
  form{
    display: flex;
    flex-flow: column;
    background: #fff;
    border-radius: 4px;
    padding: 1em;
    max-width: 500px;
  } 
  form > input{
    min-height: 30px;
    border: 2px solid rgba(0,0,0,.3);
    min-width: 300px;
    border-radius: 4px;
    font-size: 15px;
    display: block;
    box-sizing: border-box;
    -webkit-transition: all .2s;
    transition: all .2s;
    padding: 10px;
    margin:1em;
  }
  .my-btn{
    background: #2196f3;
    background-position: 50%;
    border-radius: 4px;
    border: none;
    color: #fff;
    text-transform: uppercase;
    box-shadow: 0 0 4px #999;
    border-radius: 2px;
    padding: 12px 18px;
    font-size: 16px;
    -webkit-transition: background .8s;
    transition: background .8s;
    outline: 0;
    cursor: pointer;
    margin-inline:1em;
  }
 `

const Login = () =>{
	return(
		<Wrapper>
			<form>
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Password" />
            <button className="my-btn"type="submit">Login</button>
        	</form>
		</Wrapper>
		)
}

export default Login