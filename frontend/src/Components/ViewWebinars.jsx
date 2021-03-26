import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import styled from "styled-components"
import EventBusyIcon from '@material-ui/icons/EventBusy';
import ScheduleIcon from '@material-ui/icons/Schedule';

const Container=styled.div`
    display:flex;
    height:500px;
    background-color:#1749d2;
    padding-left:50px;
    padding-top:20px;
     .headers,.banner{
         flex:1
     }
     .headers{
         text-align:left;
         color:white;
         font-size:30px;
     }
     .banner>img{
         width:600px;
         height:400px;
     }
button{
    border:0px;
    color:white;
    font-size:20px;
    background:orange;
    border-radius:40px;
    padding:10px 20px;
    margin:5px;
}

`

function ViewWebinars() {
    const params=useParams()
     const data=useSelector(state=>state.data)
     const webinar=data.find(item=>item._id===params.id)
     console.log(webinar)
    return (
        <Container>
            <div className="headers">
              <h2>{webinar.title}</h2>  
              <h4>{webinar.description}</h4>  
              <div><EventBusyIcon/>{webinar.date}</div>
              <div><ScheduleIcon/>{webinar.time}</div>
              <div>₹ {webinar.cost}</div>
              <div><img src="./user_male2-512.webp" width="35px" alt="profile"/>{webinar.host_name}</div>
              <button>Book Seat For Free</button>
            </div> 
            <div className="banner">
                <img src={webinar.image}  alt={webinar.host_name}/>
             </div> 
        </Container>
    )
}

export default ViewWebinars
