import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
 
type DescriptionProps = {
    desc: string; 
  }; 
  
export default function Description({ desc }: DescriptionProps) {
  return (
    <div>
      <Accordion style={{width:'600px',boxShadow:"none" ,padding:"0" ,margin:"0"}}>
        <AccordionSummary
        
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header" 
        >
          <h3>Description</h3> 
        </AccordionSummary>
        <AccordionDetails  >
          <Typography style={{textAlign:'left' }}>
              {desc}
          </Typography>
        </AccordionDetails>
      </Accordion> 
    </div>
  );
}
