import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Appbar from '@material-ui/core/Appbar';
import useStyles from '../../styles/colors';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';

const Header=()=>{

    const classes = useStyles();
    return(
        <div>
            <Appbar>
            <Toolbar>
                <IconButton aria-label="menu">
                    <MenuIcon/>
                </IconButton>

            <Router>

            <Link to="/">   
            <Typography>
                    Gbhss Malal
            </Typography>  
            </Link>      

            <Link to="/Admission">
                <Button> Admissions </Button>
            </Link>
            </Router>

            <Link to="/Results">
                <Button> Result </Button>
            </Link>

            </Toolbar>
            </Appbar>
        </div>
    )
}

export default Header;