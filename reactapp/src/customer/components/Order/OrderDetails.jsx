import React from "react";
import AdressCard from "../AdressCard/AdressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarBorderIcon from '@mui/icons-material/StarBorder';
const OrderDetails = () => {
  return (
    <div className="px:5 lg:px-20">
      <div>
        <h1 className="font-bold text-xl py-7">Delivery Address</h1>
        <AdressCard />
      </div>
      <div className="py-20">
        <OrderTracker activeStep={3} />
      </div>
      <Grid container className="space-y-5">
        {[1,1,1,1,1].map((item)=> <Grid
          item
          container
          className="shadow-xl rounded-md p-5 border"
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Grid item xs={6}>
            <div className="flex items-center space-x-4">
              <img
                className="w-[5rem] h-[5rem] object-cover object-top"
                src="https://images.unsplash.com/photo-1574291814206-363acdf2aa79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhhbmQlMjBtYWRlJTIwY3JhZnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <div className="space-y-2 ml-5">
                <p className="font-semibold">Hand Made Product</p>
                <p>Seller : Yazhini</p>
                <p>₹1099</p>
              </div>
            </div>
          </Grid>
          <Grid item>
            <Box sx={{ color: deepPurple[500] }}>
              <StarBorderIcon sx={{fontSize:"2rem"}}  className="px-2" />
              <span>Rate & Review Product</span>
            </Box>
          </Grid>
        </Grid>)}
        
      </Grid>
    </div>
  );
};

export default OrderDetails;
