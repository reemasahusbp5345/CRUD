import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { editWebinar } from '../Redux/action';

function EditWebinar() {
    const params=useParams()
    const data=useSelector(state=>state.data)
    const history=useHistory()
    const editedData=data.find(item=>item._id===params.id)
    const dispatch=useDispatch()
    const [state, setState] = useState({
      title: editedData.title || "",
      description:editedData.description ||  "",
      date:editedData.date ||  "",
      time:editedData.time || "",
      host_name:editedData.host_name ||  "",
      image:editedData.image|| "",
      cost:editedData.cost|| "",
    });
  
    const handleChange = (e) => {
      const { value, name, type } = e.target;
      const val =
        type === "file" ? URL.createObjectURL(e.target.files[0]) : value;
      setState((prevstate) => ({
        ...prevstate,
        [name]: val,
      }));
    };
    const handleClick = () => {
      dispatch(editWebinar({id:params.id,data:state}))
      history.push("/admin")
    };
    return (
      <div>
        <div>
          <TextField
            variant="outlined"
            label="Enter Title"
            name="title"
            value={state.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <TextField
            variant="outlined"
            label="Write Description"
            name="description"
            value={state.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="date"
            id="start"
            name="date"
            value={state.date}
            onChange={handleChange}
            min="2018-01-01"
            max="2021-03-27"
          />
        </div>
        <div>
          <input
            type="time"
            id="appt"
            name="time"
            value={state.time}
            onChange={handleChange}
            min="09:00"
            max="18:00"
            required
          />
        </div>
        <div>
          <TextField
            variant="outlined"
            label="Enter Host Name"
            name="host_name"
            value={state.host_name}
            onChange={handleChange}
          />
        </div>
        <div>
          <TextField
            varaiant="outlined"
            label="Enter Cost"
            name="cost"
            value={state.cost}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="file"
            id="myFile"
            name="image"
            
            onChange={handleChange}
          />
        </div>
        <div>
          <Button variant="contained" color="primary" onClick={handleClick}>Update</Button>
        </div>
      </div>
    )
}

export default EditWebinar
