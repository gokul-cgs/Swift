import React from 'react'
import DynamicDataForm from './DynamicDataForm';
import { Icon, Card, CardContent, CardActions, Typography, Button, List, ListItem, ListItemText } from '@mui/material';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { Link, useNavigate } from 'react-router-dom';

const Menus = [
    { title: 'Dynamic Data Form', route: '/dynamic_data_form', icon: <InsertDriveFileIcon /> },
    { title: 'Rejection Reason', route: '/rejection_reason', icon: <InsertDriveFileIcon /> },
    { title: 'Master Employees', route: '/employee_list', icon: <InsertDriveFileIcon /> },
    { title: 'Master RM', route: '/rm_list', icon: <InsertDriveFileIcon /> },
    { title: 'Master Branch', route: '/branch_list', icon: <InsertDriveFileIcon /> },
]

const Admin = () => {
    const navigate = useNavigate();
    const navigateFnuc = (route) => {
        navigate(route)
    }

    return (
        <div>
            <div className='mb-10'>
                <Typography variant="h5" component="div" className='!mt-2'>Master Configuration</Typography>
            </div>
            <div className='grid grid-cols-4 gap-8'>
                {
                    Menus.map(menu => {
                        return <div className='text-center'>
                            <Card onClick={() => navigateFnuc(menu?.route)} className='cursor-pointer !drop-shadow-lg'>
                                <CardContent>
                                    <Icon sx={{ display: 'block', margin: '20px auto', fontSize: 40 }}>
                                        {menu?.icon}
                                    </Icon>
                                </CardContent>
                            </Card>
                            <Typography variant="h6" component="div" className='!mt-2'>{menu?.title}</Typography>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Admin