import React , {useState} from 'react';
import CheckIcon from '@mui/icons-material/Check';
import './Colors.css'

export default function Colors() {

  const [databaseColors,SetDatabaseColors] =  useState<{[key: string]: any}>(['black','white','lightblue','beige','red']);  
  const [Color, setColor] =  useState<string | null>('white');


  const handleChangeColor = (col:string) => (
    setColor(col)
  )  
  

  return (
    <>
          <div className='colors'>
                <ul className="colors-list">
                    {
                                    databaseColors.map((col:string,i:string) => {
                                        return (
                                               <div key={i} >
                                              <li style={{backgroundColor:col}}   onClick={()=>handleChangeColor(col)}>
                                                  
                                                       <div>
                                                            {
                                                            col == Color ? <CheckIcon style={{color:'grey'}}/> : ''
                                                            }
                                                         
                                                       </div>
                                               </li>
                                               {col}
                                            </div>
                                        )
                                        
                                 })
                    }  
                </ul>
          </div>
    </>
  );
}