import { DateRangeOutlined, Email, GitHub, InsertLink, LinkedIn, LocationCity, Phone } from '@mui/icons-material'
import { Chip } from '@mui/material'
import React from 'react'

const UserPortfolioCard = ({user}) => {
  return (
    <main className='bg-white  rounded-md  shadow-2xl  p-5 lg:w-[70%] '>
    <h1 className='text-4xl font-bold uppercase tracking-wider drop-shadow-md'>
        <span className='text'>{user.firstName}</span>
        <span className='text-slate-400'>{user.lastName}</span>
    </h1>

    <h2 className='font-bold text-xl'>{user.userName}</h2>


    <div className='flex flex-col items-center'>
        <p className='text-slate-500 my-2 '>{user.bio}</p>
    </div>

    <ul className='flex justify-center gap-2 my-2'>
        <li><a href={user.linkGithub} target="_blank"><GitHub/></a></li>
        <li><a href={user.linkGithub} target="_blank"><LinkedIn/></a></li>
        <li><a href={user.linkGithub} target="_blank"><InsertLink/></a></li>
    </ul>

    <div className='flex flex-col gap-2 items-center'>
        <div className='flex py-2 justify-center gap-2 flex-wrap '>
            {/* <span className='text-slate-500'>{user.skills.join(', ')}</span> */}
            {
                user.skills.map(skill => {
                    return (
                        <Chip label={skill} key={skill}/>
                    )
                })
            }
        </div>
    </div>

    <ul className='flex justify-center items-center gap-2 mt-2 py-2 bg-slate-400 text-white flex-wrap text-xs'>
        <li className='flex justify-center items-center gap-1'>
            <Email/>
            {user.email}
        </li>
        <li className='flex justify-center items-center gap-1'>
            <Phone/>
            {user.contactNumber}
        </li>
        <li className='flex justify-center items-center gap-1'>
            <LocationCity/>
            {user.city +", "+ user.country}
        </li>
        <li className='flex justify-center items-center gap-1' title={user.address}>
            <DateRangeOutlined/>
            {user.dob}
        </li>
    </ul>
</main>
  )
}

export default UserPortfolioCard