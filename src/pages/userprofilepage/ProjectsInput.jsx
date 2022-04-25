import { Accordion, AccordionDetails, AccordionSummary, Button, IconButton, TextField, Typography } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Add, Delete } from '@mui/icons-material';

const ProjectsInput = () => {

  return (
    <>
        <div className='my-2 text-primary'>
            <Typography variant='h6' align='left'>Projects</Typography>
        </div>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            <div className='w-full flex justify-between items-center'>
                <Typography>Project 1</Typography>
                <IconButton onClick={()=>alert("delete clicked")}>
                    <Delete/>
                </IconButton>
            </div>
        </AccordionSummary>
        <AccordionDetails>
            <div className='mb-4'>
                <TextField fullWidth label="Project Name" />
            </div>
            <TextField rows={4} fullWidth multiline label="Project Description" />
        </AccordionDetails>
      </Accordion>
      <div className='my-2 flex justify-start'>
        <Button endIcon={<Add/>} variant='outlined'>
            Add Project
        </Button>
      </div>
    </>
  )
}

export default ProjectsInput