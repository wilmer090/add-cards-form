import React, {useEffect,useState} from 'react'
import {useForm} from 'react-hook-form'
import Card from './Card'
import Modal from './Modal'
import styled from 'styled-components'

const Wrapper = styled.div`
	display:flex;
	flex-direction:column;
	align-items:center;

	form{
		margin-top:1em;
	}
`
const Layout = styled.div`
	display:flex;
	flex-direction:row;
	align-items:center;
	justify-content:center;
	margin-top:1em;
	margin-bottom:1em;
	flex-wrap: wrap;
	width:min(90%, 70rem);
	margin-inline:auto;
`
const Button = styled.button`
	border: none;
    position: fixed;
    bottom: 1em;
    right: 1em;
    background: #23ce94;
    padding: 8px 12px;
    color: #fff;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
`
	function GetSortOrder(prop) {    
    return function(a, b) {    
        if (a[prop] > b[prop]) {    
            return 1;    
        } else if (a[prop] < b[prop]) {    
            return -1;    
        }    
        return 0;    
    }    
} 
function CardLayout(props){



	let content_data = [
	{
	  id: 1617298574747,	
	  title:'Lorem ip sum',
	  desc: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut qua'
	},
	{
	  id: 1617298574740,
	  title:'New post',
	  desc: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut qua'
	},
	{
	  id: 1617298574743,	
	  title:'Lorem ip sum',
	  desc: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut qua'
	},
	{
		id: 1617298574745,
	  title:'Lorem ip sum',
	  desc: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut qua'
	}
	]

let [data, setData] = useState(content_data)

const {register, handleSubmit, reset} = useForm()
	
useEffect(()=>{
	// setData(content_data)
	console.log('hello')

 },[data])

	const [showModal, setShowModal] = useState(false);

	const openModal = () => {
	setShowModal(prev => !prev);
	}

	//handle submit request from form
	const onSubmit = (value)=>{
		reset({})
		value = {...value, id: new Date().valueOf()}
		setData(data = [...data, value])

	}

	//callback for delete 
	function deleteHandler(elemId){
		let newSetOfObject = data.filter(elems => elems.id != elemId)
		setData(newSetOfObject)
	}

	//sort the card
	function GetSortOrder(prop) {    
    return function(a, b) {    
        if (a[prop] < b[prop]) {    
            return 1;    
        } else if (a[prop] > b[prop]) {    
            return -1;    
        }    
        return 0;    
     }    
    }

	return(
		<Wrapper>
		<form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" name="title" placeholder="title..." ref={register} />
          <input type="text" name="desc" placeholder="description..." ref={register} />
          <input className="my-btn" type="submit" />
         </form>

		<Layout>

		 {data.sort(GetSortOrder("id")).map((elems, index) => <Card key={index} id={elems.id} title={elems.title} desc={elems.desc} onChange={deleteHandler}/> )}

		  <Button onClick={openModal}>Add Post + </Button>

     	  <Modal showModal={showModal} setShowModal={setShowModal} />

		</Layout>
		</Wrapper>
		)
}

export default CardLayout