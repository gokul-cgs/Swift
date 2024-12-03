import React from 'react'
import DynamicDataForm from './DynamicDataForm';
import { Icon, Card, CardContent, CardActions, Typography, Button, List, ListItem, ListItemText } from '@mui/material';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const navigateDDF = () => {
    navigate('/dynamic-data-form')
  }
  return (
    <div>
      <h3>Dashboard</h3>
      <div className='mt-10 ms-10'>
        <Card onClick={
          navigateDDF
        } sx={{ cursor: 'pointer', maxWidth: 345, marginTop: 2 }}>
          <CardContent>
            <Typography variant="h6" component="div">Dynamic Data Form</Typography>
            <Icon sx={{ display: 'block', margin: '20px auto', fontSize: 40 }}>
              <InsertDriveFileIcon />
            </Icon>
          </CardContent>
        </Card>
      </div>
    </div>

  )
}

export default Dashboard