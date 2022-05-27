import Image from "next/image";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



export default function Card(props:any){
  return(
    <div style={{display: 'flex', width: '250px', flexDirection: 'column',  backgroundColor: '#565656', borderRadius:'20px', boxShadow:'7px 3px 15px 0px rgba(0,0,0,0.3)'}}> 
    <div style={{backgroundColor:'#242424', display:'flex', alignItems: 'center', justifyContent: 'center', width:'100%'}}>
        <Image src={props.image} height={190} width={190}/>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding:'10px', fontSize:'25px'}}>{props.title}</div>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding:'10px', marginBottom:'10px', fontSize:'11px', width:'100%',textAlign: 'center' , justifyContent: 'center'}}>{props.description}</div>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding:'10px',  fontSize:'25px', color:'yellow'}}>R${props.price} <Button sx={{backgroundColor:'#212121', marginTop:'20px'}} variant="contained">Adicionar ao Carrinho</Button></div>
      
    </div>
  )
}