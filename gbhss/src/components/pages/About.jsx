import React from "react";
import {Grid, Typography, Button} from "@material-ui/core";
import useStyles from "../../styles/colors";
import bg from "../../styles/img/homepg/back.jpg"
import image from "../../styles/img/homepg/studnt2.png"

const About=()=>{
    const classes = useStyles();
    return(
        <div>
            <Grid container  className={classes.root} >
                <Grid item xs={6} className={classes.grid1}>
                 
                    <Typography variant="h5">
                        About Page under construction :P
                    </Typography>

                    <Grid item xs={2} styles={{justifyContent:"center"}}>

                    <Button  color="primary" variant="contained" className={classes.button} size="small">
                        Get started
                    </Button>
                    </Grid>

                </Grid>
                <Grid item xs={6}  className={classes.grid2}>
                    <img className="image-fluid spin " src={image} alt="home img"></img>
                </Grid>
            </Grid>
        </div>
    )
}
export default About;