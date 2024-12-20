import React, { useEffect } from 'react'
import Header from './Header'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { LinearProgress } from '@mui/material'
import SideBarLayout from './SideBarLayout'
import { userData } from '../utils/common'

const Layout = (props) => {
    const navigate = useNavigate();
    const userdata = userData()

    useEffect(() => {

        if (!userdata) {
            navigate('/login');
        }
    }, [navigate]);

    return (
        <>
            {/* <Header></Header> */}
            {/* <main style={{height: '80vh'}}>
                { isAuthenticated ? <Outlet></Outlet> : <Navigate to="/login" /> }
            </main> */}
            <main style={{ height: '80vh' }} className='!relative'>
                {userdata ? <SideBarLayout></SideBarLayout> : <Navigate to="/login" />}
            </main>
        </>
    )
}

export default Layout