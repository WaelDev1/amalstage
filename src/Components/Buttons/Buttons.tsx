import React, { useState } from 'react'
import './Buttons.css' 
import MenuIcon from "@mui/icons-material/Menu"; 
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
 
const Buttons = () => {

    const [colors , setColors] = useState(['black' , 'white' , 'blue' , 'beige' , 'red'])
    const [selectedButton , setSelectedButton] = useState('black')
 
  const handleClick = (e: any) => {
       console.log(e)
  }
  return (
    <div className="btn-wrapper">
        {
           colors.map((color,i) => {
               return(
                   <div >
                    <div onClick={(e) => handleClick(e.currentTarget)} className='myBtn' style={{backgroundColor:color}}></div>
                    {color}
                    {color === selectedButton ?  <AcUnitIcon /> : ''}
                  </div>
               )
           })
        }
    </div>
  )
}

export default Buttons