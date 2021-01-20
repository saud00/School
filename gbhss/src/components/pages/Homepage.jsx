import React from "react";
import {Grid, Typography, Button} from "@material-ui/core";
import useStyles from "../../styles/colors";
import bg from "../../styles/img/homepg/back.jpg"
import Cimage from '../../styles/img/faces/avatar.jpg'
import Cimage2 from '../../styles/img/faces/marc.jpg'
import Cimage3 from '../../styles/img/faces/christian.jpg'
import image from "../../styles/img/homepg/studnt2.png"
import Cards from "../home/Cards"
import Contact from "../home/Contact"
import { NavLink } from "react-router-dom";

const Homepage=()=>{
    const classes = useStyles();
    return(
        <div>
            <Grid container  className={classes.root} >
                <Grid item xs={6} className={classes.grid1}>
                    <Typography variant="h5">
                        We make stars which shine at day light
                    </Typography>
                    <Typography variant="h5">
                        Child Education make <strong className='brand-name'>Pakistan's</strong> future bright
                    </Typography>
                    <Button variant="contained" size="large" ClassName={classes.button}>
                        Get started
                    </Button>
                </Grid>
                <Grid item xs={6}  className={classes.grid2}>
                    <img className="image-fluid spin " src={image} alt="home img"></img>
                </Grid>
{//Cards
}
                <Grid container item xs={12} className={classes.grid3}>
                    <Grid item xs={12} styles={{backgroundColor:"blue"}}>
                    <Typography variant="h3"><strong className='brand-name'>Recent events</strong></Typography>
                    </Grid>

                    <Grid item xs={4}>
                        <Cards title="CEO visit" summary="CEO visit on COVID SOP's" srcImg={Cimage}/>
                    </Grid>   
                    
                    <Grid item xs={4}>
                        <Cards title="Head retirement " summary="Head retirement ceremony" srcImg={Cimage2}/>
                    </Grid> 
                    
                    <Grid item xs={4}>
                        <Cards title="Tree plantation" summary="Green Pakistan program" srcImg={Cimage3}/>
                    </Grid>                                     
                </Grid>
{//Contact Footer
}
                <Grid xs={12} className={classes.grid4}>
                    <Contact/>
                </Grid>
            </Grid>
        </div>
    )
}
export default Homepage