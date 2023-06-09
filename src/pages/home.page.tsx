import Box from "@mui/material/Box";
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import "../Dash.css";
import StoreFrontIcon from "@mui/icons-material/Storefront";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AccordionDash from "../components/Accordion";
import CountUp from "react-countup";
import ItemsList from "../components/ItemsList";
import FilePicker from "../components/FilePicker";

import { useAppStore as app } from "../appStore";
import { getAllItems } from "../api/upload.api";
const HomePage: React.FC = () => {
  // const data1 = await getAllItems();
    const items = app((state) => state.items);
const setItems = app((state) => state.setItems);
const isLoading = app((state) => state.isLoading);
const updateLoading = app((state) => state.updateLoading);

    // setIsLoading(true)
    // getAllItems().then((data)=>{
    //   setItems(data.data)
    // setIsLoading(false)

    // }).catch((err)=>{
    //   setItems([])
    // setIsLoading(false)

    // }).finally(()=>{
    // setIsLoading(false)

    // })
    const fetchData = async () => {
      // your async code here
      // for example:
      updateLoading(true);
      try {
        
        const data = await getAllItems();
        setItems(data.data['items']);
      } catch (error) {
        setItems([])
      updateLoading(false);
        
      }
      finally{
      updateLoading(false);

      }
      updateLoading(false);
    // window.location.assign('/');
  
    };
    React.useEffect(() => {
      // updateLoading(true)
      fetchData()
      // updateLoading(true)
  
    }, []); 
  return(
    <>
      <div className="bgcolor">
        <Navbar />
        <Box height={70} />
        <Box sx={{ display: "flex" }}>
          <Sidebar />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Stack spacing={2} direction="row">
                  <Card
                    sx={{ minWidth: 49 + "%", height: 150 }}
                    className="gradient"
                  >
                    <CardContent>
                      <div>
                        <CreditCardIcon className="iconstyle" />
                      </div>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        color="#ffffff"
                      >
                        <CountUp
                          delay={0.3}
                          end={500.0}
                          duration={0.6}
                        ></CountUp>
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        Total Items
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card
                    sx={{ minWidth: 49 + "%", height: 150 }}
                    className="gradientlight"
                  >
                    <CardContent>
                      <div className="iconstyle">
                        <ShoppingBagIcon />
                      </div>

                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        color="#ffffff"
                      >
                        <CountUp
                          delay={0.3}
                          end={900.0}
                          duration={0.6}
                        ></CountUp>
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        Pending Items
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>

              <Grid item xs={4}>
                <Stack spacing={2}>
                  <Card sx={{ maxWidth: 345 }} className="gradientlight">
                    <Stack spacing={2} direction="row">
                      <div className="iconstyle">
                        <StoreFrontIcon />
                      </div>
                      <div className="paddingall">
                        <span className="pricetitlelight">
                          <CountUp
                            delay={0.3}
                            end={203}
                            duration={0.6}
                          ></CountUp>
                        </span>
                        <br />
                        <span className="pricesubtitlelight">Total Items Delivered</span>
                      </div>
                    </Stack>
                  </Card>
                  <Card sx={{ maxWidth: 345 }}>
                    <Stack spacing={2} direction="row">
                      <div className="iconstyledark">
                        <StoreFrontIcon />
                      </div>
                      <div className="paddingall">
                        <span className="pricetitle">
                          <CountUp
                            delay={0.3}
                            end={203}
                            duration={0.6}
                          ></CountUp>
                        </span>
                        <br />
                        <span className="pricesubtitle">Items Failed</span>
                      </div>
                    </Stack>
                  </Card>
                </Stack>
              </Grid>
            </Grid>
            <Box height={50} />
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FilePicker/>
                <Box height={20} />
                <Card sx={{ height: 80 + "vh" }}>
                  {/* <CardContent></CardContent> */}

                  <ItemsList />
                </Card>
              </Grid>

              {/* <Grid item xs={4}>
                <Card sx={{ height: 60 + "vh" }}>
                  <CardContent>
                    <div className="paddingall">
                      <span className="pricetitle">Popular Products</span>
                    </div>

                    <AccordionDash />
                  </CardContent>
                </Card>
              </Grid> */}
            </Grid>
          </Box>
        </Box>
      </div>
    </>
  );
};
export default HomePage;
