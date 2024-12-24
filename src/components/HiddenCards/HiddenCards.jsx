import React, { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useSelector,useDispatch } from 'react-redux';
import {setShowCards} from '../../features/Todo/TodoSlice'
import { useEffect } from 'react';
import "./hiddencard.css"

// const icon = (
//   <Paper sx={{ m: 1, width: 100, height: 100 }} elevation={4}>
//     <svg> 
//       <Box
//         component="polygon"
//         points="0,100 50,00, 100,100"
//         sx={(theme) => ({
//           fill: theme.palette.common.white,
//           stroke: theme.palette.divider,
//           strokeWidth: 1,
//         })}
//       />
//     </svg>
//   </Paper>
// );

export default function HiddenCards() {
  const setRef = useRef(null);
  const setRef2 = useRef(null); 
  const setRef3 = useRef(null);  
  const setBoxRef = useRef(null); 
  const dispatch = useDispatch(); 
   
    useEffect(()=>{
    dispatch(setShowCards({setRef,setRef2,setRef3,setBoxRef})); 
  })  

  return ( 
      <Box className="HiddenCards" sx={{zIndex: 5,display: 'none', position: "absolute"}} ref = {setBoxRef} onClick={()=>{
        setBoxRef.current.style.display = "none";
      }}

      onMouseLeave={()=>{
        setBoxRef.current.style.display = "none";
      }}
      
      > 
        <div className='grow grow1'  ref={setRef}><div className="growin">ak</div></div>
        <div className='grow grow2' ref={setRef2}><div className="growin">ak</div></div>
        <div className='grow grow3' ref={setRef3}><div className="growin">ak</div></div>
      </Box>
  );
}