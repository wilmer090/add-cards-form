import React from 'react'
import styled from 'styled-components'

const Cards = styled.section`

	   max-width: 400px;
    height: 200px;
    min-width:300px
    display: flex;
    flex-direction: column;
    border: 1px solid #dcddde;
    border-radius: 15px;
    padding: 16px;
    -webkit-transition: all .3s cubic-bezier(.175,.885,.32,1.275);
    transition: all .3s cubic-bezier(.175,.885,.32,1.275);
    margin:1em;


    .profileImg{
      min-width: 40px;
      margin: 0 12px 0 0;
      width: 40px;
      height: 40px;
      background: #dcddde;
      border-radius: 50%;
    }
    .card-divider{
      height: 1px;
      width: 100%;
      margin-bottom: 1em;
      background: rgba(0,0,0,.1);
    }
    .card-header{
    	display:flex;
    	flex-direction:row;
    }
    .card-title{
    	margin-bottom:1em;
    }
    .icon{
    	float:right;
    	margin-top:1em;
    }
    .icon:hover{
    	cursor:pointer;
    }
 
`

function Card(props){

  function deleteCard(e){

    props.onChange(e.target.parentElement.id)

  }
	return(
		<Cards>
		  <div className="card-header">
		  	<div className="profileImg"></div>
			<h3 className="card-title">{props.title}</h3>
		  </div>

		  <div className="card-divider"></div>

		  <div className="card-body">
			<p className="card-description">{props.desc}</p>
		  </div>
		  <div className="card-action">
		  	<span id={props.id}><i className="fa fa-trash icon" onClick={deleteCard}></i></span>
		  </div>
		</Cards>
		)
}

export default Card