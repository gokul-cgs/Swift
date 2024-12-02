import React, { useEffect } from 'react'
import Header from './Header'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { LinearProgress } from '@mui/material'
import SideBarLayout from './SideBarLayout'

const Layout = (props) => {
    const navigate = useNavigate();
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

    useEffect(() => {

        if (!isAuthenticated) {
            navigate('/login'); // Redirect to login if not authenticated
        }
    }, [navigate]);

    return (
        <>
            {/* <Header></Header> */}
            {/* <main style={{height: '80vh'}}>
                { isAuthenticated ? <Outlet></Outlet> : <Navigate to="/login" /> }
            </main> */}
            <main style={{ height: '80vh' }} className='!relative'>
                {isAuthenticated ? <SideBarLayout></SideBarLayout> : <Navigate to="/login" />}
            </main>
        </>
    )
}

export default Layout