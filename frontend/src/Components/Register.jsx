import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from "react-redux";
import { userRegister } from "../Redux/action";

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '35ch',
      },
    },
  }));

function Register() {
    const classes = useStyles();
  const [show, setShow] = useState(false);
  const [state, setState] = useState({
    name:"",
    password: "",
    
  });
  const dispatch=useDispatch()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange=(e)=>{
    const {value,name}=e.target
    setState((prevstate)=>({
        ...prevstate,
        [name]:value
    }))
  }
  const handleRegister = () => {
      dispatch(userRegister(state))
  };
  return (
    <>
      <div variant="primary" onClick={handleShow}>
        Register
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body className={classes.root}>
          <div>
            <TextField label="Enter Your Name" variant="outlined" name="name" value={state.name} onChange={handleChange} />
          </div>
          <div>
            <TextField label="Enter Your Password" variant="outlined" name="password" value={state.password} onChange={handleChange}  />
          </div>
          <div>
            <TextField label="Confirm Your Password" variant="outlined" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleRegister}>
            Register
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Register;
