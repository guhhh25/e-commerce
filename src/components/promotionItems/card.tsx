import Image from "next/image";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



export default function Card(props:any){
  return(
    <div style={{display: 'flex', flexDirection: 'column',  backgroundColor: '#565656', borderRadius:'20px', boxShadow:'7px 3px 15px 0px rgba(0,0,0,1)'}}> 
    <div style={{backgroundColor:'#242424', display:'flex', alignItems: 'center', justifyContent: 'center', width:'100%'}}>
        <Image src={props.image} height={190} width={190}/>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding:'20px', fontSize:'30px'}}>{props.title}</div>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding:'20px', fontSize:'20px'}}>{props.description}</div>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding:'20px', fontSize:'30px', color:'yellow'}}>{props.price} <Button sx={{backgroundColor:'green'}} variant="contained">Contained</Button></div>
      
    </div>
  )
}