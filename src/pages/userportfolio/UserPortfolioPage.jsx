import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import "./UserPortfolioPage.scss";
import Navbar from '../../shared/navbar/Navbar';
import { useParams } from 'react-router-dom';
import { ArrowRight, DateRangeOutlined, Email, GitHub, InsertLink, LinkedIn, LocationCity, Phone, Pin } from '@mui/icons-material';
import { Chip, Divider } from '@mui/material';
import UserPortfolioCard from '../../shared/user-portfolio-card/UserPortfolioCard';


export const UserPortfolioPage = () => {
    const user = useSelector(state => state.user);
    const { slug } = useParams();
    console.log(user)
    return (
    <div className='jobs-page'>
        <Navbar />

        <section className='page-section flex flex-col items-center'>    
            <UserPortfolioCard user={user}/>
        </section>
    </div>
    )
}
