import { makeStyles } from "@material-ui/core/styles"
import '../App.css'
import bg from "./img/homepg/back.jpg"

//const bg=require('../styles/img/bg2.jpg') ;
//const image1= require('./img/self1.png');
//const image= require('./img/bg.jpg');

const font =  "'Mulish', sans-serif";

const useStyles=makeStyles(theme=>({ 

 font:{
    fontFamily: font,
 },

root:{
    width:'100%',
   // height: '700px',
   // padding:"0",
    margin:"0",
   // backgroundImage:`url(${bg})`,
   // opacity:'0.1',
    //backgroundRepeat:'no-repeat',
   // backgroundSize:'contain',
},

main:{
   
    backgroundRepeat: "no-repeat",
    backgroundSize:'cover',
    //backgroundImage:`url(${bg})`,
   // opacity:'0.8'
},

grid1:{
    height:'500px',
    //width:"50%",
    //marginTop: theme.spacing.unit * 4,
    display: "flex",
    flexDirection: "column",
    justifyContent:"center",
    alignItems: "center",
   // margin: theme.spacing.unit * 2,
   // color:'blue',
   // opacity:'0.8'
    //backgroundColor: "grey",
},
grid2:{
    height:'500px',
    //width:"50%",
   // display:'flex',
    //flexDirection:'cloumn',
    //opacity:'0.8',
    justifyContent:'right',
    alignItems:'right',
   // animation : 'spin',
  //  padding: '10px',
    //backgroundColor: "grey",
   // backgroundImage:`url(${image})`,
  //  backgroundRepeat:'no-repeat',
   // backgroundSize:'contain',
},

grid3:{
    height:'650px',
   // backgroundColor:'inherit',
    color:'PowderBlue',
    display:"flex",
    flexDirection:"row",
    margin:"0"
   // padding: theme.spacing.unit * 4
},
grid4:{
    height:'300px',
    backgroundColor:'grey',
   // padding: theme.spacing.unit * 2
},

gridAdm:{
    height:'50px',
    //width:"50%",
    //marginTop: theme.spacing.unit * 4,
    display: "flex",
    flexDirection: "column",
    justifyContent:"center",
    alignItems: "center",
    margin: theme.spacing.unit * 2,
   // color:'blue',
   // opacity:'0.8'
    //backgroundColor: "grey",
},
heading:{
    color:'DarkOrange',
    fontSize: theme.typography.pxToRem(25),
    fontWeight: theme.typography.fontWeightRegular,
},

expansion1:{
    display:'flex',
    flexDirection:'column',
    height:'300px',
    color:'PowderBlue'
},
expansion2:{
    display:'fiex',
    justifyContent:"center",
   // backgroundImage:`url(${image1})`,
    backgroundSize:'cover',
    height:'280px',
   paddingRight:'30px',
   
},

expansion3:{
    display:'flex',
    flexDirection:'column',
    height:'300px',
    color:'PowderBlue'
},

button:{
    background: 'linear-gradient(45deg, #306921 30%, #47D331 90%)',
    '&:hover':{ color:'green' , variant:'outlined', background:"inherit" }
},
paper:{
     //marginTop: theme.spacing.unit * 2,
     display: "flex",
     flexDirection: "column",
     alignItems: "left",
     justifyContent:'flex-start',
     //spacing:"22px",
     margin: theme.spacing.unit * 0,
     //padding: "100px",
     backgroundColor:'grey',
    // spacing : "52px",
    // padding: theme.spacing.unit * 8
}, 

Contactpaper:{
    //marginTop: theme.spacing.unit * 4,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    //margin: theme.spacing.unit * 2,
    //padding: "100px",
    //spacing:'20px',
   // backgroundColor:'grey'
   height:'500px',
    padding: theme.spacing.unit * 2
}, 

container2:{
    marginTop: theme.spacing.unit *6,
},


g3left:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'center',  
},
g3mid:{
    display:'flex',
    flexDirection:'column',
    height:'500px',
},

g3right:{
    display:'flex',
    flexDirection:'column',
},
g3expRight:{
    display:'flex',
    flexDirection:'column',
    padding:'50px'
},
socialContainer:{
    height:'100px',
    display:'flex',
    //padding: '25px',
    justifyContent:'center',
    alignItems: "center",
},
insta:{
    color:'purple' ,
    padding:'10px',
    '&:hover':{ transform:'translateY(-2px)',
    color:'RosyBrown' },
},
twitter:{
    color:"#49a1eb" ,
    padding:'10px',
    '&:hover':{ transform:'translateY(-2px)',
    color:'RosyBrown' },
},
fb:{
    color: '#4968ad',
    padding:'10px',
    '&:hover':{ transform:'translateY(-2px)',
    color:'RosyBrown' },
},
Linkdin:{
    color:"#49a1fe" ,
    padding:'10px',
    '&:hover':{ transform:'translateY(-2px)',
    color:'RosyBrown' },
},

}))

export default useStyles;