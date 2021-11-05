import React,{useState,useEffect} from 'react'
import { Container } from 'semantic-ui-react';
import firebase from '../../fireBase'
import "./styles.scss"
export const Appoinments = () => {
    //const AppoinemtRef = firebase.database().ref("doctorEnquire");

  //  const [appoinments , setAppoinments] =useState([])
    const [loading,setLoading]= useState(false)
    useEffect(()=>{
       // AppoinemtRef
       console.log("called on init")
       
    },[])

    if (loading){
        return <h1>Loading</h1>
    }

    return (<Container className="dash-board">
        
            </Container>
    )
}
