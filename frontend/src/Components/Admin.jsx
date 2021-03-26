import { Grid } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";
import { deleteWebinar } from "../Redux/action";

const Box = styled.div`
  border: 1px solid white;
  height: 500px;
  background-color: rgba(219, 67, 4, 0.08);
  margin: 20px;
  cursor: pointer;
  text-align: left;
  .date,
  .profile {
    display: flex;
    justify-content: space-around;
  }
  .image {
    text-align: center;
  }
  p {
    margin: 5px 35px;
  }
  .title {
    color: #1749d2;
    font-weight: 700;
  }
  .date > p,
  .profile > p {
    color: #333;
    font-weight: 700;
  }

  button {
    border: 0px;
    color: white;
    font-size: 20px;
    background: #1749d2;
    border-radius: 10px;
    padding: 5px 10px;
    margin: 5px;
    width: 115px;
  }
`;
const Button = styled.div`
  width: 300px;
  border: 0px;
  color: white;
  font-size: 20px;
  background: #1749d2;
  border-radius: 10px;
  padding: 5px 10px;
  margin: 5px;
  cursor:pointer;
`;

function Admin() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const isLoading = useSelector((state) => state.loading);
  const history = useHistory();
  const handleRedirect = (id) => {
    history.push(`/${id}`);
  };
  const handleDelete = (id) => {
    dispatch(deleteWebinar(id));
  };
  const handleAddWebinar=()=>history.push("/newWebinar")
  const handleEdit=(id)=>history.push(`/edit/${id}`)
  return (
    <div>
      <Button onClick={handleAddWebinar}>Add New Webinar</Button>
      <Grid item container style={{ justifyContent: "center" }}>
        {isLoading ? (
          <h3>...isLoading</h3>
        ) : (
          data &&
          data.map((item) => (
            <Grid item xs={10} md={4} lg={4}>
              <Box>
                <div className="image">
                  <img src={item.image} alt="host_name" width="350px" />
                </div>
                <p className="title">{item.title}</p>
                <p style={{ color: "#777" }}>{item.description}</p>
                <div className="date">
                  <p>{item.date}</p>
                  <p>{item.time}</p>
                </div>
                <div className="profile">
                  <img
                    src="./user_male2-512.webp"
                    alt="profile"
                    width="30px"
                    height="30px"
                  />
                  <span style={{ marginLeft: "-70px" }}>{item.host_name}</span>
                  <p>₹ {item.cost}</p>
                </div>
                <p
                  style={{
                    marginLeft: "80px",
                    marginTop: "-20px",
                    color: "#1749d2",
                  }}
                >
                  (View Profile)
                </p>
                <div className="btn">
                  <button onClick={() => handleRedirect(item._id)}>View</button>
                  <button onClick={() => handleEdit(item._id)}>Edit</button>
                  <button onClick={() => handleDelete(item._id)}>Delete</button>
                </div>
              </Box>
            </Grid>
          ))
        )}
      </Grid>
    </div>
  );
}

export default Admin;
