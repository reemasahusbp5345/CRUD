import {  Grid } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router'
import styled from "styled-components"

const Box=styled.div`
    border:1px solid white;
    height:500px;
    background-color:rgba(219,67,4,0.08);
    margin:20px;
    cursor:pointer;
    text-align:left;
    .date,.profile{
        display:flex;
        justify-content: space-around;
    }
    .image{
        text-align:center;
    }
    p{
        margin:5px 35px;
    }
    .title{
        color:#1749d2;
        font-weight:700;
    }
    .date>p,.profile>p{
        color:#333;
        font-weight:700;
    }
    button{
        border:0px;
        color:white;
        font-size:20px;
        background:#1749d2;
        border-radius:40px;
        padding:5px 10px;
        margin:5px;
       margin-left:100px;
    }
`
 
function DisplayCard({item,title,description,image,cost,host_name,date,time,_id}) {
const history=useHistory()
const handleRedirect=(id)=>{
    history.push(`/${id}`)
}
    return (
        <Grid item xs={10} md={4} lg={4}>
        <Box > 
            <div className="image" >

            <img  src={image} alt="host_name" width="350px"  />
            </div>
            <p className="title">{title}</p>
            <p style={{color:"#777"}}>{description}</p>
            <div className="date">
                <p>{date}</p>
                <p>{time}</p>
            </div>
            <div className="profile">
                <img src="./user_male2-512.webp" alt="profile" width="30px" height="30px" /><span style={{marginLeft:"-70px"}}>{host_name}</span>
                <p>₹ {cost}</p>
            </div>
            <p style={{marginLeft:"80px",marginTop:"-20px",color:"#1749d2"}}>(View Profile)</p>
            <button  onClick={()=>handleRedirect(_id)}>Click To Know More</button>
        </Box>
    </Grid>
    )
}

export default DisplayCard
