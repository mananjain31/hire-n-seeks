import {  Close, Filter1Outlined, Filter6Outlined, FilterList, MenuOutlined } from '@mui/icons-material'
import {  IconButton, Modal, TextField } from '@mui/material'
import React from 'react'
import SkillsInput from '../userprofilepage/SkillsInput'




const Filters = ({onClose, filters, filtersDispatch, clearFilters}) => {

  // console.log(filters);
  return (
    <div className='bg-purple-rgba px-12 py-6 flex flex-col gap-4 items-start h-fit sticky top-24'>
        <h1 className='text-xl font-bold flex 100 w-full justify-between items-center'>
            Filters 
            <IconButton className='mobile-only' onClick={onClose}> <Close/> </IconButton>   
        </h1>    
        <div className='flex flex-col gap-3'>
          <TextField name="location" label="Location" variant="outlined" value={filters.location} onChange={filtersDispatch}/>
          <SkillsInput userSkills = {filters.skills} formDataDispatch={filtersDispatch} name="skills"/>
        </div>


        <button className="text-primary font-bold" onClick={clearFilters}>Clear All</button>
    </div>
  )
}


export const FiltersForMobile = ({filters, filtersDispatch, clearFilters}) => {
  
  const [modalOpen, setModalOpen] = React.useState(false);
  const closeModal = () => setModalOpen(false);
  
  return (
    <div className="mobile-only sticky top-24">
      {
        !modalOpen 
        ? 
        <div
          onClick={() => setModalOpen(true)} 
          className='bg-purple-100 hover:bg-purple-50 border-2 border-black transition-all gap-2 cursor-pointer px-6 py-4 flex items-start h-fit'>
            <FilterList/> <h1 className='text-xl font-bold'>Filters </h1>
        </div>
        :
        <Modal open onClose={closeModal} >
          <div className="page-section">
            <div className="bg-purple-100">
              <Filters onClose = {closeModal} filters={filters} filtersDispatch={filtersDispatch} clearFilters={clearFilters}/>
            </div>
          </div>
        </Modal>
      }
    </div>
  )
}

export default Filters