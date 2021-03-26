import {
  Grid,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWebinarData } from "../Redux/action";
import DisplayCard from "./DisplayCard";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWebinarData());
  }, [dispatch]);

  const data = useSelector((state) => state.data);
  const isLoading = useSelector((state) => state.loading);
  console.log(data);
  return (
    <div>
      <h4 style={{textAlign:"left",marginLeft:"40px",color:"#333"}}>Upcoming Free Webinars</h4>
      <hr />
      <Grid item container style={{ justifyContent: "center" }}>
        {isLoading ? (
          <h3>...isLoading</h3>
        ) : (
          data &&
          data
            .filter((item, idx) => idx < 5)
            .map((item) => <DisplayCard key={item._id} {...item} />)
        )}
      </Grid>
      <h4 style={{textAlign:"left",marginLeft:"40px",color:"#333"}}>Premium Webinars</h4>
      <Grid item container style={{ justifyContent: "center" }}>
        {isLoading ? (
          <h3>...isLoading</h3>
        ) : (
          data &&
          data
            .filter((item, idx) => idx >= 5)
            .map((item) => <DisplayCard key={item._id} {...item} />)
        )}
      </Grid>
    </div>
  );
}

export default Home;
