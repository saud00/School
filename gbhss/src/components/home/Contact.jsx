import React from 'react'
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import useStyles from '../../styles/colors';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";  
import {
    faLinkedin,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";  


const ContactUs=()=>{
    const classes=useStyles()

    return(
        <Grid container xs={12}  className={classes.grid4}>
            <Grid item sx={12} md={12} className={classes.socialContainer}>  

            <NavLink to="https://www.linkedin.com/in/saud-malik-2b50a2120"  className={classes.Linkdin}>
                <FontAwesomeIcon icon={faLinkedin} size='2x'/>
                </NavLink>     
         
            <NavLink to="https://www.facebook.com/saud_A-malik/" className={classes.fb}>
            <FontAwesomeIcon icon={faFacebook} size="2x" />
            </NavLink>

            <NavLink to="https://www.twitter.com/saud_sahib"  className={classes.twitter}>
            <FontAwesomeIcon icon={faTwitter} size="2x" />
            </NavLink>
    
            <NavLink
            to="https://www.instagram.com/saud_a-malik" className={classes.insta}
            >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
            </NavLink>
            </Grid> 
       </Grid>
    )
}
export default ContactUs;