/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import useStyles from '../../styles/colors';
import {withFormik, Field, Form, validateYupSchema, yupToFormErrors} from 'formik';
import {Input, Dialog, DialogTitle, DialogContent, DialogActions, Slide, Button, Grid, Typography} from "@material-ui/core";
import * as Yup from 'yup';
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

const Transition=(props)=>{
    return <Slide Transition="up"{...props}/>
}


const R_MUTATION = gql`
    mutation 
        ($name : String!, $Fname : String!, $rollNo : Int!,  $Clas : Int!, $marks : Int!, $year: Int!){
        addStudent(name : $name, Fname:$Fname, clas:{Clas : $Clas}, marks : $marks, rollNo : $rollNo, Year:{year: $year} ){
            students{
            name
            Fname
            clas {Clas}
            marks
            rollNo
            Year {year}     
        }}}
    `;

const App=({values, errors, touched,newStudent,setOpen, open,handleSubmit})=>{
    const classes= useStyles();
    const handleClose=()=>{
        setOpen(false);
    };
    return(
        <div>
        <div>
        <Grid container  >
            <Grid item xs={6} className={classes.gridAdm}>
             
                <Typography variant="h5">
                    Its all About <strong className='brand-name'>you</strong> and <strong className='brand-name'>us</strong>
                </Typography>

                <Grid item xs={2} styles={{justifyContent:"center"}}>

                <Button  color="primary" variant="contained" className={classes.button} size="small">
                    Get started
                </Button>
                </Grid>

            </Grid>
        </Grid>
        </div>
  
        <div className={classes.g3expRight} >
            <Form onSubmit={handleSubmit} >
                <div styles={{paddingTop: "22px"}}>
                    {touched.name && errors.name && <p> Enter Name </p>} 
                    <Field as={Input} type="name" name="name" placeholder="Student name"/>
                </div>
                <div styles={{paddingTop: "22px"}}>
                    {touched.name && errors.name && <p> Enter Name </p>} 
                    <Field as={Input} type="Fname" name="Fname" placeholder="Father name"/>
                </div>
                <div>
                    {touched.Clas && errors.Clas && <p> Enter class </p>}
                    <Field as={Input} type="Clas" name="Clas" placeholder="Class"/>
                </div>
                <div>
                    <Field as={Input} type="marks" name="marks" placeholder="marks"/>
                </div>
                <div>
                    <Field as={Input} type="year" name="year" placeholder="year"/>
                </div>
                <div>
                    <Field as={Input} type="rollNo" name="rollNo" placeholder="Roll no."/>
                </div>

                <div>
                    <Button type='submit' >Submit</Button>
                </div>
                <div>
                    <Dialog open={open} onClose={handleClose} TransitionComponent={Transition}>
                        <DialogTitle>
                            New student added
                        </DialogTitle>
                        <DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>
                                Done
                                </Button>
                            </DialogActions>
                        </DialogContent>
                    </Dialog>
                
                </div>
            </Form>
        </div>
        </div>

    );

}

const FormikApp= withFormik({
    mapPropsToValues({name, Fname, rollNo, Clas, year, marks}){
        return{
            name : name || "",
            Fname : Fname || "",
            rollNo : rollNo || "",
            Clas: Clas|| "",
            year : year || "",
            marks: marks|| "",
        };
    },

    validationSchema: Yup.object().shape({
        name: Yup.string().required(),
        Class: Yup.number().min(1,"Enter class as integer"),
        year: Yup.date().required(),
        marks: Yup.number().min(4, "Need at least 4 characters.")
    }),
 
    handleSubmit(values,{props, setStatus, setSubmitting}){ 
      
        props.addStudent({
            variables : values
        })

        setTimeout(()=>{
            setStatus('sent')
            setSubmitting(false)
            console.log('succesfully submitted')
        },1000)
    }
   
})(App);


const Results=(props)=>{
    const [open, setOpen]= useState(false)
    const [addStudent, {loading, error,data}] = useMutation(R_MUTATION, {
        onCompleted(){
            setOpen(true)
            console.log(data)
        },
        onError(err){
            console.error(err)
        }
    })
    if (loading) return <p>loading...</p>
    if (error) return <p>message={error.message}</p>
    
    return (
        <FormikApp addStudent={addStudent} open={open} setOpen={open}/>
         )
}

export default Results;