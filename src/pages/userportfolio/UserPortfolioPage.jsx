import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import "./UserPortfolioPage.scss";
import Navbar from '../../shared/navbar/Navbar';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { ArrowRight, DateRangeOutlined, Email, GitHub, InsertLink, LinkedIn, LocationCity, Phone, Pin } from '@mui/icons-material';
import { Chip, Divider, LinearProgress } from '@mui/material';
import UserPortfolioCard from '../../shared/user-portfolio-card/UserPortfolioCard';
import arrayFromString from '../../utils/arrayFromString';


export const UserPortfolioPage = () => {
    const user = useSelector(state => state.user);
    const { slug } = useParams();
    const navigate = useNavigate();
    if ( !user.is_recruiter && slug !== user.userName ) navigate("/jobs");
    const [portfolioUser, setPortfolioUser] = React.useState(null);
    React.useEffect(()=>{
        fetch("/user/"+slug)
        .then(resp => resp.json())
        .then(data => {
            if(data.success){
                setPortfolioUser({
                    ...data.data,
                    skills: arrayFromString(data.data.skills),
                });
            } else {
                navigate("/jobs");
            }
        })
    }, [])

    return (
    <div className='jobs-page'>
        <Navbar />

        <section className='page-section flex flex-col items-center'>    
            {
                portfolioUser ?    <UserPortfolioCard user={portfolioUser}/>
                : <LinearProgress className='w-full'/>
            }
        </section>
    </div>
    )
}
